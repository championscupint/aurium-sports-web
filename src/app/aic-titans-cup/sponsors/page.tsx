"use client";

import React, { useState, useEffect, useRef } from "react";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import {
  FormMeta,
  trackTitansSponsorEnquiry,
  trackFormView,
  trackFormStart,
  trackFormSubmitAttempt,
  trackFormValidationError,
} from "@/lib/analytics";
import { ShieldCheck, CheckCircle2, Sparkles, Send } from "lucide-react";

const TITANS_SPONSOR_META: FormMeta = {
  formId: "aic_titans_sponsorship_form",
  formName: "AIC Titans Cup Sponsorship & CSR Enquiry",
  formType: "sponsorship_enquiry",
  leadCategory: "sponsorship",
};

export default function SponsorsPage() {
  const { store, mutateStore } = useEcosystem();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
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

  useEffect(() => {
    const el = formRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackFormView(TITANS_SPONSOR_META);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const umbrellaPackages = store.sponsorshipPackages.filter((p) => p.level === "LEVEL_2_UMBRELLA");
  const individualPackages = store.sponsorshipPackages.filter((p) => p.level === "LEVEL_1_INDIVIDUAL");
  const csrPackage = store.sponsorshipPackages.find((p) => p.level === "LOCAL_BFI_CSR");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || submitted) return;

    trackFormSubmitAttempt(TITANS_SPONSOR_META);
    setErrorMsg(null);

    if (!form.organizationName.trim()) {
      setErrorMsg("Please enter your organization or brand name.");
      trackFormValidationError({
        ...TITANS_SPONSOR_META,
        errorField: "organizationName",
        errorType: "missing_required_field",
      });
      return;
    }

    if (!form.contactName.trim()) {
      setErrorMsg("Please enter the contact person's name.");
      trackFormValidationError({
        ...TITANS_SPONSOR_META,
        errorField: "contactName",
        errorType: "missing_required_field",
      });
      return;
    }

    if (!form.designation.trim()) {
      setErrorMsg("Please enter the contact person's designation.");
      trackFormValidationError({
        ...TITANS_SPONSOR_META,
        errorField: "designation",
        errorType: "missing_required_field",
      });
      return;
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setErrorMsg("Please enter a valid official email address.");
      trackFormValidationError({
        ...TITANS_SPONSOR_META,
        errorField: "email",
        errorType: "invalid_email_format",
      });
      return;
    }

    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7) {
      setErrorMsg("Please enter a valid direct mobile number.");
      trackFormValidationError({
        ...TITANS_SPONSOR_META,
        errorField: "phone",
        errorType: "invalid_phone_format",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await mutateStore("SUBMIT_SPONSOR_ENQUIRY", form);
      if (res.ok) {
        const sponId = `SPON-${Date.now().toString().slice(-6)}`;
        trackTitansSponsorEnquiry(form.interestedLevel, form.interestedCompetition, sponId);
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || "Unable to submit sponsorship enquiry.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#101D32] py-14 sm:py-20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#C7F464]">
            <Sparkles className="w-4 h-4" /> TWO-LEVEL COMMERCIAL &amp; CSR SPONSORSHIP ARCHITECTURE
          </div>
          <h1 className="font-titan-display font-bold text-4xl sm:text-6xl text-white">
            Sponsors &amp; <span className="text-[#C7F464]">Commercial Partnerships</span>
          </h1>
          <p className="text-base text-[#BFC8D3] leading-relaxed">
            Partner across <strong className="text-white">Level 2 (Complete AIC Titans Cup Umbrella Sponsorship covering all 5 competitions &amp; 7 Regional Hubs)</strong>, <strong className="text-white">Level 1 (Individual Competition Sponsorships for Type A, Type B, Type C, Type D, or Clash of the Titans)</strong>, or the <strong className="text-[#C7F464]">Local BFI Grassroots CSR Fellowship</strong>.
          </p>
          <div className="p-4 rounded-2xl bg-[#C7F464]/10 border border-[#C7F464]/30 text-xs text-white flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C7F464] shrink-0" />
            <span>
              <strong>Commercial Integrity Policy:</strong> All package valuations below are marked as <em>Proposed (Subject to Organizer Approval)</em>. Unapproved sponsor logos are never fabricated or displayed until contracts are executed.
            </span>
          </div>
        </div>

        {/* LEVEL 2: COMPLETE UMBRELLA SPONSORSHIP */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
              LEVEL 2 · COMPLETE AIC TITANS CUP UMBRELLA SPONSORSHIP
            </div>
            <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-white mt-1">
              Parent-Level Ownership Across All Five Competitions &amp; 7 Regional Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {umbrellaPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-3xl bg-[#091220] border-2 border-[#C7F464] p-7 flex flex-col justify-between space-y-5 shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#C7F464] text-[#101D32]">
                      {pkg.slotsAvailable}
                    </span>
                    <span className="text-[10px] font-bold text-[#C7F464]">All 5 Competitions</span>
                  </div>
                  <h3 className="font-titan-display font-bold text-2xl text-white">{pkg.tierName}</h3>
                  <div className="text-lg font-titan-mono font-bold text-[#C7F464]">{pkg.proposedValuationNpr}</div>
                  <p className="text-xs text-[#BFC8D3]">{pkg.headline}</p>
                  <ul className="space-y-2 text-xs text-white/90 pt-2">
                    {pkg.keyRights.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C7F464] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#sponsor-enquiry"
                  className="w-full text-center py-3.5 rounded-xl bg-[#FF783D] hover:bg-[#e8662c] text-white font-extrabold text-xs uppercase tracking-wider transition-colors"
                >
                  Enquire for {pkg.tierName}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* LEVEL 1: INDIVIDUAL COMPETITION SPONSORSHIPS */}
        <section className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FF783D]">
              LEVEL 1 · INDIVIDUAL COMPETITION SPONSORSHIPS (SEPARATE RIGHTS FOR EACH OF THE 5 COMPETITIONS)
            </div>
            <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-white mt-1">
              Sponsor Type A, Type B, Type C, Type D, or Clash of the Titans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-3xl bg-[#091220] border border-white/15 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-[#C7F464]">
                    {pkg.competitionScope.toUpperCase()}
                  </span>
                  <h3 className="font-titan-display font-bold text-xl text-white">{pkg.tierName}</h3>
                  <div className="text-sm font-titan-mono font-bold text-[#FF783D]">{pkg.proposedValuationNpr}</div>
                  <p className="text-xs text-[#BFC8D3]">{pkg.headline}</p>
                  <ul className="space-y-1.5 text-xs text-white/90 pt-2">
                    {pkg.keyRights.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C7F464] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#sponsor-enquiry"
                  className="w-full text-center py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Request {pkg.competitionScope.toUpperCase()} Deck
                </a>
              </div>
            ))}

            {csrPackage && (
              <div className="rounded-3xl bg-[#091220] border-2 border-[#10B981] p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#10B981] text-[#091220]">
                    STATUTORY BFI CSR · ALL 105 BFIs
                  </span>
                  <h3 className="font-titan-display font-bold text-xl text-white">{csrPackage.tierName}</h3>
                  <div className="text-sm font-titan-mono font-bold text-[#10B981]">{csrPackage.proposedValuationNpr}</div>
                  <p className="text-xs text-[#BFC8D3]">{csrPackage.headline}</p>
                  <ul className="space-y-1.5 text-xs text-white/90 pt-2">
                    {csrPackage.keyRights.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#sponsor-enquiry"
                  className="w-full text-center py-3 rounded-xl bg-[#10B981] hover:bg-[#0ea572] text-[#091220] font-extrabold text-xs uppercase tracking-wider transition-colors"
                >
                  Enroll Your BFI in Local CSR
                </a>
              </div>
            )}
          </div>
        </section>

        {/* SPONSORSHIP & CSR ENQUIRY FORM */}
        <section id="sponsor-enquiry" className="rounded-3xl bg-[#F7F8FA] text-[#101D32] border border-[#E2E8F0] p-6 sm:p-10">
          <div className="max-w-3xl">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FF783D] mb-2">
              DIRECT COMMERCIAL &amp; CSR PARTNERSHIP DESK
            </div>
            <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-[#101D32] mb-6">
              Submit a Sponsorship or CSR Partnership Enquiry
            </h2>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#101D32] text-white border border-[#C7F464] space-y-2">
                <div className="font-titan-display font-bold text-xl text-[#C7F464]">
                  Partnership Enquiry Logged in the Aurium Commercial Desk
                </div>
                <p className="text-xs text-[#BFC8D3]">
                  Thank you. Your enquiry has been recorded in the live administrative store with an audit timestamp. Our Commercial &amp; CSR Directorate will follow up with the customized rights agreement.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                id="aic_titans_sponsorship_form"
                data-form-id="aic_titans_sponsorship_form"
                onSubmit={handleSubmit}
                noValidate
                onChange={() => {
                  trackFormStart(TITANS_SPONSOR_META);
                  if (errorMsg) setErrorMsg(null);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
              >
                {errorMsg && (
                  <div
                    role="alert"
                    data-testid="sponsor-form-error"
                    className="sm:col-span-2 p-3.5 rounded-xl bg-red-500/15 border border-red-500/40 text-red-800 font-bold"
                  >
                    {errorMsg}
                  </div>
                )}
                <div>
                  <label className="block font-bold text-[#101D32] mb-1">Organization / Brand Name *</label>
                  <input
                    required
                    value={form.organizationName}
                    onChange={(e) => setForm({ ...form, organizationName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#101D32]"
                    placeholder="e.g., Nepal Telecom / Nabil Bank"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#101D32] mb-1">Industry Category *</label>
                  <input
                    required
                    value={form.industryCategory}
                    onChange={(e) => setForm({ ...form, industryCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#101D32]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#101D32] mb-1">Contact Person Name *</label>
                  <input
                    required
                    value={form.contactName}
                    onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#101D32]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#101D32] mb-1">Designation *</label>
                  <input
                    required
                    value={form.designation}
                    onChange={(e) => setForm({ ...form, designation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#101D32]"
                    placeholder="CMO / Head of CSR / Brand Manager"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#101D32] mb-1">Official Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#101D32]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#101D32] mb-1">Direct Mobile *</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#101D32]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#101D32] mb-1">Partnership Level</label>
                  <select
                    value={form.interestedLevel}
                    onChange={(e) => setForm({ ...form, interestedLevel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#101D32]"
                  >
                    <option value="LEVEL_2_UMBRELLA">Level 2: Complete Umbrella Sponsorship (All 5 Events)</option>
                    <option value="LEVEL_1_INDIVIDUAL">Level 1: Individual Competition Sponsorship</option>
                    <option value="LOCAL_BFI_CSR">Local BFI Grassroots Girls &amp; Coach CSR Fellowship</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#101D32] mb-1">Target Competition</label>
                  <select
                    value={form.interestedCompetition}
                    onChange={(e) => setForm({ ...form, interestedCompetition: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-[#101D32]"
                  >
                    <option value="ALL_FIVE_COMPETITIONS">All 5 Competitions (Umbrella / National CSR)</option>
                    <option value="clash-of-the-titans">Clash of the Titans – The Bankers Championship</option>
                    <option value="type-a">AIC Titans Cup – Type A (Commercial Banks)</option>
                    <option value="type-b">AIC Titans Cup – Type B (Development Banks)</option>
                    <option value="type-c">AIC Titans Cup – Type C (Finance Companies)</option>
                    <option value="type-d">AIC Titans Cup – Type D (Microfinance Institutions)</option>
                  </select>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#FF783D] hover:bg-[#e8662c] text-white font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-xl transition-colors"
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
