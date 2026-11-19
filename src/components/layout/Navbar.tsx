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
      {/* Top Professional Status Header */}
      <div className="bg-[#07080b] text-slate-400 text-xs py-2 px-4 border-b border-white/10 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
            <span className="font-semibold text-white">
              Itahari, Sunsari (NP)
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 hidden md:inline">
              Senior SEO Consultancy • Technical Architecture, Topical Maps & Local 3-Pack
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <button
              onClick={onOpenSchema}
              className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1 font-mono cursor-pointer"
              title="Inspect JSON-LD Structured Data Graph"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inspect Schema (JSON-LD)</span>
            </button>
            <span className="text-slate-700">|</span>
            <a 
              href="tel:+9779800000000" 
              className="text-slate-400 hover:text-white transition-colors font-mono flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-slate-400" />
              <span>+977 980-0000000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#090b0e]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' 
            : 'bg-[#090b0e]/80 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Entity Branding */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1.5 ring-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform bg-[#11151c]">
              <img 
                src="/images/seo-consultant-profile.jpg" 
                alt="SEO Expert Itahari" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            <div>
              <div className="font-bold text-base text-white tracking-tight flex items-center gap-2 font-heading">
                <span>SEO Expert Itahari</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                  Active
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Sunsari, Nepal • Organic Search Architecture
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
                  ? 'bg-white/10 text-white font-bold shadow-xs' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
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
                    ? 'bg-white/10 text-white font-bold shadow-xs' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#11151c]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2.5 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider px-3 py-1 font-bold">
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
                            ? 'bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30'
                            : 'hover:bg-white/5 text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold text-xs text-white">{service.shortTitle}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{service.primaryKeyword}</div>
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
                  ? 'bg-white/10 text-white font-bold' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Topical Hub (60 Blogs)
            </a>

            <a
              href="/case-studies"
              onClick={(e) => handleLinkClick('/case-studies', e)}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                currentPath === '/case-studies' 
                  ? 'bg-white/10 text-white font-bold' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Case Studies
            </a>

            <a
              href="/about"
              onClick={(e) => handleLinkClick('/about', e)}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                currentPath === '/about' 
                  ? 'bg-white/10 text-white font-bold' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Consultant Profile
            </a>

            <a
              href="/contact"
              onClick={(e) => handleLinkClick('/contact', e)}
              className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                currentPath === '/contact' 
                  ? 'bg-white/10 text-white font-bold' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Audit Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#090b0e] px-4 pt-3 pb-6 space-y-2 text-xs font-semibold animate-in fade-in slide-in-from-top-1 duration-150">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="block py-2 text-slate-300 hover:text-emerald-400 cursor-pointer"
            >
              Overview
            </a>
            <div className="py-2 border-y border-white/10">
              <span className="text-[10px] uppercase font-mono text-emerald-400 block py-1 font-bold">7 Money Pages</span>
              {servicesData.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={(e) => handleLinkClick(`/services/${s.slug}`, e)}
                  className="block py-1.5 pl-2 text-slate-400 hover:text-white cursor-pointer"
                >
                  {s.title}
                </a>
              ))}
            </div>
            <a
              href="/blog"
              onClick={(e) => handleLinkClick('/blog', e)}
              className="block py-2 text-slate-300 hover:text-emerald-400 cursor-pointer"
            >
              Topical Hub (60 Blogs)
            </a>
            <a
              href="/case-studies"
              onClick={(e) => handleLinkClick('/case-studies', e)}
              className="block py-2 text-slate-300 hover:text-emerald-400 cursor-pointer"
            >
              Case Studies
            </a>
            <a
              href="/about"
              onClick={(e) => handleLinkClick('/about', e)}
              className="block py-2 text-slate-300 hover:text-emerald-400 cursor-pointer"
            >
              About Me
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick('/contact', e)}
              className="block py-2 text-slate-300 hover:text-emerald-400 cursor-pointer"
            >
              Contact
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
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
