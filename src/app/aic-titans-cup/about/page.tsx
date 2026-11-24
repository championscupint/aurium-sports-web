"use client";

import React from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { ShieldCheck, Clock, Trophy, Download, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const { store } = useEcosystem();

  return (
    <div className="min-h-screen bg-[#040914] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400">
            ABOUT AIC TITANS CUP · INSTITUTIONAL GOVERNANCE &amp; RULEBOOK
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
            Nepal&apos;s Five-Competition <span className="text-amber-400">Banking Football</span> Ecosystem.
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Created by <strong className="text-white">Aurium Sports – The Aurium Academy Pvt. Ltd.</strong>, AIC Titans Cup unites all 105 NRB-licensed Class A, B, C, and D Banks and Financial Institutions across four peer-group qualifying championships and the fifth championship tournament: <strong className="text-amber-300">Clash of the Titans – The Bankers Championship</strong>.
          </p>
        </div>

        {/* Locked Match Clock Table */}
        <div className="rounded-3xl bg-[#081326] border border-amber-400/35 p-6 md:p-8 space-y-4">
          <div className="text-xs font-black uppercase tracking-widest text-amber-400">
            LOCKED TECHNICAL RULE · 7m LEAGUE HALVES / 10m ALL KNOCKOUT HALVES
          </div>
          <h2 className="font-display font-black text-2xl text-white">
            Standardized Match Clock Across All Five Competitions &amp; 7 Regional Hubs
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[700px]">
              <thead>
                <tr className="border-b border-white/15 text-slate-400">
                  <th className="py-3">Competition Stage</th>
                  <th className="py-3">Half Duration</th>
                  <th className="py-3">Total Play</th>
                  <th className="py-3">Timeout</th>
                  <th className="py-3">Half-Time</th>
                  <th className="py-3">Buffer / Change</th>
                  <th className="py-3">Total Slot</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 font-bold text-white">League / Group Stage</td>
                  <td className="py-3 font-black text-amber-300">7 min × 2 halves</td>
                  <td className="py-3">14 min</td>
                  <td className="py-3">0 min</td>
                  <td className="py-3">2 min</td>
                  <td className="py-3">4 min</td>
                  <td className="py-3 font-bold text-teal-300">20 min</td>
                </tr>
                {[
                  "Pre-Quarter / Regional Knockout",
                  "Quarter-Finals",
                  "Semi-Finals",
                  "Third-Place Playoff",
                  "Grand Finals",
                ].map((stage) => (
                  <tr key={stage} className="border-b border-white/10">
                    <td className="py-3 font-bold text-white">{stage}</td>
                    <td className="py-3 font-black text-teal-300">10 min × 2 halves</td>
                    <td className="py-3">20 min</td>
                    <td className="py-3">2 min</td>
                    <td className="py-3">3 min</td>
                    <td className="py-3">10 min</td>
                    <td className="py-3 font-bold text-amber-300">35 min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Missing-Information & Organizer Approval Register */}
        <div className="rounded-3xl bg-[#081326] border border-white/15 p-6 md:p-8 space-y-5">
          <div className="text-xs font-extrabold uppercase tracking-widest text-teal-400">
            TRANSPARENCY &amp; GOVERNANCE · SOURCE-OF-TRUTH REGISTER
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Locked Decisions vs. Items Pending Organizer Approval
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[800px]">
              <thead>
                <tr className="border-b border-white/15 text-slate-400">
                  <th className="py-3 pr-3">ID</th>
                  <th className="py-3 pr-3">Category</th>
                  <th className="py-3 pr-3">Parameter</th>
                  <th className="py-3 pr-3">Current Policy / Placeholder</th>
                  <th className="py-3 pr-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {store.missingDecisions.map((md) => (
                  <tr key={md.id} className="border-b border-white/10">
                    <td className="py-3 pr-3 font-black text-amber-400">{md.id}</td>
                    <td className="py-3 pr-3 font-bold text-white">{md.category}</td>
                    <td className="py-3 pr-3 text-slate-200">{md.parameter}</td>
                    <td className="py-3 pr-3 text-slate-300">{md.currentPlaceholder}</td>
                    <td className="py-3 pr-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                          md.status === "LOCKED"
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-amber-500/20 text-amber-300"
                        }`}
                      >
                        {md.status === "LOCKED" ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <AlertCircle className="w-3 h-3" />
                        )}
                        {md.status.replace(/_/g, " ")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
