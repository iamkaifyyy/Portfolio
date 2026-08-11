"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, ExternalLink, Infinity as InfinityIcon } from "lucide-react";

export function HeaderNav() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="w-full max-w-4xl mx-auto px-6 pt-6 md:pt-8 flex items-center justify-between z-40">
      {/* Top Left: Onewave Studio Branding with Infinity Logo */}
      <a
        href="https://onewavestudio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity cursor-pointer group"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs group-hover:scale-105 transition-transform">
          <InfinityIcon className="w-4 h-4" />
        </span>
        <span className="group-hover:underline underline-offset-4 decoration-zinc-400">
          Onewave Studio
        </span>
        <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

      {/* Top Right: Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all border border-zinc-200/60 dark:border-zinc-700/60 cursor-pointer"
        title="Toggle Theme"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-zinc-700 transition-transform hover:-rotate-12" />
        )}
      </button>
    </header>
  );
}
