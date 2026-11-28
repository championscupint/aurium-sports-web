// ============================================================================
// AURIUM SPORTS — CENTRAL PRIVACY-SAFE GA4 & GOOGLE TAG MANAGER TRACKING LAYER
// ============================================================================
// - Primary Key Event: `generate_lead` (fires ONLY on verified server acceptance)
// - Full Funnel: `form_view` -> `form_start` -> `form_submit_attempt` -> `generate_lead`
// - Validation diagnostics: `form_validation_error` (non-PII field identifiers only)
// - Contact Intent: `whatsapp_click`, `phone_click`, `email_click` (separate from leads)
// - CTA & Content Engagement: `cta_click`, `file_download`, `faq_expand`, `filter_interaction`
// - Privacy Guarantee: Zero PII (names, emails, phones, messages) ever sent to GA4/GTM.
// ============================================================================

import type { EnquiryContext } from './enquiry';

export type GtagEventParams = Record<string, string | number | boolean | undefined>;

export type LeadCategory =
  | 'academy'
  | 'trial_registration'
  | 'player_registration'
  | 'girls_football'
  | 'goalkeeper'
  | 'school_partnership'
  | 'tournament'
  | 'international_tour'
  | 'camp'
  | 'sponsorship'
  | 'partnership'
  | 'investment'
  | 'venue'
  | 'general';

export type FormIdentifier =
  | 'academy_trial_form'
  | 'academy_admission_form'
  | 'girls_football_enquiry_form'
  | 'goalkeeper_enquiry_form'
  | 'school_partnership_form'
  | 'tournament_registration_form'
  | 'international_tour_enquiry_form'
  | 'camp_registration_form'
  | 'mental_health_workshop_form'
  | 'sponsorship_enquiry_form'
  | 'arena_investment_form'
  | 'aic_titans_registration_form'
  | 'aic_titans_sponsorship_form'
  | 'trainer_application_form'
  | 'general_contact_form';

export interface FormMeta {
  formId: FormIdentifier;
  formName: string;
  formType: string;
  leadCategory: LeadCategory;
}

export interface LeadEventInput extends FormMeta {
  submissionMethod?: 'website' | 'api';
  submissionId?: string;
}

export interface FormLifecycleInput extends FormMeta {
  formStep?: number | string;
  errorField?: string;
  errorType?: string;
}

export interface CtaClickInput {
  ctaText: string;
  ctaType: string;
  ctaLocation: string;
  destinationUrl?: string;
}

export interface ContactClickInput {
  contactType: 'whatsapp' | 'phone' | 'email';
  ctaLocation: string;
  destinationType?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    google_tag_manager?: Record<string, unknown>;
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetOrEventName: string | Date,
      params?: GtagEventParams
    ) => void;
  }
}

// ----------------------------------------------------------------------------
// 1. STRICT PII SANITIZER & ATTRIBUTION PRESERVATION
// ----------------------------------------------------------------------------

const FORBIDDEN_PII_KEY_REGEX =
  /^(name|full_?name|first_?name|last_?name|player|player_?name|guardian|parent|contact_?name|hr_?name|manager_?name|coach_?name|email|official_?email|phone|mobile|telephone|whatsapp|message|notes|address|dob|birth|medical|roster|body|text)$/i;

const EMAIL_VALUE_REGEX = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const PHONE_VALUE_REGEX = /(?:\+?977[-\s]?)?(?:9[78]\d{8}|01[-\s]?\d{6,7})/g;

export function sanitizeAnalyticsParams(params?: GtagEventParams): GtagEventParams {
  if (!params) return {};
  const clean: GtagEventParams = {};

  for (const [key, rawValue] of Object.entries(params)) {
    if (rawValue === undefined || rawValue === null) continue;
    if (FORBIDDEN_PII_KEY_REGEX.test(key)) continue;

    if (typeof rawValue === 'string') {
      const scrubbed = rawValue
        .replace(EMAIL_VALUE_REGEX, '[REDACTED]')
        .replace(PHONE_VALUE_REGEX, '[REDACTED]')
        .slice(0, 180);
      clean[key] = scrubbed;
    } else {
      clean[key] = rawValue;
    }
  }

  return clean;
}

