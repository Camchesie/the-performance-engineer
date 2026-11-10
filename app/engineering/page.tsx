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

const problems = [
  {
    eyebrow: "Machine keeps failing",
    title: "Stop fixing the symptom.",
    text: "Capture what actually happened, narrow the problem, challenge likely causes and record the evidence before calling anything root cause.",
    tools: ["Fault Investigation", "Root Cause Investigation", "5 Why", "Fishbone", "Repeat Failure Tracker"],
  },
  {
    eyebrow: "Downtime keeps climbing",
    title: "Find what is really costing you.",
    text: "Turn downtime into usable evidence, rank the biggest losses and measure whether reliability and repair performance are actually improving.",
    tools: ["Downtime Log", "Automatic Pareto", "OEE", "MTBF / MTTR"],
  },
  {
    eyebrow: "Actions disappear",
    title: "Make improvement stick.",
    text: "Give every corrective action an owner, due date, status and effectiveness check instead of letting the same problem return three weeks later.",
    tools: ["Corrective Action Tracker", "Engineering Action Tracker", "8D", "A3", "Weekly Review"],
  },
  {
    eyebrow: "Engineering needs to prove value",
    title: "Manage with evidence.",
    text: "Prioritise the right assets, challenge PM effectiveness and put the engineering measures that matter in front of the people making decisions.",
    tools: ["Asset Criticality", "PM Effectiveness", "Engineering KPI Dashboard", "Asset Information"],
  },
];

const workflow = [
  ["01", "Capture", "Record the fault, symptoms and evidence while it is still fresh.", "Fault Investigation"],
  ["02", "Define", "Get precise about what the problem is — and what it is not.", "5W2H · Is / Is Not"],
  ["03", "Analyse", "Use data and structured cause thinking instead of jumping to the first explanation.", "Pareto · Fishbone · 5 Why"],
  ["04", "Confirm", "Separate suspected causes from evidence-supported root cause.", "Root Cause Investigation"],
  ["05", "Act", "Assign containment, corrective and improvement actions with ownership.", "8D · A3 · Action Trackers"],
  ["06", "Verify", "Check whether the action actually stopped the failure returning.", "Effectiveness checks · Repeat Failure"],
  ["07", "Learn", "Retain the result and use the trend to improve maintenance and engineering priorities.", "Weekly Review · KPI · OEE · MTBF / MTTR"],
];

