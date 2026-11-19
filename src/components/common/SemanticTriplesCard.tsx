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
    <div className="my-8 rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-7 text-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-mono shadow-xs shrink-0">
            <Database className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading flex flex-wrap items-center gap-2">
              <span>Knowledge Graph Semantic Triples & Entity Markup</span>
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                Entity: {entityName}
              </span>
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Machine-readable Subject → Predicate → Object ontology configured for Google Knowledge Graph ingestion.
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-mono">
          <button
            onClick={() => setActiveTab('triples')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'triples' 
                ? 'bg-white text-slate-900 shadow-sm font-semibold' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Triples ({triples.length})
          </button>
          {eavData.length > 0 && (
            <button
              onClick={() => setActiveTab('eav')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'eav' 
                  ? 'bg-white text-slate-900 shadow-sm font-semibold' 
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
                  className="flex flex-wrap items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs font-mono"
                >
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white font-semibold">
                    {triple.subject}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 font-medium italic">
                    {triple.predicate}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
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
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono">
                    <th className="p-3 font-semibold">Entity</th>
                    <th className="p-3 font-semibold">Attribute</th>
                    <th className="p-3 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {eavData.map((eav, index) => (
                    <tr key={index} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 font-semibold text-slate-900">{eav.entity}</td>
                      <td className="p-3 text-slate-600 italic">{eav.attribute}</td>
                      <td className="p-3 font-semibold text-emerald-700">{eav.value}</td>
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