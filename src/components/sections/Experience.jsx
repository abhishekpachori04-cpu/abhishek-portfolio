import React from 'react';
import { Briefcase, Calendar, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { experienceData } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Work Experience"
          subtitle="Hands-on engineering experience contributing to AI prompt workflows, technical collaboration, and practical system development."
        />

        <div className="space-y-6 max-w-4xl">
          {experienceData.map((item) => (
            <article
              key={item.id}
              className="bg-zinc-900/50 border border-zinc-800/80 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-blue-500/10 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-zinc-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#121c2e] border border-sky-500/25 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform" aria-hidden="true">
                    <Briefcase className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-sky-400">
                      <Building2 className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
                      <span>{item.company}</span>
                      {item.type && (
                        <>
                          <span className="text-slate-600" aria-hidden="true">&bull;</span>
                          <span className="text-xs text-slate-400 font-mono font-normal">{item.type}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 self-start sm:self-auto font-mono text-xs font-semibold text-sky-300 bg-[#142038] border border-sky-500/25 px-3 py-1.5 rounded-lg shadow-sm shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Verified Professional Experience</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1" aria-label="Core competencies">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-[#10192a] border border-slate-800 px-3 py-1 rounded-lg"
                    >
                      <Sparkles className="w-3 h-3 text-sky-400" aria-hidden="true" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
