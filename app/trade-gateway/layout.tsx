import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PETE Trade Gateway — Founding Beta",
  description:
    "Customer-directed trade execution and management through Telegram and MT4, engineered around validation, control, risk and traceability.",
  alternates: { canonical: "/trade-gateway" },
};

export default function TradeGatewayLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
