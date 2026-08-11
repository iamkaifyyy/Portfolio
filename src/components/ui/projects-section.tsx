"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X } from "lucide-react";
import { PROJECTS_DATA, DESIGNS_DATA } from "./projects-data";
import { Skeleton } from "@/components/ui/skeleton";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from "@/components/ui/morphing-dialog";

function ProjectVideo({ src }: { src: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const applySlowPlayback = () => {
    if (videoRef.current) videoRef.current.playbackRate = 0.25;
    if (modalVideoRef.current) modalVideoRef.current.playbackRate = 0.25;
  };

  useEffect(() => {
    applySlowPlayback();
  }, [src]);

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="relative aspect-video w-full">
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-10"
              >
                <Skeleton className="h-full w-full rounded-xl" />
              </motion.div>
            )}
          </AnimatePresence>
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => {
              setIsLoading(false);
              applySlowPlayback();
            }}
            onLoadedMetadata={applySlowPlayback}
            className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
          />
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            ref={modalVideoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            onLoadedMetadata={applySlowPlayback}
            onLoadedData={applySlowPlayback}
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh] object-cover"
          />
        </MorphingDialogContent>
        <MorphingDialogClose className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white dark:bg-zinc-800 p-1 shadow-md hover:scale-110 transition-transform">
          <X className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "design">("projects");

  const web2Projects = PROJECTS_DATA.filter((p) => p.category === "web2");
  const web3Projects = PROJECTS_DATA.filter((p) => p.category === "web3");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto px-4 md:px-0"
    >
      {/* Centered Tab Switcher Header (Projects / Design) */}
      <div className="flex justify-center gap-8 mb-8">
        <button
          onClick={() => setActiveTab("projects")}
          className={`text-base font-medium relative cursor-pointer transition-colors ${
            activeTab === "projects"
              ? "text-zinc-900 dark:text-zinc-50"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
          }`}
        >
          Projects
          {activeTab === "projects" && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-50"
              initial={false}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab("design")}
          className={`text-base font-medium relative cursor-pointer transition-colors ${
            activeTab === "design"
              ? "text-zinc-900 dark:text-zinc-50"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
          }`}
        >
          Design
          {activeTab === "design" && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-50"
              initial={false}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      </div>

      {/* Grid Layout */}
      <AnimatePresence mode="wait">
        {activeTab === "projects" ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Web2 Projects Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Web2
                </span>
                <div className="h-[1px] flex-1 bg-zinc-200/60 dark:bg-zinc-800/60" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {web2Projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    {/* Media Card Outer Wrapper */}
                    <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                      {project.videoUrl && <ProjectVideo src={project.videoUrl} />}
                    </div>

                    {/* Card Details Text */}
                    <div className="px-1">
                      {/* Title */}
                      <div className="flex items-center gap-3 mb-1">
                        <a
                          className="font-sans group relative inline-block font-[450] text-sm md:text-base text-zinc-900 dark:text-zinc-50 cursor-pointer"
                          href={project.liveUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.name}
                          <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                        </a>
                      </div>

                      {/* Github & View Links */}
                      <p className="mb-1 text-xs md:text-sm">
                        {project.githubUrl && (
                          <a
                            className="font-sans group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 mr-4 cursor-pointer"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                            <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            className="font-sans group relative inline-flex items-center font-[450] text-zinc-900 dark:text-zinc-50 cursor-pointer"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View <ExternalLink className="inline w-3.5 h-3.5 ml-0.5" />
                            <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                          </a>
                        )}
                      </p>

                      {/* Description */}
                      <p className="text-sm font-normal font-sans text-zinc-600 dark:text-zinc-400 leading-snug">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Web3 Heading in Between */}
            <div>
              <div className="flex items-center gap-2 mb-4 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Web3
                </span>
                <div className="h-[1px] flex-1 bg-zinc-200/60 dark:bg-zinc-800/60" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {web3Projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    {/* Media Card Outer Wrapper */}
                    <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                      {project.videoUrl && <ProjectVideo src={project.videoUrl} />}
                    </div>

                    {/* Card Details Text */}
                    <div className="px-1">
                      {/* Title */}
                      <div className="flex items-center gap-3 mb-1">
                        <a
                          className="font-sans group relative inline-block font-[450] text-sm md:text-base text-zinc-900 dark:text-zinc-50 cursor-pointer"
                          href={project.liveUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.name}
                          <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                        </a>
                      </div>

                      {/* Github & View Links */}
                      <p className="mb-1 text-xs md:text-sm">
                        {project.githubUrl && (
                          <a
                            className="font-sans group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 mr-4 cursor-pointer"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                            <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            className="font-sans group relative inline-flex items-center font-[450] text-zinc-900 dark:text-zinc-50 cursor-pointer"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View <ExternalLink className="inline w-3.5 h-3.5 ml-0.5" />
                            <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                          </a>
                        )}
                      </p>

                      {/* Description */}
                      <p className="text-sm font-normal font-sans text-zinc-600 dark:text-zinc-400 leading-snug">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="design"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {DESIGNS_DATA.map((design) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  {design.videoUrl && <ProjectVideo src={design.videoUrl} />}
                </div>
                <div className="px-1">
                  <div className="flex items-center gap-3 mb-1">
                    <a
                      className="font-sans group relative inline-block font-[450] text-sm md:text-base text-zinc-900 dark:text-zinc-50 cursor-pointer"
                      href={design.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {design.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                  </div>
                  <p className="mb-1 text-xs md:text-sm">
                    {design.githubUrl && (
                      <a
                        className="font-sans group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 mr-4 cursor-pointer"
                        href={design.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                      </a>
                    )}
                    {design.liveUrl && (
                      <a
                        className="font-sans group relative inline-flex items-center font-[450] text-zinc-900 dark:text-zinc-50 cursor-pointer"
                        href={design.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View <ExternalLink className="inline w-3.5 h-3.5 ml-0.5" />
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                      </a>
                    )}
                  </p>
                  <p className="text-sm font-normal font-sans text-zinc-600 dark:text-zinc-400 leading-snug">
                    {design.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
