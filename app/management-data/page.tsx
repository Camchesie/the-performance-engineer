import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management & Data | The Performance Engineer",
  description:
    "Practical management systems, management information, digital asset management, planning, accountability and performance improvement.",
  alternates: { canonical: "/management-data" },
};

const areas = [
  ["Management Information", "Turn raw data into a small number of trusted measures, exceptions and decisions instead of another dashboard nobody uses.", "/management-data/support/management-information-from-data-to-decisions"],
  ["Digital Asset Management", "Create controlled structures for assets, drawings, manuals, certificates, revisions, ownership and fast access to the right information.", "/management-data/support/digital-asset-management-guide"],
  ["Operating Reviews", "Build daily and weekly review rhythms that expose exceptions, assign owners and close the loop on actions.", "/management-data/support/weekly-management-review"],
  ["Action & Accountability", "Make ownership, due dates, escalation and effectiveness visible so actions do not disappear between meetings.", "/management-data/support/action-management-accountability"],
  ["Tiered Management", "Use SQCDP-style tier meetings and escalation routes to move the right problems to the right level quickly.", "/management-data/support/tiered-management-sqcdp"],
  ["Capacity & Resource Planning", "Match workload, skills, labour and priorities without pretending every demand can be treated as urgent.", "/management-data/support/capacity-resource-planning"],
];

const digitalAssets = [
  ["Asset hierarchy", "Site → area → line → asset → component structures that people can navigate consistently."],
  ["Document control", "Drawings, manuals, certificates, procedures and technical documents linked to the asset they actually belong to."],
  ["Revision control", "Clear current revision, superseded history, approval and ownership instead of duplicate files with 'FINAL v7' in the name."],
  ["Ownership", "Named responsibility for asset data, document quality and review rather than assuming 'Engineering owns it'."],
  ["Access", "Search, QR links and role-appropriate access so the correct information is available where the work happens."],
  ["Lifecycle", "Commissioning, modification, maintenance history, obsolescence and disposal information retained around the asset."],
];

export default function ManagementDataPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">The Performance Engineer</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/management-data/support" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] md:block">Support</a>
            <a href="/engineering" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] lg:block">Engineering</a>
            <a href="/consultancy" className="rounded-full border border-[#c9a227]/70 px-5 py-3 text-xs font-black uppercase tracking-widest text-[#c9a227] hover:bg-[#c9a227] hover:text-black">Consultancy</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_20%,rgba(201,162,39,0.14),transparent_32rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c9a227]">Management & Data</p>
          <h1 className="mt-6 max-w-6xl text-5xl font-black uppercase leading-[0.93] md:text-8xl">
            Turn information into <span className="text-[#c9a227]">better decisions.</span>
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
            Practical management systems, trusted management information, digital asset control and operating rhythms that help people see the problem, decide what matters and follow through.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/management-data/support" className="rounded-full bg-[#c9a227] px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Explore management support</a>
            <a href="/consultancy" className="rounded-full border border-zinc-700 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]">Management & data consultancy</a>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Where we focus</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase md:text-6xl">Management systems that make the work easier to control.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(([title, text, href]) => (
              <a key={title} href={href} className="group rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7 transition hover:-translate-y-1 hover:border-[#c9a227]">
                <h3 className="text-2xl font-black text-zinc-100">{title}</h3>
                <p className="mt-5 leading-7 text-zinc-400">{text}</p>
                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-[#c9a227]">Read practical guide →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="digital-assets" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Digital Asset Management</p>
              <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">One controlled home for the information around the asset.</h2>
              <p className="mt-7 text-lg leading-8 text-zinc-400">
                Digital asset management is not just a file store. It is the structure that links equipment, information, ownership, revision status and lifecycle history so people can find the right thing and trust that it is current.
              </p>
              <a href="/management-data/support/digital-asset-management-guide" className="mt-8 inline-block rounded-full border border-[#c9a227] px-7 py-4 text-sm font-black uppercase tracking-widest text-[#c9a227] hover:bg-[#c9a227] hover:text-black">Read the DAM guide</a>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {digitalAssets.map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6">
                  <h3 className="text-xl font-black text-[#c9a227]">{title}</h3>
                  <p className="mt-4 leading-7 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Management information</p>
            <h2 className="mt-5 text-3xl font-black uppercase">Data is not management information until it changes a decision.</h2>
            <p className="mt-6 leading-8 text-zinc-400">
              Good MI has a clear definition, owner, source, frequency, target or expected range, and a reason for being reviewed. The output should expose an exception or support a decision — not decorate a meeting.
            </p>
          </div>
          <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Operating rhythm</p>
            <h2 className="mt-5 text-3xl font-black uppercase">The meeting is not the management system.</h2>
            <p className="mt-6 leading-8 text-zinc-400">
              A useful rhythm connects data, review, escalation, action and verification. Daily issues should move quickly; weekly reviews should focus on trends and exceptions; monthly reviews should test whether the system is improving.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#c9a227]/35 bg-[#12100a] p-8 md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Long-term direction</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">From disconnected systems to a performance operating layer.</h2>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-zinc-400">
            The long-term PETE direction is to connect asset information, engineering history, management information, actions and operational performance into one usable layer. Existing ERP, CMMS, SharePoint, spreadsheets and dashboards do not all need replacing at once — the first job is to make the information usable and controlled.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Need help implementing it?</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Management, data and digital systems consultancy.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            If the problem is bigger than a guide, we can help define the management system, clean up the information flow and build a practical route from current state to controlled operation.
          </p>
          <a href="/consultancy" className="mt-8 inline-block rounded-full bg-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Explore consultancy</a>
        </div>
      </section>
    </main>
  );
}
