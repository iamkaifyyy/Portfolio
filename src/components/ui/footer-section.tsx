"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Sparkles, Sun, Moon } from "lucide-react";
import { VisitorCounter } from "@/components/ui/visitor-counter";

const TEXTS = [
  "Crafted with Next.js & Tailwind CSS",
  `© ${new Date().getFullYear()} Kaify. All rights reserved.`,
];

function getInitialDark(): boolean {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function FooterSection() {
  const [isDark, setIsDark] = useState<boolean>(getInitialDark);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % TEXTS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const setLight = () => {
    document.documentElement.classList.remove("dark");
    setIsDark(false);
  };

  const setDark = () => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
  };

  return (
    <footer className="w-full max-w-2xl mx-auto mt-auto pt-10 pb-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col gap-5 text-zinc-600 dark:text-zinc-400 font-sans text-xs md:text-sm px-0 sm:px-4">
      {/* Top Row: Creator & Back to Top */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
            Kaify
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span>Web2 &amp; Web3 Developer</span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <VisitorCounter />
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer group shadow-xs"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Middle Row: Social & Contact Links */}
      <div className="flex items-center gap-x-2.5 gap-y-1.5 flex-wrap text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
        <a
          href="https://github.com/iamkaifyyy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          GitHub ↗
        </a>
        <span className="text-zinc-300 dark:text-zinc-700">•</span>
        <a
          href="https://x.com/iamkaifyyy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          Twitter ↗
        </a>
        <span className="text-zinc-300 dark:text-zinc-700">•</span>
        <a
          href="https://linkedin.com/in/iamkaifyyy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          LinkedIn ↗
        </a>
        <span className="text-zinc-300 dark:text-zinc-700">•</span>
        <a
          href="mailto:mkaifm728@gmail.com"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors break-all"
        >
          mkaifm728@gmail.com
        </a>
      </div>

      {/* Bottom Row: Flipping text + Theme Switcher */}
      <div className="flex items-center justify-between gap-4 pt-3 border-t border-zinc-200/40 dark:border-zinc-800/40">
        {/* Flipping copyright text */}
        <div className="h-5 overflow-hidden flex items-center max-w-[200px] sm:max-w-xs">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[10px] sm:text-[11px] text-zinc-400 dark:text-zinc-500 truncate select-none"
            >
              {TEXTS[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Sun + Moon side by side */}
        <div className="flex items-center gap-1 p-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
          <button
            onClick={setLight}
            aria-label="Light mode"
            className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 cursor-pointer ${
              !isDark
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            <motion.span
              animate={{ rotate: !isDark ? 0 : -15, scale: !isDark ? 1 : 0.85 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-3.5 h-3.5" />
            </motion.span>
          </button>

          <button
            onClick={setDark}
            aria-label="Dark mode"
            className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 cursor-pointer ${
              isDark
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            <motion.span
              animate={{ rotate: isDark ? 0 : 15, scale: isDark ? 1 : 0.85 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-3.5 h-3.5" />
            </motion.span>
          </button>
        </div>
      </div>
    </footer>
  );
}
