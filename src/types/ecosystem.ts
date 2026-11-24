export type CompetitionSlug =
  | "type-a"
  | "type-b"
  | "type-c"
  | "type-d"
  | "clash-of-the-titans";

export type DivisionType = "Gentlemen" | "Ladies";

export type TournamentStatus = "UPCOMING" | "LIVE" | "COMPLETED";

export type RegistrationStatus =
  | "OPEN"
  | "CLOSING_SOON"
  | "CLOSED"
  | "QUALIFICATION_ONLY";

export interface TournamentEdition {
  id: string;
  name: string;
  seasonLabel: string; // e.g., "Inaugural Edition · Year [TO BE CONFIRMED]"
  status: TournamentStatus;
  parentOrganization: string;
  officialDomain: string;
  centralTagline: string;
  supportingTagline: string;
  matchClockRule: {
    leagueStage: string;
    knockoutStage: string;
    leagueSlotMinutes: number;
    knockoutSlotMinutes: number;
    tieBreakerGroup: string[];
    tieBreakerKnockout: string;
  };
  prizePoolPolicy: {
    stage1GuaranteedMinimumPercent: number;
    winnerSharePercent: number;
    runnerUpSharePercent: number;
    otherPositionsPolicy: string;
    clashFinalePurseStatus: string;
  };
}

export interface Competition {
  id: string;
  slug: CompetitionSlug;
  code: "TYPE_A" | "TYPE_B" | "TYPE_C" | "TYPE_D" | "CLASH";
  name: string;
  shortName: string;
  subtitle: string;
  tagline: string;
  isChampionship: boolean;
  nrbClass: string;
  targetAudience: string;
  associationPartner: string;
  eligibleInstitutionCount: number;
  logoPath: string;
  accentColor: string;
  accentHex: string;
  secondaryHex: string;
  badgeText: string;
  nepaliMonthWindow: string;
  calendarPositions: string;
  registrationMonthProposed: string;
  registrationStatus: RegistrationStatus;
  tournamentStatus: TournamentStatus;
  entryFees: {
    gentlemenNpr: number | null;
    ladiesNpr: number | null;
    refundableDepositNpr: number;
    note: string;
  };
  squadRules: {
    players: number;
    officials: number;
    payrollTenureDays: number;
    verificationRequired: string[];
  };
  formatSummary: {
    groupStructure: string;
    matchCountPolicy: string;
    leagueHalfDuration: string;
    knockoutHalfDuration: string;
    qualificationReward: string;
  };
  regionalHubsSummary: string;
  expectedCsrRangeNpr: string;
  csrLocalDeliverable: string;
  handbookPdfUrl: string;
  sponsorshipTiersProposed: {
    titleNpr: string;
    presentingNpr: string;
    associateNpr: string;
  };
  verifiedChampionInstitutionId: string | null;
  verifiedRunnerUpInstitutionId: string | null;
  verifiedLadiesChampionInstitutionId: string | null;
  verifiedLadiesRunnerUpInstitutionId: string | null;
}

export interface BFIInstitution {
  id: string;
  name: string;
  nrbClass: "Class A" | "Class B" | "Class C" | "Class D";
  competitionSlug: CompetitionSlug;
  headOffice: string;
  district: string;
  province: string;
  operatingScope: string;
  estimatedBranches: string;
  branchSpread: string;
  assignedHub: string;
  expectedCsrRange: string;
  localCsrFocus: string;
}

export interface RegionalHub {
  id: string;
  name: string;
  cities: string;
  province: string;
  hqsHosted: string;
  density: string;
  operationalPlan: string;
}

export interface Player {
  id: string;
  name: string;
  employeeId: string;
  role: "Player" | "Captain" | "Goalkeeper" | "Coach" | "Manager";
  payrollVerified: boolean;
  goals?: number;
  assists?: number;
  cleanSheets?: number;
}

export interface Team {
  id: string;
  institutionId: string;
  institutionName: string;
  teamName: string;
  competitionSlug: CompetitionSlug;
  division: DivisionType;
  regionalHubId: string;
  logoText: string;
  accentHex: string;
  hrVerified: boolean;
  depositPaid: boolean;
  csrPledgedNpr?: number;
  csrDistrict?: string;
  groupName?: string;
  players: Player[];
  status: "PENDING_HR_AUDIT" | "APPROVED" | "QUALIFIED_FOR_CLASH";
}

export interface Fixture {
  id: string;
  competitionSlug: CompetitionSlug;
  division: DivisionType;
  stage: "LEAGUE_GROUP" | "PRE_QUARTER" | "QUARTER_FINAL" | "SEMI_FINAL" | "THIRD_PLACE" | "GRAND_FINAL";
  groupName?: string; // e.g., "Group X", "Group Y", "Group A"
  matchNumber: number;
  dayLabel: string; // e.g., "Shrawan Pos 9 · Matchday 1" or "Magh · Bankers' Clash-1 (Day 1)"
  venueHub: string;
  halfDurationMinutes: 7 | 10;
  slotDurationMinutes: 20 | 35;
  homeTeamId: string;
  homeTeamName: string;
  awayTeamId: string;
  awayTeamName: string;
  homeScore: number | null;
  awayScore: number | null;
  penaltyNote?: string;
  status: TournamentStatus;
  mvpPlayerName?: string;
  isVerifiedByAdmin: boolean;
}

