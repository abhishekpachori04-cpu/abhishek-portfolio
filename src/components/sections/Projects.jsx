import React, { useState } from 'react';
import { 
  ExternalLink, 
  Bot, 
  Send, 
  Sparkles 
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import { GithubIcon } from '../ui/Icons';
import { projectsData, personalInfo } from '../../data/portfolioData';

export default function Projects() {
  const [chatInput, setChatInput] = useState('');
  const [interactiveMessages, setInteractiveMessages] = useState([]);

  const flagship = projectsData.find(p => p.featured);
  const subProjects = projectsData.filter(p => !p.featured);

  const handleSendInteractiveChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatInput('');
    setInteractiveMessages(prev => [...prev, { role: 'user', text: userText }]);

    setTimeout(() => {
      setInteractiveMessages(prev => [
        ...prev, 
        { 
          role: 'ai', 
          text: `In production MERN applications, clean separation of concerns, secure middleware authentication, and sub-250ms API responses ensure a robust foundation. Explore the live AI Buddy demo for end-to-end streaming!`,
          latency: 'Completed in 180ms'
        }
      ]);
    }, 600);
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Featured Projects"
          subtitle="Engineered web applications and systems featuring full-stack architecture, clean UI engineering, and robust backend integrations."
          rightAction={
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Abhishek Pachori's repositories on GitHub (opens in new tab)"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md p-1"
            >
              <span>View GitHub repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          }
        />

        {flagship && (
          <article 
            aria-labelledby="flagship-project-title"
            className="bg-[#0d1424]/85 border border-zinc-800/80 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 mb-8 transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-blue-500/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-blue-600/20 text-sky-300 border border-blue-500/40 text-[11px] font-mono font-semibold px-3 py-1 rounded-full shadow-sm shadow-blue-500/20">
                    {flagship.badge}
                  </span>
                  <span className="bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    <span>{flagship.statusBadge}</span>
                  </span>
                </div>

                <h3 id="flagship-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {flagship.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {flagship.description}
                </p>

                <div className="flex flex-wrap gap-2 py-1" aria-label="Key features">
                  {flagship.featurePills?.map((pill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-[#121b2d] border border-slate-800 px-3 py-1 rounded-lg"
                    >
                      <Sparkles className="w-3 h-3 text-sky-400" aria-hidden="true" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-1" aria-label="Technologies used">
                  {flagship.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-[#162238] border border-sky-500/25 text-sky-300 px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href={flagship.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Launch live application for ${flagship.title} (opens in new tab)`}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={flagship.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${flagship.title} on GitHub (opens in new tab)`}
                    className="bg-[#121c2e] hover:bg-[#18263e] text-slate-200 border border-slate-700 font-medium text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-400" />
                    <span>View Source Code</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-800 bg-[#090d16] overflow-hidden shadow-2xl" aria-label="Interactive AI Buddy terminal simulator">
                  <div className="p-3.5 bg-[#0e1524] border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" aria-hidden="true" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" aria-hidden="true" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" aria-hidden="true" />
                      <span className="text-xs font-mono text-slate-400 ml-2">ai-buddy.client.tsx</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                      <span>{flagship.mockChat.status}</span>
                    </span>
                  </div>

                  <div className="p-4 space-y-3.5 bg-[#0a0f1c] max-h-[340px] overflow-y-auto" role="log" aria-live="polite">
                    <div className="flex flex-col items-end space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 px-1">You</span>
                      <div className="bg-[#162744] border border-sky-500/20 text-slate-200 p-3 rounded-2xl rounded-tr-none max-w-[85%] text-xs leading-relaxed">
                        <p>{flagship.mockChat.userMessage}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start space-y-1">
                      <div className="flex items-center gap-1.5 px-1">
                        <Bot className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                        <span className="text-[10px] font-mono text-sky-400">{flagship.mockChat.assistantName}</span>
                      </div>
                      <div className="bg-[#111827] border border-slate-800 text-slate-300 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-xs leading-relaxed space-y-2">
                        <p>{flagship.mockChat.aiMessage}</p>
                        <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80">
                          <span className="text-emerald-400 font-semibold">{flagship.mockChat.latency}</span>
                          <span>tokens: 64/s</span>
                        </div>
                      </div>
                    </div>

                    {interactiveMessages.map((msg, mIdx) => (
                      <div
                        key={mIdx}
                        className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} space-y-1`}
                      >
                        <span className="text-[10px] font-mono text-slate-400 px-1">
                          {msg.role === 'user' ? 'You' : 'AI Buddy'}
                        </span>
                        <div
                          className={`p-3 rounded-2xl max-w-[85%] text-xs leading-relaxed ${
                            msg.role === 'user'
                              ? 'bg-[#162744] border border-sky-500/20 text-slate-200 rounded-tr-none'
                              : 'bg-[#111827] border border-slate-800 text-slate-300 rounded-tl-none'
                          }`}
                        >
                          <p>{msg.text}</p>
                          {msg.latency && (
                            <span className="block text-[10px] font-mono text-emerald-400 pt-1">
                              {msg.latency}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <form 
                    onSubmit={handleSendInteractiveChat}
                    className="p-3 bg-[#080d17] border-t border-slate-800/80 flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask AI Buddy anything..."
                      aria-label="Message prompt for AI Buddy preview"
                      className="flex-1 bg-[#111929] border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    />
                    <button
                      type="submit"
                      aria-label="Send test query to AI Buddy"
                      className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </article>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {subProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