const ATTRIBUTION_STORAGE_KEY = 'aurium_utm_attribution_v1';

export function captureCampaignAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const url = new URL(window.location.href);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    const found: Record<string, string> = {};

    for (const k of utmKeys) {
      const val = url.searchParams.get(k);
      if (val) found[k] = val.slice(0, 100);
    }

    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(found));
      return found;
    }

    const stored = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function getPageContext(): { page_location?: string; page_title?: string; page_path?: string } {
  if (typeof window === 'undefined') return {};
  return {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: typeof document !== 'undefined' ? document.title : undefined,
  };
}

// ----------------------------------------------------------------------------
// 2. SINGLE AUTHORITATIVE EVENT DISPATCHER (NO DUPLICATE GTM / GA4 HITS)
// ----------------------------------------------------------------------------

export function trackEvent(eventName: string, params?: GtagEventParams) {
  if (typeof window === 'undefined') return;

  try {
    const utms = captureCampaignAttribution();
    const sanitized = sanitizeAnalyticsParams({
      ...getPageContext(),
      ...utms,
      ...params,
    });

    // 1. Push structured event object to GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...sanitized,
    });

    // 2. Dispatch to direct GA4 gtag ONLY if GTM has not already injected a duplicate GA4 tag
    // (Prevents double-counting while guaranteeing GA4 delivery when GTM container has 0 tags published)
    const gtmManagedGa =
      typeof window.google_tag_manager === 'object' &&
      window.google_tag_manager !== null &&
      Boolean((window.google_tag_manager as Record<string, unknown>)['__gtm_ga4_managed']);

    if (!gtmManagedGa && typeof window.gtag === 'function') {
      window.gtag('event', eventName, sanitized);
    }
  } catch {
    // Graceful no-op: analytics errors must never block form submissions or UI navigation
  }
}

// ----------------------------------------------------------------------------
// 3. DEDUPLICATED PRIMARY CONVERSION: `generate_lead`
// ----------------------------------------------------------------------------

const FIRED_LEADS_MEMORY = new Set<string>();
const FIRED_LEADS_STORAGE_KEY = 'aurium_fired_leads_v1';
const LAST_LEAD_TIMESTAMP_BY_FORM = new Map<string, number>();

function hasLeadAlreadyFired(dedupeKey: string, formId: string): boolean {
  if (FIRED_LEADS_MEMORY.has(dedupeKey)) return true;

  const now = Date.now();
  const lastAt = LAST_LEAD_TIMESTAMP_BY_FORM.get(formId) || 0;
  if (now - lastAt < 2500) {
    // Guard against rapid double-click / double callback within 2.5s on the same form
    return true;
  }

  if (typeof window !== 'undefined') {
    try {
      const raw = sessionStorage.getItem(FIRED_LEADS_STORAGE_KEY);
      const list: string[] = raw ? JSON.parse(raw) : [];
      if (list.includes(dedupeKey)) return true;
    } catch {
      // ignore storage errors
    }
  }

  return false;
}

function recordFiredLead(dedupeKey: string, formId: string) {
  FIRED_LEADS_MEMORY.add(dedupeKey);
  LAST_LEAD_TIMESTAMP_BY_FORM.set(formId, Date.now());

  if (typeof window !== 'undefined') {
    try {
      const raw = sessionStorage.getItem(FIRED_LEADS_STORAGE_KEY);
      const list: string[] = raw ? JSON.parse(raw) : [];
      if (!list.includes(dedupeKey)) {
        list.push(dedupeKey);
        sessionStorage.setItem(FIRED_LEADS_STORAGE_KEY, JSON.stringify(list.slice(-50)));
      }
    } catch {
      // ignore storage errors
    }
  }
}

/**
 * Primary GA4 Key Event: `generate_lead`
 * MUST ONLY be called after a form has passed validation and received verified backend acceptance.
 */
export function trackLead(input: LeadEventInput): boolean {
  const dedupeKey = input.submissionId
    ? `${input.formId}:${input.submissionId}`
    : `${input.formId}:${Date.now()}`;

  if (hasLeadAlreadyFired(dedupeKey, input.formId)) {
    return false;
  }

  recordFiredLead(dedupeKey, input.formId);

  trackEvent('generate_lead', {
    form_id: input.formId,
    form_name: input.formName,
    form_type: input.formType,
    lead_category: input.leadCategory,
    submission_method: input.submissionMethod || 'website',
  });

  return true;
}

