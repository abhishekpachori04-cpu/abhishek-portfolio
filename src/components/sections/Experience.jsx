import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import SpotlightCard from '../ui/SpotlightCard';
import UnfoldSection from '../ui/UnfoldSection';
import { experienceData } from '../../data/portfolioData';
import { cardRevealVariant } from '../../utils/animations';

export default function Experience() {
  return (
    <UnfoldSection 
      id="experience" 
      className="py-20 border-t border-zinc-800/60 relative scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Work Experience"
          subtitle="Hands-on engineering experience contributing to AI prompt workflows, technical collaboration, and practical system development."
        />

        <div className="space-y-6 max-w-4xl">
          {experienceData.map((item) => (
            <motion.div key={item.id} variants={cardRevealVariant}>
              <SpotlightCard
                as="article"
                enableTilt={true}
                tiltMax={5}
                className="p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl shadow-black/20 group hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-zinc-800/80">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-sky-500/25 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform" aria-hidden="true">
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
                              <span className="text-zinc-600" aria-hidden="true">&bull;</span>
                              <span className="text-xs text-slate-400 font-mono font-normal">{item.type}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 self-start sm:self-auto font-mono text-xs font-semibold text-sky-300 bg-zinc-800/80 border border-sky-500/25 px-3 py-1.5 rounded-lg shadow-sm shrink-0">
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
                          className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-zinc-900/90 border border-zinc-800 px-3 py-1 rounded-lg hover:border-zinc-700 transition-colors"
                        >
                          <Sparkles className="w-3 h-3 text-sky-400" aria-hidden="true" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </UnfoldSection>
  );
}
