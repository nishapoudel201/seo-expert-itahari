export interface TopicalNode {
  id: string;
  name: string;
  type: 'core-entity' | 'money-page' | 'cluster' | 'trust-page';
  url: string;
  intent?: string;
  primaryKeyword?: string;
  description: string;
  parentId?: string;
}

export const topicalGraphNodes: TopicalNode[] = [
  {
    id: 'root',
    name: 'SEO Expert in Itahari',
    type: 'core-entity',
    url: '/',
    description: 'Central Brand & Entity. Physical hub in Itahari, Sunsari, Koshi Province, Nepal.'
  },
  // Core Money Pages
  {
    id: 'm1',
    name: 'SEO Services in Itahari',
    type: 'money-page',
    url: '/services/seo-services-itahari',
    intent: 'Commercial / Transactional',
    primaryKeyword: 'SEO Services in Itahari',
    parentId: 'root',
    description: 'Main commercial landing page covering end-to-end organic search management for Nepal businesses.'
  },
  {
    id: 'm2',
    name: 'Local SEO Services in Itahari',
    type: 'money-page',
    url: '/services/local-seo-itahari',
    intent: 'Commercial / Transactional',
    primaryKeyword: 'Local SEO Services in Itahari',
    parentId: 'root',
    description: 'Google Business Profile, Google Maps 3-Pack, local citations, and geo-targeted landing pages.'
  },
  {
    id: 'm3',
    name: 'Technical SEO Services',
    type: 'money-page',
    url: '/services/technical-seo',
    intent: 'Commercial',
    primaryKeyword: 'Technical SEO Services',
    parentId: 'root',
    description: 'Crawl budget, Core Web Vitals, indexation fixes, canonicalization, and schema graph engineering.'
  },
  {
    id: 'm4',
    name: 'On-Page SEO Services',
    type: 'money-page',
    url: '/services/on-page-seo',
    intent: 'Commercial',
    primaryKeyword: 'On-Page SEO Services',
    parentId: 'root',
    description: 'Centerpiece annotation, semantic heading hierarchy, keyword mapping, and internal linking networks.'
  },
  {
    id: 'm5',
    name: 'SEO Content Strategy & Optimization',
    type: 'money-page',
    url: '/services/seo-content-strategy',
    intent: 'Commercial',
    primaryKeyword: 'SEO Content Strategy and Content Optimization',
    parentId: 'root',
    description: 'Topical maps, semantic topic clusters, entity-attribute-value modeling, and search intent briefs.'
  },
  {
    id: 'm6',
    name: 'E-commerce SEO Services',
    type: 'money-page',
    url: '/services/ecommerce-seo',
    intent: 'Commercial',
    primaryKeyword: 'E-commerce SEO Services',
    parentId: 'root',
    description: 'Product & category schema, faceted filter crawl management, duplicate content prevention, and shopping CTR.'
  },
  {
    id: 'm7',
    name: 'SEO Audit & Consulting Services',
    type: 'money-page',
    url: '/services/seo-audit-consulting',
    intent: 'Commercial / Transactional',
    primaryKeyword: 'SEO Audit and Consulting Services',
    parentId: 'root',
    description: '120-point diagnostic audit, competitor gap analysis, developer checklists, and executive growth roadmaps.'
  },

  // Outer Clusters
  {
    id: 'c1',
    name: 'Cluster 1: SEO Fundamentals',
    type: 'cluster',
    url: '/blog?cluster=seo-fundamentals',
    parentId: 'm1',
    description: '7 Articles strengthening SEO Services in Itahari. Covers search mechanics, ROI, and choosing an expert.'
  },
  {
    id: 'c2',
    name: 'Cluster 2: Local SEO Mastery',
    type: 'cluster',
    url: '/blog?cluster=local-seo',
    parentId: 'm2',
    description: '9 Articles strengthening Local SEO. Covers GBP optimization, NAP consistency, and Nepal map rankings.'
  },
  {
    id: 'c3',
    name: 'Cluster 3: Technical SEO Deep Dives',
    type: 'cluster',
    url: '/blog?cluster=technical-seo',
    parentId: 'm3',
    description: '9 Articles strengthening Technical SEO. Covers Core Web Vitals, crawl errors, robots.txt, and sitemaps.'
  },
  {
    id: 'c4',
    name: 'Cluster 4: On-Page Optimization',
    type: 'cluster',
    url: '/blog?cluster=on-page-seo',
    parentId: 'm4',
    description: '9 Articles strengthening On-Page SEO. Covers centerpiece annotation, headings, and internal linking.'
  },
  {
    id: 'c5',
    name: 'Cluster 5: Content & Semantic SEO',
    type: 'cluster',
    url: '/blog?cluster=content-semantic-seo',
    parentId: 'm5',
    description: '13 Articles strengthening Content Strategy. Covers topical maps, entity SEO, EAV, and search intent.'
  },
  {
    id: 'c6',
    name: 'Cluster 6: E-commerce SEO Strategies',
    type: 'cluster',
    url: '/blog?cluster=ecommerce-seo',
    parentId: 'm6',
    description: '8 Articles strengthening E-commerce SEO. Covers category hubs, faceted filters, and product schema.'
  },
  {
    id: 'c7',
    name: 'Cluster 7: SEO Audits & Analytics',
    type: 'cluster',
    url: '/blog?cluster=seo-audits-strategy',
    parentId: 'm7',
    description: '9 Articles strengthening SEO Audits. Covers 120-point checklist, competitor analysis, and KPI tracking.'
  },

  // Trust Pages
  {
    id: 't1',
    name: 'About Me & Philosophy',
    type: 'trust-page',
    url: '/about',
    parentId: 'root',
    description: 'Professional identity, white-hat standards, methodology, and local presence in Sunsari.'
  },
  {
    id: 't2',
    name: 'Contact & Consultation',
    type: 'trust-page',
    url: '/contact',
    parentId: 'root',
    description: 'Inquiry form, WhatsApp direct line, location verification in Itahari, Nepal.'
  },
  {
    id: 't3',
    name: 'Portfolio & Work Samples',
    type: 'trust-page',
    url: '/portfolio',
    parentId: 'root',
    description: 'Sample client deliverables, technical audit blueprints, and topical architecture models.'
  },
  {
    id: 't4',
    name: 'Case Studies',
    type: 'trust-page',
    url: '/case-studies',
    parentId: 'root',
    description: 'Detailed breakdowns of challenges, strategies, implementations, and verified growth results.'
  },
  {
    id: 't5',
    name: 'Testimonials & Reviews',
    type: 'trust-page',
    url: '/testimonials',
    parentId: 'root',
    description: 'Authentic client endorsements with strict anti-fake review transparency guarantees.'
  },
  {
    id: 't6',
    name: 'HTML Sitemap',
    type: 'trust-page',
    url: '/html-sitemap',
    parentId: 'root',
    description: 'Semantic hierarchical index of all pages, services, clusters, and articles.'
  }
];
