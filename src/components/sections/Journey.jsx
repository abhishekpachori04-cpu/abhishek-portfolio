import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { journeyData } from '../../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey" className="py-20 border-t border-slate-800/60 relative scroll-mt-16">
      {/* Anchor fallbacks for smooth backward compatibility */}
      <span id="milestones" className="absolute -top-16 left-0 pointer-events-none" />
      <span id="experience" className="absolute -top-16 left-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Journey & Milestones"
          subtitle="Key achievements, collaborative initiatives, hackathons, and technical milestones shaping my software engineering journey."
        />

        <div className="relative pl-6 sm:pl-8 space-y-6 max-w-4xl">
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-sky-500/60 to-slate-800" />

          {journeyData.map((item, idx) => {
            const isLatest = idx === 0;

            return (
              <div key={item.id} className="relative group">
                <div className="absolute -left-[23px] sm:-left-[25px] top-6 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-[#080c14] group-hover:scale-125 transition-transform duration-200 shadow-md shadow-blue-500/60">
                  {isLatest && (
                    <span className="absolute -inset-1 rounded-full bg-blue-400 opacity-75 animate-ping" />
                  )}
                </div>

                <div className="bg-[#0d1424]/60 border border-slate-800/80 hover:border-zinc-700/80 hover:bg-[#0d1424]/90 p-5 sm:p-6 rounded-2xl transition-all duration-200 shadow-lg shadow-black/10">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs font-semibold text-sky-400 bg-sky-950/60 border border-sky-500/25 px-2.5 py-1 rounded-md sm:text-right shrink-0 w-fit">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-400 pb-2">
                    {item.subheading}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
