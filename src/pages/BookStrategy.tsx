import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function BookStrategy() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({});
        cal("ui", {
          theme: "light",
          styles: {
            branding: {
              brandColor: "#10b981" // emerald-500 matching Sibco branding
            }
          },
          hideEventTypeDetails: false,
          layout: "month_view"
        });
      } catch (err) {
        console.error("Failed to initialize Cal.com Embed API:", err);
      }
    })();
  }, []);

  return (
    <div className="w-full bg-[#f8fafc] py-16 px-6 min-h-[calc(100vh-104px)] flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-6 md:p-10">
        <div className="text-center mb-8">
          <p className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-2">Strategy Session</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Book your <span className="text-emerald-500">15-Minute Strategy Call</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
            Select a date and time below to lock in your slot. Cal.com will sync this directly to your Google Calendar and send the details automatically.
          </p>
        </div>

        {/* Cal.com embed using official React component */}
        <div className="w-full h-[700px]">
          <Cal
            calLink="sibusiso/15min"
            style={{ width: "100%", height: "100%" }}
            config={{ layout: 'month_view' }}
          />
        </div>
      </div>
    </div>
  );
}
