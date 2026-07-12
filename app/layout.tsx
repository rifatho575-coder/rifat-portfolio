import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://rifathossain.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rifat Hossain — Crypto Researcher & Web3 Enthusiast",
  description:
    "Rifat Hossain is a crypto researcher with 5+ years exploring DeFi, blockchain, airdrops, and the Web3 ecosystem. Portfolio, skills, and contact.",
  keywords: [
    "Rifat Hossain",
    "Crypto Researcher",
    "Web3",
    "DeFi",
    "Airdrop Hunter",
    "Blockchain",
    "Market Research",
  ],
  authors: [{ name: "Rifat Hossain" }],
  creator: "Rifat Hossain",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Rifat Hossain — Crypto Researcher & Web3 Enthusiast",
    description:
      "5+ years exploring DeFi, blockchain, airdrops, and the Web3 ecosystem.",
    siteName: "Rifat Hossain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifat Hossain — Crypto Researcher & Web3 Enthusiast",
    description:
      "5+ years exploring DeFi, blockchain, airdrops, and the Web3 ecosystem.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-base font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
