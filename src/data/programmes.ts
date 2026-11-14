// Structured Player Training Programmes (inspired by international academy booking UX),
// Professional Coaching Directorate Remarks (institutional roles, no personal coach names),
// and Parent & Player Testimonials.

export interface PlayerProgramme {
  id: string;
  name: string;
  ageBadge: string;
  duration: string;
  frequency: string;
  category: 'Grassroots' | 'Core Academy' | 'Specialist' | 'Invite Only';
  tagline: string;
  overview: string;
  outcomes: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  enquiryOption: string;
  featured?: boolean;
}

export interface CoachRemark {
  department: string;
  roleTitle: string;
  badge: string;
  headline: string;
  remark: string;
  focusPillar: string;
}

export interface Testimonial {
  quote: string;
  role: string;
  programmeTag: string;
  location: string;
  type: 'parent' | 'player';
}

export const internationalTournaments = [
  {
    name: 'Dana Cup',
    country: 'Hjørring, Denmark 🇩🇰',
    highlight: 'U14 Girls European Quarter-Finalists & Annual Youth Delegation',
  },
  {
    name: 'Norway Cup',
    country: 'Oslo, Norway 🇳🇴',
    highlight: 'World’s Largest Youth Football Tournament Pathway',
  },
  {
    name: 'Yangshuo Cup',
    country: 'Guilin, China 🇨🇳',
    highlight: 'Premier Asian Youth Invitational & Cross-Border Exchange',
  },
  {
    name: 'Gothia Cup & Global Tours',
    country: 'Sweden 🇸🇪 · South Asia · Gulf',
    highlight: 'International Exposure Across U10, U12, U14 & U16 Divisions',
  },
];