// ----------------------------------------------------------------------------
// 4. FORM FUNNEL LIFECYCLE EVENTS (`form_view`, `form_start`, `form_submit_attempt`, `form_validation_error`)
// ----------------------------------------------------------------------------

const VIEWED_FORMS_SESSION = new Set<string>();
const STARTED_FORMS_SESSION = new Set<string>();

export function trackFormView(input: FormLifecycleInput) {
  const key = `${input.formId}:${typeof window !== 'undefined' ? window.location.pathname : ''}`;
  if (VIEWED_FORMS_SESSION.has(key)) return;
  VIEWED_FORMS_SESSION.add(key);

  trackEvent('form_view', {
    form_id: input.formId,
    form_name: input.formName,
    form_type: input.formType,
    lead_category: input.leadCategory,
  });
}

export function trackFormStart(input: FormLifecycleInput) {
  const key = `${input.formId}:${typeof window !== 'undefined' ? window.location.pathname : ''}`;
  if (STARTED_FORMS_SESSION.has(key)) return;
  STARTED_FORMS_SESSION.add(key);

  trackEvent('form_start', {
    form_id: input.formId,
    form_name: input.formName,
    form_type: input.formType,
    lead_category: input.leadCategory,
  });
}

export function resetFormStartSession(formId: FormIdentifier) {
  const key = `${formId}:${typeof window !== 'undefined' ? window.location.pathname : ''}`;
  STARTED_FORMS_SESSION.delete(key);
}

export function trackFormStepComplete(input: FormLifecycleInput & { formStep: number | string }) {
  trackEvent('form_step_complete', {
    form_id: input.formId,
    form_name: input.formName,
    form_type: input.formType,
    lead_category: input.leadCategory,
    form_step: input.formStep,
  });
}

export function trackFormSubmitAttempt(input: FormLifecycleInput) {
  trackEvent('form_submit_attempt', {
    form_id: input.formId,
    form_name: input.formName,
    form_type: input.formType,
    lead_category: input.leadCategory,
  });
}

export function trackFormValidationError(
  input: FormLifecycleInput & { errorField: string; errorType?: string }
) {
  trackEvent('form_validation_error', {
    form_id: input.formId,
    form_name: input.formName,
    form_type: input.formType,
    lead_category: input.leadCategory,
    error_field: input.errorField,
    error_type: input.errorType || 'required_or_invalid',
  });
}

// ----------------------------------------------------------------------------
// 5. DYNAMIC FORM METADATA RESOLVER FOR CONTEXTUAL MODAL & INLINE FORMS
// ----------------------------------------------------------------------------

