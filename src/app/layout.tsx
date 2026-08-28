import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { OnewaveBadge } from "@/components/ui/onewave-badge";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { LenisProvider } from "@/components/LenisProvider";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <ScrollProgress />
            <OnewaveBadge />
            <ThemeToggle />
            <CustomCursor />
            {children}
            <FloatingDock />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