export const playerProgrammes: PlayerProgramme[] = [
  {
    id: 'little-ballers',
    name: 'Little Ballers',
    ageBadge: 'Ages: 3–5',
    duration: '45–60 Mins',
    frequency: 'Weekend & Early Evening Slots',
    category: 'Grassroots',
    tagline: 'First touches, joyful mini-games, and fearless movement.',
    overview:
      'Our foundational early-years programme designed around imaginative mini-games and ball discovery. Little Ballers establishes a strong physical foundation in the ABCs (Agility, Balance, and Coordination) while building social confidence, listening skills, and a lifelong love for movement.',
    outcomes: [
      'ABCs: Agility, Balance & Early Motor Coordination',
      'Joyful Ball Familiarity & Two-Footed Discovery',
      'Social Confidence, Sharing & Positive Teamwork',
    ],
    image: '/images/camp.jpg',
    imageAlt:
      'Young children aged 3 to 5 enjoying Little Ballers movement and football mini-games at The Aurium Academy in Kathmandu',
    ctaLabel: 'Book a Spot',
    enquiryOption: 'Little Ballers (Ages 3–5)',
  },
  {
    id: 'academy-prep',
    name: 'Academy Prep',
    ageBadge: 'Ages: 6–8',
    duration: '60–75 Mins',
    frequency: '3 Sessions / Week',
    category: 'Grassroots',
    tagline: 'Building ball confidence and brave 1v1 creativity.',
    overview:
      'The bridge between playful movement and structured academy football. Academy Prep immerses 6-to-8-year-olds in match-focused small-sided sessions, high-touch ball mastery, and our signature B.U.S.T. (Breathing, Warm-Up, Stretching, Training) habits so every child feels confident on the ball.',
    outcomes: [
      'High-Touch Ball Mastery & Two-Footed Dribbling',
      '1v1 Confidence & Small-Sided Match Intelligence',
      'B.U.S.T. Breathing & Positive Emotional Regulation',
    ],
    image: '/images/school.jpg',
    imageAlt:
      'Children aged 6 to 8 practicing ball mastery drills in the Academy Prep programme at Aurium Sports Kathmandu',
    ctaLabel: 'Book a Spot',
    enquiryOption: 'Academy Prep (Ages 6–8)',
  },
  {
    id: 'foundation-squads',
    name: 'Foundation',
    ageBadge: 'Ages: 9–12',
    duration: '90 Mins',
    frequency: '3-Day Weekly Microcycle',
    category: 'Core Academy',
    tagline: 'Mastering the FUNdamentals and intelligent team play.',
    overview:
      'Building on the FUNdamentals during the golden age of skill acquisition. Foundation ensures players combine technical precision—passing, receiving on the half-turn, and finishing—with effective teamwork, while tracking termly progress on their verified NextSportz Digital Player Card.',
    outcomes: [
      'Improved Tactical Understanding & Combination Play',
      'Introduction to Positional Play & Spatial Scanning',
      'Teamwork, Leadership & NextSportz TPR Tracking',
    ],
    image: '/images/academy.jpg',
    imageAlt:
      'Foundation squad players aged 9 to 12 training in positional passing drills at The Aurium Academy in Kathmandu Valley',
    ctaLabel: 'Book a Spot',
    enquiryOption: 'Foundation Squad (Ages 9–12)',
  },
  {
    id: 'youth-development',
    name: 'Youth Development',
    ageBadge: 'Ages: 13–16',
    duration: '90 Mins',
    frequency: '3 Sessions / Week + League Play',
    category: 'Core Academy',
    tagline: 'Tactical maturity, athletic conditioning, and match leadership.',
    overview:
      'Youth Development focuses on getting players tactically sharp and able to handle high-tempo game situations while mastering their specific role within the team. Prepares athletes for the Aurium Mini League, school championships, and international tournament trials.',
    outcomes: [
      'Advanced Tactical Systems, Pressing & Transitions',
      'Sports-Science Speed, Stamina & Injury Prevention',
      'Matchday Composure, Vocal Leadership & Resilience',
    ],
    image: '/images/data-pitch.jpg',
    imageAlt:
      'Youth Development squad aged 13 to 16 in tactical match training at Aurium Sports Kathmandu',
    ctaLabel: 'Book a Spot',
    enquiryOption: 'Youth Development (Ages 13–16)',
  },
  {
    id: 'goalkeeper-academy',
    name: 'Goalkeeper',
    ageBadge: 'Ages: 7–16',
    duration: '75–90 Mins',
    frequency: 'Specialist Clinic + Squad Play',
    category: 'Specialist',
    tagline: 'Command the penalty box and stay calm under pressure.',
    overview:
      'Our specialized Goalkeeping programme is dedicated to shot-stopping mechanics, explosive footwork, understanding team defence, getting physically agile, and learning to stay mentally composed under high-pressure match situations.',
    outcomes: [
      'Shot-Stopping Reflexes, Diving & Safe Landing Technique',
      'Box Command, Aerial Claiming & Defensive Organization',
      'Sweeper-Keeper Distribution & Pressure Reset Routines',
    ],
    image: '/images/player-portrait.jpg',
    imageAlt:
      'Youth goalkeeper training reflexes and box command at The Aurium Academy in Kathmandu',
    ctaLabel: 'Book a Spot',
    enquiryOption: 'Goalkeeper Academy (Ages 7–16)',
  },
  {
    id: 'girls-development',
    name: 'Girls Development',
    ageBadge: 'Ages: All (6–16)',
    duration: '90 Mins',
    frequency: '3 Sessions / Week + Tour Pathway',
    category: 'Specialist',
    tagline: 'Empowering girls with elite coaching and global stages.',
    overview:
      'Our Girls Development programme establishes a strong technical and tactical core across 5-a-side, 7-a-side, and full-pitch football. With certified coaching, industry-standard equipment, and a proven pathway to the Dana Cup, Norway Cup, and Yangshuo Cup, girls flourish on and off the field.',
    outcomes: [
      'Complete Grasp of Core Technical & Tactical Football Skills',
      'Self-Expression, Unshakeable Confidence & Vocal Leadership',
      'Direct Pathway to Dana Cup, Norway Cup & Yangshuo Cup Squads',
    ],
    image: '/images/wellbeing.jpg',
    imageAlt:
      'Girls football development squad training with certified coaches at Aurium Sports in Kathmandu Valley',
    ctaLabel: 'Book a Spot',
    enquiryOption: 'Girls Development Programme',
  },
  {
    id: 'elite-invite-only',
    name: 'Elite (Invite Only)',
    ageBadge: 'Ages: 7+ (Early Age Entry)',
    duration: '90 Mins + Extra Clinics',
    frequency: 'Additional Weekly Training · Custom Pace',
    category: 'Invite Only',
    tagline: 'Additional coaching hours tailored to each player’s optimal pace.',
    overview:
      'Our high-performance programme selects high-potential athletes from an early age and provides additional weekly training sessions alongside their core squad. Every Elite player follows an Individualized Development Plan (IDP) calibrated to develop them at the pace best suited to their physical and technical growth—preparing squads for the Dana Cup, Norway Cup, Yangshuo Cup, and international showcases.',
    outcomes: [
      'Additional Weekly High-Detail Technical & Tactical Coaching',
      'Individualized Pacing (IDP) Suited to Each Child’s Growth Stage',
      'Priority Selection for Dana Cup, Norway Cup, Yangshuo Cup & Global Tours',
    ],
    image: '/images/stadium-night.jpg',
    imageAlt:
      'Aurium Sports Elite Invite-Only youth squad competing under floodlights at an international tournament',
    ctaLabel: 'Book Trial Spot',
    enquiryOption: 'Elite Programme (Invite Only — Trial Request)',
    featured: true,
  },
];

