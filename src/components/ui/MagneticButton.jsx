import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticButton
 * Interactive button with magnetic cursor-following physics and polished glow/scale states.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.2,
  as = 'button',
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * strength;
    const distanceY = (clientY - centerY) * strength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = as === 'a' ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 18, mass: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center transition-shadow duration-300 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
