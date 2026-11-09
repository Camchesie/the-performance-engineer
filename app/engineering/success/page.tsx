export default function EngineeringPurchaseSuccess() {
  return (
    <main className="flex min-h-screen items-center bg-[#050505] px-6 text-[#f5f5f5]">
      <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-[#c9a227]/40 bg-[#0d0d0d] p-8 text-center glow md:p-14">
        <img src="/pte-monogram.png" alt="PETE" className="mx-auto h-14 w-auto" />
        <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">PETE Engineering · Release 1</p>
        <h1 className="mt-5 text-4xl font-black uppercase md:text-6xl">Purchase complete.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Thank you. Your Release 1 purchase is permanent. Use the secure access instructions provided with your Stripe receipt to retrieve the toolkit.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="/engineering" className="rounded-full bg-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Back to PETE Engineering</a>
          <a href="mailto:hello@theperformanceengineer.uk?subject=PETE%20Engineering%20Release%201%20purchase" className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]">Purchase support</a>
        </div>
      </div>
    </main>
  );
}
