"use client";

import React from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { ArrowRight, Download } from "lucide-react";

export default function CompetitionsOverviewPage() {
  const { store } = useEcosystem();
  const qualifying = store.competitions.filter((c) => !c.isChampionship);
  const clash = store.competitions.find((c) => c.isChampionship)!;

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#101D32] pb-24">
      <section className="bg-[#101D32] text-[#F7F8FA] py-16 sm:py-20 border-b border-[#BFC8D3]/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-4">
          <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
            FIVE SEPARATE SPORTING COMPETITIONS · ONE ECOSYSTEM
          </div>
          <h1 className="font-titan-display font-extrabold text-3xl sm:text-5xl text-white">
            The Five Competitions of <span className="text-[#C7F464]">AIC Titans Cup</span>
          </h1>
          <p className="text-sm sm:text-base text-[#BFC8D3] max-w-3xl leading-relaxed">
            AIC Titans Cup consists of four major standalone NRB category championships (Types A, B, C, and D)—each crowning its own Champion, Runner-Up, and prize winners—whose top two teams also qualify for the fifth, full-fledged league-cum-knockout finale:{" "}
            <strong className="text-white">Clash of the Titans – The Bankers Championship</strong>.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14 pt-12">
        {/* Master Ledger Table */}
        <div className="rounded-3xl bg-white border border-[#BFC8D3] p-6 sm:p-8 overflow-x-auto shadow-sm">
          <div className="font-titan-mono text-xs font-bold uppercase tracking-wider text-[#FF783D] mb-4">
            MASTER FIVE-COMPETITION ARCHITECTURE LEDGER
          </div>
          <table className="w-full text-left text-xs min-w-[820px]">
            <thead className="bg-[#101D32] text-[#F7F8FA]">
              <tr>
                <th className="py-3 px-3">Competition</th>
                <th className="py-3 px-3 font-titan-mono">Eligible BFIs</th>
                <th className="py-3 px-3">Window</th>
                <th className="py-3 px-3 font-titan-mono">Entry Fee (G / L)</th>
                <th className="py-3 px-3 font-titan-mono">Match Clock</th>
                <th className="py-3 px-3">Prize Pool Rule</th>
                <th className="py-3 px-3">Expected Local CSR</th>
                <th className="py-3 px-3">Explore</th>
              </tr>
            </thead>
            <tbody>
              {store.competitions.map((c, idx) => (
                <tr
                  key={c.slug}
                  className={`border-b border-[#BFC8D3]/40 ${
                    idx % 2 === 1 ? "bg-[#F7F8FA]" : "bg-white"
                  }`}
                >
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={c.logoPath}
                        alt={c.name}
                        width={36}
                        height={40}
                        className="w-9 h-10 object-contain shrink-0"
                      />
                      <div>
                        <div className="font-titan-display font-bold text-sm text-[#101D32]">
                          {c.name}
                        </div>
                        <div className="text-[11px] text-[#252B35]">{c.subtitle}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 font-titan-mono font-bold text-[#101D32]">
                    {c.eligibleInstitutionCount}
                  </td>
                  <td className="py-3.5 px-3 font-semibold text-[#101D32]">{c.nepaliMonthWindow}</td>
                  <td className="py-3.5 px-3 font-titan-mono font-bold text-[#FF783D]">
                    {c.entryFees.gentlemenNpr ? "25K / 15K NPR" : "Qualification Only"}
                  </td>
                  <td className="py-3.5 px-3 font-titan-mono text-[#252B35]">7m Lg · 10m KO</td>
                  <td className="py-3.5 px-3 font-semibold text-[#101D32]">
                    {c.isChampionship ? "Purse: TBD" : "Min. 50% (70:30 Split)"}
                  </td>
                  <td className="py-3.5 px-3 text-[#252B35]">{c.expectedCsrRangeNpr}</td>
                  <td className="py-3.5 px-3">
                    <Link
                      href={`/aic-titans-cup/competitions/${c.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-[#101D32] text-[#C7F464] font-titan-mono font-bold text-[11px] uppercase"
                    >
                      Open <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 Qualifying Leagues Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualifying.map((c) => (
            <div
              key={c.slug}
              className="rounded-3xl bg-white border-2 p-6 sm:p-7 flex flex-col justify-between shadow-sm"
              style={{ borderColor: c.accentHex }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={c.logoPath}
                    alt={c.name}
                    width={68}
                    height={76}
                    className="w-17 h-19 object-contain shrink-0"
                  />
                  <div>
                    <span
                      className="font-titan-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: c.accentHex }}
                    >
                      {c.badgeText}
                    </span>
                    <h3 className="font-titan-display font-bold text-2xl text-[#101D32] mt-1.5">
                      {c.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#252B35]">{c.subtitle}</p>
                  </div>
                </div>
                <p className="text-xs text-[#252B35] leading-relaxed">{c.tagline}</p>
                <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#BFC8D3]/60 space-y-1.5 text-xs">
                  <div>
                    <strong>Target Audience:</strong> {c.targetAudience} ({c.associationPartner})
                  </div>
                  <div>
                    <strong>Regional Hubs:</strong> {c.regionalHubsSummary}
                  </div>
                  <div>
                    <strong>Local CSR:</strong> {c.expectedCsrRangeNpr} — {c.csrLocalDeliverable}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/aic-titans-cup/competitions/${c.slug}`}
                  className="flex-1 text-center py-3.5 px-4 rounded-xl font-titan-display font-bold text-xs uppercase tracking-wider text-white"
                  style={{ backgroundColor: c.accentHex }}
                >
                  Open {c.name} &rarr;
                </Link>
                <a
                  href={c.handbookPdfUrl}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-[#101D32] text-white text-xs font-bold"
                >
                  <Download className="w-3.5 h-3.5" /> PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 5th Competition Banner */}
        <div className="rounded-3xl bg-[#101D32] text-[#F7F8FA] border-2 border-[#C7F464] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <img
                src={clash.logoPath}
                alt={clash.name}
                width={120}
                height={136}
                className="w-30 h-34 object-contain"
              />
            </div>
            <div className="lg:col-span-6 space-y-3">
              <span className="font-titan-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full bg-[#C7F464] text-[#101D32]">
                COMPETITION 05 · SEPARATE LEAGUE-CUM-KNOCKOUT TOURNAMENT
              </span>
              <h2 className="font-titan-display font-extrabold text-3xl text-white">
                {clash.name} – <span className="text-[#C7F464]">{clash.subtitle}</span>
              </h2>
              <p className="text-sm text-[#BFC8D3] leading-relaxed">
                {clash.formatSummary.groupStructure}
              </p>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3">
              <Link
                href="/aic-titans-cup/competitions/clash-of-the-titans"
                className="w-full text-center py-4 px-5 rounded-xl bg-[#C7F464] text-[#101D32] font-titan-display font-bold text-xs uppercase tracking-wider"
              >
                Open Clash of the Titans &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
