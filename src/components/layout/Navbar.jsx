import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Share2, 
  Download, 
  User, 
  Menu, 
  X, 
  Check 
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { personalInfo, navLinks } from '../../data/portfolioData';
import { useClipboard } from '../../hooks/useClipboard';
import MagneticButton from '../ui/MagneticButton';

export default function Navbar({ onShareClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { hasCopied, copy } = useClipboard();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    copy(window.location.href);
    if (onShareClick) onShareClick();
  };

  return (
    <header 
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'backdrop-blur-xl bg-zinc-950/80 border-zinc-800/70 shadow-xl shadow-black/40'
          : 'backdrop-blur-md bg-zinc-950/60 border-zinc-800/40 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Abhishek Pachori - Back to top"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-sm shadow-inner group-hover:border-sky-400 group-hover:scale-105 transition-all">
            {personalInfo.avatarText}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2.5">
            <span className="font-bold text-slate-100 text-sm sm:text-base tracking-tight group-hover:text-white transition-colors">
              {personalInfo.name}
            </span>
            <span className="hidden md:inline-block font-mono text-[11px] text-slate-400 bg-zinc-900/90 border border-zinc-800 px-2.5 py-0.5 rounded-full">
              {personalInfo.batch}
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/40 border border-zinc-800/60 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-zinc-800/60 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            aria-label="Abhishek Pachori's GitHub profile (opens in new tab)"
            className="w-9 h-9 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-slate-400 hover:text-white flex items-center justify-center text-xs transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-sm"
          >
            <Code className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyLink}
            title={hasCopied ? "Link Copied!" : "Share Portfolio"}
            aria-label={hasCopied ? "Portfolio link copied to clipboard" : "Share portfolio link"}
            className="relative w-9 h-9 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-slate-400 hover:text-white flex items-center justify-center text-xs transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer shadow-sm"
          >
            {hasCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          <MagneticButton
            as="a"
            href={personalInfo.resumeUrl}
            download="Abhishek_Pachori_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Abhishek Pachori's Resume (PDF)"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </MagneticButton>

          <a
            href="#about"
            title="About Abhishek"
            aria-label="Navigate to About section"
            className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-sm"
          >
            <User className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-2xl border-t border-zinc-800/80 px-6 py-6"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-sky-300 hover:bg-zinc-900/80 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-5 mt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abhishek Pachori's GitHub profile (opens in new tab)"
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <Code className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopyLink}
                  aria-label={hasCopied ? "Portfolio link copied to clipboard" : "Share portfolio link"}
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
                >
                  {hasCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download="Abhishek_Pachori_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Download Abhishek Pachori's Resume (PDF)"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-lg shadow-blue-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
