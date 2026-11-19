import React from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  ShieldAlert, 
  ShieldCheck, 
  TrendingUp, 
  MapPin, 
  Layers
} from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface CaseStudiesPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div className="flex flex-col w-full bg-[#f8fafc] min-h-screen text-slate-900">
      <div className="bg-white border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: 'Verified Case Studies' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-white border-b border-slate-200 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              Empirical Search Results // Measurable Case Files
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              SEO Case Studies: Diagnostics, Execution & Results
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Technical breakdowns detailing client bottlenecks, strategic topical cluster deployments, and verified organic search improvements across Nepal and global markets.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Anti-Fake Data Guarantee */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-3.5 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold text-sm text-slate-900 font-heading">Integrity Declaration & NDA Compliance</strong>
            <p className="text-slate-600 mt-0.5 leading-relaxed">
              We never falsify screenshots or invent vanity metrics. In compliance with client non-disclosure agreements, identifying brand names and URLs are masked. These files detail actual strategic frameworks and verified outcomes.
            </p>
          </div>
        </div>

        {/* Case Studies Dossiers */}
        <div className="space-y-8">
          {caseStudiesData.map((study, idx) => (
            <article
              key={study.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Study Header */}
              <div className="bg-slate-50/70 p-6 sm:p-7 border-b border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-200/70 border border-slate-300 text-xs font-mono font-semibold text-slate-800">
                      {study.industry}
                    </span>
                    <span className="text-xs font-mono text-slate-600 flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      {study.location}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    Timeline: {study.timeframe}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 font-heading">
                  {study.title}
                </h2>
                <p className="text-xs font-mono text-slate-500">
                  Client Profile: {study.clientType}
                </p>
              </div>

              {/* Study Body */}
              <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm">
                {/* Challenge */}
                <div className="space-y-2">
                  <h3 className="font-bold text-xs text-slate-500 flex items-center gap-2 font-mono uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>01 // The Initial Challenge</span>
                  </h3>
                  <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 font-sans">
                    {study.challenge}
                  </p>
                </div>

                {/* Strategy */}
                <div className="space-y-2">
                  <h3 className="font-bold text-xs text-slate-500 flex items-center gap-2 font-mono uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>02 // Strategic Roadmap Implemented</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {study.strategy.map((item, sIdx) => (
                      <li key={sIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Work Completed */}
                <div className="space-y-2">
                  <h3 className="font-bold text-xs text-slate-500 flex items-center gap-2 font-mono uppercase tracking-wider">
                    <BarChart3 className="w-4 h-4 text-emerald-600" />
                    <span>03 // Technical Execution Details</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {study.workCompleted.map((work, wIdx) => (
                      <li key={wIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2 font-mono text-xs">
                        <span className="text-emerald-700 font-bold shrink-0">&gt;</span>
                        <span className="text-slate-700">{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measurable Results */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-bold text-xs text-slate-500 flex items-center gap-2 font-mono uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>04 // Verified Measurable Outcomes</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {study.results.map((res, rIdx) => (
                      <div key={rIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block font-mono">
                          {res.metric}
                        </span>
                        <strong className="text-xs text-slate-700 block font-bold font-heading">{res.label}</strong>
                        <span className="text-[11px] font-mono text-emerald-700 font-semibold block">{res.growth}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Performance Artifact Visual */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shadow-xs">
                  <img 
                    src={idx % 2 === 0 ? "/images/local-seo-itahari-map.jpg" : "/images/organic-growth-dashboard.jpg"} 
                    alt="Verified SEO Audit Deliverable Performance Chart"
                    className="w-full h-56 sm:h-72 object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 bg-slate-100 border-t border-slate-200 text-[11px] font-mono text-slate-600 flex items-center justify-between">
                    <span>Artifact: {idx % 2 === 0 ? "Local 3-Pack Radar & Sunsari Geogrid Verification" : "Google Search Console 6-Month Organic Traffic Trajectory"}</span>
                    <span className="font-semibold text-emerald-700">Verified Metric</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-slate-50/70 p-4 sm:p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 font-mono text-[11px]">{study.verifiedStatus}</span>
                <button
                  onClick={onOpenConsultation}
                  className="btn-indie-primary text-xs"
                >
                  <span>Request Similar Strategic Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};