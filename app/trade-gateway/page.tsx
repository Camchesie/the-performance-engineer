const features = [
  ["Telegram-first control", "Send and manage your own trade instructions from The Performance Engineer bot without needing to sit at MetaTrader."],
  ["Risk-aware execution", "PETE validates the instruction, applies account settings and broker constraints, and calculates the requested position risk before execution."],
  ["Multi-target baskets", "Support for single-target trades and multi-leg TP structures with traceable basket IDs and customer-directed management."],
  ["Automated trade management", "Configurable protection policies can manage remaining positions after confirmed broker lifecycle events."],
  ["Broker-aware symbol handling", "PETE discovers the tradable instruments actually available on the connected account and fails closed when the mapping is ambiguous."],
  ["Audit and confirmation", "Execution, management and lifecycle responses are returned to the customer so actions remain visible and traceable."],
];


const faqs = [
  ["What is PETE Trade Gateway?", "PETE Trade Gateway turns a customer-directed trade instruction into a structured, risk-aware order for the connected MetaTrader account, then supports execution, management and lifecycle confirmations."],
  ["Does PETE provide trading signals?", "No. PETE Trade Gateway is execution and trade-management software. You decide what trade you want to place."],
  ["How do I send trades to PETE?", "Through The Performance Engineer Telegram bot. Your Telegram identity is linked to your PETE account during setup."],
  ["Does it work with MT4 and MT5?", "MT4 is the lead implementation and MT5 support is being built alongside it for the commercial product."],
  ["Which brokers does it work with?", "PETE is being designed to work across MetaTrader brokers and common broker symbol variations. Compatibility is checked during setup and PETE fails closed when a mapping is ambiguous."],
  ["Do I need a VPS?", "Not necessarily. PETE can run on a Windows PC, but a VPS is recommended if you want the Gateway available continuously while your own computer is off."],
  ["Can I choose my own risk?", "Yes. PETE supports account defaults and trade-specific risk instructions, subject to hard safety limits and broker constraints."],
  ["What if the requested trade cannot be placed safely?", "PETE checks broker minimum lots, margin and actual initial risk. If the requested basket cannot be placed within the allowed limits, PETE can reduce the viable structure or reject the trade rather than blindly oversizing it."],
  ["Can PETE manage my trade after entry?", "Yes. Supported controls include moving stops, moving to entry or breakeven, closing individual legs or the whole basket, pending-order management and status requests."],
  ["Is PETE guaranteed to make trades profitable?", "No. PETE is execution and management technology. It does not remove trading risk or guarantee any trading outcome."],
];

const flow = [
  ["01", "Link", "Connect your PETE account, Telegram identity and MetaTrader installation."],
  ["02", "Message", "Send your own trade instruction to The Performance Engineer bot."],
  ["03", "Validate", "PETE parses the instruction, checks settings, risk and broker constraints."],
  ["04", "Execute", "An authorised instruction reaches the local Gateway and your MetaTrader account."],
  ["05", "Manage", "Use simple basket commands from Telegram and receive confirmations back."],
];

export default function TradeGateway() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">The Performance Engineer</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] md:block">FAQ</a>
            <a href="#founding-beta" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] sm:block">Founding Beta</a>
            <a href="mailto:hello@theperformanceengineer.uk?subject=PETE%20Trade%20Gateway%20Founding%20Beta" className="rounded-full bg-[#c9a227] px-5 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Register interest</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(201,162,39,0.16),transparent_32rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c9a227]">PETE Trade Gateway · Founding Beta coming soon</p>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] md:text-8xl">Your trade. Your risk. <span className="text-[#c9a227]">Your broker.</span></h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
              Customer-directed trade execution and management through Telegram and MetaTrader, engineered around control, risk and traceability.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em] text-zinc-300">
              <span className="rounded-full border border-zinc-800 bg-[#0d0d0d] px-4 py-3">Telegram control</span>
              <span className="rounded-full border border-zinc-800 bg-[#0d0d0d] px-4 py-3">Risk-aware sizing</span>
              <span className="rounded-full border border-zinc-800 bg-[#0d0d0d] px-4 py-3">MT4 + MT5 target</span>
              <span className="rounded-full border border-zinc-800 bg-[#0d0d0d] px-4 py-3">Broker connected</span>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-8 lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">The idea</p>
              <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">Message the trade. PETE handles the execution layer.</h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
                PETE Trade Gateway is being built for traders who already have their own trade idea or signal and want a faster, controlled way to get it onto their broker account and manage it remotely.
              </p>
            </div>
            <div className="rounded-3xl border border-[#c9a227]/40 bg-[#12100a] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Standard philosophy</p>
              <p className="mt-6 text-2xl font-black leading-tight">Trade your way. PETE handles the execution.</p>
              <p className="mt-6 leading-7 text-zinc-400">Customer defaults can control risk and management behaviour while hard platform safety limits always take priority.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">How it works</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase md:text-6xl">A simple customer experience. A controlled execution path underneath.</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {flow.map(([number, title, text]) => (
              <div key={number} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-6">
                <p className="text-sm font-black text-[#c9a227]">{number}</p>
                <h3 className="mt-5 text-2xl font-black uppercase">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Built into the Gateway</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase md:text-6xl">Execution technology, not trading hype.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-zinc-800 bg-[#0d0d0d] p-7">
                <h3 className="text-xl font-black text-[#c9a227]">{title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Frequently asked questions</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">The things people will want to know.</h2>
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

      <section id="founding-beta" className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#c9a227]/40 bg-[#0d0d0d] p-8 text-center glow md:p-14">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Founding Beta</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">10 founding places.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            The first Founding Beta customers will help validate PETE across real brokers, MetaTrader installations and customer workflows before wider release.
          </p>
          <div className="mx-auto mt-9 max-w-xl rounded-3xl border border-zinc-800 bg-black p-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Founding Beta price</p>
            <p className="mt-3 text-5xl font-black text-[#c9a227]">£9.99<span className="text-lg text-zinc-400"> / month</span></p>
            <p className="mt-4 text-sm leading-6 text-zinc-500">Locked while the subscription remains continuously active.</p>
            <p className="mt-3 text-sm font-bold leading-6 text-zinc-300">Standard pricing will be higher after beta.</p>
          </div>
          <a href="mailto:hello@theperformanceengineer.uk?subject=PETE%20Trade%20Gateway%20Founding%20Beta&body=I%27d%20like%20to%20register%20my%20interest%20in%20PETE%20Trade%20Gateway%20Founding%20Beta." className="mt-9 inline-block rounded-full bg-[#c9a227] px-9 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">
            Register interest
          </a>
          <p className="mt-5 text-xs text-zinc-600">Founding Beta is not yet open for general onboarding.</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-900 bg-[#090909] p-8">
          <h2 className="text-lg font-black uppercase tracking-wide text-zinc-200">Important information</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-500">
            PETE Trade Gateway is execution and trade-management software for customer-directed instructions. It does not provide investment advice, trading signals or guaranteed outcomes. Trading leveraged products can result in losses. Customers remain responsible for their trading decisions, broker account and instructions submitted to PETE.
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Product scope, platform support and Founding Beta terms may change during development and validation.
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
            <p className="mt-2"><a href="/about" className="hover:text-[#c9a227]">About The Performance Engineer</a></p>
            <p className="mt-2 tracking-[0.2em] text-zinc-600">BUILT IN YORKSHIRE. ENGINEERED FOR PERFORMANCE.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
