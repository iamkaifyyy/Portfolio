"use client";

import { motion } from "motion/react";
import { Terminal, Layers, Cpu, Database, Wrench } from "lucide-react";

interface TechGroup {
  category: string;
  icon: typeof Terminal;
  badgeColor: string;
  items: string[];
}

const TECH_GROUPS: TechGroup[] = [
  {
    category: "Languages",
    icon: Terminal,
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    items: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "Solidity", "Rust"],
  },
  {
    category: "Frontend",
    icon: Layers,
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "RainbowKit"],
  },
  {
    category: "Backend",
    icon: Cpu,
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSocket", "JWT", "RBAC"],
  },
  {
    category: "Web3 & Databases",
    icon: Database,
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    items: ["Solana", "Smart Contracts", "On-chain Attestation", "IPFS", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    items: ["Docker", "Git", "GitHub Actions", "Linux", "Vercel", "Render", "Postman"],
  },
];

export function TechStackSection() {
  return (
    <div className="w-full flex flex-col gap-4 mt-8 mb-16">
      <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-800/60 pb-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Tech Stack & Toolkit
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TECH_GROUPS.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              className={`p-5 rounded-2xl bg-zinc-50/40 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col gap-3.5 ${
                idx === TECH_GROUPS.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`p-2 rounded-xl border ${group.badgeColor}`}>
                  <Icon className="w-4 h-4" />
                </span>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {group.category}
                </h3>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xs hover:scale-105 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
