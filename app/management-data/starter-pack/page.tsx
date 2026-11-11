import type { Metadata } from "next";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Free Management Performance Starter Pack",
  description:
    "Free PETE Management starter templates for weekly reviews and action management.",
  alternates: { canonical: "/management-data/starter-pack" },
};

export default async function ManagementStarterPack({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string; error?: string }>;
}) {
  const query = await searchParams;
  const unlocked = query.submitted === "1";

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-[#f5f5f5]">
      <section className="mx-auto max-w-5xl">
        <a href="/management-data" className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">← Management & Data</a>
        <p className="mt-12 text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Free management resource</p>
        <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          Management Performance <span className="text-[#c9a227]">Starter Pack.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-400">
          Two simple templates to make weekly reviews and action control more useful immediately.
        </p>

        {unlocked ? (
          <div className="mt-12 rounded-[2rem] border border-[#c9a227]/40 bg-[#12100a] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Unlocked</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Download the starter templates.</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <a href="/downloads/PETE_Management_Weekly_Review_Starter.csv" className="rounded-2xl border border-zinc-700 p-5 font-black hover:border-[#c9a227] hover:text-[#c9a227]">
                Weekly Management Review CSV →
              </a>
              <a href="/downloads/PETE_Management_Action_Tracker_Starter.csv" className="rounded-2xl border border-zinc-700 p-5 font-black hover:border-[#c9a227] hover:text-[#c9a227]">
                Action Tracker CSV →
              </a>
            </div>
            <p className="mt-6 text-sm leading-6 text-zinc-500">
              Open the CSVs in Excel or Google Sheets and adapt the fields to your operating rhythm.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Included</p>
              <ul className="mt-6 space-y-4 leading-7 text-zinc-400">
                <li>→ Weekly Management Review structure</li>
                <li>→ Action & Accountability tracker</li>
                <li>→ Fields for KPI exceptions, decisions, owners and verification</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
              <h2 className="text-3xl font-black uppercase">Get the pack.</h2>
              {query.error === "1" && <p className="mt-4 text-sm text-red-300">Check the required details and try again.</p>}
              <LeadCaptureForm
                leadType="management_pack"
                source="/management-data/starter-pack"
                buttonText="Unlock management pack"
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
