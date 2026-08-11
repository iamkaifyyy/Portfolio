"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Sparkles } from "lucide-react";
import { PROJECTS } from "./projects-data";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "web2" | "web3" | "ai">("all");

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4">
      {/* Section Heading */}
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-8">
        <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          Featured Projects
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
        {(["all", "web2", "web3", "ai"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold capitalize transition-all cursor-pointer ${
              activeTab === tab
                ? "text-white dark:text-zinc-900"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeProjectTab"
                className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 rounded-full z-0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab === "all" ? "All Works" : tab}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              {/* Media Preview (Video or Image) */}
              {project.videoUrl ? (
                <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-4 bg-zinc-900">
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : project.imageUrl ? (
                <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-4 bg-zinc-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : null}

              {/* Content Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base md:text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* Action Icons */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-all cursor-pointer"
                        title="GitHub Repo"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-all cursor-pointer"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Badge Tag */}
                {project.tag && (
                  <span className="inline-block px-2.5 py-0.5 mb-3 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-800/50">
                    {project.tag}
                  </span>
                )}

                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
