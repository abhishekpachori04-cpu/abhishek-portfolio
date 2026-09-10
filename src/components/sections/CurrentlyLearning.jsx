import React from 'react';
import { BookOpen } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { currentlyLearningData } from '../../data/portfolioData';

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="py-20 border-t border-slate-800/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Currently Learning & Exploring"
          subtitle="Active engineering frontiers I am exploring to build more resilient full-stack systems and intuitive user interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyLearningData.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/40 border border-zinc-800/90 hover:border-blue-500/40 hover:bg-zinc-900/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20 group hover:-translate-y-1 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sky-400 group-hover:scale-105 transition-transform shadow-inner">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="bg-zinc-950/80 text-sky-300 border border-zinc-800 text-xs font-mono font-semibold px-2.5 py-1 rounded-lg">
                    {item.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2 leading-snug">
                  {item.topic}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs text-zinc-400 bg-zinc-800/40 border border-zinc-800 rounded-md px-2 py-1"
                  >
                    {tag.startsWith('#') ? tag : `#${tag}`}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
