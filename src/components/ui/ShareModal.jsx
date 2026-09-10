import React from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../../data/portfolioData';
import { useClipboard } from '../../hooks/useClipboard';

export default function ShareModal({ isOpen, onClose }) {
  const { hasCopied, copy } = useClipboard();

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://abhishekpachori.dev';

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=600');
  };

  const shareToTwitter = () => {
    const text = `Check out ${personalInfo.name}'s portfolio - ${personalInfo.role}:`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=600');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className="bg-[#0e1628] border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl shadow-black/80 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close share dialog"
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-sky-950/60 border border-sky-500/20 text-sky-400">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Share Portfolio</h3>
            <p className="text-xs text-slate-400">Share Abhishek's work with recruiters and colleagues</p>
          </div>
        </div>

        <div className="bg-[#080d17] border border-slate-800 rounded-xl p-2.5 flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono text-slate-300 truncate px-1">
            {currentUrl}
          </span>
          <button
            onClick={() => copy(currentUrl)}
            aria-label="Copy portfolio URL"
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0"
          >
            {hasCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{hasCopied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={shareToLinkedIn}
            aria-label="Share on LinkedIn"
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#111c30] border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-medium transition-all"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span>LinkedIn</span>
          </button>

          <button
            onClick={shareToTwitter}
            aria-label="Share on Twitter / X"
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#111c30] border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-medium transition-all"
          >
            <TwitterIcon className="w-4 h-4 text-sky-400" />
            <span>Twitter / X</span>
          </button>
        </div>
      </div>
    </div>
  );
}
