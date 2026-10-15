'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useEnquiry } from './EnquiryContext';
import { kindCopy, fieldsByKind, buildMessage, whatsappUrl, mailtoUrl, serviceName } from '@/lib/enquiry';
import { site } from '@/data/site';
import { MessageCircle, Mail, X, Check, Copy } from 'lucide-react';

export function EnquiryModal() {
  const { isOpen, context, closeEnquiry } = useEnquiry();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  // Sync open state with native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Handle native light-dismiss fallback for browsers without native closedby support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClick = (e: MouseEvent) => {
      if (e.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        const isInContent = (
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width
        );
        if (!isInContent) {
          closeEnquiry();
        }
      }
    };

    const handleCancel = (e: Event) => {
      e.preventDefault();
      closeEnquiry();
    };

    dialog.addEventListener('click', handleClick);
    dialog.addEventListener('cancel', handleCancel);
    return () => {
      dialog.removeEventListener('click', handleClick);
      dialog.removeEventListener('cancel', handleCancel);
    };
  }, [closeEnquiry]);

  const [prevContext, setPrevContext] = useState(context);
  if (prevContext !== context) {
    setPrevContext(context);
    setFormData({});
    setCopied(false);
  }

  if (!isOpen) return null;

  const currentCopy = kindCopy[context.kind];
  const fields = fieldsByKind[context.kind] || [];
  const activeServiceName = serviceName(context.service);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formattedMsg = buildMessage(context, formData);
  const waLink = whatsappUrl(formattedMsg);
  const emailLink = mailtoUrl(context, formattedMsg);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <dialog
      ref={dialogRef}
      className="enquiry p-0 overflow-hidden outline-none bg-chalk border border-ink/15 text-ink shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-ink text-chalk p-6 md:p-8 relative">
          <button
            onClick={closeEnquiry}
            className="absolute top-6 right-6 p-2 rounded-full bg-chalk/10 hover:bg-gold hover:text-ink transition-colors text-chalk/70"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs uppercase tracking-widest font-mono text-gold font-bold">
              {context.kind.toUpperCase()} {activeServiceName ? `• ${activeServiceName}` : ''}
            </span>
          </div>

          <h2 id="enquiry-modal-title" className="display text-3xl md:text-4xl uppercase tracking-tight text-white">
            {currentCopy.title}
          </h2>

          {context.option && (
            <p className="mt-1 text-sm font-medium text-gold">
              Selected: <span className="underline decoration-gold/50">{context.option}</span>
            </p>
          )}

          <p className="mt-2 text-sm text-chalk/70 max-w-md font-sans">
            {currentCopy.intro}
          </p>
        </div>

        {/* Modal Form Fields */}
        <div className="p-6 md:p-8 space-y-5 bg-chalk">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field) => (
              <div
                key={field.name}
                className={field.half ? 'col-span-1' : 'col-span-1 md:col-span-2'}
              >
                <div className="field">
                  <label htmlFor={`field-${field.name}`}>
                    {field.label} {field.required && <span className="text-gold-deep">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={`field-${field.name}`}
                      rows={3}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={`field-${field.name}`}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    >
                      <option value="">Select an option</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={`field-${field.name}`}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Dispatch Buttons */}
          <div className="pt-4 border-t border-ink/10 space-y-3">
            <p className="text-xs text-muted font-medium">
              Choose how you would like to connect instantly with our director & team:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle size={18} />
                Send via WhatsApp
              </a>

              <a
                href={emailLink}
                className="flex items-center justify-center gap-2.5 bg-ink hover:bg-gold hover:text-ink text-chalk font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Mail size={18} />
                Send via Email
              </a>
            </div>

            <div className="flex items-center justify-between pt-2 text-[11px] text-muted">
              <span>Direct line: {site.phones[0]}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 hover:text-ink transition-colors font-medium"
              >
                {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                {copied ? 'Copied' : 'Copy message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
