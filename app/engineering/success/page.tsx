type PageProps = {
  searchParams: Promise<{ session_id?: string | string[] }>;
};

export default async function EngineeringPurchaseSuccess({ searchParams }: PageProps) {
  const params = await searchParams;
  const sessionId = typeof params.session_id === "string" ? params.session_id : null;

  return (
    <main className="flex min-h-screen items-center bg-[#050505] px-6 text-[#f5f5f5]">
      <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-[#c9a227]/40 bg-[#0d0d0d] p-8 text-center glow md:p-14">
        <img src="/pte-monogram.png" alt="PETE" className="mx-auto h-14 w-auto" />
        <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">
          PETE Engineering · Release 1
        </p>
        <h1 className="mt-5 text-4xl font-black uppercase md:text-6xl">
          {sessionId ? "Payment complete." : "PETE Engineering"}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {sessionId
            ? "Thank you. Stripe is confirming your payment and your permanent Release 1 entitlement."
            : "If you completed a purchase and reached this page without a Stripe session reference, contact us and we will verify it."}
        </p>

        {sessionId && (
          <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-zinc-800 bg-black/40 p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c9a227]">
              Secure download
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Your download unlocks only after PETE receives Stripe&apos;s signed payment confirmation. If Stripe is still processing, try the button again shortly.
            </p>
            <a
              href={`/engineering/download?session_id=${encodeURIComponent(sessionId)}`}
              className="mt-6 block rounded-full bg-[#c9a227] px-7 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]"
            >
              Download Release 1
            </a>
          </div>
        )}

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/engineering"
            className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]"
          >
            Back to PETE Engineering
          </a>
          <a
            href="mailto:hello@theperformanceengineer.uk?subject=PETE%20Engineering%20Release%201%20purchase"
            className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]"
          >
            Purchase support
          </a>
        </div>
      </div>
    </main>
  );
}
