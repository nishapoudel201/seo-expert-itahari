import React from 'react';
import { servicesData } from '../data/servicesData';
import { blogPosts, topicClusters } from '../data/blogData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface HtmlSitemapPageProps {
  onNavigate: (path: string) => void;
}

export const HtmlSitemapPage: React.FC<HtmlSitemapPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full bg-[#f8fafc] min-h-screen text-slate-900">
      <div className="bg-white border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: 'Semantic HTML Sitemap' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-white border-b border-slate-200 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              Complete Crawl Topology // Human & Machine Navigable
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              Semantic HTML Sitemap & Architectural Index
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Structured representation of our core commercial landing pages, supporting educational topic clusters, and trust authority pages.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Core Section: Commercial Money Pages */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <span className="font-mono text-xs font-bold text-emerald-700">A //</span>
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Core Section — 7 Commercial Money Landing Pages
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {servicesData.map((svc) => (
              <li key={svc.slug} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500/50 hover:bg-emerald-50/20 transition-all">
                <a
                  href={`/services/${svc.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/services/${svc.slug}`);
                  }}
                  className="font-bold text-slate-900 hover:text-emerald-700 block mb-1 font-heading text-sm"
                >
                  {svc.title}
                </a>
                <span className="text-slate-500 font-mono text-[11px] block">
                  /services/{svc.slug} • Intent: {svc.searchIntent}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outer Section: Clusters & Supporting Content */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <span className="font-mono text-xs font-bold text-emerald-700">B //</span>
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Outer Section — 7 Supporting Topic Clusters (60+ Guides)
            </h2>
          </div>

          <div className="space-y-4">
            {topicClusters.map((cluster) => {
              const clusterPosts = blogPosts.filter(p => p.clusterId === cluster.id);

              return (
                <div key={cluster.id} className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-200">
                    <h3 className="font-bold text-sm text-slate-900 font-heading">
                      Cluster: {cluster.name}
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                      Money Target: {cluster.primaryMoneyPageTitle}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pl-3 border-l-2 border-emerald-600 text-xs text-slate-700 pt-1">
                    {clusterPosts.map((post) => (
                      <li key={post.slug}>
                        <a
                          href={`/blog/${post.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(`/blog/${post.slug}`);
                          }}
                          className="hover:text-emerald-700 hover:underline font-medium"
                        >
                          {post.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Trust & Brand Pages */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <span className="font-mono text-xs font-bold text-emerald-700">C //</span>
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Trust & Brand Authority Hub
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {[
              { label: 'About & Ethos', path: '/about' },
              { label: 'Direct Inquiries', path: '/contact' },
              { label: 'Work Portfolio', path: '/portfolio' },
              { label: 'Verified Case Studies', path: '/case-studies' },
              { label: 'Client Feedback Policy', path: '/testimonials' },
              { label: 'Frequently Asked Questions', path: '/faq' },
            ].map((p) => (
              <a
                key={p.path}
                href={p.path}
                onClick={(e) => { e.preventDefault(); onNavigate(p.path); }}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 block font-semibold text-slate-900 hover:bg-slate-100 hover:border-slate-300 transition-colors"
              >
                {p.label}
              </a>
            ))}
          </div>
        </section>

        {/* Legal Pages */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <span className="font-mono text-xs font-bold text-emerald-700">D //</span>
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Legal & Compliance Documents
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <a
              href="/privacy-policy"
              onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 block text-slate-800 hover:bg-slate-100 transition-colors font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 block text-slate-800 hover:bg-slate-100 transition-colors font-medium"
            >
              Terms & Conditions
            </a>
            <a
              href="/disclaimer"
              onClick={(e) => { e.preventDefault(); onNavigate('/disclaimer'); }}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 block text-slate-800 hover:bg-slate-100 transition-colors font-medium"
            >
              SEO Disclaimer
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};