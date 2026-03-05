import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="bg-white">
      {/* Glassmorphism Trust Hero Section */}
      <div className="relative min-h-[90vh] bg-[#030712] overflow-hidden flex flex-col justify-center pt-20 pb-16">
        {/* Background Gradients & Noise */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pb-24">
          <div className="space-y-8 animate-fade-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium backdrop-blur-sm mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              The Ultimate Student Hub
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Everything a student needs <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                in one place.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              SIBCOMART provides affordable grocery packs, essential stationery bundles, and expert online tutoring to help you succeed without the stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/grocery"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105"
              >
                Shop Groceries <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/tutoring"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300"
              >
                Book Tutoring
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20 mb-16">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Students studying together"
          className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        />
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tailored for student life
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Grocery Packs</h3>
                <p className="text-gray-500 mb-6">
                  From survival to elite, we have grocery packs designed to fit your budget and keep you fueled.
                </p>
                <Link to="/grocery" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                  View Packs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Stationery</h3>
                <p className="text-gray-500 mb-6">
                  Essential bundles to ensure you're always prepared for lectures, assignments, and exams.
                </p>
                <Link to="/stationery" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                  Shop Stationery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Online Tutoring</h3>
                <p className="text-gray-500 mb-6">
                  Expert help in Mathematics and Accounting. Flexible sessions to fit your schedule.
                </p>
                <Link to="/tutoring" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                  Book a Session <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
