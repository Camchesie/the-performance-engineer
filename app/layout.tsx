import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.theperformanceengineer.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Performance Engineer | PETE Engineering & Performance Systems",
    template: "%s | The Performance Engineer",
  },
  description:
    "Practical engineering support, reliability tools, root-cause analysis resources and PETE performance systems from The Performance Engineer Ltd.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Performance Engineer",
    title: "The Performance Engineer | PETE",
    description:
      "Engineering support, reliability tools, root-cause analysis resources and performance systems built around Measure. Analyse. Improve.",
    images: [
      {
        url: "/pte-logo.png",
        width: 1200,
        height: 1200,
        alt: "The Performance Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Performance Engineer | PETE",
    description:
      "Engineering support, reliability tools, root-cause analysis resources and performance systems.",
    images: ["/pte-logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "The Performance Engineer Ltd",
  alternateName: "PETE",
  url: siteUrl,
  logo: `${siteUrl}/pte-logo.png`,
  email: "hello@theperformanceengineer.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "66 Paul Street",
    addressLocality: "London",
    postalCode: "EC2A 4NA",
    addressCountry: "GB",
  },
  sameAs: ["https://instagram.com/the.performance.engineer"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "The Performance Engineer",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
