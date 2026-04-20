import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Code2, 
  Globe2, 
  LineChart, 
  Mail, 
  Menu, 
  MessageSquare, 
  MonitorSmartphone, 
  X, 
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-emerald-500/30">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-emerald-500/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center">
              <span className="text-slate-900 font-bold text-xl leading-none">S</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Sibco Growth Partners</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Process</a>
            <a href="#results" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Results</a>
            <button 
              onClick={scrollToContact}
              className="px-5 py-2.5 rounded-full bg-emerald-500 text-slate-900 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Book Strategy Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-slate-700 py-6 px-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white">Services</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white">Process</a>
            <button onClick={scrollToContact} className="mt-4 px-6 py-3 rounded-lg bg-emerald-500 text-slate-900 font-bold text-center">
              Book Strategy Call
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8">
              <Zap size={14} />
              <span>Digital Growth For Service Businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
              We turn broken websites into <span className="text-emerald-400">client-generating systems.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Stop losing leads to competitors because of a slow, outdated website. We build premium, high-converting digital assets that work 24/7 to grow your bottom line.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="px-8 py-4 rounded-lg bg-emerald-500 text-slate-900 font-bold text-lg hover:bg-emerald-400 flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/20">
                Get Your Free Website Audit <ArrowRight size={20} />
              </button>
              <a href="#services" className="px-8 py-4 rounded-lg border border-slate-700 bg-slate-800 font-semibold text-white hover:bg-slate-700 flex items-center justify-center transition-all">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Social Proof */}
      <section className="py-20 border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your website is your digital storefront. Is it pushing people away?</h2>
              <ul className="space-y-4">
                {[
                  "It takes more than 3 seconds to load on a mobile phone.",
                  "There is no clear, immediate way for them to contact you.",
                  "It looks outdated compared to your newest competitor.",
                  "You get traffic, but no one is actually picking up the phone."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="text-rose-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 border border-emerald-500/20 rounded-2xl p-8 relative shadow-2xl">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-emerald-500 text-slate-900 text-sm font-bold px-4 py-2 rounded-lg transform rotate-3 shadow-lg">
                The Fix
              </div>
              <h3 className="text-xl font-bold text-white mb-4">What we do instead:</h3>
              <ul className="space-y-4">
                {[
                  "Lightning-fast mobile optimization",
                  "Clear, high-converting Call To Actions",
                  "Premium, modern design that builds instant trust",
                  "SEO foundations so people can actually find you"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything you need to scale digitally.</h2>
            <p className="text-lg text-slate-400">We don't just build pretty sites. We build functional growth engines designed specifically for service-based businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group shadow-lg">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <MonitorSmartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Design & Dev</h3>
              <p className="text-slate-400 leading-relaxed">
                Custom, high-performing websites built to convert visitors into paying clients. Fully responsive and brutally fast.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group shadow-lg">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">SEO & Lead Gen</h3>
              <p className="text-slate-400 leading-relaxed">
                We make sure you show up when local customers search for your services on Google, driving warm leads directly to you.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group shadow-lg">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Marketing Automation</h3>
              <p className="text-slate-400 leading-relaxed">
                Stop doing manual follow-ups. We build systems that automatically capture leads and nurture them via email and SMS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to stop losing leads?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Book a free, zero-pressure 15-minute discovery call. We'll audit your current digital presence and show you exactly what we would fix.
          </p>
          <a 
            href="mailto:hello@sibcogrowth.com" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-emerald-500 text-slate-900 font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
          >
            <Mail size={20} /> Let's Talk Strategy
          </a>
          <p className="mt-6 text-sm text-slate-500">Or email us directly: hello@sibcogrowth.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center">
              <span className="text-slate-900 font-bold text-xs">S</span>
            </div>
            <span className="text-white font-bold tracking-tight">Sibco Growth Partners</span>
          </div>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Sibco Growth Partners. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
