// Training schedule & venue directory for Aurium Sports academy cohorts across Kathmandu Valley.

export interface TrainingSlot {
  id: string;
  venueName: string;
  locationArea: 'Kathmandu Central' | 'Lalitpur' | 'Bhaktapur';
  address: string;
  mapQuery: string;
  ageGroup:
    | 'Little Ballers (Ages 3–5)'
    | 'Academy Prep (Ages 6–8)'
    | 'Foundation (Ages 9–12)'
    | 'Youth Development (Ages 13–16)'
    | 'Goalkeeper (Ages 7–16)'
    | 'Girls Development (Ages 6–16)'
    | 'Elite — Invite Only (Ages 7+)';
  ageRange: string;
  days: string[];
  timing: string;
  sessionType: 'Morning Cohort' | 'Evening Cohort' | 'Weekend Intensive';
  headCoach: string;
  focus: string;
  openSpots: number;
}

export const trainingLocations = [
  {
    id: 'baneshwor',
    name: 'Baneshwor Height Hub (HQ)',
    area: 'Kathmandu Central',
    address: 'House No. 41/11 Ka, Matakumari Marg, Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    description:
      'Central academy training ground with floodlights, goalkeeper conditioning cage, and B.U.S.T. mental health reflection studio.',
    isHQ: true,
  },
  {
    id: 'patandhoka',
    name: 'Rato Bangala School (RBS) Hub',
    area: 'Lalitpur',
    address: 'Patan Dhoka, Lalitpur, Nepal',
    mapQuery: 'Rato Bangala School, Patan Dhoka, Lalitpur, Nepal',
    description:
      'Official training venue for international tournament squads (Dana Cup, Norway Cup & Yangshuo Cup) and girls development cohorts.',
    isHQ: false,
  },
  {
    id: 'ace',
    name: 'Ace Sports Hub',
    area: 'Kathmandu Central',
    address: 'Ace Higher Secondary / College, Gairidhara / Sinamangal',
    mapQuery: 'Ace Higher Secondary School, Kathmandu, Nepal',
    description:
      'Weekday after-school training grounds for Academy Prep, Foundation, and high-tempo passing drills.',
    isHQ: false,
  },
  {
    id: 'ullens',
    name: 'Ullens / South Valley Hub',
    area: 'Lalitpur',
    address: 'Khumaltar, Lalitpur, Nepal',
    mapQuery: 'Ullens School, Khumaltar, Lalitpur, Nepal',
    description:
      'Premier artificial turf pitch dedicated to Little Ballers, Academy Prep agility, game-scenario mastery, and B.U.S.T. conditioning.',
    isHQ: false,
  },
  {
    id: 'sirutar',
    name: 'Sirutar Sports Complex',
    area: 'Bhaktapur',
    address: 'Sirutar, Bhaktapur, Nepal',
    mapQuery: 'Sirutar, Bhaktapur, Nepal',
    description:
      'East valley training hub focusing on grassroots player development, ball mastery, and stamina circuits.',
    isHQ: false,
  },
];

