// Training schedule & verified venue directory for Aurium Sports academy cohorts across Kathmandu Valley.

export interface TrainingSlot {
  id: string;
  venueName: string;
  locationSlug: string;
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

export interface TrainingLocation {
  id: string;
  slug: string;
  name: string;
  h1: string;
  area: 'Kathmandu Central' | 'Lalitpur' | 'Bhaktapur';
  neighborhood: string;
  city: 'Kathmandu' | 'Lalitpur' | 'Bhaktapur';
  address: string;
  postalCode: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  mapQuery: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  facilityFeatures: string[];
  programmesOffered: string[];
  faqs: { question: string; answer: string }[];
  isHQ: boolean;
}

export const trainingLocations: TrainingLocation[] = [
  {
    id: 'baneshwor',
    slug: 'baneshwor-kathmandu',
    name: 'Baneshwor Height Hub (HQ)',
    h1: 'Football Training in Baneshwor, Kathmandu',
    area: 'Kathmandu Central',
    neighborhood: 'Baneshwor Height',
    city: 'Kathmandu',
    address: 'House No. 41/11 Ka, Matakumari Marg, Baneshwor Height, Kathmandu',
    postalCode: '44600',
    geo: {
      latitude: 27.6915,
      longitude: 85.334,
    },
    mapQuery: 'Matakumari Marg, Baneshwor Height, Kathmandu, Nepal',
    description:
      'Central academy training ground with floodlights, goalkeeper conditioning cage, and B.U.S.T. mental health reflection studio.',
    intro:
      'Aurium Sports provides structured youth football training at its Baneshwor Height headquarters in Kathmandu. Serving families across New Baneshwor, Old Baneshwor, Maitidevi, Battisputali, and Koteshwor, this flagship location hosts age-specific coaching for Little Ballers (Ages 3–5), Academy Prep (Ages 6–8), Foundation (Ages 9–12), Youth Development (Ages 13–16), Specialist Goalkeeping, and Invite-Only Elite squads.',
    image: '/images/academy.jpg',
    imageAlt:
      'Youth football players practicing ball mastery at Aurium Sports Baneshwor Height training ground in Kathmandu',
    seoTitle:
      'Football Academy in Baneshwor, Kathmandu | Kids Football Coaching | Aurium Sports',
    seoDescription:
      'Join Aurium Sports at our Baneshwor Height Hub (HQ) in Kathmandu: structured football coaching for children aged 3–16, specialist goalkeeper training, and B.U.S.T. mental wellbeing.',
    primaryKeyword: 'Baneshwor football academy',
    secondaryKeywords: [
      'Football coaching Baneshwor',
      'Football training Kathmandu',
      'Kids football academy Baneshwor Height',
      'Goalkeeper training Kathmandu',
    ],
    facilityFeatures: [
      'Floodlit artificial turf training pitch',
      'Dedicated Goalkeeper Reflex & Conditioning Zone',
      'B.U.S.T. Breathing & Post-Session Reflection Studio',
      'Certified first-aid station & parent viewing area',
    ],
    programmesOffered: [
      'Little Ballers (Ages 3–5)',
      'Academy Prep (Ages 6–8)',
      'Foundation (Ages 9–12)',
      'Youth Development (Ages 13–16)',
      'Goalkeeper (Ages 7–16)',
      'Elite — Invite Only (Ages 7+)',
    ],
    faqs: [
      {
        question: 'Where exactly is the Aurium Sports Baneshwor training ground located?',
        answer:
          'Our central headquarters and training ground is located at House No. 41/11 Ka, Matakumari Marg, Baneshwor Height, Kathmandu, easily accessible from Old Baneshwor, New Baneshwor, Battisputali, and Maitidevi.',
      },
      {
        question: 'What age groups train at the Baneshwor Height Hub?',
        answer:
          'Baneshwor Height hosts cohorts for Ages 3 to 16, including Little Ballers (Ages 3–5) on weekends, Academy Prep (Ages 6–8), Foundation (Ages 9–12), Youth Development (Ages 13–16), Specialist Goalkeeper clinics, and Invite-Only Elite sessions.',
      },
      {
        question: 'How can my child book a trial session in Baneshwor?',
        answer:
          'Click "Book a Spot" on any Baneshwor schedule slot or message our coaching desk on WhatsApp at +977 9828978044 to reserve a trial session.',
      },
    ],
    isHQ: true,
  },
  {
    id: 'patandhoka',
    slug: 'patan-dhoka-lalitpur',
    name: 'Rato Bangala School (RBS) Hub',
    h1: 'Football Training in Patan Dhoka, Lalitpur',
    area: 'Lalitpur',
    neighborhood: 'Patan Dhoka',
    city: 'Lalitpur',
    address: 'Patan Dhoka, Lalitpur, Nepal',
    mapQuery: 'Rato Bangala School, Patan Dhoka, Lalitpur, Nepal',
    postalCode: '44700',
    geo: {
      latitude: 27.6766,
      longitude: 85.3188,
    },
    description:
      'Official training venue for international tournament squads (Dana Cup, Norway Cup & Yangshuo Cup) and girls development cohorts.',
    intro:
      'Located at Patan Dhoka in the heart of Lalitpur, the Aurium Sports RBS Hub serves young footballers from Jhamsikhel, Sanepa, Kupondole, Pulchowk, and Mangal Bazar. It is our premier center for Girls Football Development (Ages 6–16), Foundation weekend intensives (Ages 9–12), and international tournament preparation squads heading to the Dana Cup, Norway Cup, and Yangshuo Cup.',
    image: '/images/school.jpg',
    imageAlt:
      'Girls and youth football training session at Patan Dhoka, Lalitpur with Aurium Sports coaches',
    seoTitle:
      'Football Academy in Patan Dhoka, Lalitpur | Girls & Youth Football | Aurium Sports',
    seoDescription:
      'Structured youth and girls football training in Patan Dhoka, Lalitpur. Join Aurium Sports for Foundation cohorts (Ages 9–12), Girls Development (Ages 6–16), and international tour squads.',
    primaryKeyword: 'Football training Patan Dhoka',
    secondaryKeywords: [
      'Football academy Lalitpur',
      'Girls football training Lalitpur',
      'Kids football coaching Patan',
      'Rato Bangala football program',
    ],
    facilityFeatures: [
      'Secured campus pitch environment in central Lalitpur',
      'Dedicated Girls Development & International Tour Hub',
      'Small-sided tournament simulation grids',
      'Strict child safeguarding & supervised campus entry',
    ],
    programmesOffered: [
      'Foundation (Ages 9–12)',
      'Girls Development (Ages 6–16)',
      'Elite — Invite Only (Ages 7+)',
    ],
    faqs: [
      {
        question: 'Which programmes run at the Patan Dhoka, Lalitpur training ground?',
        answer:
          'Our Patan Dhoka (RBS Hub) venue runs the dedicated Girls Development Programme (Ages 6–16) on Monday, Wednesday, and Friday afternoons, Foundation (Ages 9–12) weekend intensives on Saturday and Sunday mornings, and Invite-Only Elite international preparation sessions.',
      },
      {
        question: 'Can girls with no prior football experience join at Patan Dhoka?',
        answer:
          'Yes. Our Girls Development cohort welcomes complete beginners as well as experienced school players aged 6 to 16, grouping drills by skill readiness and confidence.',
      },
    ],
    isHQ: false,
  },
  {
    id: 'ace',
    slug: 'gairidhara-kathmandu',
    name: 'Ace Sports Hub',
    h1: 'Football Training in Gairidhara & Sinamangal, Kathmandu',
    area: 'Kathmandu Central',
    neighborhood: 'Gairidhara / Sinamangal',
    city: 'Kathmandu',
    address: 'Ace Higher Secondary / College, Gairidhara / Sinamangal, Kathmandu',
    postalCode: '44600',
    geo: {
      latitude: 27.7172,
      longitude: 85.331,
    },
    mapQuery: 'Ace Higher Secondary School, Kathmandu, Nepal',
    description:
      'Weekday after-school training grounds for Academy Prep, Foundation, and high-tempo passing drills.',
    intro:
      'The Aurium Sports Ace Sports Hub provides convenient weekday afternoon and evening football coaching in central Kathmandu for players aged 9 to 16. Designed for after-school athletic progression, sessions emphasize technical passing combinations, positional awareness, strength and conditioning, and NextSportz performance evaluation.',
    image: '/images/data-pitch.jpg',
    imageAlt:
      'After-school youth football tactical and conditioning drills at Ace Sports Hub in Kathmandu',
    seoTitle:
      'After-School Football Training in Central Kathmandu | Ace Sports Hub | Aurium Sports',
    seoDescription:
      'Weekday after-school football coaching in Gairidhara & Sinamangal, Kathmandu for Foundation (Ages 9–12) and Youth Development (Ages 13–16) players at Aurium Sports.',
    primaryKeyword: 'Football training Kathmandu',
    secondaryKeywords: [
      'After-school football coaching Kathmandu',
      'Youth football academy Kathmandu',
      'Football fitness training Kathmandu',
    ],
    facilityFeatures: [
      'High-tempo artificial turf surface for combination play',
      'Strength, speed mechanics & agility conditioning tracks',
      'Convenient post-school weekday timings (3:30 PM – 6:30 PM)',
      'NextSportz TPR skill assessment & match tracking',
    ],
    programmesOffered: [
      'Foundation (Ages 9–12)',
      'Youth Development (Ages 13–16)',
    ],
    faqs: [
      {
        question: 'What days and times are sessions held at the Ace Sports Hub?',
        answer:
          'Foundation (Ages 9–12) trains on Monday, Tuesday, and Thursday from 3:30 PM to 5:00 PM, while Youth Development (Ages 13–16) trains on Monday, Wednesday, and Thursday from 5:00 PM to 6:30 PM.',
      },
      {
        question: 'What is the main focus of training at this location?',
        answer:
          'Sessions follow Aurium’s 3-day periodized microcycle (Physical Conditioning, Technical & Tactical Mastery, and Game Scenarios) with integrated B.U.S.T. warm-up and injury-prevention routines.',
      },
    ],
    isHQ: false,
  },
  {
    id: 'ullens',
    slug: 'khumaltar-lalitpur',
    name: 'Ullens / South Valley Hub',
    h1: 'Football Training in Khumaltar, Lalitpur',
    area: 'Lalitpur',
    neighborhood: 'Khumaltar',
    city: 'Lalitpur',
    address: 'Khumaltar, Lalitpur, Nepal',
    postalCode: '44700',
    geo: {
      latitude: 27.6515,
      longitude: 85.3278,
    },
    mapQuery: 'Ullens School, Khumaltar, Lalitpur, Nepal',
    description:
      'Premier artificial turf pitch dedicated to Little Ballers, Academy Prep agility, game-scenario mastery, and B.U.S.T. conditioning.',
    intro:
      'Serving families across Khumaltar, Satdobato, Hattiban, Nakhipot, Imadol, and Jawlakhel, the Aurium Sports South Valley Hub in Khumaltar, Lalitpur specializes in early-years motor discovery and junior ball mastery. It is our primary Lalitpur venue for Little Ballers (Ages 3–5) and Academy Prep (Ages 6–8) weekend cohorts.',
    image: '/images/camp.jpg',
    imageAlt:
      'Children aged 3 to 8 practicing football coordination and ball control in Khumaltar, Lalitpur',
    seoTitle:
      'Football Academy in Khumaltar, Lalitpur | Kids Ages 3–8 Football | Aurium Sports',
    seoDescription:
      'Enroll your child in Little Ballers (Ages 3–5) and Academy Prep (Ages 6–8) football classes in Khumaltar, Lalitpur with certified Aurium Sports early-years coaches.',
    primaryKeyword: 'Football academy Khumaltar',
    secondaryKeywords: [
      'Football academy Lalitpur',
      'Football classes for 5-year-olds Lalitpur',
      'Kids football training Satdobato Khumaltar',
      'Little Ballers football Lalitpur',
    ],
    facilityFeatures: [
      'Child-safe cushioned artificial turf pitch',
      'Age-scaled mini-goals, agility rings & coordination hurdles',
      'Low player-to-coach ratio for ages 3–5 and 6–8',
      'Convenient Friday afternoon & weekend morning slots',
    ],
    programmesOffered: [
      'Little Ballers (Ages 3–5)',
      'Academy Prep (Ages 6–8)',
    ],
    faqs: [
      {
        question: 'At what age can my child start football classes at Khumaltar, Lalitpur?',
        answer:
          'Children can start as early as age 3 in our Little Ballers (Ages 3–5) weekend cohort (Saturday and Sunday, 9:00 AM – 10:00 AM), which focuses on fun movement games, agility, balance, and early ball discovery.',
      },
      {
        question: 'When does the Academy Prep (Ages 6–8) group train in Khumaltar?',
        answer:
          'Academy Prep (Ages 6–8) trains at the Khumaltar Hub on Friday afternoons (3:45 PM – 5:00 PM) and Saturday mornings (8:00 AM – 9:15 AM).',
      },
    ],
    isHQ: false,
  },
  {
    id: 'sirutar',
    slug: 'sirutar-bhaktapur',
    name: 'Sirutar Sports Complex',
    h1: 'Football Training in Sirutar, Bhaktapur',
    area: 'Bhaktapur',
    neighborhood: 'Sirutar',
    city: 'Bhaktapur',
    address: 'Sirutar, Bhaktapur, Nepal',
    postalCode: '44800',
    geo: {
      latitude: 27.661,
      longitude: 85.376,
    },
    mapQuery: 'Sirutar, Bhaktapur, Nepal',
    description:
      'East valley training hub focusing on grassroots player development, ball mastery, and stamina circuits.',
    intro:
      'The Aurium Sports Sirutar Sports Complex brings structured grassroots football coaching to Bhaktapur and the eastern Kathmandu Valley, serving players from Sirutar, Balkot, Kaushaltar, Gatthaghar, Thimi, and Suryabinayak. Morning cohorts prepare young footballers in core technical fundamentals, stamina circuits, and competitive readiness for the Aurium Mini League.',
    image: '/images/tournament.jpg',
    imageAlt:
      'Youth footballers training at Sirutar Sports Complex in Bhaktapur with Aurium Sports coaches',
    seoTitle:
      'Football Training in Sirutar, Bhaktapur | Youth Football Coaching | Aurium Sports',
    seoDescription:
      'Structured youth football coaching in Sirutar, Bhaktapur for boys and girls. Join Aurium Sports morning cohorts for technical ball mastery, conditioning, and league play.',
    primaryKeyword: 'Football training Bhaktapur',
    secondaryKeywords: [
      'Football coaching Sirutar',
      'Youth football academy Bhaktapur',
      'Kids football classes Balkot Thimi',
    ],
    facilityFeatures: [
      'Dedicated East Valley grassroots training pitch',
      'Morning pre-school training schedule (Tuesday, Thursday, Saturday)',
      'Direct pathway into Aurium Mini League (AML) squads',
      'B.U.S.T. warm-up, injury prevention & hydration monitoring',
    ],
    programmesOffered: [
      'Foundation (Ages 9–12)',
    ],
    faqs: [
      {
        question: 'What are the training days and timings at Sirutar Sports Complex in Bhaktapur?',
        answer:
          'Our Foundation (Ages 9–12) morning cohort in Sirutar, Bhaktapur trains three days a week on Tuesday, Thursday, and Saturday from 6:45 AM to 8:15 AM.',
      },
      {
        question: 'Do players from the Bhaktapur hub compete in Aurium tournaments?',
        answer:
          'Yes. Players training at Sirutar Sports Complex represent the East Valley cohort in the seasonal Aurium Mini League (AML) and receive full NextSportz digital player cards.',
      },
    ],
    isHQ: false,
  },
];

export const getTrainingLocation = (slug: string) =>
  trainingLocations.find((loc) => loc.slug === slug);

export const trainingSchedule: TrainingSlot[] = [
  // Little Ballers (Ages 3-5)
  {
    id: 'slot-lb-1',
    venueName: 'Baneshwor Height Hub (HQ)',
    locationSlug: 'baneshwor-kathmandu',
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
    locationSlug: 'khumaltar-lalitpur',
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
    locationSlug: 'baneshwor-kathmandu',
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
    locationSlug: 'khumaltar-lalitpur',
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
    locationSlug: 'baneshwor-kathmandu',
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
    locationSlug: 'patan-dhoka-lalitpur',
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
    locationSlug: 'gairidhara-kathmandu',
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
    locationSlug: 'sirutar-bhaktapur',
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
    locationSlug: 'baneshwor-kathmandu',
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
    locationSlug: 'gairidhara-kathmandu',
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
    locationSlug: 'baneshwor-kathmandu',
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
    locationSlug: 'patan-dhoka-lalitpur',
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
    locationSlug: 'baneshwor-kathmandu',
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
