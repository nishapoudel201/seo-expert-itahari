import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 1600; // 1.6s theatrical loading animation
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out cubic: 1 - pow(1 - progress, 3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * 100);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 650); // Matches slide-up exit duration
        }, 200);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#fffafc] text-slate-900 select-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full opacity-90' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Background Soft Baby Pink Glow */}
      <div 
        className="absolute w-[320px] h-[320px] sm:w-[560px] sm:h-[560px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.35) 0%, rgba(253, 232, 239, 0.5) 45%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />

      {/* Main Counter & Brand Reveal */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        
        {/* Profile Avatar Badge on Preloader */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-pink-400 to-rose-300 shadow-[0_0_25px_rgba(244,114,182,0.4)]">
          <img 
            src="/images/seo-consultant-profile.jpg" 
            alt="SEO Consultant Profile" 
            className="w-full h-full rounded-full object-cover object-top"
          />
        </div>

        {/* Giant Numeric Counter in Baby Pink Theme */}
        <div className="font-mono text-7xl sm:text-9xl md:text-[11rem] font-black tracking-tighter text-slate-900 tabular-nums">
          {count}
          <span className="text-3xl sm:text-5xl md:text-6xl text-pink-500 font-light ml-1">%</span>
        </div>

        {/* Brand & Location Label */}
        <div className="space-y-1.5 transition-opacity duration-500">
          <div className="font-heading text-sm sm:text-base md:text-lg font-bold tracking-[0.3em] uppercase text-slate-900">
            SEO Expert in Itahari
          </div>
          <p className="font-mono text-xs sm:text-xs text-pink-600 tracking-[0.25em] uppercase font-semibold">
            Sunsari • Koshi Province • Nepal
          </p>
        </div>

        {/* Baby Pink Loading Progress Bar Track */}
        <div className="w-56 sm:w-80 h-[4px] bg-pink-100 rounded-full overflow-hidden mt-2 relative border border-pink-200/50">
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_#f472b6]"
            style={{ width: `${count}%` }}
          />
        </div>

        {/* Skip button */}
        <button
          onClick={() => {
            setIsExiting(true);
            setTimeout(onComplete, 300);
          }}
          className="mt-4 text-[11px] font-mono tracking-widest uppercase text-slate-400 hover:text-pink-600 transition-colors cursor-pointer"
        >
          [ Skip Intro &rarr; ]
        </button>
      </div>
    </div>
  );
};
