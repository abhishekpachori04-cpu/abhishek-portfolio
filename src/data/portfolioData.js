export const personalInfo = {
  name: "Abhishek Pachori",
  shortName: "Abhishek",
  avatarText: "A", // Strictly "A" as per Stitch screenshot & user preference
  role: "Frontend / MERN Stack Developer",
  collegeTag: "RJIT '26",
  batch: "3RD YEAR CSE",
  status: "Open to Internship Opportunities",
  tagline: "Computer Science Engineering student passionate about crafting dynamic, responsive web applications using the MERN stack and modern UI engineering. Focused on clean architecture, seamless API integrations, and intuitive user experiences.",
  aboutBio: "I am a Computer Science Engineering student dedicated to architecting end-to-end modern web applications with a strong foundation in the MERN stack. I specialize in building responsive, component-driven user interfaces using React and Tailwind CSS, coupled with robust RESTful backend systems, scalable databases, and practical AI integrations.",
  location: "Madhya Pradesh, IN",
  primaryFocus: "Frontend & Web Applications",
  timeline: "Summer '25 Intern",
  github: "https://github.com/abhishekpachori04-cpu",
  linkedin: "https://linkedin.com/in/abhishek-pachori",
  email: "abhishekpachori04@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const heroCodeSnippet = {
  fileName: "AbhishekProfile.tsx",
  terminalTag: "zsh",
  code: `interface DeveloperProfile {
  name: string;
  education: string;
  stack: string[];
  internshipTarget: string;
}

const abhishek: DeveloperProfile = {
  name: "Abhishek Pachori",
  education: "RJIT B.Tech CSE (3rd Year)",
  stack: ["React", "Tailwind", "Node.js", "GenAI APIs"],
  internshipTarget: "Frontend / Full Stack Engineering"
};

export default function getReadiness() {
  return "Available & ready to contribute from Day 1";
}`,
  status: "Compiled: 0 errors, ready to deploy",
  nodeVersion: "v20.12.0"
};

export const aboutHighlights = [
  { text: "Building Scalable Web Apps", icon: "Layers" },
  { text: "Clean Architecture & Reusable UI", icon: "Code2" },
  { text: "API Integration & Optimization", icon: "Cpu" },
  { text: "Generative AI Integration", icon: "Sparkles" }
];

export const aboutCards = [
  {
    title: "MERN Stack",
    subtitle: "Full-Stack Development (MongoDB, Express, React, Node)",
    icon: "Layers"
  },
  {
    title: "React Focus",
    subtitle: "Component Architecture, State Management & Tailwind CSS",
    icon: "Layout"
  },
  {
    title: "Backend & APIs",
    subtitle: "REST APIs, Authentication & Database Management",
    icon: "Database"
  },
  {
    title: "AI Integrations",
    subtitle: "LLM APIs, Prompt Engineering & Intelligent UI",
    icon: "Bot"
  }
];

export const skillsData = [
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", highlighted: true },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS" },
      { name: "HTML5/CSS3" },
      { name: "State Management (Redux/Zustand)" },
      { name: "Responsive Design" },
      { name: "Component Architecture" }
    ]
  },
  {
    category: "Backend & Database",
    icon: "Database",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "RESTful APIs" },
      { name: "JWT Authentication" },
      { name: "CRUD Operations" }
    ]
  },
  {
    category: "Programming & Foundations",
    icon: "Terminal",
    skills: [
      { name: "C++ / Python" },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "OOP Principles" },
      { name: "Problem Solving" }
    ]
  },
  {
    category: "AI & Modern Integrations",
    icon: "Sparkles",
    skills: [
      { name: "Generative AI APIs" },
      { name: "Prompt Engineering" },
      { name: "LLM Integration" },
      { name: "Streaming Responses" },
      { name: "Agentic Workflows" }
    ]
  },
  {
    category: "Tools, Design & Deployment",
    icon: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Figma" },
      { name: "Canva" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "npm / yarn" }
    ]
  }
];

