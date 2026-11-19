import React, { useState } from 'react';
import { Database, ChevronRight } from 'lucide-react';
import { SemanticTriple, EavAttribute } from '../../types';

interface SemanticTriplesCardProps {
  triples: SemanticTriple[];
  eavData?: EavAttribute[];
  entityName: string;
}

export const SemanticTriplesCard: React.FC<SemanticTriplesCardProps> = ({
  triples,
  eavData = [],
  entityName
}) => {
  const [activeTab, setActiveTab] = useState<'triples' | 'eav'>('triples');

  return (
    <div className="my-8 rounded-3xl bg-white border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] p-6 sm:p-7 text-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-pink-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-700 border border-pink-200 flex items-center justify-center font-mono shadow-xs shrink-0">
            <Database className="w-5 h-5 text-pink-500" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading flex flex-wrap items-center gap-2">
              <span>Knowledge Graph Semantic Triples & Entity Markup</span>
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200">
                Entity: {entityName}
              </span>
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Machine-readable Subject → Predicate → Object ontology configured for Google Knowledge Graph ingestion.
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center bg-pink-50/60 p-1 rounded-full border border-pink-200 text-xs font-mono">
          <button
            onClick={() => setActiveTab('triples')}
            className={`px-3.5 py-1 rounded-full transition-all ${
              activeTab === 'triples' 
                ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-xs font-semibold' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Triples ({triples.length})
          </button>
          {eavData.length > 0 && (
            <button
              onClick={() => setActiveTab('eav')}
              className={`px-3.5 py-1 rounded-full transition-all ${
                activeTab === 'eav' 
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EAV Schema ({eavData.length})
            </button>
          )}
        </div>
      </div>

      <div className="pt-4">
        {activeTab === 'triples' ? (
          <div className="space-y-3">
            <p className="text-xs text-slate-600">
              Semantic triples map factual relationships using NLP grammar to help search engines disambiguate concepts without unnatural keyword density:
            </p>
            <div className="grid grid-cols-1 gap-2.5">
              {triples.map((triple, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center gap-2.5 p-3 rounded-2xl bg-[#fffafc] border border-pink-100 text-xs font-mono"
                >
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white font-semibold">
                    {triple.subject}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-pink-300" />
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-pink-200 text-slate-800 font-medium italic">
                    {triple.predicate}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-pink-300" />
                  <span className="px-2.5 py-1 rounded-lg bg-pink-50 text-pink-700 border border-pink-200 font-semibold">
                    {triple.object}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-slate-600">
              Entity–Attribute–Value (EAV) models specific properties of this entity into structured data properties:
            </p>
            <div className="overflow-x-auto border border-pink-200 rounded-2xl">
              <table className="w-full text-xs text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-pink-50/60 border-b border-pink-100 text-slate-700 font-mono">
                    <th className="p-3 font-semibold">Entity</th>
                    <th className="p-3 font-semibold">Attribute</th>
                    <th className="p-3 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-100 font-mono">
                  {eavData.map((eav, index) => (
                    <tr key={index} className="hover:bg-pink-50/30 transition-colors">
                      <td className="p-3 font-semibold text-slate-900">{eav.entity}</td>
                      <td className="p-3 text-slate-600 italic">{eav.attribute}</td>
                      <td className="p-3 font-semibold text-pink-600">{eav.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
