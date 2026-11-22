import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isPopped, setIsPopped] = useState(false);

  useEffect(() => {
    // Stage 1: Trigger the lively butterfly pop immediately
    setIsPopped(true);

    // Stage 2: Display the popped butterfly for 1 full second (1000ms) before opening
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1000);

    // Stage 3: Smooth curtain finish and reveal website
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1350);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleSkip = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsExiting(true);
    setTimeout(onComplete, 180);
  };

  return (
    <div
      onClick={() => handleSkip()}
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#fffafc] text-slate-900 select-none cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      title="Click anywhere to open instantly"
    >
      {/* Soft Ambient Baby Pink Glowing Halo */}
      <div
        className={`absolute w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full pointer-events-none transition-all duration-500 ease-out ${
          isPopped ? 'scale-100 opacity-70' : 'scale-50 opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.45) 0%, rgba(253, 232, 239, 0.6) 45%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Radiant Ripple Waves Expanding from Butterfly Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className={`w-36 h-36 rounded-full border-2 border-pink-300/70 transition-all duration-1000 ease-out ${
            isPopped ? 'scale-[3.5] opacity-0' : 'scale-50 opacity-90'
          }`}
        />
        <div
          className={`w-24 h-24 rounded-full border border-pink-400/50 transition-all duration-1000 delay-100 ease-out ${
            isPopped ? 'scale-[4.2] opacity-0' : 'scale-50 opacity-90'
          }`}
        />
      </div>

      {/* Floating Sparkle Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[26%] left-[24%] sm:left-[34%] text-pink-400 text-xl animate-pulse duration-500">✦</span>
        <span className="absolute top-[30%] right-[22%] sm:right-[33%] text-rose-300 text-sm animate-ping duration-700">✦</span>
        <span className="absolute bottom-[32%] left-[26%] sm:left-[35%] text-pink-300 text-xs animate-bounce duration-700">✦</span>
        <span className="absolute bottom-[34%] right-[24%] sm:right-[35%] text-pink-400 text-base animate-pulse duration-500">✦</span>
      </div>

      {/* Main Content: Butterfly + Luxury Brand Typography */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Avatar Capsule Pill with Baby Pink Ring */}
        <div
          className={`mb-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-pink-200 shadow-[0_4px_20px_rgba(244,114,182,0.25)] transition-all duration-300 ${
            isPopped ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-3 opacity-0 scale-90'
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

        {/* 3D Fluttering Butterfly Mascot with Energetic 1-Second Pop Animation */}
        <div
          className={`relative select-none ${
            isPopped ? 'animate-[butterflyPop_0.32s_cubic-bezier(0.34,1.56,0.64,1)_forwards]' : 'scale-0 opacity-0'
          } ${isExiting ? 'transition-all duration-350 -translate-y-16 scale-110 opacity-0 ease-in' : ''}`}
        >
          {/* Subtle Glow behind the wings */}
          <div className="absolute inset-0 bg-pink-400/25 blur-xl rounded-full scale-125 pointer-events-none" />

          {/* Butterfly Body and Wings Structure with 3D Perspective */}
          <div className="relative w-48 sm:w-56 h-38 sm:h-44 flex items-center justify-center [perspective:1000px]">
            
            {/* Left Wings Group */}
            <div 
              className="absolute right-1/2 top-0 w-26 sm:w-30 h-38 sm:h-44 origin-right transition-transform"
              style={{
                animation: 'butterflyFlapLeft 0.24s ease-in-out infinite alternate',
                transformStyle: 'preserve-3d',
              }}
            >
              <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_8px_18px_rgba(244,114,182,0.45)]">
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
                  opacity="0.8"
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
                  opacity="0.75"
                />

                {/* Hindwing Accent Spot */}
                <circle cx="48" cy="116" r="3" fill="#f43f5e" opacity="0.65" />
                <circle cx="48" cy="116" r="1.5" fill="#ffffff" opacity="0.95" />
              </svg>
            </div>

            {/* Right Wings Group (Symmetrical Mirror) */}
            <div 
              className="absolute left-1/2 top-0 w-26 sm:w-30 h-38 sm:h-44 origin-left transition-transform"
              style={{
                animation: 'butterflyFlapRight 0.24s ease-in-out infinite alternate',
                transformStyle: 'preserve-3d',
              }}
            >
              <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_8px_18px_rgba(244,114,182,0.45)]">
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
                  opacity="0.8"
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
                  opacity="0.75"
                />

                {/* Hindwing Accent Spot */}
                <circle cx="52" cy="116" r="3" fill="#f43f5e" opacity="0.65" />
                <circle cx="52" cy="116" r="1.5" fill="#ffffff" opacity="0.95" />
              </svg>
            </div>

            {/* Butterfly Center Body & Delicate Antennae */}
            <div className="absolute z-20 pointer-events-none flex flex-col items-center">
              <svg viewBox="0 0 36 120" className="w-10 h-30 drop-shadow-sm overflow-visible">
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
                <circle cx="18" cy="51" r="2.2" fill="#ffffff" className="animate-pulse" />
              </svg>
            </div>

          </div>
        </div>

        {/* Elegant Brand Headline & Subtitle */}
        <div
          className={`mt-5 space-y-1.5 transition-all duration-300 delay-75 ${
            isPopped ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
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
            <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Architecting Search Authority</span>
            <span>•</span>
            <span>Nepal</span>
          </div>
        </div>

        {/* Quick Pop Progress Line (Fast Shimmer, No Numbers) */}
        <div
          className={`mt-4 w-48 sm:w-64 h-[3px] bg-pink-100 rounded-full overflow-hidden relative transition-all duration-300 delay-150 ${
            isPopped ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-full animate-[shimmerSlide_0.8s_ease-in-out_infinite]"
            style={{ width: '100%' }}
          />
        </div>

        {/* Quick Skip Hint */}
        <button
          onClick={handleSkip}
          className={`mt-4 text-[11px] font-mono tracking-widest uppercase text-slate-400 hover:text-pink-600 transition-colors cursor-pointer py-1 px-3 rounded-full hover:bg-pink-50 ${
            isPopped ? 'opacity-100' : 'opacity-0'
          }`}
        >
          [ Click Anywhere to Open &rarr; ]
        </button>
      </div>

      {/* Global CSS for 3D Butterfly Pop, Flap & Shimmer Animations */}
      <style>{`
        @keyframes butterflyPop {
          0% {
            transform: scale(0.15) translateY(24px);
            opacity: 0;
          }
          65% {
            transform: scale(1.15) translateY(-6px);
            opacity: 1;
          }
          85% {
            transform: scale(0.96) translateY(2px);
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        @keyframes butterflyFlapLeft {
          0% {
            transform: rotateY(0deg) skewY(0deg);
          }
          50% {
            transform: rotateY(68deg) skewY(-6deg) scaleX(0.88);
          }
          100% {
            transform: rotateY(12deg) skewY(2deg);
          }
        }

        @keyframes butterflyFlapRight {
          0% {
            transform: rotateY(0deg) skewY(0deg);
          }
          50% {
            transform: rotateY(-68deg) skewY(6deg) scaleX(0.88);
          }
          100% {
            transform: rotateY(-12deg) skewY(-2deg);
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
