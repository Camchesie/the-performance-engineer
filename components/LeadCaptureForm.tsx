type LeadCaptureFormProps = {
  leadType: "engineering_pack" | "management_pack" | "dam_pack";
  source: string;
  buttonText: string;
};

export default function LeadCaptureForm({
  leadType,
  source,
  buttonText,
}: LeadCaptureFormProps) {
  return (
    <form action="/api/leads" method="post" className="mt-8 grid gap-5">
      <input type="hidden" name="lead_type" value={leadType} />
      <input type="hidden" name="source" value={source} />

      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-bold text-zinc-300">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 font-normal text-white outline-none focus:border-[#c9a227]"
          />
        </label>
        <label className="text-sm font-bold text-zinc-300">
          Work email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 font-normal text-white outline-none focus:border-[#c9a227]"
          />
        </label>
        <label className="text-sm font-bold text-zinc-300">
          Company
          <input
            required
            name="company"
            autoComplete="organization"
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 font-normal text-white outline-none focus:border-[#c9a227]"
          />
        </label>
        <label className="text-sm font-bold text-zinc-300">
          Role
          <input
            name="role"
            autoComplete="organization-title"
            className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 font-normal text-white outline-none focus:border-[#c9a227]"
          />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-zinc-500">
        <input
          type="checkbox"
          name="marketing_consent"
          value="yes"
          className="mt-1 h-4 w-4 accent-[#c9a227]"
        />
        <span>
          Send me occasional practical PETE emails about engineering, management,
          data and improvement. Optional. Unsubscribe at any time.
        </span>
      </label>

      <p className="text-xs leading-5 text-zinc-600">
        We use your details to provide the requested resource and, only where
        selected above, to send occasional marketing emails. See our{" "}
        <a href="/privacy" className="text-[#c9a227] hover:underline">
          privacy notice
        </a>.
      </p>

      <button
        type="submit"
        className="rounded-full bg-[#c9a227] px-7 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]"
      >
        {buttonText}
      </button>
    </form>
  );
}
