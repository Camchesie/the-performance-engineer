import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Performance Engineer Ltd | PETE",
  description:
    "UK software and consultancy business building PETE performance systems across trading technology, engineering and operational improvement.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
