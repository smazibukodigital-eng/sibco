import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  BarChart3,
  Mail,
  Menu,
  MonitorSmartphone,
  X,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans">

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">S</span>
            </div>
            <span className="text-slate-900 font-bold text-xl tracking-tight">Sibco Growth Partners</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#why-us" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Why Us</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Contact</a>
            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 rounded-full bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-200"
            >
              Book Strategy Call
            </button>
          </div>

          <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700">Services</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-700">Why Us</a>
            <button onClick={scrollToContact} className="mt-2 px-6 py-3 rounded-lg bg-emerald-500 text-white font-bold text-center">
              Book Strategy Call
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section — full-width image background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src="/images/hero_bg.png"
          alt="Digital agency workspace"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* White overlay so text stays readable */}
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-8">
              <Zap size={14} />
              <span>Digital Growth For Service Businesses</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              We turn broken websites into{' '}
              <span className="text-emerald-500">client-generating systems.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              Stop losing leads to competitors because of a slow, outdated website. We build premium, high-converting digital assets that work 24/7 to grow your bottom line.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-lg bg-emerald-500 text-white font-bold text-lg hover:bg-emerald-600 flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-200"
              >
                Get Your Free Website Audit <ArrowRight size={20} />
              </button>
              <a
                href="#services"
                className="px-8 py-4 rounded-lg border border-gray-300 bg-white/80 font-semibold text-slate-700 hover:bg-white flex items-center justify-center transition-all"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="why-us" className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Your website is your digital storefront. Is it pushing people away?
              </h2>
              <ul className="space-y-4">
                {[
                  "It takes more than 3 seconds to load on a mobile phone.",
                  "There is no clear, immediate way for them to contact you.",
                  "It looks outdated compared to your newest competitor.",
                  "You get traffic, but no one is actually picking up the phone."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="text-rose-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-600 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 relative shadow-xl">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-lg transform rotate-3 shadow-lg">
                The Fix
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">What we do instead:</h3>
              <ul className="space-y-4">
                {[
                  "Lightning-fast mobile optimization",
                  "Clear, high-converting Call To Actions",
                  "Premium, modern design that builds instant trust",
                  "SEO foundations so people can actually find you"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services — with background image */}
      <section id="services" className="relative py-32 overflow-hidden">
        {/* Background image */}
        <img
          src="/images/services_bg.png"
          alt="Digital services"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/88"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Everything you need to scale digitally.</h2>
            <p className="text-lg text-slate-500">We don't just build pretty sites. We build functional growth engines designed for service-based businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MonitorSmartphone size={28} />, title: "Web Design & Dev", desc: "Custom, high-performing websites built to convert visitors into paying clients. Fully responsive and brutally fast." },
              { icon: <BarChart3 size={28} />, title: "SEO & Lead Gen", desc: "We make sure you show up when local customers search for your services on Google, driving warm leads directly to you." },
              { icon: <Zap size={28} />, title: "Marketing Automation", desc: "Stop doing manual follow-ups. We build systems that automatically capture leads and nurture them via email and SMS." }
            ].map((s, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl hover:border-emerald-400 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to stop losing leads?</h2>
          <p className="text-xl text-emerald-50 mb-10">
            Book a free, zero-pressure 15-minute discovery call. We'll audit your current digital presence and show you exactly what we would fix.
          </p>
          <a
            href="mailto:hello@sibcogrowth.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-emerald-600 font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <Mail size={20} /> Let's Talk Strategy
          </a>
          <p className="mt-6 text-sm text-emerald-100">Or email us directly: hello@sibcogrowth.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-slate-900 font-bold tracking-tight">Sibco Growth Partners</span>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sibco Growth Partners. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
