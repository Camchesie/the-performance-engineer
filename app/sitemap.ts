import type { MetadataRoute } from "next";

const base = "https://www.theperformanceengineer.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ["", 1, "weekly"],
    ["/engineering", 1, "weekly"],
    ["/management-data", 1, "weekly"],
    ["/management-data/support", 0.9, "weekly"],
    ["/management-data/support/digital-asset-management-guide", 0.9, "monthly"],
    ["/management-data/support/management-information-from-data-to-decisions", 0.9, "monthly"],
    ["/management-data/support/weekly-management-review", 0.9, "monthly"],
    ["/management-data/support/action-management-accountability", 0.9, "monthly"],
    ["/management-data/support/tiered-management-sqcdp", 0.9, "monthly"],
    ["/management-data/support/capacity-resource-planning", 0.9, "monthly"],
    ["/consultancy", 0.9, "monthly"],
    ["/engineering/support", 0.9, "weekly"],
    ["/engineering/support/5-why-template", 0.9, "monthly"],
    ["/engineering/support/oee-calculator-guide", 0.9, "monthly"],
    ["/engineering/support/mtbf-mttr-guide", 0.9, "monthly"],
    ["/engineering/support/repeat-machine-failures", 0.9, "monthly"],
    ["/engineering/support/downtime-pareto-analysis", 0.9, "monthly"],
    ["/engineering/support/fishbone-diagram-engineering-example", 0.9, "monthly"],
    ["/engineering/support/8d-report-template-guide", 0.9, "monthly"],
    ["/engineering/support/asset-criticality-matrix", 0.9, "monthly"],
    ["/engineering/support/pm-effectiveness-review", 0.9, "monthly"],
    ["/engineering/support/corrective-action-tracker", 0.9, "monthly"],
    ["/engineering/support/engineering-kpi-dashboard", 0.9, "monthly"],
    ["/engineering/support/why-bearings-keep-failing", 0.9, "monthly"],
    ["/engineering/support/conveyor-fault-finding-guide", 0.9, "monthly"],
    ["/trade-gateway", 0.8, "weekly"],
    ["/how-it-works", 0.7, "monthly"],
    ["/about", 0.6, "monthly"],
  ] as const;

  return routes.map(([path, priority, changeFrequency]) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-11-11"),
    changeFrequency,
    priority,
  }));
}
