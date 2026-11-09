import { createHmac, timingSafeEqual } from "node:crypto";
import { put } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PRODUCT_KEY = "engineering_toolkit_release_1";

function verifyStripeSignature(payload: string, header: string, secret: string) {
  const parts = header.split(",");
  const timestamp = parts.find((part) => part.startsWith("t="))?.slice(2);
  const signatures = parts
    .filter((part) => part.startsWith("v1="))
    .map((part) => part.slice(3));

  if (!timestamp || signatures.length === 0) return false;

  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(age) || age > 300) return false;

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${payload}`)
    .digest("hex");

  const expectedBuffer = Buffer.from(expected, "hex");

  return signatures.some((signature) => {
    try {
      const actualBuffer = Buffer.from(signature, "hex");
      return (
        actualBuffer.length === expectedBuffer.length &&
        timingSafeEqual(actualBuffer, expectedBuffer)
      );
    } catch {
      return false;
    }
  });
}

export async function POST(request: Request) {
  const secret = process.env.STRIPE_ENGINEERING_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  if (!secret || !signature || !verifyStripeSignature(rawBody, signature, secret)) {
    return Response.json({ detail: "INVALID_SIGNATURE" }, { status: 400 });
  }

  const event = JSON.parse(rawBody) as {
    type?: string;
    data?: {
      object?: {
        id?: string;
        payment_status?: string;
        metadata?: Record<string, string>;
        customer_details?: { email?: string | null };
        customer_email?: string | null;
      };
    };
  };

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data?.object;

    if (
      session?.id &&
      session.payment_status === "paid" &&
      session.metadata?.pete_product === PRODUCT_KEY
    ) {
      const entitlement = JSON.stringify({
        product: PRODUCT_KEY,
        session_id: session.id,
        email: session.customer_details?.email ?? session.customer_email ?? null,
        granted_at: new Date().toISOString(),
      });

      await put(
        `entitlements/engineering-r1/${session.id}.json`,
        entitlement,
        {
          access: "private",
          allowOverwrite: true,
          contentType: "application/json",
          cacheControlMaxAge: 60,
        },
      );
    }
  }

  return Response.json({ received: true });
}
