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
  Award
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

// Jishnu Mondal Reference Creative Components
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
    <div className="flex flex-col w-full bg-[#090b0e] text-slate-100 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* ======================================================== */}
      {/* SECTION 1: CINEMATIC HERO (JISHNU MONDAL REFERENCE) */}
      {/* ======================================================== */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden border-b border-white/10 select-none bg-[#090b0e]">
        {/* Floating Ambient Dust Particles */}
        <AmbientDust />

        {/* Cinematic Backdrop Glow Layers */}
        <div 
          className="absolute inset-0 pointer-events-none z-[4]" 
          style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 35%, transparent 25%, #090b0e 100%)' }} 
          aria-hidden="true" 
        />
        <div 
          className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[620px] sm:h-[620px] md:w-[840px] md:h-[840px] pointer-events-none opacity-30 z-[5]" 
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(249,115,22,0.06) 45%, transparent 70%)',
            filter: 'blur(50px)'
          }} 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Prop & Kinetic Typography */}
            <div className="lg:col-span-7 space-y-6">
              {/* Luminous Status Badge with Profile Avatar */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md">
                <img 
                  src="/images/seo-consultant-profile.jpg" 
                  alt="Nisha Poudel - Senior SEO Consultant" 
                  className="w-5 h-5 rounded-full object-cover object-top ring-1.5 ring-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                <span className="text-emerald-400 text-[11px] font-mono font-semibold tracking-[0.2em] uppercase">
                  TECHNICAL SEARCH STRATEGIST • SUNSARI, KOSHI PROVINCE
                </span>
              </div>

              {/* Exact Authoritative Primary Entity H1 */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-heading uppercase drop-shadow-sm">
                SEO Expert in Itahari, Nepal
              </h1>

              {/* Sophisticated Executive Value Proposition */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-2xl">
                Architecting sustainable organic search growth, code-level speed optimization, structured semantic knowledge graphs, and dominant local Google 3-Pack authority for ambitious businesses across Eastern Nepal and beyond.
              </p>

              {/* Glowing Pill CTAs (Jishnu Style) */}
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
                  <Play className="w-3.5 h-3.5 fill-white group-hover:fill-emerald-400 transition-colors" />
                  <span>Watch Screencast (0:40)</span>
                </button>
              </div>

              {/* 4 Core Strategic Pillars in Matte Glass Cards */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                  <span className="font-mono font-bold text-xs text-emerald-400 block">01 / Speed</span>
                  <span className="text-xs text-slate-300 leading-tight block mt-0.5">Core Web Vitals &lt; 1.2s</span>
                </div>
                <div className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                  <span className="font-mono font-bold text-xs text-emerald-400 block">02 / Local 3-Pack</span>
                  <span className="text-xs text-slate-300 leading-tight block mt-0.5">Sunsari Google Maps</span>
                </div>
                <div className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                  <span className="font-mono font-bold text-xs text-emerald-400 block">03 / Entities</span>
                  <span className="text-xs text-slate-300 leading-tight block mt-0.5">Topical Maps & EAV</span>
                </div>
                <div className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                  <span className="font-mono font-bold text-xs text-emerald-400 block">04 / Ownership</span>
                  <span className="text-xs text-slate-300 leading-tight block mt-0.5">Zero Lock-in Retainers</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Workspace Visual with Glowing Border */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl border border-white/15 bg-[#11151c] shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden group">
                <img 
                  src="/images/seo-hero-desk.jpg" 
                  alt="Professional SEO consultant desk workstation in Itahari, Nepal with laptop displaying code and topical map"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="eager"
                />
                
                {/* Visual Overlay Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#090b0e]/80 backdrop-blur-md text-white text-[11px] font-mono font-medium border border-white/20">
                    ITAHARI WORKBENCH • 26.66° N
                  </span>
                </div>

                {/* Floating Screencast Pill */}
                <button
                  onClick={scrollToVideo}
                  className="absolute bottom-3.5 right-3.5 px-4 py-2 rounded-full bg-[#090b0e]/90 hover:bg-emerald-500 hover:text-slate-950 text-white font-sans text-xs font-semibold shadow-lg flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105 border border-white/20 hover:border-emerald-400 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Screencast (0:40)</span>
                </button>
              </div>

              {/* Floating Performance Indicator */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3.5 rounded-2xl border border-white/15 bg-[#11151c]/90 backdrop-blur-md shadow-2xl items-center gap-3 animate-float">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  ✓
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white block font-heading">PageSpeed 98/100</span>
                  <span className="text-emerald-400 block font-mono text-[11px]">Mobile LCP 0.7s (Passing)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Live Terminal Simulator in Dark Luxury Mode */}
          <div className="mt-14">
            <TerminalCrawlSimulator />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* INFINITE MARQUEE TICKER (JISHNU MONDAL REFERENCE) */}
      {/* ======================================================== */}
      <TechMarquee />

      {/* ======================================================== */}
      {/* SECTION 2: THE PHILOSOPHY (JISHNU MONDAL REFERENCE) */}
      {/* ======================================================== */}
      <ThePhilosophySection 
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* ======================================================== */}
      {/* SECTION: DEDICATED VIDEO SCREENCAST / TECHNICAL AUDIT REEL */}
      {/* ======================================================== */}
      <section id="screencast-walkthrough" className="py-16 sm:py-24 border-b border-white/10 bg-[#0c0f14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                TECHNICAL SCREENCAST • 40-SECOND DEMO
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                ● 5 Real Audit Phases
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Watch How a Technical SEO Audit Operates in Real-Time
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
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
      <section className="py-8 bg-[#090b0e] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterComparison />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: CONSULTANT PROFILE & LOCAL REALITY */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-white/10 bg-[#0e1218]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Portrait & Studio Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl border border-white/15 bg-[#141923] shadow-2xl overflow-hidden group">
                <img 
                  src="/images/seo-consultant-profile.jpg" 
                  alt="Portrait of Nepali SEO Consultant and Tech Founder in Itahari, Nepal"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                
                <div className="p-4 bg-[#090b0e]/95 border-t border-white/10 font-sans text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-white font-bold font-heading">Senior SEO Strategist & Web Architect</strong>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold font-mono">
                      DIRECT ADVISORY
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Ward 4, Itahari Sub-Metropolitan City • Sunsari District, Koshi Province
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Local Reality Story */}
            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                PRACTICE PROFILE • ITAHARI, SUNSARI
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-heading">
                Operating from Eastern Nepal’s Premier Commercial Crossroads.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-light">
                Itahari sits directly at the strategic junction where the East-West Mahendra Highway meets the Dharan-Biratnagar corridor. Every day, thousands of local consumers, regional enterprises, and travelers query Google on mobile devices for medical clinics, wholesale industrial suppliers, boutique hotels, engineering services, and educational institutions.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-light">
                When prospective customers search for local services in Sunsari and Eastern Nepal, Google presents the Local 3-Pack map block first. If your Google Business Profile has conflicting citations or your website experiences rendering delays, nearby competitors capture that revenue. We systematically architect your digital assets to dominate local intent.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300">Itahari Main Chowk</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300">Dharan Road Corridor</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300">Biratnagar Industrial Belt</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300">Sunsari District</span>
              </div>

              {/* Client Qualification Card */}
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm mt-4">
                <span className="font-mono text-xs font-bold uppercase text-emerald-400 block mb-2.5">
                  // Client Engagement Scope:
                </span>
                <ul className="space-y-2 text-xs text-slate-300 font-sans">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Local & Regional Businesses:</strong> Clinics, retailers, hospitality brands, and professional practices in Sunsari needing genuine inbound inquiries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>E-commerce & Catalog Stores:</strong> Online retailers losing crawl budget to faceted navigation traps and duplicate product pages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#090b0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
              COMMERCIAL PILLARS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 font-heading uppercase">
              7 Strategic Organic Search Solutions
            </h2>
            <p className="text-sm text-slate-400 mt-1">
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
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                      Service 0{idx + 1}
                    </span>
                    <span className="font-mono text-xs font-semibold text-teal-300">
                      {svc.searchIntent} Intent
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-heading">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {svc.heroDescription}
                  </p>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono space-y-0.5 mb-5">
                    <span className="text-[10px] text-slate-400 block uppercase">Primary Entity:</span>
                    <strong className="text-emerald-300 text-[11px]">{svc.targetEntity}</strong>
                  </div>
                </div>

                <a
                  href={`/services/${svc.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/services/${svc.slug}`);
                  }}
                  className="w-full py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 group cursor-pointer"
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
      <section className="py-12 bg-[#0c0f14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TopicalMapVisualizer onNavigate={onNavigate} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: 6-STEP WORKFLOW */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#090b0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
              DISCIPLINED SPRINT ROADMAP
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 font-heading">
              The 6-Phase Technical Implementation Framework
            </h2>
            <p className="text-sm text-slate-400 mt-1">
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
              <div key={idx} className="bg-[#11151c] rounded-2xl border border-white/10 p-6 hover:border-emerald-500/40 hover:-translate-y-1 transition-all space-y-2">
                <span className="font-mono text-xs font-bold text-emerald-400 block">
                  Phase {step.num}
                </span>
                <h3 className="font-bold text-sm text-white font-heading">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: DELIVERABLES & CASE STUDIES WITH DASHBOARD IMAGE */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-white/10 bg-[#0e1218]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                VERIFIABLE ARCHITECTURAL OUTPUTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Enterprise-Grade Deliverables & Data-Backed Outcomes
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                We inspect raw crawl logs and track exponential keyword growth. Every client receives code-level pull requests, custom JSON-LD schema graphs, and verified Google Search Console monitoring.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold">
                  ✓ Core Web Vitals 98/100
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold">
                  ✓ Google 3-Pack Pin Surge
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold">
                  ✓ Validated Schema Graph
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-white/15 bg-[#141923] shadow-2xl overflow-hidden group">
                <img 
                  src="/images/organic-growth-dashboard.jpg" 
                  alt="Modern SEO analytics dashboard mockup with organic clicks curve climbing and 98/100 Core Web Vitals score"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="p-3 bg-[#090b0e] border-t border-white/10 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Artifact: Verified Organic Growth Curve (6-Month Trajectory)</span>
                  <span className="font-bold text-emerald-400">+3,900% Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {caseStudiesData.map((cs) => (
              <div
                key={cs.id}
                className="bg-[#11151c] rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      // {cs.industry}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {cs.timeframe}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 font-heading">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cs.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center font-mono">
                    {cs.results.map((r, rIdx) => (
                      <div key={rIdx}>
                        <span className="block text-emerald-400 font-bold text-xs sm:text-sm">{r.metric}</span>
                        <span className="block text-[10px] text-slate-400 truncate">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">{cs.clientType}</span>
                  <button
                    onClick={() => onNavigate('/case-studies')}
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
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
      <section className="py-16 sm:py-20 border-b border-white/10 bg-[#090b0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              ETHICAL COMPLIANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 font-heading">
              Client Feedback & Transparency Policy
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We never fabricate fake reviews or buy synthetic five-star ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="bg-[#11151c] rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all"
              >
                <div>
                  <div className="font-mono text-xs text-emerald-400 font-bold mb-3">
                    [Verified Client Feedback]
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                    "{t.feedback}"
                  </p>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <h4 className="text-xs font-bold text-white font-heading">{t.clientName}</h4>
                  <p className="text-[11px] text-slate-400">{t.businessName} • {t.location}</p>
                  <p className="text-[10px] font-mono text-emerald-400 font-semibold mt-1">{t.serviceReceived}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] text-xs text-slate-300 flex items-start gap-3 max-w-2xl mx-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-bold font-heading">{testimonialEthicsPolicy.notice}</strong>
              <p className="text-[11px] text-slate-400 mt-0.5">{testimonialEthicsPolicy.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 8: FAQS */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-white/10 bg-[#0c0f14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Transparent answers regarding guarantees, timelines, and pricing models.
            </p>
          </div>

          <div className="space-y-3">
            {categorizedFaqData[0].items.concat(categorizedFaqData[1].items.slice(0, 2)).map((faq, idx) => (
              <details
                key={idx}
                className="group p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#11151c] transition-all open:border-emerald-500/30"
              >
                <summary className="font-bold text-sm text-white cursor-pointer list-none flex items-center justify-between gap-4 font-heading select-none">
                  <span>{faq.question}</span>
                  <span className="font-mono text-xs text-emerald-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-xs text-slate-300 leading-relaxed mt-3 pt-3 border-t border-white/10">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('/faq')}
              className="text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
            >
              Browse complete FAQ knowledge base (12+ answers) &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 9: FINAL CONVERSION CTA (GLOWING PILL CTA) */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#090b0e] text-white relative overflow-hidden">
        {/* Glow backdrop */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full border border-emerald-500/30 font-mono text-xs text-emerald-400 bg-emerald-500/10">
            SENIOR CONSULTANCY • LIMITED CLIENT CAPACITY
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-heading">
            Let's examine your site and build a strategy that works.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
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
