"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { Download, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-[#F7F8FA] text-[#101D32] pb-24">
      {/* 1. DEDICATED COMPETITION BANNER (MIDNIGHT NAVY ARENA) */}
      <section className="relative py-16 sm:py-20 bg-[#101D32] text-[#F7F8FA] border-b border-[#BFC8D3]/25 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/turf-match-action.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091220] via-[#101D32]/92 to-[#101D32]/75" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className="font-titan-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: comp.accentHex }}
                >
                  {comp.badgeText}
                </span>
                <span className="font-titan-mono text-xs font-bold px-3 py-1 rounded-full bg-[#162642] text-[#C7F464]">
                  Window: {comp.nepaliMonthWindow}
                </span>
                <span className="font-titan-mono text-xs font-bold px-3 py-1 rounded-full bg-[#162642] text-white">
                  Registration: {comp.registrationStatus}
                </span>
              </div>

              <h1 className="font-titan-display font-extrabold text-4xl sm:text-6xl text-white">
                {comp.name}
                <span className="block text-2xl sm:text-3xl text-[#C7F464] mt-1">{comp.subtitle}</span>
              </h1>

              <p className="text-base text-[#BFC8D3] leading-relaxed max-w-2xl">{comp.tagline}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#091220] border border-[#BFC8D3]/20">
                  <div className="text-[#BFC8D3] text-[11px]">Eligible NRB BFIs</div>
                  <div className="font-titan-mono font-bold text-lg text-white mt-0.5">
                    {comp.eligibleInstitutionCount} Institutions
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#091220] border border-[#BFC8D3]/20">
                  <div className="text-[#BFC8D3] text-[11px]">Entry Fee (G / L)</div>
                  <div className="font-titan-mono font-bold text-lg text-[#FF783D] mt-0.5">
                    NPR 25K / 15K
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#091220] border border-[#BFC8D3]/20">
                  <div className="text-[#BFC8D3] text-[11px]">Guaranteed Pool</div>
                  <div className="font-titan-mono font-bold text-lg text-[#C7F464] mt-0.5">
                    Min 50% (70:30)
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#091220] border border-[#BFC8D3]/20">
                  <div className="text-[#BFC8D3] text-[11px]">Match Clock</div>
                  <div className="font-titan-mono font-bold text-base text-white mt-0.5">
                    7m Lg · 10m KO
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/aic-titans-cup/register?competition=${comp.slug}`}
                  className="text-white font-titan-display font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg"
                  style={{ backgroundColor: comp.accentHex }}
                >
                  Register Your Institution &rarr;
                </Link>
                <a
                  href={comp.handbookPdfUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#162642] hover:bg-[#1e3256] text-white border border-[#BFC8D3]/30 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
                >
                  <Download className="w-4 h-4 shrink-0" /> Official Handbook PDF
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div
                className="rounded-3xl bg-[#091220] border-2 p-8 text-center w-full max-w-sm shadow-2xl"
                style={{ borderColor: comp.accentHex }}
              >
                <img
                  src={comp.logoPath}
                  alt={comp.name}
                  width={136}
                  height={152}
                  className="w-34 h-38 mx-auto object-contain mb-4"
                />
                <div className="font-titan-mono text-xs font-bold uppercase tracking-wider text-[#C7F464]">
                  {comp.nrbClass}
                </div>
                <div className="text-xs text-[#BFC8D3] mt-2">
                  Association Partner: <strong className="text-white">{comp.associationPartner}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14 pt-14">
        {/* 2. ELIGIBILITY, FORMAT & PRIZE GOVERNANCE (LIGHT SURFACE CARDS) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border border-[#BFC8D3] p-6 space-y-3 shadow-sm">
            <div className="font-titan-mono text-xs font-bold uppercase text-[#2563EB]">
              01 · ELIGIBILITY &amp; HR AUDIT
            </div>
            <h3 className="font-titan-display font-bold text-xl text-[#101D32]">
              Bonafide Payroll Bankers Only
            </h3>
            <p className="text-xs text-[#252B35] leading-relaxed">
              Exclusively for <strong>{comp.targetAudience}</strong>. Every squad comprises{" "}
              <strong>8 Players + 2 Officials</strong> holding at least <strong>90 days active payroll status</strong> verified via HR letter and Bank ID.
            </p>
            <div className="pt-2 font-titan-mono text-xs text-[#101D32] font-bold">
              Gentlemen: NPR 25,000 · Ladies Promotional: NPR 15,000 · Deposit: NPR{" "}
              {comp.entryFees.refundableDepositNpr.toLocaleString()}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#BFC8D3] p-6 space-y-3 shadow-sm">
            <div className="font-titan-mono text-xs font-bold uppercase text-[#10B981]">
              02 · DYNAMIC FORMAT &amp; 7m/10m CLOCK
            </div>
            <h3 className="font-titan-display font-bold text-xl text-[#101D32]">
              7m League Halves · 10m Knockouts
            </h3>
            <p className="text-xs text-[#252B35] leading-relaxed">
              {comp.formatSummary.groupStructure}. Group matches run <strong>7 minutes each half (20m slot)</strong>; all Knockouts run <strong>10 minutes each half (35m slot)</strong>.
            </p>
            <div className="pt-2 text-xs text-[#101D32] font-semibold">
              Regional Hubs: {comp.regionalHubsSummary}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#BFC8D3] p-6 space-y-3 shadow-sm">
            <div className="font-titan-mono text-xs font-bold uppercase text-[#FF783D]">
              03 · 70:30 PRIZE RATIO &amp; LOCAL CSR
            </div>
            <h3 className="font-titan-display font-bold text-xl text-[#101D32]">
              Min. 50% Pool (70:30) + Local CSR
            </h3>
            <p className="text-xs text-[#252B35] leading-relaxed">
              Minimum <strong>50% of collected division fees</strong> forms the guaranteed prize pool, paid{" "}
              <strong>exclusively to Winner (70%) and Runner-Up (30%)</strong>.
            </p>
            <div className="pt-2 text-xs text-[#101D32] font-semibold">
              Local CSR ({comp.expectedCsrRangeNpr}): {comp.csrLocalDeliverable}
            </div>
          </div>
        </section>

        {/* 3. PARTICIPATING / ELIGIBLE NRB INSTITUTIONS TABLE */}
        <section className="rounded-3xl bg-white border border-[#BFC8D3] p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="font-titan-mono text-xs font-bold uppercase tracking-wider text-[#FF783D]">
                VERIFIED NRB INSTITUTIONAL ROSTER · {eligibleBfis.length} ELIGIBLE INSTITUTIONS
              </div>
              <h2 className="font-titan-display font-extrabold text-2xl sm:text-3xl text-[#101D32] mt-1">
                Eligible {comp.shortName.split("·")[1]} &amp; Assigned Regional Hubs
              </h2>
            </div>
            <Link
              href="/aic-titans-cup/register"
              className="text-xs font-bold text-[#2563EB] hover:underline"
            >
              Register Your Squad from This List &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto max-h-[460px] overflow-y-auto border border-[#BFC8D3]/60 rounded-2xl">
            <table className="w-full text-left text-xs min-w-[780px]">
              <thead className="bg-[#101D32] text-[#F7F8FA] sticky top-0">
                <tr>
                  <th className="py-3 px-3 font-titan-mono">ID</th>
                  <th className="py-3 px-3">Institution Name</th>
                  <th className="py-3 px-3">Head Office</th>
                  <th className="py-3 px-3">Province</th>
                  <th className="py-3 px-3 font-titan-mono">Branches</th>
                  <th className="py-3 px-3">Assigned Regional Hub</th>
                  <th className="py-3 px-3">Expected Local CSR &amp; Focus</th>
                </tr>
              </thead>
              <tbody>
                {eligibleBfis.map((b, idx) => (
                  <tr
                    key={b.id}
                    className={`border-b border-[#BFC8D3]/40 ${
                      idx % 2 === 1 ? "bg-[#F7F8FA]" : "bg-white"
                    }`}
                  >
                    <td className="py-2.5 px-3 font-titan-mono font-bold text-[#101D32]">{b.id}</td>
                    <td className="py-2.5 px-3 font-bold text-[#101D32]">{b.name}</td>
                    <td className="py-2.5 px-3 text-[#252B35]">{b.headOffice}</td>
                    <td className="py-2.5 px-3 text-[#252B35]">{b.province}</td>
                    <td className="py-2.5 px-3 font-titan-mono font-semibold text-[#2563EB]">
                      {b.estimatedBranches}
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-[#101D32]">{b.assignedHub}</td>
                    <td className="py-2.5 px-3 text-[#252B35]">
                      <strong>{b.expectedCsrRange}</strong> · {b.localCsrFocus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. QUALIFICATION SLOTS & SPONSORSHIP */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white border border-[#BFC8D3] p-6 space-y-4 shadow-sm">
            <div className="font-titan-mono text-xs font-bold uppercase text-[#101D32]">
              QUALIFICATION TO CLASH OF THE TITANS
            </div>
            <h3 className="font-titan-display font-bold text-2xl text-[#101D32]">
              Verified Champion &amp; Runner-Up Berths
            </h3>
            <div className="space-y-3">
              {compQualSlots.map((q) => (
                <div
                  key={q.id}
                  className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#BFC8D3]/70 flex flex-wrap items-center justify-between gap-2"
                >
                  <div>
                    <div className="font-titan-mono text-xs font-bold text-[#FF783D]">
                      Slot {q.slotCode} · {comp.name} {q.qualificationRank}
                    </div>
                    <div className="font-titan-display font-bold text-base text-[#101D32] mt-1">
                      {q.isVerifiedAndApproved && q.institutionName
                        ? q.institutionName
                        : "Pending Tournament Completion & Admin Verification"}
                    </div>
                  </div>
                  <span className="font-titan-mono text-xs font-bold px-3 py-1 rounded-full bg-[#101D32] text-[#C7F464]">
                    Clash {q.assignedClashGroup}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#BFC8D3] p-6 space-y-4 shadow-sm">
            <div className="font-titan-mono text-xs font-bold uppercase text-[#2563EB]">
              LIVE REGISTRATION &amp; SPONSORSHIP TIERS
            </div>
            <h3 className="font-titan-display font-bold text-2xl text-[#101D32]">
              Commercial Partnership &amp; Entries ({registeredTeams.length} Submitted)
            </h3>
            <p className="text-xs text-[#252B35] leading-relaxed">
              Proposed League Sponsorship Tiers (Pending Final Approval):{" "}
              <strong>Title: {comp.sponsorshipTiersProposed.titleNpr}</strong> ·{" "}
              <strong>Presenting: {comp.sponsorshipTiersProposed.presentingNpr}</strong> ·{" "}
              <strong>Associate: {comp.sponsorshipTiersProposed.associateNpr}</strong>.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/aic-titans-cup/register"
                className="bg-[#FF783D] hover:bg-[#FF5E1A] text-white font-titan-display font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl"
              >
                Submit Institutional Entry
              </Link>
              <Link
                href="/aic-titans-cup/sponsors"
                className="bg-[#101D32] text-white font-titan-display font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl"
              >
                Sponsor {comp.name}
              </Link>
            </div>
          </div>
        </section>

        {/* 5. PATHWAY TRANSITION BANNER */}
        <section className="rounded-3xl bg-[#101D32] text-[#F7F8FA] border-2 border-[#C7F464] p-6 sm:p-10 text-center space-y-4">
          <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
            THE TWO-STAGE CHAMPIONSHIP PATHWAY
          </div>
          <h2 className="font-titan-display font-extrabold text-2xl sm:text-4xl text-white">
            YOUR LEAGUE. YOUR JOURNEY. <span className="text-[#C7F464]">THE CLASH AWAITS.</span>
          </h2>
          <p className="text-sm text-[#BFC8D3] max-w-2xl mx-auto">
            Conquering {comp.name} is only the first chapter. The verified Champion ({compQualSlots[0]?.slotCode}) and Runner-Up ({compQualSlots[1]?.slotCode}) earn official qualification into the fifth competition — the six-day League-cum-Knockout Clash of the Titans in Magh.
          </p>
          <div className="pt-2">
            <Link
              href="/aic-titans-cup/competitions/clash-of-the-titans"
              className="inline-flex items-center gap-2 bg-[#C7F464] text-[#101D32] font-titan-display font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl"
            >
              <span>Explore Clash of the Titans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
