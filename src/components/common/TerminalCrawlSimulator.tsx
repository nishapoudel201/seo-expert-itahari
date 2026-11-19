import React, { useState } from 'react';
import { Terminal, Cpu } from 'lucide-react';

export const TerminalCrawlSimulator: React.FC = () => {
  const [targetQuery, setTargetQuery] = useState('dental clinic near itahari chowk');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    'Ready for crawler simulation.',
    'Select a sample query below to simulate Googlebot smartphone crawling and indexing.'
  ]);

  const sampleQueries = [
    'dental clinic near itahari chowk',
    'best budget hotel dharan road itahari',
    'nepal handmade cashmere exporter',
    'civil engineer consultant sunsari'
  ];

  const runSimulation = (query: string) => {
    setTargetQuery(query);
    setIsRunning(true);
    setLogs([
      `$ googlebot-sim --query "${query}" --location "Itahari, NP-P1"`,
      'Connecting to edge server host and evaluating HTTP response headers...',
    ]);

    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        'HTTP/2 200 OK (TTFB: 142ms - Optimal Core Web Vitals speed)',
        'Parsing rendered DOM tree: single H1 verified with localized entity',
      ]);
    }, 350);

    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        'Extracting schema.org/LocalBusiness: latitude 26.6657, longitude 87.2798',
        'Validating NAP consistency across regional Nepal directories: 100% MATCH',
      ]);
    }, 700);

    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        'Evaluating topical authority: 7 supporting topic cluster articles detected',
        'Checking indexation status: Canonical self-referential OK, sitemap valid',
        '✓ RESULT: Top 3 Google Maps pack & organic position established.',
        'Simulation complete.'
      ]);
      setIsRunning(false);
    }, 1100);
  };

  return (
    <div className="bg-white rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] p-6 sm:p-7 text-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-pink-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-pink-500 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-tight text-slate-900 font-heading">
              Googlebot Mobile Crawl & Entity Diagnostic Simulator
            </h3>
            <p className="text-xs text-slate-500">
              Inspect how search engine algorithms crawl, evaluate, and index verified semantic entities
            </p>
          </div>
        </div>

        {/* Query selection chips */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="text-[11px] text-slate-400 font-semibold mr-1">Sample Queries:</span>
          {sampleQueries.slice(0, 3).map((q, idx) => (
            <button
              key={idx}
              onClick={() => runSimulation(q)}
              disabled={isRunning}
              className="px-3 py-1 rounded-full border border-pink-200 bg-[#fffafc] hover:bg-pink-50 text-slate-700 text-xs font-medium transition-colors disabled:opacity-50"
            >
              "{q.split(' ')[0]} {q.split(' ')[1]}..."
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Viewport */}
      <div className="mt-4 p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto min-h-[175px] border border-pink-950/60 shadow-inner space-y-1">
        <div className="text-[11px] text-slate-500 pb-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-pink-300 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
            <span className="ml-1 text-slate-400">googlebot-crawler // terminal</span>
          </div>
          <span className="text-pink-400">Googlebot Mobile User-Agent</span>
        </div>
        
        <div className="pt-2 space-y-1">
          {logs.map((log, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-pink-400 select-none font-bold">&gt;</span>
              <span className={log.startsWith('✓') ? 'text-pink-300 font-bold' : log.startsWith('$') ? 'text-rose-300 font-bold' : 'text-slate-300'}>
                {log}
              </span>
            </div>
          ))}
          {isRunning && (
            <div className="flex items-center gap-2 text-pink-400">
              <Cpu className="w-3.5 h-3.5 animate-spin" />
              <span>Analyzing DOM elements & schema graphs...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
