import { NextResponse } from "next/server";
import {
  GATEWAY_BASE_URL,
  PORTAL_COOKIE,
} from "../../../lib/customerPortalServer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function portalUrl(requestUrl: string, state?: string) {
  const url = new URL("/customer", requestUrl);

  if (state) {
    url.searchParams.set("access", state);
  }

  return url;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token")?.trim();

  if (!token) {
    return NextResponse.redirect(portalUrl(request.url, "invalid"), 303);
  }

  try {
    const response = await fetch(
      `${GATEWAY_BASE_URL}/v1/customer-portal/exchange`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const state = response.status === 410 ? "expired" : "invalid";
      return NextResponse.redirect(portalUrl(request.url, state), 303);
    }

    const payload = (await response.json()) as {
      session_token?: unknown;
      expires_epoch?: unknown;
    };

    if (
      typeof payload.session_token !== "string" ||
      payload.session_token.length < 24
    ) {
      return NextResponse.redirect(portalUrl(request.url, "invalid"), 303);
    }

    const expires =
      typeof payload.expires_epoch === "number"
        ? new Date(payload.expires_epoch * 1000)
        : new Date(Date.now() + 12 * 60 * 60 * 1000);

    const redirect = NextResponse.redirect(portalUrl(request.url), 303);
    redirect.cookies.set(PORTAL_COOKIE, payload.session_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      expires,
    });

    return redirect;
  } catch {
    return NextResponse.redirect(portalUrl(request.url, "unavailable"), 303);
  }
}
