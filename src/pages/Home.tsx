import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Everything a student needs</span>{' '}
                  <span className="block text-blue-200">in one place</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  SIBCOMART provides affordable grocery packs, essential stationery bundles, and expert online tutoring to help you succeed.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/grocery"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Shop Groceries
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/tutoring"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                    >
                      Book Tutoring
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-80"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Students studying together"
            referrerPolicy="no-referrer"
          />
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
