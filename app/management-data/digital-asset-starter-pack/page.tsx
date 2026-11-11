import type { Metadata } from "next";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Free Digital Asset Management Starter Pack",
  description:
    "Free PETE Digital Asset Management templates for asset registers, document control and DAM readiness.",
  alternates: { canonical: "/management-data/digital-asset-starter-pack" },
};

export default async function DigitalAssetStarterPack({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string; error?: string }>;
}) {
  const query = await searchParams;
  const unlocked = query.submitted === "1";

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-[#f5f5f5]">
      <section className="mx-auto max-w-5xl">
        <a href="/management-data#digital-assets" className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">← Digital Asset Management</a>
        <p className="mt-12 text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Free DAM resource</p>
        <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          Digital Asset Management <span className="text-[#c9a227]">Starter Pack.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-400">
          Start structuring assets, technical documents and revision control without waiting for a full software project.
        </p>

        {unlocked ? (
          <div className="mt-12 rounded-[2rem] border border-[#c9a227]/40 bg-[#12100a] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Unlocked</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Your DAM starter templates.</h2>
            <div className="mt-7 grid gap-4">
              <a href="/downloads/PETE_Digital_Asset_Register_Starter.csv" className="rounded-2xl border border-zinc-700 p-5 font-black hover:border-[#c9a227] hover:text-[#c9a227]">Digital Asset Register CSV →</a>
              <a href="/downloads/PETE_Document_Control_Register_Starter.csv" className="rounded-2xl border border-zinc-700 p-5 font-black hover:border-[#c9a227] hover:text-[#c9a227]">Document & Revision Control CSV →</a>
              <a href="/downloads/PETE_DAM_Readiness_Checklist.csv" className="rounded-2xl border border-zinc-700 p-5 font-black hover:border-[#c9a227] hover:text-[#c9a227]">DAM Readiness Checklist CSV →</a>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Included</p>
              <ul className="mt-6 space-y-4 leading-7 text-zinc-400">
                <li>→ Asset hierarchy / register template</li>
                <li>→ Technical document & revision-control register</li>
                <li>→ Digital Asset Management readiness checklist</li>
                <li>→ Practical fields for ownership, lifecycle and access</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
              <h2 className="text-3xl font-black uppercase">Get the pack.</h2>
              {query.error === "1" && <p className="mt-4 text-sm text-red-300">Check the required details and try again.</p>}
              <LeadCaptureForm
                leadType="dam_pack"
                source="/management-data/digital-asset-starter-pack"
                buttonText="Unlock DAM starter pack"
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
