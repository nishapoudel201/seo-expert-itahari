import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Hi! I would like to inquire about technical SEO and local rankings in Nepal.');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/9779804354377?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded chat mini popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs font-heading">
                  Direct WhatsApp Advisory
                </h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available • Itahari, Sunsari (NP)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 space-y-3">
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 space-y-1">
              <p className="font-semibold text-xs text-slate-900">
                Direct Technical Advisory
              </p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Send your website URL or ask about Google Maps 3-Pack, code fixes, or technical audits. You will receive a direct reply.
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white font-sans text-slate-800"
                placeholder="Type your question or domain URL..."
              />

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start Direct Chat (+977 9804354377)</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 border border-slate-700/80 group"
        aria-label="Open WhatsApp Chat"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <MessageCircle className="w-4 h-4 text-emerald-400" />
        <span className="font-medium hidden sm:inline">WhatsApp Consultation</span>
      </button>
    </div>
  );
};