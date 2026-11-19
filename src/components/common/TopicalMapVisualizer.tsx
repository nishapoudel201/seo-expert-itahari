import React, { useState } from 'react';
import { 
  Network, 
  ExternalLink, 
  Layers, 
  ArrowRight 
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
    <div className="my-10 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 text-slate-900 shadow-sm relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 mb-2.5">
              <Network className="w-3.5 h-3.5 text-emerald-600" />
              <span>Interactive Knowledge Graph // Semantic Architecture</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-heading">
              Visual Topical Map: Core, Outer & Trust Pillars
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Strict semantic graph linking the Central Entity (SEO Expert in Itahari) to 7 commercial money pages, 7 educational supporting clusters, and verified trust nodes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-mono">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedFilter === 'all' 
                  ? 'bg-white text-slate-900 shadow-sm font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({topicalGraphNodes.length})
            </button>
            <button
              onClick={() => setSelectedFilter('money-page')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedFilter === 'money-page' 
                  ? 'bg-white text-slate-900 shadow-sm font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Core Money (7)
            </button>
            <button
              onClick={() => setSelectedFilter('cluster')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedFilter === 'cluster' 
                  ? 'bg-white text-slate-900 shadow-sm font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Outer Clusters (7)
            </button>
            <button
              onClick={() => setSelectedFilter('trust-page')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedFilter === 'trust-page' 
                  ? 'bg-white text-slate-900 shadow-sm font-semibold' 
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
                <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>A. Core Section — 7 Commercial Money Pages</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {moneyPages.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        activeNode.id === node.id 
                          ? 'bg-emerald-50/80 border-2 border-emerald-600 shadow-sm' 
                          : 'bg-slate-50/70 hover:bg-slate-100/80 border border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-slate-900 font-heading">{node.name}</span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
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
                <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>B. Outer Section — 7 Supporting Clusters (60+ Guides)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {clusters.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        activeNode.id === node.id 
                          ? 'bg-emerald-50/80 border-2 border-emerald-600 shadow-sm' 
                          : 'bg-slate-50/70 hover:bg-slate-100/80 border border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-slate-900 font-heading">{node.name}</span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-semibold">
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
                <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>C. Trust & Authority Section</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {trustPages.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        activeNode.id === node.id 
                          ? 'bg-emerald-50/80 border-2 border-emerald-600 shadow-sm' 
                          : 'bg-slate-50/70 hover:bg-slate-100/80 border border-slate-200'
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
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
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
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono space-y-0.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Target Query</span>
                    <strong className="text-slate-900 font-semibold">{activeNode.primaryKeyword}</strong>
                  </div>
                )}

                {activeNode.intent && (
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono space-y-0.5">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Search Intent</span>
                    <strong className="text-slate-900 font-semibold">{activeNode.intent}</strong>
                  </div>
                )}

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-mono space-y-0.5">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Ontology Link</span>
                  <span className="text-slate-700">
                    Parent: <strong className="text-slate-900 font-semibold">{activeNode.parentId || 'Central Entity (Root)'}</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-200 mt-5">
              <button
                onClick={() => onNavigate(activeNode.url)}
                className="w-full btn-indie-primary justify-center text-xs"
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