"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { RoadToTheClashInteractive } from "@/components/aic/RoadToTheClashInteractive";
import {
  Trophy,
  Sparkles,
  Sun,
  Users,
  HeartPulse,
  HeartHandshake,
  Calendar,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Clock,
  Award,
  Building2,
  CheckCircle2,
} from "lucide-react";

const FIVE_PILLARS = [
  {
    code: "01 · COMPETE",
    title: "The Thrill of Football & Futsal",
    desc: "Peer-group competition across NRB Classes A, B, C, and D with fast 7-minute league halves and 10-minute knockout halves — culminating in Clash of the Titans.",
    icon: Trophy,
    accent: "from-blue-500/20 to-blue-600/5 border-blue-400/40 text-blue-300",
  },
  {
    code: "02 · RECHARGE",
    title: "Your Sporting Holiday Escape",
    desc: "After demanding month-end targets, audits, and compliance deadlines, step into a sunlit outdoor festival with lounge recovery zones, music, and refreshments.",
    icon: Sun,
    accent: "from-amber-500/20 to-amber-600/5 border-amber-400/40 text-amber-300",
  },
  {
    code: "03 · CONNECT",
    title: "Inter-Bank Brotherhood & Unity",
    desc: "Reconnect with colleagues across branches and forge lifelong friendships with fellow professionals from 105 financial institutions nationwide.",
    icon: Users,
    accent: "from-teal-500/20 to-teal-600/5 border-teal-400/40 text-teal-300",
  },
  {
    code: "04 · LIVE HEALTHY",
    title: "Corporate Wellness & Active Living",
    desc: "Champion cardiovascular fitness, stress relief, and women's sports participation with our promotional NPR 15,000 Ladies Division entry fee.",
    icon: HeartPulse,
    accent: "from-emerald-500/20 to-emerald-600/5 border-emerald-400/40 text-emerald-300",
  },
  {
    code: "05 · GIVE BACK",
    title: "Local Grassroots CSR & Coach Jobs",
    desc: "Every BFI's local CSR grant (NPR 100k–500k) stays in its operating districts to train underprivileged youth (50%+ girls) and employ local licensed coaches.",
    icon: HeartHandshake,
    accent: "from-purple-500/20 to-purple-600/5 border-purple-400/40 text-purple-300",
  },
];

