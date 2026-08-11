export type Project = {
  id: string;
  name: string;
  github: string;
  description: string;
  link: string;
  video?: string;
  image?: string;
  tag?: string;
  type?: 'video' | 'image';
  category?: 'web2' | 'web3';
};

export type Design = {
  id: string;
  name: string;
  description: string;
  link: string;
  video: string;
  tag?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'project1',
    name: 'NodeStudio',
    github: 'https://github.com/iamkaifyyy/NodeStudio.git',
    description: 'AI Automation Workflow builder with visual DAG drag-and-drop pipeline editor.',
    link: 'https://node-studio-ecru.vercel.app',
    video: '/recordings/nodestudio.mp4',
    tag: 'AI Engine',
    type: 'video',
    category: 'web2',
  },
  {
    id: 'project2',
    name: 'RescueNet',
    github: 'https://github.com/iamkaifyyy/RescueNet.git',
    description: 'Disaster Management platform visualizing live telemetry from USGS, GDACS, and NASA FIRMS.',
    link: 'https://rescue-net-pi.vercel.app',
    video: '/recordings/rescuenet.mp4',
    tag: '🏆 1st Prize Winner',
    type: 'video',
    category: 'web2',
  },
  {
    id: 'project3',
    name: 'DiagnosLAB',
    github: 'https://github.com/iamkaifyyy/DiagnosLAB.git',
    description: 'Diagnostic lab management platform with RBAC, real-time telemetry, and resource tracking.',
    link: 'https://diagnos-lab.vercel.app',
    video: '/recordings/trustlab.mp4',
    tag: '🏆 1st Prize Winner',
    type: 'video',
    category: 'web2',
  },
  {
    id: 'project4',
    name: 'Odyssey',
    github: 'https://github.com/iamkaifyyy/Odyssey.git',
    description: 'Web3 ETH & SOL Wallet with decentralized asset tracking and multi-chain key management.',
    link: 'https://odyssey-1yjh.vercel.app',
    video: '/recordings/odyssey.mp4',
    tag: 'Solana & EVM',
    type: 'video',
    category: 'web3',
  },
  {
    id: 'project5',
    name: 'Lumina',
    github: 'https://github.com/iamkaifyyy/lumina.git',
    description: 'Proof-of-Progress decentralized platform built on Solana for verified achievements.',
    link: 'https://lumina.example.com',
    video: '/recordings/lumina.mov',
    tag: 'Solana Protocol',
    type: 'video',
    category: 'web3',
  },
  {
    id: 'project6',
    name: 'Onewave Studio',
    github: 'https://github.com/iamkaifyyy/onewavestudio.git',
    description: 'Parent ORGs for Products — Crafting next-gen AI-powered applications & Web3 protocols.',
    link: 'https://onewavestudio.vercel.app/',
    video: '/recordings/onewavestudio.mp4',
    tag: 'Web3 Studio',
    type: 'video',
    category: 'web3',
  },
];

export const DESIGNS: Design[] = [
  {
    id: 'design1',
    name: 'Zone',
    description: 'Secure your code ownership on the Solana blockchain. Protect intellectual property and build a verifiable portfolio.',
    link: 'https://onewavestudio.vercel.app/',
    video: '/recordings/Zone.mp4',
    tag: 'Motion',
  },
  {
    id: 'design2',
    name: 'Perplexity',
    description: 'Better design and landing page for perplexity made with Figma',
    link: 'https://onewavestudio.vercel.app/',
    video: '/recordings/Perplexity.mp4',
    tag: 'Figma',
  },
];
