'use client';

import React, { useState, useEffect, useRef } from 'react';
import { buildMessage, whatsappUrl, mailtoUrl } from '@/lib/enquiry';
import {
  FormMeta,
  trackEvent,
  trackFormView,
  trackFormStart,
  trackFormSubmitAttempt,
  trackFormValidationError,
  trackLead,
  trackWhatsAppClick,
  trackEmailClick,
  resetFormStartSession,
} from '@/lib/analytics';
import {
  Award,
  HeartHandshake,
  CheckCircle2,
  MessageCircle,
  Mail,
  Send,
  AlertCircle,
} from 'lucide-react';

const TRAINER_FORM_META: FormMeta = {
  formId: 'trainer_application_form',
  formName: 'Coach & Trainer Application Form',
  formType: 'trainer_application',
  leadCategory: 'general',
};

export function BecomeTrainerClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sport: 'Football',
    experience: '1–3 years',
    licence: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedAppId, setSubmittedAppId] = useState<string | null>(null);

  useEffect(() => {
    const el = formRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackFormView(TRAINER_FORM_META);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    trackFormStart(TRAINER_FORM_META);
    if (error) setError(null);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const context = { kind: 'apply' as const };
  const formattedMsg = buildMessage(context, formData);
  const waLink = whatsappUrl(formattedMsg);
  const mlLink = mailtoUrl(context, formattedMsg);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || submittedAppId) return;

    trackFormSubmitAttempt(TRAINER_FORM_META);
    setError(null);

    if (!formData.name.trim()) {
      setError('Please enter your full name.');
      trackFormValidationError({
        ...TRAINER_FORM_META,
        errorField: 'name',
        errorType: 'missing_required_field',
      });
      return;
    }

    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 7) {
      setError('Please enter a valid phone or WhatsApp number.');
      trackFormValidationError({
        ...TRAINER_FORM_META,
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
        ...TRAINER_FORM_META,
        errorField: 'email',
        errorType: 'invalid_email_format',
      });
      return;
    }

    if (!formData.message.trim()) {
      setError('Please share a brief note on your coaching background or philosophy.');
      trackFormValidationError({
        ...TRAINER_FORM_META,
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
            formId: TRAINER_FORM_META.formId,
            formName: TRAINER_FORM_META.formName,
            formType: TRAINER_FORM_META.formType,
            leadCategory: TRAINER_FORM_META.leadCategory,
            serviceSlug: 'become-a-trainer',
            optionName: formData.sport,
            pageLocation:
              typeof window !== 'undefined' ? window.location.href : undefined,
            fields: formData,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(
          data.error || 'Unable to submit your application. Please try again.'
        );
        return;
      }

      const leadId = data.leadId || `APP-${Date.now().toString().slice(-6)}`;
      trackLead({
        ...TRAINER_FORM_META,
        submissionMethod: 'website',
        submissionId: leadId,
      });
      trackEvent('application_complete', {
        form_id: TRAINER_FORM_META.formId,
        sport_category: formData.sport,
      });
      setSubmittedAppId(leadId);
    } catch {
      setError('Network error while submitting your application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Coaching Careers</span>
          <h1 className="display text-5xl sm:text-7xl uppercase text-white mt-2">
            Become An Aurium Coach.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Coaching is an honorable profession. We offer certified mentors competitive pay, continuous education, European curriculum exposure, and career progression across schools and academy leagues.
          </p>
        </div>
      </section>

      {/* Main Form and Benefits Split */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: What We Offer */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="eyebrow text-gold-deep">Professional Pathway</span>
                <h2 className="display text-3xl sm:text-4xl uppercase text-ink mt-2">
                  Why Coach With Aurium?
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-ink text-sm">
                    <Award className="text-gold-deep" size={18} />
                    <span>Continuous Coach Education</span>
                  </div>
                  <p className="text-sm text-muted font-sans leading-relaxed">
                    Gain access to international coaching curricula (FIFA, NSCCA, and ICSSPE modules) and mentorship under Sports Director &amp; Owner Diwas Agasti.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-ink text-sm">
                    <HeartHandshake className="text-gold-deep" size={18} />
                    <span>Sports for Mental Health Training</span>
                  </div>
                  <p className="text-sm text-muted font-sans leading-relaxed">
                    Learn how to mentor young players through emotional setbacks, manage game pressure, and become a supportive sports psychologist on the pitch.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-ink text-sm">
                    <CheckCircle2 className="text-gold-deep" size={18} />
                    <span>Reliable Income &amp; Career Security</span>
                  </div>
                  <p className="text-sm text-muted font-sans leading-relaxed">
                    Structured multi-term contracts with partner schools, private academies, holiday camps, and tournament bonuses.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-ink/10 shadow-lg space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-deep font-bold">
                    Direct Application
                  </span>
                  <h3 className="display text-2xl uppercase text-ink mt-1">
                    Submit Your Coaching Credentials
                  </h3>
                  <p className="text-sm text-muted font-sans mt-1">
                    Fill out the form below to apply directly to our Technical Directorate.
                  </p>
                </div>

                {submittedAppId ? (
                  <div
                    data-testid="trainer-form-success"
                    className="p-8 rounded-3xl bg-chalk border-2 border-gold text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/20 text-gold-deep flex items-center justify-center mx-auto">
                      <CheckCircle2 size={30} />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-gold-deep font-bold block">
                      Application ID: {submittedAppId}
                    </span>
                    <h4 className="display text-2xl uppercase text-ink">
                      Coaching Application Received
                    </h4>
                    <p className="text-sm text-muted font-sans max-w-md mx-auto leading-relaxed">
                      Thank you for applying to join the Aurium Sports coaching roster. Our Technical Directorate will review your profile and reach out regarding interview and pitch-session evaluation dates.
                    </p>
                    <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackWhatsAppClick('trainer_form_post_submit_followup')
                        }
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors"
                      >
                        <MessageCircle size={16} /> Share CV via WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          resetFormStartSession(TRAINER_FORM_META.formId);
                          setSubmittedAppId(null);
                        }}
                        className="inline-flex items-center gap-2 bg-ink text-chalk hover:bg-gold hover:text-ink font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    id="trainer_application_form"
                    data-form-id="trainer_application_form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4 text-xs font-sans"
                  >
                    {error && (
                      <div
                        role="alert"
                        data-testid="trainer-form-error"
                        className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-800 font-medium flex items-center gap-2"
                      >
                        <AlertCircle size={16} className="shrink-0 text-red-600" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="trainer-name"
                        className="block text-muted font-semibold mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        id="trainer-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Roshan Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="trainer-phone"
                          className="block text-muted font-semibold mb-1"
                        >
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          id="trainer-phone"
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
                          htmlFor="trainer-email"
                          className="block text-muted font-semibold mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          id="trainer-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="yourname@gmail.com"
                          className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="trainer-sport"
                          className="block text-muted font-semibold mb-1"
                        >
                          Primary Sport
                        </label>
                        <select
                          id="trainer-sport"
                          name="sport"
                          value={formData.sport}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                        >
                          <option value="Football">Football</option>
                          <option value="Basketball">Basketball</option>
                          <option value="Cricket">Cricket</option>
                          <option value="Goalkeeper Specialist">Goalkeeper Specialist</option>
                          <option value="Physical Conditioning / Fitness">
                            Physical Conditioning / Fitness
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="trainer-experience"
                          className="block text-muted font-semibold mb-1"
                        >
                          Coaching Experience
                        </label>
                        <select
                          id="trainer-experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                        >
                          <option value="Less than 1 year (Aspiring)">
                            Less than 1 year (Aspiring)
                          </option>
                          <option value="1–3 years">1–3 years</option>
                          <option value="3–5 years">3–5 years</option>
                          <option value="5+ years (Senior)">5+ years (Senior)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="trainer-licence"
                        className="block text-muted font-semibold mb-1"
                      >
                        Certifications / Licenses (if any)
                      </label>
                      <input
                        id="trainer-licence"
                        type="text"
                        name="licence"
                        value={formData.licence}
                        onChange={handleInputChange}
                        placeholder="e.g. ANFA 'D' / 'C', AFC License, Sports Science Degree"
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="trainer-message"
                        className="block text-muted font-semibold mb-1"
                      >
                        Coaching Philosophy / Brief Bio *
                      </label>
                      <textarea
                        id="trainer-message"
                        name="message"
                        rows={3}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your background, age groups coached, and what drives you to mentor young athletes..."
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      />
                    </div>

                    {/* Primary Submit Button + Direct Channels */}
                    <div className="pt-4 border-t border-ink/10 space-y-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        data-testid="trainer-form-submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-ink text-ink hover:text-gold font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full transition-colors shadow-md disabled:opacity-60"
                      >
                        <Send size={16} />
                        <span>
                          {submitting
                            ? 'Submitting Application...'
                            : 'Submit Coach Application'}
                        </span>
                      </button>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-muted">
                        <span>Or send credentials directly via:</span>
                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackWhatsAppClick('trainer_form_direct_channel')
                            }
                            className="inline-flex items-center gap-1 font-bold text-[#128C7E] hover:underline"
                          >
                            <MessageCircle size={13} /> WhatsApp
                          </a>
                          <span>•</span>
                          <a
                            href={mlLink}
                            onClick={() =>
                              trackEmailClick('trainer_form_direct_channel')
                            }
                            className="inline-flex items-center gap-1 font-bold text-ink hover:text-gold-deep hover:underline"
                          >
                            <Mail size={13} /> Email Client
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
