// Single source of truth for Aurium Football Club.
// Strictly maintains legal and operational separation from Aurium Sports (Aurium Academy Pvt. Ltd.).
// Contains only verified organisational details and non-misleading sporting ambitions.

export interface MissionPillar {
  number: string;
  title: string;
  description: string;
}

export interface JourneyStage {
  stage: string;
  title: string;
  statusBadge: string;
  description: string;
}

export interface PhilosophyPrinciple {
  title: string;
  subtitle: string;
  description: string;
}

export interface ClubPartnershipCategory {
  title: string;
  scope: string;
  description: string;
}

export interface ClubNewsArticle {
  slug: string;
  title: string;
  publishedAt: string;
  author: string;
  category:
    | 'Club Announcements'
    | 'Player Recruitment'
    | 'Trials and Selection'
    | 'Training Updates'
    | 'Match Reports'
    | 'Competition Updates'
    | 'Partnerships'
    | 'Community Initiatives';
  featuredImage: string;
  excerpt: string;
  body: string[];
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
}

export const footballClub = {
  name: 'Aurium Football Club',
  shortName: 'Aurium FC',
  tagline: 'From Grassroots to the National Stage.',
  sportsPartnerName: 'Aurium Sports',
  sportsPartnerTagline: 'Developing Footballers. Building Futures.',
  legalStatus:
    'Separately registered football club in Nepal, registered as a Profit Not Distributing Company and registered with PAN in Nepal.',
  legalDisclaimer:
    'Aurium Football Club and Aurium Sports (operated by Aurium Academy Pvt. Ltd.) are separate legal entities operating in a strategic football development partnership. Aurium Football Club is incorporated in Nepal as a Profit Not Distributing Company registered with PAN.',
  hero: {
    eyebrow: 'Official Club Hub • Nepal Football Ecosystem',
    headline: 'AURIUM FOOTBALL CLUB',
    subheadline: 'FROM GRASSROOTS TO THE NATIONAL STAGE.',
    supportingText:
      'Building a competitive football club with a commitment to player development, professional standards and the future of Nepali football.',
    secondarySupportingText:
      'With Aurium Sports as our partnering academy, we are creating a pathway that connects grassroots football development with competitive club football.',
    primaryCta: 'EXPLORE THE CLUB',
    secondaryCta: 'PARTNER WITH US',
  },
  about: {
    heading: 'A New Ambition for Nepali Football',
    paragraphs: [
      'Aurium Football Club is established with a clear ambition: to create a sustainable and competitive football institution that contributes to the growth of Nepali football.',
      'The club aims to provide talented footballers with opportunities to develop, compete and progress through organised football. It believes that strong clubs are built not only through results but also through structured development, discipline, professional management and a commitment to the football community.',
      'Through its partnership with Aurium Sports, the club aims to connect grassroots player development with competitive football, creating opportunities for players to take the next step in their football journey.',
      "The club's long-term ambition is to establish itself within Nepal's competitive football structure and work towards participation at the National Level League.",
    ],
  },
  vision: {
    heading: 'Our Vision',
    statement:
      'To become a leading football club in Nepal, recognised for developing homegrown talent, building a competitive football culture, and creating a sustainable pathway for players to progress from grassroots football to the national and international stages.',
  },
  mission: {
    heading: 'Our Mission',
    pillars: [
      {
        number: '01',
        title: 'PLAYER DEVELOPMENT',
        description:
          'Develop technically, tactically, physically and mentally strong footballers through structured and professional training.',
      },
      {
        number: '02',
        title: 'COMPETITIVE OPPORTUNITY',
        description:
          'Create meaningful opportunities for talented players from different backgrounds to compete at organised club level.',
      },
      {
        number: '03',
        title: 'GRASSROOTS-TO-CLUB PATHWAY',
        description:
          'Establish a clear development pathway from grassroots football through academy training to senior competitive football.',
      },
      {
        number: '04',
        title: 'PROFESSIONAL CULTURE',
        description:
          'Build a disciplined, inclusive and performance-driven football environment.',
      },
      {
        number: '05',
        title: 'LONG-TERM DEVELOPMENT',
        description:
          'Invest in youth development, coaching education, sports science and modern football methodologies.',
      },
      {
        number: '06',
        title: 'NATIONAL AMBITION',
        description:
          "Progressively compete within Nepal's football structure, with the ambition of reaching the National Level League.",
      },
      {
        number: '07',
        title: 'INTEGRITY AND COMMUNITY',
        description:
          'Represent Nepali football with integrity, professionalism and a commitment to long-term development.',
      },
    ] as MissionPillar[],
  },
  journey: {
    heading: 'Building Our Place in Nepali Football',
    disclaimer:
      'All competition targets reflect the strategic sporting ambitions that Aurium Football Club is actively preparing for and working towards. Entry and progression within the Nepali football pyramid remain subject to official registration windows, regulatory compliance, eligibility criteria, and sporting qualification under the relevant football authorities.',
    stages: [
      {
        stage: 'STAGE 1',
        title: 'CLUB ESTABLISHMENT',
        statusBadge: 'Foundational Phase',
        description:
          "Establishing the club's legal, administrative, financial and sporting foundations as a Profit Not Distributing Company registered with PAN in Nepal.",
      },
      {
        stage: 'STAGE 2',
        title: 'C QUALIFIER',
        statusBadge: 'Target Competitive Entry',
        description:
          "Preparing to enter the C Qualifier, the intended starting point of the club's competitive journey, subject to the applicable requirements and official acceptance.",
      },
      {
        stage: 'STAGE 3',
        title: 'COMPETITIVE DEVELOPMENT',
        statusBadge: 'Structured Progression',
        description:
          'Building a disciplined team, strengthening club operations and developing a consistent competitive structure.',
      },
      {
        stage: 'STAGE 4',
        title: 'NATIONAL LEVEL AMBITION',
        statusBadge: 'Long-Term Objective',
        description:
          "Working towards progression into the National Level League and establishing a sustainable presence in Nepal's football landscape.",
      },
    ] as JourneyStage[],
  },
  academyPartnership: {
    heading: 'One Development Ecosystem. Two Complementary Roles.',
    supportingText: [
      'Great football clubs are built on strong development foundations.',
      'Aurium Football Club has Aurium Sports as its partnering academy, creating a strategic connection between grassroots football development and competitive club football.',
      'Through this partnership, Aurium Sports focuses on identifying, nurturing and developing young footballers, while Aurium Football Club aims to provide opportunities for players to progress into competitive football.',
    ],
    cards: {
      sports: {
        name: 'AURIUM SPORTS',
        role: 'Partnering Academy',
        positioning: 'Aurium Sports – Developing Footballers. Building Futures.',
        legalEntity: 'Aurium Academy Pvt. Ltd.',
        bullets: [
          'Grassroots development.',
          'Youth coaching programmes.',
          'Technical and tactical development.',
          'School football.',
          "Girls' football.",
          'Tournaments and international exposure.',
          'Player assessment and development.',
        ],
        cta: 'EXPLORE AURIUM SPORTS',
        href: '/services/academy',
      },
      club: {
        name: 'AURIUM FOOTBALL CLUB',
        role: 'Competitive Football Club',
        positioning: 'Aurium Football Club – From Grassroots to the National Stage.',
        legalEntity: 'Profit Not Distributing Company (Registered with PAN in Nepal)',
        bullets: [
          'Senior team development.',
          'Competitive football participation.',
          'Player recruitment and selection.',
          'Club-level player development.',
          'Long-term league ambitions.',
          'Football partnerships and sponsorships.',
        ],
        cta: 'EXPLORE THE CLUB',
        href: '/football-club#about-club',
      },
    },
    pathwaySteps: [
      {
        step: '01',
        label: 'GRASSROOTS FOOTBALL',
        detail: 'Early participation, community discovery, and school football across Nepal.',
      },
      {
        step: '02',
        label: 'AURIUM SPORTS ACADEMY',
        detail: 'Structured age-group training (Ages 3–16), specialist coaching, and B.U.S.T. methodology.',
      },
      {
        step: '03',
        label: 'PLAYER DEVELOPMENT & ASSESSMENT',
        detail: 'Technical, tactical, physical, and mental evaluation alongside competitive tournament exposure.',
      },
      {
        step: '04',
        label: 'AURIUM FOOTBALL CLUB',
        detail: 'Merit-based recruitment, open trials, and transition into the senior club environment.',
      },
      {
        step: '05',
        label: 'COMPETITIVE FOOTBALL',
        detail: 'Preparing for the C Qualifier and organised club competitions in Nepal.',
      },
      {
        step: '06',
        label: 'NATIONAL LEVEL AMBITION',
        detail: 'Long-term progression towards the National Level League.',
      },
    ],
    selectionDisclaimer:
      'Important Notice on Selection & Eligibility: Training or development within Aurium Sports does not guarantee selection or a place in the Aurium Football Club team. All club selections are based strictly on sporting ability, performance, age and competition eligibility, and the club’s official selection procedures. The strategic partnership between Aurium Sports and Aurium Football Club does not grant automatic player registration, transfer rights, or regulatory eligibility exemptions.',
  },
  recruitment: {
    heading: 'Talent Deserves a Pathway.',
    description:
      'Aurium Football Club aims to build a competitive team by identifying talented footballers, supporting their development and providing opportunities to compete at higher levels.',
    channels: [
      'Players developed through Aurium Sports.',
      'Open player trials.',
      'Recommendations from coaches and football institutions.',
      'Scouting and performance assessment.',
      'Eligible players from other academies and clubs.',
    ],
    ctaLabel: 'REGISTER YOUR INTEREST',
    positions: [
      'Goalkeeper (GK)',
      'Central Defender (CB)',
      'Full-Back / Wing-Back (RB / LB)',
      'Defensive Midfielder (CDM)',
      'Central Midfielder (CM)',
      'Attacking Midfielder (CAM)',
      'Winger / Wide Forward (RW / LW)',
      'Centre Forward / Striker (ST)',
    ],
    disclaimer:
      'Submitting an expression of interest does not guarantee selection, a trial invitation, player registration, or a club contract. Official trial dates and selection windows will be communicated directly to shortlisted candidates once approved by the club.',
  },
  philosophy: {
    heading: 'How We Want to Play. How We Want to Grow.',
    principles: [
      {
        title: 'Technical Quality',
        subtitle: 'Ball Mastery Under Pressure',
        description:
          'Players comfortable in possession and capable of executing clean first touches, progressive passing, and decisive actions under high match pressure.',
      },
      {
        title: 'Tactical Intelligence',
        subtitle: 'Space, Timing & Transitions',
        description:
          'Players who understand positional structure, pressing triggers, transitions, spatial occupation, and collective decision-making across all phases of play.',
      },
      {
        title: 'Physical Preparation',
        subtitle: 'Conditioning & Athletic Durability',
        description:
          'Developing speed, strength, aerobic endurance, functional mobility, and full-match fitness tailored to the demands of competitive football.',
      },
      {
        title: 'Mental Strength',
        subtitle: 'Composure & Accountability',
        description:
          'Building confidence, emotional regulation, tactical discipline, resilience in adversity, and personal accountability on and off the pitch.',
      },
      {
        title: 'Team Identity',
        subtitle: 'Collective Responsibility',
        description:
          'Promoting collective work ethic, clear on-pitch communication, mutual trust, and a unified club culture where the team always comes first.',
      },
      {
        title: 'Continuous Improvement',
        subtitle: 'Analysis & Feedback Loops',
        description:
          'Using structured coaching, tactical review, and objective performance feedback to continually elevate both individual players and the collective unit.',
      },
    ] as PhilosophyPrinciple[],
  },
  newsCategories: [
    'All Categories',
    'Club Announcements',
    'Player Recruitment',
    'Trials and Selection',
    'Training Updates',
    'Match Reports',
    'Competition Updates',
    'Partnerships',
    'Community Initiatives',
  ] as const,
  // Intentionally empty until official club bulletins are published — zero fabricated match reports or announcements.
  newsArticles: [] as ClubNewsArticle[],
  partnerships: {
    heading: 'Be Part of the Journey. Build the Future of Nepali Football.',
    supportingText: [
      'We believe the future of Nepali football depends on strong institutions, committed partners and sustainable investment in player development.',
      'Aurium Football Club welcomes organisations, brands and individuals who share our ambition to develop football and create meaningful opportunities for players.',
    ],
    ctaLabel: 'BECOME A CLUB PARTNER',
    categories: [
      {
        title: 'Principal Club Partner',
        scope: 'Flagship Institutional Alignment',
        description:
          'Primary strategic partnership supporting club operations, competitive preparation, and long-term football development in Nepal.',
      },
      {
        title: 'Official Kit Partner',
        scope: 'Matchday & Training Apparel',
        description:
          'Supplying technical match kits, training wear, and travel apparel for the first team and club technical staff.',
      },
      {
        title: 'Training and Equipment Partner',
        scope: 'On-Pitch Training Infrastructure',
        description:
          'Supporting match balls, tactical training equipment, agility hardware, and pitch-side preparation tools.',
      },
      {
        title: 'Performance and Sports Science Partner',
        scope: 'Conditioning, Medical & Recovery',
        description:
          'Collaborating on athlete conditioning, physiotherapy, injury prevention, nutrition, and performance assessment.',
      },
      {
        title: 'Youth Development Partner',
        scope: 'Academy-to-Club Bridge',
        description:
          'Supporting talent identification, scholarship pathways, and player progression between Aurium Sports and Aurium Football Club.',
      },
      {
        title: 'Media and Broadcast Partner',
        scope: 'Digital Storytelling & Coverage',
        description:
          'Documenting the club’s journey from establishment and C Qualifier preparation to matchday coverage and player features.',
      },
      {
        title: 'Community Development Partner',
        scope: 'Grassroots & Social Impact',
        description:
          'Delivering community football clinics, youth mental wellbeing initiatives, and inclusive sporting access.',
      },
      {
        title: 'Travel and Logistics Partner',
        scope: 'Team Mobility & Operations',
        description:
          'Supporting squad transportation, domestic competition logistics, and team camp operations.',
      },
    ] as ClubPartnershipCategory[],
  },
  futureSections: [
    {
      title: 'Official Club Crest & Visual Identity',
      status: 'Placeholder — Official Crest Asset Pending Release',
      description:
        'Reserved for the official registered crest and brand mark of Aurium Football Club. Until the official crest asset is released for publication, this space displays an explicitly labelled placeholder.',
    },
    {
      title: 'First-Team Squad & Player Profiles',
      status: 'To Be Announced Following Official Squad Registration',
      description:
        'Official player roster, squad numbers, and positional profiles will be published here once player trials, selection procedures, and official competition registrations are completed.',
    },
    {
      title: 'Club Coaching & Technical Staff',
      status: 'To Be Announced Upon Official Appointments',
      description:
        'Head Coach, Assistant Coaches, Goalkeeping, Sports Science, and Club Management appointments will be published as official agreements are finalized.',
    },
    {
      title: 'Fixtures, Results & Competition Standings',
      status: 'To Be Activated Upon Official Competition Entry',
      description:
        'Verified match schedules, official C Qualifier fixtures, results, and competition tables will be published once confirmed by the organising football authorities.',
    },
  ],
} as const;
