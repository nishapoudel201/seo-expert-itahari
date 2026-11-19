import React from 'react';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { testimonialsData, testimonialEthicsPolicy } from '../data/testimonialsData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface TestimonialsPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div className="flex flex-col w-full bg-[#f8fafc] min-h-screen text-slate-900">
      <div className="bg-white border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: 'Client Feedback & Reviews' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-white border-b border-slate-200 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              Verified Feedback Policy // Zero Fabricated Ratings
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              Client Feedback & Ethical Review Declaration
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              We operate with full disclosure: no fabricated ratings, no paid bot endorsements, and zero unverified testimonials.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Transparency Banner */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-4 shadow-sm">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block text-sm font-bold text-slate-900 font-heading">
              {testimonialEthicsPolicy.notice}
            </strong>
            <p className="text-slate-600 leading-relaxed text-xs">
              {testimonialEthicsPolicy.description}
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-amber-400 mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-4">
                  "{t.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 font-heading">{t.clientName}</h3>
                <p className="text-xs text-slate-500">{t.role} • {t.businessName}</p>
                <p className="text-[11px] font-mono text-slate-400">{t.location}</p>
                <div className="mt-2 text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold inline-block border border-slate-200">
                  {t.serviceReceived}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            Looking for Honest, Unvarnished SEO Guidance in Itahari?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a conversation directly with the consultant. We'll audit your search positioning and give you actionable next steps.
          </p>
          <button
            onClick={onOpenConsultation}
            className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors inline-flex items-center gap-2 shadow-sm mx-auto"
          >
            <span>Request Initial Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>
    </div>
  );
};