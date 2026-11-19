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
    <div className="flex flex-col w-full bg-[#f8fafc] min-h-screen text-slate-900">
      <div className="bg-white border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-white border-b border-slate-200 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              Direct Answers & Technical Clarifications
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
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. guarantee, local, timeline, pricing)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-slate-900"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 text-xs font-mono">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white font-semibold shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              All Categories ({allItems.length})
            </button>
            {categorizedFaqData.map(c => (
              <button
                key={c.category}
                onClick={() => setActiveCategory(c.category)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeCategory === c.category
                    ? 'bg-slate-900 text-white font-semibold shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
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
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 transition-all open:shadow-sm"
            >
              <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4 font-heading">
                <span>{faq.question}</span>
                <span className="p-1 rounded-lg bg-slate-100 text-slate-600 group-open:bg-emerald-50 group-open:text-emerald-700 transition-colors shrink-0">
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </span>
              </summary>
              <div className="pt-4 border-t border-slate-100 mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                <p>{faq.answer}</p>
                <div className="pt-1 flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
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
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            Have a Specific Question About Your Domain?
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Get straightforward advice from a local consultant who inspects source code and respects your time.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors inline-flex items-center gap-2 shadow-sm mx-auto"
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