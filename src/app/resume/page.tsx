"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-6 md:py-10 flex flex-col items-center">
        {/* Top Navigation & Action Bar */}
        <div className="w-full flex items-center justify-between gap-4 mb-6 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/kaify.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer"
              title="Open raw PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Raw PDF</span>
            </a>

            <a
              href="/kaify.pdf"
              download="Kaify_Resume.pdf"
              className="px-4 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-xs md:text-sm font-semibold inline-flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Crisp Document Display - Zero Toolbar Overlays */}
        <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg bg-white dark:bg-zinc-900 relative group">
          <Image
            src="/kaify-page-1.png"
            alt="Mohd Kaif Resume"
            width={1200}
            height={1697}
            priority
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </main>
    </div>
  );
}
