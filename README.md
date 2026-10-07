# ⚡ Abhishek Pachori — Personal Engineering Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://abhishek-portfolio-omega-lyart.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> **Live Deployment:** [https://abhishek-portfolio-omega-lyart.vercel.app](https://abhishek-portfolio-omega-lyart.vercel.app)

A high-performance developer portfolio engineered to present full-stack web applications, technical certifications, and system building milestones. Built with modular React component patterns, responsive bento-grid layouts, WCAG 2.1 AA keyboard accessibility, and clean CSS styling.

---

## 🚀 Key Highlights

* **Accessible & Semantic HTML5:** Semantic `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, and `<article>` tags throughout, complete with descriptive ARIA labels, focus-visible keyboard navigation rings, and skip-to-content links.
* **Modular Codebase:** Decoupled layout wrappers, isolated section blocks, custom clipboard hook, and centralized data layers.
* **Verified Credentials & Projects:** Interactive project cards with live application URLs, GitHub repositories, and direct verification links for industry certifications.
* **Direct Connection Hub:** Quick-copy email action, verified social channels, and clear availability indicators.
* **Production Build:** Highly optimized asset delivery via Vite 8 and React 19.

---

## 🛠️ Tech Stack & Tooling

* **Frontend:** React 19, Tailwind CSS 4, Lucide React
* **Build System:** Vite 8
* **Linter & Code Quality:** Oxlint
* **Core Disciplines:** MERN Stack Architecture, RESTful APIs, Applied AI Integrations

---

## 📁 Repository Structure

```text
ap/
├── public/
│   ├── assets/           # Certificate badges & previews
│   ├── profile.jpg       # Developer photo
│   └── resume.pdf        # Resume PDF
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── sections/     # Hero, About, Skills, Projects, Journey, Education, Certificates, Contact
│   │   └── ui/           # ProjectCard, CertificateCard, SectionHeader, ShareModal, CustomCursor
│   ├── data/
│   │   ├── portfolioData.js  # Central content schema
│   │   └── certificates.js   # Certificate credential data
│   ├── hooks/
│   │   └── useClipboard.js   # Clipboard utility hook
│   ├── App.jsx           # Clean section orchestrator
│   ├── main.jsx          # App entry point
│   └── index.css         # Tailwind & theme styles
├── package.json
└── vite.config.js
```