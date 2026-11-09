import { portalRequest } from "../../../../lib/customerPortalServer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const response = await portalRequest("/v1/customer-portal/download");

  if (!response) {
    return Response.json({ detail: "PORTAL_SESSION_REQUIRED" }, { status: 401 });
  }

  if (!response.ok) {
    return new Response(await response.text(), {
      status: response.status,
      headers: {
        "content-type":
          response.headers.get("content-type") ?? "application/json",
        "cache-control": "no-store",
      },
    });
  }

  const headers = new Headers();
  headers.set(
    "content-type",
    response.headers.get("content-type") ?? "application/zip",
  );
  headers.set("cache-control", "no-store, private, max-age=0");
  headers.set("pragma", "no-cache");

  const disposition = response.headers.get("content-disposition");

  if (disposition) {
    headers.set("content-disposition", disposition);
  }

  return new Response(response.body, {
    status: 200,
    headers,
  });
}
