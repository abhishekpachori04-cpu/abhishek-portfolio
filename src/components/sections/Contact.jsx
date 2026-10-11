import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  MapPin 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import SpotlightCard from '../ui/SpotlightCard';
import MagneticButton from '../ui/MagneticButton';
import { personalInfo } from '../../data/portfolioData';
import { useClipboard } from '../../hooks/useClipboard';
import { itemFadeUp, cardRevealVariant, staggerContainer } from '../../utils/animations';

export default function Contact() {
  const { hasCopied, copy } = useClipboard();

  return (
    <motion.section 
      id="contact" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="py-24 border-t border-zinc-800/60 relative scroll-mt-16 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-sky-500/10 to-indigo-600/5 blur-[140px] rounded-full pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div variants={itemFadeUp} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-5 shadow-lg shadow-emerald-950/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Connect &amp; Collaborate
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am currently open to Frontend &amp; MERN Stack developer roles and software engineering internships. Reach out directly through any of the channels below.
          </p>
        </motion.div>

        <motion.div variants={itemFadeUp} className="space-y-4 max-w-3xl mx-auto">
          
          <SpotlightCard
            as="article"
            className="p-6 sm:p-8 shadow-2xl shadow-black/40 transition-all duration-300 group"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Direct Communication</span>
                </div>
                <div className="text-lg sm:text-2xl font-bold font-mono text-white tracking-tight break-all select-all">
                  {personalInfo.email}
                </div>
                <p className="text-xs text-zinc-400">
                  Open for technical interviews, internship inquiries, and collaborative discussions.
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 shrink-0 w-full sm:w-auto">
                <MagneticButton
                  as="a"
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send direct email to Abhishek Pachori"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </MagneticButton>

                <MagneticButton
                  type="button"
                  onClick={() => copy(personalInfo.email)}
                  className="w-full sm:w-auto bg-zinc-800/90 hover:bg-zinc-700/90 text-zinc-200 hover:text-white border border-zinc-700/60 font-medium text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  title="Copy email to clipboard"
                  aria-label={hasCopied ? "Email address copied to clipboard" : "Copy email address to clipboard"}
                >
                  {hasCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </MagneticButton>
              </div>
            </div>
          </SpotlightCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div variants={cardRevealVariant}>
              <SpotlightCard
                as="a"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Abhishek Pachori's GitHub profile (opens in new tab)"
                className="p-5 shadow-xl shadow-black/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 h-full"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:border-blue-500/40 transition-colors" aria-hidden="true">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                      Code &amp; Repositories
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      GitHub Profile
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Explore full-stack apps, repositories &amp; open-source code
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div variants={cardRevealVariant}>
              <SpotlightCard
                as="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Abhishek Pachori's LinkedIn profile (opens in new tab)"
                className="p-5 shadow-xl shadow-black/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 h-full"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-sky-400 group-hover:border-blue-500/60 transition-colors" aria-hidden="true">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                      Professional Network
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      LinkedIn Profile
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Connect for professional opportunities and technical discussions
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div variants={cardRevealVariant}>
              <SpotlightCard
                as="article"
                className="p-5 shadow-xl shadow-black/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400" aria-hidden="true">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-zinc-800/80 border border-zinc-700/50 text-[10px] font-mono text-zinc-300">
                      Remote &bull; Relocation
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                      Location &amp; Work Mode
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Madhya Pradesh, India
                    </h3>
                    <p className="text-xs text-emerald-400/90 font-medium mt-1">
                      Available for Remote &amp; On-Site Roles
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}
