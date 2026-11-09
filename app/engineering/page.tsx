const tools = [
  ["5 Why Root Cause Analysis", "Editable investigation template + print-ready PDF"],
  ["Root Cause Investigation", "Evidence-led RCA with cause confidence and verification"],
  ["Fishbone 6M Analysis", "Structured cause-and-effect investigation"],
  ["8D Problem Solving", "Full eight-discipline corrective-action workflow"],
  ["A3 Problem Solving", "One-page structured improvement format"],
  ["Is / Is Not Analysis", "Define the boundary of a problem before chasing causes"],
  ["5W2H Problem Definition", "Who, what, where, when, why, how and how much"],
  ["Corrective Action Tracker", "Owners, dates, status and effectiveness checks"],
  ["Engineering Fault Investigation", "Capture symptoms, evidence, actions and verified cause"],
  ["Automatic Pareto Analysis", "Rank the few causes creating most of the loss"],
  ["Downtime Log", "Structured downtime capture for later analysis"],
  ["MTBF / MTTR Calculator", "Reliability and repair performance calculations"],
  ["OEE Calculator", "Availability, performance and quality in one workbook"],
  ["Asset Criticality Matrix", "Prioritise equipment by operational consequence"],
  ["PM Effectiveness Review", "Challenge whether planned maintenance is actually working"],
  ["Repeat Failure Tracker", "Expose chronic faults and recurring failure modes"],
  ["Engineering Action Tracker", "Control open engineering improvements"],
  ["Weekly Engineering Review", "A consistent operating rhythm for engineering teams"],
  ["Asset Information Sheet", "One source of truth for equipment information"],
  ["Engineering KPI Dashboard", "Track the measures that actually matter"],
];

const benefits = [
  ["Built for real engineering work", "No decorative paperwork. Every tool is designed to help define a problem, analyse evidence, control action or measure performance."],
  ["Editable + printable", "Word, Excel and print-ready PDF formats are used where they make sense rather than forcing every tool into the same format."],
  ["Consistent PETE system", "Shared black, charcoal and gold design, revision control, document identity and PETE watermarking throughout."],
  ["Own Release 1 for life", "The £29.99 purchase is a one-off payment for permanent access to this specific release. Future major packs are separate."],
];

const faqs = [
  ["Is £29.99 a subscription?", "No. PETE Engineering Toolkit Release 1 is a one-off purchase. You keep this release for life."],
  ["Do I get future releases automatically?", "Not with the one-off Release 1 purchase. Future packs can be bought separately. A growing-library membership is planned for engineers who want every current and future tool while subscribed."],
  ["What formats are included?", "Release 1 contains editable Word templates, intelligent Excel workbooks and print-ready PDFs. The format is chosen around the job the tool needs to do."],
  ["Can I use the tools at work?", "Yes. The toolkit is intended for practical engineering use by the purchaser. Redistribution, resale or publishing the original files as your own product is not permitted."],
  ["Is this the PETE Engineering app?", "Not yet. The Toolkit is the first commercial PETE Engineering product. The future app will turn these same engineering systems into guided digital workflows."],
  ["Do you offer engineering consultancy?", "Yes. The Performance Engineer can support businesses with engineering investigations, reliability, maintenance, OEE, root-cause analysis and operational improvement. Consultancy is scoped individually — enquire for a quote."],
];

type PageProps = {
  searchParams: Promise<{ checkout?: string | string[] }>;
};

