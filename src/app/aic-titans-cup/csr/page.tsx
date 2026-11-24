"use client";

import React from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import {
  HeartHandshake,
  ShieldCheck,
  Download,
  Lock,
} from "lucide-react";

export default function SportsCsrPage() {
  const { store } = useEcosystem();
  const m = store.csrMetrics;

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Dark Arena Hero */}
      <section className="py-16 sm:py-24 bg-[#101D32] text-white border-b border-white/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#C7F464]">
                <HeartHandshake className="w-4 h-4" /> NATIONAL CSR DESIGN MANIFESTO · LED BY AURIUM SPORTS
              </div>
              <h1 className="font-titan-display font-bold text-4xl sm:text-6xl text-white">
                WHEN BANKERS PLAY, <span className="text-[#C7F464]">COMMUNITIES WIN.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#BFC8D3] leading-relaxed">
                Aligned with Nepal Rastra Bank&apos;s (NRB) mandatory 1% net-profit CSR directive, every participating BFI&apos;s CSR contribution is deployed <strong className="text-white">100% at the local level</strong> in that institution&apos;s operating districts to build a year-round footballing environment for <strong className="text-[#C7F464]">underprivileged youth (with a 50%+ girls quota)</strong> and <strong className="text-white">create paid local jobs for licensed football coaches</strong>.
              </p>
              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href="/downloads/AIC_Titans_Cup_National_CSR_Manifesto_and_Implementation_Plan.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#C7F464] hover:bg-[#b5e550] text-[#101D32] font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Standalone National CSR Manifesto PDF
                </a>
                <Link
                  href="/aic-titans-cup/register"
                  className="bg-[#FF783D] hover:bg-[#e8662c] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-colors"
                >
                  Pledge Your Bank&apos;s Local CSR Fellowship
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <img
                src="/images/csr-grassroots-youth.jpg"
                alt="Grassroots Football CSR"
                className="rounded-3xl border-2 border-[#C7F464]/40 shadow-2xl w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Light Championship White Section: Verified CSR Impact Dashboard & Matrix */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] text-[#101D32]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Verified CSR Impact Dashboard */}
          <div className="rounded-3xl bg-[#101D32] text-white border-2 border-[#C7F464]/40 p-6 md:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
                  VERIFIED CSR IMPACT DASHBOARD · ZERO-FABRICATION GOVERNANCE
                </div>
                <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-white mt-1">
                  Live Audited Community Impact vs. Full-Ecosystem Blueprint
                </h2>
              </div>
              <Link
                href="/aic-titans-cup/admin"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C7F464] hover:underline"
              >
                <Lock className="w-3.5 h-3.5" /> Update Verified Metrics in Admin Portal &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: "Children Reached",
                  verified: m.childrenReached,
                  target: "1,997 – 3,312 Youth",
                  sub: "Underprivileged public-school youth",
                },
                {
                  label: "Girls Participating (50%+ Quota)",
                  verified: m.girlsParticipating,
                  target: "1,050 – 1,800+ Girls",
                  sub: "Affirmative female grassroots quota",
                },
                {
                  label: "Local Licensed Coaches Employed",
                  verified: m.localLicensedCoachesEmployed,
                  target: "125 – 159 Coach Jobs",
                  sub: "Paid ANFA/AFC local coaching stipends",
                },
                {
                  label: "CSR Funding Allocated (NPR)",
                  verified: m.csrFundingAllocatedNpr
                    ? `NPR ${m.csrFundingAllocatedNpr.toLocaleString()}`
                    : null,
                  target: "NPR 18.90M – 32.10M",
                  sub: "100% ring-fenced in local BFI districts",
                },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-2xl bg-[#091220] border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-[#BFC8D3]">{stat.label}</div>
                  <div className="font-titan-display font-bold text-2xl text-[#C7F464]">
                    {stat.verified !== null ? stat.verified : "Pending Verified MOU"}
                  </div>
                  <div className="text-xs font-titan-mono font-bold text-white">
                    Full-Sector Target: {stat.target}
                  </div>
                  <div className="text-[11px] text-[#BFC8D3]">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#C7F464]/10 border border-[#C7F464]/30 text-xs text-white flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C7F464] shrink-0 mt-0.5" />
              <span>{m.lastUpdatedNote}</span>
            </div>
          </div>

          {/* Class-Calibrated CSR Investment Matrix */}
          <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 md:p-8 space-y-5 shadow-sm">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FF783D]">
              EXPECTED CSR RANGES BY NRB BAFIA LICENSE CLASS
            </div>
            <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-[#101D32]">
              Class-Tiered Local CSR Bands &amp; Job Creation Deliverables
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[820px]">
                <thead>
                  <tr className="border-b-2 border-[#E2E8F0] text-[#475569] uppercase tracking-wider">
                    <th className="py-3.5 pr-4">NRB License Class</th>
                    <th className="py-3.5 pr-4">Active BFIs</th>
                    <th className="py-3.5 pr-4">Expected CSR Range / BFI</th>
                    <th className="py-3.5 pr-4">Local Licensed Coaches Hired</th>
                    <th className="py-3.5 pr-4">Underprivileged Youth &amp; Girls / BFI</th>
                    <th className="py-3.5 pr-4">Full-Sector Floor</th>
                    <th className="py-3.5">Full-Sector Ceiling</th>
                  </tr>
                </thead>
                <tbody className="font-titan-mono">
                  <tr className="border-b border-[#E2E8F0]">
                    <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">Class A · Commercial Banks</td>
                    <td className="py-3.5 pr-4">20</td>
                    <td className="py-3.5 pr-4 font-bold text-[#2563EB]">NPR 350,000 – 500,000</td>
                    <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">2 Local Coaches (1M, 1F)</td>
                    <td className="py-3.5 pr-4 font-sans">35 – 50 Youth (50%+ Girls)</td>
                    <td className="py-3.5 pr-4">NPR 7,000,000</td>
                    <td className="py-3.5">NPR 10,000,000</td>
                  </tr>
                  <tr className="border-b border-[#E2E8F0]">
                    <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">Class B · Development Banks</td>
                    <td className="py-3.5 pr-4">17</td>
                    <td className="py-3.5 pr-4 font-bold text-[#10B981]">NPR 250,000 – 400,000</td>
                    <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">1–2 Local Licensed Coaches</td>
                    <td className="py-3.5 pr-4 font-sans">25 – 40 Youth (50%+ Girls)</td>
                    <td className="py-3.5 pr-4">NPR 4,250,000</td>
                    <td className="py-3.5">NPR 6,800,000</td>
                  </tr>
                  <tr className="border-b border-[#E2E8F0]">
                    <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">Class C · Finance Companies</td>
                    <td className="py-3.5 pr-4">17</td>
                    <td className="py-3.5 pr-4 font-bold text-[#8B5CF6]">NPR 150,000 – 300,000</td>
                    <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">1 Local Licensed Coach</td>
                    <td className="py-3.5 pr-4 font-sans">15 – 30 Youth (50%+ Girls)</td>
                    <td className="py-3.5 pr-4">NPR 2,550,000</td>
                    <td className="py-3.5">NPR 5,100,000</td>
                  </tr>
                  <tr className="border-b border-[#E2E8F0]">
                    <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">Class D · Microfinance (MFI)</td>
                    <td className="py-3.5 pr-4">51</td>
                    <td className="py-3.5 pr-4 font-bold text-[#FF783D]">NPR 100,000 – 200,000</td>
                    <td className="py-3.5 pr-4 font-sans font-bold text-[#101D32]">1 Local Community Coach</td>
                    <td className="py-3.5 pr-4 font-sans">12 – 22 Rural Youth (60%+ Girls)</td>
                    <td className="py-3.5 pr-4">NPR 5,100,000</td>
                    <td className="py-3.5">NPR 10,200,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Provincial CSR Projects Grid */}
          <div className="space-y-6">
            <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-[#101D32]">
              Provincial &amp; Regional Hub CSR Activation Blueprints (All 7 Provinces)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {store.csrProjects.map((prj) => (
                <div
                  key={prj.id}
                  className="rounded-3xl bg-white border border-[#E2E8F0] p-6 flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider">
                      <span className="text-[#101D32]">{prj.province}</span>
                      <span className="px-2.5 py-1 rounded-full bg-[#101D32] text-[#C7F464]">
                        {prj.girlsQuotaPercent}%+ Girls Quota
                      </span>
                    </div>
                    <h3 className="font-titan-display font-bold text-lg text-[#101D32]">{prj.title}</h3>
                    <p className="text-xs text-[#FF783D] font-bold">{prj.districtHub}</p>
                    <p className="text-xs text-[#252B35]">{prj.targetBeneficiaries}</p>
                    <div className="p-3 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0] text-xs space-y-1">
                      <div>
                        <strong className="text-[#101D32]">Local Coaches Hired:</strong>{" "}
                        {prj.localCoachesToHire}
                      </div>
                      <div>
                        <strong className="text-[#101D32]">Participating BFIs:</strong>{" "}
                        {prj.supportingBfiClass}
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#E2E8F0] text-[11px] text-[#475569]">
                    Status: <strong className="text-[#101D32]">{prj.status.replace(/_/g, " ")}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
