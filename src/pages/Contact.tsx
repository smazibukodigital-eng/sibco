import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <p className="text-lg text-gray-600 mb-8 text-center">
              Have questions? We'd love to hear from you. Reach out to us using the contact information below.
            </p>

            <div className="space-y-8">
              {/* Email Section */}
              <div className="flex items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white">
                    <Mail className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a href="mailto:admin@sibcomart.co.za" className="mt-2 text-xl text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                    admin@sibcomart.co.za
                  </a>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white">
                    <Phone className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <div className="mt-2 flex flex-col space-y-2">
                    <a href="tel:0738731950" className="text-xl text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                      073 873 1950
                    </a>
                    <a href="tel:0692615862" className="text-xl text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                      069 261 5862
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center text-gray-500 text-sm">
              We aim to respond to all inquiries within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
