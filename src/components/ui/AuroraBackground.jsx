import React from 'react';
import { motion } from 'framer-motion';

/**
 * AuroraBackground
 * High-end Dark Editorial animated Aurora mesh with floating radial glows
 * and a subtle perspective grid overlay for Awwwards-level visual depth.
 */
export default function AuroraBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-zinc-950" 
      aria-hidden="true"
    >
      {/* Aurora Orb 1: Cyan / Sky (Top center to right) */}
      <motion.div
        animate={{
          x: [-40, 60, -20, -40],
          y: [-30, 40, -50, -30],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.55, 0.75, 0.6, 0.55],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 left-[20%] w-[680px] h-[580px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-sky-500/12 to-blue-600/5 blur-[140px]"
      />

      {/* Aurora Orb 2: Emerald / Mint (Mid-Left) */}
      <motion.div
        animate={{
          x: [-60, 40, -30, -60],
          y: [-20, 60, -40, -20],
          scale: [0.9, 1.2, 1, 0.9],
          opacity: [0.4, 0.65, 0.5, 0.4],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[30%] -left-32 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-emerald-500/12 via-teal-500/10 to-transparent blur-[160px]"
      />

      {/* Aurora Orb 3: Violet / Indigo (Mid-Right to Lower) */}
      <motion.div
        animate={{
          x: [40, -50, 30, 40],
          y: [30, -40, 50, 30],
          scale: [1, 1.18, 0.92, 1],
          opacity: [0.35, 0.6, 0.45, 0.35],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute top-[55%] -right-36 w-[640px] h-[640px] rounded-full bg-gradient-to-bl from-violet-600/12 via-indigo-500/8 to-cyan-500/5 blur-[160px]"
      />

      {/* Aurora Orb 4: Deep Sky (Bottom Center) */}
      <motion.div
        animate={{
          x: [-30, 30, -10, -30],
          y: [-20, 30, -30, -20],
          scale: [0.95, 1.1, 1, 0.95],
          opacity: [0.3, 0.5, 0.35, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
        className="absolute -bottom-40 left-1/3 w-[600px] h-[550px] rounded-full bg-gradient-to-t from-sky-600/10 via-emerald-500/6 to-transparent blur-[150px]"
      />

      {/* High-tech Subtle Grid Overlay with Radial Vignette */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_25%,#000_65%,transparent_100%)] opacity-40" 
      />

      {/* Fine-grain noise/film grain simulation via CSS radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.5)_100%)]" />
    </div>
  );
}
