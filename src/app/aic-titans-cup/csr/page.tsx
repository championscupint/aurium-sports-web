"use client";

import React from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  Award,
  Download,
  MapPin,
  Sparkles,
  Lock,
} from "lucide-react";

export default function SportsCsrPage() {
  const { store } = useEcosystem();
  const m = store.csrMetrics;

  return (
    <div className="min-h-screen bg-[#040914] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-teal-400">
              <HeartHandshake className="w-4 h-4" /> NATIONAL CSR DESIGN MANIFESTO · LED BY AURIUM SPORTS
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
              WHEN BANKERS PLAY, <span className="text-amber-400">COMMUNITIES WIN.</span>
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Aligned with Nepal Rastra Bank&apos;s (NRB) mandatory 1% net-profit CSR directive, every participating BFI&apos;s CSR contribution is deployed <strong className="text-white">100% at the local level</strong> in that institution&apos;s operating districts to build a year-round footballing environment for <strong className="text-teal-300">underprivileged youth (with a 50%+ girls quota)</strong> and <strong className="text-amber-300">create paid local jobs for licensed football coaches</strong>.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/downloads/AIC_Titans_Cup_National_CSR_Manifesto_and_Implementation_Plan.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
              >
                <Download className="w-4 h-4" /> Download Standalone National CSR Manifesto PDF
              </a>
              <Link
                href="/aic-titans-cup/register"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl"
              >
                Pledge Your Bank&apos;s Local CSR Fellowship
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <img
              src="/images/csr-grassroots-youth.jpg"
              alt="Grassroots Football CSR"
              className="rounded-3xl border-2 border-teal-400/40 shadow-2xl w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Verified CSR Impact Dashboard (Zero Fabricated Numbers) */}
        <section className="rounded-3xl bg-[#081326] border-2 border-teal-400/40 p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-teal-400">
                VERIFIED CSR IMPACT DASHBOARD · ZERO-FABRICATION GOVERNANCE
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                Live Audited Community Impact vs. Full-Ecosystem Blueprint
              </h2>
            </div>
            <Link
              href="/aic-titans-cup/admin"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:underline"
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
              <div key={stat.label} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                <div className="font-display font-black text-2xl text-amber-400">
                  {stat.verified !== null ? stat.verified : "Pending Verified MOU"}
                </div>
                <div className="text-xs font-bold text-teal-300">
                  Full-Sector Target: {stat.target}
                </div>
                <div className="text-[11px] text-slate-400">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-400/30 text-xs text-teal-200 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <span>{m.lastUpdatedNote}</span>
          </div>
        </section>

        {/* Class-Calibrated CSR Investment Matrix */}
        <section className="rounded-3xl bg-[#081326] border border-white/15 p-6 md:p-8 space-y-5">
          <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            EXPECTED CSR RANGES BY NRB BAFIA LICENSE CLASS
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Class-Tiered Local CSR Bands &amp; Job Creation Deliverables
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[850px]">
              <thead>
                <tr className="border-b border-white/15 text-slate-400">
                  <th className="py-3 pr-4">NRB License Class</th>
                  <th className="py-3 pr-4">Active BFIs</th>
                  <th className="py-3 pr-4">Expected CSR Range / BFI</th>
                  <th className="py-3 pr-4">Local Licensed Coaches Hired</th>
                  <th className="py-3 pr-4">Underprivileged Youth &amp; Girls / BFI</th>
                  <th className="py-3 pr-4">Full-Sector Floor</th>
                  <th className="py-3">Full-Sector Ceiling</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 pr-4 font-bold text-white">Class A · Commercial Banks</td>
                  <td className="py-3.5 pr-4">20</td>
                  <td className="py-3.5 pr-4 font-black text-amber-400">NPR 350,000 – 500,000</td>
                  <td className="py-3.5 pr-4 font-bold text-teal-300">2 Local Coaches (1M, 1F)</td>
                  <td className="py-3.5 pr-4">35 – 50 Youth (50%+ Girls)</td>
                  <td className="py-3.5 pr-4">NPR 7,000,000</td>
                  <td className="py-3.5">NPR 10,000,000</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 pr-4 font-bold text-white">Class B · Development Banks</td>
                  <td className="py-3.5 pr-4">17</td>
                  <td className="py-3.5 pr-4 font-black text-amber-400">NPR 250,000 – 400,000</td>
                  <td className="py-3.5 pr-4 font-bold text-teal-300">1–2 Local Licensed Coaches</td>
                  <td className="py-3.5 pr-4">25 – 40 Youth (50%+ Girls)</td>
                  <td className="py-3.5 pr-4">NPR 4,250,000</td>
                  <td className="py-3.5">NPR 6,800,000</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 pr-4 font-bold text-white">Class C · Finance Companies</td>
                  <td className="py-3.5 pr-4">17</td>
                  <td className="py-3.5 pr-4 font-black text-amber-400">NPR 150,000 – 300,000</td>
                  <td className="py-3.5 pr-4 font-bold text-teal-300">1 Local Licensed Coach</td>
                  <td className="py-3.5 pr-4">15 – 30 Youth (50%+ Girls)</td>
                  <td className="py-3.5 pr-4">NPR 2,550,000</td>
                  <td className="py-3.5">NPR 5,100,000</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3.5 pr-4 font-bold text-white">Class D · Microfinance (MFI)</td>
                  <td className="py-3.5 pr-4">51</td>
                  <td className="py-3.5 pr-4 font-black text-amber-400">NPR 100,000 – 200,000</td>
                  <td className="py-3.5 pr-4 font-bold text-teal-300">1 Local Community Coach</td>
                  <td className="py-3.5 pr-4">12 – 22 Rural Youth (60%+ Girls)</td>
                  <td className="py-3.5 pr-4">NPR 5,100,000</td>
                  <td className="py-3.5">NPR 10,200,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Provincial CSR Projects Grid */}
        <section className="space-y-6">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Provincial &amp; Regional Hub CSR Activation Blueprints (All 7 Provinces)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {store.csrProjects.map((prj) => (
              <div
                key={prj.id}
                className="rounded-3xl bg-[#081326] border border-white/15 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider">
                    <span className="text-teal-300">{prj.province}</span>
                    <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">
                      {prj.girlsQuotaPercent}%+ Girls Quota
                    </span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white">{prj.title}</h3>
                  <p className="text-xs text-amber-300 font-semibold">{prj.districtHub}</p>
                  <p className="text-xs text-slate-300">{prj.targetBeneficiaries}</p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                    <div>
                      <strong className="text-teal-300">Local Coaches Hired:</strong>{" "}
                      {prj.localCoachesToHire}
                    </div>
                    <div>
                      <strong className="text-amber-300">Participating BFIs:</strong>{" "}
                      {prj.supportingBfiClass}
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400">
                  Status: <strong className="text-white">{prj.status.replace(/_/g, " ")}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
