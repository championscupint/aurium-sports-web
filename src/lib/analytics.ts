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

export function trackClubPageVisit() {
  trackEvent('football_club_page_visit', {
    event_category: 'football_club',
    organization_entity: 'Aurium Football Club',
  });
}

export function trackPlayerInterestSubmission(method: 'whatsapp' | 'email') {
  trackEvent('player_interest_submission', {
    event_category: 'football_club_conversion',
    submission_method: method,
  });
}

export function trackClubPartnershipEnquiry(
  category?: string,
  method?: 'whatsapp' | 'email'
) {
  trackEvent('club_partnership_enquiry', {
    event_category: 'football_club_conversion',
    partnership_category: category || 'general_club_partnership',
    submission_method: method || 'modal_open',
  });
}

export function trackClubNewsEngagement(category: string) {
  trackEvent('club_news_engagement', {
    event_category: 'football_club_engagement',
    news_category: category,
  });
}

export function trackEcosystemCrossClick(
  direction: 'sports_to_club' | 'club_to_sports',
  placement: string
) {
  trackEvent('ecosystem_cross_navigation', {
    event_category: 'ecosystem_pathway',
    direction,
    placement,
  });
}



