"use client";

import React, { useState, useEffect } from "react";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import {
  Lock,
  RotateCcw,
  ShieldCheck,
  LogOut,
  Eye,
  EyeOff,
  AlertCircle,
  KeyRound,
} from "lucide-react";

const SESSION_STORAGE_KEY = "aic_titans_admin_auth_token";
const ALLOWED_EMAIL = "auriumsports@gmail.com";

export default function AdminDashboardPage() {
  const { store, bfis, mutateStore } = useEcosystem();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [adminUser, setAdminUser] = useState<string>(ALLOWED_EMAIL);
  const [adminKey, setAdminKey] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState<boolean>(false);

  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [activeTab, setActiveTab] = useState<
    | "QUALIFICATION"
    | "CLASH_CONTROL"
    | "COMPETITIONS"
    | "REGISTRATIONS"
    | "SPONSOR_ENQUIRIES"
    | "ARENA_INVESTORS"
    | "CSR_ADMIN"
    | "AUDIT_LOG"
  >("QUALIFICATION");
  const [statusBanner, setStatusBanner] = useState<string | null>(null);

  const [selectedSlotBfi, setSelectedSlotBfi] = useState<Record<string, string>>({
    A1: "A-04",
    A2: "A-09",
    B1: "B-01",
    B2: "B-08",
    C1: "C-01",
    C2: "C-05",
    D1: "D-01",
    D2: "D-35",
  });

  const [csrForm, setCsrForm] = useState({
    childrenReached: store.csrMetrics.childrenReached ?? "",
    girlsParticipating: store.csrMetrics.girlsParticipating ?? "",
    localLicensedCoachesEmployed: store.csrMetrics.localLicensedCoachesEmployed ?? "",
    csrFundingAllocatedNpr: store.csrMetrics.csrFundingAllocatedNpr ?? "",
  });

  useEffect(() => {
    try {
      const savedKey = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (savedKey) {
        mutateStore("VERIFY_ADMIN_KEY", { user: ALLOWED_EMAIL }, savedKey).then((res) => {
          if (res.ok) {
            setAdminKey(savedKey);
            setIsAuthenticated(true);
          } else {
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
          }
        });
      }
    } catch {
      // ignore sessionStorage error
    }
  }, [mutateStore]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    if (adminUser.trim().toLowerCase() !== ALLOWED_EMAIL) {
      setLoginError(`Access restricted. Only ${ALLOWED_EMAIL} is authorized to sign in.`);
      return;
    }
    setVerifying(true);
    const res = await mutateStore("VERIFY_ADMIN_KEY", { user: adminUser.trim() }, adminKey.trim());
    setVerifying(false);
    if (res.ok) {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, adminKey.trim());
      } catch {
        // ignore
      }
    } else {
      setLoginError(
        res.error || "Invalid Directorate Admin Password. Please verify your credentials."
      );
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.trim().length < 8) {
      setStatusBanner("Error: New password must be at least 8 characters long.");
      return;
    }
    if (newPassword.trim() !== confirmPassword.trim()) {
      setStatusBanner("Error: New password and confirmation do not match.");
      return;
    }
    const res = await mutateStore(
      "CHANGE_ADMIN_PASSWORD",
      { newPassword: newPassword.trim() },
      adminKey
    );
    if (res.ok) {
      const updated = newPassword.trim();
      setAdminKey(updated);
      try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, updated);
      } catch {
        // ignore
      }
      setNewPassword("");
      setConfirmPassword("");
      setShowChangePassword(false);
      setStatusBanner("Tournament Directorate Admin Password updated successfully.");
    } else {
      setStatusBanner(`Error: ${res.error}`);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminKey("");
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleQualifySlot = async (slotCode: string, approve: boolean) => {
    const bfiId = selectedSlotBfi[slotCode];
    const bfi = bfis.find((b) => b.id === bfiId);
    const res = await mutateStore(
      "VERIFY_AND_TRANSFER_QUALIFIER",
      {
        slotCode,
        institutionId: approve ? bfi?.id : null,
        institutionName: approve ? bfi?.name : null,
        teamName: approve ? `${bfi?.name}` : null,
        isVerifiedAndApproved: approve,
      },
      adminKey
    );
    if (res.ok) {
      setStatusBanner(
        approve
          ? `Verified & Transferred ${bfi?.name} into Clash of the Titans Slot ${slotCode}.`
          : `Revoked Slot ${slotCode} back to Pending Verification.`
      );
    } else {
      setStatusBanner(`Error: ${res.error}`);
    }
  };

  const handleFixtureUpdate = async (
    fixtureId: string,
    homeScore: string,
    awayScore: string,
    status: "UPCOMING" | "LIVE" | "COMPLETED",
    isVerifiedByAdmin: boolean
  ) => {
    const res = await mutateStore(
      "UPDATE_FIXTURE_SCORE",
      {
        fixtureId,
        homeScore: homeScore === "" ? null : Number(homeScore),
        awayScore: awayScore === "" ? null : Number(awayScore),
        status,
        isVerifiedByAdmin,
      },
      adminKey
    );
    if (res.ok) {
      setStatusBanner(`Updated Fixture ${fixtureId} and recalculated Clash of the Titans standings.`);
    } else {
      setStatusBanner(`Error: ${res.error}`);
    }
  };

  // STRICT AUTHENTICATION GATE: Only auriumsports@gmail.com can sign in
  if (!isAuthenticated) {
    return (
      <div className="min-h-[82vh] bg-[#101D32] py-16 sm:py-24 flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl bg-[#091220] border-2 border-[#C7F464]/40 p-7 sm:p-9 shadow-2xl space-y-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#C7F464]/15 border border-[#C7F464]/40 flex items-center justify-center text-[#C7F464] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-titan-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#C7F464]">
                RESTRICTED DIRECTORATE PORTAL
              </div>
              <h1 className="font-titan-display font-bold text-2xl text-white">
                Tournament Admin Login
              </h1>
            </div>
          </div>

          <p className="text-xs text-[#BFC8D3] leading-relaxed">
            This portal is restricted exclusively to <strong className="text-white">{ALLOWED_EMAIL}</strong>. Sign in with your Directorate password to manage competitions, verify Stage 1 qualifiers, view BFI registrations &amp; sponsor enquiries, and update CSR metrics.
          </p>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-400/50 text-xs text-red-200 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-[#BFC8D3] mb-1.5">
                Authorized Admin Email *
              </label>
              <input
                type="email"
                required
                value={adminUser}
                onChange={(e) => setAdminUser(e.target.value)}
                placeholder={ALLOWED_EMAIL}
                autoComplete="username"
                className="w-full px-4 py-3 rounded-xl bg-[#101D32] border border-white/15 focus:border-[#C7F464] focus:outline-none text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-[#BFC8D3] mb-1.5">
                Admin Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  placeholder="Enter Admin Password"
                  autoComplete="current-password"
                  className="w-full pl-4 pr-11 py-3 rounded-xl bg-[#101D32] border border-white/15 focus:border-[#C7F464] focus:outline-none text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  className="absolute right-3.5 top-3 text-[#BFC8D3] hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={verifying}
              className="w-full py-3.5 rounded-xl bg-[#FF783D] hover:bg-[#e8662c] disabled:opacity-50 text-white font-titan-display font-bold text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              {verifying ? "Verifying Directorate Credentials..." : "Sign In to Directorate Control Center"}
            </button>
          </form>

          <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#BFC8D3]/70">
            <ShieldCheck className="w-4 h-4 text-[#C7F464] shrink-0" />
            <span>
              You can set or change your custom Admin Password anytime after signing in.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#101D32] py-14 sm:py-20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Authenticated Header Bar */}
        <div className="rounded-3xl bg-[#091220] border-2 border-[#C7F464]/50 p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
              <ShieldCheck className="w-4 h-4" /> SIGNED IN AS {ALLOWED_EMAIL}
            </div>
            <h1 className="font-titan-display font-bold text-3xl sm:text-4xl text-white">
              AIC Titans Cup &amp; Clash of the Titans Control Center
            </h1>
            <p className="text-xs text-[#BFC8D3]">
              Manage all 5 competitions, verify &amp; transfer Stage 1 Champions/Runners-Up into Clash of the Titans, update live scores, audit BFI registrations &amp; sponsor enquiries, and publish verified CSR impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setShowChangePassword(!showChangePassword)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C7F464]/15 hover:bg-[#C7F464]/25 text-xs font-bold text-[#C7F464] border border-[#C7F464]/40"
            >
              <KeyRound className="w-3.5 h-3.5" /> Set / Change Password
            </button>
            <button
              onClick={async () => {
                const res = await mutateStore("RESET_TO_CLEAN_VERIFIED_STATE", {}, adminKey);
                if (res.ok) {
                  setStatusBanner("Reset ecosystem store to clean zero-fabrication baseline.");
                }
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white border border-white/15"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Baseline
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-xs font-bold text-red-200 border border-red-400/40"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          </div>
        </div>

        {/* Custom Password Setter Panel */}
        {showChangePassword && (
          <form
            onSubmit={handlePasswordChange}
            className="rounded-2xl bg-[#091220] border border-[#C7F464]/40 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end text-xs"
          >
            <div>
              <label className="block font-bold text-[#BFC8D3] mb-1">
                New Admin Password (min. 8 chars) *
              </label>
              <input
                type="password"
                required
                minLength={8}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white"
                placeholder="Enter your custom password"
              />
            </div>
            <div>
              <label className="block font-bold text-[#BFC8D3] mb-1">
                Confirm New Password *
              </label>
              <input
                type="password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white"
                placeholder="Re-enter custom password"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#C7F464] hover:bg-[#b5e550] text-[#101D32] font-extrabold uppercase tracking-wider"
              >
                Save New Password
              </button>
              <button
                type="button"
                onClick={() => setShowChangePassword(false)}
                className="py-2.5 px-4 rounded-xl bg-white/10 text-white font-bold"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {statusBanner && (
          <div className="p-4 rounded-2xl bg-[#C7F464]/15 border border-[#C7F464] text-xs text-white flex items-center justify-between gap-2">
            <span>{statusBanner}</span>
            <button onClick={() => setStatusBanner(null)} className="font-bold underline text-[#C7F464]">
              Dismiss
            </button>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "QUALIFICATION", label: "1. Qualification Transfer (A1–D2)" },
            { id: "CLASH_CONTROL", label: "2. Clash Match Control" },
            { id: "COMPETITIONS", label: "3. 5-Competition Status" },
            { id: "REGISTRATIONS", label: `4. BFI Registrations (${store.registrations.length})` },
            { id: "SPONSOR_ENQUIRIES", label: `5. Sponsor Enquiries (${store.sponsorEnquiries.length})` },
            { id: "ARENA_INVESTORS", label: `6. Arena Investors (${(store.arenaInvestorEnquiries || []).length})` },
            { id: "CSR_ADMIN", label: "7. Verified CSR Ledger" },
            { id: "AUDIT_LOG", label: `8. Audit Log (${store.auditLogs.length})` },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as typeof activeTab)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeTab === t.id
                  ? "bg-[#C7F464] text-[#101D32] shadow-lg"
                  : "bg-[#091220] text-[#BFC8D3] hover:bg-white/10 border border-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* TAB 1: DEDICATED QUALIFICATION ADMINISTRATION MODULE */}
        {activeTab === "QUALIFICATION" && (
          <div className="rounded-3xl bg-[#091220] border border-[#C7F464]/40 p-6 md:p-8 space-y-6">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
                DEDICATED QUALIFICATION MANAGEMENT MODULE
              </div>
              <h2 className="font-titan-display font-bold text-2xl text-white mt-1">
                Verify Stage 1 Champions &amp; Runners-Up &rarr; Transfer into Clash of the Titans
              </h2>
              <p className="text-xs text-[#BFC8D3] mt-1">
                After each Type A, B, C, and D tournament is completed, verify the final standings, select the confirmed Champion and Runner-Up from the NRB BFI census, and approve their transfer into Clash of the Titans Group X or Group Y.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {store.qualifications.map((q) => {
                const eligibleForSlot = bfis.filter((b) => b.competitionSlug === q.sourceCompetitionSlug);
                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-white/5 border border-white/15 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-titan-mono font-bold text-[#C7F464]">
                          SLOT {q.slotCode} · {q.qualificationRank} ({q.sourceCompetitionName})
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-white">
                          Seeds into Clash {q.assignedClashGroup}
                        </span>
                      </div>

                      <div className="text-xs text-[#BFC8D3]">
                        Current Status:{" "}
                        {q.isVerifiedAndApproved ? (
                          <strong className="text-[#C7F464]">
                            VERIFIED: {q.institutionName}
                          </strong>
                        ) : (
                          <strong className="text-[#FF783D]">
                            Pending Official Admin Verification
                          </strong>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#BFC8D3] mb-1">
                          Select Verified {q.qualificationRank} from {eligibleForSlot.length} Eligible NRB BFIs:
                        </label>
                        <select
                          value={selectedSlotBfi[q.slotCode] || eligibleForSlot[0]?.id}
                          onChange={(e) =>
                            setSelectedSlotBfi({ ...selectedSlotBfi, [q.slotCode]: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/15 text-xs text-white"
                        >
                          {eligibleForSlot.map((b) => (
                            <option key={b.id} value={b.id}>
                              [{b.id}] {b.name} ({b.headOffice})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => handleQualifySlot(q.slotCode, true)}
                        className="flex-1 py-2.5 rounded-xl bg-[#C7F464] hover:bg-[#b5e550] text-[#101D32] font-extrabold text-xs uppercase tracking-wider"
                      >
                        Verify &amp; Transfer to Clash
                      </button>
                      {q.isVerifiedAndApproved && (
                        <button
                          onClick={() => handleQualifySlot(q.slotCode, false)}
                          className="px-4 py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-400/40 font-bold text-xs"
                        >
                          Revoke
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: CLASH OF THE TITANS LEAGUE & KNOCKOUT MATCH CONTROL */}
        {activeTab === "CLASH_CONTROL" && (
          <div className="rounded-3xl bg-[#091220] border border-white/15 p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
                  CLASH OF THE TITANS · LEAGUE-CUM-KNOCKOUT ENGINE
                </div>
                <h2 className="font-titan-display font-bold text-2xl text-white mt-1">
                  Enter Verified Match Scores &amp; Confirm Semi-Finalists
                </h2>
              </div>
              <button
                onClick={async () => {
                  const res = await mutateStore("CONFIRM_KNOCKOUT_QUALIFIERS", {}, adminKey);
                  if (res.ok) {
                    setStatusBanner("Confirmed Top 2 from Group X and Group Y into Semi-Finals.");
                  }
                }}
                className="bg-[#FF783D] hover:bg-[#e8662c] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl"
              >
                Confirm Group Top-2 into Semi-Finals &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store.fixtures.map((f) => (
                <FixtureEditorCard
                  key={f.id}
                  fixture={f}
                  onSave={(hs, as, st, ver) => handleFixtureUpdate(f.id, hs, as, st, ver)}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: 5-COMPETITION STATUS CONTROL */}
        {activeTab === "COMPETITIONS" && (
          <div className="rounded-3xl bg-[#091220] border border-white/15 p-6 md:p-8 space-y-5">
            <h2 className="font-titan-display font-bold text-2xl text-white">
              Manage Tournament &amp; Registration Status Across All 5 Competitions
            </h2>
            <p className="text-xs text-[#BFC8D3]">
              Changes here dynamically update the public Read-Only Master API (<code className="text-[#C7F464]">/api/public/summary</code>) consumed by the main Aurium Sports Tournaments tab.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {store.competitions.map((c) => (
                <div key={c.slug} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="font-titan-display font-bold text-lg text-white">{c.name}</div>
                  <div className="text-xs text-[#C7F464]">{c.nepaliMonthWindow}</div>
                  <div className="space-y-2 text-xs">
                    <label className="block font-bold text-[#BFC8D3]">Tournament Status:</label>
                    <div className="flex flex-wrap gap-1.5">
                      {(["UPCOMING", "LIVE", "COMPLETED"] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() =>
                            mutateStore(
                              "UPDATE_COMPETITION_STATUS",
                              { slug: c.slug, tournamentStatus: st },
                              adminKey
                            )
                          }
                          className={`px-3 py-1.5 rounded-lg font-bold text-[11px] ${
                            c.tournamentStatus === st
                              ? "bg-[#C7F464] text-[#101D32] font-extrabold"
                              : "bg-black/40 text-[#BFC8D3]"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: INSTITUTIONAL REGISTRATIONS */}
        {activeTab === "REGISTRATIONS" && (
          <div className="rounded-3xl bg-[#091220] border border-white/15 p-6 md:p-8 space-y-5">
            <h2 className="font-titan-display font-bold text-2xl text-white">
              Submitted BFI Team Registrations ({store.registrations.length})
            </h2>
            {store.registrations.length === 0 ? (
              <p className="text-xs text-[#BFC8D3]">
                No institutional applications submitted yet.
              </p>
            ) : (
              <div className="space-y-3">
                {store.registrations.map((r) => (
                  <div
                    key={r.id}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="font-titan-display font-bold text-base text-white">
                        [{r.id}] {r.institutionName} ({r.nrbClass})
                      </div>
                      <div className="text-[#C7F464] font-bold">
                        Competition: {r.competitionSlug.toUpperCase()} · Divisions:{" "}
                        {r.divisionsEntered.join(" & ")} · Fee: NPR{" "}
                        {r.calculatedEntryFeeNpr.toLocaleString()}
                      </div>
                      <div className="text-[#BFC8D3]">
                        Hub: {r.preferredRegionalHub} · Local CSR District: {r.csrPreferredDistrict}
                      </div>
                      <div className="text-[#BFC8D3]">
                        HR Rep: {r.authorizedHrRepName} ({r.authorizedHrRepTitle}) · Manager:{" "}
                        {r.teamManagerName} ({r.teamManagerPhone}) · Email: {r.officialEmail}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(["SUBMITTED", "HR_VERIFIED", "APPROVED"] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() =>
                            mutateStore(
                              "APPROVE_REGISTRATION",
                              { registrationId: r.id, status: st },
                              adminKey
                            )
                          }
                          className={`px-3 py-2 rounded-xl font-bold text-[11px] ${
                            r.status === st
                              ? "bg-[#C7F464] text-[#101D32] font-extrabold"
                              : "bg-black/40 text-[#BFC8D3]"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: COMMERCIAL & CSR SPONSOR ENQUIRIES */}
        {activeTab === "SPONSOR_ENQUIRIES" && (
          <div className="rounded-3xl bg-[#091220] border border-white/15 p-6 md:p-8 space-y-5">
            <h2 className="font-titan-display font-bold text-2xl text-white">
              Submitted Sponsorship &amp; CSR Partnership Enquiries ({store.sponsorEnquiries.length})
            </h2>
            {store.sponsorEnquiries.length === 0 ? (
              <p className="text-xs text-[#BFC8D3]">
                No sponsorship or CSR enquiries submitted yet.
              </p>
            ) : (
              <div className="space-y-3">
                {store.sponsorEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="font-titan-display font-bold text-base text-white">
                        [{enq.id}] {enq.organizationName} ({enq.industryCategory})
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#C7F464]/15 text-[#C7F464] font-titan-mono text-[10px] font-bold">
                        {enq.status} · {enq.createdAt}
                      </span>
                    </div>
                    <div className="text-[#FF783D] font-bold">
                      Level: {enq.interestedLevel} · Target: {enq.interestedCompetition} · CSR Co-Sponsor:{" "}
                      {enq.csrInterest ? "Yes" : "No"}
                    </div>
                    <div className="text-[#BFC8D3]">
                      Contact: {enq.contactName} ({enq.designation}) · Email: {enq.email} · Phone: {enq.phone}
                    </div>
                    {enq.message && <div className="text-white/90 pt-1">Message: {enq.message}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5B: AURIUM ARENA INVESTOR ENQUIRIES */}
        {activeTab === "ARENA_INVESTORS" && (
          <div className="rounded-3xl bg-[#091220] border border-white/15 p-6 md:p-8 space-y-5">
            <h2 className="font-titan-display font-bold text-2xl text-white">
              Aurium Arena Investor Enquiries ({(store.arenaInvestorEnquiries || []).length})
            </h2>
            {(store.arenaInvestorEnquiries || []).length === 0 ? (
              <p className="text-xs text-[#BFC8D3]">
                No Aurium Arena investor enquiries submitted yet.
              </p>
            ) : (
              <div className="space-y-3">
                {(store.arenaInvestorEnquiries || []).map((enq) => (
                  <div
                    key={enq.id}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="font-titan-display font-bold text-base text-white">
                        [{enq.id}] {enq.fullName}
                        {enq.organizationName ? ` · ${enq.organizationName}` : ""} ({enq.investorType})
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#C7F464]/15 text-[#C7F464] font-titan-mono text-[10px] font-bold">
                        {enq.status} · {enq.createdAt}
                      </span>
                    </div>
                    <div className="text-[#FF783D] font-bold">
                      Model: {enq.investmentInterest} · Region: {enq.preferredRegion} · Range: {enq.estimatedTicketSize}
                    </div>
                    <div className="text-[#BFC8D3]">
                      Email: {enq.email} · Phone: {enq.phone} · Location: {enq.cityOrCountry}
                      {enq.designation ? ` · Role: ${enq.designation}` : ""}
                    </div>
                    {enq.message && <div className="text-white/90 pt-1">Notes: {enq.message}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 6: VERIFIED CSR IMPACT LEDGER */}
        {activeTab === "CSR_ADMIN" && (
          <div className="rounded-3xl bg-[#091220] border border-white/15 p-6 md:p-8 space-y-5">
            <h2 className="font-titan-display font-bold text-2xl text-white">
              Update Audited CSR Impact Metrics
            </h2>
            <p className="text-xs text-[#BFC8D3]">
              Leave fields blank to display &ldquo;Pending Verified MOU&rdquo; on the public CSR dashboard (zero-fabrication rule), or enter audited numbers as BFI CSR MOUs are executed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div>
                <label className="block font-bold text-[#BFC8D3] mb-1">Verified Children Reached</label>
                <input
                  type="number"
                  value={csrForm.childrenReached}
                  onChange={(e) => setCsrForm({ ...csrForm, childrenReached: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  placeholder="Pending Verified MOU"
                />
              </div>
              <div>
                <label className="block font-bold text-[#BFC8D3] mb-1">Verified Girls Participating</label>
                <input
                  type="number"
                  value={csrForm.girlsParticipating}
                  onChange={(e) => setCsrForm({ ...csrForm, girlsParticipating: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  placeholder="Pending Verified MOU"
                />
              </div>
              <div>
                <label className="block font-bold text-[#BFC8D3] mb-1">
                  Verified Local Licensed Coaches Employed
                </label>
                <input
                  type="number"
                  value={csrForm.localLicensedCoachesEmployed}
                  onChange={(e) =>
                    setCsrForm({ ...csrForm, localLicensedCoachesEmployed: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  placeholder="Pending Verified MOU"
                />
              </div>
              <div>
                <label className="block font-bold text-[#BFC8D3] mb-1">
                  Verified CSR Funding Allocated (NPR)
                </label>
                <input
                  type="number"
                  value={csrForm.csrFundingAllocatedNpr}
                  onChange={(e) =>
                    setCsrForm({ ...csrForm, csrFundingAllocatedNpr: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
                  placeholder="Pending Verified MOU"
                />
              </div>
            </div>
            <button
              onClick={async () => {
                const res = await mutateStore(
                  "UPDATE_CSR_METRICS",
                  {
                    childrenReached:
                      csrForm.childrenReached === "" ? null : Number(csrForm.childrenReached),
                    girlsParticipating:
                      csrForm.girlsParticipating === "" ? null : Number(csrForm.girlsParticipating),
                    localLicensedCoachesEmployed:
                      csrForm.localLicensedCoachesEmployed === ""
                        ? null
                        : Number(csrForm.localLicensedCoachesEmployed),
                    csrFundingAllocatedNpr:
                      csrForm.csrFundingAllocatedNpr === ""
                        ? null
                        : Number(csrForm.csrFundingAllocatedNpr),
                  },
                  adminKey
                );
                if (res.ok) setStatusBanner("Updated Verified CSR Impact Metrics.");
              }}
              className="bg-[#C7F464] hover:bg-[#b5e550] text-[#101D32] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl"
            >
              Publish Verified CSR Metrics
            </button>
          </div>
        )}

        {/* TAB 7: AUDIT LOG */}
        {activeTab === "AUDIT_LOG" && (
          <div className="rounded-3xl bg-[#091220] border border-white/15 p-6 md:p-8 space-y-4">
            <h2 className="font-titan-display font-bold text-2xl text-white">
              Immutable Administrative Audit Log
            </h2>
            <div className="space-y-2.5 text-xs">
              {store.auditLogs.map((log) => (
                <div key={log.id} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between text-[10px] text-[#C7F464] font-bold">
                    <span>{log.action}</span>
                    <span className="text-[#BFC8D3] font-titan-mono">{log.timestamp}</span>
                  </div>
                  <div className="text-white font-semibold mt-1">{log.details}</div>
                  <div className="text-[11px] text-[#BFC8D3] mt-0.5">Actor: {log.actor}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FixtureEditorCard({
  fixture,
  onSave,
}: {
  fixture: {
    id: string;
    matchNumber: number;
    dayLabel: string;
    groupName?: string;
    homeTeamName: string;
    awayTeamName: string;
    homeScore: number | null;
    awayScore: number | null;
    status: "UPCOMING" | "LIVE" | "COMPLETED";
    isVerifiedByAdmin: boolean;
  };
  onSave: (
    hs: string,
    as: string,
    st: "UPCOMING" | "LIVE" | "COMPLETED",
    ver: boolean
  ) => void;
}) {
  const [hs, setHs] = useState(fixture.homeScore !== null ? String(fixture.homeScore) : "");
  const [as, setAs] = useState(fixture.awayScore !== null ? String(fixture.awayScore) : "");
  const [st, setSt] = useState<"UPCOMING" | "LIVE" | "COMPLETED">(fixture.status);
  const [ver, setVer] = useState<boolean>(fixture.isVerifiedByAdmin);

  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-xs">
      <div className="flex items-center justify-between text-[10px] font-titan-mono font-bold text-[#C7F464]">
        <span>
          Match #{fixture.matchNumber} · {fixture.groupName || "Knockout"}
        </span>
        <span>{fixture.dayLabel}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-[10px] text-[#BFC8D3] truncate mb-1">
            {fixture.homeTeamName}
          </label>
          <input
            type="number"
            value={hs}
            onChange={(e) => setHs(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg bg-black/50 border border-white/15 text-white font-titan-mono font-bold"
            placeholder="Score"
          />
        </div>
        <div>
          <label className="block text-[10px] text-[#BFC8D3] truncate mb-1">
            {fixture.awayTeamName}
          </label>
          <input
            type="number"
            value={as}
            onChange={(e) => setAs(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg bg-black/50 border border-white/15 text-white font-titan-mono font-bold"
            placeholder="Score"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <select
          value={st}
          onChange={(e) => setSt(e.target.value as "UPCOMING" | "LIVE" | "COMPLETED")}
          className="px-2.5 py-1.5 rounded-lg bg-black/50 border border-white/15 text-white text-[11px]"
        >
          <option value="UPCOMING">UPCOMING</option>
          <option value="LIVE">LIVE</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        <label className="inline-flex items-center gap-1.5 text-[11px] text-[#C7F464] font-bold">
          <input
            type="checkbox"
            checked={ver}
            onChange={(e) => setVer(e.target.checked)}
          />
          Admin Verified
        </label>
        <button
          onClick={() => onSave(hs, as, st, ver)}
          className="px-3.5 py-1.5 rounded-lg bg-[#FF783D] text-white font-extrabold text-[11px] uppercase"
        >
          Save
        </button>
      </div>
    </div>
  );
}
