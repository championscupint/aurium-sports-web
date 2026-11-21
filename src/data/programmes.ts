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
  childName: string;
  affiliationType: 'Academy Parent' | 'Training Venue' | 'Partner School';
  venueOrSchool: string;
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
      'Before joining Aurium, Aarav only ever used his right foot and stared straight down at the ball while dribbling. Within four months in Academy Prep, the coaches taught him how to scan his shoulders before receiving, open his body on the half-turn, and trust his left foot in tight 3v3 and 4v4 rondo grids. His decision-making speed has improved beyond anything we expected at age 7.',
    role: 'Academy Parent • Father of Aarav (Age 7)',
    childName: 'Aarav',
    affiliationType: 'Academy Parent',
    venueOrSchool: 'Baneshwor Height Hub (HQ)',
    programmeTag: 'Academy Prep (Ages 6–8)',
    location: 'Baneshwor Height, Kathmandu',
    type: 'parent',
  },
  {
    quote:
      'What sets the Patan Dhoka training venue apart is how tactically structured every 90-minute session is. Siwani used to panic whenever opponents pressed her in midfield, but the coaches drilled third-man passing triangles, body orientation, and B.U.S.T. breathing resets. Watching her play with her head up and dictate tempo during the Dana Cup selection trials made our whole family proud.',
    role: 'Academy Parent • Mother of Siwani (Age 13)',
    childName: 'Siwani',
    affiliationType: 'Training Venue',
    venueOrSchool: 'Rato Bangala School (RBS) Hub • Patan Dhoka',
    programmeTag: 'Girls Development (Ages 6–16)',
    location: 'Patan Dhoka, Lalitpur',
    type: 'parent',
  },
  {
    quote:
      'At age 4, Reyansh was shy around larger groups, so we enrolled him in Little Ballers at the Khumaltar turf. Instead of making toddlers stand in long queues, every child has a ball at their feet the entire hour. Through story-based agility mazes, sole-taps, and balance games, his motor coordination, spatial awareness, and social confidence have blossomed.',
    role: 'Academy Parent • Mother of Reyansh (Age 4)',
    childName: 'Reyansh',
    affiliationType: 'Training Venue',
    venueOrSchool: 'Ullens / South Valley Hub • Khumaltar',
    programmeTag: 'Little Ballers (Ages 3–5)',
    location: 'Khumaltar, Lalitpur',
    type: 'parent',
  },
  {
    quote:
      'When Prayash was invited into the Elite Invite-Only squad at age 10, our biggest relief was seeing that the additional weekly sessions were built around an Individualized Development Plan. The coaches worked specifically on his center-midfield pressing triggers, transition recovery runs, and progressive line-breaking passes—at a pace suited to his physical growth spurt without overloading his knees.',
    role: 'Academy Parent • Father of Prayash (Age 10)',
    childName: 'Prayash',
    affiliationType: 'Academy Parent',
    venueOrSchool: 'Baneshwor Height Hub (HQ) & RBS Hub',
    programmeTag: 'Elite — Invite Only (Ages 7+)',
    location: 'Kathmandu Valley',
    type: 'parent',
  },
  {
    quote:
      'Through the Aurium SportsEd partnership at Rato Bangala School, Kritika transitioned from casual school recess football to proper positional play. She learned how to hold defensive line compactness, time her overlapping full-back runs, and communicate vocally with her back four. Her termly report card and NextSportz TPR profile read like a professional academy dossier.',
    role: 'Partner School Parent • Mother of Kritika (Age 14)',
    childName: 'Kritika',
    affiliationType: 'Partner School',
    venueOrSchool: 'Rato Bangala School (Partner School)',
    programmeTag: 'School Programme & Girls Pathway',
    location: 'Patan Dhoka, Lalitpur',
    type: 'parent',
  },
  {
    quote:
      'Kushal always wanted to play in goal, but nowhere in Kathmandu offered real goalkeeper biomechanics until we joined Aurium’s GK Lab at Baneshwor. They taught him set-position footwork, how to narrow 1v1 shooting angles, low collapse diving without hurting his elbows, and how to play as a modern sweeper-keeper distributing cleanly under a high press.',
    role: 'Academy Parent • Father of Kushal (Age 12)',
    childName: 'Kushal',
    affiliationType: 'Training Venue',
    venueOrSchool: 'Baneshwor Height Hub (HQ) • GK Reflex Lab',
    programmeTag: 'Goalkeeper (Ages 7–16)',
    location: 'Baneshwor Height, Kathmandu',
    type: 'parent',
  },
  {
    quote:
      'The weekday after-school cohort at Ace Sports Hub fits our schedule seamlessly. Vivaan has learned the difference between just kicking the ball away and playing out from the back with composure. The coaches emphasize 1v1 defensive delay—staying on the balls of his feet, jockeying wingers onto their weaker side, and winning possession cleanly without reckless lunges.',
    role: 'Academy Parent • Father of Vivaan (Age 11)',
    childName: 'Vivaan',
    affiliationType: 'Training Venue',
    venueOrSchool: 'Ace Sports Hub • Gairidhara / Sinamangal',
    programmeTag: 'Foundation (Ages 9–12)',
    location: 'Gairidhara, Kathmandu',
    type: 'parent',
  },
  {
    quote:
      'Having the Sirutar Sports Complex training ground right in Bhaktapur has been a game-changer for East Valley parents. Siddhant trains three mornings a week before school. His first-touch cushion under aerial balls, off-the-ball movement into half-spaces, and stamina in the Aurium Mini League have improved dramatically, and he starts every school day energized.',
    role: 'Academy Parent • Mother of Siddhant (Age 11)',
    childName: 'Siddhant',
    affiliationType: 'Training Venue',
    venueOrSchool: 'Sirutar Sports Complex • Bhaktapur',
    programmeTag: 'Foundation (Ages 9–12)',
    location: 'Sirutar, Bhaktapur',
    type: 'parent',
  },
  {
    quote:
      'At Sanskriti International School, the Aurium coaching unit completely changed how our son Anmol approaches team sports. Instead of clustering around the ball, his U-12 school team now understands width and depth—stretching the pitch in possession and pressing as a coordinated unit when possession is lost. The coaches balance tactical detail with genuine warmth.',
    role: 'Partner School Parent • Father of Anmol (Age 12)',
    childName: 'Anmol',
    affiliationType: 'Partner School',
    venueOrSchool: 'Sanskriti International School (Partner School)',
    programmeTag: 'Aurium SportsEd School Programme',
    location: 'Halchowk, Kathmandu',
    type: 'parent',
  },
  {
    quote:
      'Tenzing is 15 and preparing for higher-level competitive football. The Youth Development sessions at Baneshwor and Ace Hub treat teenage players like real athletes—combining 11v11 tactical phase play, counter-pressing triggers in the final third, and proper hamstring and ankle injury-prevention through the B.U.S.T. warm-up protocol.',
    role: 'Academy Parent • Father of Tenzing (Age 15)',
    childName: 'Tenzing',
    affiliationType: 'Academy Parent',
    venueOrSchool: 'Baneshwor Height Hub & Ace Sports Hub',
    programmeTag: 'Youth Development (Ages 13–16)',
    location: 'Kathmandu Central',
    type: 'parent',
  },
  {
    quote:
      'We first discovered Aurium through the ECA football curriculum at Galaxy Public School and immediately enrolled our daughter Ananya into the weekend academy cohort as well. The coaches taught her how to disguise her passing with body feints, time her runs behind the defensive line, and bounce back mentally after a missed chance using their post-session reflection circles.',
    role: 'Partner School & Academy Parent • Mother of Ananya (Age 9)',
    childName: 'Ananya',
    affiliationType: 'Partner School',
    venueOrSchool: 'Galaxy Public School (Partner School) & Baneshwor Hub',
    programmeTag: 'Foundation & School ECA',
    location: 'Gyaneshwor / Baneshwor, Kathmandu',
    type: 'parent',
  },
  {
    quote:
      'Our son Ronit joined through LRI School’s holiday camp partnership and now trains year-round with the Elite group preparing for international tours like the Norway Cup and Yangshuo Cup. Seeing his NextSportz digital card track his sprint recovery, passing accuracy, and tactical discipline every month keeps him intrinsically motivated without any parental nagging.',
    role: 'Partner School & Elite Parent • Father of Ronit (Age 14)',
    childName: 'Ronit',
    affiliationType: 'Partner School',
    venueOrSchool: 'LRI School (Partner School) & Elite Squad',
    programmeTag: 'Elite (Invite Only) & International Pathway',
    location: 'Kalanki / Kathmandu Valley',
    type: 'parent',
  },
];
