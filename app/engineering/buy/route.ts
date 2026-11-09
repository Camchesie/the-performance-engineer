export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CHECKOUT_URL = "https://buy.stripe.com/6oU14p1U8bCe3e10ZOgbm00";

export async function GET() {
  return Response.redirect(CHECKOUT_URL, 303);
}
