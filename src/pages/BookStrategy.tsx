import React, { useEffect } from 'react';

export default function BookStrategy() {
  useEffect(() => {
    // Cal.com embed initialization script
    (function (C, A, L) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const c = C.Cal = C.Cal || function () {
        const a = c; a.q = a.q || [];
        for (let i = 0; i < arguments.length; i++) { p(a, arguments[i]); }
      };
      c.l = L;
      const s = A.createElement("script");
      s.async = true;
      s.src = "https://app.cal.com/embed/embed.js";
      const js = A.getElementsByTagName("script")[0];
      if (js && js.parentNode) {
        js.parentNode.insertBefore(s, js);
      } else {
        A.head.appendChild(s);
      }
    })(window, document, "https://app.cal.com/embed/embed.js");

    // Initialize Cal and render the inline booking widget
    const initCal = () => {
      if (window.Cal) {
        window.Cal("init", { origin: "https://cal.com" });
        window.Cal("inline", {
          elementOrSelector: "#cal-embed",
          calLink: "sibusiso/15min",
          layout: "month_view",
          config: {
            theme: "light",
            styles: {
              branding: {
                brandColor: "#10b981" // emerald-500 to match Sibco branding
              }
            }
          }
        });
      }
    };

    // If script is already loaded, run init immediately
    if (window.Cal) {
      initCal();
    } else {
      // Otherwise wait for the script to load
      const handleLoad = () => {
        initCal();
      };
      window.addEventListener('load', handleLoad);
      // Fallback timeout in case window load event already fired
      const timer = setTimeout(initCal, 1000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
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

        {/* Cal.com embed container */}
        <div 
          id="cal-embed" 
          className="w-full min-h-[650px] border border-slate-100 rounded-2xl overflow-hidden bg-slate-50"
        ></div>
      </div>
    </div>
  );
}

// Declare Cal interface on window object to prevent TypeScript errors
declare global {
  interface Window {
    Cal?: any;
  }
}
