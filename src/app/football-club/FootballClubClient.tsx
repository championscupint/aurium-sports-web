'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footballClub } from '@/data/football-club';
import { site } from '@/data/site';
import { useEnquiry } from '@/components/EnquiryContext';
import {
  trackClubPageVisit,
  trackPlayerInterestSubmission,
  trackClubPartnershipEnquiry,
  trackClubNewsEngagement,
  trackEcosystemCrossClick,
} from '@/lib/analytics';
import { buttonClass } from '@/lib/ui';
import {
  Shield,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  AlertCircle,
  Trophy,
  Target,
  Compass,
  Users,
  Handshake,
  Newspaper,
  Send,
  Mail,
  MessageCircle,
  Sparkles,
  Layers,
  Scale,
} from 'lucide-react';

interface PlayerInterestFormState {
  fullName: string;
  dob: string;
  position: string;
  currentClub: string;
  experience: string;
  phone: string;
  email: string;
  location: string;
  introduction: string;
  footageUrl: string;
  guardianContact: string;
  isMinor: boolean;
  privacyConsent: boolean;
  guardianConsent: boolean;
}

const initialPlayerForm: PlayerInterestFormState = {
  fullName: '',
  dob: '',
  position: '',
  currentClub: '',
  experience: '',
  phone: '',
  email: '',
  location: '',
  introduction: '',
  footageUrl: '',
  guardianContact: '',
  isMinor: false,
  privacyConsent: false,
  guardianConsent: false,
};

