import React from 'react';
import { ExternalLink, Search, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <article className="bg-[#0d1424]/85 border border-zinc-800/80 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-blue-500/10 group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="bg-[#141f36] text-sky-300 border border-sky-500/20 text-[11px] font-mono font-medium px-2.5 py-1 rounded-md">
            {project.badge}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
            <span>Active</span>
          </span>
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {project.type === 'notes-search' && project.mockSearch && (
          <div className="bg-[#090e1a] border border-slate-800 rounded-xl p-3.5 mb-5 font-mono text-xs" aria-hidden="true">
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/70 pb-2 mb-2.5">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Search className="w-3 h-3" />
                <span>SEARCH: "{project.mockSearch.searchTerm}"</span>
              </span>
              <span className="text-slate-500">{project.mockSearch.count}</span>
            </div>
            <div className="bg-[#101726] border border-slate-800/60 rounded-lg p-2.5">
              <p className="text-xs font-semibold text-slate-200 mb-1">
                {project.mockSearch.title}
              </p>
              <p className="text-[11px] text-slate-400 font-sans line-clamp-2">
                {project.mockSearch.snippet}
              </p>
            </div>
          </div>
        )}

        {project.type === 'candidate-pipeline' && project.mockCandidate && (
          <div className="bg-[#090e1a] border border-slate-800 rounded-xl p-3.5 mb-5 font-mono text-xs" aria-hidden="true">
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/70 pb-2 mb-2.5">
              <span className="text-slate-400 uppercase tracking-wider font-semibold">
                {project.mockCandidate.label}
              </span>
              <span className="text-emerald-400 font-semibold">{project.mockCandidate.matchScore}</span>
            </div>
            <div className="bg-[#101726] border border-slate-800/60 rounded-lg p-2.5 flex items-center gap-2 text-slate-200 text-xs">
              <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="font-sans font-medium">{project.mockCandidate.role}</span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6" aria-label="Tech stack">
          {project.stack.map((item, idx) => (
            <span
              key={idx}
              className="bg-[#111929] border border-slate-800 text-slate-300 text-xs font-mono px-2.5 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/60 flex items-center gap-3">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Launch live demo for ${project.title} (opens in new tab)`}
          className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 shadow-sm shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
          className="flex-1 bg-[#11192b] hover:bg-[#18233c] hover:border-slate-600 text-slate-200 border border-slate-700/80 font-medium text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
          <span>GitHub Repo</span>
        </a>
      </div>
    </article>
  );
}
