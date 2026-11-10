import type { MetadataRoute } from "next";

const base = "https://www.theperformanceengineer.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ["", 1, "weekly"],
    ["/engineering", 1, "weekly"],
    ["/engineering/support", 0.9, "weekly"],
    ["/engineering/support/5-why-template", 0.9, "monthly"],
    ["/engineering/support/oee-calculator-guide", 0.9, "monthly"],
    ["/engineering/support/mtbf-mttr-guide", 0.9, "monthly"],
    ["/engineering/support/repeat-machine-failures", 0.9, "monthly"],
    ["/engineering/support/downtime-pareto-analysis", 0.9, "monthly"],
    ["/trade-gateway", 0.8, "weekly"],
    ["/how-it-works", 0.7, "monthly"],
    ["/about", 0.6, "monthly"],
  ] as const;

  return routes.map(([path, priority, changeFrequency]) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-11-10"),
    changeFrequency,
    priority,
  }));
}
