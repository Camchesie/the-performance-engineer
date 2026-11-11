import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Performance Engineer | Trade, Engineering, Management & Consultancy",
  description:
    "Practical software, engineering systems, management information and consultancy built around one principle: Measure. Analyse. Improve.",
  alternates: { canonical: "/" },
};

const pillars = [
  {
    eyebrow: "Trading technology",
    title: "Trade",
    href: "/trade-gateway",
    status: "PETE Trade Gateway · Founding Beta live",
    text: "Customer-directed trade execution and management, with PETE providing the controlled technology layer between instruction, MT4 and broker.",
    cta: "Explore Trade",
  },
  {
    eyebrow: "Engineering performance",
    title: "Engineering",
    href: "/engineering",
    status: "Toolkit · Support · Reliability",
    text: "Practical fault finding, root-cause analysis, reliability, maintenance and engineering performance tools built for real operational problems.",
    cta: "Explore Engineering",
  },
  {
    eyebrow: "Management intelligence",
    title: "Management & Data",
    href: "/management-data",
    status: "Management systems · MI · Digital assets",
    text: "Turn operational data into useful management information, stronger operating rhythms, clearer ownership and better digital control of business assets.",
    cta: "Explore Management & Data",
  },
  {
    eyebrow: "Practical improvement",
    title: "Consultancy",
    href: "/consultancy",
    status: "Engineering · Management · Digital",
    text: "Focused consultancy for organisations that need a better system, clearer data, stronger engineering control or practical help solving a performance problem.",
    cta: "Explore Consultancy",
  },
];

const workflow = [
  ["01", "Measure", "Capture what is actually happening instead of managing from assumptions."],
  ["02", "Analyse", "Turn data, evidence and context into a clear understanding of the problem."],
  ["03", "Decide", "Prioritise the few actions that will genuinely change performance."],
  ["04", "Act", "Put ownership, control and execution around the decision."],
  ["05", "Verify", "Measure again and prove whether the change actually worked."],
];

