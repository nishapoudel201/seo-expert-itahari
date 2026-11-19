import React, { useState } from 'react';
import { 
  Network, 
  ExternalLink 
} from 'lucide-react';
import { topicalGraphNodes, TopicalNode } from '../../data/topicalMapData';

interface TopicalMapVisualizerProps {
  onNavigate: (path: string) => void;
}

export const TopicalMapVisualizer: React.FC<TopicalMapVisualizerProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'money-page' | 'cluster' | 'trust-page'>('all');
  const [activeNode, setActiveNode] = useState<TopicalNode>(topicalGraphNodes[0]);

  const moneyPages = topicalGraphNodes.filter(n => n.type === 'money-page');
  const clusters = topicalGraphNodes.filter(n => n.type === 'cluster');
  const trustPages = topicalGraphNodes.filter(n => n.type === 'trust-page');

  return (
    <div className="my-10 rounded-3xl bg-white border border-pink-150 p-6 sm:p-8 text-slate-900 shadow-[0_4px_25px_rgba(244,114,182,0.06)] relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-pink-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200 mb-2.5">
              <Network className="w-3.5 h-3.5 text-pink-500" />
              <span>Interactive Knowledge Graph // Nisha Poudel</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-heading">
              Visual Topical Map: Core, Outer & Trust Pillars
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Strict semantic graph linking the Central Entity (Nisha Poudel — SEO Expert in Itahari) to 7 commercial money pages, 7 educational supporting clusters, and verified trust nodes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 bg-pink-50/60 p-1 rounded-full border border-pink-200 text-xs font-mono">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1 rounded-full transition-all ${
                selectedFilter === 'all' 
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({topicalGraphNodes.length})
            </button>
            <button
              onClick={() => setSelectedFilter('money-page')}
              className={`px-3.5 py-1 rounded-full transition-all ${
                selectedFilter === 'money-page' 
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Core Money (7)
            </button>
            <button
              onClick={() => setSelectedFilter('cluster')}
              className={`px-3.5 py-1 rounded-full transition-all ${
                selectedFilter === 'cluster' 
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Outer Clusters (7)
            </button>
            <button
              onClick={() => setSelectedFilter('trust-page')}
              className={`px-3.5 py-1 rounded-full transition-all ${
                selectedFilter === 'trust-page' 
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-xs font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Trust (6)
            </button>
          </div>
        </div>

        {/* Visual Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
          {/* Node Selector Column */}
          <div className="lg:col-span-2 space-y-5 max-h-[480px] overflow-y-auto pr-2">
            {/* Core Section */}
            {(selectedFilter === 'all' || selectedFilter === 'money-page') && (
              <div>
                <h4 className="text-xs font-mono font-semibold text-pink-600 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>A. Core Section — 7 Commercial Money Pages</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {moneyPages.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={`p-3.5 rounded-2xl text-left transition-all ${
                        activeNode.id === node.id 
                          ? 'bg-pink-50 border-2 border-pink-400 shadow-xs' 
                          : 'bg-[#fffafc] hover:bg-pink-50/50 border border-pink-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-slate-900 font-heading">{node.name}</span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-pink-100 text-pink-800 font-semibold">
                          Money
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-500 truncate">{node.primaryKeyword}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Outer Clusters */}
            {(selectedFilter === 'all' || selectedFilter === 'cluster') && (
              <div className="pt-2">
                <h4 className="text-xs font-mono font-semibold text-pink-600 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>B. Outer Section — 7 Supporting Clusters (60+ Guides)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {clusters.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={`p-3.5 rounded-2xl text-left transition-all ${
                        activeNode.id === node.id 
                          ? 'bg-pink-50 border-2 border-pink-400 shadow-xs' 
                          : 'bg-[#fffafc] hover:bg-pink-50/50 border border-pink-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-slate-900 font-heading">{node.name}</span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-pink-100/70 text-pink-700 font-semibold">
                          Cluster
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-500 truncate">{node.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trust Section */}
            {(selectedFilter === 'all' || selectedFilter === 'trust-page') && (
              <div className="pt-2">
                <h4 className="text-xs font-mono font-semibold text-pink-600 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>C. Trust & Authority Section</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {trustPages.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={`p-3.5 rounded-2xl text-left transition-all ${
                        activeNode.id === node.id 
                          ? 'bg-pink-50 border-2 border-pink-400 shadow-xs' 
                          : 'bg-[#fffafc] hover:bg-pink-50/50 border border-pink-100'
                      }`}
                    >
                      <span className="font-semibold text-xs text-slate-900 block mb-0.5 font-heading">{node.name}</span>
                      <span className="text-[10px] text-slate-500 truncate block font-mono">{node.url}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Active Node Detail Inspector */}
          <div className="bg-[#fffafc] rounded-3xl border border-pink-150 p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-pink-100">
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 font-semibold">
                  Node: {activeNode.type}
                </span>
                <span className="text-xs font-mono text-slate-500 font-medium">{activeNode.url}</span>
              </div>

              <div className="mt-4 space-y-3.5">
                <h4 className="text-base font-bold text-slate-900 font-heading">
                  {activeNode.name}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {activeNode.description}
                </p>

                {activeNode.primaryKeyword && (
                  <div className="p-3 rounded-2xl bg-white border border-pink-100 text-xs font-mono space-y-0.5 shadow-2xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Target Query</span>
                    <strong className="text-slate-900 font-semibold">{activeNode.primaryKeyword}</strong>
                  </div>
                )}

                {activeNode.intent && (
                  <div className="p-3 rounded-2xl bg-white border border-pink-100 text-xs font-mono space-y-0.5 shadow-2xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Search Intent</span>
                    <strong className="text-slate-900 font-semibold">{activeNode.intent}</strong>
                  </div>
                )}

                <div className="p-3 rounded-2xl bg-white border border-pink-100 text-xs font-mono space-y-0.5 shadow-2xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Ontology Link</span>
                  <span className="text-slate-700">
                    Parent: <strong className="text-slate-900 font-semibold">{activeNode.parentId || 'Central Entity (Root)'}</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-pink-100 mt-5">
              <button
                onClick={() => onNavigate(activeNode.url)}
                className="w-full btn-pill-primary justify-center text-xs"
              >
                <span>Navigate to This Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