export const projectsData = [
  {
    id: "ai-buddy",
    featured: true,
    badge: "FEATURED FLAGSHIP",
    statusBadge: "Live Application",
    title: "AI Buddy",
    description: "A full-stack conversational AI platform built with React and a secure Node.js/Express backend. Interfaces with generative AI models for real-time streaming responses, session persistence with MongoDB, dynamic markdown rendering, and clean theme customization.",
    featurePills: [
      "Full-Stack Architecture",
      "Node.js REST API",
      "Streaming Responses",
      "Session Persistence",
      "Markdown Rendering",
      "Dark / Light Mode"
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Generative AI API"],
    liveDemo: "https://ai-buddy-tau-six.vercel.app/",
    github: "https://github.com/abhishekpachori04-cpu",
    type: "flagship-chat",
    mockChat: {
      assistantName: "AI Buddy Assistant",
      status: "Active",
      userMessage: "Can you explain how React hooks handle component state under the hood?",
      aiMessage: "React hooks like useState rely on an internal array of fiber nodes in the current component rendering fiber. Each hook call maps sequentially to a cell in this list!",
      latency: "Completed in 214ms"
    }
  },
  {
    id: "react-notes-app",
    featured: false,
    badge: "MERN Stack",
    title: "CloudNotes – Full-Stack Note Engine",
    description: "A performant personal knowledge base and task organizer featuring RESTful CRUD operations, category filtering, instant keyword search, and secure database persistence.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://github.com/abhishekpachori04-cpu/react-notes-app",
    github: "https://github.com/abhishekpachori04-cpu/react-notes-app",
    type: "notes-search",
    mockSearch: {
      searchTerm: "algorithms",
      count: "3 notes found",
      title: "Graph Traversal: DFS vs BFS",
      snippet: "Use BFS for shortest unweighted path; use DFS for topological sort..."
    }
  },
  {
    id: "autohire-ai",
    featured: false,
    badge: "Full-Stack AI Tool",
    title: "AutoHire.AI",
    description: "An intelligent candidate matching platform that analyzes resumes against technical job descriptions using custom LLM evaluation prompts, ATS scoring metrics, and targeted interview prep generators.",
    stack: ["React", "Node.js", "Tailwind CSS", "LLM APIs", "FastAPI / Python"],
    liveDemo: "https://app-aup7uznaq7sx.appmedo.com/",
    github: "https://github.com/abhishekpachori04-cpu",
    type: "candidate-pipeline",
    mockCandidate: {
      label: "CANDIDATE FIT PIPELINE",
      matchScore: "Match: 94%",
      role: "Frontend Engineer (React/Tailwind)"
    }
  }
];

export const journeyData = [
  {
    id: 1,
    title: "Hackathons & Technical Builds",
    period: "2025 – Present",
    subheading: "Collaborative Innovation & Rapid Prototyping",
    description: "Architected and deployed full-stack MVPs during fast-paced hackathons and sprint challenges. Focused on rapid API integration, reactive frontends, and presenting end-to-end working systems under strict timelines."
  },
  {
    id: 2,
    title: "Developer Community & Campus Initiatives",
    period: "2024 – Present",
    subheading: "Technical Programs & Knowledge Sharing",
    description: "Actively engaged in developer programs and community workshops (including tech summits and cloud initiatives). Facilitated student engagement, organized tech resources, and promoted modern developer tool adoption."
  },
  {
    id: 3,
    title: "Full-Stack Foundations & Engineering Discipline",
    period: "2025 – 2026",
    subheading: "Core CS, Data Structures & Modular Architecture",
    description: "Mastered core computer science fundamentals, data structures, and the MERN stack. Practicing clean Git branching strategies, semantic commit conventions, and building maintainable modular architectures."
  }
];

export const experienceData = journeyData;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const educationData = {
  degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
  institution: "Rustamji Institute of Technology (RJIT)",
  year: "Undergraduate (2024 – 2028)",
  expectedGraduation: "Expected Graduation: 2028",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Web Technologies",
    "Software Engineering"
  ]
};

export { certificatesData } from './certificates';

export const achievementsData = [
  {
    id: "ach-1",
    title: "AI Hackathon Prototyping",
    organization: "AI Developer Hackathons",
    date: "2026",
    badge: "Hackathon Sprint",
    footer: "Verified Participation",
    description: "Collaborated in intensive time-boxed hackathons to engineer and ship functional MVPs. Focused on full-stack architecture, rapid LLM API integration, and presenting end-to-end working systems under strict sprint deadlines."
  },
  {
    id: "ach-2",
    title: "Cloud & GenAI Learning Milestones",
    organization: "Google Cloud & AWS Academy Programs",
    date: "2026",
    badge: "Cloud Recognition",
    footer: "Program Completed",
    description: "Actively completed hands-on cloud tracks, enterprise Gemini labs, and generative AI foundations. Demonstrated practical understanding of cloud runtimes, vector embeddings, and agent deployment."
  },
  {
    id: "ach-3",
    title: "Campus Technical Outreach & Community",
    organization: "GeeksforGeeks Campus Mantri",
    date: "2026",
    badge: "Campus Leadership",
    footer: "Active Role",
    description: "Selected to represent and drive technical initiatives on campus. Facilitated developer awareness, organized coding resources, and encouraged peer participation in engineering events and workshops."
  }
];

export const currentlyLearningData = [
  {
    id: "learn-1",
    topic: "Scalable MERN Architecture",
    level: "In Progress",
    description: "Deepening knowledge in robust backend patterns with Node.js and Express, database schema optimization in MongoDB, secure JWT/cookie-based auth, and scalable state management in React.",
    tags: ["#MERNStack", "#RESTAPIs", "#StateManagement", "#CleanArchitecture"]
  },
  {
    id: "learn-2",
    topic: "Applied Generative AI & Tool Integration",
    level: "Exploring",
    description: "Building practical applications around LLM APIs, streaming chat completions, context-aware prompt engineering, and connecting full-stack web frontends with intelligent AI workflows.",
    tags: ["#GenAIAPIs", "#PromptEngineering", "#StreamingResponses", "#AIWorkflows"]
  },
  {
    id: "learn-3",
    topic: "Modern UI Engineering & Performance",
    level: "Active Daily",
    description: "Mastering responsive, accessible design systems with Tailwind CSS, micro-interactions, API response caching, and frontend load-time optimization for seamless user experiences.",
    tags: ["#TailwindCSS", "#UIEngineering", "#Performance", "#WebVitals"]
  }
];
