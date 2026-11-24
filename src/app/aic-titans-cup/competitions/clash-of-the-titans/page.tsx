"use client";

import React from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { ShieldCheck, Lock, Download } from "lucide-react";

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
    grandFinal &&
    grandFinal.isVerifiedByAdmin &&
    grandFinal.homeScore !== null &&
    grandFinal.awayScore !== null
      ? grandFinal.homeScore > grandFinal.awayScore
        ? grandFinal.homeTeamName
        : grandFinal.awayTeamName
      : null;

  const verifiedRunnerUp =
    grandFinal &&
    grandFinal.isVerifiedByAdmin &&
    grandFinal.homeScore !== null &&
    grandFinal.awayScore !== null
      ? grandFinal.homeScore > grandFinal.awayScore
        ? grandFinal.awayTeamName
        : grandFinal.homeTeamName
      : null;

  return (
    <div className="min-h-screen bg-[#101D32] text-[#F7F8FA] pb-24">
      {/* A. HERO & INTRODUCTION */}
      <section className="relative py-16 sm:py-20 bg-[#091220] border-b border-[#C7F464]/35 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/clash-stadium-night.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091220] via-[#101D32]/90 to-[#091220]/80" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#162642] border border-[#C7F464]/50 text-[#C7F464] font-titan-mono text-xs font-bold uppercase tracking-widest">
                <span>COMPETITION 05 · SEPARATE LEAGUE-CUM-KNOCKOUT TOURNAMENT</span>
              </div>

              <h1 className="font-titan-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
                CLASH OF THE TITANS
                <span className="block text-2xl sm:text-4xl text-[#C7F464] mt-1.5">
                  THE BANKERS CHAMPIONSHIP
                </span>
              </h1>

              <p className="font-titan-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF783D]">
                FOUR COMPETITIONS. EIGHT QUALIFIERS. ONE CLASH OF THE TITANS.
              </p>

              <p className="text-sm sm:text-base text-[#BFC8D3] leading-relaxed max-w-3xl">
                Clash of the Titans is <strong className="text-white">not</strong> merely a single final match. It is a separate, six-day league-cum-knockout championship staged in{" "}
                <strong className="text-[#C7F464]">Magh (Bankers&apos; Clash-1 to Bankers&apos; Clash-6)</strong> where the verified Champion and Runner-Up from Type A, Type B, Type C, and Type D compete to lift{" "}
                <strong className="text-[#C7F464]">The Titan Rolling Shield</strong>.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#qualification-matrix"
                  className="bg-[#C7F464] hover:bg-[#b5e550] text-[#101D32] font-titan-display font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
                >
                  View 8-Team Qualification Matrix
                </a>
                <a
                  href="#league-stage"
                  className="bg-[#162642] hover:bg-[#1e3256] text-white border border-[#BFC8D3]/30 font-titan-display font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
                >
                  Stage 1: League Stage &amp; Standings
                </a>
                <a
                  href={clash.handbookPdfUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#101D32] hover:bg-[#162642] text-[#C7F464] border border-[#C7F464]/40 font-bold text-xs uppercase tracking-wider px-5 py-4 rounded-xl"
                >
                  <Download className="w-4 h-4 shrink-0" /> Championship PDF
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-[#101D32] border-2 border-[#C7F464] p-6 text-center shadow-2xl space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <img
                    src="/logos/clash-crest.svg"
                    alt="Clash of the Titans"
                    width={108}
                    height={122}
                    className="w-26 h-30 object-contain"
                  />
                  <img
                    src="/logos/titan-trophy.svg"
                    alt="The Titan Rolling Shield"
                    width={88}
                    height={116}
                    className="w-22 h-28 object-contain"
                  />
                </div>
                <div className="font-titan-mono text-xs font-bold uppercase tracking-wider text-[#C7F464]">
                  WHERE BANKING RIVALS BECOME TITAN LEGENDS
                </div>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-left">
                  <div className="p-3 rounded-xl bg-[#091220]">
                    <div className="text-[10px] text-[#BFC8D3]">Window</div>
                    <div className="font-bold text-white">Magh (6 Matchdays)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#091220]">
                    <div className="text-[10px] text-[#BFC8D3]">Qualifiers</div>
                    <div className="font-titan-mono font-bold text-[#C7F464]">8 per Division</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#091220]">
                    <div className="text-[10px] text-[#BFC8D3]">Stage 1 League</div>
                    <div className="font-titan-mono font-bold text-white">7 min × 2 Halves</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#091220]">
                    <div className="text-[10px] text-[#BFC8D3]">Stage 2 Knockouts</div>
                    <div className="font-titan-mono font-bold text-[#FF783D]">10 min × 2 Halves</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-20 pt-16">
        {/* B. QUALIFICATION MATRIX */}
        <section id="qualification-matrix" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
                SECTION B · VERIFIED QUALIFICATION PATHWAY
              </div>
              <h2 className="font-titan-display font-extrabold text-2xl sm:text-4xl text-white mt-1">
                Four Qualifying Leagues &rarr; Eight Verified Championship Berths
              </h2>
              <p className="text-xs text-[#BFC8D3] mt-1">
                Winners and Runners-Up must be officially confirmed by the Tournament Directorate before they appear as qualified teams. Same-class Winners and Runners-Up are placed in opposite groups (Group X vs. Group Y).
              </p>
            </div>
            <Link
              href="/aic-titans-cup/admin"
              className="text-xs font-bold text-[#C7F464] hover:underline inline-flex items-center gap-1.5"
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
                  className="rounded-2xl bg-[#091220] border-2 p-5 space-y-4"
                  style={{ borderColor: comp.accentHex }}
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-[#BFC8D3]/15">
                    <img
                      src={comp.logoPath}
                      alt={comp.name}
                      width={44}
                      height={50}
                      className="w-11 h-12 object-contain shrink-0"
                    />
                    <div>
                      <div className="font-titan-display font-bold text-base text-white">
                        {comp.name}
                      </div>
                      <div className="font-titan-mono text-[11px] text-[#C7F464]">
                        {comp.nepaliMonthWindow}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {slots.map((q) => (
                      <div key={q.id} className="p-3.5 rounded-xl bg-[#101D32] border border-[#BFC8D3]/15">
                        <div className="flex items-center justify-between font-titan-mono text-[10px] font-bold uppercase">
                          <span className="text-[#C7F464]">
                            Slot {q.slotCode} · {q.qualificationRank}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#162642] text-white">
                            {q.assignedClashGroup}
                          </span>
                        </div>
                        <div className="font-titan-display font-bold text-sm text-white mt-1.5">
                          {q.isVerifiedAndApproved && q.institutionName
                            ? q.institutionName
                            : "Pending Official Verification"}
                        </div>
                        <div className="mt-1.5 text-[11px] text-[#BFC8D3] flex items-center gap-1.5">
                          {q.isVerifiedAndApproved ? (
                            <>
                              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                              <span className="text-[#10B981] font-semibold">
                                Officially Verified &amp; Transferred
                              </span>
                            </>
                          ) : (
                            <>
                              <Lock className="w-3 h-3 text-[#FF783D] shrink-0" />
                              <span>Awaiting Stage 1 Completion</span>
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

        {/* C. STAGE 1: THE LEAGUE STAGE */}
        <section id="league-stage" className="space-y-8">
          <div className="border-b border-[#BFC8D3]/15 pb-4">
            <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
              SECTION C · STAGE 1 OF CLASH OF THE TITANS (DAYS 1–3 · 7 MIN EACH HALF)
            </div>
            <h2 className="font-titan-display font-extrabold text-2xl sm:text-4xl text-white mt-1">
              Stage 1: The League Stage (Group X &amp; Group Y Standings)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { name: "Group X Standings (A1 · C1 · B2 · D2)", rows: groupX },
              { name: "Group Y Standings (B1 · D1 · A2 · C2)", rows: groupY },
            ].map((grp) => (
              <div
                key={grp.name}
                className="rounded-3xl bg-[#091220] border border-[#C7F464]/40 p-5 sm:p-6 overflow-x-auto"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className="font-titan-display font-bold text-lg text-[#C7F464]">{grp.name}</h3>
                  <span className="font-titan-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#162642] text-[#F7F8FA]">
                    Top 2 Advance to Semi-Finals
                  </span>
                </div>
                <table className="w-full text-left text-xs min-w-[480px]">
                  <thead>
                    <tr className="border-b border-[#BFC8D3]/20 text-[#BFC8D3] font-titan-mono">
                      <th className="py-2.5 pr-2">#</th>
                      <th className="py-2.5 pr-2">Slot</th>
                      <th className="py-2.5 pr-3">Qualified Institution</th>
                      <th className="py-2.5 px-1.5 text-center">P</th>
                      <th className="py-2.5 px-1.5 text-center">W</th>
                      <th className="py-2.5 px-1.5 text-center">D</th>
                      <th className="py-2.5 px-1.5 text-center">L</th>
                      <th className="py-2.5 px-1.5 text-center">GD</th>
                      <th className="py-2.5 pl-1.5 text-center text-[#C7F464]">PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grp.rows.map((r, idx) => (
                      <tr key={r.teamId} className="border-b border-[#BFC8D3]/10">
                        <td className="py-3 pr-2 font-titan-mono text-[#BFC8D3]">{idx + 1}</td>
                        <td className="py-3 pr-2 font-titan-mono font-bold text-[#C7F464]">
                          {r.qualificationSlotCode}
                        </td>
                        <td className="py-3 pr-3 font-semibold text-white">{r.institutionName}</td>
                        <td className="py-3 px-1.5 text-center font-titan-mono">{r.played}</td>
                        <td className="py-3 px-1.5 text-center font-titan-mono">{r.won}</td>
                        <td className="py-3 px-1.5 text-center font-titan-mono">{r.drawn}</td>
                        <td className="py-3 px-1.5 text-center font-titan-mono">{r.lost}</td>
                        <td className="py-3 px-1.5 text-center font-titan-mono">{r.goalDifference}</td>
                        <td className="py-3 pl-1.5 text-center font-titan-mono font-bold text-[#C7F464] text-sm">
                          {r.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* 12 League Fixtures */}
          <div className="rounded-3xl bg-[#091220] border border-[#BFC8D3]/20 p-6">
            <h3 className="font-titan-display font-bold text-xl text-white mb-4">
              Stage 1 League Stage Fixtures (12 Round-Robin Matches · 7m × 2 Halves)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {leagueFixtures.map((f) => (
                <div
                  key={f.id}
                  className="p-4 rounded-2xl bg-[#101D32] border border-[#BFC8D3]/15 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between font-titan-mono text-[10px] font-bold text-[#C7F464] mb-1.5">
                      <span>
                        Match #{f.matchNumber} · {f.groupName}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#162642] text-white">{f.status}</span>
                    </div>
                    <div className="text-[11px] text-[#BFC8D3] mb-3">{f.dayLabel}</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#091220]">
                        <span className="font-semibold text-white">{f.homeTeamName}</span>
                        <span className="font-titan-mono font-bold text-[#C7F464]">
                          {f.isVerifiedByAdmin && f.homeScore !== null ? f.homeScore : "—"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#091220]">
                        <span className="font-semibold text-white">{f.awayTeamName}</span>
                        <span className="font-titan-mono font-bold text-[#C7F464]">
                          {f.isVerifiedByAdmin && f.awayScore !== null ? f.awayScore : "—"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* D. STAGE 2: KNOCKOUT STAGE & GRAND FINAL */}
        <section className="space-y-6">
          <div className="border-b border-[#BFC8D3]/15 pb-4">
            <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#FF783D]">
              SECTION D · STAGE 2 OF CLASH OF THE TITANS (DAYS 4–6 · 10 MIN EACH HALF)
            </div>
            <h2 className="font-titan-display font-extrabold text-2xl sm:text-4xl text-white mt-1">
              Stage 2: The Knockout Stage &amp; The Grand Final
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {knockoutFixtures.map((f) => {
              const isFinal = f.stage === "GRAND_FINAL";
              return (
                <div
                  key={f.id}
                  className={`rounded-3xl p-6 flex flex-col justify-between ${
                    isFinal
                      ? "bg-[#162642] border-2 border-[#C7F464] shadow-xl"
                      : "bg-[#091220] border border-[#BFC8D3]/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between font-titan-mono text-[10px] font-bold uppercase mb-2">
                      <span className={isFinal ? "text-[#C7F464]" : "text-[#FF783D]"}>
                        {f.stage.replace("_", " ")} · Match #{f.matchNumber}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#101D32] text-white">{f.status}</span>
                    </div>
                    <div className="text-xs font-bold text-white mb-4">{f.dayLabel}</div>
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-[#091220] border border-[#BFC8D3]/15 flex items-center justify-between gap-2">
                        <span className="font-semibold text-white">{f.homeTeamName}</span>
                        <span className="font-titan-mono font-bold text-[#C7F464] text-base">
                          {f.isVerifiedByAdmin && f.homeScore !== null ? f.homeScore : "—"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#091220] border border-[#BFC8D3]/15 flex items-center justify-between gap-2">
                        <span className="font-semibold text-white">{f.awayTeamName}</span>
                        <span className="font-titan-mono font-bold text-[#C7F464] text-base">
                          {f.isVerifiedByAdmin && f.awayScore !== null ? f.awayScore : "—"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#BFC8D3]/15 text-[11px] text-[#BFC8D3]">
                    Clock: <strong>10 min × 2 halves (35m slot)</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* E. ROLL OF HONOUR */}
        <section className="rounded-3xl bg-[#091220] border-2 border-[#C7F464] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <img
                src="/logos/titan-trophy.svg"
                alt="The Titan Rolling Shield"
                width={130}
                height={170}
                className="w-32 h-42 object-contain"
              />
            </div>
            <div className="lg:col-span-9 space-y-4">
              <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
                SECTION E · CHAMPIONSHIP ROLL OF HONOUR
              </div>
              <h2 className="font-titan-display font-extrabold text-2xl sm:text-3xl text-white">
                The AIC Titans Cup Bankers&apos; Champion &amp; The Titan Rolling Shield
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#101D32] border border-[#C7F464]/40">
                  <div className="font-titan-mono text-[10px] font-bold text-[#C7F464] uppercase">
                    VERIFIED BANKERS&apos; CHAMPION
                  </div>
                  <div className="font-titan-display font-bold text-base text-white mt-1">
                    {verifiedChampion || "Awaiting Verified Magh Grand Final"}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#101D32] border border-[#BFC8D3]/20">
                  <div className="font-titan-mono text-[10px] font-bold text-[#BFC8D3] uppercase">
                    VERIFIED RUNNER-UP
                  </div>
                  <div className="font-titan-display font-bold text-base text-white mt-1">
                    {verifiedRunnerUp || "Awaiting Verified Magh Grand Final"}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#101D32] border border-[#FF783D]/40">
                  <div className="font-titan-mono text-[10px] font-bold text-[#FF783D] uppercase">
                    GRAND FINALE PRIZE PURSE
                  </div>
                  <div className="font-titan-display font-bold text-base text-white mt-1">
                    Yet to Be Decided [TO BE DECIDED]
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
