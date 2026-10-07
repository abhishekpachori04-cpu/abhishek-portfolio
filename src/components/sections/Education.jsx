import React from 'react';
import { GraduationCap } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { educationData } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-800/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Education"
          subtitle="Academic foundation in computer science principles, core engineering fundamentals, and practical software development."
        />

        <article 
          aria-labelledby="education-degree-title"
          className="relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8 max-w-5xl shadow-xl shadow-black/20 hover:border-zinc-700/80 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" aria-hidden="true" />

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-800/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#131f36] border border-sky-500/25 flex items-center justify-center shrink-0 shadow-inner" aria-hidden="true">
                <GraduationCap className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 id="education-degree-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {educationData.degree}
                </h3>
                <p className="text-sm font-semibold text-sky-400 mt-1">
                  {educationData.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
              <span className="bg-[#142038] text-sky-300 border border-sky-500/25 text-xs font-mono font-semibold px-3 py-1 rounded-full self-start sm:self-auto shadow-sm shadow-sky-500/10">
                {educationData.year}
              </span>
              <span className="text-[11px] font-mono text-slate-400 font-medium">
                {educationData.expectedGraduation}
              </span>
            </div>
          </div>

          <div className="pt-6">
            <h4 className="text-[11px] font-mono uppercase font-semibold text-slate-400 tracking-wider mb-3.5">
              Key Academic Coursework
            </h4>
            <div className="flex flex-wrap gap-2.5" aria-label="Key academic coursework">
              {educationData.coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="bg-zinc-950/70 border border-zinc-800/90 text-slate-300 hover:text-white hover:border-blue-500/30 text-xs font-mono px-3 py-1.5 rounded-lg transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