export function FootballClubClient() {
  const { openEnquiry } = useEnquiry();
  const [selectedNewsCategory, setSelectedNewsCategory] =
    useState<string>('All Categories');
  const [playerForm, setPlayerForm] =
    useState<PlayerInterestFormState>(initialPlayerForm);
  const [formError, setFormError] = useState<string | null>(null);
  const [formReadyMethod, setFormReadyMethod] = useState<
    'whatsapp' | 'email' | null
  >(null);

  useEffect(() => {
    trackClubPageVisit();
  }, []);

  // Automatically check if DOB indicates a minor (< 18 years old)
  const handleDobChange = (dobValue: string) => {
    let minor = playerForm.isMinor;
    if (dobValue) {
      const birthDate = new Date(dobValue);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (!Number.isNaN(age)) {
        minor = age < 18;
      }
    }
    setPlayerForm((prev) => ({
      ...prev,
      dob: dobValue,
      isMinor: minor,
    }));
  };

  const validatePlayerForm = (): boolean => {
    if (!playerForm.fullName.trim()) {
      setFormError('Please enter your full name.');
      return false;
    }
    if (!playerForm.dob) {
      setFormError('Please provide your date of birth.');
      return false;
    }
    if (!playerForm.position) {
      setFormError('Please select your preferred playing position.');
      return false;
    }
    if (!playerForm.currentClub.trim()) {
      setFormError('Please enter your current club, school, or academy (or "Independent").');
      return false;
    }
    if (!playerForm.experience.trim()) {
      setFormError('Please summarize your football experience.');
      return false;
    }
    if (!playerForm.phone.trim()) {
      setFormError('Please enter a valid contact number.');
      return false;
    }
    if (!playerForm.email.trim()) {
      setFormError('Please enter your email address.');
      return false;
    }
    if (!playerForm.location.trim()) {
      setFormError('Please enter your city/location.');
      return false;
    }
    if (!playerForm.introduction.trim()) {
      setFormError('Please provide a short player introduction.');
      return false;
    }
    if (playerForm.isMinor && !playerForm.guardianContact.trim()) {
      setFormError(
        'Parent or guardian name & contact number is required for players under 18.'
      );
      return false;
    }
    if (!playerForm.privacyConsent) {
      setFormError(
        'Please confirm your consent to the processing of this expression of interest.'
      );
      return false;
    }
    if (playerForm.isMinor && !playerForm.guardianConsent) {
      setFormError(
        'Parental or legal guardian consent is required for players under 18.'
      );
      return false;
    }
    setFormError(null);
    return true;
  };

  const buildPlayerInterestMessage = () => {
    const lines = [
      '*Aurium Football Club | Player Expression of Interest*',
      '',
      `Full Name: ${playerForm.fullName.trim()}`,
      `Date of Birth: ${playerForm.dob}`,
      `Preferred Position: ${playerForm.position}`,
      `Current Club / Academy: ${playerForm.currentClub.trim()}`,
      `Football Experience: ${playerForm.experience.trim()}`,
      `Contact Number: ${playerForm.phone.trim()}`,
      `Email: ${playerForm.email.trim()}`,
      `Location: ${playerForm.location.trim()}`,
      `Short Player Introduction: ${playerForm.introduction.trim()}`,
    ];
    if (playerForm.footageUrl.trim()) {
      lines.push(`Match Footage / Highlights Link: ${playerForm.footageUrl.trim()}`);
    }
    if (playerForm.isMinor || playerForm.guardianContact.trim()) {
      lines.push(
        `Parent / Guardian Contact (Minor): ${playerForm.guardianContact.trim()}`
      );
      lines.push('Parental / Guardian Consent: Confirmed');
    }
    lines.push('Privacy & Non-Guarantee Acknowledgment: Confirmed');
    return lines.join('\n');
  };

  const handlePlayerInterestSubmit = (method: 'whatsapp' | 'email') => {
    if (!validatePlayerForm()) return;
    trackPlayerInterestSubmission(method);
    setFormReadyMethod(method);
    const message = buildPlayerInterestMessage();

    if (method === 'whatsapp') {
      const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      const subject = `Aurium Football Club · Player Expression of Interest · ${playerForm.fullName.trim()}`;
      const body = message.replace(/\*/g, '');
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  const filteredNews =
    selectedNewsCategory === 'All Categories'
      ? footballClub.newsArticles
      : footballClub.newsArticles.filter(
          (art) => art.category === selectedNewsCategory
        );

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          SECTION 1: HERO — AURIUM FOOTBALL CLUB
          ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center bg-ink text-chalk grain overflow-hidden border-b border-white/10">
        {/* Authentic Aurium Stadium / Pitch Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stadium-night.jpg"
            alt="Aurium Football Club competitive pitch environment in Nepal"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-55 scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Club Identity & Messaging */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-[11px] font-mono font-bold uppercase tracking-widest">
                  <Shield size={13} /> {footballClub.hero.eyebrow}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-chalk/90 text-[10px] font-mono uppercase tracking-wider">
                  Profit Not Distributing Company • PAN Registered (Nepal)
                </span>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.28em] text-gold font-bold">
                  {footballClub.hero.headline}
                </p>
                <h1 className="display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.95]">
                  <span className="sr-only">Aurium Football Club – </span>
                  From Grassroots To The{' '}
                  <span className="accent font-serif italic text-gold normal-case block sm:inline">
                    National Stage.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-xl text-chalk/90 max-w-2xl font-sans leading-relaxed">
                {footballClub.hero.supportingText}
              </p>

              <p className="text-sm sm:text-base text-chalk/75 max-w-2xl font-sans leading-relaxed border-l-2 border-gold pl-4">
                {footballClub.hero.secondarySupportingText}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#about-club"
                  className={buttonClass(
                    'gold',
                    '!py-4 !px-8 text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold/25'
                  )}
                >
                  {footballClub.hero.primaryCta}
                </a>
                <a
                  href="#partnerships"
                  onClick={() =>
                    trackClubPartnershipEnquiry('hero_partner_cta', 'whatsapp')
                  }
                  className={buttonClass(
                    'outline-chalk',
                    '!py-4 !px-8 text-xs font-bold uppercase tracking-wider'
                  )}
                >
                  {footballClub.hero.secondaryCta}
                </a>
                <a
                  href="#recruitment"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-gold hover:underline inline-flex items-center gap-1.5 px-3 py-2"
                >
                  Player Expression of Interest <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Clearly Labelled Official Club Crest Placeholder Area */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-white/[0.04] backdrop-blur-md border border-gold/30 p-8 text-center space-y-5 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold font-mono text-[10px] font-bold uppercase tracking-widest">
                  Official Crest Slot
                </div>

                {/* Official Crest Placeholder — Strictly labelled per Section 9 */}
                <div className="w-36 h-36 mx-auto rounded-3xl border-2 border-dashed border-gold/40 bg-ink/80 flex flex-col items-center justify-center p-4 gap-2">
                  <Shield size={42} className="text-gold/80" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold leading-tight">
                    Official Club Crest Placeholder
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="display text-2xl uppercase tracking-tight text-white">
                    {footballClub.name}
                  </h2>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gold">
                    “{footballClub.tagline}”
                  </p>
                </div>

                <p className="text-[11px] text-chalk/65 font-sans leading-relaxed border-t border-white/10 pt-4">
                  Reserved for the official registered crest of{' '}
                  <strong className="text-white">Aurium Football Club</strong>.
                  Partnering Academy:{' '}
                  <Link
                    href="/services/academy"
                    onClick={() =>
                      trackEcosystemCrossClick('club_to_sports', 'hero_crest_card')
                    }
                    className="text-gold underline hover:text-white transition-colors"
                  >
                    Aurium Sports
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY IN-PAGE CLUB NAVIGATION BAR
          ========================================================================= */}
      <div className="sticky top-16 z-30 bg-ink-2/95 backdrop-blur-md border-b border-white/10 text-chalk overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-6 whitespace-nowrap text-xs font-mono uppercase tracking-wider">
          <div className="flex items-center gap-5 sm:gap-7">
            <a href="#about-club" className="hover:text-gold transition-colors">
              01. About Club
            </a>
            <a href="#vision-mission" className="hover:text-gold transition-colors">
              02. Vision &amp; Mission
            </a>
            <a href="#football-journey" className="hover:text-gold transition-colors">
              03. C Qualifier &amp; Journey
            </a>
            <a href="#academy-partnership" className="hover:text-gold transition-colors">
              04. Academy Partnership
            </a>
            <a href="#player-pathway" className="hover:text-gold transition-colors">
              05. Player Pathway
            </a>
            <a href="#recruitment" className="hover:text-gold transition-colors">
              06. Player Interest
            </a>
            <a href="#philosophy" className="hover:text-gold transition-colors">
              07. Philosophy
            </a>
            <a href="#partnerships" className="hover:text-gold transition-colors">
              08. Partnerships
            </a>
            <a href="#news" className="hover:text-gold transition-colors">
              09. Club News
            </a>
          </div>
          <a
            href="#recruitment"
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold text-ink font-bold text-[10px] tracking-widest uppercase hover:bg-white transition-colors"
          >
            Register Interest <ArrowRight size={12} />
          </a>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: ABOUT THE CLUB & LEGAL ORGANISATIONAL STRUCTURE
          ========================================================================= */}
      <section
        id="about-club"
        className="py-24 bg-chalk text-ink border-b border-ink/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow text-gold-deep">
                About Aurium Football Club
              </span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink leading-tight">
                A New Ambition for{' '}
                <span className="accent font-serif italic text-gold-deep normal-case">
                  Nepali Football.
                </span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-muted font-sans leading-relaxed">
                {footballClub.about.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Governance & Legal Status Callout */}
              <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-gold-deep">
                  <Scale size={16} /> Corporate &amp; Legal Structure in Nepal
                </div>
                <p className="text-xs sm:text-sm text-ink font-sans leading-relaxed">
                  <strong>Aurium Football Club</strong> is a separately registered
                  football club in Nepal, incorporated as a{' '}
                  <strong>Profit Not Distributing Company</strong> and registered
                  with <strong>PAN</strong> in Nepal. It operates as an independent
                  legal entity in strategic partnership with{' '}
                  <strong>Aurium Sports</strong> (operated by{' '}
                  <em>{site.legalName}</em>), which serves as the club’s partnering
                  football development academy.
                </p>
              </div>
            </div>

            {/* Right Visual & Organisational Comparison Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-ink/10 shadow-xl bg-ink">
                <Image
                  src="/images/tournament.jpg"
                  alt="Competitive youth and club pathway football in Kathmandu, Nepal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-chalk">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold block">
                    Competitive Pathway
                  </span>
                  <div className="display text-2xl uppercase text-white mt-0.5">
                    Structured Development to Senior Football
                  </div>
                </div>
              </div>

              <div className="bg-ink text-chalk p-6 rounded-3xl border border-white/10 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                  Two Distinct Organisations • One Shared Vision
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] font-mono uppercase text-gold font-bold">
                      Partnering Academy
                    </div>
                    <div className="display text-xl uppercase text-white mt-1">
                      Aurium Sports
                    </div>
                    <p className="text-[11px] text-chalk/70 font-sans mt-1">
                      Developing Footballers. Building Futures. ({site.legalName})
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gold/15 border border-gold/40">
                    <div className="text-[10px] font-mono uppercase text-gold font-bold">
                      Competitive Club
                    </div>
                    <div className="display text-xl uppercase text-white mt-1">
                      Aurium Football Club
                    </div>
                    <p className="text-[11px] text-chalk/80 font-sans mt-1">
                      From Grassroots to the National Stage. (Profit Not
                      Distributing Co.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 & 4: VISION & 7 MISSION PILLARS
          ========================================================================= */}
      <section
        id="vision-mission"
        className="py-24 bg-ink text-chalk grain relative border-b border-white/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
          {/* Section 3: Prominent Vision Statement */}
          <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent border border-gold/30 p-8 sm:p-14 shadow-2xl">
            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 text-gold font-mono text-xs uppercase font-bold tracking-widest">
                <Target size={16} /> {footballClub.vision.heading}
              </div>
              <h2 className="display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight">
                “To become a leading football club in Nepal, recognised for
                developing{' '}
                <span className="accent font-serif italic text-gold normal-case">
                  homegrown talent
                </span>
                , building a competitive football culture, and creating a
                sustainable pathway from grassroots football to the{' '}
                <span className="accent font-serif italic text-gold normal-case">
                  national and international stages.
                </span>
                ”
              </h2>
            </div>
          </div>

          {/* Section 4: Our Mission — 7 Mission Pillars */}
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="eyebrow text-gold">Strategic Mandate</span>
                <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white mt-2">
                  {footballClub.mission.heading}.
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-chalk/70 max-w-md font-sans">
                Seven foundational pillars guiding Aurium Football Club’s sporting
                operations, player recruitment, and long-term competitive standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {footballClub.mission.pillars.map((pillar, idx) => (
                <div
                  key={pillar.number}
                  className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    idx === 6
                      ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-gold/15 via-white/[0.05] to-white/[0.03] border-gold/40'
                      : 'bg-white/[0.04] border-white/10 hover:border-gold/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="display text-3xl text-gold">
                        {pillar.number}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-chalk/70 font-mono text-[10px] uppercase tracking-wider">
                        Mission Pillar
                      </span>
                    </div>
                    <h3 className="display text-2xl uppercase tracking-tight text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-chalk/75 font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR FOOTBALL JOURNEY (4-STAGE PROGRESSION TIMELINE)
          ========================================================================= */}
      <section
        id="football-journey"
        className="py-24 bg-white text-ink border-b border-ink/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-gold-deep">
                Nepali Football Pyramid Roadmap
              </span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink mt-2">
                {footballClub.journey.heading}.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted max-w-md font-sans leading-relaxed">
              A disciplined, step-by-step sporting roadmap—beginning with club
              establishment and preparing for the C Qualifier as our intended entry
              point into Nepal’s organised football competition structure.
            </p>
          </div>

          {/* 4-Stage Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {footballClub.journey.stages.map((st, idx) => (
              <div
                key={st.stage}
                className="relative p-7 rounded-3xl bg-chalk border border-ink/10 shadow-sm flex flex-col justify-between hover:border-ink/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-ink text-gold font-mono text-[10px] font-bold uppercase tracking-widest">
                      {st.stage}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gold-deep font-bold">
                      {st.statusBadge}
                    </span>
                  </div>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-ink/10 flex items-center justify-between text-[11px] font-mono text-muted">
                  <span>Step 0{idx + 1} of 04</span>
                  {idx < 3 ? (
                    <span className="text-gold-deep font-bold flex items-center gap-1">
                      Next Stage <ArrowRight size={12} />
                    </span>
                  ) : (
                    <span className="text-ink font-bold">Long-Term Horizon</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Governance & Competition Note */}
          <div className="p-6 rounded-2xl bg-chalk border border-ink/15 flex items-start gap-3">
            <AlertCircle
              size={18}
              className="text-gold-deep shrink-0 mt-0.5"
            />
            <p className="text-xs text-muted font-sans leading-relaxed">
              <strong className="text-ink">
                Competition Structure &amp; Governance Note:
              </strong>{' '}
              {footballClub.journey.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR ACADEMY PARTNERSHIP & 6-STEP VISUAL PATHWAY
          ========================================================================= */}
      <section
        id="academy-partnership"
        className="py-24 bg-chalk text-ink border-b border-ink/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow text-gold-deep">
              Strategic Ecosystem Alignment
            </span>
            <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink leading-tight">
              {footballClub.academyPartnership.heading}
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-muted font-sans leading-relaxed">
              {footballClub.academyPartnership.supportingText.map((txt, i) => (
                <p key={i}>{txt}</p>
              ))}
            </div>
          </div>

          {/* Two Connected Cards: Aurium Sports vs. Aurium Football Club */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* CARD 1: AURIUM SPORTS */}
            <div className="bg-white rounded-3xl border border-ink/15 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-4">
                  <span className="px-3 py-1 rounded-full bg-ink text-gold font-mono text-[10px] font-bold uppercase tracking-widest">
                    Role: {footballClub.academyPartnership.cards.sports.role}
                  </span>
                  <span className="text-[11px] font-mono text-muted">
                    {footballClub.academyPartnership.cards.sports.legalEntity}
                  </span>
                </div>

                <div>
                  <h3 className="display text-3xl sm:text-4xl uppercase tracking-tight text-ink">
                    {footballClub.academyPartnership.cards.sports.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-gold-deep font-bold mt-1">
                    {footballClub.academyPartnership.cards.sports.positioning}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {footballClub.academyPartnership.cards.sports.bullets.map(
                    (b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 font-sans"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-gold-deep shrink-0 mt-0.5"
                        />
                        <span>{b}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="pt-6 border-t border-ink/10">
                <Link
                  href={footballClub.academyPartnership.cards.sports.href}
                  onClick={() =>
                    trackEcosystemCrossClick(
                      'club_to_sports',
                      'academy_partnership_card'
                    )
                  }
                  className={buttonClass(
                    'ink',
                    'w-full !py-4 text-xs font-bold uppercase tracking-wider justify-center'
                  )}
                >
                  {footballClub.academyPartnership.cards.sports.cta}{' '}
                  <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* CARD 2: AURIUM FOOTBALL CLUB */}
            <div className="bg-ink text-chalk rounded-3xl border border-gold/40 p-8 sm:p-10 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <span className="px-3 py-1 rounded-full bg-gold text-ink font-mono text-[10px] font-bold uppercase tracking-widest">
                    Role: {footballClub.academyPartnership.cards.club.role}
                  </span>
                  <span className="text-[11px] font-mono text-chalk/70">
                    Profit Not Distributing Co. (PAN)
                  </span>
                </div>

                <div>
                  <h3 className="display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                    {footballClub.academyPartnership.cards.club.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-gold font-bold mt-1">
                    {footballClub.academyPartnership.cards.club.positioning}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {footballClub.academyPartnership.cards.club.bullets.map(
                    (b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-chalk/90 font-sans"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-gold shrink-0 mt-0.5"
                        />
                        <span>{b}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 relative z-10">
                <a
                  href="#recruitment"
                  className={buttonClass(
                    'gold',
                    'w-full !py-4 text-xs font-bold uppercase tracking-wider justify-center'
                  )}
                >
                  {footballClub.academyPartnership.cards.club.cta}{' '}
                  <ArrowRight size={14} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* 6-Step Visual Player Pathway (#player-pathway) */}
          <div
            id="player-pathway"
            className="bg-white rounded-3xl border border-ink/15 p-8 sm:p-12 shadow-sm space-y-8 scroll-mt-28"
          >
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="eyebrow text-gold-deep justify-center">
                The Connected Ecosystem Flow
              </span>
              <h3 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
                Grassroots-to-Club Visual Pathway.
              </h3>
              <p className="text-xs sm:text-sm text-muted font-sans">
                How aspiring footballers progress from early grassroots discovery
                through academy assessment to senior club football ambitions.
              </p>
            </div>

            {/* Vertical & Responsive Flow Diagram */}
            <div className="max-w-3xl mx-auto space-y-3">
              {footballClub.academyPartnership.pathwaySteps.map((p, index) => (
                <React.Fragment key={p.step}>
                  <div className="p-5 rounded-2xl bg-chalk border border-ink/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-gold-deep transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-ink text-gold font-display text-xl flex items-center justify-center shrink-0">
                        {p.step}
                      </span>
                      <div>
                        <div className="display text-xl uppercase tracking-tight text-ink">
                          {p.label}
                        </div>
                        <div className="text-xs text-muted font-sans">
                          {p.detail}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-ink/10 text-ink/70 self-start sm:self-center shrink-0">
                      {index < 3 ? 'Academy Phase' : 'Club Phase'}
                    </span>
                  </div>
                  {index <
                    footballClub.academyPartnership.pathwaySteps.length - 1 && (
                    <div className="flex justify-center py-0.5 text-gold-deep">
                      <ArrowDown size={20} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mandatory Selection & Regulatory Disclaimer */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-gold-deep/30 text-xs text-ink/85 font-sans leading-relaxed">
              {footballClub.academyPartnership.selectionDisclaimer}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 (PROMPT SECTION 5): PLAYER DEVELOPMENT, RECRUITMENT & EOI FORM
          ========================================================================= */}
      <section
        id="recruitment"
        className="py-24 bg-ink text-chalk grain relative border-b border-white/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Recruitment Philosophy & Channels */}
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow text-gold">
                Player Identification &amp; Recruitment
              </span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
                Talent Deserves a{' '}
                <span className="accent font-serif italic text-gold normal-case">
                  Pathway.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-chalk/80 font-sans leading-relaxed">
                {footballClub.recruitment.description}
              </p>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                  Player Recruitment Channels
                </div>
                <ul className="space-y-3">
                  {footballClub.recruitment.channels.map((ch) => (
                    <li
                      key={ch}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-chalk/85 font-sans"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-gold shrink-0 mt-0.5"
                      />
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-chalk/70 font-sans leading-relaxed space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-wider text-gold font-bold">
                  Important Recruitment Notice
                </div>
                <p>{footballClub.recruitment.disclaimer}</p>
              </div>
            </div>

            {/* Right Column: Interactive Player Expression of Interest Form */}
            <div className="lg:col-span-7">
              <div className="bg-chalk text-ink rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl space-y-6">
                <div className="border-b border-ink/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                      Aurium Football Club • Recruitment Desk
                    </span>
                    <h3 className="display text-2xl sm:text-3xl uppercase tracking-tight text-ink mt-0.5">
                      Register Your Interest
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-ink text-gold font-mono text-[10px] font-bold uppercase tracking-wider self-start">
                    Player EOI Form
                  </span>
                </div>

                {formError && (
                  <div
                    role="alert"
                    className="p-4 rounded-xl bg-red-50 border border-red-300 text-red-900 text-xs font-medium flex items-center gap-2"
                  >
                    <AlertCircle size={16} className="shrink-0 text-red-600" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="field">
                    <label htmlFor="eoi-fullName">
                      Full Name <span className="text-gold-deep">*</span>
                    </label>
                    <input
                      id="eoi-fullName"
                      type="text"
                      required
                      placeholder="Player's full legal name"
                      value={playerForm.fullName}
                      onChange={(e) =>
                        setPlayerForm((p) => ({ ...p, fullName: e.target.value }))
                      }
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="eoi-dob">
                      Date of Birth <span className="text-gold-deep">*</span>
                    </label>
                    <input
                      id="eoi-dob"
                      type="date"
                      required
                      value={playerForm.dob}
                      onChange={(e) => handleDobChange(e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="eoi-position">
                      Preferred Playing Position{' '}
                      <span className="text-gold-deep">*</span>
                    </label>
                    <select
                      id="eoi-position"
                      required
                      value={playerForm.position}
                      onChange={(e) =>
                        setPlayerForm((p) => ({ ...p, position: e.target.value }))
                      }
                    >
                      <option value="">Select position</option>
                      {footballClub.recruitment.positions.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="eoi-currentClub">
                      Current Club or Academy{' '}
                      <span className="text-gold-deep">*</span>
                    </label>
                    <input
                      id="eoi-currentClub"
                      type="text"
                      required
                      placeholder="e.g. Aurium Sports, School Team, Independent"
                      value={playerForm.currentClub}
                      onChange={(e) =>
                        setPlayerForm((p) => ({
                          ...p,
                          currentClub: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="field sm:col-span-2">
                    <label htmlFor="eoi-experience">
                      Football Experience{' '}
                      <span className="text-gold-deep">*</span>
                    </label>
                    <input
                      id="eoi-experience"
                      type="text"
                      required
                      placeholder="Years of training, leagues, school/district/academy tournaments played"
                      value={playerForm.experience}
                      onChange={(e) =>
                        setPlayerForm((p) => ({
                          ...p,
                          experience: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="eoi-phone">
                      Contact Number (Phone / WhatsApp){' '}
                      <span className="text-gold-deep">*</span>
                    </label>
                    <input
                      id="eoi-phone"
                      type="tel"
                      required
                      placeholder="98XXXXXXXX"
                      value={playerForm.phone}
                      onChange={(e) =>
                        setPlayerForm((p) => ({ ...p, phone: e.target.value }))
                      }
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="eoi-email">
                      Email Address <span className="text-gold-deep">*</span>
                    </label>
                    <input
                      id="eoi-email"
                      type="email"
                      required
                      placeholder="player@example.com"
                      value={playerForm.email}
                      onChange={(e) =>
                        setPlayerForm((p) => ({ ...p, email: e.target.value }))
                      }
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="eoi-location">
                      Location (City / District){' '}
                      <span className="text-gold-deep">*</span>
                    </label>
                    <input
                      id="eoi-location"
                      type="text"
                      required
                      placeholder="e.g. Baneshwor, Kathmandu"
                      value={playerForm.location}
                      onChange={(e) =>
                        setPlayerForm((p) => ({ ...p, location: e.target.value }))
                      }
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="eoi-footageUrl">
                      Link to Match Footage / Highlights (Optional)
                    </label>
                    <input
                      id="eoi-footageUrl"
                      type="url"
                      placeholder="https://youtube.com/... or Google Drive link"
                      value={playerForm.footageUrl}
                      onChange={(e) =>
                        setPlayerForm((p) => ({
                          ...p,
                          footageUrl: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="field sm:col-span-2">
                    <label htmlFor="eoi-introduction">
                      Short Player Introduction{' '}
                      <span className="text-gold-deep">*</span>
                    </label>
                    <textarea
                      id="eoi-introduction"
                      rows={3}
                      required
                      placeholder="Describe your playing style, key strengths, dominant foot, and football goals..."
                      value={playerForm.introduction}
                      onChange={(e) =>
                        setPlayerForm((p) => ({
                          ...p,
                          introduction: e.target.value,
                        }))
                      }
                    />
                  </div>

                  {/* Minor / Guardian Contact Section */}
                  <div className="sm:col-span-2 p-4 rounded-2xl bg-white border border-ink/10 space-y-3">
                    <label className="flex items-center gap-2.5 text-xs font-bold text-ink cursor-pointer">
                      <input
                        type="checkbox"
                        checked={playerForm.isMinor}
                        onChange={(e) =>
                          setPlayerForm((p) => ({
                            ...p,
                            isMinor: e.target.checked,
                          }))
                        }
                        className="w-4 h-4 accent-ink rounded"
                      />
                      <span>
                        Player is under 18 years of age (Minor — Parent/Guardian
                        details required)
                      </span>
                    </label>

                    <div className="field">
                      <label htmlFor="eoi-guardian">
                        Parent or Guardian Name &amp; Contact Number{' '}
                        {playerForm.isMinor && (
                          <span className="text-gold-deep">*</span>
                        )}
                      </label>
                      <input
                        id="eoi-guardian"
                        type="text"
                        required={playerForm.isMinor}
                        placeholder="Parent/Guardian full name, relationship & phone number"
                        value={playerForm.guardianContact}
                        onChange={(e) =>
                          setPlayerForm((p) => ({
                            ...p,
                            guardianContact: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Consent & Non-Guarantee Checkboxes */}
                <div className="space-y-2.5 pt-2 border-t border-ink/10 text-xs text-muted">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={playerForm.privacyConsent}
                      onChange={(e) =>
                        setPlayerForm((p) => ({
                          ...p,
                          privacyConsent: e.target.checked,
                        }))
                      }
                      className="w-4 h-4 mt-0.5 accent-ink rounded shrink-0"
                    />
                    <span>
                      <strong>Privacy &amp; Selection Acknowledgment *:</strong> I
                      consent to Aurium Football Club storing and reviewing the
                      submitted information for player recruitment evaluation, and I
                      understand that submitting an expression of interest{' '}
                      <strong>
                        does not guarantee selection, a trial invitation, player
                        registration, or a contract
                      </strong>
                      .
                    </span>
                  </label>

                  {playerForm.isMinor && (
                    <label className="flex items-start gap-2.5 cursor-pointer text-ink">
                      <input
                        type="checkbox"
                        checked={playerForm.guardianConsent}
                        onChange={(e) =>
                          setPlayerForm((p) => ({
                            ...p,
                            guardianConsent: e.target.checked,
                          }))
                        }
                        className="w-4 h-4 mt-0.5 accent-ink rounded shrink-0"
                      />
                      <span>
                        <strong>Parental / Legal Guardian Consent *:</strong> I
                        confirm that this expression of interest is submitted with
                        the explicit knowledge and consent of the player’s parent or
                        legal guardian.
                      </span>
                    </label>
                  )}
                </div>

                {/* Submission Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handlePlayerInterestSubmit('whatsapp')}
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full shadow-md transition-all"
                  >
                    <MessageCircle size={17} /> Submit via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlayerInterestSubmit('email')}
                    className="flex items-center justify-center gap-2 bg-ink hover:bg-gold hover:text-ink text-chalk font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full shadow-md transition-all"
                  >
                    <Mail size={17} /> Submit via Official Email
                  </button>
                </div>

                {formReadyMethod && (
                  <p className="text-[11px] text-emerald-700 font-medium text-center">
                    Your player expression of interest has been prepared for
                    dispatch via{' '}
                    {formReadyMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 (PROMPT SECTION 6): CLUB FOOTBALL PHILOSOPHY
          ========================================================================= */}
      <section
        id="philosophy"
        className="py-24 bg-white text-ink border-b border-ink/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-gold-deep">
                Sporting Identity &amp; Methodology
              </span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink mt-2">
                {footballClub.philosophy.heading}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted max-w-md font-sans leading-relaxed">
              Six core footballing principles shaping how Aurium Football Club
              intends to train, compete, and develop complete modern footballers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {footballClub.philosophy.principles.map((p, i) => (
              <div
                key={p.title}
                className="p-8 rounded-3xl bg-chalk border border-ink/10 hover:border-ink/30 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                      {p.subtitle}
                    </span>
                    <span className="display text-2xl text-ink/20">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 (PROMPT SECTION 12): FIRST TEAM, STAFF & FUTURE SCALABILITY
          ========================================================================= */}
      <section
        id="first-team"
        className="py-20 bg-chalk text-ink border-b border-ink/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-gold-deep">
                Club Operations &amp; Official Rosters
              </span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                First Team, Technical Staff &amp; Match Centre.
              </h2>
            </div>
            <p className="text-xs text-muted max-w-md font-sans leading-relaxed">
              Built for transparent growth: official squad profiles, coaching
              appointments, and competition fixtures are published strictly as they
              are officially confirmed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {footballClub.futureSections.map((mod) => (
              <div
                key={mod.title}
                className="p-7 rounded-3xl bg-white border border-ink/10 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-gold-deep/30 text-gold-deep font-mono text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles size={11} /> {mod.status}
                  </span>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink pt-1">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 (PROMPT SECTION 8): PARTNERSHIPS & SPONSORSHIP
          ========================================================================= */}
      <section
        id="partnerships"
        className="py-24 bg-ink text-chalk grain relative border-b border-white/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="eyebrow text-gold">
                Commercial &amp; Institutional Alliances
              </span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
                {footballClub.partnerships.heading}
              </h2>
              <div className="space-y-2 text-sm sm:text-base text-chalk/80 font-sans max-w-2xl leading-relaxed">
                {footballClub.partnerships.supportingText.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                type="button"
                onClick={() => {
                  trackClubPartnershipEnquiry('General Club Partnership', 'whatsapp');
                  openEnquiry(
                    'partner',
                    undefined,
                    'Aurium Football Club — Principal / Official Partner Enquiry'
                  );
                }}
                className={buttonClass(
                  'gold',
                  '!py-4 !px-8 text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold/25'
                )}
              >
                {footballClub.partnerships.ctaLabel}
              </button>
            </div>
          </div>

          {/* 8 Partnership Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {footballClub.partnerships.categories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-gold/40 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold block">
                    {cat.scope}
                  </span>
                  <h3 className="display text-xl uppercase tracking-tight text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    trackClubPartnershipEnquiry(cat.title, 'whatsapp');
                    openEnquiry(
                      'partner',
                      undefined,
                      `Aurium Football Club — ${cat.title}`
                    );
                  }}
                  className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold hover:text-white inline-flex items-center gap-1.5 pt-3 border-t border-white/10 transition-colors"
                >
                  Enquire About Category <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 (PROMPT SECTION 7): CLUB NEWS & UPDATES
          ========================================================================= */}
      <section
        id="news"
        className="py-24 bg-white text-ink border-b border-ink/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-gold-deep">
                Official Club Press &amp; Bulletins
              </span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink mt-2">
                Club News &amp; Updates.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted max-w-md font-sans">
              Verified announcements regarding club administration, player
              recruitment windows, C Qualifier preparation, and community
              initiatives.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {footballClub.newsCategories.map((cat) => {
              const active = selectedNewsCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedNewsCategory(cat);
                    trackClubNewsEngagement(cat);
                  }}
                  className={`px-4 py-2 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-all ${
                    active
                      ? 'bg-ink text-gold shadow-sm'
                      : 'bg-chalk text-muted hover:text-ink border border-ink/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Articles Grid or Verified Empty State */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-3xl bg-chalk border border-ink/10 overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                      {article.category} • {article.publishedAt}
                    </span>
                    <h3 className="display text-2xl uppercase text-ink">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted font-sans leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-chalk border border-ink/15 p-10 sm:p-14 text-center max-w-3xl mx-auto space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-ink text-gold flex items-center justify-center mx-auto">
                <Newspaper size={24} />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-ink/10 text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                Category: {selectedNewsCategory}
              </div>
              <h3 className="display text-2xl sm:text-3xl uppercase tracking-tight text-ink">
                Official Club Bulletins Will Be Published Here
              </h3>
              <p className="text-xs sm:text-sm text-muted font-sans max-w-xl mx-auto leading-relaxed">
                Aurium Football Club maintains a strict policy of publishing only
                verified club announcements, approved player trial dates, and
                confirmed competition updates. Follow{' '}
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink font-bold underline hover:text-gold-deep"
                >
                  {site.socialHandle}
                </a>{' '}
                or register your interest above to receive direct notifications when
                official recruitment and C Qualifier bulletins are released.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#recruitment"
                  className={buttonClass('ink', '!py-3 !px-6 text-xs')}
                >
                  Register Player Interest
                </a>
                <Link
                  href="/announcements"
                  onClick={() =>
                    trackEcosystemCrossClick('club_to_sports', 'news_empty_state')
                  }
                  className={buttonClass('outline-ink', '!py-3 !px-6 text-xs')}
                >
                  View Aurium Sports Academy Notices →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          CLOSING ECOSYSTEM BANNER
          ========================================================================= */}
      <section className="py-20 bg-ink text-chalk grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Aurium Sports × Aurium Football Club
            </span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              Aurium Sports Develops the Foundation.{' '}
              <span className="accent font-serif italic text-gold normal-case">
                Aurium Football Club Builds the Competitive Pathway.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-chalk/75 font-sans leading-relaxed">
              Together, two complementary organisations working to contribute to the
              long-term future of Nepali football—from a child’s first steps on the
              pitch to the ambition of competing on the national stage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="#recruitment"
              className={buttonClass('gold', '!py-4 !px-8 text-xs')}
            >
              Register Player Interest
            </a>
            <Link
              href="/programs"
              onClick={() =>
                trackEcosystemCrossClick('club_to_sports', 'closing_banner')
              }
              className={buttonClass('outline-chalk', '!py-4 !px-8 text-xs')}
            >
              Explore Academy Programmes →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
