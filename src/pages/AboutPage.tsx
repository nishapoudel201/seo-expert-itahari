import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight,
  Terminal,
  MapPin,
  MessageCircle
} from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="flex flex-col w-full bg-[#f8fafc] min-h-screen text-slate-900">
      <div className="bg-white border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: 'About & Ethos' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-white border-b border-slate-200 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              Independent Senior Consultant // Itahari, Nepal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              Technical SEO Craftsmanship Without Agency Overhead
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Based in Itahari, Sunsari District. Working directly with business owners on semantic architecture, crawl efficiency, and sustainable local search visibility.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Professional Introduction with Portrait */}
        <section className="bg-white p-6 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 shadow-sm overflow-hidden group">
                <img 
                  src="/images/seo-consultant-profile.jpg" 
                  alt="Portrait of Nepali SEO Consultant in Itahari, Nepal"
                  className="w-full h-72 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-slate-100 border-t border-slate-200 text-[11px] font-mono text-slate-600">
                  Consultant & Tech Founder • Itahari Ward 4
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase">
                <Terminal className="w-4 h-4 text-slate-700" />
                <span>// The Independent Craftsman Philosophy</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Why I Work as an Independent SEO Consultant
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                I am an independent SEO practitioner and web strategist located in <strong>Itahari Sub-Metropolitan City (Ward 4), Sunsari District, Koshi Province, Nepal</strong>. After watching numerous businesses in Eastern Nepal pay hefty monthly retainers for automated generic PDF reports that produced zero real customers, I chose a different path.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                I work directly with founders, clinic owners, e-commerce retailers, and service providers. When you hire me, you don't talk to an account manager or a junior intern. You talk to the person who writes the code, analyzes your log files, structures your schema markup, and monitors your crawl budgets.
              </p>
            </div>
          </div>

          {/* Transparent Placeholder Box */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2.5">
            <div className="flex items-center gap-2 font-bold font-heading text-sm text-slate-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Credential Policy (Transparent Editable Notice)</span>
            </div>
            <p className="text-slate-600">
              In accordance with strict ethical standards, this site displays verified facts only. We never fabricate client awards, fake logos, or guaranteed #1 rankings. The slots below represent editable placeholders for verified business credentials:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 font-mono text-[11px]">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <strong className="text-slate-900">Years Active:</strong> [Insert verified years, e.g. 5+ Years in SEO/Dev]
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <strong className="text-slate-900">Certifications:</strong> [Google Search Central, GA4, Schema.org]
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <strong className="text-slate-900">Focus Area:</strong> Semantic SEO, Core Web Vitals & Local Pack
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Principles */}
        <section className="space-y-4">
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase">
            // Guiding Principles
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <span className="font-mono text-xs font-bold text-emerald-700">01 // CODE FIRST</span>
              <h3 className="font-bold text-base text-slate-900 font-heading">
                Inspect Raw Source Code
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                SEO is not just blog writing. If your website is heavy with unoptimized JavaScript or broken canonical tags, Googlebot will abandon crawling before seeing your content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <span className="font-mono text-xs font-bold text-emerald-700">02 // ENTITY SEMANTICS</span>
              <h3 className="font-bold text-base text-slate-900 font-heading">
                Knowledge Graphs & Triples
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Modern search engines match user intent to real-world entities (people, places, services) rather than naive keyword repetition. We construct semantically validated topical maps.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <span className="font-mono text-xs font-bold text-emerald-700">03 // DIRECT OWNERSHIP</span>
              <h3 className="font-bold text-base text-slate-900 font-heading">
                No Lock-In Retainers
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every optimization, custom schema graph, and content brief belongs completely to you. You retain full control of your digital properties without dependency traps.
              </p>
            </div>
          </div>
        </section>

        {/* Local Sunsari Roots */}
        <section className="p-6 sm:p-9 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-700 uppercase">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>// Local Itahari & Eastern Nepal Focus</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Grounded in Itahari, Serving Eastern Nepal and Beyond
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Operating from Itahari Chowk and Ward 4, I understand the unique local commercial geography of Eastern Nepal. Ranking for searches like <em>"hardware store in Itahari"</em>, <em>"hospital in Dharan"</em>, or <em>"exporter in Biratnagar"</em> requires real local citations, precise NAP consistency, and localized Nepali search intent mapping.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="btn-indie-primary text-xs"
                >
                  <span>Schedule Honest Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://wa.me/9779800000000?text=Namaste!%20I'd%20like%20to%20connect%20regarding%20SEO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-indie-secondary text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Say Hello on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 shadow-sm overflow-hidden group">
                <img 
                  src="/images/seo-hero-desk.jpg" 
                  alt="SEO Audit Workstation in Itahari, Nepal"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-slate-100 border-t border-slate-200 text-[11px] font-mono text-slate-600">
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