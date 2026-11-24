"use client";

import React, { useState } from "react";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { Award, ShieldCheck, CheckCircle2, Download, Sparkles, Send } from "lucide-react";

export default function SponsorsPage() {
  const { store, mutateStore } = useEcosystem();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    organizationName: "",
    industryCategory: "FinTech / Payment Network",
    contactName: "",
    designation: "",
    email: "",
    phone: "",
    interestedLevel: "LEVEL_2_UMBRELLA",
    interestedCompetition: "ALL_FIVE_COMPETITIONS",
    csrInterest: true,
    message: "",
  });

  const umbrellaPackages = store.sponsorshipPackages.filter((p) => p.level === "LEVEL_2_UMBRELLA");
  const individualPackages = store.sponsorshipPackages.filter((p) => p.level === "LEVEL_1_INDIVIDUAL");
  const csrPackage = store.sponsorshipPackages.find((p) => p.level === "LOCAL_BFI_CSR");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await mutateStore("SUBMIT_SPONSOR_ENQUIRY", form);
    if (res.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#040914] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400">
            <Sparkles className="w-4 h-4" /> TWO-LEVEL COMMERCIAL &amp; CSR SPONSORSHIP ARCHITECTURE
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
            Sponsors &amp; <span className="text-amber-400">Commercial Partnerships</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Partner across <strong className="text-white">Level 2 (Complete AIC Titans Cup Umbrella Sponsorship covering all 5 competitions &amp; 7 Regional Hubs)</strong>, <strong className="text-white">Level 1 (Individual Competition Sponsorships for Type A, Type B, Type C, Type D, or Clash of the Titans)</strong>, or the <strong className="text-teal-300">Local BFI Grassroots CSR Fellowship</strong>.
          </p>
          <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Commercial Integrity Policy:</strong> All package valuations below are marked as <em>Proposed (Subject to Organizer Approval)</em>. Unapproved sponsor logos are never fabricated or displayed until contracts are executed.
            </span>
          </div>
        </div>

        {/* LEVEL 2: COMPLETE UMBRELLA SPONSORSHIP */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <div className="text-xs font-black uppercase tracking-widest text-amber-400">
              LEVEL 2 · COMPLETE AIC TITANS CUP UMBRELLA SPONSORSHIP
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
              Parent-Level Ownership Across All Five Competitions &amp; 7 Regional Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {umbrellaPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-3xl bg-gradient-to-b from-amber-500/15 to-[#081326] border-2 border-amber-400 p-7 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400 text-slate-950">
                      {pkg.slotsAvailable}
                    </span>
                    <span className="text-[10px] font-bold text-amber-300">All 5 Competitions</span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-white">{pkg.tierName}</h3>
                  <div className="text-lg font-black text-amber-400">{pkg.proposedValuationNpr}</div>
                  <p className="text-xs text-slate-300">{pkg.headline}</p>
                  <ul className="space-y-2 text-xs text-slate-200 pt-2">
                    {pkg.keyRights.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#sponsor-enquiry"
                  className="w-full text-center py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider"
                >
                  Enquire for {pkg.tierName}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* LEVEL 1: INDIVIDUAL COMPETITION SPONSORSHIPS (FIVE COMPETITIONS) */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <div className="text-xs font-black uppercase tracking-widest text-teal-400">
              LEVEL 1 · INDIVIDUAL COMPETITION SPONSORSHIPS (SEPARATE RIGHTS FOR EACH OF THE 5 COMPETITIONS)
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
              Sponsor Type A, Type B, Type C, Type D, or Clash of the Titans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-3xl bg-[#081326] border border-white/15 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-teal-300">
                    {pkg.competitionScope.toUpperCase()}
                  </span>
                  <h3 className="font-display font-black text-xl text-white">{pkg.tierName}</h3>
                  <div className="text-sm font-black text-amber-400">{pkg.proposedValuationNpr}</div>
                  <p className="text-xs text-slate-300">{pkg.headline}</p>
                  <ul className="space-y-1.5 text-xs text-slate-300 pt-2">
                    {pkg.keyRights.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#sponsor-enquiry"
                  className="w-full text-center py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Request {pkg.competitionScope.toUpperCase()} Deck
                </a>
              </div>
            ))}

            {csrPackage && (
              <div className="rounded-3xl bg-gradient-to-b from-teal-500/20 to-[#081326] border-2 border-teal-400 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-teal-400 text-slate-950">
                    STATUTORY BFI CSR · ALL 105 BFIs
                  </span>
                  <h3 className="font-display font-black text-xl text-white">{csrPackage.tierName}</h3>
                  <div className="text-sm font-black text-teal-300">{csrPackage.proposedValuationNpr}</div>
                  <p className="text-xs text-slate-200">{csrPackage.headline}</p>
                  <ul className="space-y-1.5 text-xs text-slate-200 pt-2">
                    {csrPackage.keyRights.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#sponsor-enquiry"
                  className="w-full text-center py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider"
                >
                  Enroll Your BFI in Local CSR
                </a>
              </div>
            )}
          </div>
        </section>

        {/* SPONSORSHIP & CSR ENQUIRY FORM */}
        <section id="sponsor-enquiry" className="rounded-3xl bg-[#081326] border border-amber-400/40 p-8 md:p-10">
          <div className="max-w-3xl">
            <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-2">
              DIRECT COMMERCIAL &amp; CSR PARTNERSHIP DESK
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-6">
              Submit a Sponsorship or CSR Partnership Enquiry
            </h2>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-emerald-200 space-y-2">
                <div className="font-display font-black text-xl text-white">
                  Partnership Enquiry Logged in the Aurium Commercial Desk
                </div>
                <p className="text-xs">
                  Thank you. Your enquiry has been recorded in the live administrative store with an audit timestamp. Our Commercial &amp; CSR Directorate will follow up with the customized rights agreement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Organization / Brand Name *</label>
                  <input
                    required
                    value={form.organizationName}
                    onChange={(e) => setForm({ ...form, organizationName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                    placeholder="e.g., Nepal Telecom / Nabil Bank"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Industry Category *</label>
                  <input
                    required
                    value={form.industryCategory}
                    onChange={(e) => setForm({ ...form, industryCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Contact Person Name *</label>
                  <input
                    required
                    value={form.contactName}
                    onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Designation *</label>
                  <input
                    required
                    value={form.designation}
                    onChange={(e) => setForm({ ...form, designation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                    placeholder="CMO / Head of CSR / Brand Manager"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Official Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Direct Mobile *</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Partnership Level</label>
                  <select
                    value={form.interestedLevel}
                    onChange={(e) => setForm({ ...form, interestedLevel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  >
                    <option value="LEVEL_2_UMBRELLA">Level 2: Complete Umbrella Sponsorship (All 5 Events)</option>
                    <option value="LEVEL_1_INDIVIDUAL">Level 1: Individual Competition Sponsorship</option>
                    <option value="LOCAL_BFI_CSR">Local BFI Grassroots Girls &amp; Coach CSR Fellowship</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Target Competition</label>
                  <select
                    value={form.interestedCompetition}
                    onChange={(e) => setForm({ ...form, interestedCompetition: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  >
                    <option value="ALL_FIVE_COMPETITIONS">All 5 Competitions (Umbrella / National CSR)</option>
                    <option value="clash-of-the-titans">Clash of the Titans – The Bankers Championship</option>
                    <option value="type-a">AIC Titans Cup – Type A (Commercial Banks)</option>
                    <option value="type-b">AIC Titans Cup – Type B (Development Banks)</option>
                    <option value="type-c">AIC Titans Cup – Type C (Finance Companies)</option>
                    <option value="type-d">AIC Titans Cup – Type D (Microfinance Institutions)</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-7 py-4 rounded-xl"
                  >
                    <Send className="w-4 h-4" /> Submit Partnership Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
