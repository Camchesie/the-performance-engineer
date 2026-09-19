export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CHECKOUT_ENDPOINT =
  "https://gateway.theperformanceengineer.uk/v1/billing/stripe/checkout";

function fallbackUrl(requestUrl: string, reason: string) {
  const url = new URL("/trade-gateway", requestUrl);
  url.searchParams.set("checkout", reason);
  return url;
}

export async function GET(request: Request) {
  try {
    const response = await fetch(CHECKOUT_ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({}),
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.redirect(
        fallbackUrl(request.url, "unavailable"),
        303,
      );
    }

    const payload = (await response.json()) as {
      checkout_url?: unknown;
    };

    if (
      typeof payload.checkout_url !== "string" ||
      !payload.checkout_url.startsWith("https://")
    ) {
      return Response.redirect(
        fallbackUrl(request.url, "invalid-response"),
        303,
      );
    }

    return Response.redirect(payload.checkout_url, 303);
  } catch {
    return Response.redirect(
      fallbackUrl(request.url, "unavailable"),
      303,
    );
  }
}
