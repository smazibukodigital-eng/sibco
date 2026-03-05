import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg viewBox="10 10 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Elements */}
      <path d="M 34 33 v 8 c 0 5 7 8 16 8 c 9 0 16 -3 16 -8 v -8 z" fill="#2B4162" />

      <g transform="translate(72, 38) rotate(35)">
        <rect x="-6" y="-12" width="12" height="24" fill="#8CC63F" rx="1.5" />
        <polygon points="-6,12 6,12 0,22" fill="#EAEAEA" />
        <polygon points="-2.5,17.8 2.5,17.8 0,22" fill="#2B4162" />
      </g>

      <g transform="translate(24, 45) rotate(-30)">
        <path d="M 0 0 Q -10 15 -25 0 Q -10 -15 0 0 Z" fill="#8CC63F" />
        <path d="M 0 0 Q -10 2 -23 0" stroke="#FFFFFF" strokeWidth="1.5" />
      </g>

      {/* Cap & Tassel */}
      <path d="M 50 16 L 20 28 L 50 40 L 80 28 Z" fill="#2B4162" />

      <line x1="28" y1="31" x2="28" y2="39" stroke="#FBB03B" strokeWidth="2" />
      <polygon points="28,38 23,45 33,45" fill="#FBB03B" />
      <circle cx="28" cy="31" r="1.5" fill="#FBB03B" />

      {/* Basket Base */}
      <path d="M 24 51 L 30 78 Q 31 82 35 82 L 65 82 Q 69 82 70 78 L 76 51 Z" fill="#2B4162" />
      <rect x="18" y="46" width="64" height="6" rx="3" fill="#2B4162" />

      {/* Basket Slots */}
      <line x1="34" y1="56" x2="36" y2="74" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="50" y1="56" x2="50" y2="74" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="66" y1="56" x2="64" y2="74" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
};
