import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060910] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#111c30] border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-sm">
              {personalInfo.avatarText}
            </div>
            <div>
              <p className="font-semibold text-slate-200 text-sm">
                {personalInfo.name}
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                {personalInfo.role} &bull; {personalInfo.collegeTag}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              title="GitHub Profile"
              aria-label="Visit Abhishek Pachori's GitHub profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              title="LinkedIn Profile"
              aria-label="Visit Abhishek Pachori's LinkedIn profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              title="Send direct email"
              aria-label="Send direct email to Abhishek Pachori"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500 font-mono">
              &copy; {new Date().getFullYear()} Abhishek Pachori
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#101726] border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              title="Back to Top"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
