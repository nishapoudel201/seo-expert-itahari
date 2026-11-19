import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Zap, 
  MapPin, 
  Code2, 
  Terminal,
  Activity,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface Chapter {
  id: number;
  time: number;
  label: string;
  short: string;
  badge: string;
  subtitle: string;
}

const chapters: Chapter[] = [
  {
    id: 0,
    time: 0,
    label: '01: Code Crawl & Bottlenecks',
    short: '01: Crawl',
    badge: 'DIAGNOSTIC SCAN',
    subtitle: 'Scanning live DOM: Detecting rendering bottlenecks, slow assets, and missing entity tags...'
  },
  {
    id: 1,
    time: 8,
    label: '02: Schema & Entity Injection',
    short: '02: Schema',
    badge: 'JSON-LD GRAPH',
    subtitle: 'Injecting structured LocalBusiness graph: Linking Itahari coordinates to Google Knowledge Vault...'
  },
  {
    id: 2,
    time: 16,
    label: '03: Sunsari Google 3-Pack Climb',
    short: '03: Maps #1',
    badge: 'MAP PACK SURGE',
    subtitle: 'Resolving NAP conflicts across Sunsari directories: Business climbs from #23 to #1 on Google Maps...'
  },
  {
    id: 3,
    time: 24,
    label: '04: Core Web Vitals (98/100)',
    short: '04: Speed',
    badge: 'CWV ACCELERATION',
    subtitle: 'Converting images to WebP and purging unused scripts: LCP drops from 4.8s to 0.7s...'
  },
  {
    id: 4,
    time: 32,
    label: '05: Organic Traffic Hockey Stick',
    short: '05: Revenue',
    badge: 'COMPOUNDING LEADS',
    subtitle: 'Topical authority established: Inbound high-intent phone calls and inquiries grow by 390%...'
  }
];

