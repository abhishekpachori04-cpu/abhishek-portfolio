# ⚡ Abhishek Pachori — Personal Engineering Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://abhishek-portfolio-omega-lyart.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> **Live Deployment:** [https://abhishek-portfolio-omega-lyart.vercel.app](https://abhishek-portfolio-omega-lyart.vercel.app)

A high-performance, dark-editorial developer portfolio engineered to present full-stack web applications, technical certifications, and system building milestones. Built with modular React component patterns, responsive bento-grid layouts, and clean CSS animations.

---

## 🚀 Key Highlights

* **Dark Editorial Bento UI:** Modern glassmorphic interface with interactive spotlight accents and responsive layout hierarchy.
* **Modular Codebase:** Decoupled layout wrappers, section blocks, custom hooks, and centralized data layers.
* **Certificates Marquee:** Continuous horizontal sliding track with hover-to-pause controls and credential verification URLs.
* **Direct Connection Hub:** Quick-copy email action, verified social channels, and clear availability indicators.
* **Performance Focused:** Fast load times and sub-second asset delivery via Vite compilation.

---

## 🛠️ Tech Stack & Tooling

* **Frontend:** React 18, Tailwind CSS, Lucide React Icons
* **Build System:** Vite
* **Design & Workflow:** Figma, Canva, Git, GitHub, Vercel
* **Core Domains:** MERN Stack Architecture, RESTful APIs, Applied AI Integrations

---

## 📁 Repository Structure

```text
portfolio/
├── public/
│   ├── assets/           # Certificate badges & project previews
│   ├── profile.jpg       # Developer avatar
│   └── resume.pdf        # Verified resume file
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── sections/     # Hero, About, Skills, Projects, Journey, Education, Certificates, Contact
│   │   └── ui/           # ProjectCard, CertificateCard, SectionHeader
│   ├── data/
│   │   └── portfolioData.js  # Central content schema
│   ├── hooks/
│   │   └── useClipboard.js   # Clipboard utility hook
│   ├── App.jsx           # Clean section orchestrator
│   ├── main.jsx          # App entry
│   └── index.css         # Tailwind & smooth-scrolling configurations
├── package.json
└── vite.config.js