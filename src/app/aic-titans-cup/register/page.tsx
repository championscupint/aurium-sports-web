"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { DivisionType } from "@/types/ecosystem";
import {
  Lock,
  CheckCircle2,
} from "lucide-react";

export default function RegistrationPage() {
  const { store, bfis, regionalHubs, mutateStore } = useEcosystem();
  const [selectedSlug, setSelectedSlug] = useState<"type-a" | "type-b" | "type-c" | "type-d">("type-a");
  const [selectedBfiId, setSelectedBfiId] = useState<string>("A-01");
  const [divisions, setDivisions] = useState<DivisionType[]>(["Gentlemen", "Ladies"]);
  const [preferredHub, setPreferredHub] = useState<string>("Hub 1: Kathmandu Valley Central Hub");
  const [csrDistrict, setCsrDistrict] = useState<string>("Kathmandu & Provincial Branch Districts");
  const [hrName, setHrName] = useState<string>("");
  const [hrTitle, setHrTitle] = useState<string>("Head of Human Resources");
  const [managerName, setManagerName] = useState<string>("");
  const [managerPhone, setManagerPhone] = useState<string>("");
  const [officialEmail, setOfficialEmail] = useState<string>("");
  const [coachName, setCoachName] = useState<string>("");
  const [rosterSummary, setRosterSummary] = useState<string>(
    "8 Players + 2 Team Officials (All verified 90+ days on active bank payroll)"
  );
  const [payrollConfirmed, setPayrollConfirmed] = useState<boolean>(true);
  const [submittedRecordId, setSubmittedRecordId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const comp = store.competitions.find((c) => c.slug === selectedSlug)!;
  const classBfis = useMemo(
    () => bfis.filter((b) => b.competitionSlug === selectedSlug),
    [bfis, selectedSlug]
  );
  const currentBfi = useMemo(
    () => classBfis.find((b) => b.id === selectedBfiId) || classBfis[0],
    [classBfis, selectedBfiId]
  );

  const handleCompetitionChange = (slug: "type-a" | "type-b" | "type-c" | "type-d") => {
    setSelectedSlug(slug);
    const first = bfis.find((b) => b.competitionSlug === slug);
    if (first) {
      setSelectedBfiId(first.id);
      setPreferredHub(first.assignedHub);
      setCsrDistrict(`${first.district} (${first.province})`);
    }
  };

  const handleBfiSelect = (bfiId: string) => {
    setSelectedBfiId(bfiId);
    const found = bfis.find((b) => b.id === bfiId);
    if (found) {
      setPreferredHub(found.assignedHub);
      setCsrDistrict(`${found.district} (${found.province}) — ${found.localCsrFocus}`);
    }
  };

  const toggleDivision = (div: DivisionType) => {
    if (divisions.includes(div)) {
      if (divisions.length > 1) {
        setDivisions(divisions.filter((d) => d !== div));
      }
    } else {
      setDivisions([...divisions, div]);
    }
  };

  const entryFeeTotal =
    (divisions.includes("Gentlemen") ? 25000 : 0) +
    (divisions.includes("Ladies") ? 15000 : 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const res = await mutateStore("SUBMIT_REGISTRATION", {
      competitionSlug: selectedSlug,
      institutionId: currentBfi?.id,
      institutionName: currentBfi?.name,
      nrbClass: currentBfi?.nrbClass,
      headOfficeCity: currentBfi?.headOffice,
      preferredRegionalHub: preferredHub,
      divisionsEntered: divisions,
      csrPledgeRangeNpr: comp.expectedCsrRangeNpr,
      csrPreferredDistrict: csrDistrict,
      authorizedHrRepName: hrName,
      authorizedHrRepTitle: hrTitle,
      teamManagerName: managerName,
      teamManagerPhone: managerPhone,
      officialEmail,
      coachName,
      payrollComplianceConfirmed: payrollConfirmed,
      rosterSummary,
    });
    if (res.ok) {
      setSubmittedRecordId(`Submitted for ${currentBfi?.name}`);
    } else {
      setErrorMsg(res.error || "Submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#101D32] py-14 sm:py-20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#C7F464]">
            OFFICIAL INSTITUTIONAL REGISTRATION · TYPES A, B, C &amp; D
          </div>
          <h1 className="font-titan-display font-bold text-4xl sm:text-6xl text-white">
            Register Your <span className="text-[#C7F464]">Institution</span>
          </h1>
          <p className="text-sm sm:text-base text-[#BFC8D3] leading-relaxed">
            Select your NRB license class championship (<strong className="text-white">Type A, Type B, Type C, or Type D</strong>), choose your institution from our verified 105-BFI census, select your preferred <strong className="text-[#C7F464]">Regional Tournament Hub</strong>, and enroll your <strong className="text-white">Gentlemen (NPR 25,000)</strong> and promotional <strong className="text-[#C7F464]">Ladies (NPR 15,000)</strong> squads.
          </p>
        </div>

        {/* Notice on Clash of the Titans Qualification Lock */}
        <div className="rounded-2xl bg-[#C7F464]/10 border border-[#C7F464]/40 p-5 flex items-start gap-3.5 text-xs text-white">
          <Lock className="w-5 h-5 text-[#C7F464] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#C7F464]">Clash of the Titans – The Bankers Championship (Competition 05) Is Qualification-Only:</strong>{" "}
            Clash of the Titans does not accept direct public registration. Only the officially verified Champion and Runner-Up from Type A, Type B, Type C, and Type D (8 teams per division) enter Clash of the Titans via the Administrative Qualification Transfer Module.
          </div>
        </div>

        {/* Step 1: Choose Qualifying Competition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(["type-a", "type-b", "type-c", "type-d"] as const).map((slug) => {
            const c = store.competitions.find((item) => item.slug === slug)!;
            const active = selectedSlug === slug;
            return (
              <button
                key={slug}
                type="button"
                onClick={() => handleCompetitionChange(slug)}
                className={`p-5 rounded-2xl text-left border-2 transition-all flex items-center gap-3.5 ${
                  active
                    ? "bg-[#091220] border-[#C7F464] shadow-xl"
                    : "bg-[#091220]/60 border-white/10 opacity-80 hover:opacity-100"
                }`}
              >
                <img src={c.logoPath} alt={c.name} className="w-12 h-14 object-contain shrink-0" />
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#C7F464]">
                    {c.nrbClass.split("·")[0]}
                  </div>
                  <div className="font-titan-display font-bold text-base text-white">{c.name}</div>
                  <div className="text-[11px] text-[#BFC8D3]">{c.eligibleInstitutionCount} Eligible BFIs</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Form + Live Fee & CSR Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 rounded-3xl bg-[#091220] border border-white/15 p-6 md:p-8">
            {submittedRecordId ? (
              <div className="p-8 rounded-2xl bg-[#C7F464]/15 border-2 border-[#C7F464] space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
                  <CheckCircle2 className="w-5 h-5" /> REGISTRATION LOGGED FOR HR &amp; PAYROLL VERIFICATION
                </div>
                <h3 className="font-titan-display font-bold text-2xl text-white">{submittedRecordId}</h3>
                <p className="text-xs text-[#BFC8D3] leading-relaxed">
                  Your institutional application has been recorded in the AIC Titans Cup Administrative Portal. No fake online payment was processed; official invoice and Local CSR Fellowship MOU instructions will be issued following HR payroll verification.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setSubmittedRecordId(null)}
                    className="bg-[#FF783D] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl"
                  >
                    Register Another Squad
                  </button>
                  <Link
                    href="/aic-titans-cup/admin"
                    className="bg-white/10 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl"
                  >
                    View Application in Admin Portal &rarr;
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-500/20 border border-red-400 text-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-[#C7F464] mb-1.5">
                      1. Select Your NRB-Licensed Bank / Financial Institution ({classBfis.length} in {comp.name}) *
                    </label>
                    <select
                      value={selectedBfiId}
                      onChange={(e) => handleBfiSelect(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[#C7F464]/40 text-white font-bold"
                    >
                      {classBfis.map((b) => (
                        <option key={b.id} value={b.id}>
                          [{b.id}] {b.name} — HQ: {b.headOffice} ({b.province})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-[#C7F464] mb-1.5">
                      2. Select Divisions (Promotional Ladies Fee NPR 15,000 to Boost Female Teams) *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => toggleDivision("Gentlemen")}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          divisions.includes("Gentlemen")
                            ? "bg-[#FF783D]/20 border-[#FF783D] text-white"
                            : "bg-black/30 border-white/10 text-[#BFC8D3]"
                        }`}
                      >
                        <div className="font-titan-display font-bold text-sm">
                          Gentlemen Division — NPR 25,000
                        </div>
                        <div className="text-[11px] text-[#BFC8D3] mt-0.5">
                          8 Players + 2 Officials · Min. 50% Prize Pool (70:30 Winner:Runner-Up)
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleDivision("Ladies")}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          divisions.includes("Ladies")
                            ? "bg-[#C7F464]/20 border-[#C7F464] text-white"
                            : "bg-black/30 border-white/10 text-[#BFC8D3]"
                        }`}
                      >
                        <div className="font-titan-display font-bold text-sm">
                          Ladies Division (Promotional) — NPR 15,000
                        </div>
                        <div className="text-[11px] text-[#C7F464] mt-0.5">
                          40% Preferential Female Rate · 8 Players + 2 Officials · 70:30 Prize Ratio
                        </div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#BFC8D3] mb-1.5">
                      3. Preferred Regional Tournament Hub *
                    </label>
                    <select
                      value={preferredHub}
                      onChange={(e) => setPreferredHub(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                    >
                      {regionalHubs.map((h) => (
                        <option key={h.id} value={`${h.id}: ${h.name}`}>
                          {h.id}: {h.name} ({h.cities})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#BFC8D3] mb-1.5">
                      4. Local District for BFI CSR Deployment ({comp.expectedCsrRangeNpr}) *
                    </label>
                    <input
                      required
                      value={csrDistrict}
                      onChange={(e) => setCsrDistrict(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#BFC8D3] mb-1.5">
                      5. Authorized HR Representative Name *
                    </label>
                    <input
                      required
                      value={hrName}
                      onChange={(e) => setHrName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                      placeholder="Full Name of Head of HR / CSR Chair"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#BFC8D3] mb-1.5">
                      6. HR Representative Designation *
                    </label>
                    <input
                      required
                      value={hrTitle}
                      onChange={(e) => setHrTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#BFC8D3] mb-1.5">
                      7. Team Manager Name *
                    </label>
                    <input
                      required
                      value={managerName}
                      onChange={(e) => setManagerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#BFC8D3] mb-1.5">
                      8. Team Manager Direct Mobile *
                    </label>
                    <input
                      required
                      value={managerPhone}
                      onChange={(e) => setManagerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                      placeholder="+977-98XXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#BFC8D3] mb-1.5">
                      9. Official Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={officialEmail}
                      onChange={(e) => setOfficialEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                      placeholder="hr@bank.com.np"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#BFC8D3] mb-1.5">
                      10. Team Coach Name
                    </label>
                    <input
                      value={coachName}
                      onChange={(e) => setCoachName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                      placeholder="Team Coach Name"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-[#BFC8D3] mb-1.5">
                      11. Preliminary Squad Roster &amp; Payroll Tenure Declaration (8 Players + 2 Officials)
                    </label>
                    <textarea
                      rows={3}
                      value={rosterSummary}
                      onChange={(e) => setRosterSummary(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                    />
                  </div>

                  <div className="sm:col-span-2 flex items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <input
                      type="checkbox"
                      required
                      checked={payrollConfirmed}
                      onChange={(e) => setPayrollConfirmed(e.target.checked)}
                      className="mt-1"
                    />
                    <span className="text-[#BFC8D3]">
                      We certify that all registered players hold active payroll employment with{" "}
                      <strong className="text-white">{currentBfi?.name}</strong> for at least 90 days prior to Stage 1 kickoff, and we agree to submit the HR-stamped payroll letter and official employee IDs.
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#FF783D] hover:bg-[#e8662c] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-colors"
                >
                  Submit Institutional Registration for {currentBfi?.name}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Live Cost & CSR Calculator */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-[#091220] border-2 border-[#C7F464]/50 p-6 space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
                LIVE INSTITUTIONAL SUMMARY
              </div>
              <h3 className="font-titan-display font-bold text-xl text-white">
                {currentBfi?.name}
              </h3>
              <div className="text-xs text-[#BFC8D3]">
                {currentBfi?.nrbClass} · HQ: {currentBfi?.headOffice} ({currentBfi?.estimatedBranches} branches)
              </div>

              <div className="space-y-2.5 border-t border-white/10 pt-4 text-xs">
                <div className="flex justify-between gap-2">
                  <span className="text-[#BFC8D3]">Competition:</span>
                  <strong className="text-white text-right">{comp.name}</strong>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-[#BFC8D3]">Divisions Selected:</span>
                  <strong className="text-[#C7F464] text-right">{divisions.join(" & ")}</strong>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-[#BFC8D3]">Registration Fee Total:</span>
                  <strong className="text-[#FF783D] font-titan-mono text-sm">
                    NPR {entryFeeTotal.toLocaleString()}
                  </strong>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-[#BFC8D3]">Refundable Discipline Deposit:</span>
                  <strong className="text-white font-titan-mono">
                    NPR {comp.entryFees.refundableDepositNpr.toLocaleString()}
                  </strong>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-[#BFC8D3]">Stage 1 Prize Pool Rule:</span>
                  <strong className="text-white text-right">Min. 50% (70:30 Winner:Runner-Up)</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#C7F464]/10 border border-[#C7F464]/30 space-y-1.5 text-xs">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C7F464]">
                  LOCAL CSR FELLOWSHIP ({currentBfi?.nrbClass})
                </div>
                <div className="font-titan-mono font-bold text-white">{currentBfi?.expectedCsrRange}</div>
                <p className="text-[11px] text-[#BFC8D3]">{currentBfi?.localCsrFocus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
