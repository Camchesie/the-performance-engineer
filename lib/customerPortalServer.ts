import { cookies } from "next/headers";

export const PORTAL_COOKIE = "pete_portal_session";
export const GATEWAY_BASE_URL = "https://gateway.theperformanceengineer.uk";

export async function getPortalToken() {
  const store = await cookies();
  return store.get(PORTAL_COOKIE)?.value ?? null;
}

export async function portalRequest(
  path: string,
  init: RequestInit = {},
): Promise<Response | null> {
  const token = await getPortalToken();

  if (!token) {
    return null;
  }

  const headers = new Headers(init.headers);
  headers.set("authorization", `Bearer ${token}`);

  return fetch(`${GATEWAY_BASE_URL}${path}`, {
    ...init,
    headers,
    cache: "no-store",
  });
}
