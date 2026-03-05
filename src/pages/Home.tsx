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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="text-left space-y-8 max-w-2xl max-lg:mx-auto max-lg:text-center animate-fade-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium backdrop-blur-sm">
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

              <p className="text-lg sm:text-xl text-gray-300 max-w-xl max-lg:mx-auto leading-relaxed">
                SIBCOMART provides affordable grocery packs, essential stationery bundles, and expert online tutoring to help you succeed without the stress.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-lg:justify-center pt-4">
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

              {/* Trusted By Grid */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 font-medium mb-4 uppercase tracking-wider">Trusted by students from</p>
                <div className="flex flex-wrap gap-6 items-center max-lg:justify-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="flex items-center gap-2 text-white font-bold text-xl"><GraduationCap className="w-6 h-6" /> UCT</div>
                  <div className="flex items-center gap-2 text-white font-bold text-xl"><BookOpen className="w-6 h-6" /> WITS</div>
                  <div className="flex items-center gap-2 text-white font-bold text-xl"><ShoppingBag className="w-6 h-6" /> UJ</div>
                  <div className="flex items-center gap-2 text-white font-bold text-xl"><GraduationCap className="w-6 h-6" /> UP</div>
                </div>
              </div>
            </div>

            {/* Right Content - Glassmorphism Stats Card */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-2xl overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <h3 className="text-2xl font-bold text-white mb-8">Platform Impact</h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Students Helped</p>
                        <p className="text-xl font-bold text-white">5,000+</p>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm font-medium flex items-center bg-green-400/10 px-2 py-1 rounded">
                      +12% this month
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Groceries Delivered</p>
                        <p className="text-xl font-bold text-white">12,400</p>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm font-medium flex items-center bg-green-400/10 px-2 py-1 rounded">
                      Fast Delivery
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Tutoring Hours</p>
                        <p className="text-xl font-bold text-white">10,000+</p>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm font-medium flex items-center bg-green-400/10 px-2 py-1 rounded">
                      Top Rated
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-[#030712]" src="https://i.pravatar.cc/100?img=1" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-[#030712]" src="https://i.pravatar.cc/100?img=2" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-[#030712]" src="https://i.pravatar.cc/100?img=3" alt="User" />
                    <div className="w-10 h-10 rounded-full border-2 border-[#030712] bg-white/10 backdrop-blur-sm flex items-center justify-center text-xs text-white font-medium">+1k</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-400">
                      {'★★★★★'.split('').map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">From 400+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
