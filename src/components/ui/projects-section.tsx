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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
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
            onLoadedData={() => setIsLoading(false)}
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.playbackRate = 0.5;
              }
            }}
            className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
          />
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
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

function ProjectImage({ src, alt }: { src: string; alt: string }) {
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="aspect-video w-full cursor-zoom-in rounded-xl object-contain bg-black"
          />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh] object-contain bg-black"
          />
        </MorphingDialogContent>
        <MorphingDialogClose className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white dark:bg-zinc-800 p-1 shadow-md">
          <X className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "design">("projects");

  const items = activeTab === "projects" ? PROJECTS_DATA : DESIGNS_DATA;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-xl mx-auto my-12 -mt-12 px-4 md:px-0"
    >
      {/* Tab Switcher Header */}
      <div className="flex items-center gap-8 mb-8 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-2">
        <button
          onClick={() => setActiveTab("projects")}
          className={`text-lg font-medium relative cursor-pointer transition-colors ${
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
          className={`text-lg font-medium relative cursor-pointer transition-colors ${
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

      {/* Grid Layout (sm:grid-cols-2 gap-6) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {items.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {/* Media Card Outer Wrapper */}
              <div
                className={`relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 ${
                  project.tag && project.tag.includes("Grant")
                    ? "video-container-green"
                    : project.tag && project.tag.includes("Building")
                    ? "video-container-blue"
                    : ""
                }`}
              >
                {project.type === "image" && project.imageUrl ? (
                  <ProjectImage src={project.imageUrl} alt={project.name} />
                ) : project.videoUrl ? (
                  <ProjectVideo src={project.videoUrl} />
                ) : null}
              </div>

              {/* Card Details Text */}
              <div className="px-1">
                {/* Title & Tag */}
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 cursor-pointer"
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                  </a>

                  {project.tag && (
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset cursor-pointer ${
                        project.tag.includes("Grant")
                          ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 ring-green-600/20 dark:ring-green-500/30"
                          : project.tag === "Building"
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-blue-600/20 dark:ring-blue-500/30"
                          : "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 ring-purple-600/20 dark:ring-purple-500/30"
                      }`}
                    >
                      {project.tag}
                    </span>
                  )}
                </div>

                {/* Github & View Links */}
                <p className="mb-1 text-sm">
                  {project.githubUrl && (
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 mr-4 cursor-pointer"
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
                      className="font-base group relative inline-flex items-center font-[450] text-zinc-900 dark:text-zinc-50 cursor-pointer"
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
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
