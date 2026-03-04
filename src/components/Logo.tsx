import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Green Leaf (Left) */}
      <path d="M 38 48 C 38 48, 25 45, 28 38 C 32 30, 42 40, 42 40 C 42 40, 38 42, 38 48 Z" fill="#8CC63F" />
      
      {/* Graduation Cap (Top) */}
      <path d="M 50 30 L 35 38 L 50 46 L 65 38 Z" fill="#2B4162" />
      <path d="M 42 42 L 42 48 C 42 52, 58 52, 58 48 L 58 42 L 50 46 Z" fill="#2B4162" />
      
      {/* Yellow Tassel */}
      <path d="M 50 38 L 39 42 L 39 48" stroke="#FBB03B" strokeWidth="1.5" fill="none" />
      <path d="M 37 48 L 41 48 L 40 52 L 38 52 Z" fill="#FBB03B" />

      {/* Green Pencil (Right) */}
      <path d="M 68 38 L 73 43 L 58 58 L 53 53 Z" fill="#8CC63F" />
      <path d="M 53 53 L 58 58 L 50 60 Z" fill="#FFFFFF" />
      <path d="M 50 60 L 52 58 L 51 57 Z" fill="#2B4162" />

      {/* Shopping Basket (Bottom) */}
      <path d="M 32 48 L 68 48 C 70 48, 71 50, 70 53 L 64 75 C 63 78, 60 80, 57 80 L 43 80 C 40 80, 37 78, 36 75 L 30 53 C 29 50, 30 48, 32 48 Z" fill="#2B4162" />
      
      {/* Basket Slots (White) */}
      <path d="M 41 56 L 43 72" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 50 56 L 50 72" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 59 56 L 57 72" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};
