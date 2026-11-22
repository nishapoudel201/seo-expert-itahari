import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isPopped, setIsPopped] = useState(false);

  useEffect(() => {
    // Stage 1: Trigger the lively butterfly pop-up immediately on mount
    const popTimer = setTimeout(() => {
      setIsPopped(true);
    }, 40);

    // Stage 2: Quick theatrical sequence (~1.1s total, then quick curtain lift)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1100);

    // Stage 3: Complete transition and reveal website smoothly
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1550);

    return () => {
      clearTimeout(popTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleSkip = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsExiting(true);
    setTimeout(onComplete, 250);
  };

  return (
    <div
      onClick={() => handleSkip()}
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#fffafc] text-slate-900 select-none cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      title="Click anywhere to open instantly"
    >
      {/* Soft Ambient Baby Pink Glowing Halo */}
      <div
        className={`absolute w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full pointer-events-none transition-all duration-700 ease-out ${
          isPopped ? 'scale-100 opacity-60' : 'scale-50 opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.45) 0%, rgba(253, 232, 239, 0.6) 40%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Radiant Ripple Waves Expanding from Butterfly Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className={`w-32 h-32 rounded-full border border-pink-300/60 transition-all duration-1000 ease-out ${
            isPopped ? 'scale-[3.2] opacity-0' : 'scale-75 opacity-80'
          }`}
        />
        <div
          className={`w-24 h-24 rounded-full border border-pink-400/40 transition-all duration-1000 delay-150 ease-out ${
            isPopped ? 'scale-[4] opacity-0' : 'scale-50 opacity-90'
          }`}
        />
      </div>

      {/* Floating Sparkle Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[28%] left-[26%] sm:left-[35%] text-pink-400 text-lg animate-pulse duration-700">✦</span>
        <span className="absolute top-[32%] right-[24%] sm:right-[34%] text-rose-300 text-sm animate-ping duration-1000">✦</span>
        <span className="absolute bottom-[34%] left-[28%] sm:left-[36%] text-pink-300 text-xs animate-bounce duration-1000">✦</span>
        <span className="absolute bottom-[36%] right-[26%] sm:right-[36%] text-pink-400 text-sm animate-pulse duration-500">✦</span>
      </div>

      {/* Main Content: Butterfly + Luxury Brand Typography */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Avatar Capsule Pill with Baby Pink Ring */}
        <div
          className={`mb-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 shadow-[0_4px_20px_rgba(244,114,182,0.25)] transition-all duration-500 ${
            isPopped ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-90'
          }`}
        >
          <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-pink-400/80 shadow-xs">
            <img
              src="/images/seo-consultant-profile.jpg"
              alt="Nisha Poudel"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-800 uppercase pr-1">
            Nisha Poudel
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
        </div>

        {/* 3D Fluttering Butterfly Mascot */}
        <div
          className={`relative transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isPopped ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-6'
          } ${isExiting ? '-translate-y-16 scale-110 opacity-0' : ''}`}
        >
          {/* Subtle Glow behind the wings */}
          <div className="absolute inset-0 bg-pink-400/20 blur-xl rounded-full scale-125 pointer-events-none" />

          {/* Butterfly Body and Wings Structure with 3D Perspective */}
          <div className="relative w-44 h-36 flex items-center justify-center [perspective:1000px] select-none">
            
            {/* Left Wings Group */}
            <div 
              className="absolute right-1/2 top-0 w-24 h-36 origin-right transition-transform"
              style={{
                animation: 'butterflyFlapLeft 0.28s ease-in-out infinite alternate',
                transformStyle: 'preserve-3d',
              }}
            >
              <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_8px_16px_rgba(244,114,182,0.4)]">
                <defs>
                  <linearGradient id="leftForewingGrad" x1="100%" y1="50%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.95" />
                    <stop offset="40%" stopColor="#f472b6" stopOpacity="0.9" />
                    <stop offset="80%" stopColor="#fbcfe8" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.98" />
                  </linearGradient>
                  <linearGradient id="leftHindwingGrad" x1="100%" y1="20%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#f472b6" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#fce7f3" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Forewing (Upper Left) */}
                <path
                  d="M96 68 C88 50 68 22 42 10 C20 -1 6 12 12 34 C16 48 30 62 62 70 C78 74 92 72 96 68 Z"
                  fill="url(#leftForewingGrad)"
                  stroke="#f472b6"
                  strokeWidth="1.2"
                />

                {/* Forewing Delicate Interior Vein Filaments */}
                <path
                  d="M96 68 C74 52 50 36 32 24 M96 68 C68 60 40 50 24 44 M96 68 C76 68 54 66 38 64"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.75"
                />

                {/* Forewing Accent Edge Glow Dots */}
                <circle cx="22" cy="18" r="2.2" fill="#ffffff" opacity="0.9" />
                <circle cx="14" cy="28" r="1.8" fill="#ffffff" opacity="0.85" />
                <circle cx="15" cy="40" r="1.8" fill="#ffffff" opacity="0.8" />

                {/* Hindwing (Lower Left) */}
                <path
                  d="M94 72 C85 75 66 78 44 86 C24 94 20 114 36 128 C52 140 76 130 88 104 C94 92 95 80 94 72 Z"
                  fill="url(#leftHindwingGrad)"
                  stroke="#fb7185"
                  strokeWidth="1.2"
                />

                {/* Hindwing Interior Veins */}
                <path
                  d="M94 76 C72 88 52 104 42 120 M94 76 C78 98 64 116 54 126"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  opacity="0.7"
                />

                {/* Hindwing Accent Spot */}
                <circle cx="48" cy="116" r="3" fill="#f43f5e" opacity="0.6" />
                <circle cx="48" cy="116" r="1.5" fill="#ffffff" opacity="0.95" />
              </svg>
            </div>

            {/* Right Wings Group (Symmetrical Mirror) */}
            <div 
              className="absolute left-1/2 top-0 w-24 h-36 origin-left transition-transform"
              style={{
                animation: 'butterflyFlapRight 0.28s ease-in-out infinite alternate',
                transformStyle: 'preserve-3d',
              }}
            >
              <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_8px_16px_rgba(244,114,182,0.4)]">
                <defs>
                  <linearGradient id="rightForewingGrad" x1="0%" y1="50%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.95" />
                    <stop offset="40%" stopColor="#f472b6" stopOpacity="0.9" />
                    <stop offset="80%" stopColor="#fbcfe8" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.98" />
                  </linearGradient>
                  <linearGradient id="rightHindwingGrad" x1="0%" y1="20%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#f472b6" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#fce7f3" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Forewing (Upper Right) */}
                <path
                  d="M4 68 C12 50 32 22 58 10 C80 -1 94 12 88 34 C84 48 70 62 38 70 C22 74 8 72 4 68 Z"
                  fill="url(#rightForewingGrad)"
                  stroke="#f472b6"
                  strokeWidth="1.2"
                />

                {/* Forewing Interior Veins */}
                <path
                  d="M4 68 C26 52 50 36 68 24 M4 68 C32 60 60 50 76 44 M4 68 C24 68 46 66 62 64"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.75"
                />

                {/* Forewing Accent Edge Glow Dots */}
                <circle cx="78" cy="18" r="2.2" fill="#ffffff" opacity="0.9" />
                <circle cx="86" cy="28" r="1.8" fill="#ffffff" opacity="0.85" />
                <circle cx="85" cy="40" r="1.8" fill="#ffffff" opacity="0.8" />

                {/* Hindwing (Lower Right) */}
                <path
                  d="M6 72 C15 75 34 78 56 86 C76 94 80 114 64 128 C48 140 24 130 12 104 C6 92 5 80 6 72 Z"
                  fill="url(#rightHindwingGrad)"
                  stroke="#fb7185"
                  strokeWidth="1.2"
                />

                {/* Hindwing Interior Veins */}
                <path
                  d="M6 76 C28 88 48 104 58 120 M6 76 C22 98 36 116 46 126"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  opacity="0.7"
                />

                {/* Hindwing Accent Spot */}
                <circle cx="52" cy="116" r="3" fill="#f43f5e" opacity="0.6" />
                <circle cx="52" cy="116" r="1.5" fill="#ffffff" opacity="0.95" />
              </svg>
            </div>

            {/* Butterfly Center Body & Delicate Antennae */}
            <div className="absolute z-20 pointer-events-none flex flex-col items-center">
              <svg viewBox="0 0 36 120" className="w-9 h-28 drop-shadow-sm overflow-visible">
                {/* Antennae */}
                <path
                  d="M16 38 C14 26 8 16 2 12"
                  fill="none"
                  stroke="#be185d"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle cx="2" cy="12" r="1.8" fill="#f43f5e" />

                <path
                  d="M20 38 C22 26 28 16 34 12"
                  fill="none"
                  stroke="#be185d"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle cx="34" cy="12" r="1.8" fill="#f43f5e" />

                {/* Head */}
                <circle cx="18" cy="42" r="4" fill="#9d174d" />
                <circle cx="18" cy="42" r="1.5" fill="#fbcfe8" />

                {/* Thorax */}
                <ellipse cx="18" cy="52" rx="3.6" ry="7" fill="#be185d" />

                {/* Abdomen */}
                <path
                  d="M15 58 C15 58 14 78 18 90 C22 78 21 58 21 58 Z"
                  fill="#db2777"
                />

                {/* Luminous Pearl Chest Accent */}
                <circle cx="18" cy="51" r="2" fill="#ffffff" className="animate-pulse" />
              </svg>
            </div>

          </div>
        </div>

        {/* Elegant Brand Headline & Subtitle */}
        <div
          className={`mt-6 space-y-2 transition-all duration-500 delay-100 ${
            isPopped ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-pink-300" />
            <h1 className="font-heading text-lg sm:text-2xl font-bold tracking-[0.2em] uppercase text-slate-900">
              SEO Expert In Itahari
            </h1>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-pink-300" />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-medium text-pink-600 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Architecting Search Authority</span>
            <span>•</span>
            <span>Nepal</span>
          </div>
        </div>

        {/* Quick Pop Progress Line (Fast Shimmer, No Numbers) */}
        <div
          className={`mt-5 w-48 sm:w-64 h-[3px] bg-pink-100 rounded-full overflow-hidden relative transition-all duration-500 delay-200 ${
            isPopped ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-full animate-[shimmerSlide_1s_ease-in-out_infinite]"
            style={{ width: '100%' }}
          />
        </div>

        {/* Quick Skip Pill */}
        <button
          onClick={handleSkip}
          className={`mt-5 text-[11px] font-mono tracking-widest uppercase text-slate-400 hover:text-pink-600 transition-colors cursor-pointer py-1 px-3 rounded-full hover:bg-pink-50 ${
            isPopped ? 'opacity-100' : 'opacity-0'
          }`}
        >
          [ Click Anywhere to Open &rarr; ]
        </button>
      </div>

      {/* Global CSS for 3D Butterfly Flap & Shimmer Animations */}
      <style>{`
        @keyframes butterflyFlapLeft {
          0% {
            transform: rotateY(0deg) skewY(0deg);
          }
          50% {
            transform: rotateY(65deg) skewY(-6deg) scaleX(0.9);
          }
          100% {
            transform: rotateY(10deg) skewY(2deg);
          }
        }

        @keyframes butterflyFlapRight {
          0% {
            transform: rotateY(0deg) skewY(0deg);
          }
          50% {
            transform: rotateY(-65deg) skewY(6deg) scaleX(0.9);
          }
          100% {
            transform: rotateY(-10deg) skewY(-2deg);
          }
        }

        @keyframes shimmerSlide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};
