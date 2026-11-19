import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code2, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  onOpenSchema: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultation,
  onOpenSchema
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Top Professional Status Header (White & Baby Pink) */}
      <div className="bg-[#fff0f4] text-slate-700 text-xs py-2 px-4 border-b border-pink-100 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#f472b6] animate-pulse"></span>
            <span className="font-semibold text-slate-900">
              Itahari, Sunsari (NP)
            </span>
            <span className="text-pink-300">•</span>
            <span className="text-slate-600 hidden md:inline">
              Senior SEO Consultancy • Technical Architecture, Topical Maps & Local 3-Pack
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <button
              onClick={onOpenSchema}
              className="text-slate-600 hover:text-pink-600 transition-colors flex items-center gap-1 font-mono cursor-pointer"
              title="Inspect JSON-LD Structured Data Graph"
            >
              <Code2 className="w-3.5 h-3.5 text-pink-500" />
              <span>Inspect Schema (JSON-LD)</span>
            </button>
            <span className="text-pink-200">|</span>
            <a 
              href="tel:+9779800000000" 
              className="text-slate-600 hover:text-pink-600 transition-colors font-mono flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-pink-500" />
              <span>+977 980-0000000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-pink-150 py-3 shadow-[0_4px_20px_rgba(244,114,182,0.08)]' 
            : 'bg-white/80 backdrop-blur-md border-b border-pink-100/70 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Entity Branding with User Portrait */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-pink-300 shadow-[0_0_15px_rgba(244,114,182,0.35)] group-hover:scale-105 transition-transform bg-pink-50">
              <img 
                src="/images/seo-consultant-profile.jpg" 
                alt="SEO Expert Itahari" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            <div>
              <div className="font-bold text-base text-slate-900 tracking-tight flex items-center gap-2 font-heading">
                <span>Nisha Poudel</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 font-semibold shadow-xs">
                  SEO Expert
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-500">
                Itahari, Sunsari • Technical Search Strategist
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-medium">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                currentPath === '/' 
                  ? 'bg-pink-50 text-pink-700 font-bold border border-pink-200/80 shadow-xs' 
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              Overview
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={(e) => handleLinkClick('/services/seo-services-itahari', e)}
                className={`px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentPath.startsWith('/services') 
                    ? 'bg-pink-50 text-pink-700 font-bold border border-pink-200/80 shadow-xs' 
                    : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-pink-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-xl border border-pink-100 rounded-2xl shadow-xl p-2.5 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] font-mono text-pink-600 uppercase tracking-wider px-3 py-1 font-bold">
                    7 Core Money Pages
                  </div>
                  <div className="space-y-1">
                    {servicesData.map((service) => (
                      <a
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={(e) => handleLinkClick(`/services/${service.slug}`, e)}
                        className={`block p-2.5 rounded-xl transition-all cursor-pointer ${
                          currentPath === `/services/${service.slug}`
                            ? 'bg-pink-50 text-pink-800 font-semibold border border-pink-200'
                            : 'hover:bg-pink-50/50 text-slate-700 hover:text-pink-700'
                        }`}
                      >
                        <div className="font-semibold text-xs text-slate-900">{service.shortTitle}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">{service.primaryKeyword}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/blog"
              onClick={(e) => handleLinkClick('/blog', e)}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                currentPath.startsWith('/blog') 
                  ? 'bg-pink-50 text-pink-700 font-bold border border-pink-200/80' 
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              Topical Hub (60 Blogs)
            </a>

            <a
              href="/case-studies"
              onClick={(e) => handleLinkClick('/case-studies', e)}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                currentPath === '/case-studies' 
                  ? 'bg-pink-50 text-pink-700 font-bold border border-pink-200/80' 
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              Case Studies
            </a>

            <a
              href="/about"
              onClick={(e) => handleLinkClick('/about', e)}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                currentPath === '/about' 
                  ? 'bg-pink-50 text-pink-700 font-bold border border-pink-200/80' 
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              Consultant Profile
            </a>

            <a
              href="/contact"
              onClick={(e) => handleLinkClick('/contact', e)}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                currentPath === '/contact' 
                  ? 'bg-pink-50 text-pink-700 font-bold border border-pink-200/80' 
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(244,114,182,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Audit Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-pink-600 hover:bg-pink-50 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-pink-100 bg-white px-4 pt-3 pb-6 space-y-2 text-xs font-semibold animate-in fade-in slide-in-from-top-1 duration-150 shadow-lg">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="block py-2 text-slate-700 hover:text-pink-600 cursor-pointer"
            >
              Overview
            </a>
            <div className="py-2 border-y border-pink-100">
              <span className="text-[10px] uppercase font-mono text-pink-600 block py-1 font-bold">7 Money Pages</span>
              {servicesData.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={(e) => handleLinkClick(`/services/${s.slug}`, e)}
                  className="block py-1.5 pl-2 text-slate-600 hover:text-pink-700 cursor-pointer"
                >
                  {s.title}
                </a>
              ))}
            </div>
            <a
              href="/blog"
              onClick={(e) => handleLinkClick('/blog', e)}
              className="block py-2 text-slate-700 hover:text-pink-600 cursor-pointer"
            >
              Topical Hub (60 Blogs)
            </a>
            <a
              href="/case-studies"
              onClick={(e) => handleLinkClick('/case-studies', e)}
              className="block py-2 text-slate-700 hover:text-pink-600 cursor-pointer"
            >
              Case Studies
            </a>
            <a
              href="/about"
              onClick={(e) => handleLinkClick('/about', e)}
              className="block py-2 text-slate-700 hover:text-pink-600 cursor-pointer"
            >
              About Me
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick('/contact', e)}
              className="block py-2 text-slate-700 hover:text-pink-600 cursor-pointer"
            >
              Contact
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold text-xs shadow-[0_0_15px_rgba(244,114,182,0.35)] cursor-pointer"
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
