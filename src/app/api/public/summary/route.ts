import { NextResponse } from "next/server";
import { readEcosystemStore, getBfiCensus } from "@/lib/store";

export async function GET() {
  const store = readEcosystemStore();
  const { bfis, regionalHubs } = getBfiCensus();

  // Compute dynamic overall status from actual verified competition states
  const hasLive = store.competitions.some((c) => c.tournamentStatus === "LIVE");
  const allCompleted = store.competitions.every((c) => c.tournamentStatus === "COMPLETED");
  const computedOverallStatus = hasLive
    ? "LIVE"
    : allCompleted
    ? "COMPLETED"
    : store.edition.status;

  const nextScheduledCompetition =
    store.competitions.find((c) => c.tournamentStatus === "LIVE") ||
    store.competitions.find((c) => c.tournamentStatus === "UPCOMING") ||
    store.competitions[0];

  return NextResponse.json({
    source: "AIC Titans Cup Official Master Data Source (Read-Only Public API)",
    parentOrganization: store.edition.parentOrganization,
    officialWebsite: store.edition.officialDomain,
    tournamentName: store.edition.name,
    seasonLabel: store.edition.seasonLabel,
    centralTagline: store.edition.centralTagline,
    supportingTagline: store.edition.supportingTagline,
    status: computedOverallStatus,
    registrationStatus: store.competitions.some((c) => c.registrationStatus === "OPEN")
      ? "OPEN"
      : "QUALIFICATION_ONLY",
    nextScheduledCompetition: {
      name: nextScheduledCompetition.name,
      subtitle: nextScheduledCompetition.subtitle,
      nepaliMonthWindow: nextScheduledCompetition.nepaliMonthWindow,
      status: nextScheduledCompetition.tournamentStatus,
      registrationStatus: nextScheduledCompetition.registrationStatus,
    },
    logoUrl: "https://aictitanscup.auriumsports.com/logos/parent-crest.svg",
    bannerUrl: "https://aictitanscup.auriumsports.com/images/banking-hero.jpg",
    description:
      "Nepal's five-competition banking football & futsal championship and sporting holiday escape for all 105 NRB-licensed Banks & Financial Institutions across 7 Regional Hubs.",
    categories: [
      "Gentlemen Division (NPR 25,000 · 8 Players + 2 Officials)",
      "Ladies Division — Promotional Female Rate (NPR 15,000 · 8 Players + 2 Officials)",
    ],
    matchClockRule: store.edition.matchClockRule,
    prizePoolPolicy: store.edition.prizePoolPolicy,
    fiveCompetitions: store.competitions.map((c) => ({
      slug: c.slug,
      code: c.code,
      name: c.name,
      subtitle: c.subtitle,
      nrbClass: c.nrbClass,
      eligibleInstitutionCount: c.eligibleInstitutionCount,
      nepaliMonthWindow: c.nepaliMonthWindow,
      registrationStatus: c.registrationStatus,
      tournamentStatus: c.tournamentStatus,
      expectedCsrRangeNpr: c.expectedCsrRangeNpr,
      url: `https://aictitanscup.auriumsports.com/competitions/${c.slug}`,
    })),
    verifiedQualifications: store.qualifications.map((q) => ({
      slotCode: q.slotCode,
      sourceCompetitionName: q.sourceCompetitionName,
      qualificationRank: q.qualificationRank,
      assignedClashGroup: q.assignedClashGroup,
      institutionName: q.isVerifiedAndApproved ? q.institutionName : null,
      isVerifiedAndApproved: q.isVerifiedAndApproved,
    })),
    bfiCensusSummary: {
      totalActiveBfis: bfis.length,
      classACount: 20,
      classBCount: 17,
      classCCount: 17,
      classDCount: 51,
      outOfValleyHeadOfficesCount: 58,
      regionalHubsCount: regionalHubs.length,
    },
    publicLinks: {
      website: "https://aictitanscup.auriumsports.com",
      competitions: "https://aictitanscup.auriumsports.com/competitions",
      clashOfTheTitans: "https://aictitanscup.auriumsports.com/competitions/clash-of-the-titans",
      roadToTheClash: "https://aictitanscup.auriumsports.com/road-to-the-clash",
      registration: "https://aictitanscup.auriumsports.com/register",
      sportsCsr: "https://aictitanscup.auriumsports.com/csr",
      sponsorship: "https://aictitanscup.auriumsports.com/sponsors",
    },
  });
}
