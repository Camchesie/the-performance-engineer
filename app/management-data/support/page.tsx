import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management & Data Support",
  description:
    "Practical guides for management information, digital asset management, operating reviews, accountability, tier meetings and capacity planning.",
  alternates: { canonical: "/management-data/support" },
};

const guides = [
  {
    href: "/management-data/support/digital-asset-management-guide",
    title: "Digital Asset Management Guide",
    tag: "Digital Systems",
    text: "How to structure assets, documents, revisions, ownership and lifecycle information so people can find and trust what they need.",
  },
  {
    href: "/management-data/support/management-information-from-data-to-decisions",
    title: "Management Information: From Data to Decisions",
    tag: "Management Information",
    text: "How to choose useful measures, define ownership and turn raw operational data into decisions rather than dashboard noise.",
  },
  {
    href: "/management-data/support/weekly-management-review",
    title: "How to Run a Weekly Management Review",
    tag: "Operating Rhythm",
    text: "A practical review structure built around exceptions, priorities, actions, blocked work and decisions.",
  },
  {
    href: "/management-data/support/action-management-accountability",
    title: "Action Management & Accountability",
    tag: "Execution",
    text: "Create ownership, due dates, escalation and effectiveness checks without turning action tracking into admin theatre.",
  },
  {
    href: "/management-data/support/tiered-management-sqcdp",
    title: "Tiered Management & SQCDP",
    tag: "Daily Management",
    text: "How to use tier meetings, visual management and escalation so issues move quickly to the level that can actually resolve them.",
  },
  {
    href: "/management-data/support/capacity-resource-planning",
    title: "Capacity & Resource Planning",
    tag: "Planning",
    text: "A practical way to compare demand, available capacity, skill constraints and priorities before promising work nobody can deliver.",
  },
];

export default function ManagementSupportPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="border-b border-white/5 bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">The Performance Engineer</span>
          </a>
          <a href="/management-data" className="text-xs font-black uppercase tracking-[0.18em] text-[#c9a227]">Management & Data</a>
        </div>
      </header>

      <section className="px-6 pb-20 pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Management & Data Support</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.95] md:text-8xl">
            Practical systems for <span className="text-[#c9a227]">better management.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            Management information, digital assets, accountability, planning and operating rhythms explained as things people can actually implement.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <a key={guide.href} href={guide.href} className="group rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8 transition hover:-translate-y-1 hover:border-[#c9a227]">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c9a227]">{guide.tag}</p>
              <h2 className="mt-4 text-3xl font-black">{guide.title}</h2>
              <p className="mt-5 leading-7 text-zinc-400">{guide.text}</p>
              <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-[#c9a227]">Read guide →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 pt-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#c9a227]/35 bg-[#12100a] p-8 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Free starter resources</p>
          <h2 className="mt-4 text-3xl font-black uppercase">Take something useful away today.</h2>
          <p className="mt-5 leading-8 text-zinc-400">Use the Management Performance pack for weekly reviews and action control, or the Digital Asset Management pack to start structuring assets and technical information.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="/management-data/starter-pack" className="rounded-full bg-[#c9a227] px-7 py-4 text-center text-sm font-black uppercase tracking-widest text-black">Free management pack</a>
            <a href="/management-data/digital-asset-starter-pack" className="rounded-full border border-[#c9a227] px-7 py-4 text-center text-sm font-black uppercase tracking-widest text-[#c9a227]">Free DAM pack</a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Engineering too?</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Engineering Support</h2>
            <p className="mt-5 leading-8 text-zinc-400">RCA, reliability, OEE, MTBF/MTTR, repeat failures and practical fault-finding guides.</p>
            <a href="/engineering/support" className="mt-7 inline-block text-xs font-black uppercase tracking-[0.2em] text-[#c9a227]">Explore engineering support →</a>
          </div>
          <div className="rounded-[2rem] border border-[#c9a227]/35 bg-[#12100a] p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Need implementation support?</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Consultancy</h2>
            <p className="mt-5 leading-8 text-zinc-400">Use the guides yourself, or bring us in when the organisation needs a wider management, engineering or digital-system change.</p>
            <a href="/consultancy/enquire" className="mt-7 inline-block text-xs font-black uppercase tracking-[0.2em] text-[#c9a227]">Explore consultancy →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
