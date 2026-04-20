import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-indigo-500/30">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">S</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Sibco Growth Partners</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-white transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium hover:text-white transition-colors">Process</a>
            <a href="#results" className="text-sm font-medium hover:text-white transition-colors">Results</a>
            <button 
              onClick={scrollToContact}
              className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-indigo-50 transition-colors"
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
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 py-6 px-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Process</a>
            <button onClick={scrollToContact} className="mt-4 px-6 py-3 rounded-lg bg-white text-black font-bold text-center">
              Book Strategy Call
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8"
            >
              <Zap size={14} />
              <span>Digital Growth For Service Businesses</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              We turn broken websites into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">client-generating systems.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
            >
              Stop losing leads to competitors because of a slow, outdated website. We build premium, high-converting digital assets that work 24/7 to grow your bottom line.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button onClick={scrollToContact} className="px-8 py-4 rounded-lg bg-white text-black font-bold text-lg hover:bg-slate-100 flex items-center justify-center gap-2 transition-all">
                Get Your Free Website Audit <ArrowRight size={20} />
              </button>
              <a href="#services" className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 font-semibold text-white hover:bg-white/10 flex items-center justify-center transition-all">
                View Our Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem / Social Proof */}
      <section className="py-20 border-y border-white/5 bg-[#0a0a0a]">
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
                    <X className="text-red-400 shrink-0 mt-1" size={20} />
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-lg transform rotate-3">
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
                    <CheckCircle2 className="text-green-400 shrink-0 mt-1" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything you need to scale digitally.</h2>
            <p className="text-lg text-slate-400">We don't just build pretty sites. We build functional growth engines designed specifically for service-based businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <MonitorSmartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Design & Dev</h3>
              <p className="text-slate-400 leading-relaxed">
                Custom, high-performing websites built to convert visitors into paying clients. Fully responsive and brutally fast.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 transition-colors group">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">SEO & Lead Gen</h3>
              <p className="text-slate-400 leading-relaxed">
                We make sure you show up when local customers search for your services on Google, driving warm leads directly to you.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
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
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to stop losing leads?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Book a free, zero-pressure 15-minute discovery call. We'll audit your current digital presence and show you exactly what we would fix.
          </p>
          <a 
            href="mailto:hello@sibcogrowth.com" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-1"
          >
            <Mail size={20} /> Let's Talk Strategy
          </a>
          <p className="mt-6 text-sm text-slate-500">Or email us directly: hello@sibcogrowth.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
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
