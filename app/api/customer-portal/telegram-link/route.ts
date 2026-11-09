import { portalRequest } from "../../../../lib/customerPortalServer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const response = await portalRequest("/v1/customer-portal/telegram-link", {
    method: "POST",
  });

  if (!response) {
    return Response.json({ detail: "PORTAL_SESSION_REQUIRED" }, { status: 401 });
  }

  return new Response(await response.text(), {
    status: response.status,
    headers: {
      "content-type":
        response.headers.get("content-type") ?? "application/json",
      "cache-control": "no-store",
    },
  });
}
