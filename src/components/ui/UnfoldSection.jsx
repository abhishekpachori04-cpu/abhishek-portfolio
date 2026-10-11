import React from 'react';
import { motion } from 'framer-motion';

/**
 * UnfoldSection
 * Apple-tier 3D perspective scroll reveal that unfolds content into 3D view on scroll.
 */
export default function UnfoldSection({
  children,
  className = '',
  id,
  ...props
}) {
  return (
    <div style={{ perspective: 1000 }} className="w-full">
      <motion.section
        id={id}
        initial={{ rotateX: 15, scale: 0.9, opacity: 0, y: 80 }}
        whileInView={{ rotateX: 0, scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 20,
          mass: 1,
        }}
        style={{ transformOrigin: 'top center' }}
        className={`relative ${className}`}
        {...props}
      >
        {children}
      </motion.section>
    </div>
  );
}
