import React, { useState } from 'react';
import { tutoringSessions } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Calendar as CalendarIcon, Clock, BookOpen } from 'lucide-react';

export const Tutoring = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('Mathematics');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const subjects = ['Mathematics', 'Accounting'];
  const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Online Tutoring</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Expert guidance in Mathematics and Accounting to help you achieve your academic goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CalendarIcon className="w-6 h-6 mr-2 text-blue-600" />
              Check Availability
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Subject</label>
                <div className="flex space-x-4">
                  {subjects.map(subject => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedSubject === subject
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Times</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {times.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 flex items-start">
                <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  After booking a session below, our team will contact you to confirm your selected time slot ({selectedDate ? `${selectedDate} at ` : ''}{selectedTime || 'time pending'}) for {selectedSubject}.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Clock className="w-6 h-6 mr-2 text-blue-600" />
            Pricing Plans
          </h2>
          <div className="space-y-6">
            {tutoringSessions.map((session) => (
              <ProductCard key={session.id} product={session} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
