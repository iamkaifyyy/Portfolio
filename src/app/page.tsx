"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { createTimeline, stagger, splitText } from "animejs";
import { DockDemo } from "@/components/ui/dock-demo";
import { TextEffect } from "@/components/ui/text-effect";
import { ProjectsSection } from "@/components/ui/projects-section";
import { GithubGraph } from "@/components/ui/github-graph";
import { TechStackSection } from "@/components/ui/tech-stack-section";

export default function Home() {
  const [isFading, setIsFading] = useState(false);
  const [isInitialFlipped, setIsInitialFlipped] = useState(false);
  const hobbiesRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const showGifTimer = setTimeout(() => {
      setIsInitialFlipped(true);
    }, 400);

    
    const hideGifTimer = setTimeout(() => {
      setIsInitialFlipped(false);
    }, 2200);

    return () => {
      clearTimeout(showGifTimer);
      clearTimeout(hideGifTimer);
    };
  }, []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 5500);

    try {
      const tl = createTimeline({
        loop: false,
        defaults: { ease: "inOut(3)", duration: 650 },
      });

      if (hobbiesRef.current) {
        const { words: hobbyWords } = splitText(hobbiesRef.current, {
          words: { wrap: "clip" },
        });

        if (hobbyWords && hobbyWords.length > 0) {
          tl.add(hobbyWords, {
            translateY: ["30%", "0%"],
            opacity: [0, 1],
            duration: 200,
            delay: stagger(12),
          });
        }
      }

      tl.init();
    } catch (err) {
      console.error("Anime.js animation error:", err);
    }

    return () => {
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-16 md:pt-24 pb-24 px-4 md:px-8 relative max-w-xl mx-auto space-y-10 md:space-y-12">
      <div className="flex items-start justify-center gap-6 md:gap-10">
        <div className="flex flex-col items-start max-w-md">
          <div className="flex items-baseline gap-3">
            <TextEffect
              as="h1"
              per="char"
              preset="fade-in-blur"
              className="font-bold text-3xl md:text-4xl tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Kaify
            </TextEffect>
            <div className={`transition-all duration-700 ${isFading ? "opacity-0 -translate-x-2 pointer-events-none" : ""}`}>
              <TextEffect
                as="span"
                per="char"
                preset="fade-in-blur"
                delay={0.1}
                className="text-sm md:text-base font-bold text-zinc-400 dark:text-zinc-500 tracking-widest inline-block"
              >
                カイフィー
              </TextEffect>
            </div>
          </div>
          <TextEffect
            as="h2"
            per="word"
            preset="fade-in-blur"
            delay={0.2}
            className="text-lg md:text-xl font-medium text-zinc-600 dark:text-zinc-400 mt-1"
          >
            Web2 & Web3 Developer
          </TextEffect>
          <p className="mt-4 text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Full-stack Web2 & Web3 developer building AI-powered products at
            Onewave Studio, crafting high-performance dApps and smart contracts on
            Solana & EVM chains.
          </p>
          <p
            ref={hobbiesRef}
            className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed overflow-hidden"
          >
            When I&apos;m not coding, I&apos;m at the gym or immersed in music.
          </p>

          {}
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-100/90 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-800/80 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-emerald-200 dark:hover:bg-emerald-900/80 hover:border-emerald-400 hover:shadow-sm group/badge shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 transition-transform duration-300 group-hover/badge:scale-125"></span>
              </span>
              Available for work
            </span>
            <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
              Remote contracts, freelance & collaborations
            </span>
          </div>

          {}
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <Link
              href="/resume"
              className="px-4 py-1.5 border border-black dark:border-white bg-black text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs md:text-sm font-medium rounded-none inline-flex items-center gap-1.5 cursor-pointer transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Resume 📄
            </Link>
            <a
              href="mailto:mkaifm728@gmail.com"
              className="px-4 py-1.5 border border-blue-600 bg-blue-600 text-white text-xs md:text-sm font-medium rounded-none inline-flex items-center gap-1.5 cursor-pointer transition-colors hover:bg-blue-700"
            >
              Book a Meet
            </a>
          </div>

          {}
          <div className="mt-5 flex items-center gap-2.5 flex-wrap">
            <a
              href="https://www.github.com/iamkaifyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(161,161,170,0.5)_0%,rgba(255,255,255,0.9)_50%,rgba(161,161,170,0.5)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.1)_100%)] opacity-80" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white/70 dark:bg-zinc-900/70 px-3.5 py-1 text-xs font-medium text-zinc-900 dark:text-zinc-100 backdrop-blur-xl border border-white/60 dark:border-white/10 transition-colors hover:bg-white/90 dark:hover:bg-zinc-900/90">
                Github ↗
              </span>
            </a>
            <a
              href="https://www.x.com/iamkaifyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(161,161,170,0.5)_0%,rgba(255,255,255,0.9)_50%,rgba(161,161,170,0.5)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.1)_100%)] opacity-80" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white/70 dark:bg-zinc-900/70 px-3.5 py-1 text-xs font-medium text-zinc-900 dark:text-zinc-100 backdrop-blur-xl border border-white/60 dark:border-white/10 transition-colors hover:bg-white/90 dark:hover:bg-zinc-900/90">
                Twitter ↗
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/iamkaifyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(161,161,170,0.5)_0%,rgba(255,255,255,0.9)_50%,rgba(161,161,170,0.5)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.1)_100%)] opacity-80" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white/70 dark:bg-zinc-900/70 px-3.5 py-1 text-xs font-medium text-zinc-900 dark:text-zinc-100 backdrop-blur-xl border border-white/60 dark:border-white/10 transition-colors hover:bg-white/90 dark:hover:bg-zinc-900/90">
                LinkedIn ↗
              </span>
            </a>
            <a
              href="https://www.instagram.com/iamkaifyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(161,161,170,0.5)_0%,rgba(255,255,255,0.9)_50%,rgba(161,161,170,0.5)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.1)_100%)] opacity-80" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white/70 dark:bg-zinc-900/70 px-3.5 py-1 text-xs font-medium text-zinc-900 dark:text-zinc-100 backdrop-blur-xl border border-white/60 dark:border-white/10 transition-colors hover:bg-white/90 dark:hover:bg-zinc-900/90">
                Instagram ↗
              </span>
            </a>
          </div>
        </div>

        {}
        <div className="relative group shrink-0 [perspective:1000px]">
          <div
            className={`w-28 h-28 md:w-36 md:h-36 rounded-2xl p-1 bg-gradient-to-tr from-zinc-200 via-zinc-100 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 shadow-md ring-1 ring-zinc-200 dark:ring-zinc-800 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer ${
              isInitialFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {}
            <div className="absolute inset-1 rounded-xl overflow-hidden bg-white [backface-visibility:hidden]">
              <Image
                src="/me.jpeg"
                alt="Kaify Profile Photo"
                fill
                priority
                className="object-cover"
              />
            </div>

            {}
            <div className="absolute inset-1 rounded-xl overflow-hidden bg-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <Image
                src="/asta.gif"
                alt="Asta GIF"
                fill
                unoptimized
                className="object-cover scale-95"
              />
            </div>
          </div>
        </div>
      </div>

      <ProjectsSection />
      <GithubGraph />
      <TechStackSection />

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <DockDemo />
      </div>
    </main>
  );
}
