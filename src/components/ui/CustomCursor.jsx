import React, { useEffect, useRef } from 'react';

/**
 * CustomCursor
 * Minimalist high-end animated cursor with fluid lag ring and interactive element expansion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices or fine pointer unavailable
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHoveringInteractive = false;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = Boolean(
        target && (
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-hover')
        )
      );

      if (isInteractive !== isHoveringInteractive) {
        isHoveringInteractive = isInteractive;
        if (ringRef.current) {
          if (isHoveringInteractive) {
            ringRef.current.classList.add('cursor-expanded');
          } else {
            ringRef.current.classList.remove('cursor-expanded');
          }
        }
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const updateLoop = () => {
      // Smooth lerp for trailing ring
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (dotRef.current && isVisible) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current && isVisible) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Trailing Smooth Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-sky-400/50 mix-blend-screen opacity-0 transition-[width,height,border-color,background-color,scale] duration-300 ease-out will-change-transform"
        style={{
          boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
        }}
      />
      {/* Inner Pinpoint Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 transition-opacity duration-150 will-change-transform"
        style={{
          boxShadow: '0 0 10px #38bdf8',
        }}
      />

      <style>{`
        .cursor-expanded {
          width: 52px !important;
          height: 52px !important;
          background-color: rgba(56, 189, 248, 0.08) !important;
          border-color: rgba(56, 189, 248, 0.8) !important;
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.35) !important;
        }
      `}</style>
    </div>
  );
}