export function resolveEnquiryFormMeta(
  context: EnquiryContext,
  selectedProgramme?: string
): FormMeta {
  const svc = (context.service || '').toLowerCase();
  const opt = `${context.option || ''} ${selectedProgramme || ''}`.toLowerCase();

  if (svc === 'international' || /dana cup|norway cup|yangshuo|gothia|international/.test(opt)) {
    return {
      formId: 'international_tour_enquiry_form',
      formName: 'International Tournament Trial Registration',
      formType: 'international_tour_enquiry',
      leadCategory: 'international_tour',
    };
  }

  if (/girls/.test(opt) || svc.includes('girls')) {
    return {
      formId: 'girls_football_enquiry_form',
      formName: 'Girls Football Development Registration',
      formType: 'player_registration',
      leadCategory: 'girls_football',
    };
  }

  if (/goalkeeper|gk/.test(opt) || svc.includes('goalkeeper')) {
    return {
      formId: 'goalkeeper_enquiry_form',
      formName: 'Goalkeeper Academy Registration',
      formType: 'player_registration',
      leadCategory: 'goalkeeper',
    };
  }

  if (svc === 'training-camps' || /camp/.test(opt)) {
    return {
      formId: 'camp_registration_form',
      formName: 'Holiday Training Camp Registration',
      formType: 'camp_registration',
      leadCategory: 'camp',
    };
  }

  if (svc === 'tournaments-leagues' || /league|tournament|cup/.test(opt)) {
    return {
      formId: 'tournament_registration_form',
      formName: 'Tournament & League Team Registration',
      formType: 'tournament_registration',
      leadCategory: 'tournament',
    };
  }

  if (svc === 'school-programs' || /school|sportsed|safeguarding/.test(opt)) {
    return {
      formId: 'school_partnership_form',
      formName: 'School SportsEd Partnership Enquiry',
      formType: 'school_partnership',
      leadCategory: 'school_partnership',
    };
  }

  if (svc.includes('mental-health') || /mental|wellbeing|clinic|forum/.test(opt)) {
    return {
      formId: 'mental_health_workshop_form',
      formName: 'Sports for Mental Health Workshop Enquiry',
      formType: 'workshop_enquiry',
      leadCategory: 'academy',
    };
  }

  if (/free.*trial|1-session|trial request/.test(opt)) {
    return {
      formId: 'academy_trial_form',
      formName: 'Academy Free Trial Registration',
      formType: 'trial_registration',
      leadCategory: 'trial_registration',
    };
  }

  if (context.kind === 'apply' || svc === 'become-a-trainer') {
    return {
      formId: 'trainer_application_form',
      formName: 'Coach & Trainer Application Form',
      formType: 'trainer_application',
      leadCategory: 'general',
    };
  }

  if (context.kind === 'partner') {
    return {
      formId: 'sponsorship_enquiry_form',
      formName: 'Strategic Partnership & Sponsorship Enquiry',
      formType: 'partnership_enquiry',
      leadCategory: 'partnership',
    };
  }

  if (context.kind === 'register' || svc === 'academy') {
    return {
      formId: 'academy_admission_form',
      formName: 'Academy Player Admission Registration',
      formType: 'player_registration',
      leadCategory: 'academy',
    };
  }

  return {
    formId: 'general_contact_form',
    formName: 'General Website Enquiry',
    formType: 'general_enquiry',
    leadCategory: 'general',
  };
}

// ----------------------------------------------------------------------------
// 6. CTA, CONTACT INTENT, FILE DOWNLOAD & ENGAGEMENT HELPERS
// ----------------------------------------------------------------------------

export function trackCtaClick(input: CtaClickInput) {
  trackEvent('cta_click', {
    cta_text: input.ctaText,
    cta_type: input.ctaType,
    cta_location: input.ctaLocation,
    destination_url: input.destinationUrl,
  });
}

export function trackWhatsAppClick(ctaLocation?: string) {
  trackEvent('whatsapp_click', {
    contact_type: 'whatsapp',
    cta_location: ctaLocation || 'website',
    destination_type: 'external_whatsapp',
  });
}

export function trackPhoneClick(ctaLocation?: string) {
  trackEvent('phone_click', {
    contact_type: 'phone',
    cta_location: ctaLocation || 'website',
    destination_type: 'telephone_dialer',
  });
}

export function trackEmailClick(ctaLocation?: string) {
  trackEvent('email_click', {
    contact_type: 'email',
    cta_location: ctaLocation || 'website',
    destination_type: 'email_client',
  });
}

export function trackContactClick(
  methodOrInput: 'phone' | 'email' | 'form' | 'whatsapp' | ContactClickInput,
  ctaLocation?: string
) {
  if (typeof methodOrInput === 'object') {
    if (methodOrInput.contactType === 'whatsapp') {
      trackWhatsAppClick(methodOrInput.ctaLocation);
    } else if (methodOrInput.contactType === 'phone') {
      trackPhoneClick(methodOrInput.ctaLocation);
    } else {
      trackEmailClick(methodOrInput.ctaLocation);
    }
    return;
  }

  if (methodOrInput === 'whatsapp') {
    trackWhatsAppClick(ctaLocation);
  } else if (methodOrInput === 'phone') {
    trackPhoneClick(ctaLocation);
  } else if (methodOrInput === 'email') {
    trackEmailClick(ctaLocation);
  } else {
    trackCtaClick({
      ctaText: 'Contact Form Interaction',
      ctaType: 'contact_form_cta',
      ctaLocation: ctaLocation || 'contact_page',
    });
  }
}

