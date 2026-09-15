export const metadata = {
  title: "How PETE Works | PETE Trade Gateway",
  description:
    "See exactly how PETE Trade Gateway validates, routes, executes and tracks customer-directed MT4 trades through your own broker account.",
};

const steps = [
  {
    number: "01",
    title: "You choose the trade",
    text: "Send PETE a supported trade instruction through Telegram. You define the direction, entry, stop, targets and risk within the supported command format.",
  },
  {
    number: "02",
    title: "PETE validates it",
    text: "PETE checks that the instruction makes structural sense before it can progress. Invalid trade geometry is rejected rather than silently reinterpreted.",
  },
  {
    number: "03",
    title: "Your setup is checked",
    text: "The Hosted Core associates the instruction with the customer, subscription and paired installation, while the local Gateway and MT4 route remain part of the execution chain.",
  },
  {
    number: "04",
    title: "PETE builds the basket",
    text: "PETE applies the supplied risk and prepares the execution basket. Multi-target instructions can be represented as multiple broker orders linked to one PETE basket.",
  },
  {
    number: "05",
    title: "Gateway sends it to MT4",
    text: "The PETE Windows Gateway Agent bridges the hosted service to the PETE client running inside your own MT4 terminal on a Windows PC or VPS.",
  },
  {
    number: "06",
    title: "Your broker executes",
    text: "Orders pass through your own MT4 terminal to your own broker account. Broker fills, symbol rules, lot limits, margin and normal execution conditions still apply.",
  },
  {
    number: "07",
    title: "PETE tracks the basket",
    text: "PETE tracks the execution state and basket lifecycle rather than simply sending an instruction and forgetting about it.",
  },
  {
    number: "08",
    title: "You get feedback",
    text: "Telegram becomes the control and feedback surface, showing whether an instruction was accepted, executed, rejected or closed.",
  },
];

const customerControls = [
  "You decide the trade and market direction.",
  "You choose the broker and MT4 account.",
  "You supply the supported trade instruction and requested risk.",
  "You control whether PETE is armed for broker writes.",
  "Your broker account and trading funds remain with your broker.",
];

const failClosed = [
  "Invalid trade geometry is rejected rather than silently changed.",
  "Expired-but-valid Agent sessions use the supported session-recovery path.",
  "Each extracted customer package uses its own local state folder to avoid installation collisions.",
  "Expired pairing credentials must be replaced rather than bypassed.",
  "Broker writes should not be enabled until the preflight route is healthy.",
];

const requirements = [
  "A supported Windows PC or suitable VPS.",
  "MT4 open and logged into the intended broker account.",
  "The PETE MT4 client installed on one chart.",
  "The PETE Gateway Agent running.",
  "The required WebRequest permission enabled in MT4.",
  "A healthy paired installation and valid subscription.",
];

