import { timingSafeEqual } from "node:crypto";
import { reconcileLeadsFromBlob } from "@/lib/peteLeadsSheet";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  // Only Vercel Cron (configured with a server-side CRON_SECRET) can invoke.
  const secret = process.env.CRON_SECRET;
  if (!secret) return new Response("Cron is not configured", { status: 503 });
  const expected = Buffer.from(`Bearer ${secret}`);
  const incoming = Buffer.from(request.headers.get("authorization") ?? "");
  if (expected.length !== incoming.length || !timingSafeEqual(expected, incoming)) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const result = await reconcileLeadsFromBlob();
    console.info("PETE_LEADS_RECONCILED", JSON.stringify(result));
    return Response.json({ ok: true, ...result });
  } catch (error) {
    // Do not log sensitive lead details or customer free-text.
    console.error("PETE_LEADS_RECONCILE_FAILED", error instanceof Error ? error.message : "unknown");
    return Response.json({ ok: false, error: "Lead reconciliation failed" }, { status: 500 });
  }
}
