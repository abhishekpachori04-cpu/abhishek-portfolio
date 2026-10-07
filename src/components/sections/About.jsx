import React from 'react';
import { 
  Layout, 
  Database, 
  Bot, 
  Layers, 
  Code2, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { personalInfo, aboutHighlights, aboutCards } from '../../data/portfolioData';

export default function About() {
  const getIcon = (name) => {
    switch (name) {
      case 'Layout': return <Layout className="w-5 h-5 text-sky-400" />;
      case 'Database': return <Database className="w-5 h-5 text-sky-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-sky-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-sky-400" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-sky-400" />;
      default: return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="py-20 border-t border-slate-800/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          title="About Me"
          subtitle="Engineering performant frontends, structured backends, and practical AI web integrations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.aboutBio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {aboutHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0e1628]/80 border border-slate-800/90 hover:border-blue-500/40 rounded-xl p-3.5 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10 group"
                >
                  <div className="p-2 rounded-lg bg-sky-950/60 border border-sky-500/20 group-hover:border-sky-400/40 group-hover:bg-sky-900/40 transition-all duration-300 shrink-0" aria-hidden="true">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors duration-200">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutCards.map((card, idx) => (
              <article
                key={idx}
                className="bg-[#0d1424]/85 border border-slate-800/90 hover:border-blue-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20 hover:shadow-blue-500/10 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#142036] border border-sky-500/20 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-sky-400/40 group-hover:bg-sky-950/60 transition-all duration-300" aria-hidden="true">
                  {getIcon(card.icon)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.subtitle}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
