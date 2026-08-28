"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6 md:py-10 flex flex-col gap-6 items-center">
        {/* Top Control Header Bar */}
        <div className="w-full max-w-2xl flex items-center justify-between gap-3 sm:gap-4 flex-wrap pb-3 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <Magnetic intensity={0.3}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
          </Magnetic>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Magnetic intensity={0.25}>
              <a
                href="/kaify.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Raw PDF</span>
              </a>
            </Magnetic>

            <Magnetic intensity={0.35}>
              <a
                href="/kaify.pdf"
                download="Kaify_Resume.pdf"
                className="px-3 sm:px-4 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-xs md:text-sm font-semibold inline-flex items-center gap-1.5 sm:gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Download PDF
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Clean PDF Document View Only */}
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 px-0 sm:px-2">
          <div className="w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg bg-white dark:bg-zinc-900 relative">
            <Image
              src="/kaify-page-1.png"
              alt="Mohd Kaif Resume"
              width={1200}
              height={1697}
              priority
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
