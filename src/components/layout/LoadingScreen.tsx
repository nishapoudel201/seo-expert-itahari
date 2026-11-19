import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fast initial count then smooth slowdown towards 100
    let start = 0;
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
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#090b0e] text-white select-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full opacity-90' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Background radial glow */}
      <div 
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(249, 115, 22, 0.15) 50%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Main Counter & Brand Reveal */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Giant Numeric Counter */}
        <div className="font-mono text-7xl sm:text-9xl md:text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-500 tabular-nums">
          {count}
          <span className="text-3xl sm:text-5xl md:text-6xl text-emerald-400 font-light ml-1">%</span>
        </div>

        {/* Brand & Location Label */}
        <div className="space-y-1.5 transition-opacity duration-500">
          <div className="font-heading text-sm sm:text-base md:text-lg font-bold tracking-[0.3em] uppercase text-slate-200">
            SEO Expert in Itahari
          </div>
          <p className="font-mono text-xs sm:text-xs text-emerald-400 tracking-[0.25em] uppercase font-medium">
            Sunsari • Koshi Province • Nepal
          </p>
        </div>

        {/* Loading Progress Bar Track */}
        <div className="w-56 sm:w-80 h-[3px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_#34d399]"
            style={{ width: `${count}%` }}
          />
        </div>

        {/* Skip button for returning visitors */}
        <button
          onClick={() => {
            setIsExiting(true);
            setTimeout(onComplete, 300);
          }}
          className="mt-4 text-[11px] font-mono tracking-widest uppercase text-slate-500 hover:text-white transition-colors cursor-pointer"
        >
          [ Skip Intro &rarr; ]
        </button>
      </div>
    </div>
  );
};
