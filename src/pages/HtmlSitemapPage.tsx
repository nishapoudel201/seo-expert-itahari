import React from 'react';
import { servicesData } from '../data/servicesData';
import { blogPosts, topicClusters } from '../data/blogData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface HtmlSitemapPageProps {
  onNavigate: (path: string) => void;
}

export const HtmlSitemapPage: React.FC<HtmlSitemapPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full bg-[#fffafc] min-h-screen text-slate-900 selection:bg-pink-200 selection:text-pink-900">
      <div className="bg-[#fff0f4] border-b border-pink-100">
        <Breadcrumbs items={[{ label: 'Semantic HTML Sitemap' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-gradient-to-b from-[#fff5f8] to-white border-b border-pink-100 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Complete Crawl Topology // Nisha Poudel
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
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-pink-100">
            <span className="font-mono text-xs font-bold text-pink-600">A //</span>
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Core Section — 7 Commercial Money Landing Pages
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {servicesData.map((svc) => (
              <li key={svc.slug} className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100 hover:border-pink-300 hover:bg-pink-50 transition-all">
                <a
                  href={`/services/${svc.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/services/${svc.slug}`);
                  }}
                  className="font-bold text-slate-900 hover:text-pink-600 block mb-1 font-heading text-sm"
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
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-pink-100">
            <span className="font-mono text-xs font-bold text-pink-600">B //</span>
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Outer Section — 7 Supporting Topic Clusters (60+ Guides)
            </h2>
          </div>

          <div className="space-y-4">
            {topicClusters.map((cluster) => {
              const clusterPosts = blogPosts.filter(p => p.clusterId === cluster.id);

              return (
                <div key={cluster.id} className="p-4 sm:p-5 rounded-2xl bg-pink-50/40 border border-pink-100 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-pink-200">
                    <h3 className="font-bold text-sm text-slate-900 font-heading">
                      Cluster: {cluster.name}
                    </h3>
                    <span className="text-[11px] font-mono text-pink-700 font-semibold">
                      Money Target: {cluster.primaryMoneyPageTitle}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pl-3 border-l-2 border-pink-400 text-xs text-slate-700 pt-1">
                    {clusterPosts.map((post) => (
                      <li key={post.slug}>
                        <a
                          href={`/blog/${post.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(`/blog/${post.slug}`);
                          }}
                          className="hover:text-pink-600 hover:underline font-medium"
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
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-pink-100">
            <span className="font-mono text-xs font-bold text-pink-600">C //</span>
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
                className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 block font-semibold text-slate-900 hover:bg-pink-100/70 hover:border-pink-300 transition-colors"
              >
                {p.label}
              </a>
            ))}
          </div>
        </section>

        {/* Legal Pages */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-pink-100">
            <span className="font-mono text-xs font-bold text-pink-600">D //</span>
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Legal & Compliance Documents
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <a
              href="/privacy-policy"
              onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }}
              className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 block text-slate-800 hover:bg-pink-100/70 transition-colors font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }}
              className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 block text-slate-800 hover:bg-pink-100/70 transition-colors font-medium"
            >
              Terms & Conditions
            </a>
            <a
              href="/disclaimer"
              onClick={(e) => { e.preventDefault(); onNavigate('/disclaimer'); }}
              className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 block text-slate-800 hover:bg-pink-100/70 transition-colors font-medium"
            >
              SEO Disclaimer
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
