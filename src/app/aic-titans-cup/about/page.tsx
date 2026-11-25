"use client";

import React from "react";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { Clock, AlertCircle, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const { store } = useEcosystem();

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Dark Arena Hero */}
      <section className="py-16 sm:py-24 bg-[#101D32] text-white border-b border-white/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#C7F464]">
              <Sparkles className="w-4 h-4" /> ABOUT AIC TITANS CUP · INSTITUTIONAL GOVERNANCE &amp; RULEBOOK
            </div>
            <h1 className="font-titan-display font-bold text-4xl sm:text-6xl text-white">
              Nepal&apos;s Five-Competition <span className="text-[#C7F464]">Banking Football</span> Ecosystem.
            </h1>
            <p className="text-base sm:text-lg text-[#BFC8D3] leading-relaxed">
              Created by <strong className="text-white">Aurium Sports – The Aurium Academy Pvt. Ltd.</strong>, AIC Titans Cup unites all 105 NRB-licensed Class A, B, C, and D Banks and Financial Institutions across four standalone category championships—whose Champions &amp; Runners-Up also qualify for the fifth grand finale tournament: <strong className="text-[#C7F464]">Clash of the Titans – The Bankers Championship</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Light Championship White Section: Locked Match Clock Table */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] text-[#101D32] border-b border-[#E2E8F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-6 md:p-8 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF783D]">
              <Clock className="w-4 h-4" /> LOCKED TECHNICAL RULE · 7m LEAGUE HALVES / 10m ALL KNOCKOUT HALVES
            </div>
            <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-[#101D32]">
              Standardized Match Clock Across All Five Competitions &amp; 7 Regional Hubs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[680px]">
                <thead>
                  <tr className="border-b-2 border-[#E2E8F0] text-[#475569] uppercase tracking-wider">
                    <th className="py-3.5 pr-4">Competition Stage</th>
                    <th className="py-3.5 pr-4">Half Duration</th>
                    <th className="py-3.5 pr-4">Total Play</th>
                    <th className="py-3.5 pr-4">Timeout</th>
                    <th className="py-3.5 pr-4">Half-Time</th>
                    <th className="py-3.5 pr-4">Buffer / Change</th>
                    <th className="py-3.5">Total Slot</th>
                  </tr>
                </thead>
                <tbody className="font-titan-mono">
                  <tr className="border-b border-[#E2E8F0] bg-[#101D32]/[0.02]">
                    <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">League / Group Stage</td>
                    <td className="py-3.5 pr-4 font-bold text-[#FF783D]">7 min × 2 halves</td>
                    <td className="py-3.5 pr-4">14 min</td>
                    <td className="py-3.5 pr-4">0 min</td>
                    <td className="py-3.5 pr-4">2 min</td>
                    <td className="py-3.5 pr-4">4 min</td>
                    <td className="py-3.5 font-bold text-[#101D32]">20 min</td>
                  </tr>
                  {[
                    "Pre-Quarter / Regional Knockout",
                    "Quarter-Finals",
                    "Semi-Finals",
                    "Third-Place Playoff",
                    "Grand Finals",
                  ].map((stage) => (
                    <tr key={stage} className="border-b border-[#E2E8F0]">
                      <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">{stage}</td>
                      <td className="py-3.5 pr-4 font-bold text-[#10B981]">10 min × 2 halves</td>
                      <td className="py-3.5 pr-4">20 min</td>
                      <td className="py-3.5 pr-4">2 min</td>
                      <td className="py-3.5 pr-4">3 min</td>
                      <td className="py-3.5 pr-4">10 min</td>
                      <td className="py-3.5 font-bold text-[#101D32]">35 min</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Governance & Source of Truth Register */}
          <div className="rounded-3xl bg-[#101D32] text-white border border-white/10 p-6 md:p-8 space-y-5 shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#C7F464]">
              <ShieldCheck className="w-4 h-4" /> TRANSPARENCY &amp; GOVERNANCE · SOURCE-OF-TRUTH REGISTER
            </div>
            <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-white">
              Locked Decisions vs. Items Pending Organizer Approval
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[760px]">
                <thead>
                  <tr className="border-b border-white/15 text-[#BFC8D3] uppercase tracking-wider">
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
                      <td className="py-3 pr-3 font-titan-mono font-bold text-[#C7F464]">{md.id}</td>
                      <td className="py-3 pr-3 font-bold text-white">{md.category}</td>
                      <td className="py-3 pr-3 text-[#BFC8D3]">{md.parameter}</td>
                      <td className="py-3 pr-3 text-white/90">{md.currentPlaceholder}</td>
                      <td className="py-3 pr-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase whitespace-nowrap ${
                            md.status === "LOCKED"
                              ? "bg-[#C7F464]/15 text-[#C7F464] border border-[#C7F464]/35"
                              : "bg-[#FF783D]/15 text-[#FF783D] border border-[#FF783D]/35"
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
      </section>
    </div>
  );
}
