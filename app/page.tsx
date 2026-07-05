const projects = [
  {
    title: "PETE OS",
    status: "Live development",
    text: "Automated trading intelligence engineered through testing, data, backtesting and live market observation.",
  },
  {
    title: "Athlete Engine",
    status: "Coming soon",
    text: "Performance intelligence for CrossFit athletes. Built to measure, analyse and improve real athletic output.",
  },
  {
    title: "The Journal",
    status: "Building in public",
    text: "Engineering, training, trading systems and lessons from the build. No hype. Just the process.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <img
          src="/pte-logo.png"
          alt="The Performance Engineer"
          className="mx-auto mb-12 w-64 md:w-96"
        />

        <h1 className="max-w-5xl text-5xl font-black uppercase tracking-tight md:text-8xl">
          Performance isn&apos;t found.
          <span className="block text-[#c9a227]">It&apos;s engineered.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
          Engineering better athletes, traders and teams through systems, data
          and continuous improvement.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://instagram.com/the.performance.engineer"
            target="_blank"
            className="rounded-full bg-[#c9a227] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-[#e0bb3f]"
          >
            Follow the Journey
          </a>
          <a
            href="mailto:hello@theperformanceengineer.uk"
            className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:border-[#c9a227] hover:text-[#c9a227]"
          >
            Contact
          </a>
        </div>
      </section>

      <section className="border-y border-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#c9a227]">
            Coming Soon
          </p>

          <h2 className="max-w-3xl text-4xl font-black uppercase md:text-6xl">
            One philosophy. Multiple systems.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-zinc-800 bg-[#101010] p-8 transition hover:border-[#c9a227]"
              >
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                  {project.status}
                </p>
                <h3 className="text-3xl font-black text-[#c9a227]">
                  {project.title}
                </h3>
                <p className="mt-6 leading-7 text-zinc-400">{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#c9a227]">
            The Philosophy
          </p>

          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Measure. Analyse. Improve.
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            Whether it&apos;s a factory, a trading strategy or an athlete, the
            process is the same. Observe the system. Measure the output. Analyse
            the weakness. Improve the result.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-10 text-center text-sm text-zinc-500">
        <p>hello@theperformanceengineer.uk</p>
        <p className="mt-4 tracking-[0.3em]">MEASURE. ANALYSE. IMPROVE.</p>
      </footer>
    </main>
  );
}