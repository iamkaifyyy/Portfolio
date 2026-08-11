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
  type?: "video" | "image";
};

export const PROJECTS_DATA: Project[] = [
  // --- Web2 Projects ---
  {
    id: "project-nodestudio",
    name: "NodeStudio",
    category: "web2",
    description: "Visual DAG AI automation pipeline editor",
    githubUrl: "https://github.com/iamkaifyyy/NodeStudio.git",
    liveUrl: "https://node-studio-ecru.vercel.app",
    videoUrl: "/recordings/nodestudio.mp4",
    tag: "AI Engine",
    tech: ["React.js", "TypeScript", "React Flow", "FastAPI"],
  },
  {
    id: "project-rescuenet",
    name: "RescueNet",
    category: "web2",
    description: "Real-time disaster telemetry emergency response platform",
    githubUrl: "https://github.com/iamkaifyyy/RescueNet.git",
    liveUrl: "https://rescue-net-pi.vercel.app",
    videoUrl: "/recordings/rescuenet.mp4",
    tag: "$5000 Grant Recipient",
    tech: ["React.js", "TypeScript", "Express.js", "PostgreSQL"],
  },
  {
    id: "project-diagnoslab",
    name: "DiagnosLAB",
    category: "web2",
    description: "Diagnostic lab management platform with RBAC & telemetry",
    githubUrl: "https://github.com/iamkaifyyy/DiagnosLAB.git",
    liveUrl: "https://diagnos-lab.vercel.app",
    videoUrl: "/recordings/trustlab.mp4",
    tag: "$3000 Grant Recipient",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },

  // --- Web3 Projects ---
  {
    id: "project-odyssey",
    name: "Odyssey",
    category: "web3",
    description: "Web3 ETH & SOL multi-chain wallet with asset tracking",
    githubUrl: "https://github.com/iamkaifyyy/Odyssey.git",
    liveUrl: "https://odyssey-1yjh.vercel.app",
    videoUrl: "/recordings/odyssey.mp4",
    tag: "$4000 Grant Recipient",
    tech: ["Solana", "Ethereum", "React", "TypeScript"],
  },
  {
    id: "project-lumina",
    name: "Lumina",
    category: "web3",
    description: "Proof-of-Progress decentralized platform built on Solana",
    githubUrl: "https://github.com/iamkaifyyy/lumina.git",
    liveUrl: "https://lumina.example.com",
    videoUrl: "/recordings/lumina.mov",
    tag: "Building",
    tech: ["Solana", "Solidity", "React", "Wagmi"],
  },
  {
    id: "project-onewavestudio",
    name: "Onewave Studio",
    category: "web3",
    description: "Next-gen AI & Web3 studio suite and product ecosystem",
    githubUrl: "https://github.com/iamkaifyyy/onewavestudio.git",
    liveUrl: "https://onewavestudio.vercel.app/",
    videoUrl: "/recordings/onewavestudio.mp4",
    tag: "Building",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const DESIGNS_DATA: Project[] = [
  {
    id: "design-zone",
    name: "Zone",
    category: "web3",
    description: "Decentralized code ownership on Solana blockchain",
    githubUrl: "https://github.com/iamkaifyyy",
    liveUrl: "https://onewavestudio.vercel.app/",
    videoUrl: "/recordings/Zone.mp4",
    tag: "Motion",
  },
  {
    id: "design-perplexity",
    name: "Perplexity",
    category: "web2",
    description: "Minimalist landing page design made with Figma",
    githubUrl: "https://github.com/iamkaifyyy",
    liveUrl: "https://onewavestudio.vercel.app/",
    videoUrl: "/recordings/Perplexity.mp4",
    tag: "Figma",
  },
];
