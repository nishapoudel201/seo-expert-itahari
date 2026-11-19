import React, { useState } from 'react';
import { Search, ArrowRight, ChevronDown } from 'lucide-react';
import { categorizedFaqData } from '../data/faqData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface FaqPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const allItems = categorizedFaqData.flatMap(c => c.items.map(i => ({ ...i, categoryName: c.category })));

  const filteredItems = allItems.filter(item => {
    const matchesCat = activeCategory === 'all' || item.categoryName === activeCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full bg-[#fffafc] min-h-screen text-slate-900 selection:bg-pink-200 selection:text-pink-900">
      <div className="bg-[#fff0f4] border-b border-pink-100">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-gradient-to-b from-[#fff5f8] to-white border-b border-pink-100 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Nisha Poudel // Direct Clarifications
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              Frequently Asked Questions: SEO in Itahari & Nepal
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Direct, unvarnished explanations covering Google ranking dynamics, ethical link practices, Core Web Vitals, and local Google Business Profile visibility in Eastern Nepal.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Search & Filter */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. guarantee, local, timeline, pricing)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-pink-200 bg-[#fffafc] text-xs font-mono focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 text-slate-900 shadow-2xs"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-3 border-t border-pink-100 text-xs font-mono">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold shadow-xs'
                  : 'bg-white border border-pink-100 text-slate-600 hover:border-pink-300 hover:text-slate-900'
              }`}
            >
              All Categories ({allItems.length})
            </button>
            {categorizedFaqData.map(c => (
              <button
                key={c.category}
                onClick={() => setActiveCategory(c.category)}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  activeCategory === c.category
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold shadow-xs'
                    : 'bg-white border border-pink-100 text-slate-600 hover:border-pink-300 hover:text-slate-900'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {filteredItems.map((faq, idx) => (
            <details
              key={idx}
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-pink-150 transition-all open:shadow-[0_4px_25px_rgba(244,114,182,0.08)]"
            >
              <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4 font-heading">
                <span>{faq.question}</span>
                <span className="p-1 rounded-full bg-pink-50 text-pink-700 group-open:bg-pink-100 group-open:text-pink-800 transition-colors shrink-0">
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </span>
              </summary>
              <div className="pt-4 border-t border-pink-100 mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                <p>{faq.answer}</p>
                <div className="pt-1 flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 font-semibold">
                    #{faq.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Category: {faq.categoryName}
                  </span>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            Have a Specific Question About Your Domain?
          </h3>
          <p className="text-sm text-pink-100 max-w-lg mx-auto">
            Get straightforward advice from Nisha Poudel, inspecting source code and respecting your time.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="py-3 px-6 rounded-full bg-white text-pink-700 hover:bg-pink-50 font-bold text-xs transition-colors inline-flex items-center gap-2 shadow-md mx-auto"
            >
              <span>Ask Your Question Directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