const problems = [
  ["Machines keep failing", "Engineering", "Find the repeat loss, investigate the mechanism and verify the corrective action.", "/engineering"],
  ["Data exists but nobody trusts it", "Management & Data", "Define the source, ownership and management information needed to make decisions.", "/management-data"],
  ["Documents and asset information are everywhere", "Digital Asset Management", "Create controlled structures for assets, drawings, manuals, revisions, ownership and access.", "/management-data#digital-assets"],
  ["Performance reviews create activity, not decisions", "Management Systems", "Build a review rhythm around exceptions, priorities, owners and evidence.", "/management-data/support/weekly-management-review"],
  ["The organisation needs outside support", "Consultancy", "Use focused engineering, management or digital consultancy to diagnose the problem and build a workable system.", "/consultancy"],
  ["A trade needs controlled execution", "Trade", "Use PETE Trade Gateway as the engineered execution layer around your own trading instruction.", "/trade-gateway"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">
              The Performance Engineer
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400 lg:flex">
            <a className="transition hover:text-[#c9a227]" href="/trade-gateway">Trade</a>
            <a className="transition hover:text-[#c9a227]" href="/engineering">Engineering</a>
            <a className="transition hover:text-[#c9a227]" href="/management-data">Management & Data</a>
            <a className="transition hover:text-[#c9a227]" href="/consultancy">Consultancy</a>
            <a className="transition hover:text-[#c9a227]" href="/about">About</a>
          </nav>
          <a
            href="mailto:hello@theperformanceengineer.uk"
            className="rounded-full border border-[#c9a227]/70 px-4 py-2.5 text-[11px] font-black uppercase tracking-widest text-[#c9a227] transition hover:bg-[#c9a227] hover:text-black"
          >
            Talk to us
          </a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,162,39,0.12),transparent_34rem)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-6xl">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c9a227]">
              The Performance Engineer Ltd · Measure. Analyse. Improve.
            </p>
            <h1 className="mt-7 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl lg:text-[7.2rem]">
              Engineer the performance
              <span className="block text-[#c9a227]">of the system.</span>
            </h1>
            <p className="mt-9 max-w-4xl text-xl leading-9 text-zinc-400 md:text-2xl md:leading-10">
              Practical software, engineering systems, management information and consultancy designed to turn messy problems into controlled improvement.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a href="#areas" className="rounded-full bg-[#c9a227] px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">
                Explore the business
              </a>
              <a href="/consultancy" className="rounded-full border border-zinc-700 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest transition hover:border-[#c9a227] hover:text-[#c9a227]">
                Solve a problem with us
              </a>
            </div>
          </div>
          <div className="mt-20 grid gap-4 border-t border-zinc-900 pt-8 text-sm text-zinc-500 md:grid-cols-4">
            <p><span className="font-black text-zinc-200">Trade</span><br />Controlled execution technology.</p>
            <p><span className="font-black text-zinc-200">Engineering</span><br />Reliability and problem solving.</p>
            <p><span className="font-black text-zinc-200">Management & Data</span><br />Information into decisions.</p>
            <p><span className="font-black text-zinc-200">Consultancy</span><br />Practical change in the real system.</p>
          </div>
        </div>
      </section>

      <section id="areas" className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Four areas. One philosophy.</p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">Different systems. The same job: improve performance.</h2>
            </div>
            <p className="text-lg leading-8 text-zinc-400">
              The Performance Engineer is the parent business. PETE is the technology and intelligence layer that can increasingly connect the tools, data and decisions underneath it.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <a
                key={pillar.title}
                href={pillar.href}
                className="group rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 transition hover:-translate-y-1 hover:border-[#c9a227]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">{pillar.eyebrow}</p>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">0{pillars.indexOf(pillar) + 1}</span>
                </div>
                <h3 className="mt-7 text-4xl font-black uppercase md:text-5xl">{pillar.title}</h3>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{pillar.status}</p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{pillar.text}</p>
                <p className="mt-9 text-xs font-black uppercase tracking-[0.22em] text-zinc-500 transition group-hover:text-[#c9a227]">{pillar.cta} →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">The operating philosophy</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase md:text-6xl">Performance improvement should be a closed loop.</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {workflow.map(([number, title, text]) => (
              <div key={number} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6">
                <p className="text-xs font-black tracking-[0.25em] text-[#c9a227]">{number}</p>
                <h3 className="mt-5 text-2xl font-black uppercase">{title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Start with the problem</p>
              <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Not every problem needs another piece of software.</h2>
              <p className="mt-7 text-lg leading-8 text-zinc-400">
                Sometimes the answer is a better process, better information, clearer ownership or an experienced outside view. The system should fit the problem, not the other way round.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {problems.map(([problem, area, answer, href]) => (
                <a key={problem} href={href} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6 transition hover:border-[#c9a227]">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c9a227]">{area}</p>
                  <h3 className="mt-4 text-2xl font-black">{problem}</h3>
                  <p className="mt-4 leading-7 text-zinc-400">{answer}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#c9a227]/35 bg-[#12100a] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">PETE intelligence layer</p>
            <h2 className="mt-5 text-4xl font-black uppercase">Tools today. A connected performance system tomorrow.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              PETE already operates across software, data capture, analysis and guided decision-making. The long-term direction is a connected performance layer that can bring assets, management information, actions, engineering history and operational data together without forcing every business to replace everything it already uses.
            </p>
            <p className="mt-5 leading-7 text-zinc-500">
              The goal is not another bloated ERP. It is a practical operating system for performance that can connect to existing systems, replace weak processes where it adds value and keep the evidence behind every decision.
            </p>
          </div>
          <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Knowledge & support</p>
            <h2 className="mt-5 text-4xl font-black uppercase">Useful information people can actually use.</h2>
            <div className="mt-8 space-y-4">
              <a href="/engineering/support" className="block rounded-2xl border border-zinc-800 p-5 transition hover:border-[#c9a227]">
                <p className="font-black text-zinc-100">Engineering Support</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">RCA, reliability, maintenance, OEE, MTBF/MTTR, bearing failures, conveyors and more.</p>
              </a>
              <a href="/management-data/support" className="block rounded-2xl border border-zinc-800 p-5 transition hover:border-[#c9a227]">
                <p className="font-black text-zinc-100">Management & Data Support</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">Management information, digital asset management, review systems, accountability, planning and decision support.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Consultancy</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-7xl">Got a problem worth solving?</h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-zinc-400">
            Engineering, management, digital systems or a mess of data nobody can turn into a decision — start with the problem and we will work out whether the answer is advice, a better process, a practical tool or a wider system.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/consultancy" className="rounded-full bg-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Explore consultancy</a>
            <a href="mailto:hello@theperformanceengineer.uk?subject=Performance%20consultancy%20enquiry" className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]">Start a conversation</a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 md:grid-cols-[1.3fr_0.7fr] md:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">The Performance Engineer Ltd</p>
            <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">Built in Yorkshire. Engineered for performance.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              A UK performance, software and consultancy business built around real engineering and operational problems rather than generic transformation theatre.
            </p>
          </div>
          <div className="flex items-end md:justify-end">
            <a href="/about" className="rounded-full border border-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#c9a227] transition hover:bg-[#c9a227] hover:text-black">About the company</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-10 text-sm text-zinc-500">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <p className="font-bold text-zinc-300">The Performance Engineer Ltd</p>
            <p className="mt-2">Registered in England & Wales · Company No. 17437264</p>
            <p className="mt-2">Registered Office: 66 Paul Street, London, EC2A 4NA</p>
            <p className="mt-2">hello@theperformanceengineer.uk</p>
          </div>
          <div className="md:text-right">
            <p>© 2026 The Performance Engineer Ltd. All rights reserved.</p>
            <p className="mt-2">
              <a href="/customer" className="hover:text-[#c9a227]">Customer Portal</a>
              <span className="mx-2 text-zinc-700">·</span>
              <a href="/about" className="hover:text-[#c9a227]">About</a>
            </p>
            <p className="mt-2 tracking-[0.2em] text-zinc-600">MEASURE. ANALYSE. IMPROVE.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
