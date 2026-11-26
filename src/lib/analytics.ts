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

export function trackTitansDownload(documentName: string, placement: string) {
  trackEvent('aic_titans_pdf_download', {
    event_category: 'aic_titans_cup',
    document_name: documentName,
    placement,
  });
}

export function trackArenaInvestorEnquiry(
  investorType: string,
  investmentInterest: string
) {
  trackEvent('aurium_arena_investor_enquiry', {
    event_category: 'investment_conversion',
    investor_type: investorType,
    investment_interest: investmentInterest,
  });
}

export function trackTitansRegistration(competitionSlug: string, divisionsCount: number) {
  trackEvent('aic_titans_registration_submit', {
    event_category: 'conversion',
    competition_slug: competitionSlug,
    divisions_count: divisionsCount,
  });
}

export function trackTitansSponsorEnquiry(level: string, competition: string) {
  trackEvent('aic_titans_sponsor_enquiry_submit', {
    event_category: 'conversion',
    partnership_level: level,
    target_competition: competition,
  });
}

export function trackTitansBfiFilter(filterType: string, filterValue: string) {
  trackEvent('aic_titans_bfi_filter', {
    event_category: 'engagement',
    filter_type: filterType,
    filter_value: filterValue,
  });
}


