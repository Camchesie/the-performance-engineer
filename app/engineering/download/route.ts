import { createDecipheriv } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FILE_NAME = "PETE_Engineering_Toolkit_Release_1.zip";
const AAD = Buffer.from("PETE-ENGINEERING-RELEASE-1");

async function hasEntitlement(sessionId: string) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  if (!url || !token) throw new Error("KV_NOT_CONFIGURED");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(["GET", `pete:engineering:r1:${sessionId}`]),
    cache: "no-store",
  });

  if (!response.ok) throw new Error("KV_LOOKUP_FAILED");

  const payload = (await response.json()) as { result?: string | null };
  return typeof payload.result === "string" && payload.result.length > 0;
}

async function decryptToolkit() {
  const keyB64 = process.env.PETE_ENGINEERING_RELEASE1_KEY_B64;
  if (!keyB64) throw new Error("DOWNLOAD_KEY_NOT_CONFIGURED");

  const encrypted = await readFile(
    path.join(process.cwd(), "private-assets", "PETE_Engineering_Toolkit_Release_1.enc"),
  );

  if (encrypted.subarray(0, 4).toString("ascii") !== "PTE1") {
    throw new Error("INVALID_PAYLOAD");
  }

  const nonce = encrypted.subarray(4, 16);
  const combined = encrypted.subarray(16);
  const tag = combined.subarray(combined.length - 16);
  const ciphertext = combined.subarray(0, combined.length - 16);

  const decipher = createDecipheriv(
    "aes-256-gcm",
    Buffer.from(keyB64, "base64"),
    nonce,
  );
  decipher.setAAD(AAD);
  decipher.setAuthTag(tag);

  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}

export async function GET(request: Request) {
  const sessionId = new URL(request.url).searchParams.get("session_id");

  if (!sessionId || !/^cs_(?:live|test)_[A-Za-z0-9]+$/.test(sessionId)) {
    return Response.json({ detail: "INVALID_SESSION" }, { status: 400 });
  }

  try {
    if (!(await hasEntitlement(sessionId))) {
      return Response.json(
        {
          detail: "PAYMENT_NOT_VERIFIED",
          message:
            "Stripe confirmation is still processing, or this session does not own Release 1.",
        },
        { status: 403 },
      );
    }

    const file = await decryptToolkit();

    return new Response(file, {
      status: 200,
      headers: {
        "content-type": "application/zip",
        "content-disposition": `attachment; filename="${FILE_NAME}"`,
        "cache-control": "private, no-store, max-age=0",
        pragma: "no-cache",
        "x-content-type-options": "nosniff",
      },
    });
  } catch {
    return Response.json({ detail: "DOWNLOAD_UNAVAILABLE" }, { status: 503 });
  }
}