export const VideoAuditAnimation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.5 | 2>(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const duration = 40; // 40-second total walkthrough cycle

  // Timer loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            return 0; // loop
          }
          return Number((prev + 0.1 * playbackSpeed).toFixed(1));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const currentChapterIndex = Math.min(
    chapters.length - 1,
    Math.max(0, chapters.findIndex((c, i) => {
      const nextTime = chapters[i + 1]?.time ?? duration;
      return currentTime >= c.time && currentTime < nextTime;
    }))
  );

  const activeChapter = chapters[currentChapterIndex] || chapters[0];
  const progressPercent = (currentTime / duration) * 100;

  const handleSeek = (time: number) => {
    setCurrentTime(time);
  };

  const toggleSpeed = () => {
    setPlaybackSpeed((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1));
  };

  const formatTime = (secs: number) => {
    const s = Math.floor(secs);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `0${m}:${rem < 10 ? '0' : ''}${rem}`;
  };

  return (
    <div 
      ref={containerRef}
      className={`rounded-2xl border border-slate-800 bg-slate-950 text-white shadow-2xl overflow-hidden transition-all duration-300 relative ${
        isFullscreen ? 'fixed inset-4 z-50 rounded-2xl max-h-[95vh] flex flex-col justify-between' : 'my-8'
      }`}
    >
      {/* ======================================================== */}
      {/* VIDEO PLAYER TOP CHROME */}
      {/* ======================================================== */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          {/* Mac-style traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block" />
              RECORDING SESSION
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 font-medium hidden sm:inline truncate max-w-xs">
              technical_seo_walkthrough_itahari.mp4
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-emerald-400 border border-slate-700 font-semibold font-mono">
            1080p 60FPS
          </span>
          <span className="text-slate-300 font-semibold">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VIDEO DISPLAY SCREEN (ANIMATED CONTENT STAGE) */}
      {/* ======================================================== */}
      <div className="relative min-h-[380px] sm:min-h-[440px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-5 sm:p-8 flex flex-col justify-between overflow-hidden">
        
        {/* Subtle grid lines background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#334155 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Top Overlay Badge & Action Indicator */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              PHASE {currentChapterIndex + 1} OF 5 • {activeChapter.badge}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden md:inline">
              Live Architecture Sprint
            </span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800 text-[11px] font-mono text-slate-300">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
            <span>Target: Itahari, Sunsari (NP)</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SCENE CONTENT (TRANSITIONS WITH CURRENT TIME) */}
        {/* ======================================================== */}
        <div className="relative z-10 my-4 flex-1 flex items-center justify-center">

          {/* SCENE 0: Initial Code & DOM Crawl */}
          {currentChapterIndex === 0 && (
            <div className="w-full max-w-2xl bg-slate-900/90 text-slate-200 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs font-mono">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Googlebot Crawl Diagnostic: https://itahari-business.com</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[10px] font-bold">
                  TTFB: 840ms (Suboptimal)
                </span>
              </div>

              {/* Scanning visual laser */}
              <div className="relative p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center text-rose-400 font-semibold">
                  <span>[!] Critical Infrastructure Deficiencies Detected:</span>
                  <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/40">
                    4 Bottlenecks
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Missing LocalBusiness schema graph. Zero rich snippet eligibility.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>LCP 4.8s on Nepal 4G mobile networks. 2.4MB uncompressed hero assets.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Inconsistent NAP address: "Main Chowk" vs "Ward 4 Dharan Road".</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>H1 tag missing localized geo-entity ("Itahari, Nepal").</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCENE 1: Schema Graph & Entity Triples */}
          {currentChapterIndex === 1 && (
            <div className="w-full max-w-2xl bg-slate-900/90 text-slate-200 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-300 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>Schema.org JSON-LD Knowledge Graph Injection</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  GOOGLE VALIDATED
                </span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-[11px] leading-relaxed text-emerald-300">
                <pre className="whitespace-pre-wrap">{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Itahari Premier Healthcare & Wellness",
  "telephone": "+977 980-0000000",
  "address": {
    "streetAddress": "Main Chowk, Ward 4",
    "addressLocality": "Itahari",
    "addressRegion": "Koshi Province",
    "postalCode": "56705",
    "addressCountry": "NP"
  },
  "geo": { "latitude": 26.6657, "longitude": 87.2798 }
}`}</pre>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[11px]">
                <span className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Knowledge Triples Bound: Itahari ➔ Health Clinic ➔ Sunsari</span>
                </span>
                <span className="text-emerald-400 font-bold">Rich Snippet Active</span>
              </div>
            </div>
          )}

          {/* SCENE 2: Google Maps 3-Pack Climb */}
          {currentChapterIndex === 2 && (
            <div className="w-full max-w-2xl bg-slate-900/90 text-slate-200 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-5 animate-in fade-in zoom-in-95 duration-300 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Google Maps Ranking Grid: "best clinic in itahari"</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-bold text-emerald-400">
                  SUNSARI GEOGRID
                </span>
              </div>

              {/* Map grid simulation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">Baseline Rank</span>
                  <span className="text-3xl font-extrabold text-slate-500 line-through">
                    #23
                  </span>
                  <span className="text-[10px] text-rose-400 block font-medium">Page 3 Organic</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">Month 2 Sprint</span>
                  <span className="text-3xl font-extrabold text-amber-400">
                    #5
                  </span>
                  <span className="text-[10px] text-amber-400 block font-medium">+18 Positions Climbed</span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/50 text-center space-y-1 shadow-lg">
                  <span className="text-[10px] text-emerald-400 uppercase block font-semibold">Current Standing</span>
                  <span className="text-3xl font-extrabold text-emerald-300">
                    #1 TOP
                  </span>
                  <span className="text-[10px] font-bold text-emerald-300 block">
                    ★ In Local 3-Pack
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-center justify-between">
                <span className="text-slate-400">Local Search Visibility in Itahari & Dharan:</span>
                <span className="font-bold text-emerald-400">+340% Direct Phone Calls</span>
              </div>
            </div>
          )}

          {/* SCENE 3: Core Web Vitals (98/100) */}
          {currentChapterIndex === 3 && (
            <div className="w-full max-w-2xl bg-slate-900/90 text-slate-200 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-5 animate-in fade-in zoom-in-95 duration-300 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Google Lighthouse & Core Web Vitals Audit</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-bold text-emerald-400">
                  ALL VITALS GREEN
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">Performance</span>
                  <span className="text-2xl font-extrabold text-emerald-400 block mt-0.5">98/100</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">Optimal</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">LCP (Load)</span>
                  <span className="text-2xl font-extrabold text-emerald-400 block mt-0.5">0.7s</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">&lt; 2.5s Standard</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">CLS (Shift)</span>
                  <span className="text-2xl font-extrabold text-emerald-400 block mt-0.5">0.00</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">Zero Shift</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">INP (Response)</span>
                  <span className="text-2xl font-extrabold text-emerald-400 block mt-0.5">42ms</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">Instant</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-center justify-between">
                <span className="text-slate-400">Mobile Page Load Experience (Nepal Networks):</span>
                <span className="font-bold text-emerald-400">Sub-second rendering</span>
              </div>
            </div>
          )}

          {/* SCENE 4: Organic Growth Hockey Stick */}
          {currentChapterIndex === 4 && (
            <div className="w-full max-w-2xl bg-slate-900/90 text-slate-200 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-5 animate-in fade-in zoom-in-95 duration-300 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Google Search Console: 6-Month Organic Trajectory</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-bold text-emerald-400">
                  VERIFIED OUTCOME
                </span>
              </div>

              {/* Animated SVG Hockey Stick Curve */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden">
                <div className="flex justify-between text-[11px] text-slate-400 mb-2 font-mono">
                  <span>Month 1: 1,200 impr/mo</span>
                  <span className="font-bold text-emerald-400">Month 6: 48,200 impr/mo (+3,900%)</span>
                </div>
                <svg className="w-full h-24 stroke-emerald-500" viewBox="0 0 400 100" fill="none">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Organic curve */}
                  <path 
                    d="M 10 85 Q 120 80, 200 60 T 320 25 T 390 10" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                  />
                  {/* Shaded area */}
                  <path 
                    d="M 10 85 Q 120 80, 200 60 T 320 25 T 390 10 L 390 95 L 10 95 Z" 
                    fill="#10b981" 
                    fillOpacity="0.12" 
                  />
                  {/* Nodes */}
                  <circle cx="10" cy="85" r="4" fill="#64748b" />
                  <circle cx="200" cy="60" r="4" fill="#64748b" />
                  <circle cx="390" cy="10" r="5" fill="#10b981" className="animate-ping" />
                  <circle cx="390" cy="10" r="5" fill="#10b981" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">Total Inquiries</span>
                  <strong className="text-base text-white font-bold">+280% Phone Calls</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">Generated Revenue Value</span>
                  <strong className="text-base text-emerald-400 font-bold">NPR 1.45M+ Pipeline</strong>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Subtitles & Narrative Box */}
        <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <p className="text-white text-xs leading-relaxed">
              <strong className="text-emerald-400">Consultant Walkthrough: </strong>
              {activeChapter.subtitle}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1 shrink-0 text-slate-500 text-[10px] uppercase font-bold">
            <span>[Audio Transcribed]</span>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* VIDEO CONTROLS BAR & SCRUBBER */}
      {/* ======================================================== */}
      <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 space-y-3 font-mono">
        
        {/* Timeline Scrubber */}
        <div className="relative">
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newTime = (clickX / rect.width) * duration;
              handleSeek(Math.max(0, Math.min(duration, newTime)));
            }}
            className="w-full bg-slate-800 h-2 rounded-full cursor-pointer relative overflow-hidden"
          >
            {/* Filled Progress */}
            <div 
              className="bg-emerald-500 h-full transition-all duration-100"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Chapter markers on timeline */}
          <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1.5 px-0.5">
            {chapters.map((chap, i) => (
              <button
                key={chap.id}
                onClick={() => handleSeek(chap.time)}
                className={`hover:text-emerald-400 transition-colors ${
                  currentChapterIndex === i ? 'text-emerald-400 font-bold' : ''
                }`}
              >
                {chap.short}
              </button>
            ))}
          </div>
        </div>

        {/* Action Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-0.5">
          {/* Play/Pause & Reset */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-xs flex items-center gap-1.5 text-xs"
              title={isPlaying ? 'Pause Walkthrough' : 'Play Walkthrough'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-white" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span className="hidden sm:inline">Play Screencast</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setCurrentTime(0);
                setIsPlaying(true);
              }}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
              title="Restart from 00:00"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Speed Toggle */}
            <button
              onClick={toggleSpeed}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors border border-slate-700"
              title="Adjust Playback Speed"
            >
              {playbackSpeed}x Speed
            </button>
          </div>

          {/* Chapter Quick Jump Buttons */}
          <div className="hidden lg:flex items-center gap-1 text-[11px]">
            {chapters.map((chap, i) => (
              <button
                key={chap.id}
                onClick={() => handleSeek(chap.time)}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currentChapterIndex === i 
                    ? 'bg-slate-800 text-emerald-400 font-bold border border-slate-700' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {chap.short}
              </button>
            ))}
          </div>

          {/* Right utility icons */}
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-slate-300" />}
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};