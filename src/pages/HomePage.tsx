import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Check, 
  ChevronRight, 
  Terminal, 
  ShieldCheck, 
  Search, 
  ExternalLink, 
  HelpCircle, 
  FileCode,
  Play,
  Sparkles,
  Activity,
  Layers,
  Zap,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Award,
  Heart
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { blogPosts, topicClusters } from '../data/blogData';
import { caseStudiesData } from '../data/caseStudiesData';
import { testimonialsData, testimonialEthicsPolicy } from '../data/testimonialsData';
import { categorizedFaqData } from '../data/faqData';
import { TopicalMapVisualizer } from '../components/common/TopicalMapVisualizer';
import { SeoHealthGrader } from '../components/common/SeoHealthGrader';
import { RoiCalculator } from '../components/common/RoiCalculator';
import { TerminalCrawlSimulator } from '../components/common/TerminalCrawlSimulator';
import { BeforeAfterComparison } from '../components/common/BeforeAfterComparison';
import { VideoAuditAnimation } from '../components/common/VideoAuditAnimation';

// Creative Components in White & Baby Pink
import { SpotlightCard } from '../components/common/SpotlightCard';
import { AmbientDust } from '../components/layout/AmbientDust';
import { ThePhilosophySection } from '../components/home/ThePhilosophySection';
import { TechMarquee } from '../components/home/TechMarquee';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  onOpenSchema: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenSchema
}) => {
  const scrollToVideo = () => {
    const el = document.getElementById('screencast-walkthrough');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#fffafc] text-slate-900 overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      
      {/* ======================================================== */}
      {/* SECTION 1: WHITE & BABY PINK HERO */}
      {/* ======================================================== */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden border-b border-pink-100 select-none bg-gradient-to-b from-[#fff5f8] via-[#fffafc] to-white">
        {/* Floating Ambient Baby Pink Shimmer Dust */}
        <AmbientDust />

        {/* Backdrop Soft Glow Layers */}
        <div 
          className="absolute inset-0 pointer-events-none z-[4]" 
          style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 35%, transparent 35%, #fffafc 100%)' }} 
          aria-hidden="true" 
        />
        <div 
          className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[620px] sm:h-[620px] md:w-[840px] md:h-[840px] pointer-events-none opacity-40 z-[5]" 
          style={{
            background: 'radial-gradient(circle, rgba(244,114,182,0.28) 0%, rgba(253,232,239,0.45) 50%, transparent 70%)',
            filter: 'blur(50px)'
          }} 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Prop & Kinetic Typography */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Luminous Status Badge with Profile Avatar */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-pink-200 bg-white/90 shadow-sm backdrop-blur-md">
                <img 
                  src="/images/seo-consultant-profile.jpg" 
                  alt="Nisha Poudel - Senior SEO Consultant in Itahari, Nepal" 
                  className="w-5 h-5 rounded-full object-cover object-top ring-1.5 ring-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.5)]"
                />
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_#f472b6] animate-pulse" />
                <span className="text-pink-700 text-[11px] font-mono font-bold tracking-[0.2em] uppercase">
                  NISHA POUDEL • TECHNICAL SEARCH STRATEGIST • SUNSARI, NEPAL
                </span>
              </div>

              {/* Exact Authoritative Primary Entity H1 */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] font-heading uppercase drop-shadow-xs">
                SEO Expert in Itahari, Nepal
              </h1>

              {/* Sophisticated Executive Value Proposition */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Architecting sustainable organic search growth, code-level speed optimization, structured semantic knowledge graphs, and dominant local Google 3-Pack authority for ambitious businesses across Eastern Nepal and beyond.
              </p>

              {/* Glowing Baby Pink Pill CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenConsultation}
                  className="btn-pill-primary group"
                >
                  <span>Request Strategic Site Review</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={scrollToVideo}
                  className="btn-pill-secondary group"
                >
                  <Play className="w-3.5 h-3.5 fill-pink-500 text-pink-500 group-hover:scale-110 transition-transform" />
                  <span>Watch Screencast (0:40)</span>
                </button>
              </div>

              {/* 4 Core Strategic Pillars in White & Baby Pink Glass Cards */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="p-3.5 rounded-2xl border border-pink-100 bg-white/90 shadow-[0_2px_12px_rgba(244,114,182,0.06)] hover:border-pink-300 transition-colors">
                  <span className="font-mono font-bold text-xs text-pink-600 block">01 / Speed</span>
                  <span className="text-xs text-slate-600 leading-tight block mt-0.5 font-medium">Core Web Vitals &lt; 1.2s</span>
                </div>
                <div className="p-3.5 rounded-2xl border border-pink-100 bg-white/90 shadow-[0_2px_12px_rgba(244,114,182,0.06)] hover:border-pink-300 transition-colors">
                  <span className="font-mono font-bold text-xs text-pink-600 block">02 / Local 3-Pack</span>
                  <span className="text-xs text-slate-600 leading-tight block mt-0.5 font-medium">Sunsari Google Maps</span>
                </div>
                <div className="p-3.5 rounded-2xl border border-pink-100 bg-white/90 shadow-[0_2px_12px_rgba(244,114,182,0.06)] hover:border-pink-300 transition-colors">
                  <span className="font-mono font-bold text-xs text-pink-600 block">03 / Entities</span>
                  <span className="text-xs text-slate-600 leading-tight block mt-0.5 font-medium">Topical Maps & EAV</span>
                </div>
                <div className="p-3.5 rounded-2xl border border-pink-100 bg-white/90 shadow-[0_2px_12px_rgba(244,114,182,0.06)] hover:border-pink-300 transition-colors">
                  <span className="font-mono font-bold text-xs text-pink-600 block">04 / Ownership</span>
                  <span className="text-xs text-slate-600 leading-tight block mt-0.5 font-medium">Zero Lock-in Retainers</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Workspace Visual with Baby Pink Ring Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl border-2 border-pink-200/90 bg-white shadow-[0_12px_40px_rgba(244,114,182,0.18)] overflow-hidden group">
                <img 
                  src="/images/seo-hero-desk.jpg" 
                  alt="Professional SEO consultant desk workstation in Itahari, Nepal with laptop displaying code and topical map"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Visual Overlay Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-mono font-semibold border border-pink-200 shadow-xs">
                    ITAHARI WORKBENCH • 26.66° N
                  </span>
                </div>

                {/* Floating Screencast Pill */}
                <button
                  onClick={scrollToVideo}
                  className="absolute bottom-3.5 right-3.5 px-4 py-2 rounded-full bg-white/95 hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 hover:text-white text-slate-900 font-sans text-xs font-semibold shadow-md flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105 border border-pink-200 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping inline-block" />
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Screencast (0:40)</span>
                </button>
              </div>

              {/* Floating Performance Indicator */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3.5 rounded-2xl border border-pink-200 bg-white shadow-xl items-center gap-3 animate-float">
                <div className="w-8 h-8 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 flex items-center justify-center font-bold text-sm shadow-xs">
                  ✓
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block font-heading">PageSpeed 98/100</span>
                  <span className="text-pink-600 block font-mono text-[11px] font-semibold">Mobile LCP 0.7s (Passing)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Live Terminal Simulator */}
          <div className="mt-14">
            <TerminalCrawlSimulator />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* INFINITE MARQUEE TICKER (WHITE & BABY PINK) */}
      {/* ======================================================== */}
      <TechMarquee />

      {/* ======================================================== */}
      {/* SECTION 2: THE PHILOSOPHY */}
      {/* ======================================================== */}
      <ThePhilosophySection 
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* ======================================================== */}
      {/* SECTION: DEDICATED VIDEO SCREENCAST / TECHNICAL AUDIT REEL */}
      {/* ======================================================== */}
      <section id="screencast-walkthrough" className="py-16 sm:py-24 border-b border-pink-100 bg-[#fff5f8] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-pink-100 text-pink-700 border border-pink-200">
                TECHNICAL SCREENCAST • 40-SECOND DEMO
              </span>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                ● 5 Real Audit Phases
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Watch How a Technical SEO Audit Operates in Real-Time
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Step inside a recorded audit walkthrough: watch us inspect raw DOM bottlenecks, inject verified JSON-LD graphs, climb from #23 to #1 on Google Maps in Sunsari, and accelerate Core Web Vitals to 98/100.
            </p>
          </div>

          {/* Interactive Screencast Video Player */}
          <VideoAuditAnimation />
        </div>
      </section>

      {/* ======================================================== */}
      {/* CREATIVE ELEMENT: BEFORE VS AFTER COMPARISON */}
      {/* ======================================================== */}
      <section className="py-8 bg-white border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterComparison />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: CONSULTANT PROFILE & LOCAL REALITY */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-pink-100 bg-[#fffafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Portrait & Studio Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl border-2 border-pink-200/90 bg-white shadow-xl overflow-hidden group">
                <img 
                  src="/images/seo-consultant-profile.jpg" 
                  alt="Nisha Poudel - Senior SEO Expert and Technical Search Strategist in Itahari, Nepal"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="p-4 bg-white border-t border-pink-100 font-sans text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold font-heading">Nisha Poudel — Senior SEO Strategist</strong>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 font-semibold font-mono">
                      DIRECT ADVISORY
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Ward 4, Itahari Sub-Metropolitan City • Sunsari District, Koshi Province
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Local Reality Story */}
            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-pink-50 text-pink-700 border border-pink-200">
                PRACTICE PROFILE • NISHA POUDEL (ITAHARI, SUNSARI)
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
                Meet Nisha Poudel – Engineering Organic Search Growth from Eastern Nepal.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-normal">
                I am Nisha Poudel, an independent SEO practitioner and technical search strategist located in <strong>Itahari Sub-Metropolitan City (Ward 4), Sunsari District, Koshi Province, Nepal</strong>. Itahari sits directly at the strategic junction where the East-West Mahendra Highway meets the Dharan-Biratnagar corridor. Every day, thousands of local consumers, regional enterprises, and travelers query Google on mobile devices for medical clinics, wholesale industrial suppliers, boutique hotels, engineering services, and educational institutions.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-normal">
                When prospective customers search for local services in Sunsari and Eastern Nepal, Google presents the Local 3-Pack map block first. If your Google Business Profile has conflicting citations or your website experiences rendering delays, nearby competitors capture that revenue. I systematically architect your digital assets and semantic topical maps to dominate organic and local search intent.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full border border-pink-200 bg-white text-slate-700 shadow-2xs">Itahari Main Chowk</span>
                <span className="px-3 py-1 rounded-full border border-pink-200 bg-white text-slate-700 shadow-2xs">Dharan Road Corridor</span>
                <span className="px-3 py-1 rounded-full border border-pink-200 bg-white text-slate-700 shadow-2xs">Biratnagar Industrial Belt</span>
                <span className="px-3 py-1 rounded-full border border-pink-200 bg-white text-slate-700 shadow-2xs">Sunsari District</span>
              </div>

              {/* Client Engagement Scope */}
              <div className="p-5 rounded-2xl border border-pink-100 bg-white shadow-xs mt-4">
                <span className="font-mono text-xs font-bold uppercase text-pink-600 block mb-2.5">
                  // Client Engagement Scope:
                </span>
                <ul className="space-y-2 text-xs text-slate-700 font-sans">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <span><strong>Local & Regional Businesses:</strong> Clinics, retailers, hospitality brands, and professional practices in Sunsari needing genuine inbound inquiries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <span><strong>E-commerce & Catalog Stores:</strong> Online retailers losing crawl budget to faceted navigation traps and duplicate product pages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <span><strong>Algorithm Recovery:</strong> Websites impacted by Google Core updates requiring deep architectural audits and code remediation.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: 7 CORE COMMERCIAL SERVICES (SPOTLIGHT BENTO CARDS) */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 border-b border-pink-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-pink-50 text-pink-700 border border-pink-200 mb-2">
              COMMERCIAL PILLARS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 font-heading uppercase">
              7 Strategic Organic Search Solutions
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Each engagement is engineered around a dedicated commercial intent cluster, avoiding bloated retainers. Move your cursor over each card to inspect the dynamic spotlight glow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((svc, idx) => (
              <SpotlightCard
                key={svc.slug}
                className="p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700">
                      Service 0{idx + 1}
                    </span>
                    <span className="font-mono text-xs font-semibold text-pink-600">
                      {svc.searchIntent} Intent
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {svc.heroDescription}
                  </p>

                  <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-100 text-xs font-mono space-y-0.5 mb-5">
                    <span className="text-[10px] text-slate-400 block uppercase">Primary Entity:</span>
                    <strong className="text-slate-800 text-[11px]">{svc.targetEntity}</strong>
                  </div>
                </div>

                <a
                  href={`/services/${svc.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/services/${svc.slug}`);
                  }}
                  className="w-full py-2.5 rounded-xl border border-pink-200 bg-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 hover:text-white text-slate-900 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 group cursor-pointer shadow-2xs"
                >
                  <span>Explore Deliverables & SOP Links</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* INTERACTIVE COMPONENT: TOPICAL MAP VISUALIZER */}
      {/* ======================================================== */}
      <section className="py-12 bg-[#fffafc] border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TopicalMapVisualizer onNavigate={onNavigate} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: 6-STEP WORKFLOW */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 border-b border-pink-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-pink-50 text-pink-700 border border-pink-200 mb-2">
              DISCIPLINED SPRINT ROADMAP
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 font-heading">
              The 6-Phase Technical Implementation Framework
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Zero ambiguity. Every phase executes concrete code-level and content architecture improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: '01', title: 'Code & Log File Inspection', desc: 'Direct analysis of server log files, JavaScript execution overhead, and Google Search Console performance trends.' },
              { num: '02', title: 'Commercial Keyword Mining', desc: 'Identification of high-converting search queries across Sunsari, Eastern Nepal, and global buyer markets.' },
              { num: '03', title: '120-Point Technical Cleanup', desc: 'Eradicating crawl budget traps, eliminating Core Web Vitals latency, and resolving status code errors.' },
              { num: '04', title: 'Topical Map Architecture', desc: 'Structuring content pillars so every informational guide channels topical authority into money pages.' },
              { num: '05', title: 'Direct Engineering Deployment', desc: 'Implementing structured JSON-LD schemas and on-page centerpiece content without developer friction.' },
              { num: '06', title: 'Monthly KPI Review & Iteration', desc: 'Transparent reporting evaluating verified inbound calls, organic impressions, and closed commercial inquiries.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-pink-100 p-6 shadow-xs hover:border-pink-300 hover:-translate-y-1 transition-all space-y-2">
                <span className="font-mono text-xs font-bold text-pink-600 block">
                  Phase {step.num}
                </span>
                <h3 className="font-bold text-sm text-slate-900 font-heading">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: DELIVERABLES & CASE STUDIES WITH DASHBOARD IMAGE */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-pink-100 bg-[#fffafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-pink-50 text-pink-700 border border-pink-200">
                VERIFIABLE ARCHITECTURAL OUTPUTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Enterprise-Grade Deliverables & Data-Backed Outcomes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                We inspect raw crawl logs and track exponential keyword growth. Every client receives code-level pull requests, custom JSON-LD schema graphs, and verified Google Search Console monitoring.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 font-semibold">
                  ✓ Core Web Vitals 98/100
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-pink-200 text-slate-700 font-semibold shadow-2xs">
                  ✓ Google 3-Pack Pin Surge
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-pink-200 text-slate-700 font-semibold shadow-2xs">
                  ✓ Validated Schema Graph
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border-2 border-pink-200/90 bg-white shadow-xl overflow-hidden group">
                <img 
                  src="/images/organic-growth-dashboard.jpg" 
                  alt="Modern SEO analytics dashboard mockup with organic clicks curve climbing and 98/100 Core Web Vitals score"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-3 bg-white border-t border-pink-100 font-mono text-[11px] text-slate-600 flex items-center justify-between">
                  <span>Artifact: Verified Organic Growth Curve (6-Month Trajectory)</span>
                  <span className="font-bold text-pink-600">+3,900% Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {caseStudiesData.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-2xl border border-pink-100 p-6 sm:p-7 flex flex-col justify-between hover:border-pink-300 hover:-translate-y-1 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-pink-600">
                      // {cs.industry}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {cs.timeframe}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cs.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-pink-50/50 border border-pink-100 text-center font-mono">
                    {cs.results.map((r, rIdx) => (
                      <div key={rIdx}>
                        <span className="block text-pink-600 font-bold text-xs sm:text-sm">{r.metric}</span>
                        <span className="block text-[10px] text-slate-500 truncate">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-pink-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{cs.clientType}</span>
                  <button
                    onClick={() => onNavigate('/case-studies')}
                    className="text-xs font-mono text-pink-600 hover:text-pink-700 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 7: ETHICS & VERIFIED FEEDBACK */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-pink-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-pink-50 text-pink-700 border border-pink-200">
              ETHICAL COMPLIANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 font-heading">
              Client Feedback & Transparency Policy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We never fabricate fake reviews or buy synthetic five-star ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl border border-pink-100 p-6 flex flex-col justify-between hover:border-pink-300 transition-all shadow-xs"
              >
                <div>
                  <div className="font-mono text-xs text-pink-600 font-bold mb-3">
                    [Verified Client Feedback]
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed mb-4">
                    "{t.feedback}"
                  </p>
                </div>
                <div className="border-t border-pink-100 pt-3">
                  <h4 className="text-xs font-bold text-slate-900 font-heading">{t.clientName}</h4>
                  <p className="text-[11px] text-slate-500">{t.businessName} • {t.location}</p>
                  <p className="text-[10px] font-mono text-pink-600 font-semibold mt-1">{t.serviceReceived}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl border border-pink-100 bg-pink-50/50 text-xs text-slate-700 flex items-start gap-3 max-w-2xl mx-auto">
            <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-bold font-heading">{testimonialEthicsPolicy.notice}</strong>
              <p className="text-[11px] text-slate-500 mt-0.5">{testimonialEthicsPolicy.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 8: FAQS */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-pink-100 bg-[#fffafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-pink-50 text-pink-700 border border-pink-200 mb-2">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Transparent answers regarding guarantees, timelines, and pricing models.
            </p>
          </div>

          <div className="space-y-3">
            {categorizedFaqData[0].items.concat(categorizedFaqData[1].items.slice(0, 2)).map((faq, idx) => (
              <details
                key={idx}
                className="group p-4 sm:p-5 rounded-2xl border border-pink-100 bg-white transition-all open:border-pink-300 shadow-2xs"
              >
                <summary className="font-bold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4 font-heading select-none">
                  <span>{faq.question}</span>
                  <span className="font-mono text-xs text-pink-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-xs text-slate-600 leading-relaxed mt-3 pt-3 border-t border-pink-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('/faq')}
              className="text-xs font-mono font-bold text-pink-600 hover:text-pink-700 cursor-pointer"
            >
              Browse complete FAQ knowledge base (12+ answers) &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 9: FINAL CONVERSION CTA (WHITE & BABY PINK GLOW) */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#fff5f8] to-[#fce7f3] text-slate-900 relative overflow-hidden border-t border-pink-200">
        {/* Glow backdrop */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.45) 0%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full border border-pink-300 font-mono text-xs text-pink-700 bg-white shadow-xs">
            SENIOR CONSULTANCY • LIMITED CLIENT CAPACITY
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight font-heading">
            Let's examine your site and build a strategy that works.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you operate a clinic in Itahari, an online retail brand, or require an enterprise 120-point technical audit, you work directly with a senior SEO architect.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
            <button
              onClick={onOpenConsultation}
              className="btn-pill-primary group w-full sm:w-auto"
            >
              <span>Schedule 1-on-1 Strategic Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/9779800000000?text=Namaste!%20I%20would%20like%20to%20discuss%20SEO%20for%20my%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-secondary w-full sm:w-auto"
            >
              <span>Direct WhatsApp (+977 980-0000000)</span>
            </a>
          </div>

          <p className="text-xs font-mono text-slate-500 pt-2">
            Itahari, Sunsari, Nepal • Guaranteed response within 24 business hours
          </p>
        </div>
      </section>

    </div>
  );
};
