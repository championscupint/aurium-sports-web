"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import {
  Trophy,
  ShieldCheck,
  MapPin,
  Clock,
  HeartHandshake,
  Download,
  ArrowRight,
  Users,
  Sparkles,
  Building2,
} from "lucide-react";

export default function IndividualLeaguePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { store, bfis } = useEcosystem();

  if (slug === "clash-of-the-titans") {
    redirect("/aic-titans-cup/competitions/clash-of-the-titans");
  }

  const comp = store.competitions.find((c) => c.slug === slug);
  if (!comp) {
    notFound();
  }

  const eligibleBfis = bfis.filter((b) => b.competitionSlug === comp.slug);
  const compQualSlots = store.qualifications.filter((q) => q.sourceCompetitionSlug === comp.slug);
  const registeredTeams = store.registrations.filter((r) => r.competitionSlug === comp.slug);

  return (
    <div className="min-h-screen bg-[#040914] pt-32 pb-24">
      {/* 1. HERO VISUAL & TOURNAMENT INTRODUCTION */}
      <section className="relative py-16 border-b border-white/15 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/banking-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040914] via-[#040914]/90 to-[#040914]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: comp.accentHex }}
                >
                  {comp.badgeText}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-amber-300">
                  Window: {comp.nepaliMonthWindow}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                  Registration: {comp.registrationStatus}
                </span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
                {comp.name}
                <span className="block text-2xl sm:text-3xl text-amber-400 mt-1">{comp.subtitle}</span>
              </h1>

              <p className="text-base text-slate-200 leading-relaxed max-w-2xl">{comp.tagline}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-slate-400 text-[11px]">Eligible NRB BFIs</div>
                  <div className="font-display font-black text-xl text-white mt-0.5">
                    {comp.eligibleInstitutionCount} Institutions
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-slate-400 text-[11px]">Entry Fee (G / L)</div>
                  <div className="font-display font-black text-lg text-teal-300 mt-0.5">
                    NPR 25K / 15K
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-slate-400 text-[11px]">Guaranteed Pool</div>
                  <div className="font-display font-black text-lg text-amber-300 mt-0.5">
                    Min 50% (70:30)
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-slate-400 text-[11px]">Expected Local CSR</div>
                  <div className="font-display font-black text-sm text-white mt-0.5">
                    {comp.expectedCsrRangeNpr.replace("per ", "/ ")}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/aic-titans-cup/register?competition=${comp.slug}`}
                  className="text-white font-black text-xs uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg"
                  style={{ backgroundColor: comp.accentHex }}
                >
                  Register Your Institution for {comp.shortName.split("·")[0]} &rarr;
                </Link>
                <a
                  href={comp.handbookPdfUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
                >
                  <Download className="w-4 h-4" /> Official {comp.shortName.split("·")[0]} Handbook PDF
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div
                className="rounded-3xl bg-[#081326] border-2 p-8 text-center w-full max-w-sm shadow-2xl"
                style={{ borderColor: comp.accentHex }}
              >
                <img src={comp.logoPath} alt={comp.name} className="w-36 h-40 mx-auto object-contain mb-4" />
                <div className="text-xs font-black uppercase tracking-widest text-amber-400">
                  {comp.nrbClass}
                </div>
                <div className="text-xs text-slate-300 mt-2">
                  Umbrella Association: <strong className="text-white">{comp.associationPartner}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16 pt-14">
        {/* 2. ELIGIBILITY, FEMALE PROMOTION, FORMAT & 70:30 PRIZE GOVERNANCE */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-[#081326] border border-white/15 p-6 space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-amber-400">
              01 · ELIGIBILITY &amp; HR AUDIT
            </div>
            <h3 className="font-display font-black text-xl text-white">
              Bonafide Payroll Bankers Only
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Exclusively for <strong className="text-white">{comp.targetAudience}</strong>. Every squad comprises <strong className="text-white">8 Players + 2 Officials</strong> holding at least <strong className="text-amber-300">90 days active payroll status</strong> verified via HR letter and Bank ID.
            </p>
            <div className="pt-2 text-xs text-teal-300 font-bold">
              Gentlemen Fee: NPR 25,000 · Ladies Promotional Fee: NPR 15,000 · Refundable Deposit: NPR{" "}
              {comp.entryFees.refundableDepositNpr.toLocaleString()}
            </div>
          </div>

          <div className="rounded-3xl bg-[#081326] border border-white/15 p-6 space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-teal-400">
              02 · DYNAMIC FORMAT &amp; 7m/10m CLOCK
            </div>
            <h3 className="font-display font-black text-xl text-white">
              7m League Halves · 10m Knockouts
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {comp.formatSummary.groupStructure}. Group matches run <strong className="text-white">7 minutes each half (20m slot)</strong>; all Knockouts (Pre-QF, QF, SF, 3rd Place &amp; Final) run <strong className="text-white">10 minutes each half (35m slot)</strong>.
            </p>
            <div className="pt-2 text-xs text-amber-300 font-bold">
              Regional Hubs: {comp.regionalHubsSummary}
            </div>
          </div>

          <div className="rounded-3xl bg-[#081326] border border-white/15 p-6 space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-purple-400">
              03 · 70:30 PRIZE RATIO &amp; LOCAL CSR
            </div>
            <h3 className="font-display font-black text-xl text-white">
              Min. 50% Pool (70:30) + Local CSR
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Minimum <strong className="text-white">50% of collected division fees</strong> forms the guaranteed prize pool, paid <strong className="text-amber-300">exclusively to Winner (70%) and Runner-Up (30%)</strong>.
            </p>
            <div className="pt-2 text-xs text-emerald-300 font-bold">
              Local CSR ({comp.expectedCsrRangeNpr}): {comp.csrLocalDeliverable}
            </div>
          </div>
        </section>

        {/* 3. COMPLETE DIRECTORY OF ELIGIBLE NRB-LICENSED INSTITUTIONS IN THIS LEAGUE */}
        <section className="rounded-3xl bg-[#081326] border border-white/15 p-6 md:p-8 space-y-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                VERIFIED NRB INSTITUTIONAL ROSTER · {eligibleBfis.length} ELIGIBLE INSTITUTIONS
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                Eligible {comp.shortName.split("·")[1]} &amp; Assigned Regional Hubs
              </h2>
            </div>
            <Link
              href="/aic-titans-cup/register"
              className="text-xs font-extrabold text-amber-400 hover:underline"
            >
              Register Your Squad from This List &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto max-h-[460px] overflow-y-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left text-xs min-w-[850px]">
              <thead className="bg-[#050C1A] sticky top-0">
                <tr className="border-b border-white/15 text-slate-400">
                  <th className="py-3 px-3">ID</th>
                  <th className="py-3 px-3">Institution Name</th>
                  <th className="py-3 px-3">Head Office</th>
                  <th className="py-3 px-3">Province</th>
                  <th className="py-3 px-3">Branches</th>
                  <th className="py-3 px-3">Assigned Regional Tournament Hub</th>
                  <th className="py-3 px-3">Expected Local CSR &amp; Focus</th>
                </tr>
              </thead>
              <tbody>
                {eligibleBfis.map((b) => (
                  <tr key={b.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-2.5 px-3 font-black text-amber-400">{b.id}</td>
                    <td className="py-2.5 px-3 font-bold text-white">{b.name}</td>
                    <td className="py-2.5 px-3 text-slate-300">{b.headOffice}</td>
                    <td className="py-2.5 px-3 text-slate-300">{b.province}</td>
                    <td className="py-2.5 px-3 font-semibold text-teal-300">{b.estimatedBranches}</td>
                    <td className="py-2.5 px-3 text-amber-200">{b.assignedHub}</td>
                    <td className="py-2.5 px-3 text-slate-300">
                      <strong className="text-white">{b.expectedCsrRange}</strong> · {b.localCsrFocus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. STANDINGS, REGISTERED SQUADS & VERIFIED QUALIFICATION SLOTS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-[#081326] border border-white/15 p-6 space-y-4">
            <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              QUALIFICATION TO CLASH OF THE TITANS
            </div>
            <h3 className="font-display font-black text-2xl text-white">
              Verified Champion &amp; Runner-Up Berths
            </h3>
            <div className="space-y-3">
              {compQualSlots.map((q) => (
                <div key={q.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-amber-400">
                      Slot {q.slotCode} · {comp.name} {q.qualificationRank}
                    </div>
                    <div className="font-display font-bold text-base text-white mt-1">
                      {q.isVerifiedAndApproved && q.institutionName
                        ? q.institutionName
                        : "Pending Tournament Completion & Admin Verification"}
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/20 text-amber-300">
                    Clash {q.assignedClashGroup}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#081326] border border-white/15 p-6 space-y-4">
            <div className="text-xs font-extrabold uppercase tracking-widest text-teal-400">
              LIVE REGISTRATION &amp; SPONSORSHIP TIERS
            </div>
            <h3 className="font-display font-black text-2xl text-white">
              Commercial Partnership &amp; Entries ({registeredTeams.length} Submitted)
            </h3>
            <p className="text-xs text-slate-300">
              Proposed League Sponsorship Tiers (Pending Final Approval):{" "}
              <strong className="text-white">Title: {comp.sponsorshipTiersProposed.titleNpr}</strong> ·{" "}
              <strong className="text-white">Presenting: {comp.sponsorshipTiersProposed.presentingNpr}</strong> ·{" "}
              <strong className="text-white">Associate: {comp.sponsorshipTiersProposed.associateNpr}</strong>.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/aic-titans-cup/register"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl"
              >
                Submit Institutional Entry
              </Link>
              <Link
                href="/aic-titans-cup/sponsors"
                className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl"
              >
                Sponsor {comp.name}
              </Link>
            </div>
          </div>
        </section>

        {/* 5. MANDATORY PATHWAY TRANSITION BANNER ("YOUR LEAGUE. YOUR JOURNEY. THE CLASH AWAITS.") */}
        <section className="rounded-3xl bg-gradient-to-r from-[#0B172E] via-[#132544] to-[#1D1508] border-2 border-amber-400 p-8 md:p-12 text-center space-y-5 shadow-[0_0_50px_rgba(212,160,23,0.2)]">
          <div className="text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            THE TWO-STAGE CHAMPIONSHIP PATHWAY
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
            YOUR LEAGUE. YOUR JOURNEY. <span className="text-amber-400">THE CLASH AWAITS.</span>
          </h2>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-black/40 border border-amber-400/40 text-xs sm:text-sm font-black text-white">
            <span style={{ color: comp.secondaryHex }}>{comp.name.toUpperCase()}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300">CHAMPION ({compQualSlots[0]?.slotCode}) + RUNNER-UP ({compQualSlots[1]?.slotCode})</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
            <span className="text-teal-300">CLASH OF THE TITANS – THE BANKERS CHAMPIONSHIP</span>
          </div>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Conquering {comp.name} is only the first chapter. The Champion and Runner-Up earn official qualification into the fifth competition — the six-day League-cum-Knockout Clash of the Titans in Magh.
          </p>
          <div className="pt-2">
            <Link
              href="/aic-titans-cup/competitions/clash-of-the-titans"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-7 py-4 rounded-xl"
            >
              Explore Clash of the Titans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
