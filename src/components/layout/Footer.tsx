import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  Code2, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { topicClusters } from '../../data/blogData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  onOpenSchema: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenSchema
}) => {
  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Executive Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm">
                SE
              </div>
              <div>
                <span className="font-bold text-base text-white tracking-tight block font-heading">
                  SEO Expert Itahari
                </span>
                <span className="block text-xs font-mono text-emerald-400">
                  Itahari, Sunsari, Koshi Province, Nepal
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Strategic search engine optimization consultancy. We architect semantically rich topical maps, execute rigorous code-level technical audits, and drive high-intent commercial rankings on Google.
            </p>

            {/* Entity Snapshot Box */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1 text-slate-300">
              <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                Entity Grounding // Schema.org
              </div>
              <p><span className="text-slate-500">Service Entity:</span> Technical SEO & Organic Architecture</p>
              <p><span className="text-slate-500">Physical Base:</span> Ward 4, Itahari Sub-Metropolitan, Sunsari, NP</p>
              <p><span className="text-slate-500">Coordinates:</span> 26.6657° N, 87.2798° E</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all flex items-center gap-1.5"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenSchema}
                className="px-3.5 py-2 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-mono transition-colors flex items-center gap-1.5"
              >
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>JSON-LD Graph</span>
              </button>
            </div>
          </div>

          {/* Column 2: 7 Core Money Pages */}
          <div>
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Commercial Services
            </h3>
            <ul className="space-y-2 text-xs">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <a
                    href={`/services/${svc.slug}`}
                    onClick={(e) => handleLinkClick(`/services/${svc.slug}`, e)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{svc.shortTitle}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Topic Clusters (Outer Section) */}
          <div>
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Knowledge Clusters
            </h3>
            <ul className="space-y-2 text-xs">
              {topicClusters.map((cluster) => (
                <li key={cluster.id}>
                  <a
                    href={`/blog?cluster=${cluster.id}`}
                    onClick={(e) => handleLinkClick(`/blog?cluster=${cluster.id}`, e)}
                    className="text-slate-400 hover:text-white transition-colors block truncate"
                  >
                    {cluster.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/blog"
                  onClick={(e) => handleLinkClick('/blog', e)}
                  className="text-emerald-400 hover:underline font-mono text-xs inline-flex items-center gap-1 font-semibold"
                >
                  <span>Explore all 60+ guides →</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Contact */}
          <div>
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Company & Inquiries
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 mb-4">
              <li>
                <a href="/about" onClick={(e) => handleLinkClick('/about', e)} className="hover:text-white">
                  About & Methodology
                </a>
              </li>
              <li>
                <a href="/portfolio" onClick={(e) => handleLinkClick('/portfolio', e)} className="hover:text-white">
                  Portfolio Blueprints
                </a>
              </li>
              <li>
                <a href="/case-studies" onClick={(e) => handleLinkClick('/case-studies', e)} className="hover:text-white">
                  Verified Case Studies
                </a>
              </li>
              <li>
                <a href="/testimonials" onClick={(e) => handleLinkClick('/testimonials', e)} className="hover:text-white">
                  Client Review Policy
                </a>
              </li>
              <li>
                <a href="/faq" onClick={(e) => handleLinkClick('/faq', e)} className="hover:text-white">
                  Knowledge Base FAQ
                </a>
              </li>
              <li>
                <a href="/html-sitemap" onClick={(e) => handleLinkClick('/html-sitemap', e)} className="hover:text-white">
                  HTML Sitemap
                </a>
              </li>
            </ul>

            <div className="space-y-1.5 text-xs font-mono border-t border-slate-800 pt-3 text-slate-500">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ward 4, Itahari Sub-Metropolitan, Sunsari, NP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="mailto:consult@seoexpertitahari.com" className="hover:text-white">
                  consult@seoexpertitahari.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} SEO Expert Itahari. Professional Search Architecture • Sunsari, Koshi Province, Nepal.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" onClick={(e) => handleLinkClick('/privacy-policy', e)} className="hover:text-white">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms" onClick={(e) => handleLinkClick('/terms', e)} className="hover:text-white">
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="/disclaimer" onClick={(e) => handleLinkClick('/disclaimer', e)} className="hover:text-white">
              SEO Disclaimer
            </a>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
              <span>sitemap.xml</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};