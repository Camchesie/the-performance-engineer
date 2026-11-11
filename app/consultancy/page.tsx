import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultancy | Engineering, Management & Digital Systems",
  description:
    "Practical engineering, management, data and digital-systems consultancy from The Performance Engineer Ltd.",
  alternates: { canonical: "/consultancy" },
};

const services = [
  {
    title: "Engineering & Reliability",
    text: "Fault reduction, reliability improvement, maintenance strategy, RCA systems, PM effectiveness, asset criticality, engineering performance and operating structure.",
    examples: ["Reliability review", "Repeat-failure reduction", "PM optimisation", "Engineering KPI system"],
  },
  {
    title: "Management & Operations",
    text: "Management information, operating reviews, accountability, team structure, planning, prioritisation and continuous-improvement systems that help managers control the work.",
    examples: ["Weekly operating rhythm", "KPI / MI design", "Action governance", "Resource planning"],
  },
  {
    title: "Digital & Data Systems",
    text: "Digital asset management, document control, reporting structures, workflow digitisation, data clean-up and practical systems that connect information to the work.",
    examples: ["Digital asset structure", "Document / revision control", "Dashboard logic", "Workflow design"],
  },
  {
    title: "Bespoke Performance Systems",
    text: "Where the existing tools do not fit, we can help define and build a practical digital or data-led system around the actual process rather than forcing the process into generic software.",
    examples: ["Process mapping", "System specification", "Prototype / MVP", "PETE-aligned solutions"],
  },
];

const engagement = [
  ["Diagnostic Review", "Understand the current state, evidence, constraints and biggest opportunities before committing to a larger change."],
  ["Focused Improvement", "Attack one defined problem such as repeat failures, poor MI, weak action control or uncontrolled asset information."],
  ["System Build", "Design the management, engineering or digital system needed to make the improvement sustainable."],
  ["Ongoing Support", "Periodic review, challenge and development where the business wants an experienced outside view without a permanent role."],
];

export default function ConsultancyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "The Performance Engineer Ltd",
    url: "https://www.theperformanceengineer.uk/consultancy",
    email: "hello@theperformanceengineer.uk",
    areaServed: "GB",
    description:
      "Engineering, management, data and digital-systems consultancy focused on practical performance improvement.",
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">The Performance Engineer</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/engineering" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] lg:block">Engineering</a>
            <a href="/management-data" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] md:block">Management & Data</a>
            <a href="mailto:hello@theperformanceengineer.uk?subject=Consultancy%20enquiry" className="rounded-full bg-[#c9a227] px-5 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Enquire</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_20%,rgba(201,162,39,0.16),transparent_32rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c9a227]">Consultancy</p>
          <h1 className="mt-6 max-w-6xl text-5xl font-black uppercase leading-[0.93] md:text-8xl">
            Practical improvement. <span className="text-[#c9a227]">Not transformation theatre.</span>
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
            Engineering, management and digital-systems consultancy for organisations that need a clearer problem definition, a better operating system or practical support getting an improvement over the line.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="mailto:hello@theperformanceengineer.uk?subject=Consultancy%20enquiry" className="rounded-full bg-[#c9a227] px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Start a conversation</a>
            <a href="#services" className="rounded-full border border-zinc-700 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]">See where we can help</a>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Consultancy areas</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase md:text-6xl">Start with the problem. Build the right response.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8">
                <h3 className="text-3xl font-black text-zinc-100">{service.title}</h3>
                <p className="mt-5 text-lg leading-8 text-zinc-400">{service.text}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.examples.map((example) => (
                    <span key={example} className="rounded-full border border-zinc-800 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">{example}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">How we work</p>
            <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Evidence first. Scope second. Solution third.</h2>
            <p className="mt-7 text-lg leading-8 text-zinc-400">
              The quickest way to waste money is to choose the solution before the problem is understood. We start by understanding the current system, the evidence, the constraints and what better actually needs to look like.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {engagement.map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6">
                <h3 className="text-xl font-black text-[#c9a227]">{title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Engineering problem?</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Start with Engineering.</h2>
            <p className="mt-5 leading-8 text-zinc-400">Reliability, fault finding, RCA, maintenance and engineering performance.</p>
            <a href="/engineering" className="mt-7 inline-block text-xs font-black uppercase tracking-[0.2em] text-[#c9a227]">Engineering →</a>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Management or data problem?</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Start with Management & Data.</h2>
            <p className="mt-5 leading-8 text-zinc-400">MI, operating rhythms, digital assets, accountability and planning.</p>
            <a href="/management-data" className="mt-7 inline-block text-xs font-black uppercase tracking-[0.2em] text-[#c9a227]">Management & Data →</a>
          </div>
          <div className="rounded-3xl border border-[#c9a227]/35 bg-[#12100a] p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Not sure where it fits?</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Tell us the problem.</h2>
            <p className="mt-5 leading-8 text-zinc-400">You do not need to diagnose the consultancy category before contacting us. Describe what is not working and we can start there.</p>
            <a href="mailto:hello@theperformanceengineer.uk?subject=Performance%20problem%20enquiry" className="mt-7 inline-block text-xs font-black uppercase tracking-[0.2em] text-[#c9a227]">hello@theperformanceengineer.uk →</a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#c9a227]/35 bg-[#0d0d0d] p-8 text-center md:p-14">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">The Performance Engineer</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Measure. Analyse. Improve.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            The aim is simple: leave the organisation with better control, better information and a system that keeps working after the consultancy engagement finishes.
          </p>
          <a href="mailto:hello@theperformanceengineer.uk?subject=Consultancy%20enquiry" className="mt-9 inline-block rounded-full bg-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Discuss a project</a>
        </div>
      </section>
    </main>
  );
}
