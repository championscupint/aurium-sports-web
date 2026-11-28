'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Compass,
  HelpCircle,
  Layers,
  MapPin,
  MessageCircle,
  Mail,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  User,
  Utensils,
  Users,
  Video,
} from 'lucide-react';
import { auriumArenaData } from '@/data/aurium-arena';
import {
  FormMeta,
  trackArenaInvestorEnquiry,
  trackFormView,
  trackFormStart,
  trackFormSubmitAttempt,
  trackFormValidationError,
  trackCtaClick,
  trackFaqExpand,
  trackFilterInteraction,
  trackWhatsAppClick,
  trackEmailClick,
  resetFormStartSession,
} from '@/lib/analytics';
import { site } from '@/data/site';

const ARENA_FORM_META: FormMeta = {
  formId: 'arena_investment_form',
  formName: 'Aurium Arena Investment Enquiry',
  formType: 'investment_enquiry',
  leadCategory: 'investment',
};

const INVESTMENT_MODELS = [
  'Capital / Equity Investment Enquiry',
  'Strategic & Institutional Partnership',
  'Restaurant & Hospitality Operating Partnership',
  'Corporate Naming Rights & Arena Sponsorship',
  'Technical / Turf / Lighting Supply Partnership',
  'Land / Future Venue Joint Venture Exploration',
];

const REGIONS = [
  'Flagship Project: Pasikot, Budhanilkantha, Kathmandu',
  'Kathmandu Valley (Future Venue Expansion)',
  'Major Urban Hub in Nepal (Exploratory)',
  'International / NRN Investor Desk',
];

const ENQUIRY_SCOPES = [
  'Request Approved Project Overview & Architecture Brief',
  'Schedule Private Investor / Partner Briefing',
  'Explore Restaurant & Viewing Deck Operating Partnership',
  'Explore Corporate Naming Rights & Tournament Sponsorship',
  'General Commercial Collaboration',
];

