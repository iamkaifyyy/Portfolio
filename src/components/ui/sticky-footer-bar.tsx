"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";

const TEXTS = [
  "Crafted with Next.js & Tailwind CSS",
  `© ${new Date().getFullYear()} Kaify. All rights reserved.`,
];

// Lazy initializer runs only on client, avoids SSR mismatch
function getInitialDark(): boolean {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function StickyFooterBar() {
  const [textIndex, setTextIndex] = useState(0);
  const [isDark, setIsDark] = useState<boolean>(getInitialDark);

  // Flip text every 3.5s — setTextIndex inside callback is allowed
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % TEXTS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nowDark = root.classList.toggle("dark");
    setIsDark(nowDark);
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

        {/* Sun / Moon theme toggle */}
        <button
          onClick={toggleTheme}
          className="pointer-events-auto flex items-center justify-center w-7 h-7 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all hover:scale-110 active:scale-95 shadow-xs cursor-pointer"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.span
                key="sun"
                initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-3.5 h-3.5" />
              </motion.span>
            ) : (
              <motion.span
                key="moon"
                initial={{ rotate: 30, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -30, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-3.5 h-3.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
