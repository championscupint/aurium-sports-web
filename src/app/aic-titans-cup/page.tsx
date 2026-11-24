"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { RoadToTheClashInteractive } from "@/components/aic/RoadToTheClashInteractive";
import {
  Trophy,
  Sun,
  Users,
  HeartPulse,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Download,
} from "lucide-react";

const WHY_PARTICIPATE_PILLARS = [
  {
    code: "01 · COMPETE",
    title: "Peer-Protected NRB Class Football",
    desc: "Compete strictly within your regulatory peer tier (Types A, B, C, and D) with fast 7-minute league halves and 10-minute knockout halves before the top two qualify for Clash of the Titans.",
    icon: Trophy,
    badgeBg: "bg-[#2563EB] text-white",
  },
  {
    code: "02 · RECHARGE",
    title: "A Sporting Holiday Reset",
    desc: "Step away from month-end targets, audits, and compliance stress into an outdoor festival with recovery lounges, hydration bars, music, and colleague camaraderie.",
    icon: Sun,
    badgeBg: "bg-[#FF783D] text-white",
  },
  {
    code: "03 · CONNECT",
    title: "105-BFI Executive & Branch Fraternity",
    desc: "Build lasting friendships across Nepal's 20 Commercial Banks, 17 Development Banks, 17 Finance Companies, and 51 Microfinance Institutions across 7 Regional Hubs.",
    icon: Users,
    badgeBg: "bg-[#10B981] text-slate-950",
  },
  {
    code: "04 · LIVE HEALTHY",
    title: "Corporate Wellness & Women in Sport",
    desc: "Champion cardiovascular wellness and active lifestyles, featuring a 40% promotional Ladies Division entry fee (NPR 15,000 vs. NPR 25,000 Gentlemen).",
    icon: HeartPulse,
    badgeBg: "bg-[#8B5CF6] text-white",
  },
  {
    code: "05 · GIVE BACK",
    title: "Local Girls Football & Licensed Coach Jobs",
    desc: "Every BFI's local CSR grant (NPR 100k–500k by class) stays in its operating districts to equip underprivileged youth (50%+ girls) and employ local licensed coaches.",
    icon: HeartHandshake,
    badgeBg: "bg-[#C7F464] text-[#101D32]",
  },
];