export default function AuriumArenaClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [investorType, setInvestorType] = useState<'Individual' | 'Institution'>(
    'Individual'
  );
  const [fullName, setFullName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityOrCountry, setCityOrCountry] = useState('Kathmandu, Nepal');
  const [investmentInterest, setInvestmentInterest] = useState(
    INVESTMENT_MODELS[0]
  );
  const [preferredRegion, setPreferredRegion] = useState(REGIONS[0]);
  const [estimatedTicketSize, setEstimatedTicketSize] = useState(
    ENQUIRY_SCOPES[0]
  );
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqFilter, setFaqFilter] = useState<string>('All');

  useEffect(() => {
    const el = formRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackFormView(ARENA_FORM_META);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const markFormStarted = () => {
    trackFormStart(ARENA_FORM_META);
    if (error) setError('');
  };

  const filteredFaqs =
    faqFilter === 'All'
      ? auriumArenaData.investorFaqs
      : auriumArenaData.investorFaqs.filter((f) => f.category === faqFilter);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || submittedId) return;

    trackFormSubmitAttempt(ARENA_FORM_META);
    setError('');

    if (!fullName.trim()) {
      setError('Please provide your full name.');
      trackFormValidationError({
        ...ARENA_FORM_META,
        errorField: 'fullName',
        errorType: 'missing_required_field',
      });
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please provide a valid email address.');
      trackFormValidationError({
        ...ARENA_FORM_META,
        errorField: 'email',
        errorType: 'invalid_email_format',
      });
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      setError('Please provide a valid phone or WhatsApp number.');
      trackFormValidationError({
        ...ARENA_FORM_META,
        errorField: 'phone',
        errorType: 'invalid_phone_format',
      });
      return;
    }

    if (investorType === 'Institution' && !organizationName.trim()) {
      setError('Please enter your institution or organization name.');
      trackFormValidationError({
        ...ARENA_FORM_META,
        errorField: 'organizationName',
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
          action: 'SUBMIT_ARENA_INVESTOR_ENQUIRY',
          payload: {
            investorType,
            fullName: fullName.trim(),
            organizationName:
              investorType === 'Institution' ? organizationName.trim() : '',
            designation:
              investorType === 'Institution' ? designation.trim() : '',
            email: email.trim(),
            phone: phone.trim(),
            cityOrCountry: cityOrCountry.trim(),
            investmentInterest,
            preferredRegion,
            estimatedTicketSize,
            message: message.trim(),
          },
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(
          data.error || 'Unable to submit your enquiry. Please try again.'
        );
      } else {
        const refId =
          data.enquiry?.id || `ARENA-${Date.now().toString().slice(-6)}`;
        trackArenaInvestorEnquiry(investorType, investmentInterest, refId);
        setSubmittedId(refId);
      }
    } catch {
      setError('Network error while submitting your enquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-ink text-chalk min-h-screen">
      {/* =========================================================================
          SECTION 1: HERO — AURIUM ARENA
          ========================================================================= */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden border-b border-white/10 grain">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,193,8,0.14),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.07),transparent_45%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-gold/15 border border-gold/30 text-gold text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest font-mono max-w-full leading-snug">
              <Sparkles size={13} className="shrink-0" />
              <span>Commercial Sports Infrastructure • Pasikot, Budhanilkantha, Kathmandu</span>
            </span>
            <span className="px-3 py-1.5 rounded-2xl sm:rounded-full bg-white/10 border border-white/15 text-chalk/85 font-mono text-[11px] uppercase tracking-wider max-w-full leading-snug">
              7v7 Turf • ~260 Spectator Seats • Elevated Restaurant
            </span>
          </div>

          <h1 className="display text-3xl sm:text-5xl lg:text-6xl uppercase text-white max-w-5xl mb-6">
            Aurium Arena —{' '}
            <span className="text-gold">
              Building the Future of Commercial Football and Futsal Infrastructure
            </span>{' '}
            in Nepal
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-chalk/85 max-w-3xl leading-relaxed font-sans mb-6">
            <strong className="text-white">Aurium Arena</strong> is a commercial
            sports and hospitality venue development project in{' '}
            <strong className="text-gold">
              Pasikot, Budhanilkantha, Kathmandu, Nepal
            </strong>
            . Designed on a <strong className="text-white">22,352 sq.ft.</strong>{' '}
            site, it unites a commercial{' '}
            <strong className="text-white">
              130 ft × 95 ft (7v7) artificial turf football and futsal arena
            </strong>
            , <strong className="text-white">~260 public spectator seats</strong>{' '}
            across two 3-tier grandstands, an{' '}
            <strong className="text-white">
              elevated (+4.5 ft) glass-fronted restaurant and viewing deck
            </strong>
            , and roof-mounted LED floodlighting with 6-camera broadcast
            pre-wiring.
          </p>

          <p className="text-xs sm:text-sm text-chalk/70 max-w-3xl font-sans mb-10 border-l-2 border-gold pl-4">
            Developed by <strong className="text-white">Aurium Sports</strong> (
            <em>{site.legalName}</em>), Aurium Arena connects physical venue
            infrastructure directly with an active operating ecosystem of youth
            football academies, school sports partnerships, corporate leagues,
            and tournaments.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#invest-form"
              onClick={() =>
                trackCtaClick({
                  ctaText: 'Investment Enquiry',
                  ctaType: 'arena_investment_cta',
                  ctaLocation: 'aurium_arena_hero',
                  destinationUrl: '#invest-form',
                })
              }
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-widest hover:bg-chalk transition-all shadow-lg"
            >
              Investment Enquiry <ArrowRight size={15} />
            </a>
            <a
              href="#partnership-tracks"
              onClick={() =>
                trackCtaClick({
                  ctaText: 'Strategic Partnership Enquiry',
                  ctaType: 'arena_partnership_cta',
                  ctaLocation: 'aurium_arena_hero',
                  destinationUrl: '#partnership-tracks',
                })
              }
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 border border-white/25 text-white font-bold text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
            >
              Strategic Partnership Enquiry
            </a>
            <a
              href="#project-infrastructure"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/15 text-chalk/80 font-bold text-xs uppercase tracking-widest hover:text-white transition-all"
            >
              Explore the Project →
            </a>
          </div>

          {/* Verified Scope Key Metric Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-10 border-t border-white/10">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="display text-2xl md:text-4xl text-gold">
                130&apos; × 95&apos;
              </div>
              <div className="text-xs uppercase tracking-widest text-chalk/70 font-bold mt-1">
                7v7 Artificial Turf Arena (12,350 sq.ft.)
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="display text-2xl md:text-4xl text-white">~260</div>
              <div className="text-xs uppercase tracking-widest text-chalk/70 font-bold mt-1">
                North &amp; East 3-Tier Spectator Seats
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="display text-2xl md:text-4xl text-gold">
                +4.5 ft
              </div>
              <div className="text-xs uppercase tracking-widest text-chalk/70 font-bold mt-1">
                Elevated Glass Restaurant &amp; Viewing Deck
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="display text-2xl md:text-4xl text-white">
                22,352 sq.ft.
              </div>
              <div className="text-xs uppercase tracking-widest text-chalk/70 font-bold mt-1">
                Pasikot, Budhanilkantha Site (4-1-1-0.9 Ropani)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 & 6: THE OPPORTUNITY IN COMMERCIAL SPORTS INFRASTRUCTURE IN NEPAL
          ========================================================================= */}
      <section className="py-20 md:py-24 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <span className="eyebrow text-gold-deep">
                Market Context &amp; Sector Thesis
              </span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink leading-tight">
                The Opportunity in Commercial Sports Infrastructure in Nepal.
              </h2>
              <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                Across the Kathmandu Valley and Nepal&apos;s expanding urban
                centers, demand for organized football, futsal, school tournaments,
                and corporate recreation has grown steadily as open public fields
                have disappeared into residential and commercial construction.
              </p>
              <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                However, most first-generation futsal courts in Nepal were built as
                tight 5-a-side wire cages without spectator seating, tournament
                hospitality, or daytime programmatic anchors.{' '}
                <strong className="text-ink">Aurium Arena</strong> is engineered
                to solve these exact structural gaps by pairing a commercial{' '}
                <strong className="text-ink">7v7 artificial turf arena</strong>{' '}
                with{' '}
                <strong className="text-ink">
                  public spectator grandstands
                </strong>{' '}
                and a{' '}
                <strong className="text-ink">
                  full-service elevated restaurant
                </strong>
                .
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-3xl bg-white border border-ink/10 shadow-sm space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                  Verifiable Market Observation 01
                </span>
                <h3 className="display text-xl uppercase text-ink">
                  Urban 7v7 &amp; Futsal Demand
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  Recreational adult groups, corporate banking/tech teams, and
                  local clubs actively book floodlit artificial turf venues across
                  Kathmandu for weekly matches and seasonal leagues.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-ink/10 shadow-sm space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                  Verifiable Market Observation 02
                </span>
                <h3 className="display text-xl uppercase text-ink">
                  School &amp; Academy Utilisation
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  Private schools and youth academies require safe, drained,
                  all-weather 7v7 pitches with parent seating for morning,
                  after-school, and weekend developmental cohorts.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-ink/10 shadow-sm space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                  Project Strategic Thesis 03
                </span>
                <h3 className="display text-xl uppercase text-ink">
                  Sport + Hospitality Dwell Time
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  An elevated glass-fronted restaurant and viewing deck turns a
                  60-to-90-minute pitch session into a dining and social
                  experience for players, parents, and tournament crowds.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-ink/10 shadow-sm space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                  Project Strategic Thesis 04
                </span>
                <h3 className="display text-xl uppercase text-ink">
                  Built-In Anchor Operator
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  Operated in alignment with Aurium Sports—bringing existing
                  academy squads (Ages 3–16), the Aurium Mini League, and corporate
                  tournament management directly to the venue.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-ink/15 text-xs text-muted font-sans leading-relaxed">
            <strong className="text-ink">
              Transparency &amp; Market Research Note:
            </strong>{' '}
            General industry observations reflect visible recreational, school, and
            corporate sports trends in Kathmandu Valley. Project-specific
            operational details and partnership structures are discussed directly
            with qualified prospective partners during private briefings.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 & 4: ABOUT AURIUM ARENA & APPROVED PROJECT INFRASTRUCTURE
          ========================================================================= */}
      <section
        id="project-infrastructure"
        className="py-20 md:py-24 bg-ink text-chalk border-b border-white/10 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow text-gold">
              Approved Project Scope • Pasikot, Budhanilkantha, Kathmandu
            </span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Four Integrated Infrastructure Components.
            </h2>
            <p className="text-chalk/80 text-sm sm:text-base font-sans leading-relaxed">
              The current approved scope of{' '}
              <strong className="text-white">Aurium Arena (Project 007)</strong>{' '}
              is purposefully focused on high-utilization commercial football and
              hospitality infrastructure—combining a{' '}
              <strong className="text-gold">7v7 artificial turf arena</strong>,{' '}
              <strong className="text-gold">
                public spectator grandstands
              </strong>
              , an <strong className="text-gold">elevated restaurant</strong>,
              and{' '}
              <strong className="text-gold">
                roof-mounted LED lighting &amp; broadcast pre-wiring
              </strong>
              .
            </p>
          </div>

          {/* 4 Infrastructure Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auriumArenaData.approvedInfrastructure.map((comp) => (
              <div
                key={comp.number}
                className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-gold/40 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-gold text-ink font-mono text-[10px] font-bold uppercase tracking-widest">
                      COMPONENT {comp.number}
                    </span>
                    <span className="text-[11px] font-mono text-gold">
                      {comp.dimensionsOrSpec}
                    </span>
                  </div>

                  <div>
                    <h3 className="display text-2xl sm:text-3xl uppercase text-white">
                      {comp.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-gold/90 mt-1">
                      {comp.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-chalk/80 font-sans leading-relaxed">
                    {comp.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-white/10">
                    {comp.specifications.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2 text-xs text-chalk/85 font-sans"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-gold shrink-0 mt-0.5"
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Architectural Drawings Showcase */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="eyebrow text-gold">
                  Architectural &amp; Engineering Concept Drawings
                </span>
                <h3 className="display text-2xl sm:text-4xl uppercase text-white mt-1">
                  Verified Site Masterplan, Seating &amp; Restaurant Layouts.
                </h3>
              </div>
              <span className="text-xs font-mono text-chalk/60">
                Site Area: 4-1-1-0.9 Ropani (22,352 sq.ft.) • Pasikot, Kathmandu
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-3xl bg-white/[0.04] border border-white/10 overflow-hidden flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full bg-white">
                  <Image
                    src="/images/arena/aurium-arena-7v7-turf-masterplan-pasikot-kathmandu.png"
                    alt="Aurium Arena 007 Integrated Site Masterplan showing 130x95 ft 7v7 artificial turf pitch, grandstands, and elevated restaurant in Pasikot, Kathmandu"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                    Drawing 01 • Integrated Site Masterplan
                  </span>
                  <h4 className="display text-xl uppercase text-white">
                    22,352 sq.ft. 6-Sided Site Allocation
                  </h4>
                  <p className="text-xs text-chalk/70 font-sans">
                    130&apos; × 95&apos; 7v7 pitch in the southern wide zone,
                    East arrival plaza, and North grandstand + elevated restaurant.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white/[0.04] border border-white/10 overflow-hidden flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full bg-white">
                  <Image
                    src="/images/arena/aurium-arena-spectator-seating-grandstand-plan.png"
                    alt="Aurium Arena North and East 3-tier public spectator grandstands architectural plan (~260 seats)"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                    Drawing 02 • Spectator Grandstand Plan
                  </span>
                  <h4 className="display text-xl uppercase text-white">
                    North (~165) &amp; East (~95) 3-Tier Stands
                  </h4>
                  <p className="text-xs text-chalk/70 font-sans">
                    1.5-ft riser steps, timber-slat benches, 3.5-ft laminated
                    safety glass guardrails, and 4-ft non-slip staircases.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white/[0.04] border border-white/10 overflow-hidden flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full bg-white">
                  <Image
                    src="/images/arena/aurium-arena-elevated-restaurant-viewing-deck-plan.png"
                    alt="Aurium Arena +4.5 ft elevated glass-fronted restaurant, outdoor viewing deck, and commercial kitchen floor plan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                    Drawing 03 • Hospitality Floor Plan
                  </span>
                  <h4 className="display text-xl uppercase text-white">
                    +4.5 ft Glass Restaurant &amp; Viewing Deck
                  </h4>
                  <p className="text-xs text-chalk/70 font-sans">
                    1,848 sq.ft. glass dining hall (~54 seats), 800 sq.ft. viewing
                    deck (~28 seats), and 960 sq.ft. commercial kitchen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: BUSINESS MODEL & REVENUE CATEGORIES
          ========================================================================= */}
      <section className="py-20 md:py-24 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="eyebrow text-gold-deep">
                Commercial Operating Model
              </span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
                Multi-Stream Venue Revenue Architecture.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted max-w-md font-sans">
              Designed to balance peak-hour recreational bookings with daytime
              academy utilization, weekend tournaments, and daily restaurant
              hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auriumArenaData.revenueStreams.map((rev, i) => (
              <div
                key={rev.title}
                className="p-7 rounded-3xl bg-chalk border border-ink/10 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider ${
                        rev.category === 'Core Operating Revenue'
                          ? 'bg-ink text-gold'
                          : 'bg-white border border-ink/15 text-gold-deep'
                      }`}
                    >
                      {rev.category}
                    </span>
                    <span className="display text-2xl text-ink/20">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink">
                    {rev.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {rev.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-ink/10 text-[11px] font-mono text-gold-deep font-bold">
                  Target Segment: {rev.audience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INVESTMENT & STRATEGIC PARTNERSHIP OPPORTUNITIES
          ========================================================================= */}
      <section
        id="partnership-tracks"
        className="py-20 md:py-24 bg-chalk text-ink border-b border-ink/10 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="eyebrow text-gold-deep">
              Collaboration &amp; Capital Participation
            </span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              Investment &amp; Strategic Partnership Tracks.
            </h2>
            <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
              Aurium Arena welcomes expressions of interest from individual
              investors, institutional partners, hospitality operators, and
              corporate sponsors. Specific capital allocations, equity structures,
              and commercial agreements are discussed directly under owner-approved
              disclosure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auriumArenaData.collaborationCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-7 rounded-3xl bg-white border border-ink/10 shadow-sm flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-chalk border border-ink/10 text-gold-deep font-mono text-[10px] font-bold uppercase tracking-wider">
                    {cat.badge}
                  </span>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <a
                  href="#invest-form"
                  onClick={() => {
                    setInvestmentInterest(cat.title);
                    trackCtaClick({
                      ctaText: `Enquire About This Track (${cat.title})`,
                      ctaType: 'arena_track_cta',
                      ctaLocation: 'aurium_arena_partnership_tracks',
                      destinationUrl: '#invest-form',
                    });
                  }}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-ink hover:text-gold-deep inline-flex items-center gap-1.5 pt-3 border-t border-ink/10"
                >
                  Enquire About This Track <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 & 9: PROJECT TIMELINE & ORGANISATIONAL CREDIBILITY
          ========================================================================= */}
      <section className="py-20 md:py-24 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Timeline */}
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className="eyebrow text-gold-deep">
                Development Roadmap
              </span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
                Project Development &amp; Execution Timeline.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {auriumArenaData.timeline.map((item) => (
                <div
                  key={item.stage}
                  className="p-6 rounded-3xl bg-chalk border border-ink/10 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-ink text-gold font-mono text-[10px] font-bold uppercase">
                        {item.stage}
                      </span>
                      <span className="text-[10px] font-mono text-gold-deep font-bold uppercase">
                        {item.statusLabel}
                      </span>
                    </div>
                    <h3 className="display text-xl uppercase tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-ink/10 text-[10px] font-mono text-ink/70 uppercase">
                    Window: {item.window}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Team & Credibility */}
          <div className="rounded-3xl bg-ink text-chalk p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="eyebrow text-gold">
                Project Team &amp; Operating Credibility
              </span>
              <h3 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white">
                Backed by Aurium Sports ({site.legalName}).
              </h3>
              <p className="text-xs sm:text-sm text-chalk/80 font-sans leading-relaxed">
                Led by Founder, Sports Director &amp; Owner{' '}
                <strong className="text-white">Diwas Agasti</strong> and a
                12+ specialist coaching and operations directorate, Aurium Sports
                has built one of Kathmandu Valley&apos;s most active football and
                youth sports ecosystems—including{' '}
                <Link
                  href="/services/academy"
                  className="text-gold underline hover:text-white"
                >
                  The Aurium Academy
                </Link>{' '}
                (350+ active players across 5 training grounds),{' '}
                <Link
                  href="/services/school-programs"
                  className="text-gold underline hover:text-white"
                >
                  Aurium SportsEd school partnerships
                </Link>{' '}
                (2,000+ students reached), the{' '}
                <Link
                  href="/tournaments"
                  className="text-gold underline hover:text-white"
                >
                  Aurium Mini League &amp; Aurium International Cup
                </Link>
                , the{' '}
                <Link
                  href="/aic-titans-cup"
                  className="text-gold underline hover:text-white"
                >
                  AIC Titans Cup
                </Link>
                , and international youth delegations to the Dana Cup in Denmark.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-wider text-center hover:bg-white transition-all"
              >
                Meet Aurium Sports Leadership →
              </Link>
              <Link
                href="/tournaments"
                className="px-6 py-3.5 rounded-full border border-white/25 text-chalk font-bold text-xs uppercase tracking-wider text-center hover:border-gold hover:text-gold transition-all"
              >
                View Our Leagues &amp; Tournaments →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SUPPORTING SEARCH AUTHORITY HUB (6 DEEP-DIVE GUIDES)
          ========================================================================= */}
      <section className="py-20 md:py-24 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="eyebrow text-gold-deep">
                Research &amp; Sector Intelligence Library
              </span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
                Sports Investment &amp; Infrastructure Guides.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted max-w-md font-sans">
              In-depth research resources covering sports investment in Nepal,
              7v7 futsal economics, synthetic turf engineering, and commercial
              sports hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auriumArenaData.supportingGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/aurium-arena/${guide.slug}`}
                className="group p-7 rounded-3xl bg-white border border-ink/10 hover:border-gold-deep shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold block">
                    {guide.code}
                  </span>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink group-hover:text-gold-deep transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {guide.summary}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink group-hover:text-gold-deep inline-flex items-center gap-1.5 pt-3 border-t border-ink/10">
                  Read Research Guide <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: 16 AEO / GEO INVESTOR & SPORTS INFRASTRUCTURE FAQS
          ========================================================================= */}
      <section className="py-20 md:py-24 bg-white text-ink border-b border-ink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-gold-deep font-mono text-xs uppercase font-bold tracking-widest">
              <HelpCircle size={16} /> Investor &amp; Infrastructure Knowledge Hub
            </div>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              Frequently Asked Questions — Aurium Arena &amp; Sports Investment.
            </h2>
            <p className="text-xs sm:text-sm text-muted font-sans max-w-xl mx-auto">
              Direct, factual answers covering sports investment opportunities in
              Nepal, 7v7 futsal engineering, project location, and how to enquire.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              'All',
              'Investment & Market',
              'Project & Infrastructure',
              'Partnership & Enquiry',
            ].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setFaqFilter(cat);
                  trackFilterInteraction('faq_category', cat, 'aurium_arena_faqs');
                }}
                className={`px-4 py-2 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-all ${
                  faqFilter === cat
                    ? 'bg-ink text-gold'
                    : 'bg-chalk text-muted hover:text-ink border border-ink/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-ink/10 bg-chalk overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (!isOpen) trackFaqExpand('aurium_arena_investor_faq', idx);
                      setOpenFaq(isOpen ? null : idx);
                    }}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-display uppercase tracking-tight text-base sm:text-lg text-ink hover:text-gold-deep transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-gold-deep transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted font-sans leading-relaxed border-t border-ink/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: INVESTOR & STRATEGIC PARTNERSHIP ENQUIRY DESK
          ========================================================================= */}
      <section id="invest-form" className="py-20 md:py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow text-gold mb-2 block">
              Investor &amp; Strategic Partnership Desk
            </span>
            <h2 className="display text-3xl md:text-5xl uppercase text-white tracking-tight">
              Submit Your Investment or Partnership Enquiry
            </h2>
            <p className="text-chalk/75 text-sm md:text-base mt-3">
              Share your profile and area of interest below. Our leadership team
              will contact you directly with the approved Aurium Arena project
              overview and arrange a private discussion.
            </p>
          </div>

          {submittedId ? (
            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.04] border border-gold/40 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="display text-3xl uppercase text-white">
                Investment Enquiry Received
              </h3>
              <p className="text-sm text-chalk/80 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>.
                Your enquiry (Reference:{' '}
                <span className="font-mono text-gold font-bold">
                  {submittedId}
                </span>
                ) has been logged and sent to our leadership team. We will
                contact you shortly.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    resetFormStartSession(ARENA_FORM_META.formId);
                    setSubmittedId(null);
                    setMessage('');
                  }}
                  className="px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-chalk hover:border-gold hover:text-gold transition-colors"
                >
                  Submit Another Enquiry
                </button>
                <Link
                  href="/"
                  className="px-6 py-3 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-widest hover:bg-chalk transition-colors"
                >
                  Back to Aurium Sports
                </Link>
              </div>
            </div>
          ) : (
            <form
              ref={formRef}
              id="arena_investment_form"
              data-form-id="arena_investment_form"
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/15 space-y-6"
            >
              {/* Investor Type Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gold mb-3">
                  I am enquiring as an
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      markFormStarted();
                      setInvestorType('Individual');
                    }}
                    className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                      investorType === 'Individual'
                        ? 'bg-gold text-ink border-gold'
                        : 'bg-white/5 text-chalk/80 border-white/15 hover:border-gold/50'
                    }`}
                  >
                    <User size={16} /> Individual Investor / Partner
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      markFormStarted();
                      setInvestorType('Institution');
                    }}
                    className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                      investorType === 'Institution'
                        ? 'bg-gold text-ink border-gold'
                        : 'bg-white/5 text-chalk/80 border-white/15 hover:border-gold/50'
                    }`}
                  >
                    <Building2 size={16} /> Company / Institution / Brand
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={fullName}
                    onChange={(e) => {
                      markFormStarted();
                      setFullName(e.target.value);
                    }}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => {
                      markFormStarted();
                      setEmail(e.target.value);
                    }}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                  />
                </div>

                {investorType === 'Institution' && (
                  <>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                        Organisation / Company Name *
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        required
                        value={organizationName}
                        onChange={(e) => {
                          markFormStarted();
                          setOrganizationName(e.target.value);
                        }}
                        placeholder="Company, hospitality brand, or group name"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                        Role / Designation
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={designation}
                        onChange={(e) => {
                          markFormStarted();
                          setDesignation(e.target.value);
                        }}
                        placeholder="e.g., Managing Partner, Director"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => {
                      markFormStarted();
                      setPhone(e.target.value);
                    }}
                    placeholder="+977 98..."
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    City / Country
                  </label>
                  <div className="relative">
                    <MapPin
                      size={15}
                      className="absolute left-3.5 top-3.5 text-gold/70"
                    />
                    <input
                      type="text"
                      name="cityOrCountry"
                      value={cityOrCountry}
                      onChange={(e) => {
                        markFormStarted();
                        setCityOrCountry(e.target.value);
                      }}
                      placeholder="Kathmandu, Nepal"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Type of Enquiry / Partnership Interest
                  </label>
                  <select
                    name="investmentInterest"
                    value={investmentInterest}
                    onChange={(e) => {
                      markFormStarted();
                      setInvestmentInterest(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    {INVESTMENT_MODELS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Project Focus / Location
                  </label>
                  <select
                    name="preferredRegion"
                    value={preferredRegion}
                    onChange={(e) => {
                      markFormStarted();
                      setPreferredRegion(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Preferred Next Step
                  </label>
                  <select
                    name="estimatedTicketSize"
                    value={estimatedTicketSize}
                    onChange={(e) => {
                      markFormStarted();
                      setEstimatedTicketSize(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    {ENQUIRY_SCOPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Message / Specific Questions
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      markFormStarted();
                      setMessage(e.target.value);
                    }}
                    placeholder="Share your background, interest in the 7v7 turf, spectator venue, or elevated restaurant, and any questions for our project team..."
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-[11px] text-chalk/70 font-sans leading-relaxed">
                <strong className="text-white">
                  Privacy &amp; Non-Solicitation Notice:
                </strong>{' '}
                Your contact information is used solely by Aurium Sports (
                {site.legalName}) to respond to your enquiry. We do not request
                sensitive personal financial records through this form, and
                information on this website does not constitute a public offer of
                securities or a guarantee of financial return.
              </div>

              {error && (
                <div
                  role="alert"
                  data-testid="arena-form-error"
                  className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-200"
                >
                  {error}
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap items-center gap-4 text-xs text-chalk/70">
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Aurium Sports, I would like to enquire about the Aurium Arena project and partnership opportunities.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('aurium_arena_form')}
                    className="text-[#25D366] hover:underline font-bold inline-flex items-center gap-1.5"
                  >
                    <MessageCircle size={15} /> WhatsApp +977 {site.phone}
                  </a>
                  <span>•</span>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent('Aurium Arena Investment & Partnership Enquiry')}`}
                    onClick={() => trackEmailClick('aurium_arena_form')}
                    className="text-gold hover:underline font-bold inline-flex items-center gap-1.5"
                  >
                    <Mail size={15} /> {site.email}
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="arena-form-submit"
                  className="px-8 py-4 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-widest hover:bg-chalk transition-all disabled:opacity-60 shadow-lg"
                >
                  {submitting
                    ? 'Submitting Enquiry...'
                    : 'Submit Investment Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
