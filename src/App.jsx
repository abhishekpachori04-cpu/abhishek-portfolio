import React, { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Education from './components/sections/Education';
import Certificates from './components/sections/Certificates';
import Achievements from './components/sections/Achievements';
import CurrentlyLearning from './components/sections/CurrentlyLearning';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ShareModal from './components/ui/ShareModal';
import AuroraBackground from './components/ui/AuroraBackground';

export default function App() {
  const [shareModalOpen, setShareModalOpen] = useState(false);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <div className="relative min-h-screen bg-zinc-950 text-slate-200 selection:bg-sky-500/20 selection:text-sky-200 overflow-x-hidden">
        {/* Animated Dark Aurora & Tech Mesh Background */}
        <AuroraBackground />

        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        {/* Minimalist interactive custom cursor */}
        <CustomCursor />

        {/* Floating Glassmorphic Pill Navbar */}
        <Navbar onShareClick={() => setShareModalOpen(true)} />

        <main id="main-content" className="relative z-10">
          <Hero onShareClick={() => setShareModalOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Journey />
          <Education />
          <Certificates />
          <Achievements />
          <CurrentlyLearning />
          <Contact />
        </main>

        <Footer />
        <ShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
      </div>
    </ReactLenis>
  );
}
