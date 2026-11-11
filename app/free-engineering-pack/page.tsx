import type { Metadata } from "next";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Free Engineering Starter Pack",
  description:
    "Download the free PETE Engineering Starter Pack with a 5 Why template, fault investigation sheet and downtime/Pareto starter workbook.",
  alternates: { canonical: "/free-engineering-pack" },
};

export default async function FreeEngineeringPack({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string; error?: string }>;
}) {
  const query = await searchParams;
  const unlocked = query.submitted === "1";

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-[#f5f5f5]">
      <section className="mx-auto max-w-5xl">
        <a href="/engineering" className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">← PETE Engineering</a>
        <p className="mt-12 text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Free starter resource</p>
        <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          PETE Engineering <span className="text-[#c9a227]">Starter Pack.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-400">
          A practical starting point for fault investigation and downtime analysis: Basic 5 Why, Fault Investigation and a Downtime/Pareto starter workbook.
        </p>

        {unlocked ? (
          <div className="mt-12 rounded-[2rem] border border-[#c9a227]/40 bg-[#12100a] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Unlocked</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Your starter pack is ready.</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              Use it, change it, and make it fit the problem. If you need the full workflow, PETE Engineering Release 1 includes 20 tools across RCA, reliability, maintenance and management.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/downloads/PETE_Engineering_Free_Starter_Pack.zip"
                className="rounded-full bg-[#c9a227] px-7 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]"
              >
                Download starter pack
              </a>
              <a
                href="/engineering"
                className="rounded-full border border-zinc-700 px-7 py-4 text-center text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]"
              >
                Explore Release 1
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Included</p>
              <ul className="mt-6 space-y-4 leading-7 text-zinc-400">
                <li>→ Basic 5 Why investigation template</li>
                <li>→ Engineering Fault Investigation sheet</li>
                <li>→ Downtime / Pareto starter workbook</li>
                <li>→ Practical route into the wider PETE Engineering system</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
              <h2 className="text-3xl font-black uppercase">Get the pack.</h2>
              {query.error === "1" && (
                <p className="mt-4 rounded-xl border border-red-900/50 bg-red-950/30 p-4 text-sm text-red-300">
                  Check your name, company and work email and try again.
                </p>
              )}
              <LeadCaptureForm
                leadType="engineering_pack"
                source="/free-engineering-pack"
                buttonText="Unlock free engineering pack"
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
