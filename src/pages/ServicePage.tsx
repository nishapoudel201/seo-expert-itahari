import React from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronDown,
  MessageCircle, 
  Code
} from 'lucide-react';
import { ServiceDetail } from '../types';
import { blogPosts, topicClusters } from '../data/blogData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { CenterpieceBlock } from '../components/common/CenterpieceBlock';
import { SemanticTriplesCard } from '../components/common/SemanticTriplesCard';

interface ServicePageProps {
  service: ServiceDetail;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  onOpenSchema: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  service,
  onNavigate,
  onOpenConsultation,
  onOpenSchema
}) => {
  // Find supporting cluster articles
  const supportingCluster = topicClusters.find(c => c.id === service.relatedClusterId);
  const supportingArticles = blogPosts.filter(p => p.clusterId === service.relatedClusterId);

  return (
    <div className="flex flex-col w-full bg-[#fffafc] min-h-screen text-slate-900 selection:bg-pink-200 selection:text-pink-900">
      {/* Breadcrumbs */}
      <div className="bg-[#fff0f4] border-b border-pink-100">
        <Breadcrumbs
          items={[
            { label: 'SEO Services', path: '/services/seo-services-itahari' },
            { label: service.shortTitle }
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-[#fff5f8] to-white border-b border-pink-100 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                {service.badge}
              </span>
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full border border-pink-200 bg-white text-slate-700">
                Intent: <strong className="text-slate-900 font-semibold">{service.searchIntent}</strong>
              </span>
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full border border-pink-200 bg-white text-pink-700">
                Entity: <strong className="text-pink-700 font-semibold">{service.targetEntity}</strong>
              </span>
            </div>

            {/* Single Clear H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {service.heroDescription}
            </p>

            {/* Secondary Keyword Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="font-mono text-slate-500 font-medium">Target Queries:</span>
              {service.secondaryKeywords.map((kw, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-white text-slate-800 border border-pink-200 font-mono text-[11px] shadow-2xs">
                  {kw}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={onOpenConsultation}
                className="btn-pill-primary text-xs"
              >
                <span>Request {service.shortTitle} Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenSchema}
                className="btn-pill-secondary text-xs"
              >
                <Code className="w-3.5 h-3.5 text-pink-500" />
                <span>Inspect Schema Graph</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-12">
        {/* CENTERPIECE ANNOTATION: The critical intent answer */}
        <CenterpieceBlock
          title={service.centerpiece.title}
          description={service.centerpiece.description}
          keyPoints={service.centerpiece.keyPoints}
          details={service.centerpiece.details}
          visualType={service.centerpiece.visualType}
          badgeLabel={`Centerpiece: ${service.targetEntity}`}
        />

        {/* Deliverables Section */}
        <section aria-labelledby="deliverables-heading" className="bg-white rounded-3xl p-6 sm:p-9 border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 block mb-1">
              // Technical Specifications & Scope
            </span>
            <h2 id="deliverables-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
              Tangible Deliverables Included in This Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Measurable, audit-ready deliverables designed by Nisha Poudel to build compounding search traffic without recurring lock-in dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((del, i) => (
              <div key={i} className="p-5 rounded-2xl bg-pink-50/50 border border-pink-100 flex items-start gap-3.5 hover:border-pink-300 transition-all">
                <div className="w-8 h-8 rounded-xl bg-pink-100 border border-pink-200 text-pink-700 flex items-center justify-center shrink-0 font-mono font-bold text-xs mt-0.5">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 mb-1 font-heading">{del.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{del.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Visual Artifact Showcase */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
                TECHNICAL ARTIFACT SPECIFICATION
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Engineered for High-Intent Search Visibility
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Every optimization in our {service.shortTitle} sprint is mapped to clean code, semantic schemas, and demonstrable business return in Eastern Nepal and beyond.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border-2 border-pink-200 bg-white overflow-hidden shadow-sm group">
                <img 
                  src={
                    service.slug.includes('local-seo') 
                      ? '/images/local-seo-itahari-map.jpg' 
                      : service.slug.includes('technical') || service.slug.includes('audit')
                      ? '/images/organic-growth-dashboard.jpg'
                      : '/images/seo-hero-desk.jpg'
                  }
                  alt={`${service.title} Technical Architecture in Itahari, Nepal`}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section aria-labelledby="process-heading" className="bg-white rounded-3xl p-6 sm:p-9 border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 block mb-1">
              // Step-by-Step Execution
            </span>
            <h2 id="process-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
              Implementation Roadmap for {service.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Carefully staged technical execution minimizing site disruption while maximizing indexing momentum.
            </p>
          </div>

          <div className="space-y-3.5">
            {service.processSteps.map((step, i) => (
              <div key={i} className="p-5 rounded-2xl bg-pink-50/50 border border-pink-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-400 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-2xs">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1 font-heading">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Semantic Triples & EAV Relationship Card */}
        <SemanticTriplesCard
          triples={service.semanticTriples}
          eavData={service.eavData}
          entityName={service.targetEntity}
        />

        {/* Supporting Topic Cluster Links (Internal Linking Architecture) */}
        {supportingCluster && (
          <section aria-labelledby="supporting-cluster-heading" className="bg-white rounded-3xl p-6 sm:p-9 border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-pink-100">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 block mb-1">
                  // Topical Mesh Architecture
                </span>
                <h2 id="supporting-cluster-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-heading">
                  Supporting In-Depth Guides for {service.shortTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Every informational guide below strengthens this commercial service page through contextual anchor text.
                </p>
              </div>

              <a
                href={`/blog?cluster=${supportingCluster.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/blog?cluster=${supportingCluster.id}`);
                }}
                className="btn-pill-secondary text-xs self-start sm:self-auto"
              >
                <span>View Full Cluster ({supportingArticles.length})</span>
                <ChevronRight className="w-3.5 h-3.5 text-pink-500" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              {supportingArticles.map((article) => (
                <article
                  key={article.slug}
                  className="p-5 rounded-2xl bg-[#fffafc] border border-pink-100 hover:border-pink-300 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                      <span className="font-semibold text-pink-700">{article.primaryKeyword}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-2 font-heading leading-snug">
                      <a
                        href={`/blog/${article.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(`/blog/${article.slug}`);
                        }}
                        className="hover:text-pink-600 transition-colors"
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-pink-100 mt-3 text-right">
                    <a
                      href={`/blog/${article.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/blog/${article.slug}`);
                      }}
                      className="text-xs font-mono font-semibold text-pink-600 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Commercial FAQs */}
        <section aria-labelledby="service-faqs-heading" className="bg-white rounded-3xl p-6 sm:p-9 border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)]">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 block mb-1">
              // Direct Answers & Clarity
            </span>
            <h2 id="service-faqs-heading" className="text-2xl font-bold text-slate-900 tracking-tight font-heading">
              Frequently Asked Questions: {service.title}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="group p-5 rounded-2xl bg-pink-50/50 border border-pink-100 transition-all open:bg-white open:border-pink-200 open:shadow-xs"
              >
                <summary className="font-bold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between font-heading">
                  <span>{faq.question}</span>
                  <span className="p-1 rounded-full bg-pink-100 text-pink-700 group-open:bg-pink-200 group-open:text-pink-800 transition-colors">
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-pink-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom Callout CTA */}
        <section className="rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-xl p-8 sm:p-12 text-center space-y-4">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 mb-1">
              Direct Senior Advisory • Nisha Poudel • Itahari, Sunsari
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
              Ready to Upgrade Your Organic Visibility?
            </h2>
            <p className="text-xs sm:text-sm text-pink-100 leading-relaxed max-w-xl mx-auto">
              I'll analyze your current positions, crawl your top 3 competitors in Itahari or Nepal, and map out a step-by-step roadmap for sustainable rankings.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="py-3 px-6 rounded-full bg-white text-pink-700 hover:bg-pink-50 font-bold text-xs transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <span>Request Free Strategy Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`https://wa.me/9779800000000?text=Namaste!%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-full bg-pink-700/60 hover:bg-pink-700 text-white border border-pink-400 font-semibold text-xs transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