export default function HomePage() {
  const { store, regionalHubs } = useEcosystem();
  const [selectedWindow, setSelectedWindow] = useState<"ALL" | "SHRAWAN" | "KARTIK" | "MAGH">("ALL");

  const qualifyingLeagues = store.competitions.filter((c) => !c.isChampionship);
  const clashComp = store.competitions.find((c) => c.isChampionship)!;

  return (
    <div className="min-h-screen">
      {/* =====================================================================
          SECTION 1 – HERO ("YOUR NEXT GREAT ESCAPE STARTS ON THE PITCH.")
      ====================================================================== */}
      <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/banking-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040914]/95 via-[#040914]/82 to-[#040914]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-[#040914]/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs font-extrabold uppercase tracking-[0.2em]">
                <Sparkles className="w-4 h-4" />
                <span>AIC TITANS CUP · YOUR GAME. YOUR PEOPLE. YOUR ESCAPE.</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.03]">
                YOUR NEXT GREAT{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                  ESCAPE
                </span>{" "}
                STARTS ON THE PITCH.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
                Put the targets aside. Leave the deadlines behind. Bring your colleagues, lace up your boots and experience the sporting celebration of Nepal&apos;s banking fraternity.
              </p>

              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-teal-300">
                WORK HARD. PLAY HARD. RECONNECT. RECHARGE. RISE AS TITANS.
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#five-competitions"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-2xl shadow-[0_0_30px_rgba(212,160,23,0.45)] transition-all hover:scale-[1.02]"
                >
                  EXPLORE THE TITANS CUP <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/aic-titans-cup/register"
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 text-white border border-amber-400/40 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-2xl backdrop-blur-md transition-all"
                >
                  REGISTER YOUR INSTITUTION
                </Link>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="font-black tracking-widest text-amber-400 uppercase">
                  FIVE COMPETITIONS. ONE BANKING FRATERNITY. ONE TITAN LEGACY.
                </div>
              </div>
            </div>

            {/* Right Showcase Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-[#071120]/90 backdrop-blur-xl border-2 border-amber-400/40 p-6 shadow-2xl space-y-5">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <img src="/logos/parent-crest.svg" alt="AIC Titans Cup Crest" className="w-16 h-20 object-contain" />
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      {store.edition.status} · REGISTRATION OPEN
                    </span>
                    <h3 className="font-display font-black text-xl text-white mt-1">
                      Ecosystem Telemetry
                    </h3>
                    <p className="text-xs text-slate-400">Verified Source-of-Truth Parameters</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 text-[11px]">5 Competitions</div>
                    <div className="font-display font-black text-lg text-white mt-0.5">
                      Types A–D + Clash
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 text-[11px]">Eligible NRB BFIs</div>
                    <div className="font-display font-black text-lg text-amber-400 mt-0.5">
                      105 Institutions
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 text-[11px]">Entry Fee (G / L)</div>
                    <div className="font-display font-black text-base text-teal-300 mt-0.5">
                      25K / 15K NPR
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 text-[11px]">Match Clock</div>
                    <div className="font-display font-black text-base text-white mt-0.5">
                      7m Lg · 10m KO
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 text-[11px]">Stage 1 Prize Pool</div>
                    <div className="font-display font-black text-base text-amber-300 mt-0.5">
                      Min 50% (70:30)
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 text-[11px]">Regional Hubs</div>
                    <div className="font-display font-black text-base text-emerald-300 mt-0.5">
                      7 Hubs (7 Provinces)
                    </div>
                  </div>
                </div>

                <Link
                  href="/aic-titans-cup/road-to-the-clash"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-amber-300 font-extrabold text-xs uppercase tracking-wider transition-all"
                >
                  Launch Road to the Clash Animation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2 – THE TITANS' PROMISE (5 EXPERIENCE PILLARS — DAYLIGHT ESCAPE)
      ====================================================================== */}
      <section className="py-20 bg-escape-sunlight text-slate-900 border-y border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-amber-700 bg-amber-500/15 px-3.5 py-1.5 rounded-full mb-3">
              <Sun className="w-4 h-4" /> THE TITANS&apos; ESCAPE · AFTER A HECTIC MONTH AT WORK, IT&apos;S TIME TO RECHARGE
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-950 tracking-tight">
              Five Pillars of the Banking Sporting Holiday.
            </h2>
            <p className="text-base text-slate-700 mt-3 leading-relaxed">
              Banking professionals spend their weeks navigating financial targets, credit committees, audits, and compliance deadlines. AIC Titans Cup is designed as a sunlit outdoor sporting festival where competition meets wellness, camaraderie, and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {FIVE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.code}
                  className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center mb-4 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-amber-700">
                      {pillar.code}
                    </div>
                    <h3 className="font-display font-black text-lg text-slate-950 mt-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-teal-700">
                    AIC Titans Promise &check;
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3 – DISCOVER THE FIVE COMPETITIONS
      ====================================================================== */}
      <section id="five-competitions" className="py-24 bg-[#040914] bg-ledger-grid">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400 mb-2">
                FOUR QUALIFYING LEAGUES + ONE SEPARATE BANKERS CHAMPIONSHIP
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
                Discover the Five Competitions.
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-xl">
              Types A, B, C, and D are four individual NRB class championships. The verified <strong className="text-amber-300">Champion and Runner-Up</strong> from each league qualify for the fifth competition: <strong className="text-amber-300">Clash of the Titans – The Bankers Championship</strong>.
            </p>
          </div>

          {/* First 4 Qualifying Leagues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {qualifyingLeagues.map((comp) => (
              <div
                key={comp.slug}
                className="rounded-3xl bg-[#081326] border-2 p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all shadow-xl"
                style={{ borderColor: `${comp.accentHex}88` }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: comp.accentHex }}
                    >
                      {comp.badgeText}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-emerald-300">
                      Reg: {comp.registrationStatus}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <img src={comp.logoPath} alt={comp.name} className="w-16 h-20 object-contain shrink-0" />
                    <div>
                      <h3 className="font-display font-black text-xl text-white leading-tight">
                        {comp.name}
                      </h3>
                      <p className="text-xs font-bold text-amber-300 mt-0.5">{comp.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{comp.tagline}</p>

                  <div className="space-y-2 text-xs border-t border-white/10 pt-3">
                    <div>
                      <span className="text-slate-400">Eligible Audience:</span>{" "}
                      <strong className="text-white">{comp.targetAudience}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Competition Month:</span>{" "}
                      <strong className="text-amber-300">{comp.nepaliMonthWindow}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Entry Fees:</span>{" "}
                      <strong className="text-teal-300">Gentlemen 25k · Ladies 15k</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Format &amp; Clock:</span>{" "}
                      <span className="text-slate-200">Dynamic Groups (7m/half) + Knockouts (10m/half)</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Prize Pool Rule:</span>{" "}
                      <strong className="text-white">Min. 50% Fees (70:30 Winner/Runner-Up)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Expected Local CSR:</span>{" "}
                      <strong className="text-amber-300">{comp.expectedCsrRangeNpr}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <Link
                    href={`/aic-titans-cup/competitions/${comp.slug}`}
                    className="flex-1 text-center py-3 rounded-xl font-black text-xs uppercase tracking-wider text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: comp.accentHex }}
                  >
                    Explore {comp.shortName.split("·")[0]} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 5th Competition Hero Card: Clash of the Titans – The Bankers Championship */}
          <div className="rounded-3xl bg-gradient-to-r from-[#0B172E] via-[#132242] to-[#1A1408] border-2 border-amber-400 p-8 md:p-10 shadow-[0_0_60px_rgba(212,160,23,0.22)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex flex-col items-center text-center">
                <img
                  src={clashComp.logoPath}
                  alt={clashComp.name}
                  className="w-36 h-40 object-contain drop-shadow-[0_0_25px_rgba(212,160,23,0.6)]"
                />
                <span className="mt-3 text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-400 text-slate-950">
                  5TH COMPETITION · CHAMPIONSHIP
                </span>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-amber-400">
                  SEPARATE FULL-FLEDGED LEAGUE-CUM-KNOCKOUT TOURNAMENT · MAGH (6 DAYS)
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
                  {clashComp.name} – <span className="text-amber-400">{clashComp.subtitle}</span>
                </h3>
                <p className="text-xs font-extrabold uppercase tracking-wider text-teal-300">
                  &ldquo;Qualification through Type A, B, C and D champions and runners-up.&rdquo;
                </p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Clash of the Titans is not a single final match. All <strong className="text-white">8 verified qualifiers per division (A1, A2, B1, B2, C1, C2, D1, D2)</strong> enter Stage 1 (League Stage: Group X &amp; Group Y round-robin @ 7m/half) before advancing to Stage 2 (Knockout Stage: Semi-Finals, 3rd Place Playoff &amp; Grand Final @ 10m/half) to crown the <strong className="text-amber-300">AIC Titans Cup Bankers&apos; Champion</strong>.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-slate-400 text-[10px]">Window</div>
                    <div className="font-bold text-white">Magh (6 Days)</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-slate-400 text-[10px]">Qualifiers</div>
                    <div className="font-bold text-amber-300">8 Teams / Division</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-slate-400 text-[10px]">Entry Method</div>
                    <div className="font-bold text-teal-300">Verified Top 2 Only</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-slate-400 text-[10px]">Finale Purse</div>
                    <div className="font-bold text-white">Yet to Be Decided</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-3">
                <Link
                  href="/aic-titans-cup/competitions/clash-of-the-titans"
                  className="w-full text-center bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider py-4 px-5 rounded-2xl shadow-lg transition-all"
                >
                  Explore Clash of the Titans &rarr;
                </Link>
                <Link
                  href="/aic-titans-cup/road-to-the-clash"
                  className="w-full text-center bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-2xl transition-all"
                >
                  View Qualification Pathway
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4 – INTERACTIVE ANNUAL TOURNAMENT CALENDAR
      ====================================================================== */}
      <section className="py-20 bg-[#071120] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400 mb-2">
                VERIFIED TOURNAMENT CALENDAR WINDOWS · YEAR [TO BE CONFIRMED]
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
                Annual Five-Competition Calendar.
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Anchored directly in <code className="text-amber-300">Tournament Calendar.xlsx</code> — zero guessed dates. Exact kickoff dates marked as Proposed / To Be Announced.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["ALL", "SHRAWAN", "KARTIK", "MAGH"] as const).map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWindow(w)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                    selectedWindow === w
                      ? "bg-amber-400 text-slate-950"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {w === "ALL" ? "All 3 Windows" : w}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {store.competitions
              .filter((c) => {
                if (selectedWindow === "ALL") return true;
                return c.nepaliMonthWindow.toUpperCase().includes(selectedWindow);
              })
              .map((c) => (
                <div
                  key={c.slug}
                  className="rounded-2xl bg-[#0B1930] border border-white/15 p-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: c.accentHex }}
                      >
                        {c.nepaliMonthWindow.split("(")[0]}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">{c.code}</span>
                    </div>
                    <h4 className="font-display font-black text-base text-white">{c.name}</h4>
                    <ul className="space-y-2 text-[11px] text-slate-300 border-t border-white/10 pt-3">
                      <li>
                        <strong className="text-amber-300">1. Registration Period:</strong>{" "}
                        {c.registrationMonthProposed}
                      </li>
                      <li>
                        <strong className="text-amber-300">2. Team &amp; HR Audit:</strong> 90-Day Payroll Verification &amp; Hub Draw
                      </li>
                      <li>
                        <strong className="text-amber-300">3. Calendar Window:</strong> {c.calendarPositions}
                      </li>
                      <li>
                        <strong className="text-amber-300">4. League Stage:</strong> 7 min each half (20m slot)
                      </li>
                      <li>
                        <strong className="text-amber-300">5. Knockout &amp; Final:</strong> 10 min each half (35m slot)
                      </li>
                      <li>
                        <strong className="text-teal-300">6. Outcome:</strong>{" "}
                        {c.isChampionship
                          ? "Crowns the AIC Titans Cup Bankers' Champion"
                          : "Verified Champion & Runner-Up qualify for Clash of the Titans"}
                      </li>
                    </ul>
                  </div>
                  <Link
                    href={`/aic-titans-cup/competitions/${c.slug}`}
                    className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center justify-between"
                  >
                    <span>View Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5 – SIGNATURE ANIMATION: THE ROAD TO THE CLASH OF THE TITANS
      ====================================================================== */}
      <section className="py-24 bg-[#040914]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <RoadToTheClashInteractive compact />
        </div>
      </section>

      {/* =====================================================================
          SECTION 6 – THE BANKERS' EXPERIENCE (SUNLIT HOLIDAY COMPONENT)
      ====================================================================== */}
      <section className="py-20 bg-escape-sunlight text-slate-900 border-y border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-teal-800 bg-teal-500/15 px-3.5 py-1.5 rounded-full">
                <Sun className="w-4 h-4" /> THE BANKERS&apos; EXPERIENCE · SPORTING HOLIDAY
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-950 leading-tight">
                NOT JUST A TOURNAMENT. YOUR WELL-DESERVED RESET.
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Designed around five curated festival zones — <strong className="text-slate-950">The Titans&apos; Arena</strong>, <strong className="text-slate-950">The Recharge Zone</strong>, <strong className="text-slate-950">The Titans Social</strong>, <strong className="text-slate-950">The Healthy Titans</strong>, and <strong className="text-slate-950">The Titans Celebration</strong> — so players, colleagues, and families enjoy a refreshing weekend escape.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  "The Titans' Arena: 5v5/Futsal turf, skills & crossbar challenges",
                  "The Recharge Zone: Recovery lounges, hydration & physiotherapy",
                  "The Titans Social: Sunset music, gourmet refreshments & B2B networking",
                  "The Healthy Titans: Executive fitness checks & mental wellbeing",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/aic-titans-cup/experience"
                  className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg"
                >
                  Explore The Bankers&apos; Holiday Experience <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src="/images/escape-sunset-pitch.jpg"
                alt="Sunset Pitch Festival"
                className="rounded-3xl h-64 w-full object-cover shadow-xl border-2 border-white"
              />
              <img
                src="/images/bankers-team-celebration.jpg"
                alt="Bankers Team Camaraderie"
                className="rounded-3xl h-64 w-full object-cover shadow-xl border-2 border-white mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7 – SPORTS CSR ("WHEN BANKERS PLAY, COMMUNITIES WIN.")
      ====================================================================== */}
      <section className="py-20 bg-[#061022]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-teal-400">
                NATIONAL CSR DESIGN MANIFESTO · LED BY AURIUM SPORTS
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
                WHEN BANKERS PLAY, <span className="text-amber-400">COMMUNITIES WIN.</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every participating BFI&apos;s expected CSR contribution (<strong className="text-white">Class A: NPR 350k–500k · Class B: 250k–400k · Class C: 150k–300k · Class D: 100k–200k</strong>) is ring-fenced and deployed <strong className="text-amber-300">100% at the local level</strong> in that BFI&apos;s operating districts to empower underprivileged youth (<strong className="text-teal-300">50%+ girls quota</strong>) and create paid local jobs for <strong className="text-teal-300">ANFA/AFC-licensed football coaches</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-display font-black text-amber-400">40%</div>
                  <div className="text-xs font-bold text-white mt-1">Local Coach Jobs</div>
                  <div className="text-[11px] text-slate-400">125–159 licensed coaches</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-display font-black text-teal-400">30%</div>
                  <div className="text-xs font-bold text-white mt-1">First Boots &amp; Kits</div>
                  <div className="text-[11px] text-slate-400">1,997–3,312 youth (50%+ girls)</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-display font-black text-emerald-400">20%</div>
                  <div className="text-xs font-bold text-white mt-1">Local Turf &amp; Nutrition</div>
                  <div className="text-[11px] text-slate-400">48-week safe clinics</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-display font-black text-purple-400">10%</div>
                  <div className="text-xs font-bold text-white mt-1">NRB Audit &amp; Showcase</div>
                  <div className="text-[11px] text-slate-400">CA-audited 1% CSR cert</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/aic-titans-cup/csr"
                  className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
                >
                  Explore Sports CSR &amp; Impact Dashboard &rarr;
                </Link>
                <a
                  href="/downloads/AIC_Titans_Cup_National_CSR_Manifesto_and_Implementation_Plan.pdf"
                  target="_blank"
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
                >
                  Download CSR Manifesto PDF
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-2 border-teal-400/40 bg-[#081529] shadow-2xl">
                <img
                  src="/images/csr-grassroots-youth.jpg"
                  alt="Grassroots Football CSR"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="text-[10px] font-black uppercase tracking-widest text-teal-300">
                    7 PROVINCES · 105 BFIs · LOCAL DISTRICT RETENTION
                  </div>
                  <h4 className="font-display font-black text-xl text-white">
                    Where a Bank Operates, Its CSR Builds a Pitch, Empowers Girls &amp; Hires a Local Coach.
                  </h4>
                  <p className="text-xs text-slate-300">
                    View all 7 Regional Hubs and province-by-province BFI CSR blueprints across Koshi, Madhesh, Bagmati (Valley &amp; Kavre), Gandaki, Lumbini, Karnali, and Sudurpashchim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8 & 9 – SPONSORS / PARTNERS & LATEST NEWS
      ====================================================================== */}
      <section className="py-20 bg-[#040914] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-20">
          {/* Two-Level Sponsorship Preview */}
          <div className="rounded-3xl bg-[#081326] border border-amber-400/35 p-8 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400 mb-2">
                  TWO-LEVEL COMMERCIAL &amp; CSR PARTNERSHIP ARCHITECTURE
                </div>
                <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
                  Level 1 Individual Competition Sponsors &amp; Level 2 Complete Umbrella Partner.
                </h2>
              </div>
              <Link
                href="/aic-titans-cup/sponsors"
                className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
              >
                View Full Rights Matrix &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="p-5 rounded-2xl bg-white/5 border border-amber-400/30">
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                  LEVEL 2 · COMPLETE UMBRELLA
                </div>
                <div className="font-display font-black text-lg text-white mt-1">
                  All 5 Competitions + 7 Hubs
                </div>
                <p className="text-slate-300 mt-2">
                  Parent naming rights across Types A, B, C, D &amp; Clash of the Titans + Lead National CSR Co-Branding.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-blue-400/30">
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-300">
                  LEVEL 1 · INDIVIDUAL COMPETITIONS
                </div>
                <div className="font-display font-black text-lg text-white mt-1">
                  Type A, B, C, D or Clash Title
                </div>
                <p className="text-slate-300 mt-2">
                  Target a single NRB banking class or own the 6-day Magh Clash of the Titans Championship.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-teal-400/30">
                <div className="text-[10px] font-black uppercase tracking-widest text-teal-300">
                  STATUTORY BFI CSR · ALL 105 BFIs
                </div>
                <div className="font-display font-black text-lg text-white mt-1">
                  Local Girls &amp; Coach Employment
                </div>
                <p className="text-slate-300 mt-2">
                  NRB 1% CSR compliant local district fellowships led and CA-audited by Aurium Sports.
                </p>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400 mb-2">
                  OFFICIAL ANNOUNCEMENTS, FORMAT RELEASES &amp; CSR STORIES
                </div>
                <h2 className="font-display font-black text-3xl text-white">Latest News &amp; Media</h2>
              </div>
              <Link href="/aic-titans-cup/news" className="text-xs font-extrabold uppercase tracking-wider text-amber-400 hover:underline">
                View All News &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {store.news.map((art) => (
                <Link
                  key={art.id}
                  href={`/aic-titans-cup/news`}
                  className="group rounded-2xl bg-[#081326] border border-white/10 overflow-hidden hover:border-amber-400/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={art.imageUrl}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/85 text-amber-300 border border-amber-400/30">
                        {art.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="text-[10px] text-slate-400 mb-1.5">
                        {art.publishedAt} · {art.readTime}
                      </div>
                      <h3 className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                        {art.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-3">{art.excerpt}</p>
                    </div>
                  </div>
                  <div className="px-5 pb-4 text-xs font-bold text-amber-400">Read Story &rarr;</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
