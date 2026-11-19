import React, { useState } from 'react';
import { 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Clock
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    serviceSlug: 'seo-services-itahari',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = `Namaste Nisha! My name is ${formData.name || 'a visitor'}. Website: ${formData.website || 'N/A'}. Interested in: ${formData.serviceSlug}. Note: ${formData.message || 'Consultation inquiry'}`;
    window.open(`https://wa.me/9779800000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-[#fffafc] min-h-screen text-slate-900 selection:bg-pink-200 selection:text-pink-900">
      <div className="bg-[#fff0f4] border-b border-pink-100">
        <Breadcrumbs items={[{ label: 'Contact & Inquiries' }]} onNavigate={onNavigate} />
      </div>

      <header className="bg-gradient-to-b from-[#fff5f8] to-white border-b border-pink-100 py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Direct Senior Advisory // Nisha Poudel
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
              Direct Communication with Nisha Poudel – SEO Expert in Itahari
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Need honest guidance regarding Google Business Profile ranking in Sunsari, technical crawl bottlenecks, or a high-intent topical map? Reach out directly below.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)]">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 block mb-1">
                // Direct Inquiry Form
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Request an Initial Diagnostic Review
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Submit your domain details for a human review within 24 business hours directly from Nisha Poudel. No spam, no automated slide decks.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 border border-pink-200 mx-auto flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your domain (<span className="font-mono text-pink-600 font-semibold">{formData.website || 'pending URL'}</span>) will be evaluated and you will receive a response at <strong>{formData.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-pill-secondary text-xs mx-auto"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Binod Sharma"
                      className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. binod@business.com.np"
                      className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+977 9800000000"
                      className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Website URL (if live)</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourbrand.com.np"
                      className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Primary Service Required *</label>
                  <select
                    value={formData.serviceSlug}
                    onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                  >
                    {servicesData.map((svc) => (
                      <option key={svc.slug} value={svc.slug}>
                        {svc.title} ({svc.badge})
                      </option>
                    ))}
                    <option value="custom-consulting">General Technical SEO Consulting Sprint</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Ranking Goals or Known Issues</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding your target geographical market (Itahari, Sunsari, Koshi, or overseas) and current indexing challenges..."
                    className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                  />
                </div>

                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-pink-50/60 border border-pink-200 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>Confidentiality guaranteed. Direct human reply from Nisha Poudel within 24 business hours.</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn-pill-primary justify-center text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Inquiry'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="btn-pill-secondary text-xs justify-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-pink-500" />
                    <span>Direct WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location & Details Sidebar */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-pink-150 shadow-[0_4px_25px_rgba(244,114,182,0.06)] space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-heading">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span>Local Office & Coordinates</span>
              </h2>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-pink-700 uppercase block">Consultant & Base Location</span>
                  <p className="text-slate-900 font-semibold">Nisha Poudel</p>
                  <p className="text-slate-700">Itahari Sub-Metropolitan City (Ward 4)</p>
                  <p className="text-slate-600">Sunsari District, Koshi Province, Nepal</p>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">Geo: 26.6657° N, 87.2798° E</p>
                </div>

                <div className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-pink-700 uppercase block">Direct Contact</span>
                  <p className="text-slate-700 font-medium">
                    Email: <a href="mailto:consult@seoexpertitahari.com" className="text-pink-600 hover:underline">consult@seoexpertitahari.com</a>
                  </p>
                  <p className="text-slate-700 font-medium">
                    Phone: <a href="tel:+9779800000000" className="text-pink-600 hover:underline">+977 980-0000000</a>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-pink-700 uppercase block">Operating Hours</span>
                  <p className="text-slate-700 font-medium">Sunday – Friday: 9:00 AM – 6:00 PM NPT</p>
                  <p className="text-slate-500">Saturday: Strategic sprints by appointment</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full btn-pill-primary justify-center text-xs"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Start WhatsApp Chat (+977 980-0000000)</span>
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-pink-150 text-xs text-slate-600 space-y-1.5 shadow-sm">
              <strong className="text-slate-900 block font-semibold flex items-center gap-1.5 font-heading">
                <Clock className="w-4 h-4 text-pink-500" />
                <span>Fast Response Commitment</span>
              </strong>
              <p>
                All inquiries submitted during business hours receive a manual response within 24 hours directly from Nisha Poudel.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
