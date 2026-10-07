import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import CertificateCard from '../ui/CertificateCard';
import { certificatesData } from '../../data/portfolioData';

export default function Certificates() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === 'left' ? -360 : 360;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="certificates" className="py-20 border-t border-slate-800/60 relative scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Certificates & Learning"
          subtitle="Industry-recognized technical certifications, hands-on workshops, and specialized course achievements."
          rightAction={
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-slate-300 hover:text-white hover:border-blue-500/40 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                title="Previous certificates"
                aria-label="Scroll certificates left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-slate-300 hover:text-white hover:border-blue-500/40 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                title="Next certificates"
                aria-label="Scroll certificates right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          }
        />

        <div
          ref={sliderRef}
          role="region"
          aria-label="Certificates and credentials list"
          tabIndex={0}
          className="flex gap-5 overflow-x-auto pb-6 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl"
        >
          {certificatesData.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>

      </div>
    </section>
  );
}
