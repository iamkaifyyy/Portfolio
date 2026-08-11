"use client";

import { ArrowUp, Sparkles } from "lucide-react";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full max-w-2xl mx-auto pt-16 pb-28 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col gap-6 text-zinc-600 dark:text-zinc-400 font-sans text-xs md:text-sm">
      {/* Top Row: Creator & Back to Top */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
            Kaify
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          </span>
          <span className="text-zinc-400">•</span>
          <span>Web2 & Web3 Developer</span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer group shadow-xs"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Middle Row: Social & Contact Links */}
      <div className="flex items-center gap-4 flex-wrap text-zinc-500 dark:text-zinc-400">
        <a
          href="https://github.com/iamkaifyyy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          GitHub ↗
        </a>
        <span>•</span>
        <a
          href="https://x.com/iamkaifyyy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          Twitter ↗
        </a>
        <span>•</span>
        <a
          href="https://linkedin.com/in/iamkaifyyy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          LinkedIn ↗
        </a>
        <span>•</span>
        <a
          href="mailto:mkaifm728@gmail.com"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          mkaifm728@gmail.com
        </a>
      </div>

      {/* Bottom Row: Copyright & Location */}
      <div className="flex items-center justify-between gap-4 flex-wrap pt-4 border-t border-zinc-200/40 dark:border-zinc-800/40 text-xs text-zinc-400 dark:text-zinc-500">
        <p className="flex items-center gap-1">
          Crafted with Next.js & Tailwind CSS
        </p>
        <p>© {new Date().getFullYear()} Kaify. All rights reserved.</p>
      </div>
    </footer>
  );
}
