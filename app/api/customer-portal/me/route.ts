import { NextResponse } from "next/server";
import {
  PORTAL_COOKIE,
  portalRequest,
} from "../../../../lib/customerPortalServer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const response = await portalRequest("/v1/customer-portal/me");

  if (!response) {
    return Response.json({ detail: "PORTAL_SESSION_REQUIRED" }, { status: 401 });
  }

  const body = await response.text();
  const outgoing = new NextResponse(body, {
    status: response.status,
    headers: {
      "content-type":
        response.headers.get("content-type") ?? "application/json",
      "cache-control": "no-store",
    },
  });

  if (response.status === 401 || response.status === 403) {
    outgoing.cookies.set(PORTAL_COOKIE, "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });
  }

  return outgoing;
}