export default async function EngineeringPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const checkoutUnavailable = params.checkout === "unavailable";

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">The Performance Engineer</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#included" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] md:block">20 tools</a>
            <a href="#consultancy" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] md:block">Consultancy</a>\n            <a href="#faq" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] sm:block">FAQ</a>
            <a href="/engineering/buy" className="rounded-full bg-[#c9a227] px-5 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Buy Release 1</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(201,162,39,0.18),transparent_32rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c9a227]">PETE Engineering · Toolkit Release 1</p>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] md:text-8xl">
              Investigate. Solve. <span className="text-[#c9a227]">Improve.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
              Twenty practical engineering tools for fault finding, root-cause analysis, reliability, maintenance and performance improvement — built to be used, not filed away.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em] text-zinc-300">
              <span className="rounded-full border border-zinc-800 bg-[#0d0d0d] px-4 py-3">20 engineering tools</span>
              <span className="rounded-full border border-zinc-800 bg-[#0d0d0d] px-4 py-3">Word + Excel + PDF</span>
              <span className="rounded-full border border-zinc-800 bg-[#0d0d0d] px-4 py-3">One-off purchase</span>
              <span className="rounded-full border border-zinc-800 bg-[#0d0d0d] px-4 py-3">Release 1 owned for life</span>
            </div>

            {checkoutUnavailable && (
              <div className="mt-8 max-w-3xl rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-4 text-sm leading-6 text-amber-100">
                Checkout is not live yet. The Toolkit is ready; the Engineering Stripe product is being connected before public release.
              </div>
            )}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="/engineering/buy" className="rounded-full bg-[#c9a227] px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-black transition hover:bg-[#e4c45a]">
                Buy Release 1 — £29.99
              </a>
              <a href="#included" className="rounded-full border border-zinc-700 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest transition hover:border-[#c9a227] hover:text-[#c9a227]">
                See everything included
              </a>
            </div>
            <p className="mt-5 text-sm text-zinc-600">One payment. No subscription required. This release remains yours.</p>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Built around the work</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase md:text-6xl">More useful than another folder full of blank forms.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {benefits.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8">
                <h3 className="text-2xl font-black text-[#c9a227]">{title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="included" className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Release 1</p>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-black uppercase md:text-6xl">20 tools. One engineering system.</h2>
            <p className="max-w-md leading-7 text-zinc-500">Fault finding, structured problem solving, reliability, maintenance and management — using the same PETE visual language throughout.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {tools.map(([title, text], index) => (
              <article key={title} className="flex gap-5 rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6">
                <span className="mt-1 font-black text-[#c9a227]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-black text-zinc-100">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.7fr]">
          <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">The bigger direction</p>
            <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">The first chapter of PETE Engineering.</h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
              Release 1 puts the core engineering systems in your hands today. The future PETE Engineering app will turn the same methods into guided investigations, asset history, searchable knowledge and engineering intelligence from the palm of your hand.
            </p>
          </div>
          <aside className="rounded-[2rem] border border-[#c9a227]/40 bg-[#12100a] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Release 1 price</p>
            <p className="mt-5 text-6xl font-black text-[#c9a227]">£29.99</p>
            <p className="mt-2 font-bold text-zinc-200">One-off purchase</p>
            <p className="mt-5 leading-7 text-zinc-400">Own PETE Engineering Toolkit Release 1 for life. No recurring payment required for this pack.</p>
            <a href="/engineering/buy" className="mt-8 block rounded-full bg-[#c9a227] px-7 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">
              Buy Release 1
            </a>
          </aside>
        </div>
      </section>


      <section id="consultancy" className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Engineering Consultancy</p>
              <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Need more than a template?</h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
                The Performance Engineer also supports businesses directly with practical engineering, reliability and operational-improvement consultancy.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Breakdown and repeat-failure investigation",
                  "Root-cause analysis and corrective-action support",
                  "Maintenance strategy and PM effectiveness reviews",
                  "OEE, downtime and reliability improvement",
                  "Engineering KPI and management systems",
                  "Asset criticality and bad-actor reviews",
                  "Engineering process and workflow improvement",
                  "Custom engineering documentation and toolkits",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-zinc-800 bg-black/30 px-5 py-4 text-sm font-bold leading-6 text-zinc-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="flex flex-col justify-between rounded-[2rem] border border-[#c9a227]/40 bg-[#12100a] p-8 md:p-10">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Project support</p>
                <h3 className="mt-5 text-3xl font-black uppercase">Engineering consultation</h3>
                <p className="mt-5 leading-7 text-zinc-400">
                  Every problem is different, so consultancy is quoted around the scope, site, data and level of support required.
                </p>
                <p className="mt-5 text-sm leading-6 text-zinc-500">
                  Initial enquiries are reviewed before any work is agreed. No obligation and no fixed package forced onto the problem.
                </p>
              </div>
              <a
                href="mailto:hello@theperformanceengineer.uk?subject=Engineering%20Consultancy%20Enquiry&body=Hi%20The%20Performance%20Engineer%2C%0A%0AI%27d%20like%20to%20enquire%20about%20engineering%20consultancy.%0A%0ACompany%3A%0ASite%2Flocation%3A%0AProblem%20or%20project%3A%0AWhat%20support%20are%20you%20looking%20for%3F%3A%0A%0AThanks%2C"
                className="mt-8 block rounded-full bg-[#c9a227] px-7 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]"
              >
                Enquire for a quote
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">FAQ</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Clear terms. No subscription tricks.</h2>
          <div className="mt-12 divide-y divide-zinc-800 rounded-3xl border border-zinc-800 bg-[#0d0d0d] px-6 md:px-8">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-black text-zinc-200">
                  <span>{question}</span>
                  <span className="text-2xl font-light text-[#c9a227] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-4xl pr-10 leading-8 text-zinc-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-10 text-sm text-zinc-500">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <p className="font-bold text-zinc-300">The Performance Engineer Ltd</p>
            <p className="mt-2">Registered in England & Wales · Company No. 17437264</p>
            <p className="mt-2">hello@theperformanceengineer.uk</p>
          </div>
          <div className="md:text-right">
            <p>© 2026 The Performance Engineer Ltd. All rights reserved.</p>
            <p className="mt-2"><a href="/" className="hover:text-[#c9a227]">The PETE ecosystem</a></p>
            <p className="mt-2 tracking-[0.2em] text-zinc-600">MEASURE. ANALYSE. IMPROVE.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
