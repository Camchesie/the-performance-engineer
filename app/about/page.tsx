import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Performance Engineer Ltd is a UK performance, software and consultancy business spanning Trade, Engineering, Management & Data and practical improvement.",
  alternates: { canonical: "/about" },
};

const companyDetails = [
  ["Company", "The Performance Engineer Ltd"],
  ["Registered", "England & Wales"],
  ["Company No.", "17437264"],
  ["Registered Office", "66 Paul Street, London, EC2A 4NA"],
  ["Email", "hello@theperformanceengineer.uk"],
];

const areas = [
  ["Trade", "Controlled execution technology through PETE Trade Gateway.", "/trade-gateway"],
  ["Engineering", "Practical engineering tools, support, reliability and problem solving.", "/engineering"],
  ["Management & Data", "Management information, digital asset management, operating systems and decision support.", "/management-data"],
  ["Consultancy", "Engineering, management and digital-system improvement built around the real problem.", "/consultancy"],
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
          <nav className="hidden items-center gap-5 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400 lg:flex">
            <a className="hover:text-[#c9a227]" href="/trade-gateway">Trade</a>
            <a className="hover:text-[#c9a227]" href="/engineering">Engineering</a>
            <a className="hover:text-[#c9a227]" href="/management-data">Management & Data</a>
            <a className="hover:text-[#c9a227]" href="/consultancy">Consultancy</a>
          </nav>
          <a href="mailto:hello@theperformanceengineer.uk" className="rounded-full border border-[#c9a227]/70 px-4 py-2.5 text-[11px] font-black uppercase tracking-widest text-[#c9a227] hover:bg-[#c9a227] hover:text-black">Contact</a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,162,39,0.14),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c9a227]">About The Performance Engineer</p>
          <h1 className="mt-6 max-w-6xl text-5xl font-black uppercase leading-[0.95] md:text-8xl">
            Performance is a system. <span className="text-[#c9a227]">Engineer it.</span>
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
            The Performance Engineer Ltd is a UK performance, software and consultancy business focused on turning real operational problems into measurable, controlled improvement.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">What the business is becoming</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase md:text-6xl">One company. Four practical routes into performance.</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {areas.map(([title, text, href]) => (
              <a key={title} href={href} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7 transition hover:border-[#c9a227]">
                <h3 className="text-3xl font-black text-[#c9a227]">{title}</h3>
                <p className="mt-4 text-lg leading-8 text-zinc-400">{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">The approach</p>
            <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Measure. Analyse. Improve.</h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-zinc-400">
              <p>
                Whether the system is a machine, a management process, a digital asset library or a trade-execution workflow, the principle is the same: understand what is actually happening before choosing the solution.
              </p>
              <p>
                PETE is the technology and intelligence layer underneath that philosophy. Today it already supports software, data capture, structured analysis and guided decisions. The longer-term direction is a connected performance operating layer that can work with existing business systems rather than forcing a complete replacement on day one.
              </p>
              <p>
                The commercial side follows the same logic: use the free knowledge, buy a practical tool where that is enough, or use consultancy when the problem needs a wider system change.
              </p>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#c9a227]/35 bg-[#0d0d0d] p-8">
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
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c9a227]">The direction</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">From individual tools to connected business performance.</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-zinc-400">
            The ambition is not to build another bloated ERP for the sake of it. It is to create a practical performance layer that connects information, assets, actions, decisions and improvement — replacing weak processes only where that genuinely adds value.
          </p>
        </div>
      </section>
    </main>
  );
}
