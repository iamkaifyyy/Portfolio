"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "web2" | "web3";
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"web2" | "web3">("web2");

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <section className="w-full mt-12 pb-24">
      {/* Tab Switcher */}
      <div className="max-w-xs mx-auto flex items-center justify-center gap-8 border-b border-zinc-200 dark:border-zinc-800 mb-8 pb-1">
        <button
          onClick={() => setActiveTab("web2")}
          className={`relative pb-3 text-sm md:text-base font-semibold transition-colors cursor-pointer ${
            activeTab === "web2"
              ? "text-zinc-900 dark:text-zinc-100"
              : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
          }`}
        >
          Products
          {activeTab === "web2" && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
        </button>

        <button
          onClick={() => setActiveTab("web3")}
          className={`relative pb-3 text-sm md:text-base font-semibold transition-colors cursor-pointer ${
            activeTab === "web3"
              ? "text-zinc-900 dark:text-zinc-100"
              : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
          }`}
        >
          Web3
          {activeTab === "web3" && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
        </button>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
        >
          {filteredProjects.length === 0 ? (
            <div className="py-12 text-center text-xs md:text-sm text-zinc-400 dark:text-zinc-500 font-medium">
              No {activeTab === "web2" ? "Web2" : "Web3"} projects added yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-base md:text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                            title="GitHub Repository"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
