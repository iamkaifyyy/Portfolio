"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";

const TEXTS = [
  "Crafted with Next.js & Tailwind CSS",
  `© ${new Date().getFullYear()} Kaify. All rights reserved.`,
];

function getInitialDark(): boolean {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function StickyFooterBar() {
  const [textIndex, setTextIndex] = useState(0);
  const [isDark, setIsDark] = useState<boolean>(getInitialDark);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % TEXTS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const setLight = () => {
    document.documentElement.classList.remove("dark");
    setIsDark(false);
  };

  const setDark = () => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-2xl mx-auto px-4 pb-2.5 flex items-end justify-between [zoom:0.95] origin-bottom">
        {/* Flipping text */}
        <div className="pointer-events-auto h-5 overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-[11px] text-zinc-400 dark:text-zinc-500 whitespace-nowrap select-none"
            >
              {TEXTS[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Sun + Moon side by side */}
        <div className="pointer-events-auto flex items-center gap-1 p-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm shadow-xs">
          {/* Sun — light mode */}
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
              animate={{ rotate: !isDark ? 0 : -20, scale: !isDark ? 1 : 0.85 }}
              transition={{ duration: 0.25 }}
            >
              <Sun className="w-3.5 h-3.5" />
            </motion.span>
          </button>

          {/* Moon — dark mode */}
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
              animate={{ rotate: isDark ? 0 : 20, scale: isDark ? 1 : 0.85 }}
              transition={{ duration: 0.25 }}
            >
              <Moon className="w-3.5 h-3.5" />
            </motion.span>
          </button>
        </div>
      </div>
    </div>
  );
}
