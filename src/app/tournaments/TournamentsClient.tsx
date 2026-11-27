'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';

const titanSpace = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const titanJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const titanMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});
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

          {/* 1. AIC TITANS CUP — INDEPENDENT "THE TITANS ARENA" SPORTS BRAND PANEL */}
          {showAic && (
            <div
              className={`${titanJakarta.className} rounded-3xl border-2 border-[#C7F464]/80 bg-[#101D32] text-white overflow-hidden shadow-[0_24px_60px_rgba(9,18,32,0.75)] relative`}
            >
              {/* Top Independent Brand Identity Ribbon */}
              <div className="bg-[#091220] border-b border-white/10 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px]">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#C7F464]" />
                  <span className={`${titanMono.className} font-bold uppercase tracking-[0.2em] text-[#C7F464]`}>
                    INDEPENDENT CORPORATE SPORTS PROPERTY · THE TITANS ARENA
                  </span>
                </div>
                <div className="text-[#BFC8D3] font-semibold">
                  Organized by <strong className="text-white">Aurium Sports</strong> · Official Portal:{" "}
                  <a href="/aic-titans-cup" className="text-[#C7F464] underline font-bold">
                    aictitanscup.auriumsports.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Arena Banner & Titanium/Lime Official Crest */}
                <div className="lg:col-span-5 relative min-h-[380px] p-7 sm:p-9 flex flex-col justify-between overflow-hidden bg-[#091220] border-b lg:border-b-0 lg:border-r border-white/10">
                  <img
                    src="/images/tournaments/aic-titans-banner.jpg"
                    alt="AIC Titans Cup Official Arena Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091220] via-[#101D32]/85 to-[#091220]/70" />

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`${titanMono.className} px-3 py-1 rounded-full bg-[#C7F464] text-[#101D32] text-[10px] font-bold uppercase tracking-widest`}
                    >
                      Nepal&apos;s Banking Football Ecosystem
                    </span>
                    <span
                      className={`${titanMono.className} px-3 py-1 rounded-full bg-[#FF783D]/20 border border-[#FF783D] text-[#FF783D] text-[10px] font-bold uppercase tracking-widest`}
                    >
                      Status: {aicData.status} · Reg: {aicData.registrationStatus}
                    </span>
                  </div>

                  <div className="relative z-10 my-6 flex items-center gap-4">
                    <img
                      src="/logos/parent-crest.svg"
                      alt="AIC Titans Cup Official Titanium & Electric Lime Crest"
                      className="w-24 h-28 object-contain shrink-0 drop-shadow-[0_10px_25px_rgba(199,244,100,0.22)]"
                    />
                    <div className="space-y-1.5">
                      <div
                        className={`${titanMono.className} text-[11px] font-bold uppercase tracking-[0.2em] text-[#C7F464]`}
                      >
                        WHERE BANKERS BECOME TITANS
                      </div>
                      <h3
                        className={`${titanSpace.className} text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight`}
                      >
                        {aicData.tournamentName}
                      </h3>
                      <p className="text-xs text-[#BFC8D3] font-medium">
                        {aicData.centralTagline} · 5 Competitions · 105 NRB-Licensed BFIs
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 rounded-2xl bg-[#101D32]/90 border border-white/15 p-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="text-[#BFC8D3] block text-[10px] uppercase tracking-wider font-bold">
                        Next Scheduled Championship
                      </span>
                      <strong className="text-[#C7F464] font-bold">
                        {aicData.nextScheduledCompetition.name}
                      </strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[#BFC8D3] block text-[10px] uppercase tracking-wider font-bold">
                        Match Window
                      </span>
                      <strong className={`${titanMono.className} text-white`}>
                        {aicData.nextScheduledCompetition.nepaliMonthWindow}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Right Column: 5-Competition Architecture & Distinct Titans Arena CTAs */}
                <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6 bg-[#101D32]">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`${titanMono.className} text-xs font-bold uppercase tracking-widest text-[#C7F464]`}
                      >
                        5 COMPETITIONS · 7 REGIONAL HUBS · 7m LEAGUE / 10m KNOCKOUT HALVES
                      </span>
                      <span
                        className={`${titanMono.className} text-xs text-[#BFC8D3] bg-[#091220] px-3 py-1 rounded-lg border border-white/10`}
                      >
                        Gentlemen NPR 25,000 · Ladies NPR 15,000
                      </span>
                    </div>

                    <p className="text-sm text-[#F7F8FA]/90 leading-relaxed">
                      An independently branded championship arena and outdoor sporting holiday created for Nepal&apos;s banking and financial services workforce. Four major standalone NRB category championships (<strong className="text-white">Type A Commercial, Type B Development, Type C Finance, Type D Microfinance</strong>) crown their own division Champions and Runners-Up—who also earn qualification into the fifth grand finale: <strong className="text-[#C7F464]">Clash of the Titans – The Bankers Championship</strong>.
                    </p>

                    {/* 5 Competitions Grid with Distinct Class Accent Colors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2.5 pt-2">
                      {aicData.fiveCompetitions.map((c) => {
                        const accentMap: Record<string, { border: string; badge: string; dot: string }> = {
                          'type-a': {
                            border: 'hover:border-[#2563EB] border-[#2563EB]/40',
                            badge: 'text-[#60A5FA]',
                            dot: 'bg-[#2563EB]',
                          },
                          'type-b': {
                            border: 'hover:border-[#10B981] border-[#10B981]/40',
                            badge: 'text-[#34D399]',
                            dot: 'bg-[#10B981]',
                          },
                          'type-c': {
                            border: 'hover:border-[#8B5CF6] border-[#8B5CF6]/40',
                            badge: 'text-[#A78BFA]',
                            dot: 'bg-[#8B5CF6]',
                          },
                          'type-d': {
                            border: 'hover:border-[#FF783D] border-[#FF783D]/40',
                            badge: 'text-[#FF783D]',
                            dot: 'bg-[#FF783D]',
                          },
                          'clash-of-the-titans': {
                            border: 'hover:border-[#C7F464] border-[#C7F464]/60',
                            badge: 'text-[#C7F464]',
                            dot: 'bg-[#C7F464]',
                          },
                        };
                        const style = accentMap[c.slug] || accentMap['clash-of-the-titans'];
                        return (
                          <a
                            key={c.slug}
                            href={c.url}
                            className={`p-3.5 rounded-2xl bg-[#091220] hover:bg-[#091220]/80 border ${style.border} transition-all flex flex-col justify-between group`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1">
                                <span
                                  className={`${titanMono.className} text-[10px] font-bold uppercase ${style.badge}`}
                                >
                                  {c.nepaliMonthWindow}
                                </span>
                                <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                              </div>
                              <div
                                className={`${titanSpace.className} text-sm font-bold text-white mt-1.5 group-hover:text-[#C7F464] transition-colors leading-snug`}
                              >
                                {c.name}
                              </div>
                              <div className="text-[11px] text-[#BFC8D3] mt-1 leading-snug">
                                {c.subtitle}
                              </div>
                            </div>
                            <div
                              className={`${titanMono.className} mt-3 pt-2 border-t border-white/10 text-[10px] font-bold text-[#C7F464] flex items-center justify-between`}
                            >
                              <span>{c.tournamentStatus}</span>
                              <ArrowUpRight size={12} />
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-[#BFC8D3]">
                      Prize Pool: <strong className="text-white">Min. 50% (70:30 Winner:Runner-Up)</strong> · Local CSR:{" "}
                      <strong className="text-[#C7F464]">Girls &amp; Licensed Coach Jobs</strong>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="/aic-titans-cup/register"
                        className="py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-extrabold uppercase tracking-wider transition-colors"
                      >
                        Register BFI Squad
                      </a>
                      <a
                        href="/aic-titans-cup"
                        className="py-3.5 px-7 rounded-xl bg-[#FF783D] hover:bg-[#e8662c] text-white text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-[#FF783D]/25 transition-all"
                      >
                        Explore Titans Cup <ArrowUpRight size={16} />
                      </a>
                    </div>
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

                  <h3 className="display text-2xl uppercase text-ink mb-3">
                    {comp.title}
                  </h3>

                  <p className="text-sm text-muted font-sans leading-relaxed mb-6">
                    {comp.desc}
                  </p>

                  <div className="space-y-2.5 pt-3 border-t border-ink/10">
                    {comp.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-ink/85 font-sans">
                        <CheckCircle2 size={15} className="text-gold-deep shrink-0" />
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
