import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Award } from 'lucide-react';

/**
 * Modular CertificateCard component rendering credentials and certifications.
 */
export default function CertificateCard({ cert }) {
  const [imgError, setImgError] = useState(false);

  if (!cert) return null;

  return (
    <div className="w-[320px] md:w-[350px] flex-shrink-0 snap-start bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 group backdrop-blur-sm select-none">
      <div>
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-800/50 border border-zinc-700/40 mb-4 flex items-center justify-center p-3 shadow-inner">
          {imgError || !cert.image ? (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-950/60 via-zinc-900 to-sky-950/50 border border-sky-500/20 flex flex-col items-center justify-center gap-1.5 p-3 text-center">
              <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-inner group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider line-clamp-1">
                {cert.issuer}
              </span>
              <span className="text-[10px] font-mono text-sky-400/80">
                Verified Credential
              </span>
            </div>
          ) : (
            <img
              src={cert.image}
              alt={cert.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          )}
        </div>

        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-semibold text-sky-400 flex items-center gap-1.5 truncate">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">{cert.issuer}</span>
          </span>
          <span className="font-mono text-[11px] font-semibold text-slate-400 bg-zinc-950/80 border border-zinc-800 px-2 py-0.5 rounded-md shrink-0">
            {cert.year}
          </span>
        </div>

        <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors leading-snug line-clamp-2 mb-1.5 min-h-[44px]">
          {cert.title}
        </h3>

        <p className="text-xs text-zinc-500 font-mono mb-3 truncate">
          {cert.credentialId ? `ID: ${cert.credentialId}` : 'ID: Verified Credential'}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {cert.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-zinc-950/70 border border-zinc-800/90 text-slate-300 text-[11px] font-mono px-2.5 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-3.5 border-t border-zinc-800/80 mt-auto">
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify credential for ${cert.title}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group/link"
        >
          <span>Verify Credential</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
