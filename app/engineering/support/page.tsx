const guides = [
  {
    href: "/engineering/support/5-why-template",
    title: "5 Why Template & Root Cause Analysis Guide",
    text: "How to run a useful 5 Why without simply blaming the operator, plus a free starter template.",
    tag: "Root Cause Analysis",
  },
  {
    href: "/engineering/support/oee-calculator-guide",
    title: "OEE Calculator Guide",
    text: "How availability, performance and quality combine into OEE — and what each loss is actually telling you.",
    tag: "Performance",
  },
  {
    href: "/engineering/support/mtbf-mttr-guide",
    title: "MTBF & MTTR Explained",
    text: "How to calculate the two core reliability measures, interpret them and avoid misleading comparisons.",
    tag: "Reliability",
  },
  {
    href: "/engineering/support/repeat-machine-failures",
    title: "How to Stop Repeat Machine Failures",
    text: "A practical investigation route from recurring symptom to evidence-supported cause and verified corrective action.",
    tag: "Fault Finding",
  },
  {
    href: "/engineering/support/downtime-pareto-analysis",
    title: "Downtime Pareto Analysis",
    text: "How to turn a messy downtime log into a ranked list of engineering priorities instead of chasing the loudest fault.",
    tag: "Downtime",
  },
  {
    href: "/engineering/support/fishbone-diagram-engineering-example",
    title: "Fishbone Diagram for Engineering RCA",
    text: "How to structure multiple possible causes without mistaking a brainstorm for a confirmed root cause.",
    tag: "Root Cause Analysis",
  },
  {
    href: "/engineering/support/8d-report-template-guide",
    title: "8D Report Template Guide",
    text: "A practical D1–D8 route from team and containment through root cause, permanent action and recurrence prevention.",
    tag: "Problem Solving",
  },
  {
    href: "/engineering/support/asset-criticality-matrix",
    title: "Asset Criticality Matrix",
    text: "Rank equipment by consequence and importance so PM, spares and reliability effort go where they matter most.",
    tag: "Reliability",
  },
  {
    href: "/engineering/support/pm-effectiveness-review",
    title: "PM Effectiveness Review",
    text: "How to tell whether preventive maintenance is actually preventing or detecting the failure modes that matter.",
    tag: "Maintenance",
  },
  {
    href: "/engineering/support/corrective-action-tracker",
    title: "Corrective Action Tracker",
    text: "Build an action system around ownership, dates, completion evidence and effectiveness rather than overdue admin.",
    tag: "Improvement",
  },
  {
    href: "/engineering/support/engineering-kpi-dashboard",
    title: "Engineering KPI Dashboard",
    text: "Choose a focused set of reliability, work-control and operational KPIs that support engineering decisions.",
    tag: "Engineering Management",
  },
  {
    href: "/engineering/support/why-bearings-keep-failing",
    title: "Why Bearings Keep Failing",
    text: "A practical investigation guide covering lubrication, contamination, mounting, alignment, fit, load and electrical damage.",
    tag: "Fault Finding",
  },
  {
    href: "/engineering/support/conveyor-fault-finding-guide",
    title: "Conveyor Fault Finding Guide",
    text: "Troubleshoot tracking, slip, spillage, carryback, bearings, drives and sensors without just resetting the symptom.",
    tag: "Fault Finding",
  },
];

export default function EngineeringSupportPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="border-b border-white/5 bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">The Performance Engineer</span>
          </a>
          <a href="/engineering" className="text-xs font-black uppercase tracking-[0.18em] text-[#c9a227]">PETE Engineering</a>
        </div>
      </header>

      <section className="px-6 pb-20 pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">PETE Engineering Support</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.95] md:text-8xl">
            Practical answers for <span className="text-[#c9a227]">real engineering problems.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            Fault finding, root-cause analysis, reliability and maintenance guidance written to help you make a better engineering decision — not pad out a blog.
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

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#c9a227]/35 bg-[#0d0d0d] p-8 text-center md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Need the tools as well?</p>
          <h2 className="mt-5 text-4xl font-black uppercase">PETE Engineering Release 1</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">20 editable engineering tools covering investigation, reliability, maintenance, corrective action and KPI reporting.</p>
          <a href="/engineering" className="mt-8 inline-block rounded-full bg-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Explore PETE Engineering</a>
        </div>
      </section>
    </main>
  );
}
