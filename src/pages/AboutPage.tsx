import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight,
  Terminal,
  MapPin,
  MessageCircle,
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="flex flex-col w-full bg-[#fffafc] min-h-screen text-slate-900 selection:bg-pink-200 selection:text-pink-900">
      <div className="bg-[#fff0f4] border-b border-pink-100">
        <Breadcrumbs items={[{ label: 'Consultant Profile & Ethos' }]} onNavigate={onNavigate} />
      </div>

      <header className="py-14 sm:py-20 relative overflow-hidden border-b border-pink-100 bg-gradient-to-b from-[#fff5f8] to-white">
        {/* Ambient radial pink glow */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.4) 0%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-pink-50 text-pink-700 border border-pink-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_#f472b6] animate-pulse" />
              Nisha Poudel • Senior SEO Consultant // Itahari, Nepal
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              Technical SEO Craftsmanship Without Agency Overhead
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Based in Itahari Sub-Metropolitan City, Sunsari District. Working directly with business owners on semantic architecture, crawl efficiency, and sustainable local search visibility.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-10">
        {/* Professional Introduction with Portrait */}
        <section className="bg-white p-6 sm:p-9 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.08)] space-y-6 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Portrait Image Column */}
            <div className="md:col-span-5">
              <div className="rounded-2xl border-2 border-pink-200 bg-white shadow-md overflow-hidden group relative">
                <img 
                  src="/images/seo-consultant-profile.jpg" 
                  alt="Nisha Poudel - Senior SEO Consultant in Itahari, Nepal" 
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3.5 bg-pink-50/80 border-t border-pink-100 text-xs font-mono text-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Nisha Poudel</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-pink-700 border border-pink-200 font-bold shadow-2xs">
                    Itahari Ward 4
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-pink-600 uppercase">
                <Terminal className="w-4 h-4 text-pink-500" />
                <span>// The Independent Craftsman Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
                Why I Work as an Independent SEO Consultant
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                I am Nisha Poudel, an independent SEO practitioner and web strategist located in <strong>Itahari Sub-Metropolitan City (Ward 4), Sunsari District, Koshi Province, Nepal</strong>. After watching numerous businesses in Eastern Nepal pay hefty monthly retainers for automated generic PDF reports that produced zero real customers, I chose a different path.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                I work directly with founders, clinic owners, e-commerce retailers, and service providers. When you hire me, you don't talk to an account manager or a junior intern. You talk to the person who writes the code, analyzes your log files, structures your schema markup, and monitors your crawl budgets.
              </p>
            </div>
          </div>

          {/* Transparent Placeholder Box */}
          <div className="p-5 rounded-2xl bg-[#fff5f8] border border-pink-100 text-xs text-slate-700 space-y-2.5">
            <div className="flex items-center gap-2 font-bold font-heading text-sm text-slate-900">
              <ShieldCheck className="w-4 h-4 text-pink-600" />
              <span>Verified Credential Policy (Transparent Editable Notice)</span>
            </div>
            <p className="text-slate-600">
              In accordance with strict ethical standards, this site displays verified facts only. We never fabricate client awards, fake logos, or guaranteed #1 rankings. The slots below represent editable placeholders for verified business credentials:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 font-mono text-[11px]">
              <div className="p-3 rounded-xl bg-white border border-pink-200/80 shadow-2xs">
                <strong className="text-slate-900 block mb-0.5">Years Active:</strong> [Verified Years in Technical Search]
              </div>
              <div className="p-3 rounded-xl bg-white border border-pink-200/80 shadow-2xs">
                <strong className="text-slate-900 block mb-0.5">Certifications:</strong> [Google Search Central, GA4, Schema.org]
              </div>
              <div className="p-3 rounded-xl bg-white border border-pink-200/80 shadow-2xs">
                <strong className="text-slate-900 block mb-0.5">Focus Area:</strong> Semantic SEO, Core Web Vitals & Local Pack
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Principles */}
        <section className="space-y-4">
          <div className="text-xs font-mono font-bold text-pink-600 uppercase">
            // Guiding Principles
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-pink-100 space-y-2 hover:border-pink-300 transition-all shadow-xs">
              <span className="font-mono text-xs font-bold text-pink-600">01 // CODE FIRST</span>
              <h3 className="font-bold text-base text-slate-900 font-heading">
                Inspect Raw Source Code
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                SEO is not just blog writing. If your website is heavy with unoptimized JavaScript or broken canonical tags, Googlebot will abandon crawling before seeing your content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-pink-100 space-y-2 hover:border-pink-300 transition-all shadow-xs">
              <span className="font-mono text-xs font-bold text-pink-600">02 // ENTITY SEMANTICS</span>
              <h3 className="font-bold text-base text-slate-900 font-heading">
                Knowledge Graphs & Triples
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Modern search engines match user intent to real-world entities (people, places, services) rather than naive keyword repetition. We construct semantically validated topical maps.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-pink-100 space-y-2 hover:border-pink-300 transition-all shadow-xs">
              <span className="font-mono text-xs font-bold text-pink-600">03 // DIRECT OWNERSHIP</span>
              <h3 className="font-bold text-base text-slate-900 font-heading">
                No Lock-In Retainers
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Every optimization, custom schema graph, and content brief belongs completely to you. You retain full control of your digital properties without dependency traps.
              </p>
            </div>
          </div>
        </section>

        {/* Local Sunsari Roots */}
        <section className="p-6 sm:p-9 rounded-3xl bg-white border border-pink-150 shadow-md space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-pink-600 uppercase">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span>// Local Itahari & Eastern Nepal Focus</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-slate-900 font-heading">
                Grounded in Itahari, Serving Eastern Nepal and Beyond
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Operating from Itahari Chowk and Ward 4, I understand the unique local commercial geography of Eastern Nepal. Ranking for searches like <em>"hardware store in Itahari"</em>, <em>"hospital in Dharan"</em>, or <em>"exporter in Biratnagar"</em> requires real local citations, precise NAP consistency, and localized Nepali search intent mapping.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="btn-pill-primary text-xs"
                >
                  <span>Schedule Honest Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://wa.me/9779800000000?text=Namaste!%20I'd%20like%20to%20connect%20regarding%20SEO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-secondary text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-pink-500" />
                  <span>Say Hello on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-pink-200 bg-white shadow-md overflow-hidden group">
                <img 
                  src="/images/seo-hero-desk.jpg" 
                  alt="SEO Audit Workstation in Itahari, Nepal"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-[#fff0f4] border-t border-pink-100 text-[11px] font-mono text-slate-600">
                  Workbench: Terminal, Code & Topical Maps
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
