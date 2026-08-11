"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Briefcase,
  Code2,
  Sparkles,
  FileText,
  CheckCircle2,
  Mail,
  MapPin,
  Flame,
  Trophy,
  BookOpen,
  Phone,
} from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { Magnetic } from "@/components/ui/magnetic";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogDescription,
} from "@/components/ui/morphing-dialog";

const EXPERIENCES = [
  {
    company: "Amigo India",
    role: "Machine Learning & Generative AI Intern",
    period: "Jun 2026 — Present",
    location: "Remote",
    badge: "AI / GenAI",
    summary:
      "Building Retrieval-Augmented Generation (RAG) pipelines and LLM workflows under mentorship of senior ML engineers.",
    highlights: [
      "Learned and applied LangChain and LangGraph fundamentals by building a Retrieval-Augmented Generation (RAG) pipeline with Pinecone vector search for an internal AI workflow prototype.",
      "Applied prompt engineering techniques across iterative LLM workflow experiments in Google Colab to improve output reliability and cut experimentation time.",
    ],
    tech: ["LangChain", "LangGraph", "Pinecone", "RAG Pipelines", "Python", "Google Colab"],
  },
  {
    company: "RevLabz Solutions",
    role: "Software Development Intern",
    period: "Nov 2025 — Jan 2026",
    location: "Remote",
    badge: "Full-Stack & Extension",
    summary:
      "Engineered production feature modules and browser extensions for cross-functional platform synchronization.",
    highlights: [
      "Developed and shipped 5+ production feature modules and a Chrome browser extension for the Ingenium platform using React.js and TypeScript.",
      "Integrated RESTful APIs for real-time data synchronization, reducing manual data entry by 40% and improving data consistency across a team of 5 engineers.",
    ],
    tech: ["React.js", "TypeScript", "Chrome Extension API", "REST APIs", "Git"],
  },
];

const PROJECTS = [
  {
    title: "RescueNet",
    type: "Emergency Response Platform",
    period: "2025",
    award: "🏆 1st Prize Winner @ Amigo India Hackathon",
    tech: ["React.js", "TypeScript", "Express.js", "PostgreSQL", "MapLibre GL"],
    description:
      "Real-time emergency response platform visualizing live disaster telemetry from USGS, GDACS, and NASA FIRMS on an interactive HUD-style map interface.",
    details:
      "Developed a secure Express.js backend with JWT authentication and PostgreSQL; won 1st Prize at the Amigo India Hackathon among teams from multiple colleges. Recognized in local press coverage following the win.",
  },
  {
    title: "TrustLab",
    type: "Lab Management Platform",
    period: "Apr 2026",
    award: "🏆 1st Prize Winner @ KMCLU Hackathon",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
    description:
      "Architected a full-stack lab management platform with JWT authentication, RBAC, and real-time CRUD operations.",
    details:
      "Designed 10+ RESTful API endpoints using Express.js and MongoDB managing 50+ resources across multiple user roles; won 1st Prize at the KMCLU Hackathon against 20+ teams in a 24-hour sprint.",
  },
  {
    title: "Node Studio",
    type: "Visual Workflow Pipeline Editor",
    period: "Jul 2026",
    award: "⚡ Visual DAG Engine",
    tech: ["React.js", "TypeScript", "React Flow", "FastAPI", "Python"],
    description:
      "n8n-style drag-and-drop visual pipeline editor with a fully typed React/TypeScript frontend and custom workflow node types.",
    details:
      "Implemented a FastAPI backend to validate Directed Acyclic Graphs (DAGs) using Kahn's Algorithm, with real-time node/edge validation and JSON pipeline import/export.",
  },
];

