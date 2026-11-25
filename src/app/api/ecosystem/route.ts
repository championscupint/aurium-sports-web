import { NextRequest, NextResponse } from "next/server";
import {
  readEcosystemStore,
  writeEcosystemStore,
  recalculateClashStandings,
  getBfiCensus,
} from "@/lib/store";
import { INITIAL_ECOSYSTEM_STORE } from "@/data/initial-store";
import { RegistrationApplication, SponsorEnquiry } from "@/types/ecosystem";

const ADMIN_KEY = process.env.AIC_ADMIN_PASSPHRASE || "aurium-titans-admin-2026";

export async function GET() {
  const store = readEcosystemStore();
  const census = getBfiCensus();
  return NextResponse.json({
    store,
    census,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, adminKey, payload } = body;
    const store = readEcosystemStore();

    // Public endpoints: Institutional Registration, Sponsor Enquiry, CSR Enquiry
    if (action === "SUBMIT_REGISTRATION") {
      const compSlug = payload.competitionSlug;
      if (compSlug === "clash-of-the-titans") {
        return NextResponse.json(
          {
            error:
              "Clash of the Titans is a qualification-only championship. Teams enter solely via verified Champion or Runner-Up finish in Type A, B, C, or D.",
          },
          { status: 400 }
        );
      }

      const divisions: ("Gentlemen" | "Ladies")[] = payload.divisionsEntered || ["Gentlemen"];
      const fee =
        (divisions.includes("Gentlemen") ? 25000 : 0) +
        (divisions.includes("Ladies") ? 15000 : 0);

      const comp = store.competitions.find((c) => c.slug === compSlug);
      const deposit = comp ? comp.entryFees.refundableDepositNpr : 2000;

      const newReg: RegistrationApplication = {
        id: `REG-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toISOString(),
        competitionSlug: compSlug,
        institutionId: payload.institutionId || "CUSTOM-BFI",
        institutionName: payload.institutionName,
        nrbClass: payload.nrbClass,
        headOfficeCity: payload.headOfficeCity,
        preferredRegionalHub: payload.preferredRegionalHub,
        divisionsEntered: divisions,
        calculatedEntryFeeNpr: fee,
        refundableDepositNpr: deposit,
        csrPledgeRangeNpr: payload.csrPledgeRangeNpr,
        csrPreferredDistrict: payload.csrPreferredDistrict,
        authorizedHrRepName: payload.authorizedHrRepName,
        authorizedHrRepTitle: payload.authorizedHrRepTitle,
        teamManagerName: payload.teamManagerName,
        teamManagerPhone: payload.teamManagerPhone,
        officialEmail: payload.officialEmail,
        coachName: payload.coachName || "To Be Confirmed",
        payrollComplianceConfirmed: Boolean(payload.payrollComplianceConfirmed),
        rosterSummary: payload.rosterSummary || "8 Players + 2 Officials (90+ Days Payroll Verified)",
        status: "SUBMITTED",
      };

      store.registrations.unshift(newReg);
      store.auditLogs.unshift({
        id: `log-${Date.now()}`,
        timestamp: new Date().toISOString(),
        actor: `${newReg.institutionName} (${newReg.authorizedHrRepName})`,
        action: "INSTITUTIONAL_REGISTRATION_SUBMITTED",
        details: `Submitted ${newReg.competitionSlug.toUpperCase()} registration for [${divisions.join(
          " & "
        )}] in ${newReg.preferredRegionalHub}. Calculated Fee: NPR ${fee.toLocaleString()} + Deposit NPR ${deposit.toLocaleString()}. Local CSR District: ${
          newReg.csrPreferredDistrict
        }.`,
      });

      writeEcosystemStore(store);
      return NextResponse.json({ ok: true, registration: newReg, store });
    }

    if (action === "SUBMIT_SPONSOR_ENQUIRY") {
      const enq: SponsorEnquiry = {
        id: `SPON-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toISOString(),
        organizationName: payload.organizationName,
        industryCategory: payload.industryCategory,
        contactName: payload.contactName,
        designation: payload.designation,
        email: payload.email,
        phone: payload.phone,
        interestedLevel: payload.interestedLevel,
        interestedCompetition: payload.interestedCompetition,
        csrInterest: Boolean(payload.csrInterest),
        message: payload.message || "",
        status: "NEW",
      };
      store.sponsorEnquiries.unshift(enq);
      store.auditLogs.unshift({
        id: `log-${Date.now()}`,
        timestamp: new Date().toISOString(),
        actor: `${enq.organizationName} (${enq.contactName})`,
        action: "COMMERCIAL_OR_CSR_ENQUIRY_RECEIVED",
        details: `Enquiry for ${enq.interestedLevel} (${enq.interestedCompetition}) | CSR Co-Sponsor: ${
          enq.csrInterest ? "Yes" : "No"
        }`,
      });
      writeEcosystemStore(store);
      return NextResponse.json({ ok: true, enquiry: enq, store });
    }

    // Protected Admin Actions require adminKey
    if (adminKey !== ADMIN_KEY) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid Tournament Directorate Admin Passphrase." },
        { status: 401 }
      );
    }

    if (action === "VERIFY_ADMIN_KEY") {
      return NextResponse.json({ ok: true, store });
    }

    if (action === "VERIFY_AND_TRANSFER_QUALIFIER") {
      // Dedicated Qualification Transfer Module: Stage 1 (Type A/B/C/D) -> Clash of the Titans (A1..D2)
      const { slotCode, institutionId, institutionName, teamName, isVerifiedAndApproved } = payload;
      const qual = store.qualifications.find((q) => q.slotCode === slotCode);
      if (!qual) {
        return NextResponse.json({ error: "Invalid Qualification Slot Code" }, { status: 400 });
      }

      qual.institutionId = isVerifiedAndApproved ? institutionId : null;
      qual.institutionName = isVerifiedAndApproved ? institutionName : null;
      qual.teamName = isVerifiedAndApproved ? teamName || institutionName : null;
      qual.isVerifiedAndApproved = Boolean(isVerifiedAndApproved);
      qual.approvedByAdminAt = isVerifiedAndApproved ? new Date().toISOString() : null;

      // Update source competition verified Champion / Runner-Up reference
      const comp = store.competitions.find((c) => c.slug === qual.sourceCompetitionSlug);
      if (comp) {
        if (qual.qualificationRank === "CHAMPION") {
          comp.verifiedChampionInstitutionId = isVerifiedAndApproved ? institutionId : null;
        } else {
          comp.verifiedRunnerUpInstitutionId = isVerifiedAndApproved ? institutionId : null;
        }
      }

      // Sync Clash of the Titans group fixture display names for this slotCode
      for (const fix of store.fixtures) {
        if (fix.competitionSlug === "clash-of-the-titans" && fix.stage === "LEAGUE_GROUP") {
          if (fix.homeTeamId === slotCode) {
            fix.homeTeamName = isVerifiedAndApproved
              ? `${institutionName} (${slotCode})`
              : `${slotCode} (Pending Verification)`;
          }
          if (fix.awayTeamId === slotCode) {
            fix.awayTeamName = isVerifiedAndApproved
              ? `${institutionName} (${slotCode})`
              : `${slotCode} (Pending Verification)`;
          }
        }
      }

      store.clashStandings = recalculateClashStandings(
        store.qualifications,
        store.fixtures,
        store.clashStandings
      );

      store.auditLogs.unshift({
        id: `log-${Date.now()}`,
        timestamp: new Date().toISOString(),
        actor: "Tournament Directorate Admin",
        action: isVerifiedAndApproved
          ? "QUALIFICATION_VERIFIED_AND_TRANSFERRED_TO_CLASH"
          : "QUALIFICATION_REVOKED_TO_PENDING",
        details: isVerifiedAndApproved
          ? `Officially verified ${institutionName} as ${qual.sourceCompetitionName} ${qual.qualificationRank} (${slotCode}) -> Transferred to Clash of the Titans ${qual.assignedClashGroup}.`
          : `Reset slot ${slotCode} to Pending Verification.`,
      });

      writeEcosystemStore(store);
      return NextResponse.json({ ok: true, store });
    }

    if (action === "UPDATE_FIXTURE_SCORE") {
      const { fixtureId, homeScore, awayScore, status, isVerifiedByAdmin, penaltyNote, mvpPlayerName } = payload;
      const fix = store.fixtures.find((f) => f.id === fixtureId);
      if (!fix) {
        return NextResponse.json({ error: "Fixture not found" }, { status: 404 });
      }
      fix.homeScore = homeScore === "" || homeScore === null ? null : Number(homeScore);
      fix.awayScore = awayScore === "" || awayScore === null ? null : Number(awayScore);
      fix.status = status;
      fix.isVerifiedByAdmin = Boolean(isVerifiedByAdmin);
      if (penaltyNote !== undefined) fix.penaltyNote = penaltyNote;
      if (mvpPlayerName !== undefined) fix.mvpPlayerName = mvpPlayerName;

      store.clashStandings = recalculateClashStandings(
        store.qualifications,
        store.fixtures,
        store.clashStandings
      );

      store.auditLogs.unshift({
        id: `log-${Date.now()}`,
        timestamp: new Date().toISOString(),
        actor: "Match Control Admin",
        action: "FIXTURE_RESULT_UPDATED",
        details: `Updated Match #${fix.matchNumber} (${fix.homeTeamName} vs ${fix.awayTeamName}): ${
          fix.homeScore ?? "-"
        } : ${fix.awayScore ?? "-"} [${fix.status}] Verified=${fix.isVerifiedByAdmin}`,
      });

      writeEcosystemStore(store);
      return NextResponse.json({ ok: true, store });
    }

    if (action === "CONFIRM_KNOCKOUT_QUALIFIERS") {
      // Admin explicitly confirms top 2 from Group X (X1, X2) and Group Y (Y1, Y2) into Semi-Finals
      const groupX = store.clashStandings.filter((r) => r.groupName === "Group X");
      const groupY = store.clashStandings.filter((r) => r.groupName === "Group Y");

      if (groupX.length >= 2 && groupY.length >= 2) {
        groupX.forEach((r, idx) => (r.qualifiedForKnockout = idx < 2));
        groupY.forEach((r, idx) => (r.qualifiedForKnockout = idx < 2));

        const sf1 = store.fixtures.find((f) => f.id === "clash-sf1");
        const sf2 = store.fixtures.find((f) => f.id === "clash-sf2");
        if (sf1) {
          sf1.homeTeamName = `${groupX[0].institutionName} (X1 · ${groupX[0].qualificationSlotCode})`;
          sf1.awayTeamName = `${groupY[1].institutionName} (Y2 · ${groupY[1].qualificationSlotCode})`;
        }
        if (sf2) {
          sf2.homeTeamName = `${groupY[0].institutionName} (Y1 · ${groupY[0].qualificationSlotCode})`;
          sf2.awayTeamName = `${groupX[1].institutionName} (X2 · ${groupX[1].qualificationSlotCode})`;
        }
      }

      store.auditLogs.unshift({
        id: `log-${Date.now()}`,
        timestamp: new Date().toISOString(),
        actor: "Tournament Directorate Admin",
        action: "CLASH_KNOCKOUT_SEMI_FINALS_CONFIRMED",
        details: "Officially confirmed Group X & Group Y top-two qualifiers into the Clash of the Titans Semi-Finals.",
      });

      writeEcosystemStore(store);
      return NextResponse.json({ ok: true, store });
    }

    if (action === "UPDATE_COMPETITION_STATUS") {
      const { slug, tournamentStatus, registrationStatus } = payload;
      const comp = store.competitions.find((c) => c.slug === slug);
      if (comp) {
        if (tournamentStatus) comp.tournamentStatus = tournamentStatus;
        if (registrationStatus) comp.registrationStatus = registrationStatus;
        store.auditLogs.unshift({
          id: `log-${Date.now()}`,
          timestamp: new Date().toISOString(),
          actor: "Tournament Directorate Admin",
          action: "COMPETITION_STATUS_UPDATED",
          details: `Updated ${comp.name}: TournamentStatus=${comp.tournamentStatus}, RegistrationStatus=${comp.registrationStatus}`,
        });
      }
      writeEcosystemStore(store);
      return NextResponse.json({ ok: true, store });
    }

    if (action === "UPDATE_CSR_METRICS") {
      store.csrMetrics = {
        ...store.csrMetrics,
        ...payload,
      };
      store.auditLogs.unshift({
        id: `log-${Date.now()}`,
        timestamp: new Date().toISOString(),
        actor: "Aurium CSR Directorate Admin",
        action: "VERIFIED_CSR_IMPACT_UPDATED",
        details: `Updated verified CSR ledger: Children=${store.csrMetrics.childrenReached ?? "Pending"}, Girls=${
          store.csrMetrics.girlsParticipating ?? "Pending"
        }, Local Coaches Employed=${store.csrMetrics.localLicensedCoachesEmployed ?? "Pending"}`,
      });
      writeEcosystemStore(store);
      return NextResponse.json({ ok: true, store });
    }

    if (action === "APPROVE_REGISTRATION") {
      const { registrationId, status } = payload;
      const reg = store.registrations.find((r) => r.id === registrationId);
      if (reg) {
        reg.status = status;
        store.auditLogs.unshift({
          id: `log-${Date.now()}`,
          timestamp: new Date().toISOString(),
          actor: "HR & Payroll Audit Committee",
          action: "REGISTRATION_STATUS_UPDATED",
          details: `Updated Registration ${reg.id} (${reg.institutionName}) status to ${status}`,
        });
      }
      writeEcosystemStore(store);
      return NextResponse.json({ ok: true, store });
    }

    if (action === "RESET_TO_CLEAN_VERIFIED_STATE") {
      const fresh = writeEcosystemStore(INITIAL_ECOSYSTEM_STORE);
      return NextResponse.json({ ok: true, store: fresh });
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
