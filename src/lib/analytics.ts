// Privacy-safe Google Analytics 4 (GA4) event tracking helpers
// Never sends personal identifiable information (PII) such as names, emails, or phone numbers.

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetOrEventName: string | Date,
      params?: GtagEventParams
    ) => void;
  }
}

export function trackEvent(eventName: string, params?: GtagEventParams) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackEnrollmentClick(program?: string) {
  trackEvent('academy_enrollment_click', {
    event_category: 'engagement',
    program_type: program || 'general',
  });
}

export function trackContactClick(method: 'phone' | 'email' | 'form') {
  trackEvent('contact_click', {
    event_category: 'contact',
    contact_method: method,
  });
}

export function trackWhatsAppClick(context?: string) {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    interaction_context: context || 'site',
  });
}

export function trackPartnershipInquiry(partnerType?: string) {
  trackEvent('partnership_inquiry', {
    event_category: 'conversion',
    partner_type: partnerType || 'institutional',
  });
}

export function trackTournamentRegistration(tournamentName?: string) {
  trackEvent('tournament_registration_click', {
    event_category: 'conversion',
    tournament_name: tournamentName || 'general',
  });
}

export function trackFormSubmission(formType: string) {
  trackEvent('form_submission', {
    event_category: 'conversion',
    form_type: formType,
  });
}
