import React from 'react';
import { 
  Layout, 
  Database, 
  Terminal, 
  Sparkles, 
  Wrench 
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { skillsData } from '../../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-4 h-4 text-sky-400" />;
      case 'Database': return <Database className="w-4 h-4 text-sky-400" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-sky-400" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-sky-400" />;
      default: return <Sparkles className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Core technical proficiencies, frameworks, and developer tooling leveraged to architect scalable, high-performance web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {skillsData.map((group, idx) => {
            const colSpanClass = idx < 3 
              ? 'lg:col-span-2' 
              : idx === 3 
                ? 'md:col-span-1 lg:col-span-3' 
                : 'md:col-span-2 lg:col-span-3';

            return (
              <article
                key={idx}
                className={`bg-[#0d1424]/85 border border-slate-800/90 hover:border-blue-500/30 hover:bg-zinc-900/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-blue-500/10 group ${colSpanClass}`}
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/60">
                  <div className="p-2 rounded-xl bg-[#142036] border border-sky-500/20 group-hover:border-sky-400/40 group-hover:bg-sky-950/60 transition-all duration-300" aria-hidden="true">
                    {getCategoryIcon(group.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors duration-200">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                        skill.highlighted
                          ? 'bg-blue-600/20 border-blue-500/40 text-sky-200 font-semibold shadow-sm shadow-blue-500/20'
                          : 'bg-[#10192b] border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
