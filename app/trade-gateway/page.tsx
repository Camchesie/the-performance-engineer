const features = [
  ["Telegram-first control", "Send your own trade instructions from The Performance Engineer bot without needing to sit at MetaTrader."],
  ["Risk-aware execution", "PETE validates the instruction, applies the requested risk and checks broker constraints before execution."],
  ["Multi-target baskets", "Supported multi-target instructions can be executed as several broker orders linked to one PETE basket."],
  ["Broker-aware execution", "PETE works through the instruments, lot rules, margin and execution conditions on the connected MT4 account."],
  ["Preflight safety", "The customer proves the MT4, broker and Gateway route before progressing to broker writes."],
  ["Lifecycle feedback", "Acceptance, execution, rejection and closure events are returned to the customer through Telegram."],
];

const faqs = [
  ["What is PETE Trade Gateway?", "PETE Trade Gateway is customer-directed execution and trade-management software. You decide the trade; PETE validates, routes and tracks the instruction through your own MT4 and broker account."],
  ["Does PETE provide trading signals?", "No. Public Gateway V1 does not choose trades or market direction for you."],
  ["How do I send trades to PETE?", "Through The Performance Engineer Telegram bot after your Telegram identity and PETE installation have been linked."],
  ["Does it work with MT4?", "Yes. The current Founding Beta is built around MT4."],
  ["Do I need a VPS?", "Not necessarily. PETE can run on a suitable Windows PC, although a VPS is useful if you want MT4 and the Gateway available continuously."],
  ["What happens if an instruction is invalid?", "PETE is designed to fail closed. Invalid or unsafe trade geometry is rejected rather than silently reinterpreted."],
  ["Where are the trades placed?", "On your own broker account through your own MT4 terminal. PETE does not hold your trading funds or operate a pooled account."],
  ["Is PETE guaranteed to make trades profitable?", "No. PETE is execution and management technology. It does not remove trading risk or guarantee any outcome."],
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
            <a href="/how-it-works" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] md:block">How PETE works</a>
            <a href="#faq" className="hidden text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-[#c9a227] sm:block">FAQ</a>
            <a href="#founding-beta" className="rounded-full bg-[#c9a227] px-5 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Founding Beta</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(201,162,39,0.16),transparent_32rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#c9a227]">PETE Trade Gateway · Founding Beta</p>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] md:text-8xl">Your trade. Your risk. <span className="text-[#c9a227]">Your broker.</span></h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">Customer-directed trade execution and management through Telegram and MT4, engineered around validation, control, risk and traceability.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/how-it-works" className="rounded-full bg-[#c9a227] px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">See exactly how PETE works</a>
              <a href="#founding-beta" className="rounded-full border border-zinc-700 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]">Founding Beta · £9.99/month</a>
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
              <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">The Telegram message is only the front door.</h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">Behind a customer instruction is a controlled route through PETE validation, customer and installation checks, the local Windows Gateway, MT4, the customer&apos;s broker and lifecycle feedback back to Telegram.</p>
            </div>
            <div className="rounded-3xl border border-[#c9a227]/40 bg-[#12100a] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">The execution path</p>
              <p className="mt-6 text-2xl font-black leading-tight">Telegram → PETE Hosted Core → Windows Gateway → MT4 → your broker.</p>
              <p className="mt-6 leading-7 text-zinc-400">Your account remains with your broker. PETE provides the engineered execution layer around your instruction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#080808] px-6 py-24">
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
          <div className="mt-10 text-center">
            <a href="/how-it-works" className="inline-block rounded-full border border-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#c9a227] transition hover:bg-[#c9a227] hover:text-black">Read the full PETE workings</a>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">Frequently asked questions</p>
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">The things people should know before subscribing.</h2>
          <div className="mt-12 divide-y divide-zinc-800 rounded-3xl border border-zinc-800 bg-[#0d0d0d] px-6 md:px-8">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-black text-zinc-200">
                  <span>{question}</span><span className="text-2xl font-light text-[#c9a227] transition group-open:rotate-45">+</span>
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
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">A deliberately small first group.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">The Founding Beta is initially targeting approximately 5–10 MT4 traders so onboarding, broker differences and real Windows/VPS environments can be observed properly before wider release.</p>
          <div className="mx-auto mt-9 max-w-xl rounded-3xl border border-zinc-800 bg-black p-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Founding Beta price</p>
            <p className="mt-3 text-5xl font-black text-[#c9a227]">£9.99<span className="text-lg text-zinc-400"> / month</span></p>
            <p className="mt-4 text-sm leading-6 text-zinc-500">Intended to remain locked while the subscription remains continuously active.</p>
          </div>
          <a href="mailto:hello@theperformanceengineer.uk?subject=PETE%20Trade%20Gateway%20Founding%20Beta&body=I%27d%20like%20to%20join%20the%20PETE%20Trade%20Gateway%20Founding%20Beta." className="mt-9 inline-block rounded-full bg-[#c9a227] px-9 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Join the Founding Beta</a>
          <p className="mt-5 text-xs text-zinc-600">Beta access is intentionally limited while real-world onboarding evidence is collected.</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-900 bg-[#090909] p-8">
          <h2 className="text-lg font-black uppercase tracking-wide text-zinc-200">Important information</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-500">PETE Trade Gateway is execution and trade-management software for customer-directed instructions. It does not provide investment advice, trading signals or guaranteed outcomes. Trading leveraged products can result in losses. Customers remain responsible for their trading decisions, broker account and instructions submitted to PETE.</p>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-10 text-sm text-zinc-500">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div><p className="font-bold text-zinc-300">The Performance Engineer Ltd</p><p className="mt-2">Registered in England & Wales · Company No. 17437264</p><p className="mt-2">hello@theperformanceengineer.uk</p></div>
          <div className="md:text-right"><p>© 2026 The Performance Engineer Ltd. All rights reserved.</p><p className="mt-2"><a href="/how-it-works" className="hover:text-[#c9a227]">How PETE works</a></p><p className="mt-2"><a href="/about" className="hover:text-[#c9a227]">About The Performance Engineer</a></p></div>
        </div>
      </footer>
    </main>
  );
}
