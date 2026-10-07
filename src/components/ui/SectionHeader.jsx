import React from 'react';

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = 'left',
  rightAction,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 ${
        isCenter
          ? 'text-center max-w-2xl mx-auto'
          : rightAction
            ? 'flex flex-col sm:flex-row sm:items-end justify-between gap-4'
            : 'space-y-2'
      } ${className}`}
    >
      <div className={isCenter ? 'space-y-2' : rightAction ? 'space-y-2' : ''}>
        {badge && (
          <div className={`mb-3 ${isCenter ? 'flex justify-center' : ''}`}>
            {badge}
          </div>
        )}

        <h2 className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
          <span>{title}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400/80 animate-pulse" aria-hidden="true" />
        </h2>

        {subtitle && (
          <p className={`text-sm text-slate-400 leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
            {subtitle}
          </p>
        )}
      </div>

      {rightAction && (
        <div className="shrink-0 self-start sm:self-auto">
          {rightAction}
        </div>
      )}
    </div>
  );
}
