"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PROJECTS_DATA } from "./projects-data";

function VideoPreview({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      onLoadedMetadata={() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 0.5;
        }
      }}
      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
    />
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "web2" | "web3">("all");

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeTab);

  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4">
      {/* Top Tab Switcher (All / Web2 / Web3) */}
      <div className="flex items-center justify-center gap-6 md:gap-8 border-b border-zinc-200/80 dark:border-zinc-800/80 mb-10 pb-2">
        {(["all", "web2", "web3"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-base font-semibold capitalize transition-colors cursor-pointer pb-2 ${
              activeTab === tab
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            {tab === "all" ? "All Projects" : tab.toUpperCase()}
            {activeTab === tab && (
              <motion.div
                layoutId="projectsTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid Layout (6 Projects) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
        >
          {filteredProjects.map((item) => (
            <div key={item.id} className="flex flex-col group text-left">
              {/* Media Preview Box */}
              {item.videoUrl ? (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs group-hover:shadow-md transition-shadow">
                  <VideoPreview src={item.videoUrl} />
                </div>
              ) : item.imageUrl ? (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs group-hover:shadow-md transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              ) : null}

              {/* Title & Tag Row */}
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 tracking-tight">
                  {item.name}
                </h3>
                {item.tag && (
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
                      item.category === "web3"
                        ? "bg-purple-100/90 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                        : "bg-emerald-100/90 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Action Links Row */}
              <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 mb-1.5 font-medium">
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline transition-colors"
                  >
                    Github
                  </a>
                )}
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline flex items-center gap-1 transition-colors"
                  >
                    View <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
