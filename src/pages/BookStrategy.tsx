import React, { useEffect, useState, useRef } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function BookStrategy() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Monitor when the Cal.com iframe is fully loaded
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkIframe = setInterval(() => {
      const iframe = container.querySelector('iframe');
      if (iframe) {
        clearInterval(checkIframe);
        
        // Listen for iframe load event
        iframe.onload = () => {
          setIsLoading(false);
        };

        // Fallback in case it loaded before listener was attached
        if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
          setIsLoading(false);
        }
      }
    }, 100);

    // Safety fallback: hide skeleton after 4 seconds maximum
    const fallback = setTimeout(() => {
      clearInterval(checkIframe);
      setIsLoading(false);
    }, 4000);

    return () => {
      clearInterval(checkIframe);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="w-full bg-[#f8fafc] py-16 px-6 min-h-[calc(100vh-104px)] flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10">
        <div className="text-center mb-8">
          <p className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-2">Strategy Session</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Book your <span className="text-emerald-500">15-Minute Strategy Call</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
            Select a date and time below to lock in your slot. Cal.com will sync this directly to your Google Calendar and send the details automatically.
          </p>
        </div>

        {/* Cal.com embed container - optimized with loading state and dynamic height for mobile layout */}
        <div ref={containerRef} className="w-full h-[980px] md:h-[700px] relative overflow-y-auto">
          {isLoading && (
            <div className="absolute inset-0 bg-white z-10 flex flex-col justify-between animate-pulse p-4">
              {/* Top skeleton bar */}
              <div className="flex justify-between items-center mb-6">
                <div className="h-6 w-32 bg-slate-200 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-6 bg-slate-200 rounded-full"></div>
                  <div className="h-6 w-6 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              
              {/* Body skeleton structure */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left event details panel */}
                <div className="space-y-4">
                  <div className="h-8 w-48 bg-slate-200 rounded"></div>
                  <div className="h-4 w-24 bg-slate-200 rounded"></div>
                  <div className="h-4 w-32 bg-slate-200 rounded"></div>
                </div>
                
                {/* Calendar grid panel */}
                <div className="col-span-2 space-y-6">
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="h-4 w-8 bg-slate-200 rounded mx-auto"></div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2 flex-1">
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div key={i} className="aspect-square bg-slate-100 rounded-full flex items-center justify-center max-w-[45px] mx-auto w-full">
                        <div className="h-4 w-4 bg-slate-200 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

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
