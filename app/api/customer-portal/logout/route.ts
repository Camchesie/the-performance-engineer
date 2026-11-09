import { NextResponse } from "next/server";
import {
  PORTAL_COOKIE,
  portalRequest,
} from "../../../../lib/customerPortalServer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const response = await portalRequest("/v1/customer-portal/logout", {
    method: "POST",
  });

  const redirect = NextResponse.redirect(new URL("/customer", request.url), 303);
  redirect.cookies.set(PORTAL_COOKIE, "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  if (response && !response.ok) {
    redirect.headers.set("x-pete-portal-logout", "remote-failed");
  }

  return redirect;
}