export interface StandingRow {
  teamId: string;
  teamName: string;
  institutionName: string;
  sourceCompetitionSlug?: CompetitionSlug;
  qualificationSlotCode?: string; // A1, A2, B1, B2, C1, C2, D1, D2
  groupName: string;
  division: DivisionType;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  fairPlayPoints: number;
  qualifiedForKnockout: boolean;
}

export interface QualificationRecord {
  id: string;
  slotCode: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "D1" | "D2";
  sourceCompetitionSlug: "type-a" | "type-b" | "type-c" | "type-d";
  sourceCompetitionName: string;
  division: DivisionType;
  qualificationRank: "CHAMPION" | "RUNNER_UP";
  assignedClashGroup: "Group X" | "Group Y";
  institutionId: string | null;
  institutionName: string | null;
  teamName: string | null;
  isVerifiedAndApproved: boolean;
  approvedByAdminAt: string | null;
  notes: string;
}

export interface RegistrationApplication {
  id: string;
  createdAt: string;
  competitionSlug: "type-a" | "type-b" | "type-c" | "type-d";
  institutionId: string;
  institutionName: string;
  nrbClass: string;
  headOfficeCity: string;
  preferredRegionalHub: string;
  divisionsEntered: DivisionType[];
  calculatedEntryFeeNpr: number;
  refundableDepositNpr: number;
  csrPledgeRangeNpr: string;
  csrPreferredDistrict: string;
  authorizedHrRepName: string;
  authorizedHrRepTitle: string;
  teamManagerName: string;
  teamManagerPhone: string;
  officialEmail: string;
  coachName: string;
  payrollComplianceConfirmed: boolean;
  rosterSummary: string;
  status: "SUBMITTED" | "HR_VERIFIED" | "APPROVED";
}

export interface SponsorshipPackage {
  id: string;
  level: "LEVEL_2_UMBRELLA" | "LEVEL_1_INDIVIDUAL" | "LOCAL_BFI_CSR";
  competitionScope: CompetitionSlug | "ALL_FIVE_COMPETITIONS";
  tierName: string;
  slotsAvailable: string;
  proposedValuationNpr: string;
  valuationStatus: "PROPOSED_PENDING_APPROVAL" | "APPROVED";
  headline: string;
  keyRights: string[];
  deliverables: string[];
}

export interface SponsorProfile {
  id: string;
  name: string;
  category: string;
  tierId: string;
  tierLabel: string;
  competitionScope: CompetitionSlug | "ALL_FIVE_COMPETITIONS";
  contractPeriod: string;
  status: "PROPOSED_SLOT" | "CONFIRMED_PARTNER";
  isApprovedForPublicDisplay: boolean;
  deliverablesCompleted: number;
  deliverablesTotal: number;
  csrLinkedDistrict?: string;
}

export interface SponsorEnquiry {
  id: string;
  createdAt: string;
  organizationName: string;
  industryCategory: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  interestedLevel: string;
  interestedCompetition: string;
  csrInterest: boolean;
  message: string;
  status: "NEW" | "IN_DISCUSSION" | "APPROVED";
}

export interface CSRImpactMetrics {
  childrenReached: number | null;
  girlsParticipating: number | null;
  localLicensedCoachesEmployed: number | null;
  femaleCoachesEmployed: number | null;
  schoolsAndCommunitiesSupported: number | null;
  equipmentKitsDistributed: number | null;
  weeklySessionsDelivered: number | null;
  csrFundingAllocatedNpr: number | null;
  participatingBfisCount: number | null;
  provincesCovered: number;
  isVerifiedEvidenceOnly: boolean;
  lastUpdatedNote: string;
}

export interface CSRProject {
  id: string;
  title: string;
  province: string;
  districtHub: string;
  supportingBfiClass: string;
  supportingBfiName: string;
  expectedCsrBandNpr: string;
  targetBeneficiaries: string;
  girlsQuotaPercent: number;
  localCoachesToHire: string;
  status: "PLANNED_BLUEPRINT" | "ACTIVE_FELLOWSHIP" | "VERIFIED_COMPLETE";
  verifiedChildrenCount: number;
  verifiedCoachesHiredCount: number;
  evidenceNote: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category:
    | "Announcement"
    | "Competition Format"
    | "Regional Hubs"
    | "Sports CSR"
    | "Bankers' Escape"
    | "Sponsorship"
    | "Match Report";
  competitionSlug?: CompetitionSlug | "all";
  publishedAt: string;
  readTime: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface MissingDecisionItem {
  id: string;
  category: string;
  parameter: string;
  currentPlaceholder: string;
  status: "LOCKED" | "PENDING_ORGANIZER_APPROVAL";
  sourceReference: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  details: string;
}

export interface EcosystemStore {
  edition: TournamentEdition;
  competitions: Competition[];
  qualifications: QualificationRecord[];
  teams: Team[];
  fixtures: Fixture[];
  clashStandings: StandingRow[];
  registrations: RegistrationApplication[];
  sponsorshipPackages: SponsorshipPackage[];
  sponsors: SponsorProfile[];
  sponsorEnquiries: SponsorEnquiry[];
  csrMetrics: CSRImpactMetrics;
  csrProjects: CSRProject[];
  news: NewsArticle[];
  missingDecisions: MissingDecisionItem[];
  auditLogs: AuditLogEntry[];
}
