// Single source of truth for organisation-wide details.
// Update contact info, team and stats here; every page reads from this file.

export const site = {
  name: "Aurium Sports",
  academyName: "The Aurium Academy",
  legalName: "Aurium Academy Pvt. Ltd.",
  tagline: "Building more than footballers.",
  description:
    "Aurium Sports is a Nepal-based football and youth development organization working across grassroots football, academy training, school programs, tournaments, international exposure and sport-led community development.",
  url: "https://www.auriumsports.com",
  address: "House No. 41/11 Ka, Matakumari Marg, Baneshwor Height, Kathmandu, Nepal",
  mapQuery: "Matakumari Marg, Baneshwor Height, Kathmandu, Nepal",
  phones: ["9828978044"],
  phone: "9828978044",
  // WhatsApp needs the full international number without "+" or spaces.
  whatsapp: "9779828978044",
  email: "auriumsports@gmail.com",
  emails: {
    register: "auriumsports@gmail.com",
    inquiry: "auriumsports@gmail.com",
  },
  instagram: "https://www.instagram.com/auriumsports/",
  facebook: "https://www.facebook.com/auriumsports/",
  tiktok: "https://www.tiktok.com/@auriumsports",
  socialHandle: "@auriumsports",
  socials: [
    {
      name: "Instagram",
      handle: "@auriumsports",
      url: "https://www.instagram.com/auriumsports/",
      badge: "280+ Posts & Reels • The Aurium Academy 🇳🇵",
    },
    {
      name: "TikTok",
      handle: "@auriumsports",
      url: "https://www.tiktok.com/@auriumsports",
      badge: "Drills, GK Training & Behind the Scenes",
    },
    {
      name: "Facebook",
      handle: "Aurium Sports | Kathmandu",
      url: "https://www.facebook.com/auriumsports/",
      badge: "Matchday Albums, Notices & Parent Community",
    },
  ],
} as const;

// Figures from the Aurium Sports vision document (2026).
export const stats = [
  { value: 350, suffix: "+", label: "Active players" },
  { value: 2000, suffix: "+", label: "Students reached" },
  { value: 5000, suffix: "+", label: "Parents engaged" },
  { value: 4, suffix: "", label: "Training locations" },
];

export const milestones = [
  { year: "2021", title: "First sessions", text: "Aurium begins coaching children in Kathmandu with a simple belief: sport should build people, not just players." },
  { year: "2023", title: "Schools & camps", text: "Winter, Spring and Dashain camps launch alongside ECA and after-school programs in partner schools." },
  { year: "2024", title: "Incorporated", text: "Aurium Academy Pvt. Ltd. is formally incorporated. The Aurium Mini League and Aurium International Cup take shape." },
  { year: "2025", title: "Dana Cup & Global Tours", text: "Aurium squads compete at the Dana Cup in Denmark (U14 Girls reach European Quarter-Finals), expanding pathways to the Norway Cup and Yangshuo Cup." },
  { year: "Next", title: "Aurium Sports Centers", text: "A flagship center, then 10 regional hubs across Nepal with pitches, recovery, classrooms and community spaces." },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Diwas Agasti",
    role: "Sports Director & Owner",
    initials: "DA",
    bio: "Founder, Owner and Sports Director of Aurium Sports. Sets Aurium's technical methodology, academy syllabus, sports science framework, and international tournament pathways across the Dana Cup, Norway Cup, and Yangshuo Cup.",
  },
  {
    name: "Early Discovery & Little Ballers Unit",
    role: "Lead Coaching Unit • Ages 3–5",
    initials: "LB",
    bio: "Specializes in story-led motor discovery, the ABCs (Agility, Balance & Coordination), and joyful ball confidence so every child falls in love with movement from their very first session.",
  },
  {
    name: "Academy Prep & Technical Mastery Unit",
    role: "Lead Coaching Unit • Ages 6–8",
    initials: "AP",
    bio: "Focuses on two-footed ball mastery, 1v1 creativity, small-sided match awareness, and introducing the B.U.S.T. breathing and warm-up routine in a positive, fearless environment.",
  },
  {
    name: "Foundation & Youth Development Directorate",
    role: "Lead Coaching Unit • Ages 9–16",
    initials: "YD",
    bio: "Guides positional awareness, tactical pressing, transition play, and NextSportz digital TPR tracking across U-10, U-12, U-14, and U-16 academy cohorts.",
  },
  {
    name: "Elite Invite-Only & IDP Performance Unit",
    role: "High-Performance Coaching Unit • Ages 7+",
    initials: "EL",
    bio: "Oversees our Invite-Only Elite squads from an early age—delivering additional weekly training sessions and Individualized Development Plans (IDPs) calibrated to each child's optimal biological and technical pace.",
  },
  {
    name: "Specialist Goalkeeping Unit",
    role: "GK Coaching Department • Ages 7–16",
    initials: "GK",
    bio: "Dedicated to shot-stopping reflexes, diving biomechanics, high-ball claim authority, 1v1 angles, and modern sweeper-keeper footwork and distribution under pressure.",
  },
  {
    name: "Strength, Conditioning & B.U.S.T. Science Unit",
    role: "Athletic Performance & Wellbeing Coach Unit",
    initials: "SC",
    bio: "Directs youth speed mechanics, agility conditioning, growth-plate injury prevention, and our signature B.U.S.T. (Breathing, Warm-Up, Stretching, Training) mental wellbeing protocol.",
  },
  {
    name: "Girls Development & International Pathway Unit",
    role: "Girls Football & Global Tours Directorate",
    initials: "GD",
    bio: "Champions girls' football development across Kathmandu and prepares representative squads for global tournaments including the Dana Cup (Denmark), Norway Cup (Norway), and Yangshuo Cup (China).",
  },
  {
    name: "Aurium Sports-Ed & School ECA Unit",
    role: "Institutional School Coaching Roster",
    initials: "SE",
    bio: "Deploys certified coaches, safeguarding standards, and structured multi-sport curricula into partner schools across Baneshwor, Jorpati, Lalitpur, and Bhaktapur.",
  },
];

export const journey = [
  { step: "Discover", line: "Finding the passion." },
  { step: "Play", line: "Learning through joy." },
  { step: "Develop", line: "Building the foundation." },
  { step: "Compete", line: "Testing the limits." },
  { step: "Represent", line: "Playing for more." },
  { step: "Lead", line: "Guiding the next." },
];

// The BUST warm-up model and weekly session split used across Aurium programs.
export const bust = [
  { letter: "B", word: "Breathing" },
  { letter: "U", word: "Warm-Up" },
  { letter: "S", word: "Stretching" },
  { letter: "T", word: "Training drills" },
];

export const weeklyPlan = [
  { day: "Day 1", focus: "Physical", blocks: ["Warm-up 18'", "Agility 10'", "Stamina 10'", "Conditioning 12'", "Game time 30'", "Cool-down 10'"] },
  { day: "Day 2", focus: "Technical & Tactical", blocks: ["Warm-up 18'", "Passing 10'", "Dribbling 10'", "Shooting 12'", "Game time 30'", "Cool-down 10'"] },
  { day: "Day 3", focus: "Game Scenario", blocks: ["Warm-up 18'", "Small-sided games 10'", "Positional play 10'", "Game understanding 12'", "Game time 30'", "Cool-down 10'"] },
];

export const sdgs = [
  { n: 3, title: "Good Health & Wellbeing" },
  { n: 4, title: "Quality Education" },
  { n: 5, title: "Gender Equality" },
  { n: 8, title: "Decent Work & Growth" },
  { n: 10, title: "Reduced Inequalities" },
];
