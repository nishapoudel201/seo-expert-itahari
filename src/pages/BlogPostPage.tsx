import React, { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  CornerDownRight,
  Link2, 
  ShieldCheck, 
  ChevronDown
} from 'lucide-react';
import { BlogPost } from '../types';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SemanticTriplesCard } from '../components/common/SemanticTriplesCard';
import { getSupplementaryBridgeForPost } from '../data/supplementaryLinksData';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  onNavigate,
  onOpenConsultation
}) => {
  const bridge = post.supplementaryBridge || getSupplementaryBridgeForPost(post);
  const [qaOpen, setQaOpen] = useState(false);

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.metaDescription,
    'datePublished': post.publishedDate,
    'dateModified': post.publishedDate,
    'author': {
      '@type': 'Person',
      'name': 'Nisha Poudel',
      'jobTitle': 'Senior SEO & Technical Search Strategist',
      'url': 'https://seoexpertitahari.com/about',
      'image': 'https://seoexpertitahari.com/images/seo-consultant-profile.jpg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'SEO Expert Itahari',
      'url': 'https://seoexpertitahari.com'
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://seoexpertitahari.com/blog/${post.slug}`
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#fffafc] min-h-screen text-slate-900 selection:bg-pink-200 selection:text-pink-900">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-[#fff0f4] border-b border-pink-100">
        <Breadcrumbs
          items={[
            { label: 'Blog & Clusters', path: '/blog' },
            { label: post.clusterName, path: `/blog?cluster=${post.clusterId}` },
            { label: post.title }
          ]}
          onNavigate={onNavigate}
        />
      </div>

      <header className="bg-gradient-to-b from-[#fff5f8] to-white border-b border-pink-100 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              {post.clusterName}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-pink-400" />
              {post.readTime}
            </span>
            <span className="text-pink-200">•</span>
            <span className="text-slate-500">
              Author: <strong className="text-slate-800">Nisha Poudel</strong>
            </span>
            <span className="text-pink-200">•</span>
            <span className="text-slate-500">
              Published: {post.publishedDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {post.summary}
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-white border border-pink-200 text-slate-800 font-medium shadow-2xs">
              Primary Entity: <strong className="text-pink-700 font-semibold">{post.targetEntity}</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-pink-200 text-slate-800 font-medium shadow-2xs">
              Target Query: <strong className="text-slate-900 font-semibold">{post.primaryKeyword}</strong>
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Parent Money Page Anchor Card */}
        <div className="p-6 rounded-3xl bg-pink-50/70 border border-pink-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[11px] font-mono font-bold uppercase text-pink-700 flex items-center gap-1.5">
              <CornerDownRight className="w-3.5 h-3.5 text-pink-500" />
              <span>Parent Commercial Service Pillar</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              This educational guide directly strengthens our commercial offering. Seeking expert execution from Nisha Poudel in Itahari or across Nepal?
            </p>
          </div>
          <button
            onClick={() => onNavigate(`/services/${post.targetMoneyPageSlug}`)}
            className="btn-pill-primary text-xs shrink-0 self-start sm:self-auto"
          >
            <span>Explore Parent Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Outline / Table of Contents */}
        {post.headings && post.headings.length > 0 && (
          <div className="p-6 rounded-3xl bg-white border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600">
              // Table of Contents & Semantic Structure
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-800">
              {post.headings.map((h, i) => (
                <li key={h.id || i} className={`flex items-center gap-2 ${h.level === 3 ? 'pl-4 text-slate-600' : 'font-semibold text-slate-900'}`}>
                  <span className="font-mono text-pink-400">0{i + 1}.</span>
                  <span className="hover:text-pink-600 cursor-pointer">{h.text}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 font-semibold text-pink-700 pt-1 border-t border-pink-100">
                <span className="font-mono text-pink-500">0{post.headings.length + 1}.</span>
                <span className="hover:text-pink-800 cursor-pointer flex items-center gap-1">
                  <span>{bridge.heading}</span>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-pink-100 text-pink-800">
                    SOP Bridge
                  </span>
                </span>
              </li>
            </ul>
          </div>
        )}

        {/* Article Content */}
        <article className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-800">
          {post.contentSections && post.contentSections.length > 0 ? (
            post.contentSections.map((sec, idx) => (
              <section key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  {sec.heading}
                </h2>
                <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                  {sec.body}
                </p>
                {sec.keyTakeaway && (
                  <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-100 font-mono text-xs text-slate-800 space-y-1">
                    <div className="font-bold text-pink-700">// Strategic Takeaway</div>
                    <p className="text-slate-600">{sec.keyTakeaway}</p>
                  </div>
                )}
              </section>
            ))
          ) : (
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Understanding {post.primaryKeyword} in Modern Search
              </h2>
              <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                When business owners in Itahari and Eastern Nepal seek to improve their online footprint, they often focus exclusively on vanity metrics or superficial tricks. However, search engines rank websites based on topical depth, structural clarity, and verified semantic entities.
              </p>
              <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-100 font-mono text-xs text-slate-800 space-y-1">
                <div className="font-bold text-pink-700">// Strategic Takeaway</div>
                <p className="text-slate-600">Never treat SEO as a one-time checklist. Search visibility is an ongoing compounding asset built upon clean code, accurate local entity citations, and in-depth topical coverage.</p>
              </div>
            </section>
          )}

          {/* SOP SUPPLEMENTARY INTERNAL LINKING SECTION (Near End of Article) */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-pink-300 shadow-md space-y-4 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pink-100 pb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
                <Link2 className="w-3.5 h-3.5 text-pink-500" />
                <span>Supplementary Semantic Bridge // SOP Internal Link</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 font-medium">
                Destination: <strong className="text-slate-800">{bridge.targetH1}</strong>
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              {bridge.heading}
            </h2>

            <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
              {bridge.leadPassage}{' '}
              <a
                href={bridge.targetUrl}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(bridge.targetUrl);
                }}
                className="text-pink-600 hover:text-pink-700 font-semibold underline decoration-pink-400 hover:decoration-pink-600 decoration-2 underline-offset-4 transition-colors"
                title={`Navigate to ${bridge.targetH1}`}
              >
                {bridge.anchorText}
              </a>{' '}
              {bridge.trailingPassage}
            </p>

            {/* SOP Quality Assurance & Audit Dossier Panel */}
            <div className="pt-2">
              <details 
                open={qaOpen} 
                onToggle={(e) => setQaOpen((e.target as HTMLDetailsElement).open)}
                className="group rounded-2xl border border-pink-200 bg-pink-50/50 p-4 transition-all"
              >
                <summary className="flex items-center justify-between text-xs font-mono font-medium text-slate-700 cursor-pointer list-none select-none">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-pink-500" />
                    <span className="font-semibold text-slate-900">SOP Internal Linking QA Checklist & Semantic Audit</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-pink-100 text-pink-800 font-bold border border-pink-200">
                      QA Gate: 10/10 PASS
                    </span>
                    <ChevronDown className={`w-4 h-4 text-pink-400 transition-transform ${qaOpen ? 'rotate-180' : ''}`} />
                  </div>
                </summary>

                <div className="mt-4 pt-3 border-t border-pink-100 space-y-3.5 text-xs font-sans">
                  <div>
                    <span className="font-mono text-slate-500 block text-[11px] font-bold uppercase tracking-wider">
                      Semantic Rationale (Source → Business Offering → Core Page):
                    </span>
                    <p className="text-slate-700 mt-1 leading-relaxed bg-white p-3 rounded-xl border border-pink-100">
                      {bridge.semanticRationale}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono">
                    <div className="p-2.5 rounded-xl bg-white border border-pink-100">
                      <span className="text-slate-400 block uppercase font-bold text-[10px]">Source Article H1:</span>
                      <span className="text-slate-800 truncate block mt-0.5">{post.title}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-pink-100">
                      <span className="text-slate-400 block uppercase font-bold text-[10px]">Anchor Text (Exact Match):</span>
                      <strong className="text-pink-600 block mt-0.5">{bridge.anchorText}</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-pink-100">
                      <span className="text-slate-400 block uppercase font-bold text-[10px]">Verified Target URL:</span>
                      <span className="text-slate-800 font-semibold block mt-0.5">{bridge.targetUrl}</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-slate-500 block text-[11px] font-bold uppercase tracking-wider mb-2">
                      Editorial Heuristic // Context Window Inspection:
                    </span>
                    <div className="p-3 bg-white rounded-xl border border-pink-100 font-mono text-[11px] text-slate-700 space-y-1">
                      <div>
                        <span className="text-slate-400 mr-2">[Preceding Window]:</span>
                        <span className="text-slate-600">"...{bridge.leadPassage.slice(-60)}"</span>
                      </div>
                      <div className="font-bold text-pink-700 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200 inline-block">
                        [Linked Anchor]: {bridge.anchorText}
                      </div>
                      <div>
                        <span className="text-slate-400 mr-2">[Succeeding Window]:</span>
                        <span className="text-slate-600">"{bridge.trailingPassage.slice(0, 60)}..."</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-slate-500 block text-[11px] font-bold uppercase tracking-wider mb-1.5">
                      SOP Quality Checklist (All 10 Pass Gates):
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[11px] font-mono">
                      {Object.entries(bridge.qaChecks).map(([key, val]) => (
                        <div key={key} className="p-2 rounded-xl bg-white border border-pink-100 flex items-center justify-between">
                          <span className="capitalize text-slate-600 text-[10px]">{key}</span>
                          <span className="text-pink-700 font-bold text-[10px] bg-pink-50 px-1.5 py-0.5 rounded">
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </section>
        </article>

        {/* Semantic Triples for this Article */}
        <SemanticTriplesCard
          triples={post.semanticTriples}
          entityName={post.targetEntity}
        />

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            Need Expert Assistance Implementing This in Itahari?
          </h3>
          <p className="text-sm text-pink-100 max-w-lg mx-auto">
            Schedule a free initial diagnostic session with Nisha Poudel to examine your website's search performance and identify high-impact growth opportunities.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="py-3 px-6 rounded-full bg-white text-pink-700 hover:bg-pink-50 font-bold text-xs transition-colors inline-flex items-center gap-2 shadow-md mx-auto"
            >
              <span>Schedule Free SEO Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