export const coachRemarks: CoachRemark[] = [
  {
    department: 'Technical & Methodology Directorate',
    roleTitle: 'Head of Academy Curriculum & Player Pathways',
    badge: 'European-Inspired Pedagogy • Ages 3–16',
    headline: '“We develop thinkers who master the ball at their own right pace.”',
    remark:
      'From a child’s very first playful touch in Little Ballers and Academy Prep to our Invite-Only Elite squads, we never sacrifice long-term technical mastery for short-term shortcuts. Our 3-day weekly microcycle and individualized pacing ensure every player builds two-footed confidence, spatial awareness, and genuine game intelligence.',
    focusPillar: 'Player-First Technical Mastery',
  },
  {
    department: 'Sports Science & Wellbeing Directorate',
    roleTitle: 'Lead Conditioning & B.U.S.T. Protocol Specialist',
    badge: 'Clinical Sports Science • Injury Prevention',
    headline: '“A calm, resilient mind is a young footballer’s greatest advantage.”',
    remark:
      'Before our players execute a single high-speed sprint or passing drill, they begin with our B.U.S.T. framework—Breathing, Warm-Up, Stretching, and Training. We protect growing joints during critical growth spurts and teach athletes how to regulate pressure, whether they are taking a tournament penalty or sitting for school exams.',
    focusPillar: 'The B.U.S.T. Mental & Physical Model',
  },
  {
    department: 'Specialist Goalkeeping & Tactical Unit',
    roleTitle: 'Head of Goalkeeping & Defensive Transitions',
    badge: 'Positional Specialist Lab • Ages 7–16',
    headline: '“Confidence in the box comes from preparation, not guesswork.”',
    remark:
      'Goalkeepers and specialist positional players require dedicated biomechanics and psychological coaching. We train our keepers to master footwork, safe diving mechanics, modern back-line distribution, and instant emotional reset routines so they lead the entire team from the back with authority.',
    focusPillar: 'Specialist Positional Excellence',
  },
  {
    department: 'International Tours & Elite Pathways',
    roleTitle: 'Directorate of Global Competitions & Scouting',
    badge: 'Dana Cup • Norway Cup • Yangshuo Cup',
    headline: '“Nepali youth belong on the world stage when given a structured pathway.”',
    remark:
      'Competing across Europe and Asia—from the Dana Cup in Denmark and the Norway Cup in Oslo to the Yangshuo Cup in China—transforms how young Nepali athletes see themselves. Our Elite Invite-Only pathway gives committed players from an early age the extra coaching hours and international exposure needed to compete fearlessly anywhere in the world.',
    focusPillar: 'Global Tournament Readiness',
  },
];

export const parentPlayerTestimonials: Testimonial[] = [
  {
    quote:
      'Enrolling our younger son in Little Ballers and our older son in Academy Prep has been the best decision we have made as parents in Kathmandu. The coaches never yell destructively—they start every session with breathing and mobility, know how to encourage shy beginners, and have completely replaced evening screen time with healthy discipline and joy.',
    role: 'Parent of Little Ballers (Age 5) & Academy Prep (Age 8) Players',
    programmeTag: 'Little Ballers & Academy Prep',
    location: 'Baneshwor Height, Kathmandu',
    type: 'parent',
  },
  {
    quote:
      'When our son was invited into the Elite Squad, what impressed us most was the coaching team’s patience. Even with the additional weekly training sessions, they never rushed or overloaded him—every drill was tailored to the pace best suited for his growth, and his NextSportz digital report card shows incredible progress every term.',
    role: 'Parent of U-11 Elite (Invite Only) & Foundation Player',
    programmeTag: 'Elite (Invite Only)',
    location: 'Patan Dhoka, Lalitpur',
    type: 'parent',
  },
  {
    quote:
      'As parents of a daughter who loves football, seeing Aurium build a real Girls Development pathway with equal resources, certified safeguarding, and international opportunities at the Dana Cup, Norway Cup, and Yangshuo Cup gave us complete peace of mind. Her self-confidence both at school and on the pitch has transformed.',
    role: 'Parent of U-14 Girls Development Squad Player',
    programmeTag: 'Girls Development & International Pathway',
    location: 'Kathmandu Valley',
    type: 'parent',
  },
  {
    quote:
      'Before joining The Aurium Academy, I struggled with composure in tight matches and lacked confidence on my weaker foot. The coaches’ tactical guidance, B.U.S.T. breathing resets, and extra Elite sessions helped me understand how to scan the pitch, adapt between midfield and attack, and lead my teammates under tournament pressure.',
    role: 'Youth Development & Elite Squad Captain (Under-16s)',
    programmeTag: 'Youth Development (Ages 13–16)',
    location: 'The Aurium Academy',
    type: 'player',
  },
];
