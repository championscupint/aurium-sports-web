'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import {
  Activity,
  Shield,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Trophy,
  Users,
  ArrowUpRight,
  Calendar,
  MapPin,
} from 'lucide-react';
import { NextSportzCardShowcase } from '@/components/NextSportzCard';
import { TournamentStatsCenter } from '@/components/TournamentStatsCenter';

type StatusFilter = 'ALL' | 'UPCOMING' | 'LIVE' | 'PAST';
type CategoryFilter = 'ALL' | 'CORPORATE' | 'YOUTH' | 'INTERNATIONAL';

interface AicPublicSummary {
  tournamentName: string;
  seasonLabel: string;
  centralTagline: string;
  status: 'UPCOMING' | 'LIVE' | 'COMPLETED';
  registrationStatus: string;
  nextScheduledCompetition: {
    name: string;
    subtitle: string;
    nepaliMonthWindow: string;
    status: string;
    registrationStatus: string;
  };
  fiveCompetitions: Array<{
    slug: string;
    code: string;
    name: string;
    subtitle: string;
    nrbClass: string;
    eligibleInstitutionCount: number;
    nepaliMonthWindow: string;
    registrationStatus: string;
    tournamentStatus: string;
    url: string;
  }>;
}

const DEFAULT_AIC_SUMMARY: AicPublicSummary = {
  tournamentName: 'AIC Titans Cup',
  seasonLabel: 'Annual Banking Football & Futsal Ecosystem · Shrawan, Kartik & Magh',
  centralTagline: 'YOUR GAME. YOUR PEOPLE. YOUR ESCAPE.',
  status: 'UPCOMING',
  registrationStatus: 'OPEN',
  nextScheduledCompetition: {
    name: 'AIC Titans Cup – Type A & Type B',
    subtitle: 'Commercial & Development Banks Championships',
    nepaliMonthWindow: 'Shrawan (July / August)',
    status: 'UPCOMING',
    registrationStatus: 'OPEN',
  },
  fiveCompetitions: [
    {
      slug: 'type-a',
      code: 'TYPE_A',
      name: 'AIC Titans Cup – Type A',
      subtitle: '20 Class A Commercial Banks',
      nrbClass: 'NRB Class A',
      eligibleInstitutionCount: 20,
      nepaliMonthWindow: 'Shrawan',
      registrationStatus: 'OPEN',
      tournamentStatus: 'UPCOMING',
      url: '/aic-titans-cup/competitions/type-a',
    },
    {
      slug: 'type-b',
      code: 'TYPE_B',
      name: 'AIC Titans Cup – Type B',
      subtitle: '17 Class B Development Banks',
      nrbClass: 'NRB Class B',
      eligibleInstitutionCount: 17,
      nepaliMonthWindow: 'Shrawan',
      registrationStatus: 'OPEN',
      tournamentStatus: 'UPCOMING',
      url: '/aic-titans-cup/competitions/type-b',
    },
    {
      slug: 'type-c',
      code: 'TYPE_C',
      name: 'AIC Titans Cup – Type C',
      subtitle: '17 Class C Finance Companies',
      nrbClass: 'NRB Class C',
      eligibleInstitutionCount: 17,
      nepaliMonthWindow: 'Kartik',
      registrationStatus: 'OPEN',
      tournamentStatus: 'UPCOMING',
      url: '/aic-titans-cup/competitions/type-c',
    },
    {
      slug: 'type-d',
      code: 'TYPE_D',
      name: 'AIC Titans Cup – Type D',
      subtitle: '51 Class D Microfinance (7 Hubs)',
      nrbClass: 'NRB Class D',
      eligibleInstitutionCount: 51,
      nepaliMonthWindow: 'Kartik',
      registrationStatus: 'OPEN',
      tournamentStatus: 'UPCOMING',
      url: '/aic-titans-cup/competitions/type-d',
    },
    {
      slug: 'clash-of-the-titans',
      code: 'CLASH',
      name: 'Clash of the Titans',
      subtitle: 'The Bankers Championship (8 Qualifiers)',
      nrbClass: 'Top 2 / Class',
      eligibleInstitutionCount: 8,
      nepaliMonthWindow: 'Magh (6 Days)',
      registrationStatus: 'QUALIFICATION_ONLY',
      tournamentStatus: 'UPCOMING',
      url: '/aic-titans-cup/competitions/clash-of-the-titans',
    },
  ],
};

