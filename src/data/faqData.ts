export interface CategorizedFAQ {
  category: string;
  items: {
    question: string;
    answer: string;
    tag: string;
  }[];
}

export const categorizedFaqData: CategorizedFAQ[] = [
  {
    category: 'SEO Strategy & Methodologies',
    items: [
      {
        question: 'Do you guarantee #1 rankings on Google?',
        answer: 'No ethical SEO professional can guarantee a number 1 position on Google. Google’s ranking systems are proprietary, complex, and continuously evolving. Anyone guaranteeing #1 rankings is either employing high-risk black-hat tactics that risk penalization or targeting obscure terms with zero commercial search volume. What we guarantee is rigorous technical execution, semantic entity alignment, transparent reporting, and proven white-hat methodologies.',
        tag: 'Ethics & Guarantees'
      },
      {
        question: 'What is semantic SEO and why is it superior to old keyword-based SEO?',
        answer: 'Old SEO was obsessed with keyword density—repeating an exact phrase repeatedly throughout an article. Modern semantic SEO recognizes concepts as interconnected real-world entities (people, places, services) with specific attributes. By structuring content around entity relationships and search intent, we ensure your pages satisfy Google’s Natural Language Processing (NLP) models.',
        tag: 'Semantic SEO'
      },
      {
        question: 'How do you prevent keyword cannibalization across our website?',
        answer: 'We build a master Keyword-to-URL Mapping matrix before any content is drafted. Each commercial intent and primary keyword cluster is assigned strictly to a single designated canonical page. Supporting informational articles are structured to funnel authority into that parent page rather than compete with it.',
        tag: 'Architecture'
      }
    ]
  },
  {
    category: 'Local SEO & Eastern Nepal Market',
    items: [
      {
        question: 'Why is local SEO vital for businesses in Itahari and Sunsari?',
        answer: 'Itahari is the premier transportation and trade nexus of Eastern Nepal, connecting Dharan, Biratnagar, and the East-West Highway corridor. Over 80% of local mobile searches for services lead to an in-person visit or phone call within 24 hours. Local SEO ensures your Google Business Profile and local landing pages capture this immediate commercial intent.',
        tag: 'Itahari Local SEO'
      },
      {
        question: 'Can you help our business rank across both Itahari and Dharan?',
        answer: 'Yes. Through properly structured service area definitions in Google Business Profile and dedicated, high-value regional service pages—without violating Google’s guidelines against doorway pages—we can legitimately capture regional Eastern Nepal demand.',
        tag: 'Local Expansion'
      },
      {
        question: 'What is NAP consistency and why does it matter?',
        answer: 'NAP stands for Name, Address, and Phone number. When this information is identical across your website, Google Business Profile, Facebook page, Nepal Yellow Pages, and local directories, search engines have high confidence in your physical location and rank your business higher on Google Maps.',
        tag: 'Citations'
      }
    ]
  },
  {
    category: 'Timelines, Reporting & Engagement',
    items: [
      {
        question: 'How long does SEO take to produce measurable business results?',
        answer: 'Typically, technical indexation improvements and low-competition keyword movement appear within 4 to 8 weeks. Substantial organic traffic growth, competitive keyword rankings, and steady lead volume usually compound between 3 to 6 months. SEO is a long-term compounding asset rather than a temporary paid ad spike.',
        tag: 'Timelines'
      },
      {
        question: 'What deliverables will I receive each month?',
        answer: 'You receive transparent monthly executive reporting tracking genuine business KPIs: organic click-through rates, Google Search Console query impressions, keyword ranking movements, technical health scores, and inbound conversions. We also provide a prioritized roadmap for upcoming sprint tasks.',
        tag: 'Deliverables'
      },
      {
        question: 'What if we already have an in-house web designer or developer?',
        answer: 'We collaborate seamlessly with in-house teams. We can deliver detailed, developer-ready technical specifications, schema code, and copy briefs, accompanied by validation testing to ensure accurate implementation.',
        tag: 'Collaboration'
      }
    ]
  },
  {
    category: 'Technical SEO & E-commerce',
    items: [
      {
        question: 'What are Core Web Vitals and how do they impact my rankings?',
        answer: 'Core Web Vitals are three standardized metrics Google uses to evaluate user experience: Largest Contentful Paint (LCP for loading speed), Interaction to Next Paint (INP for responsiveness), and Cumulative Layout Shift (CLS for visual stability). Fast, smooth pages receive favorable ranking treatment.',
        tag: 'Core Web Vitals'
      },
      {
        question: 'How do you handle e-commerce duplicate content from filters?',
        answer: 'Faceted navigation filters (color, size, price sorting) can generate thousands of redundant URLs. We deploy canonical tags, robots.txt directives, and selective parameter handling to preserve your search bot crawl budget for high-converting category and product pages.',
        tag: 'E-commerce'
      }
    ]
  }
];
