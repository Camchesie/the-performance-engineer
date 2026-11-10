import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/customer",
        "/engineering/download",
        "/engineering/success",
        "/engineering/buy",
        "/join-beta",
      ],
    },
    sitemap: "https://www.theperformanceengineer.uk/sitemap.xml",
    host: "https://www.theperformanceengineer.uk",
  };
}
