import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  Clock
} from 'lucide-react';
import { blogPosts, topicClusters } from '../data/blogData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface BlogHubPageProps {
  onNavigate: (path: string) => void;
  selectedClusterId?: string;
}

export const BlogHubPage: React.FC<BlogHubPageProps> = ({
  onNavigate,
  selectedClusterId: initialCluster
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCluster, setActiveCluster] = useState<string>(initialCluster || 'all');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCluster = activeCluster === 'all' || post.clusterId === activeCluster;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCluster && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full bg-[#fffafc] min-h-screen text-slate-900 selection:bg-pink-200 selection:text-pink-900">
      <div className="bg-[#fff0f4] border-b border-pink-100">
        <Breadcrumbs
          items={[{ label: 'Topical Clusters & Educational Blog' }]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-[#fff5f8] to-white border-b border-pink-100 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Nisha Poudel // Educational Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              Topical Authority Hub & SEO Knowledge Base
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Every guide in this repository is strictly mapped to an explicit search intent and directly anchors one of our core commercial service landing pages.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Search & Filter Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search keywords, concepts, guides..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-pink-200 bg-[#fffafc] text-xs font-mono focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 text-slate-900 shadow-2xs"
              />
            </div>

            <div className="text-xs font-mono text-slate-500">
              Showing <strong className="text-slate-900">{filteredPosts.length}</strong> of {blogPosts.length} guides
            </div>
          </div>

          {/* Cluster Filter Buttons */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-pink-100">
            <button
              onClick={() => setActiveCluster('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeCluster === 'all'
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold shadow-xs'
                  : 'bg-white border border-pink-100 text-slate-600 hover:border-pink-300 hover:text-slate-900'
              }`}
            >
              All Topics ({blogPosts.length})
            </button>
            {topicClusters.map((cluster) => {
              const count = blogPosts.filter((p) => p.clusterId === cluster.id).length;
              const isActive = activeCluster === cluster.id;
              return (
                <button
                  key={cluster.id}
                  onClick={() => setActiveCluster(cluster.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold shadow-xs'
                      : 'bg-white border border-pink-100 text-slate-600 hover:border-pink-300 hover:text-slate-900'
                  }`}
                >
                  {cluster.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-3xl bg-white border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] hover:border-pink-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 font-semibold">
                    {post.clusterName}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-pink-400" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-900 mb-2 font-heading leading-snug">
                  <a
                    href={`/blog/${post.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/blog/${post.slug}`);
                    }}
                    className="hover:text-pink-600 transition-colors"
                  >
                    {post.title}
                  </a>
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {post.summary}
                </p>

                <div className="text-[11px] font-mono text-slate-500 bg-pink-50/50 p-2.5 rounded-2xl border border-pink-100">
                  <strong className="text-slate-700">Target Query:</strong> {post.primaryKeyword}
                </div>
              </div>

              <div className="pt-4 border-t border-pink-100 mt-5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 capitalize">
                  Anchor: {post.targetMoneyPageSlug.replace(/-/g, ' ')}
                </span>
                <a
                  href={`/blog/${post.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/blog/${post.slug}`);
                  }}
                  className="btn-pill-secondary text-[11px] py-1 px-3"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};
