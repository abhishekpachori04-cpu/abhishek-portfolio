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
import { personalInfo, navLinks } from '../../data/portfolioData';
import { useClipboard } from '../../hooks/useClipboard';

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080c14]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
          : 'bg-[#080c14]/40 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center gap-2.5 group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Abhishek Pachori - Back to top"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0e1626] border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-sm shadow-inner group-hover:border-sky-400 group-hover:scale-105 transition-all">
            {personalInfo.avatarText}
          </div>
          <span className="font-bold text-slate-100 text-sm tracking-tight group-hover:text-white">
            {personalInfo.name}
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-400 bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 rounded-full">
            {personalInfo.batch}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            aria-label="Abhishek Pachori's GitHub profile (opens in new tab)"
            className="w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Code className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleCopyLink}
            title={hasCopied ? "Link Copied!" : "Share Portfolio"}
            aria-label={hasCopied ? "Portfolio link copied to clipboard" : "Share portfolio link"}
            className="relative w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          >
            {hasCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>

          <a
            href={personalInfo.resumeUrl}
            download="Abhishek_Pachori_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Abhishek Pachori's Resume (PDF)"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-sm shadow-blue-500/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Download className="w-3 h-3" />
            <span>Resume</span>
          </a>

          <a
            href="#about"
            title="About Abhishek"
            aria-label="Navigate to About section"
            className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <User className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 mt-2 transition-all">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/40 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abhishek Pachori's GitHub profile (opens in new tab)"
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Code className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyLink}
                aria-label={hasCopied ? "Portfolio link copied to clipboard" : "Share portfolio link"}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
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
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
