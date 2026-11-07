// Training schedule & venue directory for Aurium Sports academy cohorts across Kathmandu Valley.

export interface TrainingSlot {
  id: string;
  venueName: string;
  locationArea: 'Kathmandu Central' | 'Lalitpur' | 'Bhaktapur';
  address: string;
  mapQuery: string;
  ageGroup: 'U8–U10 Grassroots' | 'U12–U14 Juniors' | 'U16 Youth Elite' | 'U14 Girls Elite' | 'Goalkeeping Specialization';
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
    description: 'Central academy training ground with floodlights, goalkeeper conditioning cage, and mental health reflection studio.',
    isHQ: true,
  },
  {
    id: 'patandhoka',
    name: 'Rato Bangala School (RBS) Hub',
    area: 'Lalitpur',
    address: 'Patan Dhoka, Lalitpur, Nepal',
    mapQuery: 'Rato Bangala School, Patan Dhoka, Lalitpur, Nepal',
    description: 'Official training venue for Aurium x RBS European tour squads (Dana Cup Denmark) and girls development cohorts.',
    isHQ: false,
  },
  {
    id: 'ace',
    name: 'Ace Sports Hub',
    area: 'Kathmandu Central',
    address: 'Ace Higher Secondary / College, Gairidhara / Sinamangal',
    mapQuery: 'Ace Higher Secondary School, Kathmandu, Nepal',
    description: 'Weekday after-school training grounds for grassroots and junior high-tempo passing drills.',
    isHQ: false,
  },
  {
    id: 'ullens',
    name: 'Ullens / South Valley Hub',
    area: 'Lalitpur',
    address: 'Khumaltar, Lalitpur, Nepal',
    mapQuery: 'Ullens School, Khumaltar, Lalitpur, Nepal',
    description: 'Premier artificial turf pitch dedicated to weekend grassroots agility, game-scenario mastery, and B.U.S.T. conditioning.',
    isHQ: false,
  },
  {
    id: 'sirutar',
    name: 'Sirutar Sports Complex',
    area: 'Bhaktapur',
    address: 'Sirutar, Bhaktapur, Nepal',
    mapQuery: 'Sirutar, Bhaktapur, Nepal',
    description: 'East valley training hub focusing on grassroots player development, ball mastery, and stamina circuits.',
    isHQ: false,
  },
];

