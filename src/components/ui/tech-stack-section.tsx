"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Terminal, Cpu, Layers, Database, Wrench } from "lucide-react";

interface TechCategory {
  name: string;
  icon: typeof Code2;
  items: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    name: "Languages",
    icon: Terminal,
    items: ["JavaScript", "TypeScript", "Python", "C++", "SQL", "Solidity", "Rust"],
  },
  {
    name: "Frontend",
    icon: Layers,
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "RainbowKit"],
  },
  {
    name: "Backend",
    icon: Cpu,
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSocket", "JWT", "RBAC"],
  },
  {
    name: "Web3 & Databases",
    icon: Database,
    items: ["Solana", "Smart Contracts", "On-chain Attestation", "IPFS", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    name: "DevOps & Tools",
    icon: Wrench,
    items: ["Docker", "Git", "GitHub Actions", "Linux", "Vercel", "Render", "Postman"],
  },
];

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const allItems = TECH_CATEGORIES.flatMap((c) => c.items);

  return (
    <div className="w-full flex flex-col gap-5 mt-10 mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/60 dark:border-zinc-700/60">
            <Code2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-base md:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Tech Stack & Toolkit
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Technologies and frameworks sourced from my resume
            </p>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeCategory === "All"
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs"
              : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          }`}
        >
          All Tech ({allItems.length})
        </button>

        {TECH_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === cat.name
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Interactive Tech Badge Grid */}
      <div className="p-5 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 flex gap-2.5 flex-wrap min-h-[100px] items-center">
        <AnimatePresence mode="popLayout">
          {(activeCategory === "All"
            ? TECH_CATEGORIES
            : TECH_CATEGORIES.filter((c) => c.name === activeCategory)
          ).map((category) =>
            category.items.map((tech, index) => (
              <motion.span
                key={`${category.name}-${tech}`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.18, delay: index * 0.02 }}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 shadow-2xs hover:scale-105 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all cursor-default flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                {tech}
              </motion.span>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
