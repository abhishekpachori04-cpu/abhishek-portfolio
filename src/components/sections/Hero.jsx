import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Code, 
  Share2
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SpotlightCard from '../ui/SpotlightCard';
import MagneticButton from '../ui/MagneticButton';
import { customEase } from '../../utils/animations';

export default function Hero({ onShareClick }) {
  // Staggered text reveal variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordRevealVariant = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: customEase,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: customEase,
      },
    },
  };

  const headingWords = [
    { text: "Hi,", gradient: false },
    { text: "I'm", gradient: false },
    { text: "Abhishek", gradient: true },
    { text: "Pachori.", gradient: true },
  ];

  return (
    <motion.section 
      id="home" 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Pill Badge */}
            <motion.div variants={fadeUpVariant}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-lg shadow-emerald-950/40 backdrop-blur-md hover:border-emerald-500/50 transition-colors">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-semibold tracking-wide">Available for Work &bull; Open to Opportunities</span>
              </div>
            </motion.div>

            {/* Staggered Heading Word Reveals */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                <span className="sr-only">Hi, I'm Abhishek Pachori.</span>
                <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1" aria-hidden="true">
                  {headingWords.map((item, idx) => (
                    <span key={idx} className="overflow-hidden inline-block py-0.5">
                      <motion.span
                        variants={wordRevealVariant}
                        className={`inline-block ${
                          item.gradient
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400'
                            : 'text-white'
                        }`}
                      >
                        {item.text}
                      </motion.span>
                    </span>
                  ))}
                </div>
              </h1>

              {/* Subtitle */}
              <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-2 pt-1 text-slate-300 font-medium text-lg sm:text-xl">
                <span>Frontend / MERN Stack Developer</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
                <span className="text-slate-400 font-mono text-sm">{personalInfo.collegeTag}</span>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p variants={fadeUpVariant} className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </motion.p>

            {/* Call To Action Buttons with Magnetic Physics */}
            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-3 pt-2">
              <MagneticButton
                as="a"
                href="#projects"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={personalInfo.resumeUrl}
                download="Abhishek_Pachori_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Abhishek Pachori's Resume (PDF)"
                className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-medium text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md shadow-black/20 hover:shadow-sky-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Download className="w-4 h-4 text-zinc-400" />
                <span>Download Resume</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Source"
                aria-label="Visit Abhishek Pachori's GitHub profile (opens in new tab)"
                className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 p-2.5 rounded-xl transition-colors shadow-md shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Code className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={onShareClick}
                title="Share Portfolio"
                aria-label="Open portfolio share dialog"
                className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 p-2.5 rounded-xl transition-colors shadow-md shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Share2 className="w-4 h-4" />
              </MagneticButton>
            </motion.div>

            {/* Bento Micro-Cards with Mouse Spotlight */}
            <motion.div variants={fadeUpVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-lg">
              <SpotlightCard className="p-3.5 bg-zinc-900/40 border-zinc-800/80">
                <span className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-semibold">
                  LOCATION
                </span>
                <span className="text-xs font-semibold text-zinc-200 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 inline" />
                  {personalInfo.location}
                </span>
              </SpotlightCard>

              <SpotlightCard className="p-3.5 bg-zinc-900/40 border-zinc-800/80">
                <span className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-semibold">
                  PRIMARY FOCUS
                </span>
                <div className="mt-1">
                  <span className="inline-block bg-blue-950/70 border border-blue-500/30 text-sky-300 text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                    {personalInfo.primaryFocus}
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Profile Card with 3D Tilt, Floating Animation and Aurora Glow */}
          <motion.div 
            variants={fadeUpVariant}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative group w-full max-w-xs sm:max-w-sm"
            >
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/25 via-blue-600/20 to-emerald-500/15 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              <SpotlightCard 
                enableTilt={true}
                tiltMax={7}
                className="rounded-3xl overflow-hidden ring-1 ring-zinc-700/60 bg-zinc-900/90 shadow-2xl shadow-blue-500/10 aspect-[4/5] backdrop-blur-sm"
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Abhishek Pachori - Developer Profile"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-75 pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-zinc-900/85 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white tracking-tight">
                      {personalInfo.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 bg-sky-950/70 border border-sky-500/30 px-2 py-0.5 rounded-md">
                    {personalInfo.collegeTag}
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
