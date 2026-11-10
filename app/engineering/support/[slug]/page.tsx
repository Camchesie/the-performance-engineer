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
  starter?: boolean;
};

const articles: Record<string, Article> = {
  "5-why-template": {
    slug: "5-why-template",
    title: "5 Why Template & Root Cause Analysis Guide",
    metaTitle: "5 Why Template for Engineering Root Cause Analysis",
    description:
      "Learn how to use a 5 Why analysis properly in engineering, avoid weak root-cause conclusions and download a free PETE starter template.",
    category: "Root Cause Analysis",
    intro:
      "5 Why is useful because it forces an investigation past the first visible symptom. It is also easy to misuse. The goal is not to force exactly five answers or finish with 'operator error'. The goal is to build a logical cause chain that is supported by evidence and leads to an action you can verify.",
    starter: true,
    sections: [
      {
        heading: "What is a 5 Why analysis?",
        paragraphs: [
          "A 5 Why analysis starts with a clearly defined problem and repeatedly asks what caused the previous condition. The number five is a prompt, not a rule. A simple issue may need three levels; a complex failure may branch into several cause paths and need another method alongside it.",
          "For engineering work, the strongest version separates what physically failed, why the failure was not detected or prevented, and what system allowed the condition to exist.",
        ],
      },
      {
        heading: "When should you use 5 Why?",
        bullets: [
          "A relatively simple or well-bounded failure where the sequence of events is understood.",
          "A recurring issue where the team keeps replacing the same component without explaining why it fails.",
          "A follow-on tool after the problem has already been defined with evidence, an Is / Is Not analysis or a Pareto.",
          "A quick structured investigation before deciding whether a fuller RCA, Fishbone, A3 or 8D is justified.",
        ],
      },
      {
        heading: "How to run it properly",
        bullets: [
          "Write the problem as a fact: asset, failure mode, location, time and effect. Avoid vague statements such as 'machine unreliable'.",
          "Ask why the observed condition occurred, then record the answer as a testable statement.",
          "For every answer, ask what evidence supports it. Measurements, photos, alarm history, failed parts and maintenance records are stronger than opinion.",
          "Keep asking why until the team reaches a controllable cause that explains the failure and can be acted on.",
          "If the chain branches, do not force it back into one line. Use a Fishbone or formal RCA to investigate multiple credible causes.",
          "After corrective action, verify that the failure has actually stopped recurring.",
        ],
      },
      {
        heading: "Weak answers to challenge",
        bullets: [
          "'Operator error' — what made the error possible, likely or undetectable?",
          "'Lack of training' — what specific knowledge or standard was missing, and why did the system rely on memory?",
          "'Component failed' — what failure mode occurred, and why did that component reach that condition?",
          "'Poor maintenance' — which task, interval, standard, inspection or feedback loop failed?",
        ],
      },
      {
        heading: "Example: recurring conveyor bearing failure",
        paragraphs: [
          "Problem: Conveyor 01 drive-end bearing has failed three times in eight weeks, creating 101 minutes of downtime.",
          "Why 1: The bearing overheated and degraded. Why 2: The bearing was running with excessive load. Why 3: Shaft and pulley alignment were outside tolerance. Why 4: Alignment was not checked after the last drive replacement. Why 5: The replacement procedure did not include a measured alignment acceptance check.",
          "That chain gives the team something stronger than 'bad bearing': update the replacement standard, define the alignment tolerance, record the measurement and then monitor recurrence.",
        ],
      },
    ],
  },
  "oee-calculator-guide": {
    slug: "oee-calculator-guide",
    title: "OEE Calculator Guide: Availability, Performance & Quality",
    metaTitle: "OEE Calculator Guide for Manufacturing Engineers",
    description:
      "Understand OEE, the availability-performance-quality formula, the inputs an OEE calculator needs and how to use the result to direct engineering action.",
    category: "Performance",
    intro:
      "OEE is useful when it separates three different kinds of production loss: time lost because the asset was not running, output lost because it ran below the ideal rate, and output lost because units were defective. The headline percentage matters less than understanding which of those three factors is pulling it down.",
    sections: [
      {
        heading: "The OEE formula",
        paragraphs: [
          "OEE = Availability × Performance × Quality.",
          "Availability = Run Time ÷ Planned Production Time. Performance compares actual output with the theoretical output at the agreed ideal rate during run time. Quality = Good Count ÷ Total Count.",
        ],
      },
      {
        heading: "What data should go into an OEE calculator?",
        bullets: [
          "Planned production time for a clearly defined period.",
          "Unplanned downtime using a consistent site definition.",
          "Run time after downtime has been removed.",
          "A defensible ideal cycle time or ideal production rate for the product and process.",
          "Total units produced.",
          "Good units produced after rejects and rework are treated consistently.",
        ],
      },
      {
        heading: "How to read the result",
        bullets: [
          "Low availability points toward breakdowns, changeover, waiting or other stop losses depending on your site rules.",
          "Low performance points toward reduced speed, micro-stops or an unrealistic ideal rate.",
          "Low quality points toward scrap, rejects or rework.",
          "If all three are mediocre, do not chase the combined OEE number first. Rank the underlying losses and attack the largest controllable one.",
        ],
      },
      {
        heading: "Common OEE mistakes",
        bullets: [
          "Changing what counts as planned time from one line or shift to another.",
          "Using a catalogue maximum speed rather than an approved sustainable ideal rate.",
          "Comparing unrelated processes without understanding the different constraints.",
          "Celebrating a higher OEE without checking whether the data definition changed.",
          "Reporting OEE without linking the loss to a downtime, speed-loss or quality action.",
        ],
      },
      {
        heading: "Use OEE as a route to action",
        paragraphs: [
          "The PETE approach is to use OEE as a diagnostic split, not a trophy score. Once the biggest factor is known, drill down again: downtime Pareto for availability loss, speed-loss investigation for performance, or defect Pareto/RCA for quality.",
        ],
      },
    ],
  },
  "mtbf-mttr-guide": {
    slug: "mtbf-mttr-guide",
    title: "MTBF & MTTR Explained for Maintenance and Reliability",
    metaTitle: "MTBF & MTTR Calculator Guide for Maintenance",
    description:
      "Learn how to calculate MTBF and MTTR, what the figures mean, how they relate to availability and the common mistakes that make reliability data misleading.",
    category: "Reliability",
    intro:
      "MTBF and MTTR answer different questions. MTBF tells you how long a repairable asset runs between failures on average. MTTR tells you how long restoration takes on average. Used together, they help separate a reliability problem from a repair-response problem.",
    sections: [
      {
        heading: "How to calculate MTBF",
        paragraphs: [
          "MTBF = Total Operating Time ÷ Number of Failures.",
          "If an asset ran for 1,000 operating hours and suffered four qualifying failures, its MTBF for that measurement period is 250 hours.",
        ],
      },
      {
        heading: "How to calculate MTTR",
        paragraphs: [
          "MTTR = Total Repair / Restoration Time ÷ Number of Repair Events.",
          "If those four failures created 10 hours of repair downtime, MTTR is 2.5 hours. Define the start and end of repair time consistently or the trend becomes meaningless.",
        ],
      },
      {
        heading: "What the combination tells you",
        bullets: [
          "Falling MTBF: the asset is failing more often. Investigate failure modes, conditions, maintenance effectiveness and repeat causes.",
          "High MTTR: failures may be acceptable in frequency but the team is taking too long to diagnose, access, repair, test or return the asset to service.",
          "Improving MTBF with flat MTTR: reliability work is helping, but maintainability and response may still need attention.",
          "Improving MTTR with flat MTBF: the team restores faster, but the underlying failure frequency has not changed.",
        ],
      },
      {
        heading: "Estimated inherent availability",
        paragraphs: [
          "A simple estimate is Availability = MTBF ÷ (MTBF + MTTR). With MTBF of 250 hours and MTTR of 2.5 hours, the estimate is about 99.0%. This is a modelling estimate, not a substitute for your actual production availability definition.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Mixing failures that have different definitions between reporting periods.",
          "Using calendar hours in one period and operating hours in another.",
          "Treating planned maintenance as a failure without a deliberate site rule.",
          "Using an average without looking at the underlying distribution or repeat failure mode.",
          "Comparing unlike assets solely because both have an MTBF number.",
        ],
      },
    ],
  },
  "repeat-machine-failures": {
    slug: "repeat-machine-failures",
    title: "How to Stop Repeat Machine Failures",
    metaTitle: "Repeat Machine Failures: Practical Root Cause Investigation",
    description:
      "A practical engineering process for recurring equipment failures: contain the fault, gather evidence, confirm root cause and verify corrective action.",
    category: "Fault Finding",
    intro:
      "A repeat failure is expensive twice: once in downtime and again because the previous repair failed to remove the cause. If the same bearing, sensor, seal, drive or fuse keeps being replaced, the component is often the symptom rather than the investigation endpoint.",
    sections: [
      {
        heading: "1. Separate restoration from investigation",
        paragraphs: [
          "Production often needs the machine back immediately. Restore it safely, but do not confuse restoration with root cause. Preserve failed parts, photos, alarm history, measurements and the exact condition found before evidence disappears.",
        ],
      },
      {
        heading: "2. Prove that it is genuinely recurring",
        bullets: [
          "Same asset and same location?",
          "Same failure mode, or just a similar symptom?",
          "Similar operating condition, product, shift or environmental state?",
          "What changed between successful operation and failure?",
          "How long did the previous repair last?",
        ],
      },
      {
        heading: "3. Rank the loss before escalating the analysis",
        paragraphs: [
          "Use a downtime Pareto or repeat-failure tracker to quantify frequency and lost minutes. The loudest breakdown is not always the biggest reliability opportunity.",
        ],
      },
      {
        heading: "4. Move from suspected cause to confirmed cause",
        paragraphs: [
          "A useful investigation labels causes honestly. PETE uses the idea of Suspected → Supported → Confirmed. A cause becomes stronger when measurements, failed-part evidence, controlled tests, history or a clear physical mechanism support it.",
        ],
      },
      {
        heading: "5. Correct the system, then verify",
        bullets: [
          "Contain the immediate risk.",
          "Correct the physical cause.",
          "Update the maintenance or replacement standard if the system allowed recurrence.",
          "Define what evidence will prove the action worked.",
          "Monitor the asset for an agreed period or number of cycles before closing the investigation.",
        ],
      },
      {
        heading: "What not to accept as root cause",
        bullets: [
          "The bearing failed.",
          "The sensor was faulty.",
          "Operator error.",
          "Age.",
          "Poor maintenance.",
          "Electrical fault.",
        ],
        paragraphs: [
          "Those may describe what was found, but they usually do not explain the mechanism, why it occurred, why it was not prevented and what must change to stop it happening again.",
        ],
      },
    ],
  },
  "downtime-pareto-analysis": {
    slug: "downtime-pareto-analysis",
    title: "Downtime Pareto Analysis for Engineering Priorities",
    metaTitle: "Downtime Pareto Analysis: Find Your Biggest Engineering Losses",
    description:
      "Learn how to build a useful downtime Pareto, choose the right categories, rank lost minutes and turn the result into engineering action.",
    category: "Downtime",
    intro:
      "A downtime Pareto turns a long breakdown list into a ranked decision. Instead of arguing about which machine feels worst, you total the loss by a consistent category and show which few causes are consuming most of the available engineering time or production capacity.",
    starter: true,
    sections: [
      {
        heading: "Choose what you are ranking",
        paragraphs: [
          "For most engineering prioritisation, lost minutes are more useful than event count. A fault that happens once and loses six hours can matter more than a nuisance stop that occurs 20 times for one minute each. Keep both measures if frequency is also important, but do not mix them in one ranking.",
        ],
      },
      {
        heading: "Build categories that help someone act",
        bullets: [
          "Too broad: Mechanical, Electrical, Other.",
          "Too narrow: hundreds of one-off descriptions that never group together.",
          "Better: Bearing, conveyor tracking, photoeye contamination, hydraulic hose, drive trip, guarding interlock — categories that expose a repeatable loss mechanism or asset problem.",
        ],
      },
      {
        heading: "Rank highest loss first",
        paragraphs: [
          "Total downtime for each category, sort it from highest to lowest, calculate each category's share of total downtime and then calculate cumulative percentage. The cumulative line helps show how quickly the largest categories account for the overall loss.",
        ],
      },
      {
        heading: "The 80/20 rule is not a target",
        paragraphs: [
          "Pareto analysis is often described using the 80/20 principle, but real plant data does not have to land on those numbers. The useful question is simply: which small number of categories should we investigate first to remove the most loss?",
        ],
      },
      {
        heading: "What happens after the Pareto?",
        bullets: [
          "Take the top controllable category into fault investigation or RCA.",
          "Split a broad category further if it hides multiple mechanisms.",
          "Assign an owner and corrective action.",
          "Re-run the Pareto over time and check whether the top loss actually reduces.",
          "Watch for a new dominant category after the first one is improved.",
        ],
      },
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

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.description,
    alternates: {
      canonical: `/engineering/support/${article.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/engineering/support/${article.slug}`,
      title: article.metaTitle,
      description: article.description,
      images: ["/pte-logo.png"],
    },
  };
}

export default async function EngineeringSupportArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const articleUrl = `${siteUrl}/engineering/support/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: articleUrl,
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    author: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "The Performance Engineer Ltd",
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "PETE Engineering",
        item: `${siteUrl}/engineering`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Engineering Support",
        item: `${siteUrl}/engineering/support`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="border-b border-white/5 bg-black/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/pte-monogram.png" alt="PETE" className="h-10 w-auto" />
            <span className="hidden text-xs font-bold uppercase tracking-[0.24em] text-zinc-300 sm:block">The Performance Engineer</span>
          </a>
          <a href="/engineering/support" className="text-xs font-black uppercase tracking-[0.18em] text-[#c9a227]">Engineering Support</a>
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

        {article.starter && (
          <section className="px-6 py-16">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#c9a227]/35 bg-[#12100a] p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Free PETE Engineering Starter Pack</p>
              <h2 className="mt-4 text-3xl font-black uppercase">Use the method, not just the article.</h2>
              <p className="mt-5 leading-8 text-zinc-400">Download the free starter pack with a Basic 5 Why, Fault Investigation sheet and Downtime/Pareto workbook.</p>
              <a
                href="/downloads/PETE_Engineering_Free_Starter_Pack.zip"
                className="mt-7 inline-block rounded-full bg-[#c9a227] px-7 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]"
              >
                Download free starter pack
              </a>
            </div>
          </section>
        )}

        <section className="px-6 pb-20 pt-4">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-zinc-800 bg-[#0d0d0d] p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">PETE Engineering Release 1</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Take the investigation into a complete engineering workflow.</h2>
            <p className="mt-5 leading-8 text-zinc-400">Release 1 includes 20 tools across fault investigation, RCA, Pareto, OEE, MTBF/MTTR, corrective actions, PM effectiveness, asset criticality and engineering KPI reporting.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="/engineering" className="rounded-full bg-[#c9a227] px-7 py-4 text-center text-sm font-black uppercase tracking-widest text-black hover:bg-[#e4c45a]">Explore Release 1</a>
              <a href="/engineering/support" className="rounded-full border border-zinc-700 px-7 py-4 text-center text-sm font-bold uppercase tracking-widest hover:border-[#c9a227] hover:text-[#c9a227]">More engineering guides</a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
