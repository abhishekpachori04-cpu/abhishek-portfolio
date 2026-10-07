export const personalInfo = {
  name: "Abhishek Pachori",
  shortName: "Abhishek",
  avatarText: "A",
  role: "Frontend / MERN Stack Developer",
  collegeTag: "RJIT '26",
  batch: "3RD YEAR CSE",
  status: "Open to Internship Opportunities",
  tagline: "Computer Science undergraduate building full-stack web applications with React, Node.js, and MongoDB. Experienced in designing modular component systems, implementing authenticated REST APIs, and integrating streaming LLM endpoints into responsive user interfaces.",
  aboutBio: "I am a Computer Science student at RJIT focusing on full-stack web development across the MERN stack. I build performant frontends with React and Tailwind CSS, backed by Node.js and Express REST services connected to MongoDB. My work emphasizes measurable performance, maintainable state management, and practical integrations such as token-based auth and streaming GenAI APIs.",
  location: "Madhya Pradesh, IN",
  primaryFocus: "Frontend & Web Applications",
  github: "https://github.com/abhishekpachori04-cpu",
  linkedin: "https://linkedin.com/in/abhishek-pachori",
  email: "abhishekpachori04@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const aboutHighlights = [
  { text: "Production-Ready MERN Architecture", icon: "Layers" },
  { text: "Modular Component Systems", icon: "Code2" },
  { text: "REST API Design & DB Indexing", icon: "Cpu" },
  { text: "LLM Streaming & Tool Integrations", icon: "Sparkles" }
];

export const aboutCards = [
  {
    title: "MERN Stack Engineering",
    subtitle: "Building end-to-end applications with MongoDB, Express, React, and Node.js with secure auth pipelines.",
    icon: "Layers"
  },
  {
    title: "Frontend Architecture",
    subtitle: "Component-driven design, predictable state management, and accessible UI patterns using Tailwind CSS.",
    icon: "Layout"
  },
  {
    title: "Backend Services & REST APIs",
    subtitle: "Designing CRUD endpoints, JWT validation, schema validation with Mongoose, and error handling middleware.",
    icon: "Database"
  },
  {
    title: "Applied AI & API Integrations",
    subtitle: "Integrating streaming completions, prompt pipelines, and structured JSON outputs into full-stack apps.",
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
    description: "Full-stack conversational platform engineered with React, Node.js, and Express, providing real-time streaming LLM responses with sub-250ms time-to-first-token. Implemented MongoDB conversation session persistence, markdown parsing with syntax highlighting, and an Express middleware layer for API rate limiting and token handling.",
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
    description: "Full-stack notes application built on MongoDB, Express, React, and Node.js. Features debounced client-side keyword search across tagged documents, RESTful CRUD endpoints with Mongoose schema validation, and responsive categorization filters that maintain low render overhead.",
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
    description: "Resume-to-job matching pipeline built with React and Node.js. Evaluates candidate profiles against technical job requisitions using structured prompt engineering, calculates ATS compatibility scoring with weighted criteria, and generates targeted technical interview questions based on detected skill gaps.",
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
    subheading: "Rapid Prototyping & Systems Engineering",
    description: "Architected and shipped full-stack MVPs during 24-48 hour hackathons. Integrated REST endpoints and streaming AI completions under strict sprint time constraints."
  },
  {
    id: 2,
    title: "Developer Community & Campus Initiatives",
    period: "2024 – Present",
    subheading: "Technical Programs & Knowledge Sharing",
    description: "Organized technical workshops and study sessions covering Git workflows, React component architecture, and web fundamentals for 100+ peers as campus coordinator."
  },
  {
    id: 3,
    title: "Full-Stack Foundations & Engineering Discipline",
    period: "2025 – 2026",
    subheading: "Core CS, Data Structures & Modular Architecture",
    description: "Strengthened core data structures, algorithms, and modular OOP concepts in C++ and Python while standardizing clean Git workflows and REST API conventions."
  }
];

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
    description: "Engineered and shipped working full-stack prototypes during 24-to-48-hour sprint hackathons, delivering verified working demos with streaming LLM integrations."
  },
  {
    id: "ach-2",
    title: "Cloud & GenAI Technical Milestones",
    organization: "Google Cloud & AWS Academy Programs",
    date: "2026",
    badge: "Cloud Recognition",
    footer: "Program Completed",
    description: "Completed hands-on cloud tracks, enterprise Gemini labs, and generative AI foundations across compute runtimes, vector embeddings, and agent deployment."
  },
  {
    id: "ach-3",
    title: "Campus Technical Outreach & Community",
    organization: "GeeksforGeeks Campus Mantri",
    date: "2026",
    badge: "Campus Leadership",
    footer: "Active Role",
    description: "Selected to lead campus technical initiatives, organizing coding workshops and sharing curated development resources to foster peer engineering growth."
  }
];

export const currentlyLearningData = [
  {
    id: "learn-1",
    topic: "Scalable Backend Architecture",
    level: "In Progress",
    description: "Deepening patterns in Node.js and Express services: MongoDB index optimization, JWT authentication with refresh token rotation, and modular route structures.",
    tags: ["#NodeJS", "#MongoDB", "#RESTAPIs", "#AuthSecurity"]
  },
  {
    id: "learn-2",
    topic: "Production AI Workflows & Tool Calling",
    level: "Exploring",
    description: "Building production integrations around LLM streaming completions, server-sent events (SSE), context caching, and structured schema evaluation.",
    tags: ["#GenAIAPIs", "#PromptEngineering", "#StreamingResponses", "#ToolCalling"]
  },
  {
    id: "learn-3",
    topic: "UI Engineering & Core Web Vitals",
    level: "Active Daily",
    description: "Refining accessible keyboard navigation (WCAG AA), component bundle splitting, rendering performance, and responsive design systems with Tailwind CSS.",
    tags: ["#TailwindCSS", "#Accessibility", "#Performance", "#React"]
  }
];
