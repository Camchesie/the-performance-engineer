import { put } from "@vercel/blob";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowedLeadTypes = new Set([
  "engineering_pack",
  "management_pack",
  "dam_pack",
  "consultancy",
]);

const redirects: Record<string, string> = {
  engineering_pack: "/free-engineering-pack?submitted=1",
  management_pack: "/management-data/starter-pack?submitted=1",
  dam_pack: "/management-data/digital-asset-starter-pack?submitted=1",
  consultancy: "/consultancy/thanks",
};

function clean(value: FormDataEntryValue | null, max = 200) {
  return String(value ?? "").trim().slice(0, max);
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function POST(request: Request) {
  const form = await request.formData();

  const leadType = clean(form.get("lead_type"), 50);
  const name = clean(form.get("name"), 120);
  const email = clean(form.get("email"), 254).toLowerCase();
  const company = clean(form.get("company"), 160);
  const role = clean(form.get("role"), 160);
  const phone = clean(form.get("phone"), 80);
  const area = clean(form.get("area"), 100);
  const problem = clean(form.get("problem"), 3000);
  const source = clean(form.get("source"), 200);
  const marketingConsent = form.get("marketing_consent") === "yes";
  const honeypot = clean(form.get("website"), 200);

  const fallback = new URL("/", request.url);

  if (!allowedLeadTypes.has(leadType)) {
    return Response.redirect(fallback, 303);
  }

  const destination = new URL(redirects[leadType], request.url);

  // Silent success for obvious bots so the form cannot be used to probe validation.
  if (honeypot) {
    return Response.redirect(destination, 303);
  }

  if (!name || !company || !validEmail(email)) {
    destination.searchParams.set("error", "1");
    destination.searchParams.delete("submitted");
    return Response.redirect(destination, 303);
  }

  if (leadType === "consultancy" && !problem) {
    destination.searchParams.set("error", "1");
    return Response.redirect(destination, 303);
  }

  const now = new Date();
  const id = randomUUID();
  const record = {
    id,
    lead_type: leadType,
    name,
    email,
    company,
    role: role || null,
    phone: phone || null,
    area: area || null,
    problem: problem || null,
    marketing_consent: marketingConsent,
    source: source || null,
    privacy_notice_version: "2026-11-11",
    created_at: now.toISOString(),
  };

  const month = now.toISOString().slice(0, 7);
  await put(
    `leads/${month}/${now.getTime()}-${id}.json`,
    JSON.stringify(record),
    {
      access: "private",
      allowOverwrite: false,
      contentType: "application/json",
      cacheControlMaxAge: 60,
    },
  );

  return Response.redirect(destination, 303);
}
