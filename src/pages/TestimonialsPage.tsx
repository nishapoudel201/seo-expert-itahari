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
    <div className="flex flex-col w-full bg-[#fffafc] min-h-screen text-slate-900 selection:bg-pink-200 selection:text-pink-900">
      <div className="bg-[#fff0f4] border-b border-pink-100">
        <Breadcrumbs items={[{ label: 'Client Feedback & Reviews' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-gradient-to-b from-[#fff5f8] to-white border-b border-pink-100 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Verified Feedback Policy // Nisha Poudel
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
        <div className="p-6 rounded-3xl bg-white border border-pink-200/80 text-xs sm:text-sm text-slate-700 flex items-start gap-4 shadow-xs">
          <ShieldCheck className="w-6 h-6 text-pink-500 shrink-0 mt-0.5" />
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
              className="bg-white p-6 sm:p-7 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] hover:border-pink-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-pink-400 mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-4">
                  "{t.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-pink-100">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 font-heading">{t.clientName}</h3>
                <p className="text-xs text-slate-500">{t.role} • {t.businessName}</p>
                <p className="text-[11px] font-mono text-slate-400">{t.location}</p>
                <div className="mt-2 text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 font-semibold inline-block border border-pink-200">
                  {t.serviceReceived}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            Looking for Honest, Unvarnished SEO Guidance in Itahari?
          </h3>
          <p className="text-sm text-pink-100 max-w-xl mx-auto">
            Schedule a conversation directly with Nisha Poudel. We'll audit your search positioning and give you actionable next steps.
          </p>
          <button
            onClick={onOpenConsultation}
            className="py-3 px-6 rounded-full bg-white text-pink-700 hover:bg-pink-50 font-bold text-xs transition-colors inline-flex items-center gap-2 shadow-md mx-auto"
          >
            <span>Request Initial Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>
    </div>
  );
};
