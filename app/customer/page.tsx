"use client";

import { useEffect, useMemo, useState } from "react";

type Subscription = {
  status: string;
  valid_until_epoch: number | null;
  plan_code: string | null;
};

type Installation = {
  installation_id: string;
  status: string;
  broker_account: number;
  broker_server: string;
  last_seen_epoch: number;
  online_recently: boolean;
};

type PortalSummary = {
  status: string;
  customer_id: string;
  subscription: Subscription;
  telegram_linked: boolean;
  installations: Installation[];
  release: { filename: string };
};

type GeneratedCode = {
  title: string;
  value: string;
  helper: string;
};

function formatDate(epoch: number | null) {
  if (!epoch) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(epoch * 1000));
}

function formatSeen(epoch: number) {
  const seconds = Math.max(0, Math.floor(Date.now() / 1000) - epoch);

  if (seconds < 60) {
    return "just now";
  }

  if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} min ago`;
  }

  if (seconds < 86400) {
    return `${Math.floor(seconds / 3600)} hr ago`;
  }

  return formatDate(epoch);
}

export default function CustomerPortal() {
  const [summary, setSummary] = useState<PortalSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [signedOut, setSignedOut] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [code, setCode] = useState<GeneratedCode | null>(null);
  const [error, setError] = useState<string | null>(null);

  const accessState = useMemo(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return new URLSearchParams(window.location.search).get("access") ?? "";
  }, []);

  async function loadSummary() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/customer-portal/me", {
        cache: "no-store",
      });

      if (response.status === 401 || response.status === 403) {
        setSummary(null);
        setSignedOut(true);
        return;
      }

      if (!response.ok) {
        throw new Error("PORTAL_UNAVAILABLE");
      }

      const payload = (await response.json()) as PortalSummary;
      setSummary(payload);
      setSignedOut(false);
    } catch {
      setError("PETER Customer Portal is temporarily unavailable. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadSummary();
  }, []);

  async function generatePairingCode() {
    setBusy("pairing");
    setError(null);
    setCode(null);

    try {
      const response = await fetch("/api/customer-portal/pairing-code", {
        method: "POST",
      });
      const payload = (await response.json()) as {
        pairing_code?: string;
        detail?: string;
      };

      if (!response.ok || !payload.pairing_code) {
        throw new Error(payload.detail ?? "PAIRING_CODE_FAILED");
      }

      setCode({
        title: "Fresh pairing code",
        value: payload.pairing_code,
        helper: "One use only · expires in 30 minutes",
      });
    } catch {
      setError("PETE could not generate a new pairing code. Please try again.");
    } finally {
      setBusy(null);
    }
  }

  async function generateTelegramLink() {
    setBusy("telegram");
    setError(null);
    setCode(null);

    try {
      const response = await fetch("/api/customer-portal/telegram-link", {
        method: "POST",
      });
      const payload = (await response.json()) as {
        telegram_start_command?: string;
        detail?: string;
      };

      if (!response.ok || !payload.telegram_start_command) {
        throw new Error(payload.detail ?? "TELEGRAM_LINK_FAILED");
      }

      setCode({
        title: "Telegram link command",
        value: payload.telegram_start_command,
        helper: "Send this to the PETE bot within 30 minutes",
      });
    } catch {
      setError("PETE could not create a new Telegram link. Please try again.");
    } finally {
      setBusy(null);
    }
  }

  async function openBilling() {
    setBusy("billing");
    setError(null);

    try {
      const response = await fetch("/api/customer-portal/billing", {
        method: "POST",
      });
      const payload = (await response.json()) as {
        portal_url?: string;
        detail?: string;
      };

      if (
        !response.ok ||
        !payload.portal_url ||
        !payload.portal_url.startsWith("https://billing.stripe.com/")
      ) {
        throw new Error(payload.detail ?? "BILLING_PORTAL_FAILED");
      }

      window.location.assign(payload.portal_url);
    } catch {
      setError("Billing management is temporarily unavailable. Please try again.");
      setBusy(null);
    }
  }

  async function copyCode() {
    if (!code) {
      return;
    }

    await navigator.clipboard.writeText(code.value);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 text-[#f5f5f5]">
        <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center">
          <div className="text-center">
            <img src="/pte-monogram.png" alt="PETE" className="mx-auto h-14 w-auto" />
            <p className="mt-6 text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">
              Customer Portal
            </p>
            <p className="mt-4 text-zinc-500">Checking your PETE account…</p>
          </div>
        </div>
      </main>
    );
  }

  if (signedOut || !summary) {
    return (
      <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
        <header className="border-b border-white/5 bg-black/80">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-3">
              <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
              <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">
                The Performance Engineer
              </span>
            </a>
            <a
              href="/trade-gateway"
              className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227]"
            >
              Trade Gateway
            </a>
          </div>
        </header>

        <section className="relative overflow-hidden px-6 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(201,162,39,0.16),transparent_30rem)]" />
          <div className="relative mx-auto max-w-3xl">
            <div className="rounded-[2rem] border border-[#c9a227]/35 bg-[#0d0d0d] p-8 text-center glow md:p-12">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">
                PETE Customer Portal
              </p>
              <h1 className="mt-5 text-4xl font-black uppercase md:text-6xl">
                Your PETE account, in one place.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Portal access is verified through the Telegram account already linked to PETE. No separate PETE password is required.
              </p>

              <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-zinc-800 bg-black p-7 text-left">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Secure sign in
                </p>
                <p className="mt-4 text-lg font-black text-zinc-200">
                  Open your PETE Telegram bot and send:
                </p>
                <div className="mt-5 rounded-2xl border border-[#c9a227]/40 bg-[#12100a] px-5 py-4 font-mono text-xl font-black text-[#c9a227]">
                  /portal
                </div>
                <p className="mt-5 text-sm leading-7 text-zinc-500">
                  PETE will reply with a one-time link that is valid for 10 minutes. Open that link on this device to enter your portal.
                </p>
              </div>

              {accessState === "expired" && (
                <p className="mt-7 rounded-2xl border border-amber-500/30 bg-amber-500/5 px-5 py-4 text-sm text-amber-200">
                  That portal link expired. Send <strong>/portal</strong> again for a fresh one.
                </p>
              )}
              {accessState === "invalid" && (
                <p className="mt-7 rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4 text-sm text-red-200">
                  That portal link is invalid or has already been used. Send <strong>/portal</strong> again.
                </p>
              )}
              {accessState === "unavailable" && (
                <p className="mt-7 rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4 text-sm text-red-200">
                  PETE could not complete sign in. Please try again shortly.
                </p>
              )}
              {error && (
                <p className="mt-7 rounded-2xl border border-red-500/30 bg-red-500/5 px-5 py-4 text-sm text-red-200">
                  {error}
                </p>
              )}

              <p className="mt-8 text-xs leading-6 text-zinc-600">
                Not linked to Telegram yet? Use the Telegram link supplied during onboarding or contact hello@theperformanceengineer.uk.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const activeInstallations = summary.installations.filter(
    (installation) => installation.status === "ACTIVE",
  );

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="border-b border-white/5 bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">
              Customer Portal
            </span>
          </a>
          <form action="/api/customer-portal/logout" method="post">
            <button
              type="submit"
              className="rounded-full border border-zinc-700 px-5 py-3 text-xs font-black uppercase tracking-widest text-zinc-300 transition hover:border-[#c9a227] hover:text-[#c9a227]"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-16 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_10%,rgba(201,162,39,0.13),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">
                PETE Customer Portal
              </p>
              <h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">
                Your Gateway.
                <span className="block text-[#c9a227]">Your controls.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                Download the latest customer package, refresh setup codes, check your linked installation and manage your Founding Beta subscription.
              </p>
            </div>
            <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-xs font-black uppercase tracking-widest text-emerald-300">
              Subscription {summary.subscription.status}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-[#c9a227]/35 bg-[#0d0d0d] p-7 glow">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
              Founding Beta
            </p>
            <p className="mt-4 text-4xl font-black text-[#c9a227]">
              £9.99<span className="text-base text-zinc-500"> / month</span>
            </p>
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Active until <span className="font-bold text-zinc-200">{formatDate(summary.subscription.valid_until_epoch)}</span>
            </p>
            <button
              onClick={() => void openBilling()}
              disabled={busy === "billing"}
              className="mt-7 w-full rounded-full border border-[#c9a227] px-5 py-3 text-xs font-black uppercase tracking-widest text-[#c9a227] transition hover:bg-[#c9a227] hover:text-black disabled:opacity-50"
            >
              {busy === "billing" ? "Opening…" : "Manage billing"}
            </button>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
              Latest PETE package
            </p>
            <h2 className="mt-4 text-2xl font-black text-zinc-100">Ready to download</h2>
            <p className="mt-4 break-words text-sm leading-7 text-zinc-500">
              {summary.release.filename}
            </p>
            <a
              href="/api/customer-portal/download"
              className="mt-7 block rounded-full bg-[#c9a227] px-5 py-3 text-center text-xs font-black uppercase tracking-widest text-black transition hover:bg-[#e4c45a]"
            >
              Download latest PETE
            </a>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
              Telegram
            </p>
            <h2 className="mt-4 text-2xl font-black text-zinc-100">
              {summary.telegram_linked ? "Linked" : "Not linked"}
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Generate a fresh one-use Telegram link command whenever you need to connect or repair the link.
            </p>
            <button
              onClick={() => void generateTelegramLink()}
              disabled={busy === "telegram"}
              className="mt-7 w-full rounded-full border border-zinc-700 px-5 py-3 text-xs font-black uppercase tracking-widest text-zinc-300 transition hover:border-[#c9a227] hover:text-[#c9a227] disabled:opacity-50"
            >
              {busy === "telegram" ? "Generating…" : "Generate Telegram link"}
            </button>
          </article>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7 md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Paired installation
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase">
                  {activeInstallations.length > 0 ? "Gateway connected" : "No active Gateway"}
                </h2>
              </div>
              <button
                onClick={() => void generatePairingCode()}
                disabled={busy === "pairing"}
                className="rounded-full border border-[#c9a227] px-5 py-3 text-xs font-black uppercase tracking-widest text-[#c9a227] transition hover:bg-[#c9a227] hover:text-black disabled:opacity-50"
              >
                {busy === "pairing" ? "Generating…" : "New pairing code"}
              </button>
            </div>

            <div className="mt-7 grid gap-4">
              {summary.installations.length === 0 && (
                <div className="rounded-2xl border border-zinc-800 bg-black p-6 text-sm leading-7 text-zinc-500">
                  No installation is currently recorded. Generate a pairing code when you are ready to connect PETE Gateway.
                </div>
              )}

              {summary.installations.map((installation) => (
                <div
                  key={installation.installation_id}
                  className="grid gap-4 rounded-2xl border border-zinc-800 bg-black p-6 md:grid-cols-4"
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">Status</p>
                    <p className="mt-2 font-black text-zinc-200">{installation.status}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">Broker server</p>
                    <p className="mt-2 break-words text-sm font-bold text-zinc-300">{installation.broker_server}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">Broker account</p>
                    <p className="mt-2 font-bold text-zinc-300">{installation.broker_account}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">Last seen</p>
                    <p className={`mt-2 font-bold ${installation.online_recently ? "text-emerald-300" : "text-zinc-400"}`}>
                      {installation.online_recently ? "Online recently" : formatSeen(installation.last_seen_epoch)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
              Account
            </p>
            <dl className="mt-5 divide-y divide-zinc-800 text-sm">
              <div className="py-4">
                <dt className="text-zinc-600">Customer ID</dt>
                <dd className="mt-2 break-all font-mono text-xs text-zinc-300">{summary.customer_id}</dd>
              </div>
              <div className="py-4">
                <dt className="text-zinc-600">Plan</dt>
                <dd className="mt-2 font-bold text-zinc-300">Founding Beta</dd>
              </div>
              <div className="py-4">
                <dt className="text-zinc-600">Telegram</dt>
                <dd className="mt-2 font-bold text-zinc-300">{summary.telegram_linked ? "Linked" : "Not linked"}</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      {(code || error) && (
        <section className="px-6 pb-10">
          <div className="mx-auto max-w-7xl">
            {code && (
              <div className="rounded-3xl border border-[#c9a227]/40 bg-[#12100a] p-7 md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">{code.title}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <code className="min-w-0 flex-1 overflow-x-auto rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-sm font-bold text-zinc-100">
                    {code.value}
                  </code>
                  <button
                    onClick={() => void copyCode()}
                    className="rounded-full bg-[#c9a227] px-6 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]"
                  >
                    Copy
                  </button>
                </div>
                <p className="mt-4 text-sm text-zinc-500">{code.helper}</p>
              </div>
            )}
            {error && (
              <div className="rounded-3xl border border-red-500/30 bg-red-500/5 p-6 text-sm text-red-200">
                {error}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-zinc-900 bg-[#090909] p-7">
          <p className="text-sm leading-7 text-zinc-500">
            PETE Customer Portal controls your software access, setup and billing. Trading decisions and trade instructions remain yours and are still submitted through the linked PETE Telegram bot.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-10 text-sm text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The Performance Engineer Ltd.</p>
          <div className="flex gap-5">
            <a href="/trade-gateway" className="hover:text-[#c9a227]">Trade Gateway</a>
            <a href="mailto:hello@theperformanceengineer.uk" className="hover:text-[#c9a227]">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
