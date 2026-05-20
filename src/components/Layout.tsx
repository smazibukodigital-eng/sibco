import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When changing routes, scroll to top automatically
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname !== '/') {
      // Navigate to home page then scroll
      e.preventDefault();
      navigate('/' + hash);
    } else {
      // Smooth scroll if already on home page
      setMobileMenuOpen(false);
      if (hash.startsWith('#')) {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans flex flex-col">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/Sibco.svg" alt="Sibco Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-xl tracking-tight leading-none">Sibco <span className="text-emerald-500">Growth</span> Partners</span>
              <span className="text-slate-500 text-[9px] tracking-[0.3em] font-medium uppercase mt-1">Transform. Optimize. Grow.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Why Us</a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-200"
            >
              Contact Us
            </Link>
          </div>

          <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-4">
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-lg font-medium text-slate-700">Services</a>
            <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="text-lg font-medium text-slate-700">Why Us</a>
            <Link to="/contact" className="mt-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-bold text-center">
              Contact Us
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-[104px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/Sibco.svg" alt="Sibco Logo" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold tracking-tight leading-none">Sibco <span className="text-emerald-500">Growth</span> Partners</span>
              <span className="text-slate-500 text-[8px] tracking-[0.3em] font-medium uppercase mt-1">Transform. Optimize. Grow.</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sibco Growth Partners. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
