import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaify",
  description:
    "Portfolio of Kaify — Full-stack Web2 & Web3 developer building AI-powered products at Onewave Studio, crafting high-performance dApps and smart contracts on Solana & EVM chains.",
  icons: {
    icon: "/asta.jpeg",
    shortcut: "/asta.jpeg",
    apple: "/asta.jpeg",
  },
};

import { CustomCursor } from "@/components/ui/custom-cursor";
import { LenisProvider } from "@/components/LenisProvider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { StickyFooterBar } from "@/components/ui/sticky-footer-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <LenisProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
          <StickyFooterBar />
        </LenisProvider>
      </body>
    </html>
  );
}
