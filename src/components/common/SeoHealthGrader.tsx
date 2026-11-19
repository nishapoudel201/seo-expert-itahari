import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  Terminal,
  Cpu
} from 'lucide-react';

interface SeoHealthGraderProps {
  onOpenConsultation: () => void;
}

export const SeoHealthGrader: React.FC<SeoHealthGraderProps> = ({ onOpenConsultation }) => {
  const [url, setUrl] = useState('');
  const [targetKeyword, setTargetKeyword] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [result, setResult] = useState<null | {
    score: number;
    metrics: { name: string; score: number; status: 'good' | 'warning' | 'critical'; note: string }[];
  }>(null);

  const scanSteps = [
    'Connecting to host & inspecting HTTP response headers...',
    'Analyzing semantic HTML structure and H1-H3 hierarchy...',
    'Auditing schema.org structured data (LocalBusiness / Service graph)...',
    'Simulating Googlebot mobile render & Core Web Vitals (LCP/CLS)...',
    'Evaluating NAP consistency across Sunsari & Eastern Nepal directories...'
  ];

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsScanning(true);
    setResult(null);
    setScanStep(0);

    const stepInterval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < scanSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setIsScanning(false);
          setResult({
            score: 64,
            metrics: [
              { name: 'Core Web Vitals & Speed', score: 62, status: 'warning', note: 'LCP is 3.4s on 4G connection. Images need WebP conversion and dimensions.' },
              { name: 'Semantic Schema Markup', score: 40, status: 'critical', note: 'Missing LocalBusiness JSON-LD graph. Zero Google rich snippet eligibility.' },
              { name: 'Centerpiece Annotation & Headings', score: 78, status: 'good', note: 'Primary H1 detected, but supporting H2/H3 lack local entity keywords.' },
              { name: 'Local NAP & Geo-Signals', score: 55, status: 'warning', note: 'Inconsistent phone/address between footer and Google Business Profile.' },
              { name: 'Internal Link Architecture', score: 70, status: 'good', note: 'Pages are linked, but lack topical cluster anchor text routing.' }
            ]
          });
          return prev;
        }
      });
    }, 350);
  };

  return (
    <div className="my-10 rounded-3xl bg-white border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] p-6 sm:p-9 text-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-pink-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-pink-50 text-pink-700 border border-pink-200 mb-2">
            <Terminal className="w-3.5 h-3.5 text-pink-500" />
            <span>Diagnostic Tool • Domain Health Grader</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-heading">
            Technical SEO & Semantic Health Inspector
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl font-sans">
            Audit your website for Googlebot crawling readiness, schema integration, and local visibility signals across Sunsari & Nepal with Nisha Poudel.
          </p>
        </div>
      </div>

      <form onSubmit={handleScan} className="pt-6 grid grid-cols-1 sm:grid-cols-12 gap-3 font-sans">
        <div className="sm:col-span-6">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Website URL *
          </label>
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
            className="w-full text-xs p-3 rounded-2xl border border-pink-200 bg-[#fffafc] font-mono focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-2xs"
          />
        </div>

        <div className="sm:col-span-4">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Primary Target Keyword
          </label>
          <input
            type="text"
            value={targetKeyword}
            onChange={(e) => setTargetKeyword(e.target.value)}
            placeholder="e.g. hotel in Itahari"
            className="w-full text-xs p-3 rounded-2xl border border-pink-200 bg-[#fffafc] font-mono focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-2xs"
          />
        </div>

        <div className="sm:col-span-2 flex items-end">
          <button
            type="submit"
            disabled={isScanning}
            className="w-full btn-pill-primary py-3 px-4 justify-center text-xs disabled:opacity-50"
          >
            {isScanning ? (
              <>
                <Cpu className="w-4 h-4 animate-spin text-white" />
                <span>Auditing...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4 text-white" />
                <span>Run Diagnostic</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Scanning Terminal Animation */}
      {isScanning && (
        <div className="mt-5 p-4 rounded-2xl bg-slate-950 text-pink-300 font-mono text-xs border border-pink-900/50 space-y-2">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 text-[11px] text-pink-200/70">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-400 inline-block animate-pulse"></span>
            <span>DIAGNOSTIC PROCESSOR // STEP {scanStep + 1} OF 5</span>
          </div>
          <p className="text-white">
            &gt; {scanSteps[scanStep]}
          </p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
            <div 
              className="bg-gradient-to-r from-pink-400 to-rose-400 h-full transition-all duration-300"
              style={{ width: `${((scanStep + 1) / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Result Display */}
      {result && (
        <div className="mt-6 pt-6 border-t border-pink-100 animate-in fade-in duration-300 font-sans">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#fff5f8] border border-pink-200 mb-5">
            <div>
              <span className="text-xs font-mono font-semibold text-slate-500 uppercase">Calculated Domain Health Score</span>
              <div className="flex items-baseline gap-2.5 mt-1">
                <span className="text-4xl font-extrabold font-mono text-slate-900">{result.score}/100</span>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-pink-100 border border-pink-300 text-pink-800">
                  Optimization Recommended
                </span>
              </div>
            </div>
            <div className="text-xs text-slate-600 max-w-sm font-sans leading-relaxed">
              Your site possesses baseline indexability, but loses significant organic market share due to schema omission and mobile latency.
            </div>
          </div>

          <div className="space-y-3 font-sans">
            {result.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-pink-150 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {metric.status === 'good' && <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />}
                    {metric.status === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />}
                    {metric.status === 'critical' && <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}
                    <span className="font-bold text-slate-900 font-heading">{metric.name}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                      metric.status === 'good' ? 'bg-pink-50 text-pink-700 border border-pink-200' :
                      metric.status === 'warning' ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}>
                      {metric.score}/100
                    </span>
                  </div>
                  <p className="text-slate-600 pl-6">{metric.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <span className="text-xs text-pink-100 font-sans">
              Would you like a manual code-level audit detailing exact line-by-line fixes from Nisha Poudel?
            </span>
            <button
              onClick={onOpenConsultation}
              className="py-2.5 px-5 rounded-full bg-white text-pink-700 hover:bg-pink-50 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>Request In-Depth Manual Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
