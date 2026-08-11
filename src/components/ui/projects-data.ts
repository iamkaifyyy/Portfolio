export type Project = {
  id: string;
  name: string;
  description: string;
  category: "web2" | "web3";
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
  tag?: string;
  tech?: string[];
};

export const PROJECTS_DATA: Project[] = [
  // --- Web2 Projects ---
  {
    id: "project-nodestudio",
    name: "NodeStudio",
    category: "web2",
    description: "AI Automation Workflow builder with visual DAG drag-and-drop pipeline editor.",
    githubUrl: "https://github.com/iamkaifyyy/NodeStudio.git",
    liveUrl: "https://node-studio-ecru.vercel.app",
    videoUrl: "/recordings/nodestudio.mp4",
    tag: "AI Engine",
    tech: ["React.js", "TypeScript", "React Flow", "FastAPI", "Python"],
  },
  {
    id: "project-rescuenet",
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
    id: "project-diagnoslab",
    name: "DiagnosLAB",
    category: "web2",
    description: "Diagnostic lab management platform with RBAC, real-time telemetry, and resource tracking.",
    githubUrl: "https://github.com/iamkaifyyy/DiagnosLAB.git",
    liveUrl: "https://diagnos-lab.vercel.app",
    videoUrl: "/recordings/trustlab.mp4",
    tag: "🏆 1st Prize Winner",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
  },

  // --- Web3 Projects ---
  {
    id: "project-odyssey",
    name: "Odyssey",
    category: "web3",
    description: "Web3 ETH & SOL Wallet with decentralized asset tracking and multi-chain key management.",
    githubUrl: "https://github.com/iamkaifyyy/Odyssey.git",
    liveUrl: "https://odyssey-1yjh.vercel.app",
    videoUrl: "/recordings/odyssey.mp4",
    tag: "Solana & EVM",
    tech: ["Solana", "Ethereum", "React", "TypeScript", "Ethers.js"],
  },
  {
    id: "project-lumina",
    name: "Lumina",
    category: "web3",
    description: "Proof-of-Progress decentralized platform built on Solana for verified achievements.",
    githubUrl: "https://github.com/iamkaifyyy/lumina.git",
    liveUrl: "https://lumina.example.com",
    videoUrl: "/recordings/lumina.mp4",
    tag: "Solana Protocol",
    tech: ["Solana", "Solidity", "React", "Wagmi", "Tailwind CSS"],
  },
  {
    id: "project-onewavestudio",
    name: "Onewave Studio",
    category: "web3",
    description: "Parent ORGs for Products — Crafting next-gen AI-powered applications & Web3 protocols.",
    githubUrl: "https://github.com/iamkaifyyy/onewavestudio.git",
    liveUrl: "https://onewavestudio.vercel.app/",
    videoUrl: "/recordings/onewavestudio.mp4",
    tag: "Web3 Studio",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
