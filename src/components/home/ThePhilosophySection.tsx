import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface ThePhilosophySectionProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const ThePhilosophySection: React.FC<ThePhilosophySectionProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#fffafc] overflow-hidden border-y border-pink-100 select-none">
      {/* Background with Soft Pink Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/seo-hero-desk.jpg"
          alt="Technical SEO workspace in Itahari Nepal"
          className="w-full h-full object-cover object-center opacity-5 filter contrast-125 scale-105"
        />
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(244, 114, 182, 0.18) 0%, transparent 80%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        
        {/* Luminous Baby Pink Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-pink-200 bg-pink-50/80 backdrop-blur-md shadow-xs">
          <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_10px_#f472b6] animate-pulse" />
          <span className="text-pink-700 text-xs font-mono font-semibold tracking-[0.3em] uppercase">
            The Search Philosophy
          </span>
        </div>

        {/* Impactful Manifesto Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.2] font-heading max-w-4xl">
          Rankings are won through <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600">code-level engineering</span> and genuine semantic intent.
        </h2>

        {/* Narrative Description */}
        <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-normal">
          No corporate jargon. No opaque reports. Every crawl request, every internal link bridge, and every structured schema node is architected to give search engines unambiguous clarity and drive verified commercial leads for businesses in Eastern Nepal and worldwide.
        </p>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 text-left">
          <div className="p-6 rounded-2xl bg-white border border-pink-100 shadow-[0_4px_20px_-2px_rgba(244,114,182,0.06)] hover:border-pink-300 transition-all">
            <div className="flex items-center gap-3 text-pink-500 mb-2">
              <Zap className="w-5 h-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">01 / Speed & Core Vitals</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-normal">
              Sub-second LCP and zero Cumulative Layout Shift so both Googlebot and real visitors experience immediate response.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-pink-100 shadow-[0_4px_20px_-2px_rgba(244,114,182,0.06)] hover:border-pink-300 transition-all">
            <div className="flex items-center gap-3 text-rose-500 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">02 / Semantic Authority</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-normal">
              Full topical maps, entity-attribute-value modeling, and SOP-verified internal links connecting your core money pages.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-pink-100 shadow-[0_4px_20px_-2px_rgba(244,114,182,0.06)] hover:border-pink-300 transition-all">
            <div className="flex items-center gap-3 text-pink-600 mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">03 / Total Ownership</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-normal">
              Zero dependency lock-ins. Every dashboard, custom schema script, and content brief belongs 100% to you.
            </p>
          </div>
        </div>

        {/* Interaction Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="btn-pill-primary group"
          >
            <span>Book Strategic Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => onNavigate('/services/seo-services-itahari')}
            className="btn-pill-secondary"
          >
            <span>Explore All 7 Money Pages</span>
          </button>
        </div>

      </div>
    </section>
  );
};
