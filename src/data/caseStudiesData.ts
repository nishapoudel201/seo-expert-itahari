import { CaseStudy } from '../types';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Local SEO' | 'Technical SEO' | 'E-commerce SEO' | 'Topical Architecture';
  clientSector: string;
  location: string;
  summary: string;
  deliverablesList: string[];
  keyHighlights: string;
  status: 'Completed Deliverable (Sample Model)' | 'Active Ongoing Sprint' | 'Verified Audit';
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'eastern-nepal-health-clinic',
    title: 'Healthcare Specialty Clinic Local SEO & GBP Architecture',
    category: 'Local SEO',
    clientSector: 'Healthcare & Specialized Medical',
    location: 'Itahari & Dharan Corridor, Sunsari',
    summary: 'Restructured Google Business Profile categories, standardized NAP citations across 30+ regional directories, and built medical service landing pages targeting specialized local queries.',
    deliverablesList: [
      'Google Business Profile category calibration & doctor attribute enrichment',
      'Local citation synchronization across Nepal healthcare portals',
      'MedicalClinic & LocalBusiness schema markup with geo-coordinates',
      'Localized patient booking path optimization'
    ],
    keyHighlights: 'Sample blueprint model demonstrating local 3-pack optimization for medical practices in Koshi Province.',
    status: 'Completed Deliverable (Sample Model)'
  },
  {
    id: 'nepal-artisan-crafts-ecommerce',
    title: 'Handmade Goods E-commerce Store Technical & Schema Overhaul',
    category: 'E-commerce SEO',
    clientSector: 'Retail & Handcrafted Exports',
    location: 'Nepal (Serving Global Export Markets)',
    summary: 'Audited 400+ product URLs, resolved faceted navigation crawl traps, eliminated duplicate content on variant pages, and integrated rich Product and Offer JSON-LD schema.',
    deliverablesList: [
      'Faceted navigation canonicalization & crawl budget preservation',
      'Product & Offer schema with real-time stock and international currency tags',
      'Core Web Vitals image optimization and WebP compression',
      'High-converting collection category buyer guides'
    ],
    keyHighlights: 'E-commerce technical SEO architecture solving crawl budget waste and enabling Google rich snippets.',
    status: 'Completed Deliverable (Sample Model)'
  },
  {
    id: 'hospitality-hotel-itahari',
    title: 'Boutique Hotel & Event Venue Local Geo-Entity Strategy',
    category: 'Local SEO',
    clientSector: 'Hospitality & Business Tourism',
    location: 'Main Chowk, Itahari, Sunsari',
    summary: 'Optimized local entity signals, hotel amenities schema, and geo-targeted landing pages capturing business travelers along the Mahendra Highway corridor.',
    deliverablesList: [
      'Hotel schema with Room, PriceRange, and GeoCoordinates specifications',
      'Local landmark integration (Mahendra Highway, Dharan Road proximity)',
      'Review acceleration workflows with QR code desk cards',
      'Google Maps 3-Pack rank tracking across 10km grid'
    ],
    keyHighlights: 'Hospitality SEO model tailored to Itahari’s strategic geographic location as Eastern Nepal’s travel hub.',
    status: 'Completed Deliverable (Sample Model)'
  },
  {
    id: 'b2b-saas-topical-map',
    title: 'Fintech & Cloud Accounting Topical Authority Map',
    category: 'Topical Architecture',
    clientSector: 'B2B Software & Enterprise Services',
    location: 'Kathmandu & Regional Hubs',
    summary: 'Developed an exhaustive 65-page topical map connecting commercial software landing pages with educational accounting tax guides, avoiding content cannibalization.',
    deliverablesList: [
      'Comprehensive topical map with core, outer, and trust layers',
      'Semantic triples and EAV relationship matrix',
      '15 detailed semantic content briefs for technical copywriters',
      'Bidirectional internal linking hub-and-spoke diagram'
    ],
    keyHighlights: 'Enterprise topical authority architecture establishing niche domain dominance.',
    status: 'Completed Deliverable (Sample Model)'
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'local-clinic-case-study',
    title: 'Case Study: Local Search Domination for Eastern Nepal Healthcare Provider',
    clientType: 'Private Medical Clinic [Client Confidentiality Maintained]',
    industry: 'Healthcare / Outpatient Services',
    location: 'Itahari, Sunsari, Nepal',
    challenge: 'The clinic had launched a modern website but received virtually zero organic inquiries or Google Maps direction requests. Their Google Business Profile had conflicting phone numbers, was filed under an overly broad category, and their website lacked localized service landing pages.',
    strategy: [
      'Conduct a thorough NAP consistency audit across 25+ Nepal business directories',
      'Calibrate primary GBP category to "Medical Clinic" and add detailed service menu attributes',
      'Implement LocalBusiness and MedicalClinic JSON-LD schema with precise geo-coordinates',
      'Publish localized condition-and-treatment landing pages with centerpiece layout answering patient FAQs'
    ],
    workCompleted: [
      'Standardized business name and phone across all directory citations',
      'Uploaded 30+ geo-tagged high-resolution clinic photos',
      'Created structured Q&A on Google Business Profile addressing parking, appointments, and fees',
      'Installed mobile click-to-call tracking and WhatsApp consultation buttons'
    ],
    results: [
      { metric: 'Top 3', label: 'Google Maps 3-Pack', growth: 'For 12 Target Local Terms' },
      { metric: '+185%', label: 'Direct Phone Inquiries', growth: 'Within 90-Day Sprint' },
      { metric: '0', label: 'NAP Conflicts Remaining', growth: '100% Cleaned Up' }
    ],
    timeframe: '90-Day Implementation & Verification Period',
    summary: 'By aligning local entity signals, fixing citation discrepancies, and designing patient-centric landing pages, this healthcare provider established dominant visibility for high-intent medical queries in the Sunsari region.',
    verifiedStatus: 'Verified Sample Case Study (Placeholder - Real client names withheld for privacy)'
  },
  {
    id: 'ecommerce-catalog-case-study',
    title: 'Case Study: Eliminating 15,000 Index Bloat URLs on an E-commerce Platform',
    clientType: 'Specialty Retail Online Store [Client Confidentiality Maintained]',
    industry: 'E-commerce / Retail',
    location: 'Nepal (Regional Delivery)',
    challenge: 'An online store with 800 physical products had over 18,000 URLs indexed in Google due to unconstrained faceted navigation filters (color, size, sorting parameters). Googlebot was exhausting crawl budget on useless parameter pages, while core category and product pages were dropping in rankings.',
    strategy: [
      'Perform a deep crawl analysis using headless bot simulation to isolate parameter URL generation',
      'Implement self-referential canonical tags on master product URLs',
      'Add robots.txt directives blocking non-essential sorting parameters (?sort=, ?order=, ?filter_color=)',
      'Inject clean Product, Offer, and BreadcrumbList schemas on all core product templates'
    ],
    workCompleted: [
      'Removed 14,800+ low-value thin URLs from Google\'s active index via robots directives & sitemap cleanup',
      'Engineered responsive category buyer guides answering transactional user questions',
      'Optimized image payloads converting 2,400+ JPEG assets to modern WebP with explicit dimension tags',
      'Restructured internal linking to pass link equity directly to highest-margin product lines'
    ],
    results: [
      { metric: '-82%', label: 'Index Bloat Reduction', growth: 'Eliminated Crawl Traps' },
      { metric: '+64%', label: 'Category Page Impressions', growth: 'Google Search Console' },
      { metric: '1.4s', label: 'Largest Contentful Paint', growth: 'Passing Core Web Vitals' }
    ],
    timeframe: '120-Day Technical Overhaul',
    summary: 'Streamlining indexation hygiene and eliminating crawl traps allowed Googlebot to focus crawling resources on commercial product pages, restoring ranking authority and organic sales.',
    verifiedStatus: 'Verified Technical Case Study (Placeholder - Real client metrics anonymized)'
  }
];
