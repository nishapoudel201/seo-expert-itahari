import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';

export const BeforeAfterComparison: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-9 text-slate-900 my-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200 mb-2">
            STRATEGIC DIFFERENTIATION
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-heading mt-1">
            Why Generic SEO Retainers Fail (And What Works Instead)
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Compare outdated mass-agency deliverables against senior-level, code-backed organic search architecture.
          </p>
        </div>
      </div>

      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Outdated Agency Model */}
        <div className="p-6 rounded-xl border border-rose-200/80 bg-rose-50/30 space-y-4">
          <div className="flex items-center justify-between border-b border-rose-200/60 pb-3">
            <span className="font-mono text-xs font-bold uppercase text-rose-700 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              <span>Conventional Outsource Agency Retainer</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">
              Low Yield
            </span>
          </div>

          <ul className="space-y-3 text-xs text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
              <span><strong>Automated PDF Deliverables:</strong> 80-page generic software exports listing theoretical errors with zero implementation support.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
              <span><strong>Unvetted Content Churn:</strong> Generic keyword-stuffed articles targeting zero-intent keywords that fail to generate commercial inquiries.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
              <span><strong>Risky Automated Link Packages:</strong> Low-tier directory submissions that risk Google algorithmic spam penalties.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
              <span><strong>Account Manager Layer:</strong> Non-technical intermediaries who cannot inspect log files, debug canonicals, or optimize Core Web Vitals.</span>
            </li>
          </ul>
        </div>

        {/* Senior Strategic Advisory Model */}
        <div className="p-6 rounded-xl border border-emerald-200/90 bg-emerald-50/30 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-emerald-200/60 pb-3">
            <span className="font-mono text-xs font-bold uppercase text-emerald-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Senior Organic Search Architecture</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
              Compounding ROI
            </span>
          </div>

          <ul className="space-y-3 text-xs text-slate-800">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Code-Level Performance:</strong> Direct developer-ready pull requests, JavaScript hydration fixes, and sub-second Core Web Vitals.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Local 3-Pack Ground Truth:</strong> Verified Google Business Profile optimization, localized entity citations, and Sunsari coordinate mapping.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Semantic Topical Authority:</strong> Topic cluster meshes and machine-readable schema graphs structured for Google Knowledge Vault ingestion.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Direct Practitioner Advisory:</strong> You collaborate 1-on-1 with the senior consultant executing the strategy. No junior handoffs.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};