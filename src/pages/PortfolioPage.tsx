import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FolderKanban
} from 'lucide-react';
import { portfolioItems } from '../data/caseStudiesData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface PortfolioPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Local SEO', 'Technical SEO', 'E-commerce SEO', 'Topical Architecture'];

  const filteredItems = portfolioItems.filter(item => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] min-h-screen text-slate-900">
      <div className="bg-white border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: 'Portfolio & Work Samples' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-white border-b border-slate-200 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              Work Artifacts & Technical Blueprints
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              SEO Portfolio & Deliverable Samples
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Review sample topical map trees, schema graph integrations, and technical audit blueprints developed for regional businesses in Nepal and international markets.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Ethical Notice */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-3.5 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold font-heading text-sm text-slate-900">Confidentiality & Anonymization Policy</strong>
            <p className="text-slate-600 mt-0.5 leading-relaxed">
              To protect active client rank positions and commercial secrets under NDAs, proprietary domain names are anonymized. The deliverables below show real architecture patterns and verified technical outputs.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedFilter === cat
                  ? 'bg-slate-900 text-white font-semibold shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{item.location}</span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-heading">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 mb-4">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-500 block">
                    Completed Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {item.deliverablesList.map((del, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {item.status}
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="btn-indie-secondary text-[11px] py-1 px-3"
                >
                  <span>Request Similar Architecture</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Case Studies */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            Want to Review Detailed Problem & Solution Breakdowns?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Inspect our full case studies analyzing client baselines, technical hurdles, and verified search visibility metrics.
          </p>
          <button
            onClick={() => onNavigate('/case-studies')}
            className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors inline-flex items-center gap-2 shadow-sm mx-auto"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>
    </div>
  );
};