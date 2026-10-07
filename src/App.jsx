import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Education from './components/sections/Education';
import Certificates from './components/sections/Certificates';
import Achievements from './components/sections/Achievements';
import CurrentlyLearning from './components/sections/CurrentlyLearning';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ShareModal from './components/ui/ShareModal';

export default function App() {
  const [shareModalOpen, setShareModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-revealed');
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
      if (sec.id === 'home') {
        sec.classList.add('section-revealed');
      } else {
        sec.classList.add('section-reveal');
        observer.observe(sec);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-200 selection:bg-sky-500/20 selection:text-sky-200">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <CustomCursor />
      <Navbar onShareClick={() => setShareModalOpen(true)} />

      <main id="main-content" className="relative">
        <Hero onShareClick={() => setShareModalOpen(true)} />
        <About />
        <Skills />
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
  );
}
