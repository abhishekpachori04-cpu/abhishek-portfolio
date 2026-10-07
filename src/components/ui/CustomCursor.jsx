import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const spotlightRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      return;
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isVisible = false;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
        if (dotRef.current) dotRef.current.style.opacity = '0.9';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (spotlightRef.current) spotlightRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const updateLoop = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      if (spotlightRef.current && isVisible) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.06), transparent 80%)`;
      }

      if (dotRef.current && isVisible) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current && isVisible) {
        ringRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
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
    <div aria-hidden="true">
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-0"
        style={{ willChange: 'background, opacity' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 rounded-full mix-blend-screen opacity-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 80%)',
          boxShadow: '0 0 16px rgba(56, 189, 248, 0.25)',
          willChange: 'transform, opacity',
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 transition-opacity duration-150"
        style={{
          boxShadow: '0 0 8px #38bdf8',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  );
}
