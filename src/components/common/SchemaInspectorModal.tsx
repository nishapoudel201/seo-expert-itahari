import React, { useState } from 'react';
import { X, Copy, Check, Code2, ExternalLink } from 'lucide-react';

interface SchemaInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  schemaData: object;
}

export const SchemaInspectorModal: React.FC<SchemaInspectorModalProps> = ({
  isOpen,
  onClose,
  currentPath,
  schemaData
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const jsonString = JSON.stringify(schemaData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#fffafc] w-full max-w-3xl rounded-3xl shadow-2xl border border-pink-200 overflow-hidden relative max-h-[90vh] flex flex-col text-slate-900">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-pink-100 flex items-center justify-between bg-gradient-to-b from-[#fff5f8] to-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl border border-pink-200 bg-pink-50 text-pink-600 flex items-center justify-center font-mono shadow-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900 font-heading">
                  Active JSON-LD Structured Graph
                </h3>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 font-mono font-medium">
                  schema.org • Nisha Poudel
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Canonical URL: {currentPath}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-pink-200 text-xs font-mono transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-pink-600" />
                  <span className="text-pink-600 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-pink-500" />
                  <span>Copy JSON</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-pink-200 bg-white hover:bg-pink-50 text-slate-500 hover:text-pink-600 transition-colors shadow-2xs"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 overflow-y-auto font-mono text-xs bg-slate-950 leading-relaxed text-pink-300">
          <pre className="whitespace-pre-wrap">{jsonString}</pre>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#fff5f8] border-t border-pink-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-slate-600">
          <span>
            Fully compliant with Google Search Central Rich Results & Schema.org standards
          </span>
          <a
            href="https://validator.schema.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline flex items-center gap-1 font-medium"
          >
            <span>Verify on Schema.org Validator</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
