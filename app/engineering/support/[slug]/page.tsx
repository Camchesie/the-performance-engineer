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
  related?: { href: string; title: string }[];
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
  "fishbone-diagram-engineering-example": {
    slug: "fishbone-diagram-engineering-example",
    title: "Fishbone Diagram for Engineering Root Cause Analysis",
    metaTitle: "Fishbone Diagram Example for Engineering RCA",
    description:
      "How to use a Fishbone or Ishikawa diagram in engineering root-cause analysis, choose useful categories and turn possible causes into evidence-led investigation.",
    category: "Root Cause Analysis",
    intro:
      "A Fishbone diagram is useful when a failure could have several credible causes. It gives the team a structured way to capture possibilities without immediately deciding which one is true. The important bit comes next: the diagram should narrow the investigation, not become a wall of guesses.",
    sections: [
      {
        heading: "What is a Fishbone diagram?",
        paragraphs: [
          "A Fishbone diagram, also called an Ishikawa or cause-and-effect diagram, puts the problem at the head of the diagram and groups possible causes into categories along the main branches.",
          "In engineering, a common 6M structure is Machine, Method, Material, Measurement, Man / People and Mother Nature / Environment. Those headings are prompts, not rules. Change them if your process needs different categories.",
        ],
      },
      {
        heading: "When is Fishbone better than 5 Why?",
        bullets: [
          "When several mechanisms could explain the same symptom.",
          "When the team needs to brainstorm across mechanical, electrical, process, human and environmental factors.",
          "When a 5 Why chain starts branching instead of staying linear.",
          "When a repeat failure has already survived one or more simple investigations.",
        ],
      },
      {
        heading: "How to build one properly",
        bullets: [
          "Define the problem as a measurable fact before adding any causes.",
          "Choose categories that fit the asset or process rather than blindly copying a generic template.",
          "Add possible causes as hypotheses, not conclusions.",
          "Ask what evidence would support or disprove each important cause.",
          "Prioritise the most plausible and highest-consequence causes for investigation.",
          "Move strong causes into 5 Why, testing, inspection or formal RCA before calling them root cause.",
        ],
      },
      {
        heading: "Example: recurring conveyor bearing overheating",
        bullets: [
          "Machine: pulley misalignment, shaft runout, wrong bearing fit, excessive belt tension.",
          "Method: alignment not measured after drive replacement, lubrication interval unsuitable.",
          "Material: wrong grease, contaminated lubricant, poor seal condition.",
          "Measurement: no baseline temperature or vibration trend, alignment tolerance not recorded.",
          "People: installation standard unclear, handover incomplete.",
          "Environment: dust ingress, washdown water, ambient heat.",
        ],
        paragraphs: [
          "The point is not to select the longest branch. The point is to test the causes that best fit the evidence. If the failed bearing shows edge loading and alignment checks are out of tolerance, misalignment moves from suspected to supported.",
        ],
      },
      {
        heading: "The trap to avoid",
        paragraphs: [
          "A completed Fishbone is not a completed root-cause analysis. It is a map of possible causes. The investigation is finished only when the physical mechanism is understood, the cause is supported by evidence and the corrective action is verified.",
        ],
      },
    ],
    related: [
      { href: "/engineering/support/5-why-template", title: "5 Why Template & RCA Guide" },
      { href: "/engineering/support/repeat-machine-failures", title: "How to Stop Repeat Machine Failures" },
      { href: "/engineering/support/why-bearings-keep-failing", title: "Why Bearings Keep Failing" },
    ],
  },
  "8d-report-template-guide": {
    slug: "8d-report-template-guide",
    title: "8D Report Template Guide for Engineering Problems",
    metaTitle: "8D Report Template Guide for Manufacturing & Engineering",
    description:
      "A practical D1–D8 guide for engineering and manufacturing problems: team, containment, root cause, permanent corrective action, validation and recurrence prevention.",
    category: "Problem Solving",
    intro:
      "8D is useful when the problem is significant enough to need a formal, auditable response. It forces the team to protect the customer or process first, then prove root cause, implement permanent corrective action and prevent the same weakness appearing elsewhere.",
    sections: [
      {
        heading: "D1 — Build the team",
        paragraphs: [
          "Choose people who understand the product, asset, process and data. Include the people who will actually carry out the investigation and actions rather than filling the report with names for appearance.",
        ],
      },
      {
        heading: "D2 — Describe the problem",
        bullets: [
          "What failed or did not meet requirement?",
          "Where was it detected?",
          "When did it start?",
          "How many units, cycles, assets or events are affected?",
          "What is the operational or customer consequence?",
        ],
      },
      {
        heading: "D3 — Put containment in place",
        paragraphs: [
          "Containment protects the customer or process while the real investigation continues. It might include inspection, quarantine, temporary maintenance checks, increased monitoring or a controlled workaround. Record how you know containment is effective.",
        ],
      },
      {
        heading: "D4 — Confirm occurrence and escape causes",
        paragraphs: [
          "Occurrence cause explains why the failure happened. Escape or detection cause explains why your system did not prevent or detect it before it became a problem. Both need evidence.",
        ],
      },
      {
        heading: "D5 and D6 — Select, implement and validate permanent actions",
        bullets: [
          "Choose actions that remove or control the confirmed cause rather than just the symptom.",
          "Define ownership, due date and completion evidence.",
          "Validate the action under real operating conditions.",
          "Remove temporary containment only when the permanent action has demonstrated control.",
        ],
      },
      {
        heading: "D7 and D8 — Prevent recurrence and close properly",
        paragraphs: [
          "Update the wider system: PM tasks, work instructions, specifications, drawings, control plans, training or similar assets where the same weakness could exist. Close the 8D only when the evidence supports closure and the learning has been retained.",
        ],
      },
    ],
    related: [
      { href: "/engineering/support/5-why-template", title: "5 Why Template & RCA Guide" },
      { href: "/engineering/support/fishbone-diagram-engineering-example", title: "Fishbone Diagram for Engineering RCA" },
      { href: "/engineering/support/corrective-action-tracker", title: "Corrective Action Tracker Guide" },
    ],
  },
  "asset-criticality-matrix": {
    slug: "asset-criticality-matrix",
    title: "Asset Criticality Matrix for Maintenance Priorities",
    metaTitle: "Asset Criticality Matrix Guide for Maintenance & Reliability",
    description:
      "How to rank equipment criticality using consequence and likelihood so maintenance, spares, PM and engineering effort go to the assets that matter most.",
    category: "Reliability",
    intro:
      "Not every machine deserves the same maintenance strategy. An asset criticality matrix helps rank equipment by the consequence of failure and, where useful, the likelihood or frequency of that failure. The result should influence PM depth, spares, response planning and reliability effort.",
    sections: [
      {
        heading: "What should criticality measure?",
        bullets: [
          "Safety consequence.",
          "Environmental consequence.",
          "Production or service loss.",
          "Quality or customer impact.",
          "Repair lead time and access difficulty.",
          "Availability of redundancy or bypass.",
          "Cost of failure and recovery.",
        ],
      },
      {
        heading: "Criticality is not the same as downtime",
        paragraphs: [
          "A machine can fail rarely and still be highly critical if one failure stops the whole site or creates a serious safety risk. Another asset can fail frequently but remain lower criticality if it is easy to bypass and repair.",
        ],
      },
      {
        heading: "A simple scoring approach",
        paragraphs: [
          "Score consequence categories using an agreed scale, then combine them using a rule the site understands. Some organisations use the highest consequence score; others use a weighted total. If likelihood is included, combine consequence and likelihood carefully so a very severe low-frequency risk is not hidden by arithmetic.",
        ],
      },
      {
        heading: "How the result should change maintenance",
        bullets: [
          "High criticality: stronger PM / condition monitoring, defined spares, escalation route and failure-response plan.",
          "Medium criticality: proportionate planned maintenance and targeted improvement where data supports it.",
          "Low criticality: simpler maintenance strategy, possibly run-to-failure where safe and economically sensible.",
        ],
      },
      {
        heading: "Review the matrix when the system changes",
        paragraphs: [
          "Criticality is not permanent. Production routes, redundancy, product demand, safety controls, repair capability and spare availability change. Revisit the ranking when the operation changes materially.",
        ],
      },
    ],
    related: [
      { href: "/engineering/support/pm-effectiveness-review", title: "PM Effectiveness Review" },
      { href: "/engineering/support/engineering-kpi-dashboard", title: "Engineering KPI Dashboard Guide" },
      { href: "/engineering/support/mtbf-mttr-guide", title: "MTBF & MTTR Explained" },
    ],
  },
  "pm-effectiveness-review": {
    slug: "pm-effectiveness-review",
    title: "Preventive Maintenance Effectiveness Review",
    metaTitle: "PM Effectiveness Review: Is Preventive Maintenance Working?",
    description:
      "How to review preventive maintenance effectiveness using failure history, PM findings, compliance, task value and repeat breakdown data.",
    category: "Maintenance",
    intro:
      "A PM schedule can be 100% complete and still be useless. PM effectiveness asks a harder question: are the tasks actually preventing, detecting or controlling the failure modes that matter?",
    sections: [
      {
        heading: "Start with the failure modes, not the calendar",
        paragraphs: [
          "For each important asset, identify the failure modes the PM is supposed to manage. A task should have a reason to exist: detect degradation, restore a condition, replace a life-limited item, verify a protective function or manage a known risk.",
        ],
      },
      {
        heading: "Review what the PM is finding",
        bullets: [
          "How often does the task find a real defect?",
          "What percentage of PMs generate follow-up corrective work?",
          "Are repeated breakdowns occurring on failure modes the PM should have detected?",
          "Are technicians recording usable condition information or just closing the job?",
        ],
      },
      {
        heading: "Compliance is necessary, not sufficient",
        paragraphs: [
          "PM compliance tells you whether scheduled work was completed on time. It does not prove the task was technically effective. Track compliance, but pair it with failure history and findings.",
        ],
      },
      {
        heading: "Challenge bad task design",
        bullets: [
          "Task interval does not match the failure-development period.",
          "Inspection method cannot detect the degradation mechanism.",
          "Pass / fail standard is vague.",
          "Task duplicates another check without adding value.",
          "Task creates maintenance-induced failure through unnecessary disturbance.",
          "The real failure mode is age-independent and needs condition monitoring or redesign instead.",
        ],
      },
      {
        heading: "What a good review should produce",
        paragraphs: [
          "Keep effective tasks, improve weak tasks, remove low-value duplication, change intervals where evidence supports it, and add missing controls for repeat failure modes. Record the decision and then watch the failure data to verify the revised strategy worked.",
        ],
      },
    ],
    related: [
      { href: "/engineering/support/asset-criticality-matrix", title: "Asset Criticality Matrix Guide" },
      { href: "/engineering/support/repeat-machine-failures", title: "How to Stop Repeat Machine Failures" },
      { href: "/engineering/support/engineering-kpi-dashboard", title: "Engineering KPI Dashboard Guide" },
    ],
  },
  "corrective-action-tracker": {
    slug: "corrective-action-tracker",
    title: "Corrective Action Tracker for Engineering & Maintenance",
    metaTitle: "Corrective Action Tracker Guide for Engineering Teams",
    description:
      "How to build a corrective-action tracker that controls ownership, dates, evidence and effectiveness instead of becoming another overdue action list.",
    category: "Improvement",
    intro:
      "An action is not controlled just because it exists in a spreadsheet. A useful corrective-action tracker makes ownership, due date, status, completion evidence and effectiveness visible — and separates a completed task from a verified improvement.",
    sections: [
      {
        heading: "Minimum fields worth tracking",
        bullets: [
          "Unique action ID.",
          "Problem / investigation reference.",
          "Action description written as a deliverable.",
          "Named owner.",
          "Due date.",
          "Current status.",
          "Completion evidence.",
          "Effectiveness review date and result.",
        ],
      },
      {
        heading: "Write actions that can actually be closed",
        paragraphs: [
          "Avoid vague actions such as 'improve maintenance' or 'train operators'. Write the output: update conveyor drive replacement standard to require laser alignment within the defined tolerance, then attach the approved revision.",
        ],
      },
      {
        heading: "Separate completion from effectiveness",
        paragraphs: [
          "Installing a new component, changing a procedure or completing training means the action is implemented. It does not prove the original problem has been controlled. Define what evidence will show effectiveness: no recurrence over an agreed period, measured condition improved, defect rate reduced, or failure mode removed.",
        ],
      },
      {
        heading: "Escalate intelligently",
        bullets: [
          "Flag overdue high-risk actions first.",
          "Escalate blocked actions where the owner cannot remove the constraint.",
          "Do not let low-value admin actions hide high-consequence corrective work.",
          "Review repeat failures against previously 'closed' actions to expose weak verification.",
        ],
      },
      {
        heading: "Use the tracker as a management system",
        paragraphs: [
          "A weekly engineering review should show new actions, overdue actions, blocked actions and actions waiting for effectiveness confirmation. That turns the tracker from a filing system into a control loop.",
        ],
      },
    ],
    related: [
      { href: "/engineering/support/8d-report-template-guide", title: "8D Report Guide" },
      { href: "/engineering/support/repeat-machine-failures", title: "How to Stop Repeat Machine Failures" },
      { href: "/engineering/support/engineering-kpi-dashboard", title: "Engineering KPI Dashboard Guide" },
    ],
  },
  "engineering-kpi-dashboard": {
    slug: "engineering-kpi-dashboard",
    title: "Engineering KPI Dashboard: What to Measure",
    metaTitle: "Engineering KPI Dashboard Guide for Maintenance & Reliability",
    description:
      "A practical engineering KPI dashboard guide covering MTBF, MTTR, downtime, PM compliance, backlog, OEE and the metrics that support better decisions.",
    category: "Engineering Management",
    intro:
      "A good engineering dashboard does not try to display every number available. It shows a small set of measures that explain reliability, recovery, work control and business impact — then links those measures to actions.",
    sections: [
      {
        heading: "Reliability and recovery",
        bullets: [
          "MTBF or failure frequency by critical asset.",
          "MTTR or restoration time.",
          "Repeat failure count.",
          "Unplanned downtime minutes or percentage.",
        ],
      },
      {
        heading: "Planned maintenance control",
        bullets: [
          "PM compliance or on-time completion.",
          "Planned versus reactive work mix.",
          "PM-generated corrective work.",
          "Overdue critical PM tasks.",
        ],
      },
      {
        heading: "Work management",
        bullets: [
          "Backlog by priority and estimated labour hours.",
          "Schedule compliance.",
          "Overdue engineering actions.",
          "Blocked work awaiting parts, access or decision.",
        ],
      },
      {
        heading: "Operational impact",
        bullets: [
          "OEE or availability where the data definition is stable.",
          "Top downtime Pareto categories.",
          "Maintenance cost where the accounting basis is consistent.",
          "Loss by asset, line or area.",
        ],
      },
      {
        heading: "The biggest KPI mistake",
        paragraphs: [
          "Do not use a metric because another company tracks it. Start from the business question. If the goal is more stable output, reliability and downtime measures matter. If the problem is slow recovery, MTTR and diagnostic delay matter. If planned work is constantly missed, compliance and backlog matter.",
          "Keep definitions stable. A trend built from changing definitions is worse than no trend because it creates false confidence.",
        ],
      },
    ],
    related: [
      { href: "/engineering/support/mtbf-mttr-guide", title: "MTBF & MTTR Explained" },
      { href: "/engineering/support/oee-calculator-guide", title: "OEE Calculator Guide" },
      { href: "/engineering/support/downtime-pareto-analysis", title: "Downtime Pareto Analysis" },
    ],
  },
  "why-bearings-keep-failing": {
    slug: "why-bearings-keep-failing",
    title: "Why Bearings Keep Failing — Engineering Fault-Finding Guide",
    metaTitle: "Why Do Bearings Keep Failing? Causes & Investigation Guide",
    description:
      "A practical guide to recurring bearing failures covering lubrication, contamination, mounting, fit, load, misalignment, temperature, electrical damage and verification.",
    category: "Fault Finding",
    intro:
      "If the same bearing keeps being replaced, stop treating the bearing as the root cause. Premature bearing failure is commonly driven by lubrication, contamination, mounting, fit, load, alignment, sealing, temperature or electrical conditions around the bearing. The damage pattern should help narrow the mechanism.",
    sections: [
      {
        heading: "Start with the failed bearing before cleaning everything",
        bullets: [
          "Photograph the bearing, housing, shaft, seals and lubricant condition.",
          "Record temperature, vibration, noise and operating load if available.",
          "Preserve the bearing orientation so wear location can be related back to the machine.",
          "Do not destroy evidence with aggressive cleaning before inspection.",
        ],
      },
      {
        heading: "Lubrication problems",
        paragraphs: [
          "Too little lubricant, the wrong viscosity, incompatible grease, over-greasing, degraded lubricant or poor delivery can all create heat, smearing and accelerated wear. Confirm lubricant type, quantity, interval and actual condition rather than assuming the PM task was completed correctly.",
        ],
      },
      {
        heading: "Contamination and sealing",
        paragraphs: [
          "Dust, water and hard particles can damage raceways and create stress concentrations that accelerate fatigue. If contamination is present, inspect seal condition, fitting practice, storage, tools and the route by which contamination entered the system.",
        ],
      },
      {
        heading: "Misalignment, mounting and fit",
        bullets: [
          "Check shaft and housing alignment.",
          "Check bearing seating against shoulders.",
          "Verify fits and clearances against the application requirement.",
          "Look for evidence of mounting force passing through the rolling elements.",
          "Check shaft / housing geometry and condition.",
        ],
      },
      {
        heading: "Load, temperature and electrical effects",
        paragraphs: [
          "Excessive belt tension, preload, shock load, external heat or inadequate cooling can reduce bearing life. On motors and VFD-driven equipment, investigate electrical current damage if the raceway shows characteristic fluting or washboard patterns.",
        ],
      },
      {
        heading: "Close the loop",
        paragraphs: [
          "Do not close the job at 'bearing replaced'. Record the confirmed mechanism, correct the surrounding condition, update the installation or maintenance standard if needed, and monitor temperature, vibration or recurrence to prove the fix.",
        ],
      },
    ],
    related: [
      { href: "/engineering/support/fishbone-diagram-engineering-example", title: "Fishbone Diagram for Engineering RCA" },
      { href: "/engineering/support/5-why-template", title: "5 Why Template & RCA Guide" },
      { href: "/engineering/support/repeat-machine-failures", title: "How to Stop Repeat Machine Failures" },
    ],
  },
  "conveyor-fault-finding-guide": {
    slug: "conveyor-fault-finding-guide",
    title: "Conveyor Fault Finding Guide",
    metaTitle: "Conveyor Fault Finding Guide: Tracking, Slip, Spillage & Failures",
    description:
      "A practical conveyor fault-finding guide covering mistracking, belt slip, spillage, carryback, bearings, drives, sensors and repeat breakdown investigation.",
    category: "Fault Finding",
    intro:
      "Conveyors look simple until the same tracking, slip, spillage, bearing or sensor fault keeps returning. The fastest route is to separate the symptom from the mechanism, inspect the whole system and avoid adjusting one component until the real cause is understood.",
    sections: [
      {
        heading: "Safety first",
        paragraphs: [
          "Conveyors contain trapping, crushing, stored-energy and unexpected-start hazards. Follow the site's isolation, lock-off and safe-access rules before inspection or adjustment. Do not troubleshoot inside guarded danger zones on a live conveyor unless the system has a specifically engineered safe procedure for that task.",
        ],
      },
      {
        heading: "Belt mistracking",
        bullets: [
          "Check material build-up on rollers and pulleys.",
          "Check roller and pulley alignment.",
          "Check whether the splice is square.",
          "Check loading position and whether material lands off-centre.",
          "Check belt condition and uneven wear.",
          "Inspect structure alignment before fitting a tracker to hide a mechanical problem.",
        ],
      },
      {
        heading: "Belt slip",
        bullets: [
          "Check drive-pulley friction and lagging condition.",
          "Check belt tension against the conveyor design.",
          "Check for contamination, water or product on the drive surface.",
          "Check for overload, seized components or excessive resistance.",
        ],
      },
      {
        heading: "Spillage and carryback",
        paragraphs: [
          "Spillage often points to load-zone, skirting, support, tracking or surge problems. Carryback can build up on return rollers and then contribute to mistracking. Treat the conveyor as a system rather than fixing each symptom independently.",
        ],
      },
      {
        heading: "Bearings, drives and sensors",
        bullets: [
          "Bearing temperature/noise: investigate lubrication, contamination, fit, alignment and load.",
          "Drive trips: record current, fault code, load condition and whether the conveyor was mechanically free.",
          "Photoeyes / proximity sensors: inspect contamination, alignment, mounting rigidity, target condition and cable / connector integrity.",
          "Interlocks: prove the device and wiring rather than repeatedly resetting the circuit.",
        ],
      },
      {
        heading: "When the same conveyor keeps failing",
        paragraphs: [
          "Build a downtime Pareto by failure mode, then take the dominant category into a structured investigation. Preserve evidence, test likely causes and verify the corrective action over enough operating time to prove recurrence has reduced.",
        ],
      },
    ],
    related: [
      { href: "/engineering/support/why-bearings-keep-failing", title: "Why Bearings Keep Failing" },
      { href: "/engineering/support/downtime-pareto-analysis", title: "Downtime Pareto Analysis" },
      { href: "/engineering/support/repeat-machine-failures", title: "How to Stop Repeat Machine Failures" },
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

        {article.related && article.related.length > 0 && (
          <section className="px-6 pt-16">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a227]">Related PETE guides</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {article.related.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-5 font-black leading-6 text-zinc-200 transition hover:border-[#c9a227] hover:text-[#c9a227]"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

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
