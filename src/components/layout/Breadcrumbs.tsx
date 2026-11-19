import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const fullItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    ...items
  ];

  // Generate Google BreadcrumbList Schema JSON-LD
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': fullItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      ...(item.path ? { 'item': `https://seoexpertitahari.com${item.path}` } : {})
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full font-mono text-xs text-slate-500">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <ol className="flex items-center flex-wrap gap-1.5">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />}

              {isLast ? (
                <span className="font-semibold text-pink-700 truncate max-w-xs sm:max-w-md bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200" aria-current="page">
                  {item.label}
                </span>
              ) : item.path ? (
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.path!);
                  }}
                  className="hover:text-pink-600 transition-colors flex items-center gap-1 font-medium text-slate-500"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5 text-pink-400" />}
                  <span>{item.label}</span>
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};