export default function HomePage() {
  const { store } = useEcosystem();
  const [selectedWindow, setSelectedWindow] = useState<"ALL" | "SHRAWAN" | "KARTIK" | "MAGH">("ALL");

  const qualifyingLeagues = store.competitions.filter((c) => !c.isChampionship);
  const clashComp = store.competitions.find((c) => c.isChampionship)!;

  return (
    <div className="min-h-screen">
      {/* =====================================================================
          1. HERO SECTION — "WHERE BANKERS BECOME TITANS." (MIDNIGHT NAVY ARENA)
      ====================================================================== */}
      <section className="relative bg-[#101D32] text-[#F7F8FA] py-16 sm:py-24 lg:py-28 border-b border-[#BFC8D3]/20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/turf-match-action.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091220] via-[#101D32]/92 to-[#101D32]/75" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#162642] border border-[#C7F464]/45">
                <span className="w-2 h-2 rounded-full bg-[#C7F464]" />
                <span className="font-titan-mono text-xs font-bold uppercase tracking-wider text-[#C7F464]">
                  THE TITANS ARENA · EDITION STATUS: {store.edition.status}
                </span>
              </div>

              <h1 className="font-titan-display font-extrabold text-4xl sm:text-6xl lg:text-[68px] text-[#F7F8FA] tracking-tight leading-[1.04]">
                WHERE BANKERS BECOME{" "}
                <span className="text-[#C7F464]">TITANS.</span>
              </h1>

              <p className="text-base sm:text-xl text-[#BFC8D3] max-w-2xl leading-relaxed">
                Five competitions. One banking fraternity. A celebration of competition, connection and a healthier way to live.
              </p>

              <div className="font-titan-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF783D]">
                WORK HARD. PLAY HARD. RECONNECT. RECHARGE. RISE AS TITANS.
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/aic-titans-cup/register"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#FF783D] hover:bg-[#FF5E1A] text-white font-titan-display font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-[0_10px_28px_rgba(255,120,61,0.38)] transition-all"
                >
                  <Trophy className="w-4 h-4 shrink-0" />
                  <span>REGISTER YOUR INSTITUTION</span>
                </Link>
                <a
                  href="#five-competitions"
                  className="inline-flex items-center justify-center gap-2 bg-[#162642] hover:bg-[#1e3256] text-[#F7F8FA] border border-[#BFC8D3]/30 font-titan-display font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-xl transition-all"
                >
                  <span>EXPLORE COMPETITIONS</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Hero Right Visual & Telemetry Panel */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#091220]/95 border border-[#BFC8D3]/25 p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center gap-4 pb-5 border-b border-[#BFC8D3]/15">
                  <img
                    src="/logos/parent-crest.svg"
                    alt="AIC Titans Cup Official Crest"
                    width={64}
                    height={72}
                    className="w-16 h-18 object-contain shrink-0"
                  />
                  <div>
                    <div className="font-titan-mono text-[11px] font-bold uppercase tracking-wider text-[#C7F464]">
                      OFFICIAL TOURNAMENT TELEMETRY
                    </div>
                    <h2 className="font-titan-display font-bold text-xl text-[#F7F8FA] mt-0.5">
                      AIC Titans Cup Ecosystem
                    </h2>
                    <p className="text-xs text-[#BFC8D3]">
                      Verified NRB BAFIA Institutional Architecture
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-[#101D32] border border-[#BFC8D3]/15">
                    <div className="text-[#BFC8D3] text-[11px]">Architecture</div>
                    <div className="font-titan-display font-bold text-base text-[#F7F8FA] mt-0.5">
                      5 Competitions
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#101D32] border border-[#BFC8D3]/15">
                    <div className="text-[#BFC8D3] text-[11px]">NRB Universe</div>
                    <div className="font-titan-mono font-bold text-base text-[#C7F464] mt-0.5">
                      105 Licensed BFIs
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#101D32] border border-[#BFC8D3]/15">
                    <div className="text-[#BFC8D3] text-[11px]">Entry Fee (G / L)</div>
                    <div className="font-titan-mono font-bold text-base text-[#FF783D] mt-0.5">
                      NPR 25K / 15K
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#101D32] border border-[#BFC8D3]/15">
                    <div className="text-[#BFC8D3] text-[11px]">Match Clock</div>
                    <div className="font-titan-mono font-bold text-base text-[#F7F8FA] mt-0.5">
                      7m Lg · 10m KO
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#101D32] border border-[#BFC8D3]/15">
                    <div className="text-[#BFC8D3] text-[11px]">Stage 1 Prize Pool</div>
                    <div className="font-titan-mono font-bold text-base text-[#C7F464] mt-0.5">
                      Min 50% (70:30)
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#101D32] border border-[#BFC8D3]/15">
                    <div className="text-[#BFC8D3] text-[11px]">Decentralized Hubs</div>
                    <div className="font-titan-mono font-bold text-base text-[#F7F8FA] mt-0.5">
                      7 Regional Hubs
                    </div>
                  </div>
                </div>

                <Link
                  href="/aic-titans-cup/road-to-the-clash"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#C7F464] hover:bg-[#b5e550] text-[#101D32] font-titan-display font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Explore The Road to the Clash</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. TOURNAMENT INTRODUCTION — CHAMPIONSHIP WHITE SECTION (#F7F8FA)
      ====================================================================== */}
      <section className="py-20 bg-[#F7F8FA] text-[#101D32] border-b border-[#BFC8D3]/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#FF783D]">
                01 · TOURNAMENT ARCHITECTURE &amp; PURPOSE
              </div>
              <h2 className="font-titan-display font-extrabold text-3xl sm:text-5xl text-[#101D32]">
                Built Exclusively for Nepal&apos;s Banking &amp; Financial Fraternity.
              </h2>
              <p className="text-base text-[#252B35] leading-relaxed">
                AIC Titans Cup is structured around Nepal Rastra Bank&apos;s (NRB) four BAFIA licensing tiers so every institution competes against its true regulatory peers before advancing to the national inter-tier championship.
              </p>
              <p className="text-sm text-[#252B35]/85 leading-relaxed">
                Because <strong className="text-[#101D32]">58 of Nepal&apos;s 105 licensed BFIs (55.2%)</strong> are headquartered outside Kathmandu Valley, regional qualifiers are staged across <strong className="text-[#101D32]">7 Regional Tournament Hubs</strong> (Kathmandu, Banepa/Kavre, Biratnagar/Itahari, Janakpur/Birgunj, Chitwan/Hetauda, Pokhara, and Butwal/Kohalpur).
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-[#BFC8D3]/60 shadow-sm space-y-2">
                <div className="font-titan-mono text-xs font-bold text-[#2563EB] uppercase">
                  STAGE 1 · FOUR QUALIFYING LEAGUES
                </div>
                <h3 className="font-titan-display font-bold text-xl text-[#101D32]">
                  Types A, B, C &amp; D
                </h3>
                <p className="text-xs text-[#252B35] leading-relaxed">
                  Type A (20 Commercial Banks) &amp; Type B (17 Development Banks) in Shrawan; Type C (17 Finance Cos.) &amp; Type D (51 Microfinance BFIs) in Kartik.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#101D32] text-[#F7F8FA] border border-[#101D32] shadow-md space-y-2">
                <div className="font-titan-mono text-xs font-bold text-[#C7F464] uppercase">
                  STAGE 2 · THE 5TH COMPETITION
                </div>
                <h3 className="font-titan-display font-bold text-xl text-white">
                  Clash of the Titans
                </h3>
                <p className="text-xs text-[#BFC8D3] leading-relaxed">
                  The verified Champion &amp; Runner-Up from each league (8 teams/division) enter a separate 6-day League-cum-Knockout championship in Magh.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#BFC8D3]/60 shadow-sm space-y-2">
                <div className="font-titan-mono text-xs font-bold text-[#10B981] uppercase">
                  FEMALE PROMOTION &amp; 70:30 POOL
                </div>
                <h3 className="font-titan-display font-bold text-xl text-[#101D32]">
                  NPR 15K Ladies · 25K Gentlemen
                </h3>
                <p className="text-xs text-[#252B35] leading-relaxed">
                  40% promotional fee reduction for Ladies squads. Minimum 50% of collected fees forms the prize pool, paid strictly 70:30 to Winner &amp; Runner-Up.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#BFC8D3]/60 shadow-sm space-y-2">
                <div className="font-titan-mono text-xs font-bold text-[#FF783D] uppercase">
                  LOCAL SPORTS CSR MANIFESTO
                </div>
                <h3 className="font-titan-display font-bold text-xl text-[#101D32]">
                  Girls Football &amp; Local Coaches
                </h3>
                <p className="text-xs text-[#252B35] leading-relaxed">
                  Every BFI&apos;s CSR contribution (NPR 100k–500k) stays in its local operating districts to train underprivileged youth (50%+ girls) and hire local licensed coaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. THE FIVE COMPETITIONS — DISTINCT VISUAL IDENTITIES
      ====================================================================== */}
      <section id="five-competitions" className="py-24 bg-[#101D32] text-[#F7F8FA] bg-arena-grid-dark">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464] mb-2">
                02 · FIVE SEPARATE COMPETITIONS · ONE CONNECTED ECOSYSTEM
              </div>
              <h2 className="font-titan-display font-extrabold text-3xl sm:text-5xl text-[#F7F8FA]">
                The Five Competitions.
              </h2>
            </div>
            <p className="text-sm text-[#BFC8D3] max-w-xl">
              Types A, B, C, and D are four standalone NRB class championships. The verified{" "}
              <strong className="text-[#C7F464]">Champion and Runner-Up</strong> from each league qualify for the fifth competition:{" "}
              <strong className="text-[#C7F464]">Clash of the Titans – The Bankers Championship</strong>.
            </p>
          </div>

          {/* 4 Qualifying Leagues Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {qualifyingLeagues.map((comp) => (
              <div
                key={comp.slug}
                className="rounded-3xl bg-[#091220] border-2 p-6 flex flex-col justify-between shadow-xl transition-transform duration-200 hover:-translate-y-1"
                style={{ borderColor: comp.accentHex }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="font-titan-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: comp.accentHex }}
                    >
                      {comp.badgeText}
                    </span>
                    <span className="font-titan-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#162642] text-[#C7F464]">
                      {comp.registrationStatus}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <img
                      src={comp.logoPath}
                      alt={comp.name}
                      width={60}
                      height={68}
                      className="w-15 h-17 object-contain shrink-0"
                    />
                    <div>
                      <h3 className="font-titan-display font-bold text-xl text-[#F7F8FA]">
                        {comp.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#C7F464] mt-0.5">{comp.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#BFC8D3] leading-relaxed">{comp.tagline}</p>

                  <div className="space-y-2 text-xs border-t border-[#BFC8D3]/15 pt-3">
                    <div>
                      <span className="text-[#BFC8D3]">Eligible:</span>{" "}
                      <strong className="text-[#F7F8FA]">{comp.targetAudience}</strong>
                    </div>
                    <div>
                      <span className="text-[#BFC8D3]">Window:</span>{" "}
                      <strong className="text-[#C7F464]">{comp.nepaliMonthWindow}</strong>
                    </div>
                    <div>
                      <span className="text-[#BFC8D3]">Entry Fees:</span>{" "}
                      <strong className="text-[#FF783D]">Gentlemen 25K · Ladies 15K</strong>
                    </div>
                    <div>
                      <span className="text-[#BFC8D3]">Prize Rule:</span>{" "}
                      <strong className="text-[#F7F8FA]">Min. 50% Pool (70:30 Split)</strong>
                    </div>
                    <div>
                      <span className="text-[#BFC8D3]">Local CSR:</span>{" "}
                      <strong className="text-[#C7F464]">{comp.expectedCsrRangeNpr}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#BFC8D3]/15">
                  <Link
                    href={`/aic-titans-cup/competitions/${comp.slug}`}
                    className="w-full block text-center py-3 px-4 rounded-xl font-titan-display font-bold text-xs uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: comp.accentHex }}
                  >
                    Explore {comp.shortName.split("·")[0]} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 5th Competition Feature Panel: Clash of the Titans */}
          <div className="rounded-3xl bg-gradient-to-r from-[#091220] via-[#162642] to-[#091220] border-2 border-[#C7F464] p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={clashComp.logoPath}
                    alt={clashComp.name}
                    width={116}
                    height={132}
                    className="w-28 h-32 object-contain"
                  />
                  <img
                    src="/logos/titan-trophy.svg"
                    alt="Titan Shield"
                    width={84}
                    height={112}
                    className="w-20 h-28 object-contain"
                  />
                </div>
                <span className="mt-3 font-titan-mono text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#C7F464] text-[#101D32]">
                  5TH COMPETITION · CHAMPIONSHIP
                </span>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
                  FOUR COMPETITIONS. EIGHT QUALIFIERS. ONE CLASH OF THE TITANS.
                </div>
                <h3 className="font-titan-display font-extrabold text-3xl sm:text-4xl text-[#F7F8FA]">
                  {clashComp.name} – <span className="text-[#C7F464]">{clashComp.subtitle}</span>
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#FF783D]">
                  Qualification through Type A, B, C and D champions and runners-up.
                </p>
                <p className="text-sm text-[#BFC8D3] leading-relaxed">
                  Clash of the Titans is a separate, full-fledged two-stage League-cum-Knockout tournament staged over 6 matchdays in Magh. All 8 verified qualifiers per division (<strong className="text-white">A1, A2, B1, B2, C1, C2, D1, D2</strong>) contest Stage 1 (Group X &amp; Group Y round-robin @ 7m/half) before advancing to Stage 2 (Semi-Finals, 3rd Place Playoff &amp; Grand Final @ 10m/half).
                </p>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-3">
                <Link
                  href="/aic-titans-cup/competitions/clash-of-the-titans"
                  className="w-full text-center bg-[#C7F464] hover:bg-[#b5e550] text-[#101D32] font-titan-display font-bold text-xs uppercase tracking-wider py-4 px-5 rounded-xl shadow-lg transition-all"
                >
                  Open Clash of the Titans &rarr;
                </Link>
                <Link
                  href="/aic-titans-cup/road-to-the-clash"
                  className="w-full text-center bg-[#101D32] hover:bg-[#1e3256] text-[#F7F8FA] border border-[#BFC8D3]/30 font-titan-display font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl transition-all"
                >
                  Interactive Qualification Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. ROAD TO THE CLASH + ANNUAL CALENDAR
      ====================================================================== */}
      <section className="py-20 bg-[#091220] text-[#F7F8FA] border-t border-[#BFC8D3]/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
          <RoadToTheClashInteractive compact basePath="/aic-titans-cup" />

          {/* Annual Calendar */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464] mb-1">
                  03 · VERIFIED ANNUAL TOURNAMENT CALENDAR
                </div>
                <h2 className="font-titan-display font-extrabold text-2xl sm:text-4xl text-[#F7F8FA]">
                  Three Seasonal Windows Across the Nepali Calendar.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {(["ALL", "SHRAWAN", "KARTIK", "MAGH"] as const).map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setSelectedWindow(w)}
                    className={`px-4 py-2 rounded-xl font-titan-mono text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedWindow === w
                        ? "bg-[#C7F464] text-[#101D32]"
                        : "bg-[#101D32] text-[#BFC8D3] hover:text-white border border-[#BFC8D3]/20"
                    }`}
                  >
                    {w === "ALL" ? "All Windows" : w}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {store.competitions
                .filter((c) =>
                  selectedWindow === "ALL"
                    ? true
                    : c.nepaliMonthWindow.toUpperCase().includes(selectedWindow)
                )
                .map((c) => (
                  <div
                    key={c.slug}
                    className="rounded-2xl bg-[#101D32] border border-[#BFC8D3]/20 p-5 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className="font-titan-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-full text-white"
                          style={{ backgroundColor: c.accentHex }}
                        >
                          {c.nepaliMonthWindow.split("(")[0]}
                        </span>
                        <span className="font-titan-mono text-[10px] text-[#BFC8D3]">{c.code}</span>
                      </div>
                      <h4 className="font-titan-display font-bold text-base text-[#F7F8FA]">
                        {c.name}
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#BFC8D3] border-t border-[#BFC8D3]/15 pt-3">
                        <li>
                          <strong className="text-[#F7F8FA]">Registration:</strong> {c.registrationMonthProposed}
                        </li>
                        <li>
                          <strong className="text-[#F7F8FA]">Calendar Slot:</strong> {c.calendarPositions}
                        </li>
                        <li>
                          <strong className="text-[#C7F464]">Clock:</strong> 7m League · 10m KO
                        </li>
                      </ul>
                    </div>
                    <Link
                      href={`/aic-titans-cup/competitions/${c.slug}`}
                      className="mt-4 pt-3 border-t border-[#BFC8D3]/15 text-xs font-bold text-[#C7F464] hover:underline inline-flex items-center justify-between"
                    >
                      <span>View Competition</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. WHY BANKERS SHOULD PARTICIPATE & THE BANKERS' EXPERIENCE (LIGHT #F7F8FA)
      ====================================================================== */}
      <section className="py-20 bg-[#F7F8FA] text-[#101D32] border-y border-[#BFC8D3]/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#FF783D]">
              04 · WHY BANKERS PARTICIPATE · THE TITANS&apos; ESCAPE
            </div>
            <h2 className="font-titan-display font-extrabold text-3xl sm:text-5xl text-[#101D32]">
              Not Just a Tournament. Your Well-Deserved Reset.
            </h2>
            <p className="text-base text-[#252B35] leading-relaxed">
              After a demanding month of targets, balance sheets, and regulatory audits, AIC Titans Cup gives banking professionals an energizing outdoor sporting holiday to compete, recharge, and reconnect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {WHY_PARTICIPATE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.code}
                  className="rounded-2xl bg-white border border-[#BFC8D3]/70 p-6 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-[#101D32] text-[#C7F464] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`inline-block font-titan-mono text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${pillar.badgeBg}`}
                    >
                      {pillar.code}
                    </span>
                    <h3 className="font-titan-display font-bold text-lg text-[#101D32]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#252B35] leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bankers' Experience Feature Split */}
          <div className="rounded-3xl bg-[#101D32] text-[#F7F8FA] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
                05 · THE BANKERS&apos; EXPERIENCE · FIVE FESTIVAL ZONES
              </div>
              <h3 className="font-titan-display font-extrabold text-2xl sm:text-4xl text-white">
                The Titans&apos; Arena, The Recharge Zone &amp; The Titans Social.
              </h3>
              <p className="text-sm text-[#BFC8D3] leading-relaxed">
                From shaded team recovery lounges and physiotherapy stations to inter-bank networking terraces, executive health checks, and NPR 500,000 player insurance — every matchday is built around player welfare and celebration.
              </p>
              <div className="pt-2">
                <Link
                  href="/aic-titans-cup/experience"
                  className="inline-flex items-center gap-2 bg-[#FF783D] hover:bg-[#FF5E1A] text-white font-titan-display font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl"
                >
                  <span>Explore The Bankers&apos; Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <img
                src="/images/escape-sunset-pitch.jpg"
                alt="Sunset Pitch Festival"
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img
                src="/images/bankers-team-celebration.jpg"
                alt="Bankers Camaraderie"
                className="rounded-2xl h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. SPORTS CSR, SPONSORS & LATEST NEWS
      ====================================================================== */}
      <section className="py-20 bg-[#101D32] text-[#F7F8FA]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
          {/* CSR & Sponsorship Dual Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-[#091220] border border-[#C7F464]/35 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
                  06 · SPORTS CSR · WHEN BANKERS PLAY, COMMUNITIES WIN
                </div>
                <h3 className="font-titan-display font-extrabold text-2xl sm:text-3xl text-white">
                  100% Local District CSR for Underprivileged Girls &amp; Licensed Coaches.
                </h3>
                <p className="text-xs sm:text-sm text-[#BFC8D3] leading-relaxed">
                  Every BFI&apos;s CSR contribution (Class A: NPR 350k–500k · Class B: 250k–400k · Class C: 150k–300k · Class D: 100k–200k) is ring-fenced in its local operating districts: 40% paid local licensed coach jobs, 30% boots &amp; kits (50%+ girls quota), 20% local turf &amp; nutrition, 10% CA-audited NRB 1% CSR compliance certificate.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/aic-titans-cup/csr"
                  className="bg-[#C7F464] text-[#101D32] font-titan-display font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl"
                >
                  Open CSR Impact Dashboard &rarr;
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-[#091220] border border-[#FF783D]/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#FF783D]">
                  07 · TWO-LEVEL COMMERCIAL SPONSORSHIP ECOSYSTEM
                </div>
                <h3 className="font-titan-display font-extrabold text-2xl sm:text-3xl text-white">
                  Level 1 Individual Competition Tiers &amp; Level 2 Complete Umbrella Partner.
                </h3>
                <p className="text-xs sm:text-sm text-[#BFC8D3] leading-relaxed">
                  Partner across all five competitions and 7 Regional Hubs as the Complete Umbrella Title Partner, or sponsor an individual NRB class championship (Type A, Type B, Type C, Type D, or Clash of the Titans) with strict naming-rights separation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/aic-titans-cup/sponsors"
                  className="bg-[#FF783D] text-white font-titan-display font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl"
                >
                  Explore Sponsorship Packages &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Latest Updates */}
          <div className="space-y-6">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
                  08 · LATEST TOURNAMENT UPDATES &amp; RELEASES
                </div>
                <h2 className="font-titan-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                  News &amp; Official Announcements
                </h2>
              </div>
              <Link
                href="/aic-titans-cup/news"
                className="font-titan-mono text-xs font-bold uppercase text-[#C7F464] hover:underline"
              >
                All News &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {store.news.map((art) => (
                <Link
                  key={art.id}
                  href="/aic-titans-cup/news"
                  className="group rounded-2xl bg-[#091220] border border-[#BFC8D3]/20 overflow-hidden hover:border-[#C7F464] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={art.imageUrl}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 font-titan-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#101D32]/90 text-[#C7F464]">
                        {art.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="text-[11px] text-[#BFC8D3] mb-1">
                        {art.publishedAt} · {art.readTime}
                      </div>
                      <h3 className="font-titan-display font-bold text-sm text-white group-hover:text-[#C7F464] transition-colors">
                        {art.title}
                      </h3>
                      <p className="text-xs text-[#BFC8D3] mt-2 line-clamp-3">{art.excerpt}</p>
                    </div>
                  </div>
                  <div className="px-5 pb-4 text-xs font-bold text-[#C7F464]">Read Release &rarr;</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
