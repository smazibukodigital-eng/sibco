import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="w-full bg-[#f8fafc] min-h-[calc(100vh-104px)] py-20 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col items-center p-8 md:p-12 text-center">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <img src="/Sibco.svg" alt="Sibco Logo" className="h-8 w-auto" />
          <div className="text-left flex flex-col">
            <span className="text-slate-900 font-bold tracking-tight leading-none">Sibco <span className="text-emerald-500">Growth</span> Partners</span>
            <span className="text-slate-500 text-[8px] tracking-[0.3em] font-medium uppercase mt-1">Transform. Optimize. Grow.</span>
          </div>
        </div>

        {/* Illustration */}
        <div className="max-w-lg w-full mb-8">
          <img 
            src="/images/404_illustration.png" 
            alt="404 - Page Stole" 
            className="w-full h-auto object-contain max-h-[300px] mx-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Oops, looks like <span className="text-emerald-500 font-black">we stole the page.</span>
        </h1>
        
        <p className="text-slate-500 text-base max-w-md mb-8">
          The link you followed might be broken, or the page has been moved. But don't worry, you can easily get back on track.
        </p>

        {/* CTA */}
        <Link
          to="/"
          className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-emerald-100 flex items-center justify-center"
        >
          Go to main page
        </Link>
      </div>
    </div>
  );
}
