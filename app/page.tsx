const systems = [
  {
    title: "PETE Trade Gateway",
    status: "Founding Beta coming soon",
    href: "/trade-gateway",
    text: "Customer-directed trade execution and management through Telegram and MetaTrader, engineered around control, risk and traceability.",
  },
  {
    title: "PETE Trading Engine",
    status: "Live development",
    href: "#systems",
    text: "Autonomous trading research engineered through live observation, structured telemetry, testing and continuous validation.",
  },
  {
    title: "PETE Athlete Engine",
    status: "In development",
    href: "#systems",
    text: "Performance intelligence for athletes, built around measurable output, training data and continuous improvement.",
  },
  {
    title: "Engineering & Consultancy",
    status: "The Performance Engineer Ltd",
    href: "mailto:hello@theperformanceengineer.uk",
    text: "Engineering, reliability, asset systems and management consultancy focused on operational performance and practical improvement.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">
              The Performance Engineer
            </span>
          </a>
          <nav className="flex items-center gap-5 text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
            <a className="transition hover:text-[#c9a227]" href="#systems">Systems</a>
            <a className="transition hover:text-[#c9a227]" href="/trade-gateway">Trade Gateway</a>
            <a className="transition hover:text-[#c9a227]" href="/about">About</a>
            <a className="transition hover:text-[#c9a227]" href="mailto:hello@theperformanceengineer.uk">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(201,162,39,0.10),transparent_35%)]" />
        <div className="relative mx-auto w-full max-w-6xl">
          <img src="/pte-logo.png" alt="The Performance Engineer" className="mx-auto mb-10 w-64 md:w-96" />
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#c9a227]">The Performance Engineer Ltd</p>
          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-8xl">
            Performance isn&apos;t found.
            <span className="block text-[#c9a227]">It&apos;s engineered.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
            Engineering better systems across trading technology, athletic performance and industry through data, automation and continuous improvement.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/trade-gateway" className="rounded-full bg-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-[#e4c45a]">
              Explore Trade Gateway
            </a>
            <a href="https://instagram.com/the.performance.engineer" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-widest transition hover:border-[#c9a227] hover:text-[#c9a227]">
              Follow the build
            </a>
          </div>
        </div>
      </section>

      <section id="systems" className="border-y border-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#c9a227]">The PETE ecosystem</p>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-black uppercase md:text-6xl">One philosophy. Multiple performance systems.</h2>
            <p className="max-w-md text-zinc-500">Measure the system. Understand the weakness. Engineer the improvement.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {systems.map((system) => (
              <a key={system.title} href={system.href} className="group rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8 transition hover:-translate-y-1 hover:border-[#c9a227]">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">{system.status}</p>
                <h3 className="text-3xl font-black text-[#c9a227]">{system.title}</h3>
                <p className="mt-6 max-w-xl leading-7 text-zinc-400">{system.text}</p>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 transition group-hover:text-white">Explore →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#c9a227]/30 bg-[#0d0d0d] p-8 text-center glow md:p-14">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Coming soon</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">PETE Trade Gateway</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Message your trade. PETE handles the controlled execution and management through your connected MetaTrader broker account.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/trade-gateway" className="rounded-full bg-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">See what&apos;s coming</a>
            <a href="mailto:hello@theperformanceengineer.uk?subject=PETE%20Trade%20Gateway%20Founding%20Beta" className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]">Register interest</a>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 md:grid-cols-[1.3fr_0.7fr] md:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">The Performance Engineer Ltd</p>
            <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">Built in Yorkshire. Engineered for performance.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">A UK software and consultancy business focused on performance, automation and intelligent digital systems.</p>
          </div>
          <div className="flex items-end md:justify-end">
            <a href="/about" className="rounded-full border border-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#c9a227] transition hover:bg-[#c9a227] hover:text-black">About the company</a>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#c9a227]">The philosophy</p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">Measure. Analyse. Improve.</h2>
          <p className="mt-8 text-lg leading-9 text-zinc-400">
            Whether it&apos;s a factory, a trading system or an athlete, the process is the same: observe the system, measure the output, understand the weakness and improve the result.
          </p>
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
            <p className="mt-2 tracking-[0.2em] text-zinc-600">BUILT IN YORKSHIRE. ENGINEERED FOR PERFORMANCE.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
