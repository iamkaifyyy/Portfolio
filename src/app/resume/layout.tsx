import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaify — Resume",
  description:
    "Interactive and downloadable resume of Kaify, Full-Stack Web2 & Web3 Developer.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
