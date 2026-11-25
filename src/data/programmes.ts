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
  h1: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  nepaliSummary: string;
  eligibility: string;
  whatToBring: string[];
  curriculumBlocks: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
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
    h1: 'Little Ballers Football Classes for Ages 3–5 in Kathmandu & Lalitpur',
    seoTitle:
      'Little Ballers (Ages 3–5) | Kids Football Classes in Kathmandu | Aurium Sports',
    seoDescription:
      'Fun, structured early-years football classes for 3, 4, and 5-year-olds in Kathmandu (Baneshwor Height) and Lalitpur (Khumaltar). Build agility, balance, coordination, and ball confidence.',
    primaryKeyword: 'Football Classes for 5 Year Olds Kathmandu',
    secondaryKeywords: [
      'Football Coaching for 3 Year Olds Nepal',
      'Football Training for 4 Year Olds Kathmandu',
      'Kids Football Classes Kathmandu',
      'Little Ballers Aurium Sports',
    ],
    nepaliSummary:
      '३ देखि ५ वर्षका बालबालिकाहरूका लागि खेलकूद, सन्तुलन (Agility, Balance & Coordination) र फुटबल सिकाइको विशेष प्रारम्भिक कार्यक्रम (काठमाडौँ र ललितपुर)।',
    eligibility:
      'Open to all boys and girls aged 3 to 5 years. No prior sports or football experience is required.',
    whatToBring: [
      'Comfortable sportswear and trainers or turf shoes (no metal studs)',
      'Labelled water bottle for hydration breaks',
      'Parent or guardian present pitch-side during the session',
    ],
    curriculumBlocks: [
      {
        title: '1. Story-Led Movement & ABCs (15 mins)',
        detail:
          'Imaginative obstacle games developing Agility, Balance, Coordination, spatial awareness, and listening habits.',
      },
      {
        title: '2. 1-Ball-Per-Child Discovery (20 mins)',
        detail:
          'Sole-taps, gentle toe-pushes, stopping the ball on command, and two-footed colour-cone dribbling mazes.',
      },
      {
        title: '3. Mini-Goal Celebration Games (15–25 mins)',
        detail:
          'Small-sided 2v2 and 3v3 mini-goal games focused on joyful scoring, sharing the ball, and high-five teamwork.',
      },
    ],
    faqs: [
      {
        question: 'Is age 3 or 4 too young to start football training in Kathmandu?',
        answer:
          'Not at all. Little Ballers is specifically designed for ages 3 to 5 using play-based motor discovery rather than rigid drills, helping toddlers develop balance, coordination, and social confidence with a ball at their feet.',
      },
      {
        question: 'Where do Little Ballers (Ages 3–5) sessions take place?',
        answer:
          'Little Ballers weekend cohorts currently run on Saturday and Sunday mornings at our Baneshwor Height Hub (HQ, Kathmandu) and Ullens / South Valley Hub (Khumaltar, Lalitpur).',
      },
    ],
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
    h1: 'Academy Prep Football Training for Ages 6–8 in Kathmandu Valley',
    seoTitle:
      'Academy Prep (Ages 6–8) | Children’s Football Academy Kathmandu | Aurium Sports',
    seoDescription:
      'Structured football coaching for 6, 7, and 8-year-olds in Kathmandu and Lalitpur. High-touch ball mastery, two-footed dribbling, 1v1 creativity, and B.U.S.T. sports science.',
    primaryKeyword: 'Football Academy Ages 6–8 Kathmandu',
    secondaryKeywords: [
      'Football training for 6-year-olds Nepal',
      'Football academy for 8-year-olds Kathmandu',
      'Football for Beginners Kids Nepal',
      'Kids Football Academy Kathmandu',
    ],
    nepaliSummary:
      '६ देखि ८ वर्षका बालबालिकाहरूका लागि बल नियन्त्रण (Ball Mastery), 1v1 आत्मविश्वास र B.U.S.T. प्रशिक्षण विधिमा आधारित फुटबल एकेडेमी कार्यक्रम।',
    eligibility:
      'Open to boys and girls aged 6 to 8 years of all skill levels, from complete beginners to enthusiastic school players.',
    whatToBring: [
      'Turf football shoes or trainers and shin guards',
      'Comfortable athletic kit and water bottle',
      'Positive attitude ready for 3v3 and 4v4 small-sided games',
    ],
    curriculumBlocks: [
      {
        title: '1. B.U.S.T. Breathing & Dynamic Mobility (15 mins)',
        detail:
          'Guided nasal breathing, dynamic joint activation, and coordination ladders to build healthy athletic habits early.',
      },
      {
        title: '2. Two-Footed Ball Mastery & 1v1 Duels (25 mins)',
        detail:
          'Inside/outside cuts, body feints, shielding the ball, and brave 1v1 attacking and defending in tight grids.',
      },
      {
        title: '3. 4v4 Small-Sided Match Scenarios (30 mins)',
        detail:
          'High-touch small-sided games teaching triangle support, passing into space, and post-match reflection circles.',
      },
    ],
    faqs: [
      {
        question: 'Can a 6- or 7-year-old beginner join Academy Prep without prior training?',
        answer:
          'Yes. Academy Prep welcomes beginners aged 6 to 8 and groups children by comfort level so every player gets hundreds of ball touches per session in a supportive, pressure-free environment.',
      },
      {
        question: 'Which training grounds host Academy Prep (Ages 6–8)?',
        answer:
          'Academy Prep runs at Baneshwor Height Hub (HQ, Kathmandu) on Tuesday, Thursday, and Saturday mornings and at Ullens / South Valley Hub (Khumaltar, Lalitpur) on Friday afternoons and Saturday mornings.',
      },
    ],
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
    h1: 'Foundation Football Training for Ages 9–12 in Kathmandu, Lalitpur & Bhaktapur',
    seoTitle:
      'Foundation Football Programme (Ages 9–12) | Youth Football Coaching Kathmandu | Aurium Sports',
    seoDescription:
      'Enroll players aged 9 to 12 in Aurium Sports Foundation football squads across Baneshwor, Patan Dhoka, Gairidhara, and Sirutar Bhaktapur. Technical mastery, positional play, and NextSportz TPR tracking.',
    primaryKeyword: 'Football Training Ages 9–12 Nepal',
    secondaryKeywords: [
      'Junior Football Development Kathmandu',
      'Kids Football Training Kathmandu',
      'Aurium Mini League U12 Pathway',
    ],
    nepaliSummary:
      '९ देखि १२ वर्षका खेलाडीहरूका लागि प्राविधिक सीप, पोजिसनल खेल र NextSportz डिजिटल मूल्याङ्कन सहितको फाउन्डेसन फुटबल प्रशिक्षण।',
    eligibility:
      'Open to boys and girls aged 9 to 12 years across Kathmandu, Lalitpur, and Bhaktapur.',
    whatToBring: [
      'Artificial turf boots or football studs appropriate for the venue surface',
      'Shin guards, training socks, and water bottle',
    ],
    curriculumBlocks: [
      {
        title: 'Day 1: Physical Conditioning & Agility (90 mins)',
        detail:
          'B.U.S.T. warm-up (18m), acceleration & deceleration mechanics (20m), aerobic stamina circuits (12m), 7v7 game time (30m), and cool-down reflection (10m).',
      },
      {
        title: 'Day 2: Technical & Tactical Precision (90 mins)',
        detail:
          'Scanning before receiving on the half-turn, third-man passing triangles, weak-foot finishing, and positional rondo overloads.',
      },
      {
        title: 'Day 3: Game Scenarios & League Readiness (90 mins)',
        detail:
          'Positional roles across defence, midfield, and attack, defensive compactness, and preparation for Aurium Mini League fixtures.',
      },
    ],
    faqs: [
      {
        question: 'Where are Foundation (Ages 9–12) training sessions available?',
        answer:
          'Foundation cohorts operate across 4 Kathmandu Valley venues: Baneshwor Height Hub (HQ), Rato Bangala School Hub (Patan Dhoka, Lalitpur), Ace Sports Hub (Gairidhara, Kathmandu), and Sirutar Sports Complex (Bhaktapur).',
      },
      {
        question: 'Do Foundation players get to play competitive matches?',
        answer:
          'Yes. Foundation players compete in internal weekend matchdays, inter-academy friendlies, and the seasonal Aurium Mini League (U-10 and U-12 divisions) with live NextSportz statistics.',
      },
    ],
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
    h1: 'Youth Football Development (Ages 13–16) in Kathmandu, Nepal',
    seoTitle:
      'Youth Football Development (Ages 13–16) | Competitive Football Training Nepal | Aurium Sports',
    seoDescription:
      'Advanced youth football training for teenagers aged 13 to 16 in Kathmandu: 11v11 tactical systems, strength and conditioning, injury prevention, NextSportz analytics, and international tournament pathways.',
    primaryKeyword: 'Youth Football Training Ages 13–16 Nepal',
    secondaryKeywords: [
      'Youth Football Development Nepal',
      'Competitive Football Training Nepal',
      'Football Performance Training Kathmandu',
    ],
    nepaliSummary:
      '१३ देखि १६ वर्षका युवा खेलाडीहरूका लागि उच्च स्तरीय ट्याक्टिकल प्रशिक्षण, शारीरिक फिटनेस र राष्ट्रिय तथा अन्तर्राष्ट्रिय प्रतियोगिताको तयारी।',
    eligibility:
      'Open to committed youth players aged 13 to 16 years seeking structured tactical, physical, and competitive development.',
    whatToBring: [
      'Turf or firm-ground football boots and protective shin guards',
      'Hydration bottle and recovery towel',
    ],
    curriculumBlocks: [
      {
        title: '1. Tactical Phase Play & Transitions (35 mins)',
        detail:
          'Building out from the back under a high press, midfield overloads, counter-pressing triggers, and final-third combination patterns.',
      },
      {
        title: '2. Sports-Science Strength & Conditioning (25 mins)',
        detail:
          'B.U.S.T. mobility, hamstring and ankle stabilization, repeat-sprint endurance, and growth-spurt load management.',
      },
      {
        title: '3. Competitive 9v9 / 11v11 Match Application (30 mins)',
        detail:
          'Full-tempo game scenarios with positional coaching, set-piece organization, and NextSportz TPR performance evaluation.',
      },
    ],
    faqs: [
      {
        question: 'How does the Youth Development (Ages 13–16) programme prepare teenagers for competitive football?',
        answer:
          'Players train three times weekly at Baneshwor Height HQ and Ace Sports Hub in tactical systems, physical conditioning, and mental composure, competing regularly in the Aurium Mini League (U-14 and U-16), Aurium International Cup, and overseas tour trials.',
      },
    ],
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
    h1: 'Specialist Goalkeeper Training in Kathmandu, Nepal (Ages 7–16)',
    seoTitle:
      'Goalkeeper Training in Kathmandu, Nepal | Youth GK Academy | Aurium Sports',
    seoDescription:
      'Dedicated goalkeeper coaching in Kathmandu for young keepers aged 7 to 16: shot-stopping reflexes, safe diving biomechanics, 1v1 angle narrowing, aerial box command, and sweeper-keeper distribution.',
    primaryKeyword: 'Goalkeeper Training Nepal',
    secondaryKeywords: [
      'Goalkeeper Coaching Kathmandu',
      'Goalkeeper Academy Nepal',
      'Youth Goalkeeper Clinic Kathmandu',
    ],
    nepaliSummary:
      '७ देखि १६ वर्षका युवा गोलकिपरहरूका लागि डाइभिङ प्रविधि, रिफ्लेक्स, पेनाल्टी बक्स कमान्ड र आधुनिक वितरण (Distribution) सम्बन्धी विशेष गोलकिपर प्रशिक्षण।',
    eligibility:
      'Open to aspiring and experienced youth goalkeepers aged 7 to 16 years (boys and girls).',
    whatToBring: [
      'Goalkeeper gloves, long-sleeved GK jersey or padded top, and shin guards',
      'Turf football shoes and water bottle',
    ],
    curriculumBlocks: [
      {
        title: '1. Set-Position Footwork & Handling Mechanics (25 mins)',
        detail:
          'Explosive micro-steps, W-grip and basket handling, low collapse saves, and safe shoulder-and-hip landing biomechanics.',
      },
      {
        title: '2. 1v1 Angle Narrowing & Aerial Box Command (30 mins)',
        detail:
          'Closing down breakaways, high-point cross claiming, punching under traffic, and vocal organization of the defensive line.',
      },
      {
        title: '3. Modern Sweeper-Keeper Distribution (30 mins)',
        detail:
          'First-touch composure with both feet, half-volley and side-winder kicks, fast counter-attack throws, and penalty shootout psychology.',
      },
    ],
    faqs: [
      {
        question: 'Where and when does specialist goalkeeper coaching take place in Kathmandu?',
        answer:
          'Our Specialist Goalkeeping & Reflex Lab trains at the Baneshwor Height Hub (HQ, Kathmandu) on Tuesday, Thursday, and Saturday mornings (7:00 AM – 8:30 AM), alongside integration into outfield squad matchdays.',
      },
      {
        question: 'Can a child who is new to goalkeeping join the GK programme?',
        answer:
          'Yes. We teach safe landing mechanics and proper hand positioning from day one so beginners learn to dive and catch safely without fear of injury.',
      },
    ],
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
    h1: 'Girls’ Football Academy in Nepal — Developing the Next Generation (Ages 6–16)',
    seoTitle:
      'Girls’ Football Academy in Nepal | Girls Football Training Kathmandu | Aurium Sports',
    seoDescription:
      'Join Nepal’s premier girls’ football development programme (Ages 6–16) at Aurium Sports in Kathmandu & Lalitpur. Certified coaching, safe environment, and proven European pathways including Dana Cup Quarter-Finalists.',
    primaryKeyword: 'Girls Football Academy Nepal',
    secondaryKeywords: [
      'Girls Football Training Kathmandu',
      'Women’s Football Development Nepal',
      'Football Coaching for Girls Nepal',
      'Dana Cup Nepal Girls Team',
    ],
    nepaliSummary:
      '६ देखि १६ वर्षका छात्राहरूका लागि सुरक्षित, व्यावसायिक र अन्तर्राष्ट्रिय स्तरको महिला फुटबल प्रशिक्षण (डाना कप डेनमार्क क्वार्टर-फाइनलिस्ट टोलीको अनुभव सहित)।',
    eligibility:
      'Open to all girls aged 6 to 16 years—from complete beginners taking their first kick to competitive school and academy players.',
    whatToBring: [
      'Turf football shoes or trainers, shin guards, and comfortable sportswear',
      'Water bottle and hair ties (no jewellery during contact play)',
    ],
    curriculumBlocks: [
      {
        title: '1. B.U.S.T. Wellbeing & ACL/Joint Injury Prevention (20 mins)',
        detail:
          'Female-athlete-specific neuromuscular warm-ups, landing stability, and mindful breathing to protect knees and ankles during growth.',
      },
      {
        title: '2. Technical Mastery & Positional Intelligence (35 mins)',
        detail:
          'First-touch control under pressure, combination passing triangles, 1v1 attacking bravery, and finishing with both feet.',
      },
      {
        title: '3. Competitive Matchplay & International Pathway (35 mins)',
        detail:
          'Small-sided and full-squad tactical games building vocal leadership and preparing representative girls squads for the Dana Cup, Norway Cup, and Yangshuo Cup.',
      },
    ],
    faqs: [
      {
        question: 'What makes Aurium Sports a leader in girls’ football development in Nepal?',
        answer:
          'In July 2025, the Aurium x Rato Bangala U14 Girls squad made history at the Dana Cup in Denmark by reaching the European Quarter-Finals—the first Nepali youth girls team to achieve that milestone. Our girls receive equal pitch time, certified safeguarding, and year-round competitive pathways.',
      },
      {
        question: 'Where do the dedicated Girls Development sessions take place?',
        answer:
          'Our dedicated Girls Development cohort trains at the Rato Bangala School (RBS) Hub in Patan Dhoka, Lalitpur on Monday, Wednesday, and Friday afternoons (4:30 PM – 6:00 PM), while girls are also welcome in all age-group cohorts across Baneshwor, Khumaltar, Gairidhara, and Sirutar.',
      },
    ],
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
    h1: 'Invite-Only Elite Youth Football Development in Nepal (Ages 7+)',
    seoTitle:
      'Elite Youth Football Development Nepal | Invite-Only Academy & IDP | Aurium Sports',
    seoDescription:
      'Request an assessment trial for Aurium Sports Invite-Only Elite squads (Ages 7+). Selected players receive additional weekly coaching hours, Individualized Development Plans (IDP), and international tour pathways.',
    primaryKeyword: 'Elite Football Development Nepal',
    secondaryKeywords: [
      'Advanced Football Training Nepal',
      'Youth Player Development Academy Nepal',
      'Dana Cup Norway Cup Selection Trials Nepal',
    ],
    nepaliSummary:
      '७ वर्ष माथिका उत्कृष्ट प्रतिभावान खेलाडीहरूका लागि अतिरिक्त साप्ताहिक प्रशिक्षण, व्यक्तिगत विकास योजना (IDP) र अन्तर्राष्ट्रिय प्रतियोगिता छनोट कार्यक्रम।',
    eligibility:
      'By technical trial assessment or coaching directorate invitation for committed players aged 7 to 16 years.',
    whatToBring: [
      'Full training kit, turf/firm-ground boots, and shin guards',
      'Hydration bottle and current NextSportz TPR profile (if already enrolled)',
    ],
    curriculumBlocks: [
      {
        title: '1. Individualized Development Plan (IDP) Clinics (30 mins)',
        detail:
          'Position-specific micro-coaching tailored to each player’s biological growth stage, technical profile, and optimal learning pace.',
      },
      {
        title: '2. High-Tempo Tactical & Pressing Systems (30 mins)',
        detail:
          'Advanced scanning speed, third-man combinations, pressing traps, and transition execution against international-standard benchmarks.',
      },
      {
        title: '3. International Tournament Squad Preparation (30 mins)',
        detail:
          'Match simulation, video/NextSportz data review, and team cohesion preparing delegations for the Dana Cup (Denmark), Norway Cup (Norway), and Yangshuo Cup (China).',
      },
    ],
    faqs: [
      {
        question: 'How is a young player selected for the Elite (Invite Only) squad?',
        answer:
          'Players aged 7+ are invited either through consistent excellence in their regular Aurium Academy cohort or by booking an Elite Trial Assessment with our Technical Directorate.',
      },
      {
        question: 'How do you prevent burnout in early-age Elite players?',
        answer:
          'Every Elite player follows an Individualized Development Plan (IDP) monitored by our Sports Science & B.U.S.T. unit, ensuring additional weekly training hours are calibrated to the exact physical and emotional pace best suited to the child.',
      },
    ],
  },
];

export const getPlayerProgramme = (slug: string) =>
  playerProgrammes.find((p) => p.id === slug);

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
