/**
 * Server-only, optional lead register mirror.
 *
 * Private Vercel Blob remains the source of truth. Google Sheets is a
 * convenience register for lead triage; it must never block lead capture.
 *
 * Vercel Production env vars:
 * PETE_LEADS_SHEET_ID
 * PETE_GOOGLE_SERVICE_ACCOUNT_EMAIL
 * PETE_GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
 *
 * Share the Google Sheet directly with that service-account email
 * as Editor. Do not expose the key in NEXT_PUBLIC_ variables.
 */
import { createSign } from "node:crypto";
import { get, list } from "@vercel/blob";

type Lead = {
  id: string;
  lead_type: string;
  name: string;
  company: string;
  email: string;
  source: string | null;
  created_at: string;
};

const spreadsheetRange = "'Leads'!A:L";
const leadIdsRange = "'Leads'!B2:B";
const googleTokenEndpoint = "https://oauth2.googleapis.com/token";
const scope = "https://www.googleapis.com/auth/spreadsheets";
const tokenLifetimeSeconds = 3300;

function base64url(input: string | Buffer): string {
  return Buffer.from(input).toString("base64url");
}

async function googleToken(email: string, key: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(JSON.stringify({
    iss: email, scope, aud: googleTokenEndpoint,
    iat: now, exp: now + tokenLifetimeSeconds,
  }));
  const body = `${header}.${claims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(body);
  signer.end();
  const assertion = `${body}.${signer.sign(key).toString("base64url")}`;

  const response = await fetch(googleTokenEndpoint, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Google auth HTTP ${response.status}`);
  const result = await response.json() as { access_token?: string };
  if (!result.access_token) throw new Error("Google auth response lacked access token");
  return result.access_token;
}

async function sheetsRequest(
  sheetId: string,
  token: string,
  range: string,
  method: "GET" | "POST",
  payload?: unknown,
): Promise<{ values?: string[][] }> {
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}/values/${encodeURIComponent(range)}`,
  );
  if (method === "POST") {
    url.searchParams.set("valueInputOption", "RAW");
    url.searchParams.set("insertDataOption", "INSERT_ROWS");
  }
  const response = await fetch(
    method === "POST" ? `${url.toString()}:append` : url.toString(),
    {
      method,
      headers: {
        authorization: `Bearer ${token}`,
        ...(payload ? { "content-type": "application/json" } : {}),
      },
      ...(payload ? { body: JSON.stringify(payload) } : {}),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    },
  );
  if (!response.ok) throw new Error(`Google Sheets HTTP ${response.status}`);
  return await response.json() as { values?: string[][] };
}

export async function mirrorLeadToGoogleSheet(lead: Lead): Promise<"synced" | "skipped"> {
  const sheetId = process.env.PETE_LEADS_SHEET_ID;
  const email = process.env.PETE_GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.PETE_GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!sheetId || !email || !privateKey) return "skipped";

  const token = await googleToken(email, privateKey);
  const current = await sheetsRequest(sheetId, token, leadIdsRange, "GET");
  if ((current.values ?? []).some(row => row[0] === lead.id)) return "skipped";

  // Only the approved fields are written. Do not include phone,
  // consultancy problem description or any other free-text form data.
  const row = [
    lead.created_at,
    lead.id,
    lead.lead_type,
    lead.name,
    lead.company,
    lead.email,
    lead.source ?? "",
    "New",
    "",
    "",
    "",
    new Date().toISOString(),
  ];
  await sheetsRequest(sheetId, token, spreadsheetRange, "POST", { values: [row] });
  return "synced";
}

/**
 * Recover records missed during a Google outage and backfill historic leads.
 * Reads private blobs server-side. Never sends phone/problem text to Sheets.
 * Bound the scan to avoid runaway work on a Hobby Vercel function.
 */
export async function reconcileLeadsFromBlob() {
  const sheetId = process.env.PETE_LEADS_SHEET_ID;
  const email = process.env.PETE_GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.PETE_GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!sheetId || !email || !key) throw new Error("Google Sheets integration is not configured");
  const token = await googleToken(email, key);
  const known = await sheetsRequest(sheetId, token, "'Leads'!B2:B", "GET");
  const existing = new Set((known.values ?? []).map(row => row[0]).filter(Boolean));
  const summary = { scanned: 0, added: 0, existing: 0, invalid: 0, truncated: false };
  let cursor: string | undefined;

  do {
    const page = await list({ prefix: "leads/", limit: 100, ...(cursor ? { cursor } : {}) });
    for (const blob of page.blobs) {
      summary.scanned++;
      const match = blob.pathname.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\.json$/i);
      if (!match) { summary.invalid++; continue; }
      const id = match[1];
      if (existing.has(id)) { summary.existing++; continue; }
      const stored = await get(blob.pathname, { access: "private" });
      if (!stored || stored.statusCode !== 200) throw new Error("Private lead record unavailable: " + id);
      const raw = JSON.parse(await new Response(stored.stream).text()) as Record<string, unknown>;
      if (
        raw.id !== id ||
        !["engineering_pack", "management_pack", "dam_pack", "consultancy"].includes(String(raw.lead_type)) ||
        typeof raw.name !== "string" || typeof raw.email !== "string" ||
        typeof raw.company !== "string" || typeof raw.created_at !== "string"
      ) { summary.invalid++; continue; }
      const row = [
        String(raw.created_at), id, String(raw.lead_type), raw.name, raw.company,
        raw.email, typeof raw.source === "string" ? raw.source : "",
        "New", "", "", "", new Date().toISOString(),
      ];
      await sheetsRequest(sheetId, token, "'Leads'!A:L", "POST", { values: [row] });
      existing.add(id);
      summary.added++;
    }
    if (!page.hasMore) return summary;
    if (!page.cursor || page.cursor === cursor) throw new Error("Blob pagination stalled");
    cursor = page.cursor;
  } while (summary.scanned < 1500);
  summary.truncated = true;
  return summary;
}
