// Single source of truth for organisation-wide details.
// Update contact info, team and stats here; every page reads from this file.

export const site = {
  name: "Aurium Sports",
  legalName: "Aurium Sports Pvt. Ltd.",
  tagline: "Building more than footballers.",
  description:
    "Aurium Sports is building Nepal's most complete grassroots sports ecosystem: academy training, school programs, camps, tournaments, international tours and a pioneering Sports for Mental Health model.",
  url: "https://auriumsports.com",
  address: "House No. 41/11 Ka, Matakumari Marg, Baneshwor Height, Kathmandu, Nepal",
  mapQuery: "Matakumari Marg, Baneshwor Height, Kathmandu, Nepal",
  phones: ["9828978044"],
  // WhatsApp needs the full international number without "+" or spaces.
  whatsapp: "9779828978044",
  emails: {
    register: "register@theauriumacademy.com",
    inquiry: "inquiry@theauriumacademy.com",
  },
  instagram: "https://www.instagram.com/auriumsports",
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
  { year: "2024", title: "Incorporated", text: "Aurium Sports Pvt. Ltd. is formally incorporated. The Aurium Mini League and Aurium International Cup take shape." },
  { year: "2025", title: "Dana Cup, Denmark", text: "Aurium squads compete in Hjørring. The Aurium x Rato Bangala U14 girls reach the quarter-finals, a first for Nepal." },
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
    bio: "Founder, Owner and Sports Director of Aurium Sports. Sets Aurium's technical methodology, academy syllabus, sports science framework, and international pathway development.",
  },
  {
    name: "Sujal Poudel",
    role: "GK Coach",
    initials: "SP",
    bio: "Specializes in goalkeeper conditioning, shot-stopping reflexes, box command, and high-pressure distribution across academy squads.",
  },
  {
    name: "Siddhartha Koirala",
    role: "Strength & Conditioning Coach",
    initials: "SK",
    bio: "Directs athletic physical development, speed mechanics, agility conditioning, strength building, and injury prevention across youth squads.",
  },
  {
    name: "Koshish Ghale",
    role: "Coach",
    initials: "KG",
    bio: "Focuses on technical ball mastery, first-touch precision, and youth grassroots conditioning in academy and school sessions.",
  },
  {
    name: "Samipya Subedi",
    role: "Coach",
    initials: "SS",
    bio: "Delivers energetic grassroots drills, positional awareness, and positive team building for junior development cohorts.",
  },
  {
    name: "Abishekh Singh",
    role: "Coach",
    initials: "AS",
    bio: "Specializes in speed, agility, quick passing transitions, and high-tempo game situations across youth age groups.",
  },
  {
    name: "Jeevan Rokaya",
    role: "Coach",
    initials: "JR",
    bio: "Committed to athlete mentorship, defensive structure, and building disciplined training habits during weekly cycles.",
  },
  {
    name: "Misayal Yonjan",
    role: "Coach",
    initials: "MY",
    bio: "Guides technical small-sided games, spatial awareness, and creative attacking play with youth footballers.",
  },
  {
    name: "Sujan Karki",
    role: "Coach",
    initials: "SK",
    bio: "Leads fundamental motor skills, coordination drills, and player confidence building across school and academy programs.",
  },
  {
    name: "Sandesh Poudel",
    role: "Coach",
    initials: "SP",
    bio: "Coordinates structured tactical drills, pressing mechanics, and matchday discipline across youth age divisions.",
  },
  {
    name: "Utpal Moktan",
    role: "Coach",
    initials: "UM",
    bio: "Dedicated to youth athlete engagement, aerobic conditioning, and fostering a supportive, resilient team culture.",
  },
  {
    name: "Rajendra Sunuwar",
    role: "Coach",
    initials: "RS",
    bio: "Delivers structured grassroots coaching, agility conditioning, and player welfare supervision during intensive training camps.",
  },
  {
    name: "Barun Budathoki",
    role: "Coach",
    initials: "BB",
    bio: "Oversees physical readiness, game-scenario application, and sportsmanship values across school and academy groups.",
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
