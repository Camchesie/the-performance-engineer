import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Portal",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function CustomerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
