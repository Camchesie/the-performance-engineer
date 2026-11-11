import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultancy Enquiry",
  description:
    "Tell The Performance Engineer about the engineering, management, data or digital-system problem you want to solve.",
  alternates: { canonical: "/consultancy/enquire" },
};

export default async function ConsultancyEnquiry({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const query = await searchParams;

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-[#f5f5f5]">
      <section className="mx-auto max-w-5xl">
        <a href="/consultancy" className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">← Consultancy</a>
        <p className="mt-12 text-xs font-black uppercase tracking-[0.35em] text-[#c9a227]">Start with the problem</p>
        <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          Tell us what is <span className="text-[#c9a227]">not working.</span>
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-400">
          Engineering, management, digital assets, data, operating systems or something that does not fit neatly into a category. Give us enough context to understand the problem and we will come back to you.
        </p>

        <form action="/api/leads" method="post" className="mt-12 rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 md:p-10">
          <input type="hidden" name="lead_type" value="consultancy" />
          <input type="hidden" name="source" value="/consultancy/enquire" />
          <div className="hidden" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>

          {query.error === "1" && <p className="mb-6 rounded-xl border border-red-900/50 bg-red-950/30 p-4 text-sm text-red-300">Check the required fields and try again.</p>}

          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Name", "name", "name"],
              ["Work email", "email", "email"],
              ["Company", "company", "organization"],
              ["Role", "role", "organization-title"],
              ["Phone (optional)", "phone", "tel"],
            ].map(([label, name, auto]) => (
              <label key={name} className="text-sm font-bold text-zinc-300">
                {label}
                <input
                  required={name === "name" || name === "email" || name === "company"}
                  type={name === "email" ? "email" : "text"}
                  name={name}
                  autoComplete={auto}
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 font-normal text-white outline-none focus:border-[#c9a227]"
                />
              </label>
            ))}
            <label className="text-sm font-bold text-zinc-300">
              Area
              <select name="area" className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 font-normal text-white outline-none focus:border-[#c9a227]">
                <option>Not sure yet</option>
                <option>Engineering & Reliability</option>
                <option>Management & Operations</option>
                <option>Digital Asset Management</option>
                <option>Data & Reporting</option>
                <option>Bespoke Performance System</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block text-sm font-bold text-zinc-300">
            What problem are you trying to solve?
            <textarea
              required
              name="problem"
              rows={7}
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 font-normal text-white outline-none focus:border-[#c9a227]"
              placeholder="What is happening now, what is getting in the way, and what would better look like?"
            />
          </label>

          <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-zinc-500">
            <input type="checkbox" name="marketing_consent" value="yes" className="mt-1 h-4 w-4 accent-[#c9a227]" />
            <span>Also send me occasional practical PETE emails. Optional. Unsubscribe any time.</span>
          </label>

          <p className="mt-4 text-xs leading-5 text-zinc-600">
            We use these details to respond to your enquiry. See our <a href="/privacy" className="text-[#c9a227] hover:underline">privacy notice</a>.
          </p>

          <button type="submit" className="mt-7 rounded-full bg-[#c9a227] px-8 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">
            Send consultancy enquiry
          </button>
        </form>
      </section>
    </main>
  );
}
