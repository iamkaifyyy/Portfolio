"use client";

import { Infinity as InfinityIcon } from "lucide-react";

export function OnewaveBadge() {
  return (
    <a
      href="https://onewavestudio.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer group select-none"
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
