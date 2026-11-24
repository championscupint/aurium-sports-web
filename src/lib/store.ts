import fs from "fs";
import path from "path";
import { EcosystemStore, StandingRow, Fixture, QualificationRecord } from "@/types/ecosystem";
import { INITIAL_ECOSYSTEM_STORE } from "@/data/initial-store";
import bfiCensusData from "@/data/bfis-census.json";
import { BFIInstitution, RegionalHub } from "@/types/ecosystem";

const STORE_FILE = path.join(process.cwd(), "data", "ecosystem-store.json");

export function getBfiCensus(): { bfis: BFIInstitution[]; regionalHubs: RegionalHub[] } {
  return bfiCensusData as { bfis: BFIInstitution[]; regionalHubs: RegionalHub[] };
}

export function readEcosystemStore(): EcosystemStore {
  try {
    if (fs.existsSync(STORE_FILE)) {
      const raw = fs.readFileSync(STORE_FILE, "utf-8");
      const parsed = JSON.parse(raw) as EcosystemStore;
      return parsed;
    }
  } catch (e) {
    console.warn("Falling back to INITIAL_ECOSYSTEM_STORE:", e);
  }
  return structuredClone(INITIAL_ECOSYSTEM_STORE);
}

export function writeEcosystemStore(store: EcosystemStore): EcosystemStore {
  try {
    const dir = path.dirname(STORE_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(STORE_FILE, JSON.stringify(store, null, 2), "utf-8");
  } catch (e) {
    console.warn("Unable to write store file (read-only fs fallback):", e);
  }
  return store;
}

export function recalculateClashStandings(
  qualifications: QualificationRecord[],
  fixtures: Fixture[],
  existingStandings: StandingRow[]
): StandingRow[] {
  const slotMap = new Map<string, QualificationRecord>();
  for (const q of qualifications) {
    slotMap.set(q.slotCode, q);
  }

  // Build baseline rows for all 8 slots (A1, C1, B2, D2 in Group X; B1, D1, A2, C2 in Group Y)
  const slots: Array<{ code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "D1" | "D2"; group: "Group X" | "Group Y"; src: "type-a" | "type-b" | "type-c" | "type-d" }> = [
    { code: "A1", group: "Group X", src: "type-a" },
    { code: "C1", group: "Group X", src: "type-c" },
    { code: "B2", group: "Group X", src: "type-b" },
    { code: "D2", group: "Group X", src: "type-d" },
    { code: "B1", group: "Group Y", src: "type-b" },
    { code: "D1", group: "Group Y", src: "type-d" },
    { code: "A2", group: "Group Y", src: "type-a" },
    { code: "C2", group: "Group Y", src: "type-c" },
  ];

  const rowsMap = new Map<string, StandingRow>();
  for (const s of slots) {
    const q = slotMap.get(s.code);
    const isApproved = Boolean(q && q.isVerifiedAndApproved && q.institutionName);
    const prev = existingStandings.find((r) => r.qualificationSlotCode === s.code);
    rowsMap.set(s.code, {
      teamId: s.code,
      teamName: isApproved ? `${q!.teamName || q!.institutionName} (${s.code})` : `${s.code} · Pending Verified Qualification`,
      institutionName: isApproved ? q!.institutionName! : `Awaiting Verified ${s.src.toUpperCase()} Result`,
      sourceCompetitionSlug: s.src,
      qualificationSlotCode: s.code,
      groupName: s.group,
      division: "Gentlemen",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      fairPlayPoints: prev?.fairPlayPoints ?? 0,
      qualifiedForKnockout: prev?.qualifiedForKnockout ?? false,
    });
  }

  // Only verified COMPLETED or LIVE league-group matches count toward standings
  const groupFixtures = fixtures.filter(
    (f) =>
      f.competitionSlug === "clash-of-the-titans" &&
      f.stage === "LEAGUE_GROUP" &&
      f.isVerifiedByAdmin &&
      f.homeScore !== null &&
      f.awayScore !== null
  );

  for (const m of groupFixtures) {
    const home = rowsMap.get(m.homeTeamId);
    const away = rowsMap.get(m.awayTeamId);
    if (!home || !away) continue;
    const hs = Number(m.homeScore);
    const as = Number(m.awayScore);
    home.played += 1;
    away.played += 1;
    home.goalsFor += hs;
    home.goalsAgainst += as;
    home.goalDifference = home.goalsFor - home.goalsAgainst;
    away.goalsFor += as;
    away.goalsAgainst += hs;
    away.goalDifference = away.goalsFor - away.goalsAgainst;

    if (hs > as) {
      home.won += 1;
      home.points += 3;
      away.lost += 1;
    } else if (hs < as) {
      away.won += 1;
      away.points += 3;
      home.lost += 1;
    } else {
      home.drawn += 1;
      away.drawn += 1;
      home.points += 1;
      away.points += 1;
    }
  }

  // Sort within each group by Official Tie-Breakers: 1. Points, 2. Goal Diff, 3. Goals Scored, 4. Fair Play
  const sortGroup = (groupName: "Group X" | "Group Y") => {
    const grp = Array.from(rowsMap.values()).filter((r) => r.groupName === groupName);
    grp.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      return b.fairPlayPoints - a.fairPlayPoints;
    });
    return grp;
  };

  return [...sortGroup("Group X"), ...sortGroup("Group Y")];
}