const benefits = [
  ["Not just blank templates", "The Excel tools calculate, rank and summarise where appropriate. The investigation documents guide the thinking rather than leaving you staring at an empty box."],
  ["Use the right format for the job", "Editable Word templates, intelligent Excel workbooks and print-ready PDFs are included where they make practical sense."],
  ["One engineering language", "The same PETE structure runs through investigation, corrective action, reliability and management so the pack works as a system rather than twenty unrelated downloads."],
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
            <a href="#problems" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] lg:block">Problems</a>
            <a href="#workflow" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] lg:block">Workflow</a>
            <a href="#preview" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] md:block">Preview</a>
            <a href="#case-study" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] lg:block">Example</a>
            <a href="#included" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] md:block">20 tools</a>
            <a href="#consultancy" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] md:block">Consultancy</a>
            <a href="#faq" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] sm:block">FAQ</a>
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

      <section id="problems" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Start with the problem</p>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-black uppercase md:text-6xl">You do not need another template. You need the right tool when the problem hits.</h2>
            <p className="max-w-md leading-7 text-zinc-500">Release 1 is organised around real engineering jobs: investigate the fault, understand the loss, control the action and prove the improvement.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {problems.map((problem) => (
              <article key={problem.eyebrow} className="rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 transition hover:border-[#c9a227]/60">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">{problem.eyebrow}</p>
                <h3 className="mt-4 text-3xl font-black uppercase text-zinc-100">{problem.title}</h3>
                <p className="mt-5 leading-7 text-zinc-400">{problem.text}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {problem.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-zinc-800 bg-black/40 px-3 py-2 text-xs font-bold text-zinc-400">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">The PETE investigation workflow</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase md:text-6xl">From “it broke again” to a verified fix.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            The tools are designed to work together. Start with evidence, define the problem, analyse causes, confirm root cause, control the action and verify that the failure has actually gone away.
          </p>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
            {workflow.map(([number, title, text, tool]) => (
              <article key={number} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6 xl:min-h-[20rem]">
                <p className="text-sm font-black text-[#c9a227]">{number}</p>
                <h3 className="mt-5 text-2xl font-black uppercase">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-500">{text}</p>
                <p className="mt-6 border-t border-zinc-800 pt-4 text-xs font-bold leading-5 text-zinc-300">{tool}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#c9a227]/30 bg-[#12100a] p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#c9a227]">The rule</p>
              <p className="mt-3 max-w-3xl text-lg font-bold leading-8 text-zinc-200">Do not call something root cause because it sounds believable. Build the evidence, confirm it, then verify the corrective action worked.</p>
            </div>
            <a href="/engineering/buy" className="mt-6 inline-block shrink-0 rounded-full bg-[#c9a227] px-7 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a] md:mt-0">Get Release 1</a>
          </div>
        </div>
      </section>

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

      <section id="preview" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">See the actual product</p>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-black uppercase md:text-6xl">Real PETE tools. Real engineering examples.</h2>
            <p className="max-w-md leading-7 text-zinc-500">These are worked examples built from the actual Release 1 workbooks — not marketing mock-ups.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#0d0d0d]">
              <div className="border-b border-zinc-800 p-6 md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">Automatic Pareto</p>
                <h3 className="mt-3 text-2xl font-black">See the biggest loss first.</h3>
                <p className="mt-3 leading-7 text-zinc-400">Enter failure categories and downtime. PETE ranks the losses automatically so the team can focus on the few problems creating most of the pain.</p>
              </div>
              <img src="data:image/webp;base64,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" alt="Worked PETE Automatic Pareto workbook example" className="w-full bg-white" />
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#0d0d0d]">
              <div className="border-b border-zinc-800 p-6 md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">OEE Calculator</p>
                <h3 className="mt-3 text-2xl font-black">Turn raw production numbers into a performance signal.</h3>
                <p className="mt-3 leading-7 text-zinc-400">Feed in planned time, downtime, speed and quality data. The workbook calculates availability, performance, quality and overall OEE automatically.</p>
              </div>
              <img src="data:image/webp;base64,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" alt="Worked PETE OEE workbook example" className="w-full bg-white" />
            </article>
          </div>

          <div className="mt-8 rounded-3xl border border-[#c9a227]/30 bg-[#12100a] p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#c9a227]">What you are buying</p>
              <p className="mt-3 max-w-3xl text-lg font-bold leading-8 text-zinc-200">A working engineering toolkit you can open and use — not a PDF catalogue of blank boxes.</p>
            </div>
            <a href="/engineering/buy" className="mt-6 inline-block shrink-0 rounded-full bg-[#c9a227] px-7 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a] md:mt-0">Buy Release 1 — £29.99</a>
          </div>
        </div>
      </section>

      <section id="case-study" className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Worked engineering example</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-black uppercase md:text-6xl">A bearing fails again. PETE does not stop at “replace bearing”.</h2>
              <p className="mt-7 text-lg leading-8 text-zinc-400">
                This example shows how Release 1 turns a recurring breakdown into a structured investigation instead of another reactive repair.
              </p>

              <div className="mt-8 rounded-3xl border border-[#c9a227]/30 bg-[#12100a] p-7">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">What the data says</p>
                <p className="mt-4 text-5xl font-black text-zinc-100">101 min</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">Bearing-related downtime</p>
                <p className="mt-5 text-3xl font-black text-[#c9a227]">49%</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">of the example downtime — automatically exposed by the Pareto rather than guessed from memory.</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["01 · Capture", "Three bearing-related stoppages are logged against Conveyor 01. Heat and noise are noted at the motor-side bearing.", "Downtime Log · Fault Investigation"],
                ["02 · Define", "The problem is narrowed to one conveyor, one bearing position and a repeat pattern after previous replacement/lubrication.", "5W2H · Is / Is Not"],
                ["03 · Prioritise", "The Pareto ranks bearing failures first: 101 minutes from 206 minutes of recorded downtime.", "Automatic Pareto"],
                ["04 · Analyse", "Possible causes include lubrication, contamination, bearing fit, shaft condition and misalignment. Evidence is gathered rather than selecting the easiest answer.", "Fishbone · 5 Why"],
                ["05 · Confirm", "Measurement shows coupling misalignment outside the site standard and matching wear on the failed bearing. The cause moves from suspected to supported.", "Root Cause Investigation"],
                ["06 · Correct", "Alignment is corrected, the installation method is standardised and the PM gains an alignment/condition check with an owner and due date.", "Corrective Action · PM Effectiveness"],
                ["07 · Verify", "The asset is monitored through the agreed verification period. No repeat bearing failure means the action can be closed with evidence.", "Repeat Failure · Weekly Review"],
              ].map(([step, text, tool]) => (
                <article key={step} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6 md:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-black uppercase text-[#c9a227]">{step}</h3>
                    <span className="text-xs font-bold text-zinc-600">{tool}</span>
                  </div>
                  <p className="mt-4 leading-7 text-zinc-300">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7 md:flex md:items-center md:justify-between md:gap-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#c9a227]">The difference</p>
              <p className="mt-3 max-w-4xl text-xl font-black leading-8 text-zinc-100">
                “Bearing failed” is a repair record. A confirmed failure mechanism, corrective action and effectiveness check is engineering learning.
              </p>
            </div>
            <a href="/engineering/buy" className="mt-6 inline-block shrink-0 rounded-full bg-[#c9a227] px-7 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a] md:mt-0">
              Get the full toolkit
            </a>
          </div>
          <p className="mt-4 text-xs leading-5 text-zinc-600">Illustrative worked example using sample engineering data. It is not a claim about a specific real-world failure.</p>
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
