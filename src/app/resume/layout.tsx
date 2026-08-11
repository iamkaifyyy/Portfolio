import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaify — Resume",
  description:
    "Interactive and downloadable resume of Kaify, Full-Stack Web2 & Web3 Developer.",
  icons: {
    icon: "/asta.jpeg",
    shortcut: "/asta.jpeg",
    apple: "/asta.jpeg",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
