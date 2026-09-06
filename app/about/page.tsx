const companyDetails = [
  ["Company", "The Performance Engineer Ltd"],
  ["Registered", "England & Wales"],
  ["Company No.", "17437264"],
  ["Registered Office", "66 Paul Street, London, EC2A 4NA"],
  ["Email", "hello@theperformanceengineer.uk"],
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">The Performance Engineer</span>
          </a>
          <nav className="flex items-center gap-5 text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
            <a className="transition hover:text-[#c9a227]" href="/trade-gateway">Trade Gateway</a>
            <a className="transition hover:text-[#c9a227]" href="mailto:hello@theperformanceengineer.uk">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,162,39,0.14),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c9a227]">About The Performance Engineer</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.95] md:text-8xl">
            Built in Yorkshire. <span className="text-[#c9a227]">Engineered for performance.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            The Performance Engineer Ltd is a UK software and consultancy business focused on performance, automation and intelligent digital systems.
          </p>
        </div>
      </section>

      <div className="gold-line" />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">What we build</p>
            <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Practical systems that solve real problems.</h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-zinc-400">
              <p>
                We develop technology designed to remove friction, improve control and help people and businesses perform better — from PETE Trade Gateway and the wider PETE software ecosystem to engineering and management consultancy.
              </p>
              <p>
                Our approach is simple: measure the system, understand the weakness, engineer the improvement and keep validating the result.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <a href="/trade-gateway" className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7 transition hover:border-[#c9a227]">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">Software</p>
                <h3 className="mt-4 text-2xl font-black text-[#c9a227]">PETE Trade Gateway</h3>
                <p className="mt-4 leading-7 text-zinc-400">Customer-directed trade execution and management through Telegram and MetaTrader.</p>
              </a>
              <div className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">Consultancy</p>
                <h3 className="mt-4 text-2xl font-black text-[#c9a227]">Engineering & Management</h3>
                <p className="mt-4 leading-7 text-zinc-400">Reliability, asset systems, operational improvement and practical performance engineering.</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#c9a227]/35 bg-[#0d0d0d] p-8 glow">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Company information</p>
            <dl className="mt-7 divide-y divide-zinc-800">
              {companyDetails.map(([label, value]) => (
                <div key={label} className="py-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">{label}</dt>
                  <dd className="mt-2 leading-7 text-zinc-300">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c9a227]">The philosophy</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Measure. Analyse. Improve.</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-zinc-400">
            Whether the system is a piece of software, a factory process, a trading workflow or an athlete, the principle stays the same: understand what is happening, improve what matters and keep measuring.
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
