import React from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Code, 
  Share2 
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Hero({ onShareClick }) {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>{personalInfo.status}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                <span>Hi, I'm Abhishek </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 block sm:inline">
                  Pachori.
                </span>
              </h1>
              <p className="text-slate-300 font-medium text-lg sm:text-xl flex items-center gap-2 pt-1">
                <span>Frontend / MERN Stack Developer</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
                <span className="text-slate-400 font-mono text-sm">{personalInfo.collegeTag}</span>
              </p>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Abhishek_Pachori_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Abhishek Pachori's Resume (PDF)"
                className="bg-zinc-900/80 hover:bg-zinc-800/80 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-medium text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Download className="w-4 h-4 text-zinc-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Source"
                aria-label="Visit Abhishek Pachori's GitHub profile (opens in new tab)"
                className="bg-zinc-900/80 hover:bg-zinc-800/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 p-2.5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Code className="w-4 h-4" />
              </a>

              <button
                onClick={onShareClick}
                title="Share Portfolio"
                aria-label="Open portfolio share dialog"
                className="bg-zinc-900/80 hover:bg-zinc-800/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 p-2.5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-lg">
              <div className="bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/40 rounded-xl p-3.5 backdrop-blur-sm transition-all duration-300">
                <span className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-semibold">
                  LOCATION
                </span>
                <span className="text-xs font-semibold text-zinc-200 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 inline" />
                  {personalInfo.location}
                </span>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/40 rounded-xl p-3.5 backdrop-blur-sm transition-all duration-300">
                <span className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-semibold">
                  PRIMARY FOCUS
                </span>
                <div className="mt-1">
                  <span className="inline-block bg-blue-950/70 border border-blue-500/30 text-sky-300 text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                    {personalInfo.primaryFocus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/30 via-blue-600/25 to-indigo-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-zinc-700/60 bg-[#0d1322] shadow-2xl shadow-blue-500/10 aspect-[4/5]">
                <img
                  src="/assets/profile.jpg"
                  alt="Abhishek Pachori - Developer Profile"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/85 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#090e1a]/85 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white tracking-tight">
                      {personalInfo.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 bg-sky-950/70 border border-sky-500/30 px-2 py-0.5 rounded-md">
                    {personalInfo.collegeTag}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
