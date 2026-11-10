import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How PETE Trade Gateway Works",
  description:
    "How PETE Trade Gateway routes customer-directed trade instructions from Telegram through the hosted core, Windows Gateway and MT4.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
