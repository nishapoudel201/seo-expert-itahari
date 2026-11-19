import React from 'react';

export const TechMarquee: React.FC = () => {
  const items = [
    { label: 'GOOGLE SEARCH CONSOLE', color: 'text-amber-400' },
    { label: 'TOPICAL AUTHORITY MAPS', color: 'text-emerald-400' },
    { label: 'CORE WEB VITALS < 1.2S', color: 'text-teal-300' },
    { label: 'LOCAL 3-PACK SUNSARI', color: 'text-cyan-400' },
    { label: 'SCHEMA.ORG JSON-LD', color: 'text-emerald-300' },
    { label: 'SCREAMING FROG SEO SPIDER', color: 'text-emerald-500' },
    { label: 'ENTITY-ATTRIBUTE-VALUE', color: 'text-orange-400' },
    { label: 'ZERO CANNIBALIZATION', color: 'text-rose-400' },
    { label: 'SOP SUPPLEMENTARY BRIDGES', color: 'text-emerald-400' },
    { label: 'SEMANTIC TRIPLES', color: 'text-teal-400' },
  ];

  // Repeat items for seamless infinite loop
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 bg-[#0c0f14] border-y border-white/10 select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0f14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0f14] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8 items-center">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-mono tracking-widest font-semibold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            <span className={item.color}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
