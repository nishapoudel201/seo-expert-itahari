import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceSlug?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultServiceSlug
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    serviceSlug: defaultServiceSlug || 'seo-services-itahari',
    message: '',
    budget: 'Medium ($300 - $800 / NPR 40k - 100k)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Namaste Nisha! My name is ${formData.name || 'a visitor'}. Website: ${formData.website || 'N/A'}. Interested in: ${formData.serviceSlug}. Note: ${formData.message || 'Consultation inquiry'}`;
    window.open(`https://wa.me/9779800000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#fffafc] w-full max-w-xl rounded-3xl shadow-2xl border border-pink-200 overflow-hidden relative max-h-[90vh] flex flex-col text-slate-900">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#fff5f8] to-white p-6 border-b border-pink-100 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-pink-200 bg-white hover:bg-pink-50 text-slate-500 hover:text-pink-600 transition-colors shadow-2xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Direct Senior Advisory • Nisha Poudel
            </span>
            <span className="text-xs font-mono text-slate-500">
              Itahari, Sunsari
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-heading">
            Schedule SEO Diagnostic & Strategy Session
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-sans">
            Direct, source-code level review of your domain's organic indexing and ranking bottlenecks.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 border border-pink-200 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-heading">
                Diagnostic Request Recorded
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your domain (<span className="font-mono font-semibold text-pink-600">{formData.website || 'pending URL'}</span>) will be evaluated manually within 24 business hours at <strong>{formData.email}</strong> by Nisha Poudel.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="btn-pill-primary text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct WhatsApp Message</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="btn-pill-secondary text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Subash Shrestha"
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
                    placeholder="subash@business.com"
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
                    placeholder="+977 98XXXXXXXX"
                    className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Current Website URL</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Primary Service Pillar Required</label>
                <select
                  value={formData.serviceSlug}
                  onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                >
                  {servicesData.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title} ({s.badge})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Target Goals & Specific Issues</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current organic traffic, target cities in Nepal or abroad, and specific ranking goals..."
                  className="w-full p-2.5 rounded-xl border border-pink-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 shadow-xs"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-pink-100">
                <span className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
                  Direct human review by Nisha Poudel.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn-pill-primary text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Submit Consultation Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
