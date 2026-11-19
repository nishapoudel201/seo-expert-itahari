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
    <div className="flex flex-col w-full bg-[#090b0e] min-h-screen text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      <div className="bg-[#0c0f14] border-b border-white/10">
        <Breadcrumbs items={[{ label: 'Consultant Profile & Ethos' }]} onNavigate={onNavigate} />
      </div>

      <header className="py-14 sm:py-20 relative overflow-hidden border-b border-white/10 bg-[#090b0e]">
        {/* Ambient radial glow */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              Independent Senior Consultant // Itahari, Nepal
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Technical SEO Craftsmanship Without Agency Overhead
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Based in Itahari Sub-Metropolitan City, Sunsari District. Working directly with business owners on semantic architecture, crawl efficiency, and sustainable local search visibility.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-10">
        {/* Professional Introduction with Portrait */}
        <section className="bg-[#11151c] p-6 sm:p-9 rounded-3xl border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Portrait Image Column */}
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-[#141923] shadow-2xl overflow-hidden group relative">
                <img 
                  src="/images/seo-consultant-profile.jpg" 
                  alt="Portrait of Nepali SEO Consultant in Itahari, Nepal"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3.5 bg-[#090b0e]/95 border-t border-white/10 text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span className="font-semibold text-white">Consultant & Strategist</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Itahari Ward 4
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>// The Independent Craftsman Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Why I Work as an Independent SEO Consultant
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                I am an independent SEO practitioner and web strategist located in <strong>Itahari Sub-Metropolitan City (Ward 4), Sunsari District, Koshi Province, Nepal</strong>. After watching numerous businesses in Eastern Nepal pay hefty monthly retainers for automated generic PDF reports that produced zero real customers, I chose a different path.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                I work directly with founders, clinic owners, e-commerce retailers, and service providers. When you hire me, you don't talk to an account manager or a junior intern. You talk to the person who writes the code, analyzes your log files, structures your schema markup, and monitors your crawl budgets.
              </p>
            </div>
          </div>

          {/* Transparent Placeholder Box */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-2.5">
            <div className="flex items-center gap-2 font-bold font-heading text-sm text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Credential Policy (Transparent Editable Notice)</span>
            </div>
            <p className="text-slate-400">
              In accordance with strict ethical standards, this site displays verified facts only. We never fabricate client awards, fake logos, or guaranteed #1 rankings. The slots below represent editable placeholders for verified business credentials:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 font-mono text-[11px]">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-0.5">Years Active:</strong> [Verified Years in Technical Search]
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-0.5">Certifications:</strong> [Google Search Central, GA4, Schema.org]
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-0.5">Focus Area:</strong> Semantic SEO, Core Web Vitals & Local Pack
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Principles */}
        <section className="space-y-4">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
            // Guiding Principles
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-[#11151c] border border-white/10 space-y-2 hover:border-emerald-500/40 transition-all">
              <span className="font-mono text-xs font-bold text-emerald-400">01 // CODE FIRST</span>
              <h3 className="font-bold text-base text-white font-heading">
                Inspect Raw Source Code
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                SEO is not just blog writing. If your website is heavy with unoptimized JavaScript or broken canonical tags, Googlebot will abandon crawling before seeing your content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#11151c] border border-white/10 space-y-2 hover:border-emerald-500/40 transition-all">
              <span className="font-mono text-xs font-bold text-emerald-400">02 // ENTITY SEMANTICS</span>
              <h3 className="font-bold text-base text-white font-heading">
                Knowledge Graphs & Triples
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Modern search engines match user intent to real-world entities (people, places, services) rather than naive keyword repetition. We construct semantically validated topical maps.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#11151c] border border-white/10 space-y-2 hover:border-emerald-500/40 transition-all">
              <span className="font-mono text-xs font-bold text-emerald-400">03 // DIRECT OWNERSHIP</span>
              <h3 className="font-bold text-base text-white font-heading">
                No Lock-In Retainers
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Every optimization, custom schema graph, and content brief belongs completely to you. You retain full control of your digital properties without dependency traps.
              </p>
            </div>
          </div>
        </section>

        {/* Local Sunsari Roots */}
        <section className="p-6 sm:p-9 rounded-3xl bg-[#11151c] border border-white/10 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 uppercase">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>// Local Itahari & Eastern Nepal Focus</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-white font-heading">
                Grounded in Itahari, Serving Eastern Nepal and Beyond
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
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
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Say Hello on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-[#141923] shadow-2xl overflow-hidden group">
                <img 
                  src="/images/seo-hero-desk.jpg" 
                  alt="SEO Audit Workstation in Itahari, Nepal"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="p-3 bg-[#090b0e] border-t border-white/10 text-[11px] font-mono text-slate-400">
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
