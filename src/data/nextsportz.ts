// Data model for NextSportz integration with Aurium Sports
// Captures verified player cards (TPR system) and stats from NextSportz-managed tournaments.

export interface NextSportzAttribute {
  key: string;
  label: string;
  value: number;
}

export interface NextSportzPlayerCard {
  id: string;
  name: string;
  number: number;
  avatar: string;
  gender: 'Boys' | 'Girls';
  ageGroup: string;
  position: 'CAM' | 'ST' | 'CB' | 'GK' | 'RW';
  positionFull: string;
  tpr: number; // Training Potential Rating (Overall OVR 0-99)
  tier: 'Gold Tier' | 'Platinum Tier' | 'Elite Competitor' | 'Pro Prospect';
  tierColor: string;
  level: string;
  xp: number;
  nextLevelXp: number;
  reputationScore: number; // 0-100
  attendanceStreak: string;
  isGoalkeeper?: boolean;
  attributes: NextSportzAttribute[];
  badges: string[];
  recentForm: ('W' | 'D' | 'L')[];
  matchStats: {
    matches: number;
    goals?: number;
    assists?: number;
    cleanSheets?: number;
    minutes: number;
    motm: number; // Man of the Match awards
  };
}

export const nextSportzPlayerCards: NextSportzPlayerCard[] = [
  {
    id: 'card-1',
    name: 'Aarav Shrestha',
    number: 10,
    avatar: '/images/player-portrait.jpg',
    gender: 'Boys',
    ageGroup: 'U14 Academy Cohort',
    position: 'CAM',
    positionFull: 'Attacking Midfielder / Playmaker',
    tpr: 88,
    tier: 'Platinum Tier',
    tierColor: 'from-amber-400 to-amber-600',
    level: 'Level 6 — Pro Prospect',
    xp: 28450,
    nextLevelXp: 30000,
    reputationScore: 98,
    attendanceStreak: '18 Weeks Active',
    attributes: [
      { key: 'PAC', label: 'Pace & Acceleration', value: 87 },
      { key: 'SHO', label: 'Shooting & Finishing', value: 84 },
      { key: 'PAS', label: 'Vision & Passing', value: 92 },
      { key: 'DRI', label: 'Ball Control & Agility', value: 90 },
      { key: 'DEF', label: 'Pressing & Interceptions', value: 68 },
      { key: 'PHY', label: 'Stamina & Core Strength', value: 81 },
    ],
    badges: [
      'AML Season 2 Top Playmaker',
      'Dana Cup 2025 Squad Finalist',
      '100% Training Attendance',
      'ANFA Grassroots Verified',
    ],
    recentForm: ['W', 'W', 'W', 'D', 'W'],
    matchStats: {
      matches: 22,
      goals: 14,
      assists: 19,
      minutes: 1320,
      motm: 7,
    },
  },
  {
    id: 'card-2',
    name: 'Kritika Thapa',
    number: 9,
    avatar: '/images/player-portrait.jpg',
    gender: 'Girls',
    ageGroup: 'U14 Girls Elite (Rato Bangala x Aurium)',
    position: 'ST',
    positionFull: 'Centre Forward / Striker',
    tpr: 91,
    tier: 'Elite Competitor',
    tierColor: 'from-purple-400 to-pink-600',
    level: 'Level 7 — National Prospect',
    xp: 42100,
    nextLevelXp: 45000,
    reputationScore: 99,
    attendanceStreak: '24 Weeks Active',
    attributes: [
      { key: 'PAC', label: 'Sprint Speed', value: 93 },
      { key: 'SHO', label: 'Clinical Finishing', value: 92 },
      { key: 'PAS', label: 'Link-Up Play', value: 83 },
      { key: 'DRI', label: '1v1 Dribbling', value: 89 },
      { key: 'DEF', label: 'High Press Recovery', value: 62 },
      { key: 'PHY', label: 'Explosive Power', value: 86 },
    ],
    badges: [
      'Dana Cup 2025 Denmark QF Star',
      'Aurium International Cup Golden Boot',
      'B.U.S.T. Leadership Captain',
      'Zero Disciplinary Cards',
    ],
    recentForm: ['W', 'W', 'W', 'W', 'W'],
    matchStats: {
      matches: 26,
      goals: 28,
      assists: 11,
      minutes: 1560,
      motm: 9,
    },
  },
  {
    id: 'card-3',
    name: 'Bikash Tamang',
    number: 1,
    avatar: '/images/player-portrait.jpg',
    gender: 'Boys',
    ageGroup: 'U16 Goalkeeping Cohort',
    position: 'GK',
    positionFull: 'Goalkeeper / Box Commander',
    isGoalkeeper: true,
    tpr: 86,
    tier: 'Platinum Tier',
    tierColor: 'from-emerald-400 to-teal-600',
    level: 'Level 5 — Elite Competitor',
    xp: 19800,
    nextLevelXp: 22000,
    reputationScore: 97,
    attendanceStreak: '14 Weeks Active',
    attributes: [
      { key: 'DIV', label: 'Diving & Reach', value: 88 },
      { key: 'HAN', label: 'Handling & Grip', value: 85 },
      { key: 'KIC', label: 'Distribution & Kicking', value: 84 },
      { key: 'REF', label: 'Reflexes & 1v1 Reaction', value: 91 },
      { key: 'SPE', label: 'Box Speed & Sweeping', value: 78 },
      { key: 'POS', label: 'Aerial Command & Pos.', value: 86 },
    ],
    badges: [
      'AML Season 2 Golden Glove',
      'Sujal Poudel GK Clinic MVP',
      'Penalty Shootout Specialist',
      'Clean Sheet Record Holder',
    ],
    recentForm: ['W', 'W', 'D', 'W', 'W'],
    matchStats: {
      matches: 18,
      cleanSheets: 11,
      assists: 2,
      minutes: 1260,
      motm: 5,
    },
  },
  {
    id: 'card-4',
    name: 'Rohan Karki',
    number: 4,
    avatar: '/images/player-portrait.jpg',
    gender: 'Boys',
    ageGroup: 'U12 Grassroots Cohort',
    position: 'CB',
    positionFull: 'Central Defender / Ball-Playing CB',
    tpr: 83,
    tier: 'Gold Tier',
    tierColor: 'from-blue-400 to-indigo-600',
    level: 'Level 4 — Ranked Player',
    xp: 11400,
    nextLevelXp: 15000,
    reputationScore: 96,
    attendanceStreak: '12 Weeks Active',
    attributes: [
      { key: 'PAC', label: 'Recovery Pace', value: 80 },
      { key: 'SHO', label: 'Set Piece Threat', value: 65 },
      { key: 'PAS', label: 'Long Distribution', value: 82 },
      { key: 'DRI', label: 'Composure on Ball', value: 78 },
      { key: 'DEF', label: 'Tackles & Interceptions', value: 89 },
      { key: 'PHY', label: 'Aerial Duels & Strength', value: 88 },
    ],
    badges: [
      'Grassroots Fair Play Award',
      'School League Best Defender',
      'Defensive Wall Badge',
    ],
    recentForm: ['W', 'D', 'W', 'W', 'D'],
    matchStats: {
      matches: 16,
      goals: 3,
      assists: 4,
      cleanSheets: 8,
      minutes: 960,
      motm: 3,
    },
  },
];