const TECHNICAL_SKILLS = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "Solidity", "Rust"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "RainbowKit"] },
  { category: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSocket", "JWT", "RBAC"] },
  { category: "Web3 & DB", items: ["Solana", "Smart Contracts", "On-chain Attestation", "IPFS", "PostgreSQL", "MongoDB", "Supabase"] },
  { category: "DevOps & Tools", items: ["Docker", "Git", "GitHub Actions", "Linux", "Vercel", "Render", "Postman"] },
];

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<"interactive" | "pdf">("interactive");

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-6 md:py-10 flex flex-col gap-8">
        
        {/* Top Control Header Bar */}
        <div className="w-full flex items-center justify-between gap-4 flex-wrap">
          <Magnetic intensity={0.3}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
          </Magnetic>

          {/* Mode Switcher Pill */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
            <button
              onClick={() => setViewMode("interactive")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "interactive"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Motion
            </button>
            <button
              onClick={() => setViewMode("pdf")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "pdf"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              PDF Document
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <Magnetic intensity={0.25}>
              <a
                href="/kaify.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Raw PDF</span>
              </a>
            </Magnetic>

            <Magnetic intensity={0.35}>
              <a
                href="/kaify.pdf"
                download="Kaify_Resume.pdf"
                className="px-4 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-xs md:text-sm font-semibold inline-flex items-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Dynamic Mode Display */}
        <AnimatePresence mode="wait">
          {viewMode === "interactive" ? (
            <motion.div
              key="interactive-mode"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-8 w-full"
            >
              {/* Header Spotlight Card */}
              <div className="relative p-6 md:p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-sm overflow-hidden flex flex-col gap-4 group">
                <Spotlight size={280} className="from-blue-500/10 via-purple-500/10 to-transparent" />
                
                <div className="flex items-start justify-between gap-4 flex-wrap z-10">
                  <div>
                    <TextEffect
                      as="h1"
                      per="char"
                      preset="fade-in-blur"
                      className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
                    >
                      Mohd Kaif
                    </TextEffect>
                    <p className="text-base md:text-lg font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                      Full-Stack & AI/ML Engineer
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/90 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-800/80 shadow-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for Work & Internships
                  </span>
                </div>

                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl z-10">
                  Final-year Computer Science (AI/ML) student who can Design, Develop & Deploy across the stack — from AI/LLM workflows to production-ready full-stack applications. Two-time hackathon winner with hands-on experience building RAG pipelines, real-time platforms, and developer tools.
                </p>

                {/* Metadata Chips */}
                <div className="flex items-center gap-4 flex-wrap text-xs md:text-sm text-zinc-500 dark:text-zinc-400 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 z-10">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Lucknow, India
                  </span>
                  <a
                    href="tel:+919452182979"
                    className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-zinc-400" /> +91-9452182979
                  </a>
                  <a
                    href="mailto:mkaifm728@gmail.com"
                    className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-zinc-400" /> mkaifm728@gmail.com
                  </a>
                  <a
                    href="https://github.com/iamkaifyyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-zinc-400" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    github.com/iamkaifyyy
                  </a>
                </div>
              </div>

              {/* Achievements Highlight Ribbon */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 dark:bg-amber-500/5 dark:border-amber-500/20 flex items-center gap-3">
                <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
                <p className="text-xs md:text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                  <span className="font-bold text-amber-600 dark:text-amber-400">Two-time Hackathon Winner</span> (1st Place out of 20+ competing teams each) — Amigo India Hackathon (RescueNet) & KMCLU Hackathon (TrustLab).
                </p>
              </div>

              {/* Interactive Experience Section with MorphingDialog */}
              <section className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  <Briefcase className="w-4 h-4 text-zinc-500" />
                  <h2 className="text-base md:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Work Experience (Click to Expand)
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EXPERIENCES.map((exp, idx) => (
                    <MorphingDialog key={idx}>
                      <MorphingDialogTrigger className="p-5 rounded-2xl bg-zinc-50/40 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col justify-between gap-3 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all group text-left">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {exp.role}
                              </h3>
                              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                                {exp.company} • {exp.location}
                              </p>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                              {exp.period}
                            </span>
                          </div>

                          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {exp.summary}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-zinc-200/40 dark:border-zinc-800/40">
                          <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1">
                            Expand Details ↗
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            {exp.badge}
                          </span>
                        </div>
                      </MorphingDialogTrigger>

                      <MorphingDialogContainer>
                        <MorphingDialogContent className="p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-xl w-full flex flex-col gap-4 shadow-2xl relative">
                          <MorphingDialogClose className="top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100" />
                          <div>
                            <MorphingDialogTitle className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                              {exp.role}
                            </MorphingDialogTitle>
                            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                              {exp.company} • {exp.period} ({exp.location})
                            </p>
                          </div>

                          <MorphingDialogDescription className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex flex-col gap-3">
                            <p>{exp.summary}</p>
                            <div className="flex flex-col gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                              <h4 className="text-xs font-bold uppercase text-zinc-500">Key Deliverables:</h4>
                              {exp.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-2 text-xs">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </MorphingDialogDescription>

                          <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-zinc-200 dark:border-zinc-800">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </MorphingDialogContent>
                      </MorphingDialogContainer>
                    </MorphingDialog>
                  ))}
                </div>
              </section>

              {/* Projects Grid with MorphingDialog */}
              <section className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  <Flame className="w-4 h-4 text-zinc-500" />
                  <h2 className="text-base md:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Featured Projects (Interactive Modal)
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {PROJECTS.map((proj, idx) => (
                    <MorphingDialog key={idx}>
                      <MorphingDialogTrigger className="p-5 rounded-2xl bg-zinc-50/40 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col justify-between gap-3 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all text-left">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                            {proj.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-300/50 dark:border-amber-800/50 self-start">
                            {proj.award}
                          </span>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                            {proj.description}
                          </p>
                        </div>

                        <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 pt-2 border-t border-zinc-200/40 dark:border-zinc-800/40">
                          View Project Breakdown ↗
                        </span>
                      </MorphingDialogTrigger>

                      <MorphingDialogContainer>
                        <MorphingDialogContent className="p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-lg w-full flex flex-col gap-4 shadow-2xl relative">
                          <MorphingDialogClose className="top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100" />
                          <div>
                            <MorphingDialogTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                              {proj.title}
                            </MorphingDialogTitle>
                            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mt-1">
                              {proj.award} ({proj.period})
                            </p>
                          </div>

                          <MorphingDialogDescription className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex flex-col gap-3">
                            <p>{proj.description}</p>
                            <p className="text-xs text-zinc-500 leading-relaxed border-l-2 border-zinc-300 dark:border-zinc-700 pl-3">
                              {proj.details}
                            </p>
                          </MorphingDialogDescription>

                          <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-zinc-200 dark:border-zinc-800">
                            {proj.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </MorphingDialogContent>
                      </MorphingDialogContainer>
                    </MorphingDialog>
                  ))}
                </div>
              </section>

              {/* Technical Skills Section with AnimatedBackground & PointerHighlight */}
              <section className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-zinc-500" />
                    <h2 className="text-base md:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      Technical Skills Matrix
                    </h2>
                  </div>
                  <PointerHighlight>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 px-2 py-0.5">
                      Hover Skills
                    </span>
                  </PointerHighlight>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {TECHNICAL_SKILLS.map((group) => (
                    <div
                      key={group.category}
                      className="p-5 rounded-2xl bg-zinc-50/40 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col gap-3"
                    >
                      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        {group.category}
                      </h3>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <AnimatedBackground
                          enableHover
                          className="h-full w-full rounded-lg bg-zinc-200/60 dark:bg-zinc-800/80"
                          transition={{ type: "spring", bounce: 0, duration: 0.15 }}
                        >
                          {group.items.map((tech, i) => (
                            <div
                              key={tech}
                              data-id={`${group.category}-${i}`}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold text-zinc-800 dark:text-zinc-200 cursor-default"
                            >
                              {tech}
                            </div>
                          ))}
                        </AnimatedBackground>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education Card */}
              <section className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  <BookOpen className="w-4 h-4 text-zinc-500" />
                  <h2 className="text-base md:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Education
                  </h2>
                </div>

                <div className="p-5 md:p-6 rounded-2xl bg-zinc-50/40 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-zinc-900 dark:text-zinc-100">
                        School of Management Sciences, Lucknow (AKTU)
                      </h3>
                      <p className="text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        B.Tech. – Computer Science & Engineering (AI/ML Specialisation) • CGPA: <span className="font-bold text-zinc-900 dark:text-zinc-100">7.84 / 10</span>
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      Aug 2023 – May 2027
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200/40 dark:border-zinc-800/40">
                    Smart India Hackathon (SIH) Team Lead: Directed problem-statement research and task allocation for a national-level government-sponsored hackathon.
                  </p>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="pdf-mode"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full flex flex-col items-center gap-4 pb-12"
            >
              <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg bg-white dark:bg-zinc-900 relative group">
                <Image
                  src="/kaify-page-1.png"
                  alt="Mohd Kaif Resume"
                  width={1200}
                  height={1697}
                  priority
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
