"use client";

import { Terminal, Layers, Cpu, Database, Wrench } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/animated-background";

export interface StackItem {
  title: string;
  description: string;
  uid: string;
  icon: typeof Terminal;
}

export const STACKS_DATA: StackItem[] = [
  {
    title: "Languages",
    description: "JavaScript, TypeScript, Python, C++, SQL, Solidity, Rust",
    uid: "stack-1",
    icon: Terminal,
  },
  {
    title: "Frontend",
    description: "React.js, Next.js, HTML5, CSS3, Tailwind CSS, RainbowKit",
    uid: "stack-2",
    icon: Layers,
  },
  {
    title: "Backend",
    description: "Node.js, Express.js, FastAPI, REST APIs, WebSocket, JWT, RBAC",
    uid: "stack-3",
    icon: Cpu,
  },
  {
    title: "Web3 & Databases",
    description: "Solana, Smart Contracts, On-chain Attestation, IPFS, PostgreSQL, MongoDB, Supabase",
    uid: "stack-4",
    icon: Database,
  },
  {
    title: "DevOps & Tools",
    description: "Docker, Git, GitHub Actions, Linux, Vercel, Render, Postman",
    uid: "stack-5",
    icon: Wrench,
  },
];

export function TechStackSection() {
  return (
    <section className="w-full flex flex-col gap-3 mt-8 mb-16">
      <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
        Stacks
      </h3>
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.2,
          }}
        >
          {STACKS_DATA.map((post) => {
            const Icon = post.icon;
            return (
              <div
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3 w-full cursor-pointer"
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-normal text-zinc-900 dark:text-zinc-100">
                      {post.title}
                    </h4>
                    {Icon && <Icon className="text-zinc-500 w-4 h-4" />}
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    {post.description}
                  </p>
                </div>
              </div>
            );
          })}
        </AnimatedBackground>
      </div>
    </section>
  );
}
