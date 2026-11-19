import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'disclaimer';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      date: 'Updated November 2026',
      breadcrumb: 'Privacy Policy',
      sections: [
        {
          h: '1. Information We Collect',
          p: 'When you submit an SEO consultation request or contact us via our website (https://seoexpertitahari.com), we collect information including your name, email address, phone number, and business website URL. We do not collect payment card information directly through this site.'
        },
        {
          h: '2. Purpose of Data Processing',
          p: 'Your contact details and website address are used exclusively to evaluate your domain\'s organic search performance, prepare diagnostic audit findings, and communicate strategic consultation proposals. We never sell, rent, or lease your personal information to third-party marketing brokers.'
        },
        {
          h: '3. Analytics and Cookies',
          p: 'This website utilizes privacy-compliant analytics to monitor page rendering speed, user navigation pathways, and technical performance. You may disable cookies via your browser settings without impacting website functionality.'
        },
        {
          h: '4. Contact and Rights',
          p: 'If you wish to inspect, correct, or delete any personal information submitted via our forms, contact our data administrator at consult@seoexpertitahari.com (Itahari, Sunsari, Nepal).'
        }
      ]
    },
    terms: {
      title: 'Terms and Conditions of Service',
      date: 'Updated November 2026',
      breadcrumb: 'Terms & Conditions',
      sections: [
        {
          h: '1. Engagement Scope',
          p: 'All search engine optimization (SEO) consulting, technical audits, topical mapping, and on-page optimization services are provided under formal statements of work (SOW) agreed between the client and SEO Expert Itahari.'
        },
        {
          h: '2. Professional White-Hat Standards',
          p: 'We strictly practice ethical, white-hat SEO methodologies adhering to Google Search Essentials and Webmaster Guidelines. We do not participate in automated private blog networks (PBNs), deceptive cloaking, or link purchasing rings.'
        },
        {
          h: '3. Algorithm Dynamics & Ranking Disclaimers',
          p: 'Search engine algorithms are proprietary technologies controlled exclusively by search engines like Google and Bing. While our methodologies systematically improve organic visibility and conversion rates, no ethical third-party specialist can guarantee a permanent #1 position for any specific search keyword.'
        },
        {
          h: '4. Intellectual Property & Confidentiality',
          p: 'All custom topical maps, code directives, and strategic reports developed specifically for the client become the client\'s intellectual property upon final project settlement. All client business data is guarded under strict mutual confidentiality.'
        }
      ]
    },
    disclaimer: {
      title: 'SEO Performance & Earnings Disclaimer',
      date: 'Updated November 2026',
      breadcrumb: 'Disclaimer',
      sections: [
        {
          h: '1. No Unconditional Ranking Guarantees',
          p: 'Google Search operates using dynamic, constantly updated ranking algorithms. We guarantee transparent, best-practice execution, senior-level attention to detail, and data-driven optimization. However, we explicitly disclaim any guarantee that any specific web page will achieve or retain a permanent rank on Google.'
        },
        {
          h: '2. Financial & Business Outcomes',
          p: 'Any estimates provided via our SEO ROI Calculator or diagnostic graders are illustrative models based on industry averages. They do not constitute guaranteed financial outcomes or contractual revenue warranties.'
        },
        {
          h: '3. Third-Party Platform Policies',
          p: 'Google Business Profile verification, Google Maps ranking rules, and Google Search results are subject to change at Google LLC\'s sole discretion. We guide clients on complying with Google\'s guidelines to minimize operational risks.'
        }
      ]
    }
  }[type];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] min-h-screen text-slate-900">
      <div className="bg-white border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: content.breadcrumb }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 mb-2">
            Legal & Regulatory Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
            {content.title}
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Location: Itahari Sub-Metropolitan City, Sunsari District, Koshi Province, Nepal • {content.date}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="bg-white p-6 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          {content.sections.map((s, idx) => (
            <section key={idx} className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                {s.h}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {s.p}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};