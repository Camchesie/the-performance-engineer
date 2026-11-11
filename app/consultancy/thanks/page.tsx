import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultancy Enquiry Received",
  robots: { index: false, follow: false },
};

export default function ConsultancyThanks() {
  return (
    <main className="flex min-h-screen items-center bg-[#050505] px-6 py-20 text-[#f5f5f5]">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-[#c9a227]/40 bg-[#12100a] p-10 text-center">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Enquiry received</p>
        <h1 className="mt-5 text-5xl font-black uppercase">Thanks. We have the problem.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          We will review what you sent and respond using the work email you provided. If you want to add context in the meantime, email hello@theperformanceengineer.uk.
        </p>
        <a href="/" className="mt-8 inline-block rounded-full border border-zinc-700 px-7 py-4 text-sm font-black uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]">Back to The Performance Engineer</a>
      </section>
    </main>
  );
}
