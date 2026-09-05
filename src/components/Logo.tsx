import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const heightClass = size === 'sm' ? 'h-8' : size === 'lg' ? 'h-14' : 'h-10';

  return (
    <div className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${className}`}>
      {/* Icon Graphic */}
      <svg
        viewBox="0 0 200 160"
        className={`${heightClass} w-auto transition-transform duration-300 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F39A1F" />
            <stop offset="50%" stopColor="#E8B63D" />
            <stop offset="100%" stopColor="#F39A1F" />
          </linearGradient>
          <linearGradient id="sofaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B07A45" />
            <stop offset="100%" stopColor="#8A5A2B" />
          </linearGradient>
          <linearGradient id="goldTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8B63D" />
            <stop offset="100%" stopColor="#F39A1F" />
          </linearGradient>
        </defs>

        {/* House Roof Icon */}
        <path
          d="M20 70 L100 15 L180 70"
          stroke="url(#roofGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Hanging Ceiling Lamp */}
        <path d="M100 22 L100 35" stroke="#E8B63D" strokeWidth="4" />
        <path d="M90 35 L110 35 L105 48 L95 48 Z" fill="#F39A1F" rx="2" />

        {/* Armchair / Sofa Center */}
        <rect x="52" y="65" width="80" height="38" rx="8" fill="url(#sofaGradient)" />
        {/* Armrests */}
        <rect x="42" y="70" width="16" height="36" rx="6" fill="#8A5A2B" />
        <rect x="126" y="70" width="16" height="36" rx="6" fill="#8A5A2B" />
        {/* Cushion line */}
        <line x1="92" y1="75" x2="92" y2="98" stroke="#5C4033" strokeWidth="2" strokeDasharray="2 2" />

        {/* Side Table & Lamp */}
        <rect x="146" y="80" width="22" height="18" rx="3" fill="url(#sofaGradient)" />
        <rect x="155" y="98" width="4" height="12" fill="#5C4033" />
        {/* Lamp stem & shade */}
        <path d="M157 70 L157 80" stroke="#E8B63D" strokeWidth="3" />
        <path d="M152 70 L162 70 L160 60 L154 60 Z" fill="#F39A1F" />
      </svg>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex items-baseline font-extrabold tracking-tight">
          <span className="text-[#8A5A2B] text-2xl sm:text-3xl font-serif leading-none italic mr-0.5">
            i
          </span>
          <span className="bg-gradient-to-r from-[#E8B63D] via-[#F39A1F] to-[#E8B63D] bg-clip-text text-transparent text-2xl sm:text-3xl font-sans tracking-wide uppercase drop-shadow-sm">
            Furnish
          </span>
        </div>
      )}
    </div>
  );
};
