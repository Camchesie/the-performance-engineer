import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Toolkit, RCA & Reliability Tools",
  description:
    "PETE Engineering Toolkit: practical fault-finding, root-cause analysis, OEE, MTBF, MTTR, downtime, maintenance and reliability tools for engineers.",
  alternates: {
    canonical: "/engineering",
  },
  openGraph: {
    type: "website",
    url: "/engineering",
    title: "PETE Engineering Toolkit — Release 1",
    description:
      "20 practical engineering tools for fault investigation, root-cause analysis, reliability, maintenance and performance improvement.",
    images: ["/pte-logo.png"],
  },
};

export default function EngineeringLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
