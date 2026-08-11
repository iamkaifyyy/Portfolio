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
      className="aspect-video w-full rounded-xl object-cover"
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
    <section className="w-full max-w-2xl mx-auto my-12 px-4 md:px-0">
      {/* Top Tab Switcher (All / Web2 / Web3) */}
      <div className="flex items-center gap-6 border-b border-zinc-200/80 dark:border-zinc-800/80 mb-10 pb-2">
        {(["all", "web2", "web3"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-lg font-medium capitalize transition-colors cursor-pointer pb-2 ${
              activeTab === tab
                ? "text-zinc-900 dark:text-zinc-50"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            }`}
          >
            {tab === "all" ? "All Projects" : tab.toUpperCase()}
            {activeTab === tab && (
              <motion.div
                layoutId="projectsTabUnderline"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-50"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Spacious Grid Layout matching exact Portfolio design */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {filteredProjects.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {/* Media Container with Padded Frame */}
              <div className="relative rounded-2xl bg-zinc-50/60 p-1 ring-1 ring-zinc-200/60 ring-inset dark:bg-zinc-950/60 dark:ring-zinc-800/60 shadow-xs">
                {item.videoUrl ? (
                  <VideoPreview src={item.videoUrl} />
                ) : item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="aspect-video w-full rounded-xl object-cover"
                  />
                ) : null}
              </div>

              {/* Text Info Container */}
              <div className="px-1 space-y-1.5">
                {/* Title & Badge Row */}
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-base md:text-lg text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
                        item.category === "web3"
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-blue-600/20 dark:ring-blue-500/30"
                          : "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 ring-green-600/20 dark:ring-green-500/30"
                      }`}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Animated Links Row */}
                <div className="flex items-center gap-4">
                  {item.githubUrl && (
                    <a
                      className="font-sans group relative inline-block font-[450] text-sm text-zinc-900 dark:text-zinc-50"
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                  )}
                  {item.liveUrl && (
                    <a
                      className="font-sans group relative inline-flex items-center gap-1 font-[450] text-sm text-zinc-900 dark:text-zinc-50"
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View <ExternalLink className="w-3.5 h-3.5" />
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-base font-normal font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed pt-0.5">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