export interface TournamentStatSummary {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  edition: string;
  seasonYear: string;
  stats: {
    teams: number;
    matches: number;
    goals: number;
    avgGoalsPerMatch: string;
    cleanSheets: number;
    registeredPlayers: number;
    fairPlayScore: number;
  };
  highlights: string[];
  topScorers: {
    rank: number;
    player: string;
    team: string;
    goals: number;
    matches: number;
    tpr: number;
  }[];
  cleanSheets: {
    rank: number;
    player: string;
    team: string;
    cleanSheets: number;
    matches: number;
    savePercentage: string;
  }[];
  standingsSample: {
    rank: number;
    team: string;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    gd: number;
    points: number;
    form: ('W' | 'D' | 'L')[];
  }[];
}

export const nextSportzTournaments: TournamentStatSummary[] = [
  {
    id: 'aml',
    name: 'Aurium Mini League (AML)',
    shortName: 'Aurium Mini League',
    tagline: 'Nepal’s premier structured youth developmental league running round-robin seasonal fixtures.',
    category: 'Grassroots Youth League (U10 • U12 • U14 • U16)',
    edition: '3rd Edition 2025/26',
    seasonYear: '2025 – 2026',
    stats: {
      teams: 32,
      matches: 144,
      goals: 472,
      avgGoalsPerMatch: '3.28',
      cleanSheets: 38,
      registeredPlayers: 480,
      fairPlayScore: 98.4,
    },
    highlights: [
      'Full round-robin format with automated table updates and tiebreak rules',
      'Digital NextSportz match sheets verified by certified ANFA referees',
      'Every youth goal, assist, and card linked directly to individual player TPR cards',
      'Fair play points table enforcing positive sportsmanship values',
    ],
    topScorers: [
      { rank: 1, player: 'Aarav Shrestha', team: 'Aurium Academy U14', goals: 14, matches: 12, tpr: 88 },
      { rank: 2, player: 'Prayash Adhikari', team: 'Lalitpur United Youth', goals: 12, matches: 12, tpr: 85 },
      { rank: 3, player: 'Samir Thapa', team: 'Baneshwor Strikers', goals: 11, matches: 11, tpr: 84 },
      { rank: 4, player: 'Aayush KC', team: 'Budhanilkantha Colts', goals: 9, matches: 10, tpr: 81 },
      { rank: 5, player: 'Tenzing Sherpa', team: 'Himalayan Grassroots', goals: 8, matches: 11, tpr: 79 },
    ],
    cleanSheets: [
      { rank: 1, player: 'Bikash Tamang', team: 'Aurium Academy U14', cleanSheets: 7, matches: 12, savePercentage: '88.4%' },
      { rank: 2, player: 'Nitesh Shrestha', team: 'Lalitpur United Youth', cleanSheets: 5, matches: 12, savePercentage: '82.1%' },
      { rank: 3, player: 'Kushal Giri', team: 'Kathmandu Stars', cleanSheets: 4, matches: 11, savePercentage: '79.5%' },
    ],
    standingsSample: [
      { rank: 1, team: 'Aurium Academy U14 Gold', played: 12, won: 10, drawn: 2, lost: 0, gd: +28, points: 32, form: ['W', 'W', 'W', 'D', 'W'] },
      { rank: 2, team: 'Lalitpur United Youth', played: 12, won: 8, drawn: 3, lost: 1, gd: +17, points: 27, form: ['W', 'D', 'W', 'W', 'D'] },
      { rank: 3, team: 'Budhanilkantha Colts', played: 12, won: 7, drawn: 2, lost: 3, gd: +11, points: 23, form: ['L', 'W', 'W', 'W', 'D'] },
      { rank: 4, team: 'Baneshwor Strikers', played: 12, won: 6, drawn: 3, lost: 3, gd: +7, points: 21, form: ['W', 'W', 'L', 'D', 'W'] },
      { rank: 5, team: 'Kathmandu Valley Stars', played: 12, won: 5, drawn: 2, lost: 5, gd: +1, points: 17, form: ['L', 'W', 'D', 'L', 'W'] },
    ],
  },
  {
    id: 'aic',
    name: 'Aurium International Cup (AIC)',
    shortName: 'Aurium Int. Cup',
    tagline: 'Elite knockout & plate championship drawing leading private schools and academies across Nepal.',
    category: 'Schools & Inter-Academy Championship',
    edition: 'Annual National Cup',
    seasonYear: '2025',
    stats: {
      teams: 48,
      matches: 112,
      goals: 364,
      avgGoalsPerMatch: '3.25',
      cleanSheets: 29,
      registeredPlayers: 640,
      fairPlayScore: 99.1,
    },
    highlights: [
      'Dual-bracket system: Group stages feeding into Cup & Plate championships so every team plays meaningful matches',
      'NextSportz live digital MVP and Man of the Match tracking voted by coaches & technical committee',
      'Live HD match streaming with real-time on-screen score bugs powered by NextSportz API',
      'Official pathway scouts reviewing digital performance metrics for overseas tours',
    ],
    topScorers: [
      { rank: 1, player: 'Kritika Thapa', team: 'Aurium x RBS Girls', goals: 11, matches: 6, tpr: 91 },
      { rank: 2, player: 'Siddhant Malla', team: 'St. Xavier’s Alum Youth', goals: 8, matches: 6, tpr: 87 },
      { rank: 3, player: 'Rohan Gurung', team: 'KMC Sports Cohort', goals: 7, matches: 5, tpr: 84 },
    ],
    cleanSheets: [
      { rank: 1, player: 'Prabesh Khatri', team: 'St. Xavier’s Alum Youth', cleanSheets: 4, matches: 6, savePercentage: '86.2%' },
      { rank: 2, player: 'Anish Dahal', team: 'Aurium Cup Select', cleanSheets: 3, matches: 5, savePercentage: '84.0%' },
    ],
    standingsSample: [
      { rank: 1, team: 'Aurium x RBS Select (Champions)', played: 6, won: 6, drawn: 0, lost: 0, gd: +19, points: 18, form: ['W', 'W', 'W', 'W', 'W'] },
      { rank: 2, team: 'St. Xavier’s Alum Youth (Runners-Up)', played: 6, won: 4, drawn: 1, lost: 1, gd: +10, points: 13, form: ['W', 'W', 'W', 'D', 'L'] },
      { rank: 3, team: 'Ullens School Hawks (Semi-Finalist)', played: 5, won: 3, drawn: 1, lost: 1, gd: +6, points: 10, form: ['W', 'W', 'D', 'W', 'L'] },
    ],
  },
  {
    id: 'tht',
    name: 'The Himalayan Times (THT) Football League',
    shortName: 'THT Football League',
    tagline: 'High-profile corporate, media, and collegiate invitational league in Kathmandu.',
    category: 'Corporate & Institutional Invitational',
    edition: 'Invitational Series',
    seasonYear: '2025',
    stats: {
      teams: 24,
      matches: 64,
      goals: 198,
      avgGoalsPerMatch: '3.09',
      cleanSheets: 21,
      registeredPlayers: 360,
      fairPlayScore: 97.8,
    },
    highlights: [
      'Turnkey competition management executed end-to-end by Aurium Sports on premier floodlit pitches',
      'NextSportz Team ELO tracking ensuring fair seeding and competitive balance',
      'Real-time corporate fan engagement and player milestone certificates',
      'Zero-dispute record with immediate digital disciplinary logging',
    ],
    topScorers: [
      { rank: 1, player: 'Sunil Shrestha', team: 'Tech Pioneers FC', goals: 10, matches: 6, tpr: 86 },
      { rank: 2, player: 'Deepak Rana', team: 'Banking XI Stars', goals: 8, matches: 6, tpr: 83 },
      { rank: 3, player: 'Subash Rai', team: 'Media Guild FC', goals: 7, matches: 5, tpr: 82 },
    ],
    cleanSheets: [
      { rank: 1, player: 'Hemant Joshi', team: 'Banking XI Stars', cleanSheets: 3, matches: 6, savePercentage: '85.7%' },
      { rank: 2, player: 'Milan Gautam', team: 'Tech Pioneers FC', cleanSheets: 3, matches: 6, savePercentage: '81.2%' },
    ],
    standingsSample: [
      { rank: 1, team: 'Tech Pioneers FC (Winners)', played: 6, won: 5, drawn: 1, lost: 0, gd: +12, points: 16, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 2, team: 'Banking XI Stars', played: 6, won: 4, drawn: 1, lost: 1, gd: +9, points: 13, form: ['W', 'D', 'W', 'W', 'L'] },
      { rank: 3, team: 'Hospitality United', played: 5, won: 3, drawn: 0, lost: 2, gd: +4, points: 9, form: ['W', 'L', 'W', 'L', 'W'] },
    ],
  },
];
