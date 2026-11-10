import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Support Guides",
  description:
    "Practical engineering support guides covering root-cause analysis, 5 Why, OEE, MTBF, MTTR, downtime Pareto and repeat machine failures.",
  alternates: {
    canonical: "/engineering/support",
  },
};

export default function SupportLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