export const trainingSchedule: TrainingSlot[] = [
  // Baneshwor Height
  {
    id: 'slot-1',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'U8–U10 Grassroots',
    ageRange: 'Ages 6 to 10',
    days: ['Tuesday', 'Thursday', 'Saturday'],
    timing: '6:30 AM – 8:00 AM',
    sessionType: 'Morning Cohort',
    headCoach: 'Coach Koshish Ghale',
    focus: 'Fundamental ball mastery, coordination agility & joyful small-sided games',
    openSpots: 4,
  },
  {
    id: 'slot-2',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'U12–U14 Juniors',
    ageRange: 'Ages 11 to 14',
    days: ['Monday', 'Wednesday', 'Friday'],
    timing: '4:15 PM – 5:45 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Coach Samipya Subedi & Siddhartha Koirala',
    focus: 'Positional awareness, speed mechanics, tactical pressing & shooting',
    openSpots: 3,
  },
  {
    id: 'slot-3',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'Goalkeeping Specialization',
    ageRange: 'Ages 10 to 18 (All Tiers)',
    days: ['Tuesday', 'Thursday', 'Saturday'],
    timing: '7:00 AM – 8:30 AM',
    sessionType: 'Morning Cohort',
    headCoach: 'Coach Sujal Poudel (GK Coach)',
    focus: 'Diving mechanics, 1v1 angles, box command, reaction reflexes & aerial handling',
    openSpots: 2,
  },
  {
    id: 'slot-4',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationArea: 'Kathmandu Central',
    address: 'Baneshwor Height, Kathmandu',
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    ageGroup: 'U16 Youth Elite',
    ageRange: 'Ages 14 to 17',
    days: ['Tuesday', 'Thursday', 'Sunday'],
    timing: '4:30 PM – 6:15 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Diwas Agasti (Sports Director) & Abishekh Singh',
    focus: 'High-intensity match play, 11v11 phase transitions & NextSportz TPR evaluation',
    openSpots: 5,
  },

  // Rato Bangala Hub
  {
    id: 'slot-5',
    venueName: 'Rato Bangala School (RBS) Hub',
    locationArea: 'Lalitpur',
    address: 'Patan Dhoka, Lalitpur',
    mapQuery: 'Rato Bangala School, Patan Dhoka, Lalitpur, Nepal',
    ageGroup: 'U14 Girls Elite',
    ageRange: 'Ages 11 to 15 (Girls)',
    days: ['Monday', 'Wednesday', 'Friday'],
    timing: '4:30 PM – 6:00 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Diwas Agasti & Coach Jeevan Rokaya',
    focus: 'Dana Cup Denmark European tournament squad preparation, technical link-up & tactical IQ',
    openSpots: 4,
  },
  {
    id: 'slot-6',
    venueName: 'Rato Bangala School (RBS) Hub',
    locationArea: 'Lalitpur',
    address: 'Patan Dhoka, Lalitpur',
    mapQuery: 'Rato Bangala School, Patan Dhoka, Lalitpur, Nepal',
    ageGroup: 'U12–U14 Juniors',
    ageRange: 'Ages 11 to 14',
    days: ['Saturday', 'Sunday'],
    timing: '7:30 AM – 9:30 AM',
    sessionType: 'Weekend Intensive',
    headCoach: 'Coach Misayal Yonjan',
    focus: 'Small-sided tournament simulation, set piece routines & speed development',
    openSpots: 6,
  },

  // Ace Sports Hub
  {
    id: 'slot-7',
    venueName: 'Ace Sports Hub',
    locationArea: 'Kathmandu Central',
    address: 'Gairidhara / Sinamangal, Kathmandu',
    mapQuery: 'Ace Higher Secondary School, Kathmandu, Nepal',
    ageGroup: 'U12–U14 Juniors',
    ageRange: 'Ages 11 to 14',
    days: ['Monday', 'Tuesday', 'Thursday'],
    timing: '3:30 PM – 5:00 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Coach Sujan Karki',
    focus: 'After-school ECA development, pass-and-move combinations & game intelligence',
    openSpots: 5,
  },
  {
    id: 'slot-8',
    venueName: 'Ace Sports Hub',
    locationArea: 'Kathmandu Central',
    address: 'Gairidhara / Sinamangal, Kathmandu',
    mapQuery: 'Ace Higher Secondary School, Kathmandu, Nepal',
    ageGroup: 'U16 Youth Elite',
    ageRange: 'Ages 14 to 17',
    days: ['Monday', 'Wednesday', 'Thursday'],
    timing: '5:00 PM – 6:30 PM',
    sessionType: 'Evening Cohort',
    headCoach: 'Coach Siddhartha Koirala',
    focus: 'Strength & conditioning, athletic power, defensive structure & match readiness',
    openSpots: 4,
  },

  // Ullens Hub
  {
    id: 'slot-9',
    venueName: 'Ullens / South Valley Hub',
    locationArea: 'Lalitpur',
    address: 'Khumaltar, Lalitpur',
    mapQuery: 'Ullens School, Khumaltar, Lalitpur, Nepal',
    ageGroup: 'U8–U10 Grassroots',
    ageRange: 'Ages 6 to 10',
    days: ['Friday', 'Saturday'],
    timing: '3:45 PM – 5:15 PM (Fri) / 8:00 AM (Sat)',
    sessionType: 'Weekend Intensive',
    headCoach: 'Coach Koshish Ghale',
    focus: 'First-touch mastery, dribbling mazes, motor coordination & team joy',
    openSpots: 7,
  },

  // Sirutar Sports Complex
  {
    id: 'slot-10',
    venueName: 'Sirutar Sports Complex',
    locationArea: 'Bhaktapur',
    address: 'Sirutar, Bhaktapur',
    mapQuery: 'Sirutar, Bhaktapur, Nepal',
    ageGroup: 'U12–U14 Juniors',
    ageRange: 'Ages 10 to 14',
    days: ['Tuesday', 'Thursday', 'Saturday'],
    timing: '6:45 AM – 8:15 AM',
    sessionType: 'Morning Cohort',
    headCoach: 'Coach Samipya Subedi',
    focus: 'Grassroots fundamentals, stamina circuits & regional youth league preparation',
    openSpots: 6,
  },
];
