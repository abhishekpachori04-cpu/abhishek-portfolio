import React from 'react';
import { Trophy, Calendar, Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { achievementsData } from '../../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 border-t border-slate-800/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Achievements & Highlights"
          subtitle="Recognitions earned through rapid hackathon prototyping, cloud programs, and campus developer leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((ach) => (
            <article
              key={ach.id}
              className="bg-zinc-900/40 border border-zinc-800/90 hover:border-blue-500/40 hover:bg-zinc-900/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20 group hover:-translate-y-1 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-blue-500/15 text-sky-300 border border-blue-500/30 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg shadow-sm shadow-blue-500/10">
                    {ach.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-zinc-950/70 border border-zinc-800/90 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3 h-3 text-sky-400" aria-hidden="true" />
                    <span>{ach.date}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5 leading-snug">
                  {ach.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-3.5 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="truncate">{ach.organization}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                <span>{ach.footer || 'Verified Activity'}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
