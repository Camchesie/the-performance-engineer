import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PETE Engineering Toolkit | The Performance Engineer",
  description:
    "Engineering fault finding, root-cause analysis, reliability, maintenance and performance tools from The Performance Engineer.",
};

export default function EngineeringLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
