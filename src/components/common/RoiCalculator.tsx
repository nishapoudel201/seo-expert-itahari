import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenConsultation: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenConsultation }) => {
  const [monthlySearches, setMonthlySearches] = useState(3000);
  const [estCtr, setEstCtr] = useState(25);
  const [conversionRate, setConversionRate] = useState(3.5);
  const [avgCustomerValue, setAvgCustomerValue] = useState(150);

  // Calculations
  const estimatedVisitors = Math.round((monthlySearches * estCtr) / 100);
  const estimatedInquiries = Math.round((estimatedVisitors * conversionRate) / 100);
  const estimatedRevenue = Math.round(estimatedInquiries * avgCustomerValue);
  const annualRevenue = estimatedRevenue * 12;
  const estimatedPpcAdCost = Math.round(estimatedVisitors * 0.85); // ~$0.85 CPC equivalent

  return (
    <div className="my-10 rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8 text-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 mb-2.5">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Modeling // Organic Economics</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-heading">
            SEO ROI & Revenue Forecast Calculator
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Simulate monthly qualified customer inquiries and pipeline value achieved by securing Top 3 organic visibility in Itahari or across Nepal.
          </p>
        </div>
      </div>

      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders */}
        <div className="lg:col-span-7 space-y-6 text-xs">
          <div>
            <div className="flex justify-between items-center mb-2 font-semibold text-slate-800">
              <span className="text-sm">Target Market Monthly Searches</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-900 font-mono font-semibold">
                {monthlySearches.toLocaleString()} searches/mo
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="25000"
              step="500"
              value={monthlySearches}
              onChange={(e) => setMonthlySearches(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
            />
            <p className="text-[12px] text-slate-500 mt-1.5">Estimated aggregate search volume across your target commercial queries in Sunsari, Koshi, or nationwide.</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 font-semibold text-slate-800">
              <span className="text-sm">Estimated Click Share (Top 3 Positions)</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-900 font-mono font-semibold">
                {estCtr}% CTR
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="40"
              step="1"
              value={estCtr}
              onChange={(e) => setEstCtr(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
            />
            <p className="text-[12px] text-slate-500 mt-1.5">Google's top 3 organic results and Local Map Pack capture 20–35% of total search traffic.</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 font-semibold text-slate-800">
              <span className="text-sm">Website Conversion Rate</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-900 font-mono font-semibold">
                {conversionRate}%
              </span>
            </div>
            <input
              type="range"
              min="1.0"
              max="10.0"
              step="0.5"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
            />
            <p className="text-[12px] text-slate-500 mt-1.5">Percentage of targeted visitors who initiate contact, call, or submit an inquiry form.</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 font-semibold text-slate-800">
              <span className="text-sm">Average Customer Lifetime Value</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-900 font-mono font-semibold">
                ${avgCustomerValue} (USD / NPR Equiv.)
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="1000"
              step="10"
              value={avgCustomerValue}
              onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
            />
            <p className="text-[12px] text-slate-500 mt-1.5">Average gross profit or revenue per closed client or customer transaction.</p>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-medium uppercase text-emerald-400">
              Projected Organic Yield
            </span>
            <span className="text-[11px] text-slate-400 font-mono">Compounding Asset</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">Monthly Visitors</span>
              <span className="text-2xl font-bold font-mono text-white">{estimatedVisitors.toLocaleString()}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">Qualified Inquiries</span>
              <span className="text-2xl font-bold font-mono text-emerald-400">~{estimatedInquiries}</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-950/70 to-slate-800/90 border border-emerald-500/30 text-center space-y-1">
            <span className="text-xs text-slate-300 font-medium">Estimated Monthly Pipeline Value</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
              ${estimatedRevenue.toLocaleString()}
            </div>
            <span className="text-xs text-emerald-400/90 block pt-1 font-mono">
              ~${annualRevenue.toLocaleString()} / year in asset equity
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800 text-xs text-slate-300 space-y-1.5 font-mono">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Equivalent Google Ads Cost:</span>
              <strong className="text-white">~${estimatedPpcAdCost} / month</strong>
            </div>
            <p className="text-[11px] text-slate-400">
              Unlike PPC ads which stop generating leads the minute ad spend ceases, organic rankings compound over years.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Discuss This Traffic Model</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};