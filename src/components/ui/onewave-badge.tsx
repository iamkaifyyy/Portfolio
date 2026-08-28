"use client";

import { Infinity as InfinityIcon } from "lucide-react";

export function OnewaveBadge() {
  return (
    <a
      href="https://onewavestudio.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-5 left-5 md:top-6 md:left-6 z-50 inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer group select-none"
      title="Onewave Studio"
      aria-label="Onewave Studio"
    >
      <InfinityIcon className="w-4.5 h-4.5 text-zinc-900 dark:text-zinc-100 group-hover:scale-110 transition-transform duration-200" />
      <span className="group-hover:underline underline-offset-4 decoration-zinc-400">
        Onewave Studio
      </span>
    </a>
  );
}
