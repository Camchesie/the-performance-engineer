export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CHECKOUT_URL = process.env.PETE_ENGINEERING_RELEASE1_CHECKOUT_URL;

export async function GET(request: Request) {
  if (!CHECKOUT_URL || !CHECKOUT_URL.startsWith("https://")) {
    return Response.redirect(
      new URL("/engineering?checkout=unavailable", request.url),
      303,
    );
  }

  return Response.redirect(CHECKOUT_URL, 303);
}