export const trainingSchedule: TrainingSlot[] = [
  // Little Ballers (Ages 3-5)
  {
    id: 'slot-lb-1',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'Little Ballers (Ages 3–5)',
    ageRange: 'Ages 3 to 5',
    days: ['Saturday', 'Sunday'],
    timing: '8:30 AM – 9:30 AM',
    sessionType: 'Weekend Intensive',
    headCoach: 'Early-Years & Motor Literacy Directorate',
    focus: 'Imaginative mini-games, ABCs (Agility, Balance & Coordination), ball familiarity & joyful team play',
    openSpots: 5,
  },
  {
    id: 'slot-lb-2',
    venueName: 'Ullens / South Valley Hub',
    locationArea: 'Lalitpur',
    address: 'Khumaltar, Lalitpur',
    mapQuery: 'Ullens School, Khumaltar, Lalitpur, Nepal',
    ageGroup: 'Little Ballers (Ages 3–5)',
    ageRange: 'Ages 3 to 5',
    days: ['Saturday', 'Sunday'],
    timing: '9:00 AM – 10:00 AM',
    sessionType: 'Weekend Intensive',
    headCoach: 'Early-Years & Motor Literacy Directorate',
    focus: 'Obstacle movement games, first-touch discovery, coordination & social confidence',
    openSpots: 6,
  },

  // Academy Prep (Ages 6-8)
  {
    id: 'slot-1',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'Academy Prep (Ages 6–8)',
    ageRange: 'Ages 6 to 8',
    days: ['Tuesday', 'Thursday', 'Saturday'],
    timing: '6:30 AM – 7:45 AM',
    sessionType: 'Morning Cohort',
    headCoach: 'Academy Prep & Ball Mastery Specialist',
    focus: 'Two-footed ball mastery, 1v1 confidence, B.U.S.T. breathing habits & small-sided 4v4 games',
    openSpots: 4,
  },
  {
    id: 'slot-9',
    venueName: 'Ullens / South Valley Hub',
    locationArea: 'Lalitpur',
    address: 'Khumaltar, Lalitpur',
    mapQuery: 'Ullens School, Khumaltar, Lalitpur, Nepal',
    ageGroup: 'Academy Prep (Ages 6–8)',
    ageRange: 'Ages 6 to 8',
    days: ['Friday', 'Saturday'],
    timing: '3:45 PM – 5:00 PM (Fri) / 8:00 AM (Sat)',
    sessionType: 'Weekend Intensive',
    headCoach: 'Grassroots Technical Directorate',
    focus: 'First-touch mastery, dribbling mazes, motor coordination & match-focused fun',
    openSpots: 6,
  },

  // Foundation (Ages 9-12)
  {
    id: 'slot-2',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'Foundation (Ages 9–12)',
    ageRange: 'Ages 9 to 12',
    days: ['Monday', 'Wednesday', 'Friday'],
    timing: '4:15 PM – 5:45 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Foundation Technical & Tactical Directorate',
    focus: 'FUNdamentals, passing combinations, spatial scanning, positional play & NextSportz TPR tracking',
    openSpots: 3,
  },
  {
    id: 'slot-6',
    venueName: 'Rato Bangala School (RBS) Hub',
    locationArea: 'Lalitpur',
    address: 'Patan Dhoka, Lalitpur',
    mapQuery: 'Rato Bangala School, Patan Dhoka, Lalitpur, Nepal',
    ageGroup: 'Foundation (Ages 9–12)',
    ageRange: 'Ages 9 to 12',
    days: ['Saturday', 'Sunday'],
    timing: '7:30 AM – 9:00 AM',
    sessionType: 'Weekend Intensive',
    headCoach: 'Foundation Technical & Tactical Directorate',
    focus: 'Small-sided tournament simulation, receiving on the half-turn & speed development',
    openSpots: 5,
  },
  {
    id: 'slot-7',
    venueName: 'Ace Sports Hub',
    locationArea: 'Kathmandu Central',
    address: 'Gairidhara / Sinamangal, Kathmandu',
    mapQuery: 'Ace Higher Secondary School, Kathmandu, Nepal',
    ageGroup: 'Foundation (Ages 9–12)',
    ageRange: 'Ages 9 to 12',
    days: ['Monday', 'Tuesday', 'Thursday'],
    timing: '3:30 PM – 5:00 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Foundation Technical & Tactical Directorate',
    focus: 'Pass-and-move combinations, positional awareness & game intelligence',
    openSpots: 5,
  },
  {
    id: 'slot-10',
    venueName: 'Sirutar Sports Complex',
    locationArea: 'Bhaktapur',
    address: 'Sirutar, Bhaktapur',
    mapQuery: 'Sirutar, Bhaktapur, Nepal',
    ageGroup: 'Foundation (Ages 9–12)',
    ageRange: 'Ages 9 to 12',
    days: ['Tuesday', 'Thursday', 'Saturday'],
    timing: '6:45 AM – 8:15 AM',
    sessionType: 'Morning Cohort',
    headCoach: 'East Valley Technical Directorate',
    focus: 'Core technical fundamentals, stamina circuits & Aurium Mini League preparation',
    openSpots: 6,
  },

  // Youth Development (Ages 13-16)
  {
    id: 'slot-4',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'Youth Development (Ages 13–16)',
    ageRange: 'Ages 13 to 16',
    days: ['Tuesday', 'Thursday', 'Sunday'],
    timing: '4:30 PM – 6:00 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Youth Development & S&C Directorate',
    focus: 'Tactical systems, phase transitions, athletic conditioning & NextSportz TPR evaluation',
    openSpots: 4,
  },
  {
    id: 'slot-8',
    venueName: 'Ace Sports Hub',
    locationArea: 'Kathmandu Central',
    address: 'Gairidhara / Sinamangal, Kathmandu',
    mapQuery: 'Ace Higher Secondary School, Kathmandu, Nepal',
    ageGroup: 'Youth Development (Ages 13–16)',
    ageRange: 'Ages 13 to 16',
    days: ['Monday', 'Wednesday', 'Thursday'],
    timing: '5:00 PM – 6:30 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Sports Science & S&C Directorate',
    focus: 'Strength & conditioning, athletic speed mechanics, defensive structure & match readiness',
    openSpots: 4,
  },

  // Goalkeeper (Ages 7-16)
  {
    id: 'slot-3',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'Goalkeeper (Ages 7–16)',
    ageRange: 'Ages 7 to 16 (All Tiers)',
    days: ['Tuesday', 'Thursday', 'Saturday'],
    timing: '7:00 AM – 8:30 AM',
    sessionType: 'Morning Cohort',
    headCoach: 'Head of Goalkeeping & Reflex Lab',
    focus: 'Shot-stopping reflexes, diving mechanics, 1v1 angles, box command & sweeper-keeper distribution',
    openSpots: 3,
  },

  // Girls Development (Ages 6-16)
  {
    id: 'slot-5',
    venueName: 'Rato Bangala School (RBS) Hub',
    locationArea: 'Lalitpur',
    address: 'Patan Dhoka, Lalitpur',
    mapQuery: 'Rato Bangala School, Patan Dhoka, Lalitpur, Nepal',
    ageGroup: 'Girls Development (Ages 6–16)',
    ageRange: 'Ages 6 to 16 (Girls)',
    days: ['Monday', 'Wednesday', 'Friday'],
    timing: '4:30 PM – 6:00 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Girls Development & International Tour Directorate',
    focus: 'Core technical-tactical skills, confidence building & preparation for Dana Cup, Norway Cup & Yangshuo Cup',
    openSpots: 4,
  },

  // Elite — Invite Only (Ages 7+)
  {
    id: 'slot-elite-1',
    venueName: 'Baneshwor Height Hub (HQ) & RBS Hub',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height & Patan Dhoka',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'Elite — Invite Only (Ages 7+)',
    ageRange: 'Ages 7 to 16 (By Selection)',
    days: ['Wednesday', 'Saturday', 'Sunday'],
    timing: 'Additional High-Performance Sessions (90 Mins)',
    sessionType: 'Evening Cohort',
    headCoach: 'Elite High-Performance Directorate (IDP)',
    focus: 'Additional weekly coaching hours, individualized developmental pacing (IDP), video/NextSportz analysis & international tournament squad preparation (Dana Cup, Norway Cup, Yangshuo Cup)',
    openSpots: 3,
  },
];
