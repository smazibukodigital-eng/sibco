import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { 
  Video, 
  Calendar as CalendarIcon, 
  Check, 
  Loader2, 
  ChevronRight, 
  ChevronLeft, 
  User, 
  Mail, 
  Clock, 
  VideoOff,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

type Platform = 'zoom' | 'teams' | '';

export default function BookStrategy() {
  const [step, setStep] = useState(1);
  const [platform, setPlatform] = useState<Platform>('');
  const [isCalendarConnecting, setIsCalendarConnecting] = useState(false);
  const [isCalendarConnected, setIsCalendarConnected] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM'
  ];

  // Helper to convert 12h time to 24h format for Postgres time type
  const convertTimeTo24h = (time12h: string) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = (parseInt(hours, 10) + 12).toString();
    }
    return `${hours.padStart(2, '0')}:${minutes}:00`;
  };

  const handleConnectCalendar = () => {
    setIsCalendarConnecting(true);
    setTimeout(() => {
      setIsCalendarConnecting(false);
      setIsCalendarConnected(true);
      // Automatically advance step after connection to make it smooth
      setTimeout(() => setStep(3), 800);
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform || !selectedDate || !selectedTime || !formData.name || !formData.email) {
      setErrorMessage('Please complete all steps before submitting.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const formattedTime = convertTimeTo24h(selectedTime);

      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            booking_date: selectedDate,
            booking_time: formattedTime,
            platform: platform,
            calendar_connected: isCalendarConnected
          }
        ]);

      if (error) throw error;
      setStatus('success');
    } catch (err: any) {
      console.error('Error creating booking:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to confirm booking. Please try again.');
    }
  };

  const nextStep = () => {
    if (step === 1 && !platform) return;
    if (step === 3 && (!selectedDate || !selectedTime)) return;
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  return (
    <div className="w-full bg-[#f8fafc] py-20 px-6 flex items-center justify-center min-h-[calc(100vh-104px)]">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header Progress Bar */}
        <div className="w-full bg-slate-100 h-2 flex">
          {[1, 2, 3, 4].map((s) => (
            <div 
              key={s} 
              className={`flex-1 h-full transition-all duration-500 ${
                s <= step ? 'bg-emerald-500' : 'bg-transparent'
              }`}
            />
          ))}
        </div>

        {/* Header Title */}
        <div className="bg-gradient-to-b from-emerald-50/50 to-white pt-12 pb-6 px-8 text-center">
          <p className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-2">Step {step} of 4</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Book a <span className="text-emerald-500">Strategy Call</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
            Design your custom system. Connect your tools and choose a time that works for you.
          </p>
        </div>

        {/* Steps Content */}
        <div className="p-8 md:p-12">
          {status === 'success' ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center flex flex-col items-center justify-center animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Booking Confirmed!</h3>
              <p className="text-slate-600 max-w-md mx-auto mb-6">
                Your strategy call is booked on <strong className="text-slate-800">{selectedDate}</strong> at <strong className="text-slate-800">{selectedTime}</strong> via <strong className="text-slate-800 uppercase">{platform}</strong>.
              </p>
              <p className="text-sm text-slate-500">
                A calendar invitation with the meeting link has been simulated and sent to your email. We'll speak soon!
              </p>
            </div>
          ) : (
            <div>
              {/* STEP 1: Meeting Platform */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-8">Where should we meet?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Zoom Card */}
                    <button
                      type="button"
                      onClick={() => {
                        setPlatform('zoom');
                        setTimeout(nextStep, 300); // Auto advance slightly delayed for click effect
                      }}
                      className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all text-center ${
                        platform === 'zoom' 
                          ? 'border-emerald-500 bg-emerald-50/50 shadow-md shadow-emerald-50' 
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                        platform === 'zoom' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Video size={32} />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Zoom Meetings</h4>
                      <p className="text-xs text-slate-500">Fast, web-based conferencing standard</p>
                    </button>

                    {/* Teams Card */}
                    <button
                      type="button"
                      onClick={() => {
                        setPlatform('teams');
                        setTimeout(nextStep, 300);
                      }}
                      className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all text-center ${
                        platform === 'teams' 
                          ? 'border-emerald-500 bg-emerald-50/50 shadow-md shadow-emerald-50' 
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                        platform === 'teams' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <HelpCircle size={32} /> {/* Using help circle as teams placeholder or multiple video avatars */}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Microsoft Teams</h4>
                      <p className="text-xs text-slate-500">Perfect for enterprise and office integration</p>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Connect Calendar */}
              {step === 2 && (
                <div className="space-y-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Sync your schedule</h3>
                  <p className="text-slate-500 max-w-sm mx-auto text-sm mb-8">
                    Link your calendar so we can automatically verify conflict times and send you a secure calendar event.
                  </p>

                  <div className="max-w-md mx-auto p-8 border border-slate-100 bg-slate-50/50 rounded-2xl flex flex-col items-center">
                    <CalendarIcon className="text-slate-400 w-12 h-12 mb-6" />
                    
                    {isCalendarConnected ? (
                      <div className="flex flex-col items-center gap-2">
                        <span className="flex items-center gap-2 text-emerald-600 font-bold bg-emerald-100/50 px-4 py-2 rounded-full text-sm">
                          <Check size={16} /> Google Calendar Connected
                        </span>
                        <p className="text-xs text-slate-400 mt-2">Checking slots automatically...</p>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={handleConnectCalendar}
                        disabled={isCalendarConnecting}
                        className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
                      >
                        {isCalendarConnecting ? (
                          <>
                            <Loader2 className="animate-spin" size={18} />
                            Connecting Account...
                          </>
                        ) : (
                          <>
                            Connect Google Calendar
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="text-sm font-semibold text-slate-400 hover:text-slate-600 underline block mx-auto mt-4"
                  >
                    Skip calendar setup
                  </button>
                </div>
              )}

              {/* STEP 3: Date & Time Picker */}
              {step === 3 && (
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-6">Select Date & Time</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Date Picker */}
                    <div className="space-y-2">
                      <label htmlFor="date" className="block text-sm font-bold text-slate-700">Choose a Date</label>
                      <input
                        type="date"
                        id="date"
                        required
                        value={selectedDate}
                        min={new Date().toISOString().split('T')[0]} // Block past dates
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-800 font-medium"
                      />
                    </div>

                    {/* Time Picker */}
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">Available Time Slots</label>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-2 rounded-xl text-sm font-bold border transition-all text-center ${
                              selectedTime === time 
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                                : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: User Info Form */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-6">Finalize Your Booking</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700">Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Your name"
                          className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="you@example.com"
                          className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {errorMessage && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={20} />
                          Confirming Call...
                        </>
                      ) : (
                        'Confirm Strategy Call'
                      )}
                    </button>
                  </form>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-1 font-bold text-slate-500 hover:text-slate-800 text-sm"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}
                
                {step < 4 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (step === 1 && !platform) ||
                      (step === 3 && (!selectedDate || !selectedTime))
                    }
                    className="flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
