import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Privacy notice for The Performance Engineer Ltd.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-[#f5f5f5]">
      <article className="mx-auto max-w-4xl">
        <a href="/" className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a227]">← The Performance Engineer</a>
        <h1 className="mt-8 text-5xl font-black uppercase">Privacy Notice</h1>
        <p className="mt-5 text-zinc-500">Last updated: 11 November 2026</p>

        <div className="mt-12 space-y-10 text-lg leading-8 text-zinc-400">
          <section>
            <h2 className="text-2xl font-black text-white">Who we are</h2>
            <p className="mt-4">
              The Performance Engineer Ltd is a company registered in England and Wales (Company No. 17437264), with registered office at 66 Paul Street, London, EC2A 4NA. Contact: hello@theperformanceengineer.uk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">Information we collect</h2>
            <p className="mt-4">
              When you request a free resource, make a consultancy enquiry or otherwise contact us, we may collect your name, work email, company, role, telephone number, the nature of your enquiry, marketing preference and information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">How we use it</h2>
            <ul className="mt-4 space-y-3">
              <li>→ To provide a resource or respond to an enquiry you requested.</li>
              <li>→ To manage prospective and existing business relationships.</li>
              <li>→ To improve our products, support content and consultancy services.</li>
              <li>→ To send direct marketing where the law permits and where appropriate, including where you have opted in or where legitimate interests apply to targeted business-to-business marketing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">Direct marketing</h2>
            <p className="mt-4">
              You can object to direct marketing at any time. Marketing emails will identify The Performance Engineer Ltd and provide a simple way to opt out. If you ask us to stop, we may retain the minimum information required on a suppression list so that we do not contact you again for marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">Storage and retention</h2>
            <p className="mt-4">
              Lead and enquiry records are stored in access-controlled systems. We keep personal information only for as long as it is reasonably needed for the purpose collected, to manage a business relationship, to respect suppression requests, or to meet legal and accounting requirements. We periodically review inactive prospect records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">Your rights</h2>
            <p className="mt-4">
              Depending on the circumstances, you may have rights to access, correct, erase or restrict use of your personal information, object to processing including direct marketing, and complain to the UK Information Commissioner&apos;s Office.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">Contact</h2>
            <p className="mt-4">
              For privacy requests or marketing opt-outs, email hello@theperformanceengineer.uk.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
