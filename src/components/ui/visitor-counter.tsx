"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const STORAGE_KEY = "portfolio_visitor_count";
    const SESSION_KEY = "portfolio_visited_session";

    // Read stored count or start at 0
    let currentCount = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);

    // If new session (new visitor or fresh browser tab session), increment by +1
    const hasVisitedThisSession = sessionStorage.getItem(SESSION_KEY);
    if (!hasVisitedThisSession) {
      currentCount += 1;
      sessionStorage.setItem(SESSION_KEY, "true");
      localStorage.setItem(STORAGE_KEY, currentCount.toString());
    }

    setCount(currentCount);
  }, []);

  if (!mounted) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100/70 dark:bg-zinc-800/70 border border-zinc-200/60 dark:border-zinc-700/60">
        <Eye className="w-3.5 h-3.5" />
        <span>...</span>
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 transition-all hover:border-zinc-300 dark:hover:border-zinc-600 select-none cursor-default"
      title="Website visitor counter"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Eye className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
        {count !== null ? count.toLocaleString() : "1"}
      </span>
      <span className="text-zinc-500 dark:text-zinc-400">views</span>
    </span>
  );
}