export function TournamentsClient() {
  const { openEnquiry } = useEnquiry();
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('ALL');
  const [aicData, setAicData] = useState<AicPublicSummary>(DEFAULT_AIC_SUMMARY);

  useEffect(() => {
    fetch('/api/public/summary')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && data.tournamentName) {
          setAicData({
            ...data,
            fiveCompetitions: (data.fiveCompetitions || []).map((c: { slug: string; url: string }) => ({
              ...c,
              url: `/aic-titans-cup/competitions/${c.slug}`,
            })),
          });
        }
      })
      .catch(() => {
        // Use verified default summary
      });
  }, []);

  const showAic =
    (statusFilter === 'ALL' ||
      (statusFilter === 'UPCOMING' && aicData.status === 'UPCOMING') ||
      (statusFilter === 'LIVE' && aicData.status === 'LIVE') ||
      (statusFilter === 'PAST' && aicData.status === 'COMPLETED')) &&
    (categoryFilter === 'ALL' || categoryFilter === 'CORPORATE');

  const showNyc =
    (statusFilter === 'ALL' || statusFilter === 'UPCOMING') &&
    (categoryFilter === 'ALL' ||
      categoryFilter === 'YOUTH' ||
      categoryFilter === 'INTERNATIONAL');

  const competitions = [
    {
      title: 'Aurium Mini League',
      edition: '3rd Edition Running',
      category: 'Grassroots Youth League',
      status: 'LIVE' as const,
      filterCat: 'YOUTH' as const,
      desc: 'Our flagship seasonal league running over several months. Provides young athletes from schools and clubs with regular, competitive weekend matchplay under official refereeing, structured tables, and fair play standards.',
      highlights: [
        'Age groups: U10, U12, U14, U16',
        'Home and away round-robin format',
        'Official ANFA-certified referees',
        'Live standings and top scorer tracking',
      ],
      cta: 'Register Team',
    },
    {
      title: 'Aurium International Cup',
      edition: 'School & Open Editions',
      category: 'Premier Cup Tournament',
      status: 'UPCOMING' as const,
      filterCat: 'INTERNATIONAL' as const,
      desc: 'High-stakes cup competition featuring group stages, knockouts, and prestigious championship silverware. Draws teams from leading Kathmandu schools, collegiate sports clubs, and independent academies.',
      highlights: [
        'Group Stage into Cup & Plate knockouts',
        'Live YouTube streaming of semi-finals & finals',
        'Man of the Match & MVP trophies',
        'NextSportz digital player stats integration',
      ],
      cta: 'Register Team',
    },
    {
      title: 'Corporate & Institutional Cups',
      edition: 'Custom Tournaments',
      category: 'B2B & Alumni Leagues',
      status: 'UPCOMING' as const,
      filterCat: 'CORPORATE' as const,
      desc: 'Turnkey tournament delivery for corporate sponsors, tech firms, banks, and alumni organizations. Aurium handles pitch booking, fixtures, referees, medical staff, jerseys, and live broadcasting.',
      highlights: [
        'Full turnkey event management',
        'Professional futsal or 7A pitches',
        'Branded jerseys and digital media coverage',
        'Gala dinner & award presentations',
      ],
      cta: 'Plan A Tournament',
    },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Competitive Pathways</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Tournaments &amp; Leagues.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Training only becomes meaningful when tested under real competitive pressure. Explore Aurium Sports’ flagship corporate banking ecosystem (<strong>AIC Titans Cup</strong>), international youth futsal championship (<strong>Nepal Youth Cup</strong>), and seasonal grassroots leagues.
          </p>

          {/* Filter Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-gold mr-1">
                Status:
              </span>
              {(
                [
                  { id: 'ALL', label: 'All' },
                  { id: 'UPCOMING', label: 'Upcoming Tournaments' },
                  { id: 'LIVE', label: 'Live Tournaments' },
                  { id: 'PAST', label: 'Past Tournaments' },
                ] as const
              ).map((st) => (
                <button
                  key={st.id}
                  onClick={() => setStatusFilter(st.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    statusFilter === st.id
                      ? 'bg-gold text-ink'
                      : 'bg-white/10 text-chalk/80 hover:bg-white/15'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-gold mr-1">
                Category:
              </span>
              {(
                [
                  { id: 'ALL', label: 'All Categories' },
                  { id: 'CORPORATE', label: 'Corporate & Institutional' },
                  { id: 'YOUTH', label: 'Youth Tournaments' },
                  { id: 'INTERNATIONAL', label: 'International Tournaments' },
                ] as const
              ).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    categoryFilter === cat.id
                      ? 'bg-white text-ink'
                      : 'bg-white/10 text-chalk/80 hover:bg-white/15'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FLAGSHIPTOURNAMENT DIRECTORY: AIC TITANS CUP & NEPAL YOUTH CUP 2027
      ====================================================================== */}
      <section className="py-16 bg-ink text-chalk border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-gold">Dedicated Championship Properties</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white mt-1">
                Flagship Aurium Tournament Ecosystems.
              </h2>
            </div>
            <p className="text-xs text-chalk/70 font-sans max-w-md">
              Each flagship property operates its own dedicated competition portal, registration engine, and verified statistics database.
            </p>
          </div>

          {/* 1. AIC TITANS CUP — FLAGSHIP CORPORATE & BANKING TOURNAMENT */}
          {showAic && (
            <div className="rounded-3xl border-2 border-gold/70 bg-[#071120] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Banner & Official Crest */}
                <div className="lg:col-span-5 relative min-h-[340px] p-8 flex flex-col justify-between overflow-hidden">
                  <img
                    src="/images/tournaments/aic-titans-banner.jpg"
                    alt="AIC Titans Cup Official Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/70 to-transparent" />

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-gold text-ink font-mono text-[10px] font-bold uppercase tracking-widest">
                      Corporate &amp; Institutional Flagship
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-widest">
                      Status: {aicData.status} · Reg: {aicData.registrationStatus}
                    </span>
                  </div>

                  <div className="relative z-10 my-6 flex items-center gap-4">
                    <img
                      src="/images/tournaments/parent-crest.svg"
                      alt="AIC Titans Cup Official Crest"
                      className="w-24 h-28 object-contain shrink-0"
                    />
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold">
                        {aicData.centralTagline}
                      </div>
                      <h3 className="display text-3xl sm:text-4xl uppercase text-white mt-1">
                        {aicData.tournamentName}
                      </h3>
                      <p className="text-xs text-chalk/80 font-sans mt-1">
                        Nepal’s Five-Competition Banking Football &amp; Futsal Ecosystem
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 border-t border-white/15 pt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-chalk/80 font-sans">
                    <span>
                      Next Competition: <strong className="text-gold">{aicData.nextScheduledCompetition.name}</strong>
                    </span>
                    <span>
                      Window: <strong className="text-white">{aicData.nextScheduledCompetition.nepaliMonthWindow}</strong>
                    </span>
                  </div>
                </div>

                {/* Five-Competition Structure & Dedicated Website Link */}
                <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold">
                        5 COMPETITIONS · 105 NRB-LICENSED BFIs · 7 REGIONAL HUBS
                      </span>
                      <span className="text-xs font-mono text-chalk/70">
                        Gentlemen (NPR 25,000) · Ladies Promotional (NPR 15,000)
                      </span>
                    </div>

                    <p className="text-sm text-chalk/90 font-sans leading-relaxed">
                      Designed as a sporting holiday and competitive championship for Nepal’s banking fraternity. Four individual NRB class qualifying championships (<strong>Type A Commercial, Type B Development, Type C Finance, Type D Microfinance</strong>) qualify their verified Champion and Runner-Up into the fifth competition: <strong>Clash of the Titans – The Bankers Championship</strong>. Includes local-level Sports CSR empowering underprivileged girls and employing local licensed football coaches across all 7 Provinces.
                    </p>

                    {/* 5 Competitions Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-2">
                      {aicData.fiveCompetitions.map((c) => (
                        <a
                          key={c.slug}
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-[10px] font-mono font-bold uppercase text-gold">
                              {c.nepaliMonthWindow}
                            </div>
                            <div className="font-display text-sm uppercase text-white mt-0.5">
                              {c.name}
                            </div>
                            <div className="text-[11px] text-chalk/70 font-sans mt-0.5">
                              {c.subtitle}
                            </div>
                          </div>
                          <div className="mt-2 pt-1.5 border-t border-white/10 text-[10px] font-mono font-bold text-emerald-300">
                            {c.tournamentStatus}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-chalk/70 font-sans">
                      Official Portal: <strong className="text-white">www.auriumsports.com/aic-titans-cup</strong> &amp; <strong className="text-gold">aictitanscup.auriumsports.com</strong>
                    </div>
                    <a
                      href="/aic-titans-cup"
                      className={buttonClass('gold', '!py-3.5 !px-7 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2')}
                    >
                      Explore AIC Titans Cup <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. NEPAL YOUTH CUP — INTERNATIONAL YOUTH TOURNAMENT (2027 EDITION) */}
          {showNyc && (
            <div className="rounded-3xl border border-white/20 bg-[#0A1324] overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Banner & Official Logo */}
                <div className="lg:col-span-5 relative min-h-[320px] p-8 flex flex-col justify-between overflow-hidden">
                  <img
                    src="/images/tournaments/nyc-banner.jpg"
                    alt="Nepal Youth Cup Official Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/65 to-transparent" />

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-white text-ink font-mono text-[10px] font-bold uppercase tracking-widest">
                      Youth &amp; International Tournament
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-widest">
                      Status: UPCOMING · 9–10 Jan 2027
                    </span>
                  </div>

                  <div className="relative z-10 my-6 flex items-center gap-4">
                    <img
                      src="/images/tournaments/nyc-logo.png"
                      alt="Nepal Youth Cup Official Logo"
                      className="w-24 h-24 object-contain shrink-0"
                    />
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold">
                        NEXTSPORTZ × AURIUM SPORTS
                      </div>
                      <h3 className="display text-3xl sm:text-4xl uppercase text-white mt-1">
                        Nepal Youth Cup
                      </h3>
                      <p className="text-xs text-chalk/80 font-sans mt-1">
                        2027 Edition · 9–10 January 2027 · Kathmandu, Nepal
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 border-t border-white/15 pt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-chalk/80 font-sans">
                    <span>
                      Categories: <strong className="text-gold">U12 Boys &amp; U14 Boys</strong>
                    </span>
                    <span>
                      Format: <strong className="text-white">5v5 Futsal</strong>
                    </span>
                  </div>
                </div>

                {/* Verified 2027 Details & Direct Link to nepalyouthcup.com */}
                <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold">
                      VERIFIED 2027 EDITION · SCHOOLS, ACADEMIES &amp; CLUBS
                    </span>

                    <p className="text-sm text-chalk/90 font-sans leading-relaxed">
                      An international youth football and futsal competition bringing together schools, academies and clubs to create opportunities for grassroots development, cross-border sporting exchange, competitive exposure and digital player performance records.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-sans">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-chalk/60 text-[11px]">Dates</div>
                        <div className="font-bold text-white mt-0.5">9–10 January 2027</div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-chalk/60 text-[11px]">Venue</div>
                        <div className="font-bold text-white mt-0.5">
                          Galaxy Public School Sports Complex, Gyaneshwor, Kathmandu
                        </div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-chalk/60 text-[11px]">Categories &amp; Format</div>
                        <div className="font-bold text-gold mt-0.5">
                          U12 Boys &amp; U14 Boys · 5v5 Futsal
                        </div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-chalk/60 text-[11px]">Squad Size</div>
                        <div className="font-bold text-white mt-0.5">
                          Up to 10 Players, 1 Coach &amp; 1 Manager
                        </div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-chalk/60 text-[11px]">Entry Fee &amp; Matches</div>
                        <div className="font-bold text-emerald-300 mt-0.5">
                          NPR 8,000 / Team · Min. 4 Matches Guaranteed
                        </div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-chalk/60 text-[11px]">Digital Integration</div>
                        <div className="font-bold text-gold mt-0.5">
                          NextSportz Digital Football Passport &amp; Player Stats
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-chalk/70 font-sans">
                      Official Website: <strong className="text-white">https://nepalyouthcup.com/</strong>
                    </div>
                    <a
                      href="https://nepalyouthcup.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClass('gold', '!py-3.5 !px-7 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2')}
                    >
                      Explore Tournament <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Tournament Hero Photo */}
      <section className="py-12 bg-chalk border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] min-h-[320px] rounded-3xl overflow-hidden border border-ink/10 shadow-lg">
            <Image
              src="/images/tournament.jpg"
              alt="Aurium team celebrating trophy win with gold confetti in Kathmandu"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                  Next Up: Aurium Mini League 2026
                </span>
                <h3 className="display text-2xl sm:text-4xl uppercase text-white mt-1">
                  School &amp; Club Team Entries Open
                </h3>
              </div>
              <button
                onClick={() => openEnquiry('register', 'tournaments-leagues', 'Aurium Mini League')}
                className={buttonClass('gold', '!py-3 !px-6 text-xs')}
              >
                Register Your Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Cards */}
      <section className="py-20 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="eyebrow text-gold-deep">Our Competitive Portfolio</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                Leagues, Cups &amp; Corporate Events.
              </h2>
            </div>
            <p className="text-muted text-xs max-w-sm font-sans">
              All competitions strictly adhere to FIFA and ANFA grassroots rules with certified officiating and player health standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitions.map((comp) => (
              <div
                key={comp.title}
                className="bg-chalk p-8 rounded-3xl border border-ink/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-ink text-gold font-mono text-[10px] font-bold uppercase rounded-full">
                      {comp.edition}
                    </span>
                    <span className="text-xs font-mono font-semibold text-muted">
                      {comp.category}
                    </span>
                  </div>

                  <h3 className="display text-2xl uppercase tracking-tight text-ink mb-3">
                    {comp.title}
                  </h3>

                  <p className="text-xs text-muted font-sans leading-relaxed mb-6">
                    {comp.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-ink/10">
                    {comp.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-ink/80 font-sans">
                        <CheckCircle2 size={14} className="text-gold-deep shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-ink/10 flex items-center justify-between">
                  <button
                    onClick={() => openEnquiry('register', 'tournaments-leagues', comp.title)}
                    className="w-full py-3 bg-ink text-gold hover:bg-gold hover:text-ink font-mono text-xs font-bold uppercase rounded-full tracking-wider transition-all"
                  >
                    {comp.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Tournament Records & Stats Center */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TournamentStatsCenter />
        </div>
      </section>

      {/* NextSportz Digital Player Card Showcase */}
      <section className="py-24 bg-ink text-chalk grain relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles size={14} /> Official Tech &amp; Sports Science Affiliation
            </div>
            <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
              Every Player Gets A <br />
              <span className="accent font-serif italic text-gold normal-case">NextSportz Digital Card.</span>
            </h2>
            <p className="text-base text-chalk/80 font-sans leading-relaxed">
              Aurium Sports integrates directly with **NextSportz** to track every drill, match, and milestone. Below is a live interactive preview of how our academy players build their verified athletic passport.
            </p>
          </div>

          <NextSportzCardShowcase />

          {/* Technology Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                <BarChart3 size={20} />
              </div>
              <h4 className="display text-xl uppercase tracking-wide text-white">
                Training Potential Rating (TPR)
              </h4>
              <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                Rather than arbitrary opinions, player development is scored across 6 technical and physical dimensions using weighted session completion, coach ratings, and matchday performances.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                <Shield size={20} />
              </div>
              <h4 className="display text-xl uppercase tracking-wide text-white">
                Dispute-Free League Operations
              </h4>
              <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                Paper scorecards are eliminated. Team rosters, ANFA referee verifications, cautions, substitutions, and tiebreak math are recorded digitally in real time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                <Users size={20} />
              </div>
              <h4 className="display text-xl uppercase tracking-wide text-white">
                International Scout Visibility
              </h4>
              <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                Whether applying for the Dana Cup in Denmark, regional AFC trials, or school sports scholarships, players carry a permanent, credible digital record of their achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Tournament Registration Call to Action */}
      <section className="py-20 bg-white text-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="eyebrow text-gold-deep justify-center">Host or Join A League</span>
          <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
            Ready To Enter Your Team?
          </h2>
          <p className="text-muted text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Registrations for **AIC Titans Cup**, **Nepal Youth Cup 2027**, **Aurium Mini League**, and **Aurium International Cup** are open for banks, schools, youth clubs, and corporate teams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openEnquiry('register', 'tournaments-leagues', 'Upcoming Tournament Entry')}
              className={buttonClass('gold', '!py-3.5 !px-8 text-xs font-bold uppercase tracking-wider')}
            >
              Register Team Online
            </button>
            <button
              onClick={() => openEnquiry('inquiry', 'tournaments-leagues', 'Tournament Management Inquiry')}
              className={buttonClass('outline-ink', '!py-3.5 !px-8 text-xs font-bold uppercase tracking-wider')}
            >
              Organize A Corporate Cup
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
