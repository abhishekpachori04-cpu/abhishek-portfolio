import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * SpotlightCard
 * Awwwards-standard Bento Card with interactive mouse spotlight illumination
 * and optional physics-based 3D tilt on hover.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(56, 189, 248, 0.14)',
  borderColor = 'rgba(56, 189, 248, 0.35)',
  enableTilt = false,
  tiltMax = 6,
  as: Component = 'article',
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -tiltMax;
      const rotateY = ((x - centerX) / centerX) * tiltMax;
      setTilt({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (enableTilt) {
      setTilt({ x: 0, y: 0 });
    }
  };

  const MotionComponent = motion[Component] || motion.article;

  return (
    <MotionComponent
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={
        enableTilt
          ? {
              rotateX: tilt.x,
              rotateY: tilt.y,
            }
          : undefined
      }
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
      style={{
        transformStyle: enableTilt ? 'preserve-3d' : undefined,
        perspective: enableTilt ? 1000 : undefined,
      }}
      className={`relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 ${className}`}
      {...props}
    >
      {/* Background Spotlight Radial Gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 ease-out"
        style={{
          opacity,
          background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Border Spotlight effect on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ease-out"
        style={{
          opacity,
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
          background: `radial-gradient(320px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div 
        className="relative z-10 h-full flex flex-col justify-between"
        style={{
          transform: enableTilt ? 'translateZ(15px)' : undefined,
        }}
      >
        {children}
      </div>
    </MotionComponent>
  );
}
