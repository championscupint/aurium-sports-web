'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useEnquiry } from './EnquiryContext';
import {
  kindCopy,
  fieldsByKind,
  buildMessage,
  whatsappUrl,
  mailtoUrl,
  serviceName,
} from '@/lib/enquiry';
import { site } from '@/data/site';
import {
  resolveEnquiryFormMeta,
  trackFormView,
  trackFormStart,
  trackFormSubmitAttempt,
  trackFormValidationError,
  trackLead,
  trackWhatsAppClick,
  trackEmailClick,
  trackPhoneClick,
  resetFormStartSession,
} from '@/lib/analytics';
import {
  MessageCircle,
  Mail,
  X,
  Check,
  Copy,
  CheckCircle2,
  Send,
  AlertCircle,
} from 'lucide-react';

export function EnquiryModal() {
  const { isOpen, context, closeEnquiry } = useEnquiry();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);

  const formMeta = resolveEnquiryFormMeta(context, formData.programme);

  // Sync open state with native dialog & fire form_view when opened
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      trackFormView(formMeta);
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen, formMeta]);

  // Handle native light-dismiss fallback for browsers without native closedby support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClick = (e: MouseEvent) => {
      if (e.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        const isInContent =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;
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
    setFormData(context.option ? { programme: context.option } : {});
    setCopied(false);
    setValidationError(null);
    setSubmittedLeadId(null);
  }

  if (!isOpen) return null;

  const currentCopy = kindCopy[context.kind];
  const fields = fieldsByKind[context.kind] || [];
  const activeServiceName = serviceName(context.service);

  const handleInputChange = (name: string, value: string) => {
    trackFormStart(formMeta);
    if (validationError) setValidationError(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || submittedLeadId) return;

    const currentMeta = resolveEnquiryFormMeta(context, formData.programme);
    trackFormSubmitAttempt(currentMeta);
    setValidationError(null);

    // Validate required fields
    for (const field of fields) {
      const rawVal = (formData[field.name] || '').trim();
      if (field.required && !rawVal) {
        setValidationError(`Please complete the required field: ${field.label}.`);
        trackFormValidationError({
          ...currentMeta,
          errorField: field.name,
          errorType: 'missing_required_field',
        });
        return;
      }

      if (field.type === 'email' && rawVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawVal)) {
        setValidationError('Please enter a valid email address.');
        trackFormValidationError({
          ...currentMeta,
          errorField: field.name,
          errorType: 'invalid_email_format',
        });
        return;
      }

      if (field.type === 'tel' && rawVal && rawVal.replace(/\D/g, '').length < 7) {
        setValidationError('Please enter a valid phone or WhatsApp number.');
        trackFormValidationError({
          ...currentMeta,
          errorField: field.name,
          errorType: 'invalid_phone_format',
        });
        return;
      }
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/ecosystem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'SUBMIT_WEBSITE_LEAD',
          payload: {
            formId: currentMeta.formId,
            formName: currentMeta.formName,
            formType: currentMeta.formType,
            leadCategory: currentMeta.leadCategory,
            serviceSlug: context.service,
            optionName: formData.programme || context.option,
            pageLocation:
              typeof window !== 'undefined' ? window.location.href : undefined,
            fields: formData,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setValidationError(
          data.error || 'Unable to submit your enquiry right now. Please try again.'
        );
        return;
      }

      const leadId =
        typeof data.leadId === 'string' && data.leadId.trim()
          ? data.leadId
          : 'LEAD-CONFIRMED';
      // Fire primary GA4 Key Event `generate_lead` ONLY after verified backend acceptance
      trackLead({
        ...currentMeta,
        submissionMethod: 'website',
        submissionId: leadId,
      });
      setSubmittedLeadId(leadId);
    } catch {
      setValidationError(
        'Network error while submitting your enquiry. Please check your connection and try again.'
      );
    } finally {
      setSubmitting(false);
    }
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
            type="button"
            onClick={closeEnquiry}
            className="absolute top-6 right-6 p-2 rounded-full bg-chalk/10 hover:bg-gold hover:text-ink transition-colors text-chalk/70"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs uppercase tracking-widest font-mono text-gold font-bold">
              {context.kind.toUpperCase()}{' '}
              {activeServiceName ? `• ${activeServiceName}` : ''}
            </span>
          </div>

          <h2
            id="enquiry-modal-title"
            className="display text-3xl md:text-4xl uppercase text-white"
          >
            {currentCopy.title}
          </h2>

          {context.option && (
            <p className="mt-1 text-sm font-medium text-gold">
              Selected:{' '}
              <span className="underline decoration-gold/50">
                {context.option}
              </span>
            </p>
          )}

          <p className="mt-2 text-sm text-chalk/75 max-w-md font-sans">
            {currentCopy.intro}
          </p>
        </div>

        {/* Modal Body: Verified Confirmation or Form */}
        <div className="p-6 md:p-8 bg-chalk">
          {submittedLeadId ? (
            <div
              data-testid="enquiry-modal-success"
              className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-gold shadow-md text-center space-y-5"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 text-gold-deep flex items-center justify-center mx-auto">
                <CheckCircle2 size={30} />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                  Reference ID: {submittedLeadId}
                </span>
                <h3 className="display text-2xl sm:text-3xl uppercase text-ink">
                  Enquiry Successfully Received
                </h3>
                <p className="text-sm text-muted font-sans leading-relaxed max-w-md mx-auto">
                  Thank you! Your registration / enquiry has been logged with
                  the Aurium Sports Directorate. Our coordinator will contact
                  you shortly to confirm your slot and schedule.
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 space-y-3">
                <p className="text-xs text-muted font-sans">
                  Want an instant reply on WhatsApp as well? Tap below to send
                  your reference copy:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackWhatsAppClick('enquiry_modal_post_submit_followup')
                    }
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-full shadow-sm transition-all"
                  >
                    <MessageCircle size={16} />
                    Continue on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      resetFormStartSession(formMeta.formId);
                      setSubmittedLeadId(null);
                    }}
                    className="flex items-center justify-center gap-2 bg-ink hover:bg-gold hover:text-ink text-chalk font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-full transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form
              id={formMeta.formId}
              data-form-id={formMeta.formId}
              data-lead-category={formMeta.leadCategory}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              {validationError && (
                <div
                  role="alert"
                  data-testid="enquiry-modal-error"
                  className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-800 font-medium flex items-center gap-2"
                >
                  <AlertCircle size={16} className="shrink-0 text-red-600" />
                  <span>{validationError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map((field) => (
                  <div
                    key={field.name}
                    className={
                      field.half ? 'col-span-1' : 'col-span-1 md:col-span-2'
                    }
                  >
                    <div className="field">
                      <label htmlFor={`field-${field.name}`}>
                        {field.label}{' '}
                        {field.required && (
                          <span className="text-gold-deep">*</span>
                        )}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={`field-${field.name}`}
                          name={field.name}
                          rows={3}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={formData[field.name] || ''}
                          onChange={(e) =>
                            handleInputChange(field.name, e.target.value)
                          }
                        />
                      ) : field.type === 'select' ? (
                        <select
                          id={`field-${field.name}`}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name] || ''}
                          onChange={(e) =>
                            handleInputChange(field.name, e.target.value)
                          }
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
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          autoComplete={field.autoComplete}
                          value={formData[field.name] || ''}
                          onChange={(e) =>
                            handleInputChange(field.name, e.target.value)
                          }
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary Verified Form Submission Button */}
              <div className="pt-4 border-t border-ink/10 space-y-3">
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="enquiry-modal-submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-gold hover:bg-ink text-ink hover:text-gold font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all disabled:opacity-60"
                >
                  <Send size={16} />
                  <span>
                    {submitting
                      ? 'Submitting Registration...'
                      : context.kind === 'register'
                      ? 'Submit Player Registration'
                      : context.kind === 'apply'
                      ? 'Submit Coach Application'
                      : context.kind === 'partner'
                      ? 'Submit Partnership Enquiry'
                      : 'Submit Enquiry'}
                  </span>
                </button>

                {/* Secondary Direct Contact Channels (Tracked strictly as contact intent, never generate_lead) */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-muted">
                  <span>Or reach us directly via:</span>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackWhatsAppClick('enquiry_modal_direct_channel')
                      }
                      className="inline-flex items-center gap-1 font-bold text-[#128C7E] hover:underline"
                    >
                      <MessageCircle size={13} /> WhatsApp Chat
                    </a>
                    <span>•</span>
                    <a
                      href={emailLink}
                      onClick={() =>
                        trackEmailClick('enquiry_modal_direct_channel')
                      }
                      className="inline-flex items-center gap-1 font-bold text-ink hover:text-gold-deep hover:underline"
                    >
                      <Mail size={13} /> Direct Email
                    </a>
                    <span>•</span>
                    <a
                      href={`tel:${site.phones[0]}`}
                      onClick={() =>
                        trackPhoneClick('enquiry_modal_direct_channel')
                      }
                      className="font-bold text-ink hover:text-gold-deep hover:underline"
                    >
                      {site.phones[0]}
                    </a>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1 hover:text-ink transition-colors font-medium"
                    >
                      {copied ? (
                        <Check size={12} className="text-emerald-600" />
                      ) : (
                        <Copy size={12} />
                      )}
                      {copied ? 'Copied' : 'Copy text'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
