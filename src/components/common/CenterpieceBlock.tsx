import React from 'react';
import { 
  Network, 
  Cpu, 
  Layout, 
  MapPin, 
  FolderCheck, 
  Code, 
  Star, 
  Compass, 
  Gauge, 
  Braces, 
  Smartphone, 
  Type, 
  AlignLeft, 
  Image as ImageIcon, 
  Link as LinkIcon, 
  Layers, 
  Filter, 
  Database, 
  TrendingUp, 
  ShoppingBag, 
  Tag, 
  Sliders, 
  Zap, 
  Server, 
  FileText, 
  BarChart3, 
  CheckSquare,
  CheckCircle2,
  Terminal,
  ShieldCheck
} from 'lucide-react';

interface CenterpieceDetail {
  title: string;
  desc: string;
  iconName: string;
}

interface CenterpieceBlockProps {
  title: string;
  description: string;
  keyPoints: string[];
  details: CenterpieceDetail[];
  visualType?: 'grid' | 'timeline' | 'architecture' | 'comparison';
  badgeLabel?: string;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Network,
  Cpu,
  Layout,
  MapPin,
  FolderCheck,
  Code,
  Star,
  Compass,
  Gauge,
  Braces,
  Smartphone,
  Type,
  AlignLeft,
  Image: ImageIcon,
  Link: LinkIcon,
  Layers,
  Filter,
  Database,
  TrendingUp,
  ShoppingBag,
  Tag,
  Sliders,
  Zap,
  Server,
  FileText,
  BarChart3,
  CheckSquare
};

export const CenterpieceBlock: React.FC<CenterpieceBlockProps> = ({
  title,
  description,
  keyPoints,
  details,
  badgeLabel = 'Primary Centerpiece Annotation'
}) => {
  return (
    <section 
      aria-label="Centerpiece Content Unit"
      className="my-10 rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-9 text-slate-900 relative overflow-hidden"
    >
      {/* Header Label */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            {badgeLabel}
          </span>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            // Core Search Intent Anchor
          </span>
        </div>
        <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded border border-slate-200 bg-slate-50 text-slate-600">
          Verified Content Specification
        </span>
      </div>

      {/* Centerpiece H2 & Core Answer */}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3 font-heading leading-tight">
        {title}
      </h2>

      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-4xl font-normal font-sans">
        {description}
      </p>

      {/* Key Points Banner */}
      <div className="mb-8 p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-slate-700" />
          <span>Core Strategic Pillars</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Semantic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {details.map((detail, index) => {
          const IconComponent = iconMap[detail.iconName] || Compass;

          return (
            <div 
              key={index}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center mb-3 shadow-xs">
                  <IconComponent className="w-4 h-4 text-slate-800" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-1.5 font-heading">
                  {detail.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {detail.desc}
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>COMPONENT 0{index + 1}</span>
                <span className="font-semibold text-emerald-600">VALIDATED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};