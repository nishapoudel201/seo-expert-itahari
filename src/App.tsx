import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppWidget } from './components/layout/WhatsAppWidget';
import { ConsultationModal } from './components/common/ConsultationModal';
import { SchemaInspectorModal } from './components/common/SchemaInspectorModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { BlogHubPage } from './pages/BlogHubPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FaqPage } from './pages/FaqPage';
import { HtmlSitemapPage } from './pages/HtmlSitemapPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Visual Experience Components (Jishnu Mondal Reference)
import { LoadingScreen } from './components/layout/LoadingScreen';
import { NoiseOverlay } from './components/layout/NoiseOverlay';

// Data
import { servicesData } from './data/servicesData';
import { blogPosts, topicClusters } from './data/blogData';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    // Check if previously loaded in this session to avoid annoying repeat on back/forward
    return !sessionStorage.getItem('seo_expert_loaded');
  });
  const [selectedClusterParam, setSelectedClusterParam] = useState<string | undefined>(undefined);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSchemaOpen, setIsSchemaOpen] = useState(false);
  const [consultationServiceSlug, setConsultationServiceSlug] = useState<string | undefined>(undefined);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('seo_expert_loaded', 'true');
    setIsLoading(false);
  };

  // Sync with browser navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      const urlParams = new URLSearchParams(window.location.search);
      setSelectedClusterParam(urlParams.get('cluster') || undefined);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    let cleanPath = path;
    let queryCluster: string | undefined = undefined;

    if (path.includes('?cluster=')) {
      const parts = path.split('?cluster=');
      cleanPath = parts[0];
      queryCluster = parts[1];
    }

    if (window.location.pathname !== cleanPath || queryCluster !== selectedClusterParam) {
      window.history.pushState({}, '', path);
      setCurrentPath(cleanPath);
      setSelectedClusterParam(queryCluster);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceSlug?: string) => {
    setConsultationServiceSlug(serviceSlug);
    setIsConsultationOpen(true);
  };

  // Route matching & dynamic head title
  let pageContent = <NotFoundPage onNavigate={navigate} />;
  let currentSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'SEO Expert in Itahari, Nepal',
    'url': 'https://seoexpertitahari.com'
  };

  // 1. Homepage
  if (currentPath === '/' || currentPath === '/home') {
    document.title = 'Nisha Poudel - SEO Expert in Itahari, Nepal | Semantic Search Architecture';
    currentSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://seoexpertitahari.com/#website',
          'url': 'https://seoexpertitahari.com',
          'name': 'Nisha Poudel - SEO Expert in Itahari, Nepal',
          'description': 'Professional SEO consultancy led by Nisha Poudel, based in Itahari, Sunsari, Koshi Province, Nepal.'
        },
        {
          '@type': 'ProfessionalService',
          '@id': 'https://seoexpertitahari.com/#localbusiness',
          'name': 'SEO Expert in Itahari - Nisha Poudel',
          'founder': {
            '@type': 'Person',
            'name': 'Nisha Poudel'
          },
          'url': 'https://seoexpertitahari.com',
          'telephone': '+977-9804354377',
          'priceRange': '$$',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Itahari Sub-Metropolitan City, Ward 4',
            'addressLocality': 'Itahari',
            'addressRegion': 'Sunsari, Koshi Province',
            'addressCountry': 'NP'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 26.6657,
            'longitude': 87.2798
          },
          'areaServed': [
            'Itahari',
            'Dharan',
            'Biratnagar',
            'Sunsari',
            'Koshi Province',
            'Nepal'
          ]
        },
        {
          '@type': 'Person',
          '@id': 'https://seoexpertitahari.com/#person',
          'name': 'Nisha Poudel',
          'givenName': 'Nisha',
          'familyName': 'Poudel',
          'jobTitle': 'Senior SEO Specialist & Technical Search Strategist',
          'description': 'Independent SEO Expert based in Itahari, Sunsari, Nepal specializing in semantic topical authority, Core Web Vitals, and local Google 3-Pack optimization.',
          'image': 'https://seoexpertitahari.com/images/seo-consultant-profile.jpg',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Itahari',
            'addressRegion': 'Sunsari, Koshi Province',
            'addressCountry': 'Nepal'
          },
          'worksFor': {
            '@id': 'https://seoexpertitahari.com/#localbusiness'
          }
        }
      ]
    };
    pageContent = (
      <HomePage
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenSchema={() => setIsSchemaOpen(true)}
      />
    );
  }
  // 2. Services: /services/:slug
  else if (currentPath.startsWith('/services/')) {
    const slug = currentPath.replace('/services/', '');
    const service = servicesData.find(s => s.slug === slug);

    if (service) {
      document.title = service.metaTitle;
      currentSchema = {
        '@context': 'https://schema.org',
        '@type': service.schemaType,
        'name': service.title,
        'description': service.metaDescription,
        'url': `https://seoexpertitahari.com/services/${service.slug}`,
        'provider': {
          '@type': 'ProfessionalService',
          'name': 'SEO Expert Itahari',
          'telephone': '+977-9804354377',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Itahari',
            'addressRegion': 'Sunsari, Nepal'
          }
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Itahari, Sunsari, Koshi Province, Nepal'
        }
      };
      pageContent = (
        <ServicePage
          service={service}
          onNavigate={navigate}
          onOpenConsultation={() => handleOpenConsultation(service.slug)}
          onOpenSchema={() => setIsSchemaOpen(true)}
        />
      );
    } else {
      document.title = '404 Service Not Found | SEO Expert Itahari';
      pageContent = <NotFoundPage onNavigate={navigate} />;
    }
  }
  // 3. Blog Hub: /blog
  else if (currentPath === '/blog' || currentPath === '/clusters') {
    document.title = 'Topical Authority Clusters & SEO Blog | SEO Expert Itahari';
    currentSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Topical Authority Clusters & SEO Blog',
      'description': 'Educational supporting articles mapped to strengthen core commercial SEO services.'
    };
    pageContent = (
      <BlogHubPage
        onNavigate={navigate}
        selectedClusterId={selectedClusterParam}
      />
    );
  }
  // 4. Individual Blog Post: /blog/:slug
  else if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    const post = blogPosts.find(p => p.slug === slug);

    if (post) {
      document.title = post.metaTitle;
      currentSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': post.title,
        'description': post.metaDescription,
        'datePublished': post.publishedDate,
        'author': {
          '@type': 'Person',
          'name': 'Nisha Poudel',
          'jobTitle': 'Senior SEO Specialist & Technical Search Strategist'
        }
      };
      pageContent = (
        <BlogPostPage
          post={post}
          onNavigate={navigate}
          onOpenConsultation={() => handleOpenConsultation(post.targetMoneyPageSlug)}
        />
      );
    } else {
      document.title = '404 Article Not Found | SEO Expert Itahari';
      pageContent = <NotFoundPage onNavigate={navigate} />;
    }
  }
  // 5. Trust Pages
  else if (currentPath === '/about') {
    document.title = 'About Nisha Poudel | SEO Expert in Itahari, Nepal';
    currentSchema = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About Nisha Poudel - SEO Expert Itahari',
      'description': 'Senior SEO and Semantic Search Strategist based in Itahari, Sunsari, Nepal.'
    };
    pageContent = (
      <AboutPage
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    );
  } else if (currentPath === '/contact') {
    document.title = 'Contact Nisha Poudel | SEO Expert in Itahari, Nepal';
    currentSchema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact Nisha Poudel - SEO Expert Itahari',
      'telephone': '+977-9804354377',
      'email': 'consult@seoexpertitahari.com'
    };
    pageContent = <ContactPage onNavigate={navigate} />;
  } else if (currentPath === '/portfolio') {
    document.title = 'SEO Portfolio & Work Samples | SEO Expert Itahari';
    currentSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      'name': 'SEO Deliverables Portfolio'
    };
    pageContent = (
      <PortfolioPage
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    );
  } else if (currentPath === '/case-studies') {
    document.title = 'Verified SEO Case Studies | SEO Expert Itahari, Nepal';
    pageContent = (
      <CaseStudiesPage
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    );
  } else if (currentPath === '/testimonials') {
    document.title = 'Client Testimonials & Feedback | SEO Expert Itahari';
    pageContent = (
      <TestimonialsPage
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    );
  } else if (currentPath === '/faq') {
    document.title = 'Search Engine Optimization FAQs | SEO Expert Itahari';
    currentSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage'
    };
    pageContent = (
      <FaqPage
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    );
  } else if (currentPath === '/html-sitemap') {
    document.title = 'Semantic HTML Sitemap | SEO Expert Itahari';
    pageContent = <HtmlSitemapPage onNavigate={navigate} />;
  } else if (currentPath === '/privacy-policy') {
    document.title = 'Privacy Policy | SEO Expert Itahari';
    pageContent = <LegalPage type="privacy" onNavigate={navigate} />;
  } else if (currentPath === '/terms') {
    document.title = 'Terms of Service | SEO Expert Itahari';
    pageContent = <LegalPage type="terms" onNavigate={navigate} />;
  } else if (currentPath === '/disclaimer') {
    document.title = 'SEO Performance Disclaimer | SEO Expert Itahari';
    pageContent = <LegalPage type="disclaimer" onNavigate={navigate} />;
  } else {
    document.title = '404 Page Not Found | SEO Expert Itahari';
    pageContent = <NotFoundPage onNavigate={navigate} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fffafc] text-slate-900 font-sans selection:bg-pink-200 selection:text-pink-900 relative">
      {/* Cinematic Film Grain Noise Overlay (Jishnu Mondal Reference) */}
      <NoiseOverlay />

      {/* Signature 0-100% Loading Screen (Jishnu Mondal Reference) */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Dynamic Main Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(currentSchema) }}
      />

      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenSchema={() => setIsSchemaOpen(true)}
      />

      <div className="flex-1">
        {pageContent}
      </div>

      <Footer
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenSchema={() => setIsSchemaOpen(true)}
      />

      <WhatsAppWidget />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultServiceSlug={consultationServiceSlug}
      />

      {/* Interactive Schema Inspector Modal */}
      <SchemaInspectorModal
        isOpen={isSchemaOpen}
        onClose={() => setIsSchemaOpen(false)}
        currentPath={currentPath}
        schemaData={currentSchema}
      />
    </div>
  );
}

export default App;
