'use client';

import React, { useState, useEffect, useRef } from 'react';
import { site } from '@/data/site';
import { buildMessage, whatsappUrl, mailtoUrl } from '@/lib/enquiry';
import {
  FormMeta,
  trackFormView,
  trackFormStart,
  trackFormSubmitAttempt,
  trackFormValidationError,
  trackLead,
  trackWhatsAppClick,
  trackPhoneClick,
  trackEmailClick,
  trackSocialClick,
  resetFormStartSession,
} from '@/lib/analytics';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Share2,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const CONTACT_FORM_META: FormMeta = {
  formId: 'general_contact_form',
  formName: 'General Contact Form',
  formType: 'general_enquiry',
  leadCategory: 'general',
};

export function ContactClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);

  useEffect(() => {
    const el = formRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackFormView(CONTACT_FORM_META);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    trackFormStart(CONTACT_FORM_META);
    if (error) setError(null);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const context = { kind: 'inquiry' as const };
  const formattedMsg = buildMessage(context, formData);
  const waLink = whatsappUrl(formattedMsg);
  const emailLink = mailtoUrl(context, formattedMsg);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || submittedLeadId) return;

    trackFormSubmitAttempt(CONTACT_FORM_META);
    setError(null);

    if (!formData.name.trim()) {
      setError('Please enter your full name.');
      trackFormValidationError({
        ...CONTACT_FORM_META,
        errorField: 'name',
        errorType: 'missing_required_field',
      });
      return;
    }

    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 7) {
      setError('Please enter a valid phone or WhatsApp number.');
      trackFormValidationError({
        ...CONTACT_FORM_META,
        errorField: 'phone',
        errorType: 'invalid_phone_format',
      });
      return;
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      setError('Please enter a valid email address.');
      trackFormValidationError({
        ...CONTACT_FORM_META,
        errorField: 'email',
        errorType: 'invalid_email_format',
      });
      return;
    }

    if (!formData.message.trim()) {
      setError('Please enter your inquiry or message details.');
      trackFormValidationError({
        ...CONTACT_FORM_META,
        errorField: 'message',
        errorType: 'missing_required_field',
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/ecosystem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'SUBMIT_WEBSITE_LEAD',
          payload: {
            formId: CONTACT_FORM_META.formId,
            formName: CONTACT_FORM_META.formName,
            formType: CONTACT_FORM_META.formType,
            leadCategory: CONTACT_FORM_META.leadCategory,
            pageLocation:
              typeof window !== 'undefined' ? window.location.href : undefined,
            fields: formData,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || 'Unable to submit your message. Please try again.');
        return;
      }

      const leadId = data.leadId || `LEAD-${Date.now().toString().slice(-6)}`;
      trackLead({
        ...CONTACT_FORM_META,
        submissionMethod: 'website',
        submissionId: leadId,
      });
      setSubmittedLeadId(leadId);
    } catch {
      setError('Network error while submitting your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Get In Touch</span>
          <h1 className="display text-5xl sm:text-7xl uppercase text-white mt-2">
            Contact Aurium Sports.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Whether you are a parent seeking academy enrollment, a school principal exploring sports curricula, or a prospective tournament team, our coordinators are ready to help.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Address */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="eyebrow text-gold-deep">Kathmandu Headquarters</span>
                <h2 className="display text-3xl sm:text-4xl uppercase text-ink mt-2">
                  Our Central Office
                </h2>
                <p className="text-sm text-muted font-sans mt-2 leading-relaxed">
                  Visits by prior appointment for parent orientations, partner meetings, and tournament coordination.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-chalk flex items-center justify-center shrink-0">
                    <MapPin className="text-gold-deep" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-ink mb-1">Physical Address</h4>
                    <p className="text-xs text-muted font-sans leading-relaxed">
                      {site.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(site.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[11px] font-bold text-gold-deep hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-chalk flex items-center justify-center shrink-0">
                    <Phone className="text-gold-deep" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-ink mb-1">Phone &amp; WhatsApp</h4>
                    <div className="space-y-1 text-xs text-muted font-sans">
                      <div>
                        Direct Line:{' '}
                        <a
                          href={`tel:${site.phones[0]}`}
                          onClick={() => trackPhoneClick('contact_page_info_card')}
                          className="text-ink font-bold hover:text-gold-deep hover:underline"
                        >
                          {site.phones[0]}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${site.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contact_page_direct')}
                      className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-bold text-[#25D366] hover:underline"
                    >
                      <MessageCircle size={14} /> Instant WhatsApp Chat
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-chalk flex items-center justify-center shrink-0">
                    <Mail className="text-gold-deep" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-ink mb-1">Official Email</h4>
                    <div className="space-y-1 text-xs text-muted font-sans">
                      <div>
                        <a
                          href={`mailto:${site.email}`}
                          onClick={() => trackEmailClick('contact_page_info_card')}
                          className="text-ink font-bold hover:text-gold-deep hover:underline"
                        >
                          {site.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-ink text-chalk rounded-2xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Share2 className="text-gold" size={20} />
                  </div>
                  <div className="space-y-2 w-full">
                    <h4 className="font-bold text-sm text-white">
                      Follow Us on Socials ({site.socialHandle})
                    </h4>
                    <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                      Watch daily training reels, goalkeeper clinics, and matchday updates across our official channels:
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackSocialClick('instagram', 'contact_page')}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-gold hover:text-ink text-xs font-bold text-gold transition-colors"
                      >
                        Instagram <ArrowUpRight size={12} />
                      </a>
                      <a
                        href={site.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackSocialClick('tiktok', 'contact_page')}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-gold hover:text-ink text-xs font-bold text-gold transition-colors"
                      >
                        TikTok <ArrowUpRight size={12} />
                      </a>
                      <a
                        href={site.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackSocialClick('facebook', 'contact_page')}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-gold hover:text-ink text-xs font-bold text-gold transition-colors"
                      >
                        Facebook <ArrowUpRight size={12} />
                      </a>
                      <a
                        href={site.googleReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gold text-ink hover:bg-white text-xs font-bold transition-colors"
                      >
                        Review on Google <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Verified General Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-ink/10 shadow-lg space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-deep font-bold">
                    Official Enquiry Desk
                  </span>
                  <h3 className="display text-2xl uppercase text-ink mt-1">
                    Send A Message Directly
                  </h3>
                  <p className="text-sm text-muted font-sans mt-1">
                    Complete your details below to submit your enquiry to our coordinators, or reach out via WhatsApp or Email.
                  </p>
                </div>

                {submittedLeadId ? (
                  <div
                    data-testid="contact-form-success"
                    className="p-8 rounded-3xl bg-chalk border-2 border-gold text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/20 text-gold-deep flex items-center justify-center mx-auto">
                      <CheckCircle2 size={30} />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-gold-deep font-bold block">
                      Reference ID: {submittedLeadId}
                    </span>
                    <h4 className="display text-2xl uppercase text-ink">
                      Message Received by Aurium Sports
                    </h4>
                    <p className="text-sm text-muted font-sans max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Aurium Sports. Our coordinator has received your enquiry and will respond within one working day.
                    </p>
                    <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackWhatsAppClick('contact_form_post_submit_followup')
                        }
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors"
                      >
                        <MessageCircle size={16} /> Continue on WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          resetFormStartSession(CONTACT_FORM_META.formId);
                          setSubmittedLeadId(null);
                          setFormData({
                            name: '',
                            organisation: '',
                            phone: '',
                            email: '',
                            message: '',
                          });
                        }}
                        className="inline-flex items-center gap-2 bg-ink text-chalk hover:bg-gold hover:text-ink font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    id="general_contact_form"
                    data-form-id="general_contact_form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4 text-xs font-sans"
                  >
                    {error && (
                      <div
                        role="alert"
                        data-testid="contact-form-error"
                        className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-800 font-medium flex items-center gap-2"
                      >
                        <AlertCircle size={16} className="shrink-0 text-red-600" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-muted font-semibold mb-1"
                        >
                          Your Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Anil Shrestha"
                          className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-organisation"
                          className="block text-muted font-semibold mb-1"
                        >
                          Organisation / School (if applicable)
                        </label>
                        <input
                          id="contact-organisation"
                          type="text"
                          name="organisation"
                          value={formData.organisation}
                          onChange={handleInputChange}
                          placeholder="School or Club name"
                          className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-muted font-semibold mb-1"
                        >
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="98XXXXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-muted font-semibold mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="yourname@gmail.com"
                          className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-muted font-semibold mb-1"
                      >
                        Your Message / Inquiry Details *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please let us know how we can help you (e.g., player age, program interested in, school location)..."
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      />
                    </div>

                    {/* Primary Submit Button + Secondary Contact Channels */}
                    <div className="pt-4 border-t border-ink/10 space-y-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        data-testid="contact-form-submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-ink text-ink hover:text-gold font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full transition-colors shadow-md disabled:opacity-60"
                      >
                        <Send size={16} />
                        <span>
                          {submitting ? 'Sending Enquiry...' : 'Submit Enquiry'}
                        </span>
                      </button>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-muted">
                        <span>Prefer direct messaging?</span>
                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackWhatsAppClick('contact_form_direct_channel')
                            }
                            className="inline-flex items-center gap-1 font-bold text-[#128C7E] hover:underline"
                          >
                            <MessageCircle size={13} /> Open in WhatsApp
                          </a>
                          <span>•</span>
                          <a
                            href={emailLink}
                            onClick={() =>
                              trackEmailClick('contact_form_direct_channel')
                            }
                            className="inline-flex items-center gap-1 font-bold text-ink hover:text-gold-deep hover:underline"
                          >
                            <Mail size={13} /> Open in Email Client
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
