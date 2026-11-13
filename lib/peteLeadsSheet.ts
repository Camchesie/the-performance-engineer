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
