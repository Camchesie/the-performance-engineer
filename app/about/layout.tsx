import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Performance Engineer Ltd",
  description:
    "About The Performance Engineer Ltd, a UK engineering, software and consultancy business building practical performance systems.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
