export type Project = {
  id: string;
  name: string;
  description: string;
  category: "web2" | "web3" | "ai";
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
  tag?: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    name: "NodeStudio",
    category: "ai",
    description: "AI Automation Workflow builder with visual DAG drag-and-drop pipeline editor.",
    githubUrl: "https://github.com/iamkaifyyy/NodeStudio.git",
    liveUrl: "https://node-studio-ecru.vercel.app",
    videoUrl: "/recordings/nodestudio.mp4",
    tag: "AI Automation Engine",
    tech: ["React.js", "TypeScript", "React Flow", "FastAPI", "Python"],
  },
  {
    id: "project-2",
    name: "Odyssey",
    category: "web3",
    description: "Web3 ETH & SOL Wallet with decentralized asset tracking and multi-chain key management.",
    githubUrl: "https://github.com/iamkaifyyy/Odyssey.git",
    liveUrl: "https://odyssey-1yjh.vercel.app",
    videoUrl: "/recordings/odyssey.mp4",
    tag: "Solana & EVM",
    tech: ["Solana", "Ethereum", "React", "TypeScript", "Ethers.js", "Tailwind CSS"],
  },
  {
    id: "project-3",
    name: "Onewave Studio",
    category: "ai",
    description: "Parent ORGs for Products — Crafting next-gen AI-powered applications & Web3 protocols.",
    githubUrl: "https://github.com/iamkaifyyy/onewavestudio.git",
    liveUrl: "https://onewavestudio.vercel.app/",
    videoUrl: "/recordings/onewavestudio.mp4",
    tag: "Studio Suite",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "project-4",
    name: "RescueNet",
    category: "web2",
    description: "Disaster Management platform visualizing live telemetry from USGS, GDACS, and NASA FIRMS.",
    githubUrl: "https://github.com/iamkaifyyy/RescueNet.git",
    liveUrl: "https://rescue-net-pi.vercel.app",
    videoUrl: "/recordings/rescuenet.mp4",
    tag: "🏆 1st Prize Winner",
    tech: ["React.js", "TypeScript", "Express.js", "PostgreSQL", "MapLibre GL"],
  },
  {
    id: "project-5",
    name: "DiagnosLAB",
    category: "web2",
    description: "Diagnostic lab management platform with RBAC, real-time telemetry, and resource tracking.",
    githubUrl: "https://github.com/iamkaifyyy/DiagnosLAB.git",
    liveUrl: "https://diagnos-lab.vercel.app",
    videoUrl: "/recordings/trustlab.mp4",
    tag: "🏆 1st Prize Winner",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
  },
];
