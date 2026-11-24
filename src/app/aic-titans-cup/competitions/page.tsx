"use client";

import React from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { Trophy, ShieldCheck, ArrowRight, Download, Sparkles, Clock } from "lucide-react";

export default function CompetitionsOverviewPage() {
  const { store } = useEcosystem();
  const qualifying = store.competitions.filter((c) => !c.isChampionship);
  const clash = store.competitions.find((c) => c.isChampionship)!;

  return (
    <div className="pt-36 pb-24 min-h-screen bg-[#040914] bg-ledger-grid">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400">
            <Sparkles className="w-4 h-4" /> FIVE SEPARATE SPORTING COMPETITIONS · ONE ECOSYSTEM
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
            The Five Competitions of <span className="text-amber-400">AIC Titans Cup</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            AIC Titans Cup is not four tournaments followed by a single final match. It consists of <strong className="text-white">four individual NRB class qualifying championships (Types A, B, C, and D)</strong> followed by a <strong className="text-amber-300">fifth, full-fledged league-cum-knockout tournament: Clash of the Titans – The Bankers Championship</strong>.
          </p>
        </div>

        {/* Comparison Table of the 5 Competitions */}
        <div className="rounded-3xl bg-[#081326] border border-amber-400/35 p-6 md:p-8 overflow-x-auto">
          <div className="text-xs font-black uppercase tracking-widest text-amber-400 mb-4">
            MASTER FIVE-COMPETITION ARCHITECTURE LEDGER
          </div>
          <table className="w-full text-left text-xs min-w-[900px]">
            <thead>
              <tr className="border-b border-white/15 text-slate-400">
                <th className="py-3 pr-4">Competition</th>
                <th className="py-3 pr-4">Eligible NRB BFIs</th>
                <th className="py-3 pr-4">Calendar Window</th>
                <th className="py-3 pr-4">Entry Fee (G / L)</th>
                <th className="py-3 pr-4">Match Clock</th>
                <th className="py-3 pr-4">Prize Pool Rule</th>
                <th className="py-3 pr-4">Expected Local CSR</th>
                <th className="py-3">Explore</th>
              </tr>
            </thead>
            <tbody>
              {store.competitions.map((c) => (
                <tr key={c.slug} className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <img src={c.logoPath} alt={c.name} className="w-10 h-12 object-contain" />
                      <div>
                        <div className="font-display font-bold text-sm text-white">{c.name}</div>
                        <div className="text-[11px] text-amber-300">{c.subtitle}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 pr-4 font-semibold text-white">
                    {c.eligibleInstitutionCount} ({c.nrbClass.split("·")[0].trim()})
                  </td>
                  <td className="py-4 pr-4 text-amber-300 font-bold">{c.nepaliMonthWindow}</td>
                  <td className="py-4 pr-4 text-teal-300 font-bold">
                    {c.entryFees.gentlemenNpr
                      ? `25,000 / 15,000 NPR`
                      : "Qualification Only (Top 2/Class)"}
                  </td>
                  <td className="py-4 pr-4 text-slate-300">7m League · 10m KO</td>
                  <td className="py-4 pr-4 text-white font-semibold">
                    {c.isChampionship ? "Finale Purse: TBD" : "Min. 50% (70:30 Winner:Runner-Up)"}
                  </td>
                  <td className="py-4 pr-4 text-amber-200">{c.expectedCsrRangeNpr}</td>
                  <td className="py-4">
                    <Link
                      href={`/aic-titans-cup/competitions/${c.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-[11px] uppercase"
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
        <div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-6">
            Stage 1: The Four Qualifying Leagues (Types A, B, C &amp; D)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifying.map((c) => (
              <div
                key={c.slug}
                className="rounded-3xl bg-[#081326] border-2 p-7 flex flex-col justify-between"
                style={{ borderColor: c.accentHex }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={c.logoPath} alt={c.name} className="w-20 h-24 object-contain" />
                    <div>
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: c.accentHex }}
                      >
                        {c.badgeText}
                      </span>
                      <h3 className="font-display font-black text-2xl text-white mt-2">{c.name}</h3>
                      <p className="text-xs font-bold text-amber-300">{c.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{c.tagline}</p>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                    <div>
                      <strong className="text-amber-300">Target Audience:</strong> {c.targetAudience} ({c.associationPartner})
                    </div>
                    <div>
                      <strong className="text-amber-300">Regional Hubs:</strong> {c.regionalHubsSummary}
                    </div>
                    <div>
                      <strong className="text-teal-300">Local CSR Mandate:</strong> {c.expectedCsrRangeNpr} — {c.csrLocalDeliverable}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/aic-titans-cup/competitions/${c.slug}`}
                    className="flex-1 text-center py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-white"
                    style={{ backgroundColor: c.accentHex }}
                  >
                    Open Dedicated {c.name} Page &rarr;
                  </Link>
                  <a
                    href={c.handbookPdfUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold"
                  >
                    <Download className="w-3.5 h-3.5" /> PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5th Competition Card */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B172E] via-[#142342] to-[#1D1508] border-2 border-amber-400 p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 text-center">
              <img src={clash.logoPath} alt={clash.name} className="w-36 h-40 mx-auto object-contain" />
            </div>
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400 text-slate-950">
                COMPETITION 05 · SEPARATE LEAGUE-CUM-KNOCKOUT TOURNAMENT
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
                {clash.name} – <span className="text-amber-400">{clash.subtitle}</span>
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                {clash.formatSummary.groupStructure}
              </p>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3">
              <Link
                href="/aic-titans-cup/competitions/clash-of-the-titans"
                className="w-full text-center py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider"
              >
                Open Clash of the Titans Page &rarr;
              </Link>
              <a
                href={clash.handbookPdfUrl}
                target="_blank"
                className="w-full text-center py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider"
              >
                Download Championship PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
