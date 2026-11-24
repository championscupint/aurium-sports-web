"use client";

import React from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import {
  Trophy,
  ShieldCheck,
  Lock,
  Sparkles,
  Calendar,
  Clock,
  Award,
  Download,
  ArrowRight,
  Users,
} from "lucide-react";

export default function ClashOfTheTitansPage() {
  const { store } = useEcosystem();
  const clash = store.competitions.find((c) => c.slug === "clash-of-the-titans")!;
  const groupX = store.clashStandings.filter((r) => r.groupName === "Group X");
  const groupY = store.clashStandings.filter((r) => r.groupName === "Group Y");

  const leagueFixtures = store.fixtures.filter(
    (f) => f.competitionSlug === "clash-of-the-titans" && f.stage === "LEAGUE_GROUP"
  );
  const knockoutFixtures = store.fixtures.filter(
    (f) => f.competitionSlug === "clash-of-the-titans" && f.stage !== "LEAGUE_GROUP"
  );

  const grandFinal = store.fixtures.find((f) => f.id === "clash-final");
  const verifiedChampion =
    grandFinal && grandFinal.isVerifiedByAdmin && grandFinal.homeScore !== null && grandFinal.awayScore !== null
      ? grandFinal.homeScore > grandFinal.awayScore
        ? grandFinal.homeTeamName
        : grandFinal.awayTeamName
      : null;

  const verifiedRunnerUp =
    grandFinal && grandFinal.isVerifiedByAdmin && grandFinal.homeScore !== null && grandFinal.awayScore !== null
      ? grandFinal.homeScore > grandFinal.awayScore
        ? grandFinal.awayTeamName
        : grandFinal.homeTeamName
      : null;

  return (
    <div className="min-h-screen bg-[#040914] pt-32 pb-24">
      {/* A. HERO & INTRODUCTION */}
      <section className="relative py-16 border-b border-amber-500/30 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/clash-stadium-night.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040914] via-[#040914]/85 to-[#040914]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-xs font-black uppercase tracking-[0.22em]">
                <Sparkles className="w-4 h-4" /> COMPETITION 05 · FULL-FLEDGED LEAGUE-CUM-KNOCKOUT TOURNAMENT
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
                CLASH OF THE TITANS
                <span className="block text-2xl sm:text-4xl text-amber-400 mt-1">
                  THE BANKERS CHAMPIONSHIP
                </span>
              </h1>

              <p className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-teal-300">
                &ldquo;WHERE FOUR LEAGUES CONVERGE AND THE ULTIMATE BANKERS&apos; CHAMPION EMERGES.&rdquo;
              </p>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
                Clash of the Titans is <strong className="text-white">not</strong> simply a single final match or an awards ceremony. It is a separate, six-day league-cum-knockout championship staged in <strong className="text-amber-300">Magh (Bankers&apos; Clash-1 to Bankers&apos; Clash-6)</strong> where the verified Champion and Runner-Up from Type A, Type B, Type C, and Type D compete to lift <strong className="text-amber-300">The Titan Rolling Shield</strong>.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#qualification-matrix"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
                >
                  View 8-Team Qualification Matrix
                </a>
                <a
                  href="#league-stage"
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
                >
                  Stage 1: League Stage &amp; Standings
                </a>
                <a
                  href={clash.handbookPdfUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-amber-300 border border-amber-400/30 font-bold text-xs uppercase tracking-wider px-5 py-4 rounded-xl"
                >
                  <Download className="w-4 h-4" /> Championship Handbook PDF
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="rounded-3xl bg-[#081326]/90 border-2 border-amber-400 p-6 text-center shadow-[0_0_50px_rgba(212,160,23,0.3)] w-full">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <img src="/logos/clash-crest.svg" alt="Clash of the Titans" className="w-28 h-32 object-contain" />
                  <img src="/logos/titan-trophy.svg" alt="The Titan Rolling Shield" className="w-24 h-32 object-contain" />
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-amber-400">
                  WHERE BANKING RIVALS BECOME TITAN LEGENDS
                </div>
                <div className="grid grid-cols-2 gap-2.5 mt-4 text-xs text-left">
                  <div className="p-2.5 rounded-xl bg-white/5">
                    <div className="text-[10px] text-slate-400">Window</div>
                    <div className="font-bold text-white">Magh (6 Matchdays)</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5">
                    <div className="text-[10px] text-slate-400">Qualified Teams</div>
                    <div className="font-bold text-amber-300">8 per Division</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5">
                    <div className="text-[10px] text-slate-400">Stage 1 League Clock</div>
                    <div className="font-bold text-white">7 min × 2 Halves</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5">
                    <div className="text-[10px] text-slate-400">Stage 2 Knockout Clock</div>
                    <div className="font-bold text-teal-300">10 min × 2 Halves</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-20 pt-16">
        {/* B. QUALIFICATION TABLE (8 BERTHS FROM TYPES A, B, C, D) */}
        <section id="qualification-matrix" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400">
                SECTION B · VERIFIED QUALIFICATION PATHWAY
              </div>
              <h2 className="font-display font-black text-3xl text-white mt-1">
                Four Qualifying Leagues &rarr; Eight Verified Championship Berths
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Winners and Runners-Up must be officially confirmed by the Tournament Directorate before they appear as qualified teams. Same-class Winners and Runners-Up are seeded into opposite groups (Group X vs. Group Y).
              </p>
            </div>
            <Link
              href="/aic-titans-cup/admin"
              className="text-xs font-bold text-amber-300 hover:underline inline-flex items-center gap-1"
            >
              <Lock className="w-3.5 h-3.5" /> Admin Qualification Transfer Module &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {(["type-a", "type-b", "type-c", "type-d"] as const).map((slug) => {
              const comp = store.competitions.find((c) => c.slug === slug)!;
              const slots = store.qualifications.filter((q) => q.sourceCompetitionSlug === slug);
              return (
                <div
                  key={slug}
                  className="rounded-2xl bg-[#081326] border-2 p-5 space-y-4"
                  style={{ borderColor: comp.accentHex }}
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <img src={comp.logoPath} alt={comp.name} className="w-12 h-14 object-contain" />
                    <div>
                      <div className="font-display font-black text-base text-white">{comp.name}</div>
                      <div className="text-[11px] text-amber-300">{comp.nepaliMonthWindow}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {slots.map((q) => (
                      <div key={q.id} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider">
                          <span className="text-amber-400">
                            Slot {q.slotCode} · {q.qualificationRank}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-white/10 text-teal-300">
                            {q.assignedClashGroup}
                          </span>
                        </div>
                        <div className="font-display font-bold text-sm text-white mt-1.5">
                          {q.isVerifiedAndApproved && q.institutionName
                            ? q.institutionName
                            : "Pending Official Verification"}
                        </div>
                        <div className="mt-1.5 text-[10px] text-slate-400 flex items-center gap-1">
                          {q.isVerifiedAndApproved ? (
                            <>
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-300 font-semibold">
                                Officially Verified &amp; Transferred
                              </span>
                            </>
                          ) : (
                            <>
                              <Lock className="w-3 h-3 text-amber-400" />
                              <span>Awaiting Stage 1 Completion &amp; Admin Sign-Off</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* C. STAGE 1 – THE LEAGUE STAGE (GROUP X & GROUP Y STANDINGS + 12 GROUP FIXTURES) */}
        <section id="league-stage" className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400">
              SECTION C · STAGE 1 OF CLASH OF THE TITANS (PROPOSED FORMAT · PENDING FINAL ORGANIZER APPROVAL)
            </div>
            <h2 className="font-display font-black text-3xl text-white mt-1">
              Stage 1: The League Stage (Two Seeded Groups of 4 · 7m Halves)
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              All 8 qualified teams participate in the League Stage across Magh Days 1–3 (<code className="text-amber-300">Bankers&apos; Clash-1 to 3</code>). Single round-robin within each group (3 matches per team · 7 minutes each half · 20-minute match slot). Top 2 from each group advance to the Knockout Stage.
            </p>
          </div>

          {/* Group X & Group Y Standings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { name: "Group X Standings (A1 · C1 · B2 · D2)", rows: groupX },
              { name: "Group Y Standings (B1 · D1 · A2 · C2)", rows: groupY },
            ].map((grp) => (
              <div
                key={grp.name}
                className="rounded-3xl bg-[#081326] border border-amber-400/40 p-6 overflow-x-auto"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-black text-lg text-amber-400">{grp.name}</h3>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                    Top 2 Advance to Semi-Finals
                  </span>
                </div>
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/15 text-slate-400">
                      <th className="py-2.5">#</th>
                      <th className="py-2.5">Slot</th>
                      <th className="py-2.5">Qualified Institution</th>
                      <th className="py-2.5 text-center">P</th>
                      <th className="py-2.5 text-center">W</th>
                      <th className="py-2.5 text-center">D</th>
                      <th className="py-2.5 text-center">L</th>
                      <th className="py-2.5 text-center">GF</th>
                      <th className="py-2.5 text-center">GA</th>
                      <th className="py-2.5 text-center">GD</th>
                      <th className="py-2.5 text-center text-amber-300">PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grp.rows.map((r, idx) => (
                      <tr key={r.teamId} className="border-b border-white/10">
                        <td className="py-3 font-bold text-slate-400">{idx + 1}</td>
                        <td className="py-3 font-black text-amber-400">{r.qualificationSlotCode}</td>
                        <td className="py-3 font-bold text-white">
                          {r.institutionName}
                          {r.qualifiedForKnockout && (
                            <span className="ml-2 text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                              Confirmed SF
                            </span>
                          )}
                        </td>
                        <td className="py-3 text-center">{r.played}</td>
                        <td className="py-3 text-center">{r.won}</td>
                        <td className="py-3 text-center">{r.drawn}</td>
                        <td className="py-3 text-center">{r.lost}</td>
                        <td className="py-3 text-center">{r.goalsFor}</td>
                        <td className="py-3 text-center">{r.goalsAgainst}</td>
                        <td className="py-3 text-center">{r.goalDifference}</td>
                        <td className="py-3 text-center font-black text-amber-400 text-sm">{r.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* 12 League Stage Fixtures */}
          <div className="rounded-3xl bg-[#081326] border border-white/15 p-6">
            <h3 className="font-display font-black text-xl text-white mb-4">
              Stage 1 League Stage Fixtures (Days 1–3 · 7 Minutes Each Half · 20-Min Slot)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {leagueFixtures.map((f) => (
                <div
                  key={f.id}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-amber-300 mb-2">
                      <span>
                        Match #{f.matchNumber} · {f.groupName}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300">
                        {f.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mb-3">{f.dayLabel}</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-black/30">
                        <span className="font-bold text-white">{f.homeTeamName}</span>
                        <span className="font-black text-amber-400">
                          {f.isVerifiedByAdmin && f.homeScore !== null ? f.homeScore : "—"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-black/30">
                        <span className="font-bold text-white">{f.awayTeamName}</span>
                        <span className="font-black text-amber-400">
                          {f.isVerifiedByAdmin && f.awayScore !== null ? f.awayScore : "—"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-slate-400 flex items-center justify-between">
                    <span>Clock: {f.halfDurationMinutes}m × 2 halves</span>
                    <span>Slot: {f.slotDurationMinutes}m</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* D. STAGE 2 – THE KNOCKOUT STAGE (SEMI-FINALS, 3RD PLACE & GRAND FINAL · 10M HALVES) */}
        <section id="knockout-stage" className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-teal-400">
              SECTION D · STAGE 2 OF CLASH OF THE TITANS (DAYS 4–6 · 10 MIN EACH HALF)
            </div>
            <h2 className="font-display font-black text-3xl text-white mt-1">
              Stage 2: The Knockout Stage &amp; The Grand Final
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              All knockout fixtures run <strong className="text-white">10 minutes each half (35-minute slot)</strong>. Drawn matches proceed directly to a 3-kick penalty shootout. The Grand Final is the concluding match of Clash of the Titans that crowns the <strong className="text-amber-300">AIC Titans Cup Bankers&apos; Champion</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {knockoutFixtures.map((f) => {
              const isFinal = f.stage === "GRAND_FINAL";
              return (
                <div
                  key={f.id}
                  className={`rounded-3xl p-6 flex flex-col justify-between ${
                    isFinal
                      ? "bg-gradient-to-b from-amber-500/25 to-[#0A182E] border-2 border-amber-400 shadow-[0_0_40px_rgba(212,160,23,0.25)]"
                      : "bg-[#081326] border border-white/15"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                      <span className={isFinal ? "text-amber-300" : "text-teal-300"}>
                        {f.stage.replace("_", " ")} · Match #{f.matchNumber}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/10 text-white">{f.status}</span>
                    </div>
                    <div className="text-xs font-bold text-white mb-4">{f.dayLabel}</div>
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                        <span className="font-bold text-white">{f.homeTeamName}</span>
                        <span className="font-black text-amber-400 text-base">
                          {f.isVerifiedByAdmin && f.homeScore !== null ? f.homeScore : "—"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                        <span className="font-bold text-white">{f.awayTeamName}</span>
                        <span className="font-black text-amber-400 text-base">
                          {f.isVerifiedByAdmin && f.awayScore !== null ? f.awayScore : "—"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-300">
                    Clock: <strong>10 min × 2 halves (35m slot)</strong>
                    {f.stage === "THIRD_PLACE" && " · Plus Future Titans CSR Showcase"}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* E. CHAMPIONSHIP HONOURS & THE TITAN ROLLING SHIELD */}
        <section className="rounded-3xl bg-gradient-to-r from-[#0B1930] via-[#132544] to-[#1A1408] border-2 border-amber-400/60 p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <img src="/logos/titan-trophy.svg" alt="The Titan Rolling Shield" className="w-36 h-44 object-contain" />
            </div>
            <div className="lg:col-span-9 space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400">
                SECTION E · CHAMPIONSHIP ROLL OF HONOUR &amp; PRIZE GOVERNANCE
              </div>
              <h2 className="font-display font-black text-3xl text-white">
                The AIC Titans Cup Bankers&apos; Champion &amp; The Titan Rolling Shield
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-black/40 border border-amber-400/40">
                  <div className="text-[10px] font-extrabold text-amber-400 uppercase">
                    VERIFIED BANKERS&apos; CHAMPION
                  </div>
                  <div className="font-display font-black text-lg text-white mt-1">
                    {verifiedChampion || "Awaiting Verified Magh Grand Final"}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/15">
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase">
                    VERIFIED RUNNER-UP
                  </div>
                  <div className="font-display font-black text-lg text-white mt-1">
                    {verifiedRunnerUp || "Awaiting Verified Magh Grand Final"}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-teal-400/40">
                  <div className="text-[10px] font-extrabold text-teal-300 uppercase">
                    GRAND FINALE PRIZE PURSE
                  </div>
                  <div className="font-display font-black text-base text-white mt-1">
                    Yet to Be Decided [TO BE DECIDED]
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Plus Titan Rolling Shield &amp; CSR Excellence Plaque
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