export function trackEnrollmentClick(program?: string, ctaLocation?: string) {
  trackCtaClick({
    ctaText: program ? `Book a Spot (${program})` : 'Book a Spot',
    ctaType: 'academy_enrollment_cta',
    ctaLocation: ctaLocation || program || 'website',
    destinationUrl: '#enquiry-modal',
  });
}

export function trackPartnershipInquiry(partnerType?: string, ctaLocation?: string) {
  trackCtaClick({
    ctaText: partnerType || 'Partnership Enquiry',
    ctaType: 'partnership_cta',
    ctaLocation: ctaLocation || 'website',
    destinationUrl: '#enquiry-modal',
  });
}

export function trackTournamentRegistration(tournamentName?: string, ctaLocation?: string) {
  trackCtaClick({
    ctaText: tournamentName || 'Tournament Registration',
    ctaType: 'tournament_registration_cta',
    ctaLocation: ctaLocation || 'tournaments_page',
  });
}

export function trackFileDownload(input: {
  fileName: string;
  fileExtension?: string;
  linkUrl: string;
  ctaLocation?: string;
}) {
  const ext =
    input.fileExtension ||
    (input.fileName.includes('.') ? input.fileName.split('.').pop() : 'pdf') ||
    'pdf';
  trackEvent('file_download', {
    file_name: input.fileName,
    file_extension: ext,
    link_url: input.linkUrl,
    cta_location: input.ctaLocation || 'website',
  });
}

export function trackTitansDownload(documentName: string, placement: string) {
  trackFileDownload({
    fileName: documentName,
    fileExtension: 'pdf',
    linkUrl: documentName,
    ctaLocation: placement,
  });
}

export function trackFaqExpand(faqCategory: string, questionIndex?: number) {
  trackEvent('faq_expand', {
    faq_category: faqCategory,
    question_index: questionIndex,
  });
}

export function trackFilterInteraction(
  filterType: string,
  filterValue: string,
  componentName?: string
) {
  trackEvent('filter_interaction', {
    filter_type: filterType,
    filter_value: filterValue,
    component_name: componentName || 'directory_filter',
  });
}

export function trackSocialClick(
  platform: 'instagram' | 'tiktok' | 'facebook',
  placement: string
) {
  trackEvent('social_click', {
    event_category: 'social_engagement',
    social_platform: platform,
    placement,
  });
}

export function trackScheduleView() {
  trackEvent('training_schedule_view', {
    event_category: 'engagement',
  });
}

export function trackLocationPageView(locationSlug: string) {
  trackEvent('location_page_view', {
    event_category: 'local_seo_engagement',
    location_slug: locationSlug,
  });
}

export function trackArenaInvestorEnquiry(
  investorType: string,
  investmentInterest: string,
  submissionId?: string
) {
  trackLead({
    formId: 'arena_investment_form',
    formName: 'Aurium Arena Investment Enquiry',
    formType: 'investment_enquiry',
    leadCategory: 'investment',
    submissionMethod: 'website',
    submissionId,
  });
}

export function trackTitansRegistration(
  competitionSlug: string,
  divisionsCount: number,
  submissionId?: string
) {
  trackLead({
    formId: 'aic_titans_registration_form',
    formName: `AIC Titans Cup Institutional Registration (${competitionSlug.toUpperCase()})`,
    formType: 'tournament_registration',
    leadCategory: 'tournament',
    submissionMethod: 'website',
    submissionId,
  });
  trackEvent('registration_complete', {
    form_id: 'aic_titans_registration_form',
    competition_slug: competitionSlug,
    divisions_count: divisionsCount,
  });
}

export function trackTitansSponsorEnquiry(
  level: string,
  competition: string,
  submissionId?: string
) {
  trackLead({
    formId: 'aic_titans_sponsorship_form',
    formName: 'AIC Titans Cup Sponsorship & CSR Enquiry',
    formType: 'sponsorship_enquiry',
    leadCategory: 'sponsorship',
    submissionMethod: 'website',
    submissionId,
  });
}

export function trackTitansBfiFilter(filterType: string, filterValue: string) {
  trackFilterInteraction(filterType, filterValue, 'aic_titans_105_bfi_census');
}
