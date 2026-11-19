export interface SemanticTriple {
  subject: string;
  predicate: string;
  object: string;
}

export interface EavAttribute {
  entity: string;
  attribute: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Commercial' | 'Transactional' | 'Informational';
  targetEntity: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroTagline: string;
  heroDescription: string;
  centerpiece: {
    title: string;
    description: string;
    keyPoints: string[];
    visualType: 'grid' | 'timeline' | 'architecture' | 'comparison';
    details: { title: string; desc: string; iconName: string }[];
  };
  deliverables: { title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  semanticTriples: SemanticTriple[];
  eavData: EavAttribute[];
  faqs: FAQItem[];
  relatedClusterId: string;
  schemaType: 'Service' | 'ProfessionalService' | 'LocalBusiness';
}

export interface SupplementaryInternalLink {
  heading: string;
  level: 2;
  semanticRationale: string;
  leadPassage: string;
  anchorText: string;
  targetUrl: string;
  targetH1: string;
  trailingPassage: string;
  fullPassage: string;
  targetKeyword: string;
  qaChecks: {
    inputs: 'PASS';
    semanticBridge: 'PASS';
    sourceIntent: 'PASS';
    heading: 'PASS';
    contentValue: 'PASS';
    anchor: 'PASS';
    context: 'PASS';
    destination: 'PASS';
    claims: 'PASS';
    publication: 'READY FOR REVIEW';
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  clusterId: string;
  clusterName: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Informational' | 'Commercial Investigation';
  targetEntity: string;
  readTime: string;
  publishedDate: string;
  targetMoneyPageSlug: string;
  targetMoneyPageTitle: string;
  summary: string;
  headings: { id: string; text: string; level: number }[];
  contentSections: {
    heading: string;
    level: 2 | 3;
    body: string;
    keyTakeaway?: string;
  }[];
  semanticTriples: SemanticTriple[];
  faqs: FAQItem[];
  supplementaryBridge?: SupplementaryInternalLink;
}

export interface TopicCluster {
  id: string;
  name: string;
  description: string;
  primaryMoneyPageSlug: string;
  primaryMoneyPageTitle: string;
  color: string;
  articleCount: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  industry: string;
  location: string;
  challenge: string;
  strategy: string[];
  workCompleted: string[];
  results: { metric: string; label: string; growth: string }[];
  timeframe: string;
  summary: string;
  verifiedStatus: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  businessName: string;
  location: string;
  role: string;
  feedback: string;
  serviceReceived: string;
  verified: boolean;
  date: string;
}
