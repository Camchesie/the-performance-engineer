import type { Metadata } from "next";
import { notFound } from "next/navigation";

const siteUrl = "https://www.theperformanceengineer.uk";

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  intro: string;
  sections: Section[];
  related?: { href: string; title: string }[];
};

const articles: Record<string, Article> = {
  "digital-asset-management-guide": {
    slug: "digital-asset-management-guide",
    title: "Digital Asset Management for Engineering & Operations",
    metaTitle: "Digital Asset Management Guide for Engineering & Operations",
    description:
      "A practical digital asset management guide covering asset hierarchy, document control, revision status, ownership, QR access and lifecycle information.",
    category: "Digital Systems",
    intro:
      "Digital asset management is the control system around the information that describes, supports and changes a physical asset. The job is not simply to upload files. The job is to make sure people can find the right information, know who owns it and trust that it is current.",
    sections: [
      {
        heading: "Start with the asset hierarchy",
        paragraphs: [
          "Create a structure people can navigate consistently: company or site, area, line or system, maintainable asset and, where useful, component. The hierarchy becomes the spine that documents, history, ownership and performance information attach to.",
        ],
      },
      {
        heading: "Decide what belongs to the asset",
        bullets: [
          "General arrangement and electrical drawings.",
          "OEM manuals and technical data.",
          "Certificates, inspection records and statutory information.",
          "Risk assessments, procedures and maintenance standards.",
          "Software or configuration references where appropriate.",
          "Modification history, obsolescence notes and approved technical changes.",
        ],
      },
      {
        heading: "Control revision and status",
        paragraphs: [
          "A document library fails when users cannot tell which version is current. Every controlled document needs a defined owner, revision or version, approval status and a clear route for superseding old information without losing history.",
          "Avoid relying on filenames such as FINAL, FINAL2 or USE_THIS_ONE. The system should hold the status, not the user's memory.",
        ],
      },
      {
        heading: "Make ownership explicit",
        bullets: [
          "Who owns the asset record?",
          "Who can approve a drawing or technical document?",
          "Who is responsible for reviewing stale information?",
          "Who updates the record after a modification?",
          "Who can delete or supersede information?",
        ],
      },
      {
        heading: "Design access around the work",
        paragraphs: [
          "A technically perfect library is useless if technicians cannot access it at the machine. Search, mobile access and QR codes can shorten the route from physical asset to trusted information, but only if the underlying hierarchy and permissions are controlled.",
        ],
      },
      {
        heading: "Treat digital asset management as lifecycle control",
        paragraphs: [
          "The best system follows the asset from specification and commissioning through operation, modification, maintenance, obsolescence and disposal. That creates a usable technical history rather than another static archive.",
        ],
      },
    ],
    related: [
      { href: "/management-data/support/management-information-from-data-to-decisions", title: "Management Information Guide" },
      { href: "/management-data/support/action-management-accountability", title: "Action & Accountability" },
      { href: "/engineering/support/asset-criticality-matrix", title: "Asset Criticality Matrix" },
    ],
  },
  "management-information-from-data-to-decisions": {
    slug: "management-information-from-data-to-decisions",
    title: "Management Information: From Data to Decisions",
    metaTitle: "Management Information Guide: Turn Data into Decisions",
    description:
      "How to design management information with clear definitions, ownership, targets, exceptions and decision routes instead of dashboard overload.",
    category: "Management Information",
    intro:
      "A report becomes management information when it helps somebody decide, prioritise or intervene. More charts do not automatically mean more control. Good MI is deliberately small, trusted, defined and linked to a management action.",
    sections: [
      {
        heading: "Start with the decision, not the data",
        bullets: [
          "What decision does this measure support?",
          "Who needs to see it?",
          "How often can the underlying condition meaningfully change?",
          "What is normal, expected or targeted?",
          "What should happen when it moves outside that range?",
        ],
      },
      {
        heading: "Define every measure",
        paragraphs: [
          "Write down the formula, source, owner, frequency and scope. If two departments calculate the same KPI differently, you do not have one KPI — you have two competing stories.",
        ],
      },
      {
        heading: "Use trends and exceptions",
        paragraphs: [
          "A single number tells you where you are. A trend helps show whether the system is changing. Exceptions focus attention on the areas outside expectation, which is usually where management time has the highest value.",
        ],
      },
      {
        heading: "Separate operational and strategic views",
        bullets: [
          "Daily information should support immediate control and escalation.",
          "Weekly information should expose repeat issues, delivery risk and action progress.",
          "Monthly information should test trends, capability, cost and whether the management system is improving.",
        ],
      },
      {
        heading: "Do not measure everything because you can",
        paragraphs: [
          "Every KPI creates reporting effort and management attention. If nobody changes a decision when a measure changes, challenge why it is on the dashboard.",
        ],
      },
    ],
    related: [
      { href: "/management-data/support/weekly-management-review", title: "Weekly Management Review" },
      { href: "/management-data/support/tiered-management-sqcdp", title: "Tiered Management & SQCDP" },
      { href: "/engineering/support/engineering-kpi-dashboard", title: "Engineering KPI Dashboard" },
    ],
  },
  "weekly-management-review": {
    slug: "weekly-management-review",
    title: "How to Run a Weekly Management Review",
    metaTitle: "Weekly Management Review: Practical Agenda & Structure",
    description:
      "A practical weekly management review structure covering performance, exceptions, priorities, actions, risks, resources and decisions.",
    category: "Operating Rhythm",
    intro:
      "A weekly management review should not be a tour of every department's slides. Its job is to expose exceptions, confirm priorities, remove blockers and leave with clear decisions and owners.",
    sections: [
      {
        heading: "1. Start with the scorecard",
        bullets: [
          "Review the small set of measures that define delivery, quality, cost, safety, people and other relevant outcomes.",
          "Focus discussion on exceptions and trend changes rather than reading every number aloud.",
          "Keep definitions stable so the trend means something.",
        ],
      },
      {
        heading: "2. Review the biggest losses and risks",
        paragraphs: [
          "What materially moved performance this week? What could stop next week's plan? Use Pareto, backlog, customer issues, engineering losses, staffing constraints or other evidence appropriate to the operation.",
        ],
      },
      {
        heading: "3. Control actions",
        bullets: [
          "New actions requiring assignment.",
          "Actions due before the next review.",
          "Overdue or blocked actions.",
          "Completed actions waiting for effectiveness confirmation.",
        ],
      },
      {
        heading: "4. Make decisions visible",
        paragraphs: [
          "Capture the decision, owner and date. Do not bury decisions inside meeting minutes that nobody will read again.",
        ],
      },
      {
        heading: "5. End with the next seven days",
        paragraphs: [
          "Confirm the few priorities that matter most before the next review, the risks around them and who owns the response. A useful review creates focus, not a longer list.",
        ],
      },
    ],
    related: [
      { href: "/management-data/support/management-information-from-data-to-decisions", title: "Management Information Guide" },
      { href: "/management-data/support/action-management-accountability", title: "Action & Accountability" },
      { href: "/management-data/support/capacity-resource-planning", title: "Capacity & Resource Planning" },
    ],
  },
  "action-management-accountability": {
    slug: "action-management-accountability",
    title: "Action Management & Accountability",
    metaTitle: "Action Management & Accountability Guide",
    description:
      "How to manage actions with clear ownership, due dates, escalation, completion evidence and effectiveness without creating unnecessary admin.",
    category: "Execution",
    intro:
      "Accountability is not shouting harder when an action is overdue. It starts with a clear deliverable, one owner, a realistic date, visible constraints and a management route for escalation when the owner cannot remove the blocker alone.",
    sections: [
      {
        heading: "Write the action as an output",
        paragraphs: [
          "Avoid actions such as 'look at downtime' or 'improve communication'. State what will exist when the action is complete and, where relevant, what evidence will prove it.",
        ],
      },
      {
        heading: "One action, one accountable owner",
        paragraphs: [
          "Several people may contribute, but one named owner should be accountable for moving the action forward. Shared ownership often becomes no ownership.",
        ],
      },
      {
        heading: "Track status that means something",
        bullets: [
          "Not started — no meaningful work begun.",
          "In progress — work is active and the next step is known.",
          "Blocked — progress depends on a constraint the owner cannot resolve alone.",
          "Complete — the deliverable exists.",
          "Verified — the result or effectiveness has been confirmed where that matters.",
        ],
      },
      {
        heading: "Escalate blockers, not excuses",
        paragraphs: [
          "A good escalation asks for a decision, resource, access or priority change. The aim is to remove the constraint, not just highlight that the action is late.",
        ],
      },
      {
        heading: "Close the loop",
        paragraphs: [
          "For corrective or improvement actions, completion is different from effectiveness. If the action was supposed to reduce a failure, cost or delay, check whether the measure actually changed.",
        ],
      },
    ],
    related: [
      { href: "/management-data/support/weekly-management-review", title: "Weekly Management Review" },
      { href: "/management-data/support/tiered-management-sqcdp", title: "Tiered Management & SQCDP" },
      { href: "/engineering/support/corrective-action-tracker", title: "Engineering Corrective Action Tracker" },
    ],
  },
  "tiered-management-sqcdp": {
    slug: "tiered-management-sqcdp",
    title: "Tiered Management & SQCDP",
    metaTitle: "Tiered Management & SQCDP Daily Meeting Guide",
    description:
      "How to structure tier meetings and SQCDP-style visual management so operational issues are controlled, escalated and resolved at the right level.",
    category: "Daily Management",
    intro:
      "Tiered management creates a deliberate escalation path from the point where work happens to the level that can remove the constraint. SQCDP or similar headings can help structure the conversation, but the value comes from ownership, speed and escalation — not the letters on the board.",
    sections: [
      {
        heading: "What belongs at the first tier?",
        paragraphs: [
          "Immediate operational control: safety issues, quality concerns, delivery risk, equipment problems, staffing constraints and actions that affect today's plan.",
        ],
      },
      {
        heading: "Escalate what the level cannot solve",
        paragraphs: [
          "Do not escalate every issue. Escalate items that need authority, cross-functional support, resource, capital, specialist input or a decision beyond the team's control.",
        ],
      },
      {
        heading: "Keep the review short and visual",
        bullets: [
          "Use a small number of current measures.",
          "Show red / abnormal conditions clearly.",
          "Record owner and next action beside the issue.",
          "Avoid long problem-solving discussions inside the stand-up.",
          "Move complex investigations into a separate structured session.",
        ],
      },
      {
        heading: "Use consistent categories carefully",
        paragraphs: [
          "SQCDP commonly covers Safety, Quality, Cost, Delivery and People. Change or extend the structure if your operation needs it. The goal is balanced operational control, not forcing every business into the same acronym.",
        ],
      },
      {
        heading: "Measure the management system itself",
        paragraphs: [
          "Track whether escalations are resolved, whether repeat issues return and whether action ageing is improving. A tier system that only moves red cards upward without resolving them is not working.",
        ],
      },
    ],
    related: [
      { href: "/management-data/support/management-information-from-data-to-decisions", title: "Management Information Guide" },
      { href: "/management-data/support/action-management-accountability", title: "Action & Accountability" },
      { href: "/management-data/support/weekly-management-review", title: "Weekly Management Review" },
    ],
  },
  "capacity-resource-planning": {
    slug: "capacity-resource-planning",
    title: "Capacity & Resource Planning",
    metaTitle: "Capacity & Resource Planning Guide for Operational Teams",
    description:
      "A practical capacity and resource planning guide covering workload, available hours, skill constraints, priority, buffers and demand versus capacity.",
    category: "Planning",
    intro:
      "Resource planning fails when demand is treated as unlimited and every job is labelled urgent. A useful plan compares required work with real available capacity, then makes the trade-offs visible before the week starts.",
    sections: [
      {
        heading: "Calculate usable capacity, not paid hours",
        paragraphs: [
          "Start with available people and hours, then remove known absence, meetings, training, planned non-productive time and other unavoidable commitments. What remains is closer to the capacity you can actually schedule.",
        ],
      },
      {
        heading: "Separate work by type",
        bullets: [
          "Mandatory or safety-critical work.",
          "Planned recurring work.",
          "Committed project or improvement work.",
          "Known corrective backlog.",
          "Reactive allowance or contingency.",
        ],
      },
      {
        heading: "Include skill constraints",
        paragraphs: [
          "Ten available people do not equal ten interchangeable units of capacity. Electrical authorisation, controls knowledge, mechanical skills, leadership coverage or specialist process knowledge can become the real bottleneck.",
        ],
      },
      {
        heading: "Prioritise explicitly",
        paragraphs: [
          "If demand exceeds capacity, something moves. Use agreed priority rules based on risk, operational consequence, commitment and value instead of whoever shouts loudest.",
        ],
      },
      {
        heading: "Plan a buffer for reality",
        paragraphs: [
          "Operations are not deterministic. Leave deliberate capacity for reactive work where the environment requires it, then review whether the buffer is consistently too high or too low.",
        ],
      },
      {
        heading: "Review plan versus actual",
        paragraphs: [
          "At the end of the period, compare planned work, completed work, reactive demand and the reasons for slippage. That feedback improves the next plan and exposes structural capacity problems.",
        ],
      },
    ],
    related: [
      { href: "/management-data/support/weekly-management-review", title: "Weekly Management Review" },
      { href: "/management-data/support/action-management-accountability", title: "Action & Accountability" },
      { href: "/engineering/support/asset-criticality-matrix", title: "Asset Criticality Matrix" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical: `/management-data/support/${article.slug}` },
    openGraph: {
      type: "article",
      url: `/management-data/support/${article.slug}`,
      title: article.metaTitle,
      description: article.description,
      images: ["/pte-logo.png"],
    },
  };
}

export default async function ManagementSupportArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  const articleUrl = `${siteUrl}/management-data/support/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: articleUrl,
    datePublished: "2026-11-11",
    dateModified: "2026-11-11",
    author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "The Performance Engineer Ltd" },
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Management & Data", item: `${siteUrl}/management-data` },
      { "@type": "ListItem", position: 2, name: "Management & Data Support", item: `${siteUrl}/management-data/support` },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="border-b border-white/5 bg-black/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">The Performance Engineer</span>
          </a>
          <a href="/management-data/support" className="text-xs font-black uppercase tracking-[0.18em] text-[#c9a227]">Management Support</a>
        </div>
      </header>

      <article>
        <section className="px-6 pb-16 pt-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">{article.category}</p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">{article.title}</h1>
            <p className="mt-8 text-xl leading-9 text-zinc-400">{article.intro}</p>
          </div>
        </section>

        <section className="border-y border-zinc-900 bg-[#080808] px-6 py-16">
          <div className="mx-auto max-w-4xl space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-black text-zinc-100">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-lg leading-8 text-zinc-400">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 space-y-3 text-lg leading-8 text-zinc-400">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 font-black text-[#c9a227]">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </section>

        {article.related && article.related.length > 0 && (
          <section className="px-6 pt-16">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Related guides</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {article.related.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-5 font-black leading-6 text-zinc-200 transition hover:border-[#c9a227] hover:text-[#c9a227]">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-6 pb-20 pt-16">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#c9a227]/35 bg-[#12100a] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Need to build the system?</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Use the guide yourself, or bring us into the implementation.</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              The Performance Engineer provides practical management, engineering and digital-systems consultancy when the problem needs more than a template or article.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="/consultancy" className="rounded-full bg-[#c9a227] px-7 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Explore consultancy</a>
              <a href="/management-data/support" className="rounded-full border border-zinc-700 px-7 py-4 text-center text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]">More management guides</a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
