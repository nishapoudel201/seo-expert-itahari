import React from 'react';
import { Home, Layers, Compass } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 bg-[#f8fafc] text-center text-slate-900">
      <div className="w-14 h-14 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
        <Compass className="w-7 h-7" />
      </div>

      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 mb-3">
        HTTP 404: Route Not Indexed
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 font-heading">
        Search Pathway Not Located
      </h1>

      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
        The URL you requested may have been redirected, relocated under a new topic cluster, or never existed in our sitemap.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <button
          onClick={() => onNavigate('/')}
          className="btn-indie-primary text-xs"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>
        <button
          onClick={() => onNavigate('/html-sitemap')}
          className="btn-indie-secondary text-xs"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Browse HTML Sitemap</span>
        </button>
      </div>

      {/* Suggested Core Pages */}
      <div className="max-w-md w-full p-5 bg-white rounded-2xl border border-slate-200 shadow-sm text-left">
        <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
          // Core Commercial Services
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {servicesData.slice(0, 4).map((svc) => (
            <a
              key={svc.slug}
              href={`/services/${svc.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/services/${svc.slug}`);
              }}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:bg-emerald-50/50 hover:border-emerald-300 text-slate-800 font-semibold transition-colors block font-heading"
            >
              {svc.shortTitle} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};