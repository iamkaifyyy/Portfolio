'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PROJECTS, DESIGNS } from './projects-data'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

/* -------------------------------------------------------------------------- */
/*                               PROJECT MEDIA COMPONENTS                      */
/* -------------------------------------------------------------------------- */

function ProjectVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  const applySlowPlayback = () => {
    if (videoRef.current) videoRef.current.playbackRate = 0.3
    if (modalVideoRef.current) modalVideoRef.current.playbackRate = 0.3
  }

  useEffect(() => {
    applySlowPlayback()
  }, [src])

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.35,
      }}
    >
      <MorphingDialogTrigger>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="relative aspect-video w-full overflow-hidden rounded-xl"
        >
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={applySlowPlayback}
            onLoadedMetadata={applySlowPlayback}
            className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
          />
        </motion.div>
      </MorphingDialogTrigger>

      {/* Fullscreen Expanded Video Modal */}
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl p-1 bg-black/90 shadow-2xl">
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
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white dark:bg-zinc-800 p-2 shadow-lg hover:scale-110 active:scale-95 transition-transform border border-zinc-200 dark:border-zinc-700"
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.2, duration: 0.15 },
            },
            exit: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } },
          }}
        >
          <X className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function ProjectImage({ src }: { src: string }) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.35,
      }}
    >
      <MorphingDialogTrigger>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="relative aspect-video w-full overflow-hidden rounded-xl bg-black"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="Project Showcase"
            className="aspect-video w-full rounded-xl object-contain bg-black cursor-zoom-in"
          />
        </motion.div>
      </MorphingDialogTrigger>

      {/* Fullscreen Expanded Image Modal */}
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl p-1 bg-black/90 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="Project Showcase"
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh] object-contain bg-black"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white dark:bg-zinc-800 p-2 shadow-lg hover:scale-110 active:scale-95 transition-transform border border-zinc-200 dark:border-zinc-700"
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.2, duration: 0.15 },
            },
            exit: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } },
          }}
        >
          <X className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

/* -------------------------------------------------------------------------- */
/*                           MAIN PROJECTS & DESIGN SECTION                   */
/* -------------------------------------------------------------------------- */

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'projects' | 'design'>('projects')

  return (
    <section className="w-full max-w-xl mx-auto px-4 md:px-0">
      {/* Category Tab Buttons */}
      <div className="flex justify-center gap-8 mb-6">
        <button
          onClick={() => setActiveTab('projects')}
          className={cn(
            'text-base font-medium relative cursor-pointer transition-colors',
            activeTab === 'projects'
              ? 'text-zinc-900 dark:text-zinc-50'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          )}
        >
          Projects
          {activeTab === 'projects' && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-50"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
        </button>

        <button
          onClick={() => setActiveTab('design')}
          className={cn(
            'text-base font-medium relative cursor-pointer transition-colors',
            activeTab === 'design'
              ? 'text-zinc-900 dark:text-zinc-50'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          )}
        >
          Design
          {activeTab === 'design' && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-50"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      </div>

      {/* Tab Panels */}
      <AnimatePresence mode="wait" initial={false}>
        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id || project.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="space-y-2 group/card"
              >
                {/* Media Outer Box */}
                <div
                  className={cn(
                    'relative rounded-2xl p-1 ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50 transition-all duration-300 group-hover/card:ring-zinc-300 dark:group-hover/card:ring-zinc-700',
                    project.tag?.includes('Grant') && 'ring-emerald-500/40 dark:ring-emerald-500/40',
                    project.tag === 'Building' && 'ring-blue-500/40 dark:ring-blue-500/40'
                  )}
                >
                  {project.type === 'image' && project.image ? (
                    <ProjectImage src={project.image} />
                  ) : (
                    <ProjectVideo src={project.video || ''} />
                  )}
                </div>

                {/* Info & Links */}
                <div className="px-1 pt-1">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>

                    {project.tag && (
                      <span
                        className={cn(
                          'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset cursor-pointer transition-transform hover:scale-105',
                          project.tag.includes('Grant') &&
                            'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 ring-green-600/20 dark:ring-green-500/30',
                          project.tag === 'Building' &&
                            'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-blue-600/20 dark:ring-blue-500/30',
                          !project.tag.includes('Grant') && project.tag !== 'Building' &&
                            'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 ring-zinc-500/20'
                        )}
                      >
                        {project.tag}
                      </span>
                    )}
                  </div>

                  <p>
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 mr-4 text-sm"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50 text-sm"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View <ExternalLink className="inline-block ml-0.5 h-3.5 w-3.5" />
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                  </p>

                  <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* DESIGN TAB */}
        {activeTab === 'design' && (
          <motion.div
            key="designs"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {DESIGNS.map((design) => (
              <motion.div
                key={design.id || design.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="space-y-2 group/card"
              >
                <div className="relative rounded-2xl p-1 ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50 transition-all duration-300 group-hover/card:ring-zinc-300 dark:group-hover/card:ring-zinc-700">
                  <ProjectVideo src={design.video} />
                </div>
                <div className="px-1 pt-1">
                  <div className="flex items-center gap-3 mb-1">
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={design.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {design.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                    {design.tag && (
                      <span className="inline-flex items-center rounded-full bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-600/20 dark:ring-purple-500/30 cursor-pointer transition-transform hover:scale-105">
                        {design.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 mt-2">
                    {design.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