export default function HowPeteWorks() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">
              The Performance Engineer
            </span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/trade-gateway"
              className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] sm:block"
            >
              Trade Gateway
            </a>
            <a
              href="/PETE_Trade_Gateway_Customer_Guide_v1_1.pdf"
              className="rounded-full border border-[#c9a227] px-5 py-3 text-xs font-black uppercase tracking-widest text-[#c9a227] transition hover:bg-[#c9a227] hover:text-black"
              download
            >
              Download guide
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(201,162,39,0.16),transparent_34rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c9a227]">
            PETE Trade Gateway · How it works
          </p>
          <h1 className="mt-6 max-w-6xl text-5xl font-black uppercase leading-[0.95] md:text-8xl">
            The Telegram message is only <span className="text-[#c9a227]">the front door.</span>
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
            PETE is customer-directed trade execution and trade-management software for MT4. You decide the trade. PETE validates the instruction, connects it to your own MT4 terminal, routes it through your own broker account and reports the trade lifecycle back to you through Telegram.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/trade-gateway#founding-beta"
              className="rounded-full bg-[#c9a227] px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-black transition hover:bg-[#e4c45a]"
            >
              Founding Beta · £9.99/month
            </a>
            <a
              href="/PETE_Trade_Gateway_Customer_Guide_v1_1.pdf"
              className="rounded-full border border-zinc-700 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest transition hover:border-[#c9a227] hover:text-[#c9a227]"
              download
            >
              Download complete guide
            </a>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#c9a227]/35 bg-[#0d0d0d] p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">PETE in 60 seconds</p>
            <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase md:text-6xl">One customer instruction. A controlled execution chain underneath.</h2>
            <div className="mt-10 grid gap-3 md:grid-cols-5">
              {["Telegram", "PETE Hosted Core", "Windows Gateway", "MT4", "Your broker"].map((item, index) => (
                <div key={item} className="relative rounded-2xl border border-zinc-800 bg-black px-5 py-6 text-center">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">0{index + 1}</p>
                  <p className="mt-3 font-black text-[#c9a227]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">
              Your broker account remains yours. PETE does not hold your trading funds or operate a pooled trading account. It is the engineered infrastructure between your instruction and your broker.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">What happens after you press Send</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase md:text-6xl">Eight stages between your instruction and the full trade lifecycle.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7">
                <p className="text-sm font-black text-[#c9a227]">{step.number}</p>
                <h3 className="mt-5 text-2xl font-black uppercase">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Why the Windows Gateway matters</p>
            <h2 className="mt-5 text-4xl font-black uppercase">A real bridge into your MT4 environment.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              PETE deliberately uses a local Windows or VPS Gateway rather than pretending every MT4 broker account is a direct cloud API. The paired installation, broker binding and MT4 heartbeat form the local execution route between PETE&apos;s hosted control layer and your own terminal.
            </p>
            <p className="mt-5 leading-8 text-zinc-500">That architecture is part of what makes PETE more than a Telegram message copier.</p>
          </div>

          <div className="rounded-3xl border border-[#c9a227]/35 bg-[#12100a] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Validation philosophy</p>
            <h2 className="mt-5 text-4xl font-black uppercase">Fail closed. Don&apos;t guess.</h2>
            <p className="mt-6 leading-8 text-zinc-400">
              Execution software should not guess what a dangerous or ambiguous instruction probably meant. PETE is designed to stop rather than improvise when it cannot safely establish what should happen.
            </p>
            <ul className="mt-7 space-y-4 text-sm leading-7 text-zinc-400">
              {failClosed.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c9a227]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Preflight</p>
              <h2 className="mt-5 text-4xl font-black uppercase">Prove the route before trading.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Founding Beta setup includes a preflight stage before the customer progresses to live broker writes. It checks the local route including MT4 heartbeat, broker/account binding, connectivity, trade permission and online authorization requirements.
              </p>
              <div className="mt-8 rounded-2xl border border-[#c9a227]/30 bg-black p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Do not continue until</p>
                <p className="mt-3 text-2xl font-black text-[#c9a227]">PRE-FLIGHT PASSED</p>
              </div>
              <p className="mt-6 leading-8 text-zinc-500">Beta onboarding deliberately starts with a demo broker account so the complete route can be proven before live use.</p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">What you control</p>
              <h2 className="mt-5 text-4xl font-black uppercase">The trading decision stays with you.</h2>
              <ul className="mt-7 space-y-4 text-sm leading-7 text-zinc-400">
                {customerControls.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c9a227]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 leading-8 text-zinc-500">
                Public Gateway V1 does not choose a market direction on the customer&apos;s behalf. PETE&apos;s role is the execution infrastructure around the instruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">What needs to be running</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase md:text-6xl">PETE is infrastructure, so the route needs to be online.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {requirements.map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6 text-sm leading-7 text-zinc-400">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl leading-8 text-zinc-500">
            A VPS is optional, but useful if you want the Gateway and MT4 available without leaving a home PC running continuously.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">PETE is</p>
            <ul className="mt-7 space-y-4 text-lg leading-8 text-zinc-300">
              <li>Customer-directed execution software.</li>
              <li>An MT4 execution bridge.</li>
              <li>A validation and authorization layer.</li>
              <li>A risk-aware basket execution system.</li>
              <li>A trade lifecycle and feedback system.</li>
              <li>Software operating through your own broker account.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">PETE is not</p>
            <ul className="mt-7 space-y-4 text-lg leading-8 text-zinc-400">
              <li>A signals subscription.</li>
              <li>Investment advice.</li>
              <li>A managed account.</li>
              <li>A profit guarantee.</li>
              <li>A pooled trading account.</li>
              <li>An autonomous public strategy in Gateway V1.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Broker and symbol realities</p>
          <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase md:text-6xl">Your broker still behaves like your broker.</h2>
          <p className="mt-7 max-w-5xl text-lg leading-8 text-zinc-400">
            PETE works through the customer&apos;s broker, so broker-specific rules still exist. Symbol names, contract sizes, lot steps, minimum lots, trading permissions, margin requirements and execution conditions can vary. That is one reason the Founding Beta is deliberately being tested across different brokers, PCs and VPS environments.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#c9a227]/40 bg-[#0d0d0d] p-8 text-center glow md:p-14">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Founding Beta</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Understand it before you use it.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            The Founding Beta is deliberately small, initially targeting around 5–10 MT4 traders so each onboarding can be observed properly across different brokers, Windows environments and VPS setups.
          </p>
          <p className="mt-7 text-5xl font-black text-[#c9a227]">£9.99<span className="text-lg text-zinc-400"> / month</span></p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500">The Founding Beta price is intended to remain locked while the subscription remains continuously active.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/trade-gateway#founding-beta"
              className="rounded-full bg-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]"
            >
              View Founding Beta
            </a>
            <a
              href="/PETE_Trade_Gateway_Customer_Guide_v1_1.pdf"
              className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]"
              download
            >
              Download complete guide
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-900 bg-[#090909] p-8">
          <h2 className="text-lg font-black uppercase tracking-wide text-zinc-200">Important information</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-500">
            PETE Trade Gateway is execution and trade-management software for customer-directed instructions. It does not provide investment advice, trading signals or guaranteed outcomes. Trading leveraged products can result in losses. Customers remain responsible for their trading decisions, broker account and instructions submitted to PETE.
          </p>
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
            <p className="mt-2"><a href="/trade-gateway" className="hover:text-[#c9a227]">PETE Trade Gateway</a></p>
            <p className="mt-2"><a href="/about" className="hover:text-[#c9a227]">About The Performance Engineer</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
