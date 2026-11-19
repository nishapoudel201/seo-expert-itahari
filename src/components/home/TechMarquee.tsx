import React from 'react';

export const TechMarquee: React.FC = () => {
  const items = [
    { label: 'GOOGLE SEARCH CONSOLE', color: 'text-pink-600' },
    { label: 'TOPICAL AUTHORITY MAPS', color: 'text-slate-900' },
    { label: 'CORE WEB VITALS < 1.2S', color: 'text-rose-600' },
    { label: 'LOCAL 3-PACK SUNSARI', color: 'text-pink-700' },
    { label: 'SCHEMA.ORG JSON-LD', color: 'text-slate-900' },
    { label: 'SCREAMING FROG SEO SPIDER', color: 'text-pink-600' },
    { label: 'ENTITY-ATTRIBUTE-VALUE', color: 'text-rose-600' },
    { label: 'ZERO CANNIBALIZATION', color: 'text-pink-700' },
    { label: 'SOP SUPPLEMENTARY BRIDGES', color: 'text-slate-900' },
    { label: 'SEMANTIC TRIPLES', color: 'text-pink-600' },
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 bg-[#fff5f8] border-y border-pink-100/90 select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fff5f8] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fff5f8] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8 items-center">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-mono tracking-widest font-bold uppercase">
            <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#f472b6]" />
            <span className={item.color}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
