// Every service Aurium offers. Pages, navigation, cards and enquiry forms
// are all generated from this list, so add or edit a service here only.

export type EnquiryIntent = "register" | "inquiry";

export type Offering = {
  name: string;
  description: string;
  meta?: string; // e.g. duration, age group or frequency
  intent: EnquiryIntent;
};

export type Service = {
  slug: string;
  name: string;
  brand?: string; // sub-brand label, e.g. "Aurium SportsEd"
  group: "Train" | "Schools" | "Compete" | "Impact" | "Build";
  kicker: string;
  tagline: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  // Words rendered large on services that have no photograph.
  motif: string;
  audience: string[];
  highlights: { title: string; text: string }[];
  offeringsTitle: string;
  offerings: Offering[];
};

export const services: Service[] = [
  {
    slug: "academy",
    name: "Academy",
    brand: "The Aurium Academy",
    group: "Train",
    kicker: "Year-round training",
    tagline: "Where the journey begins.",
    summary:
      "Structured, year-round training for boys and girls aged 3–16 across Little Ballers (Ages 3–5), Academy Prep (Ages 6–8), Foundation (Ages 9–12), Youth Development (Ages 13–16), Goalkeeper, Girls Development, and our Invite-Only Elite Squad.",
    image: "/images/academy.jpg",
    imageAlt:
      "Youth football players training with certified coaches at The Aurium Academy in Kathmandu, Nepal",
    seoTitle:
      "Football Academy Kathmandu | Kids Football Training | The Aurium Academy",
    seoDescription:
      "Book a spot at The Aurium Academy in Kathmandu Valley: Little Ballers (Ages 3–5), Academy Prep (6–8), Foundation (9–12), Youth Development (13–16), Goalkeeper, Girls Development, and Invite-Only Elite squads.",
    primaryKeyword: "Football Academy Kathmandu",
    secondaryKeywords: [
      "Kids Football Training Kathmandu",
      "The Aurium Academy",
      "Girls Football Nepal",
      "Girls Football Development Kathmandu",
      "Youth Football Coaching Kathmandu",
    ],
    motif: "PLAY",
    audience: ["Ages 3–16", "Boys & girls", "All levels + Invite-Only Elite"],
    highlights: [
      { title: "Age-specific progression", text: "From Little Ballers (Ages 3–5) and Academy Prep (Ages 6–8) to Foundation, Youth Development, and Invite-Only Elite squads." },
      { title: "Individualized Elite pacing", text: "Invite-Only Elite teams from an early age receive additional weekly training calibrated to each player's optimal growth pace." },
      { title: "Sports for Mental Health", text: "B.U.S.T. breathing, reflection circles, and certified coaches trained as positive mentors, not just instructors." },
      { title: "Equal pathway for girls", text: "Dedicated girls' squads with the same coaching, resources and pathways to Dana Cup, Norway Cup, and Yangshuo Cup." },
    ],
    offeringsTitle: "Select a programme to book a spot",
    offerings: [
      { name: "Little Ballers (Ages 3–5)", description: "Fun mini-games and early ball discovery establishing a strong foundation in the ABCs (Agility, Balance & Coordination).", meta: "Ages 3–5 · 45–60 mins", intent: "register" },
      { name: "Academy Prep (Ages 6–8)", description: "Match-focused small-sided sessions building two-footed ball confidence, 1v1 creativity, and B.U.S.T. habits.", meta: "Ages 6–8 · 3 sessions / week", intent: "register" },
      { name: "Foundation (Ages 9–12)", description: "Mastering the FUNdamentals, passing combinations, positional awareness, and teamwork with NextSportz TPR tracking.", meta: "Ages 9–12 · 3 sessions / week", intent: "register" },
      { name: "Youth Development (Ages 13–16)", description: "Tactical maturity, high-tempo game situations, S&C conditioning, and competitive league readiness.", meta: "Ages 13–16 · 3 sessions / week", intent: "register" },
      { name: "Goalkeeper (Ages 7–16)", description: "Specialist shot-stopping reflexes, footwork, box command, distribution, and composure under pressure.", meta: "Ages 7–16 · Specialist GK Lab", intent: "register" },
      { name: "Girls Development (Ages 6–16)", description: "Dedicated girls programme building core technical-tactical skills, confidence, and pathways to international tournaments.", meta: "Girls Ages 6–16 · All levels", intent: "register" },
      { name: "Elite — Invite Only (Ages 7+)", description: "Additional weekly coaching hours from an early age with individualized pacing (IDP) and preparation for Dana Cup, Norway Cup & Yangshuo Cup.", meta: "Ages 7+ · By Selection / Trial", intent: "register" },
      { name: "Basketball Academy", description: "Footwork, ball handling, shooting mechanics and team play in a positive, high-energy environment.", meta: "Ages 8–16", intent: "register" },
      { name: "Cricket Academy", description: "Batting, bowling and fielding fundamentals with match practice and indoor cricket sessions.", meta: "Ages 8–16", intent: "register" },
    ],
  },
  {
    slug: "school-programs",
    name: "School Programs",
    brand: "Aurium SportsEd",
    group: "Schools",
    kicker: "For schools",
    tagline: "Every school, a talent hub.",
    summary:
      "We plug a complete sports department into your school: certified trainers, a structured curriculum, equipment, report cards for every student and pathways into competitive sport. Choose ECA, after-school or the full Grassroots School Program.",
    image: "/images/school.jpg",
    imageAlt:
      "School students participating in Aurium SportsEd grassroots football and physical education program in Kathmandu",
    seoTitle:
      "School Football Program Nepal | School Sports Development Kathmandu",
    seoDescription:
      "Partner with Aurium SportsEd to bring structured school football programs, certified ECA coaches, termly student report cards, and grassroots sports curricula to schools in Kathmandu Valley, Nepal.",
    primaryKeyword: "School Football Program Nepal",
    secondaryKeywords: [
      "School Football Development Kathmandu",
      "Aurium SportsEd",
      "School ECA Sports Nepal",
      "Grassroots School Football Nepal",
    ],
    motif: "LEARN",
    audience: ["Grades 1–12", "Private & community schools", "Colleges"],
    highlights: [
      { title: "Grades 1–5", text: "Mobility-based training and physical development activities that build movement literacy early." },
      { title: "Grades 6–12", text: "Sport-specific coaching in football, basketball and cricket with skill assessments." },
      { title: "Report cards", text: "Evaluation and progress monitoring with a report card for every student, every term." },
      { title: "Flexible packages", text: "Basic, Standard and Premium tiers, from one weekly session to twice-weekly coaching with pro-athlete meetups." },
    ],
    offeringsTitle: "Program formats",
    offerings: [
      { name: "ECA Program", description: "Weekly extra-curricular sports periods delivered inside your timetable by Aurium trainers.", meta: "Football · Basketball · Cricket", intent: "inquiry" },
      { name: "After-School Program", description: "Coaching on your premises after classes, giving students structured training without travel.", meta: "Football · Basketball · Cricket", intent: "inquiry" },
      { name: "Grassroots School Program", description: "A full sports-education partnership: curriculum, coach education, inter-school competition and talent pathways.", meta: "Season-long partnership", intent: "inquiry" },
    ],
  },
  {
    slug: "training-camps",
    name: "Training Camps",
    group: "Train",
    kicker: "Holiday intensives",
    tagline: "Make every break count.",
    summary:
      "Short, high-energy camps timed around Nepal's school holidays. Daily coaching, games, a Mental Health Day, and a certificate at the end. Open to Aurium players and newcomers alike.",
    image: "/images/camp.jpg",
    imageAlt:
      "Children practicing football ball-control drills during an Aurium Sports holiday training camp in Kathmandu",
    seoTitle:
      "Youth Football Training Camps Kathmandu | Grassroots Football Development",
    seoDescription:
      "Join Aurium Sports holiday training camps in Kathmandu: intensive daily youth football coaching, B.U.S.T. training methodology, Mental Health Day, and tournament festivals.",
    primaryKeyword: "Youth Football Training Methodology",
    secondaryKeywords: [
      "Grassroots Football Development",
      "Holiday Football Camps Kathmandu",
      "Youth Sports Camps Nepal",
    ],
    motif: "CAMP",
    audience: ["Ages 6–16", "Beginners welcome", "Certificate on completion"],
    highlights: [
      { title: "Daily coaching", text: "Morning sessions covering technique, fitness and small-sided games." },
      { title: "Mental Health Day", text: "Every camp includes a dedicated day for wellbeing, teamwork and self-reflection." },
      { title: "Closing festival", text: "Camps end with a mini-tournament, awards and certificates in front of parents." },
    ],
    offeringsTitle: "Upcoming camps",
    offerings: [
      { name: "Winter Camp", description: "Our biggest camp of the year, run over the winter school break.", meta: "Poush–Magh · est. 2 weeks", intent: "register" },
      { name: "Spring Camp", description: "Fresh start after final exams with intensive skill blocks.", meta: "Chaitra · est. 10 days", intent: "register" },
      { name: "Summer Camp", description: "Beat the summer slump with daily football and fitness.", meta: "Asar–Shrawan · est. 2 weeks", intent: "register" },
      { name: "Dashain Camp", description: "Festival-break camp that keeps players active through the holidays.", meta: "Ashwin–Kartik · est. 1 week", intent: "register" },
      { name: "Session-End Camp", description: "Wraps up the academic year with assessments and team selection.", meta: "Falgun–Chaitra · est. 1 week", intent: "register" },
      { name: "Closed Camp", description: "Invitation-only preparation for squads heading to tournaments or tours.", meta: "By selection", intent: "inquiry" },
    ],
  },
  {
    slug: "international",
    name: "International Tours",
    group: "Compete",
    kicker: "From Nepal to the world",
    tagline: "Talent is universal. Opportunity is not.",
    summary:
      "We take Nepali players to the world's premier youth tournaments and bring international match experience home—including the Dana Cup (Denmark), Norway Cup (Norway), Yangshuo Cup (China), Gothia Cup (Sweden), and regional Asian invitational cups.",
    image: "/images/stadium-night.jpg",
    imageAlt:
      "Nepali youth football squad competing under stadium floodlights at an international youth tournament",
    seoTitle:
      "International Youth Football Nepal | Dana Cup, Norway Cup & Yangshuo Cup",
    seoDescription:
      "Aurium Sports takes Nepali youth footballers and girls squads to global tournaments including the Dana Cup (Denmark), Norway Cup (Norway), Yangshuo Cup (China), and Gothia Cup.",
    primaryKeyword: "International Youth Football Nepal",
    secondaryKeywords: [
      "Nepali Youth Football International Tournaments",
      "Dana Cup Nepal",
      "Norway Cup Nepal",
      "Yangshuo Cup Youth Football",
      "Girls Football Nepal",
      "Girls Football Development Kathmandu",
    ],
    motif: "WORLD",
    audience: ["Ages 8–18", "Elite & Academy Squads", "Partner Schools"],
    highlights: [
      { title: "End-to-end delivery", text: "Registration, visas, travel, kits, accommodation, certified coaching staff and safeguarding chaperones, all handled." },
      { title: "Proven on global stages", text: "Competing across Europe and Asia—highlighted by our U14 girls reaching the Dana Cup European Quarter-Finals alongside campaigns for the Norway Cup and Yangshuo Cup." },
      { title: "Beyond the trip", text: "Pathways to international trials, academies and study-and-play scholarships abroad for players with elite potential." },
    ],
    offeringsTitle: "International tournament destinations",
    offerings: [
      { name: "European Youth Majors (Dana Cup & Norway Cup)", description: "Compete at the Dana Cup (Hjørring, Denmark), Norway Cup (Oslo, Norway), and Gothia Cup (Sweden) against 1,000+ international youth clubs.", meta: "10–14 days · Europe", intent: "register" },
      { name: "Yangshuo Cup & East Asia Tours", description: "High-level international youth tournaments and cultural football exchanges at the Yangshuo Cup (Guilin, China), Thailand, and Malaysia.", meta: "6–10 days · Asia", intent: "register" },
      { name: "South Asia & Gulf Invitationals", description: "Competitive youth cups and academy exchange fixtures across India, Bhutan, Sri Lanka, and the UAE.", meta: "5–8 days", intent: "inquiry" },
      { name: "Domestic National Tours (Within Nepal)", description: "Residential football tours and inter-academy fixtures across Pokhara, Chitwan, Dharan, and Butwal.", meta: "3–5 days", intent: "inquiry" },
    ],
  },
  {
    slug: "tournaments",
    name: "Tournaments & Leagues",
    group: "Compete",
    kicker: "Competition creates opportunity",
    tagline: "Meaningful matches, run properly.",
    summary:
      "We organise and manage competitions for schools, colleges and companies: fixtures, referees, live stats, awards and media. Home of the Aurium Mini League (three editions and counting) and the Aurium International Cup.",
    image: "/images/tournament.jpg",
    imageAlt:
      "Youth football teams competing in the Aurium Mini League tournament in Kathmandu Valley, Nepal",
    seoTitle:
      "Youth Football Tournaments & Leagues Nepal | Aurium Mini League",
    seoDescription:
      "Professional tournament management in Kathmandu, Nepal: home of the Aurium Mini League, Aurium International Cup, school football tournaments, and live NextSportz digital statistics.",
    primaryKeyword: "Youth Football Tournaments Nepal",
    secondaryKeywords: [
      "School Football Tournaments Kathmandu",
      "Aurium Mini League",
      "Aurium International Cup",
      "NextSportz Tournament Analytics",
    ],
    motif: "CUP",
    audience: ["Schools", "Colleges", "Corporates", "Clubs"],
    highlights: [
      { title: "Aurium Mini League", text: "A season-long grassroots league giving young players regular, meaningful competition. Now in its third edition." },
      { title: "Aurium International Cup", text: "Open and School editions with group stages, knockouts, MVP and special awards." },
      { title: "Digital delivery", text: "Tie sheets, points tables and player stats published live with our technology partner NextSportz." },
    ],
    offeringsTitle: "Tournament management for",
    offerings: [
      { name: "School Tournaments", description: "Inter-school and intra-school competitions with age-group formats and certificates.", meta: "Football · Basketball · Cricket", intent: "inquiry" },
      { name: "College Tournaments", description: "Inter-college leagues and cups, fully managed from registration to final.", meta: "League or knockout", intent: "inquiry" },
      { name: "Corporate Tournaments", description: "Team-building futsal and football events for companies, with branding and hospitality.", meta: "1–3 days", intent: "inquiry" },
      { name: "Enter a Team", description: "Register your team for the next Aurium Mini League or Aurium International Cup.", meta: "Open & School editions", intent: "register" },
    ],
  },
  {
    slug: "sports-for-mental-health",
    name: "Sports for Mental Health",
    group: "Impact",
    kicker: "The foundation of everything we do",
    tagline: "Stronger minds. Stronger players.",
    summary:
      "Our signature model uses sport as a tool for emotional wellbeing in children, youth and adults. It is woven into every Aurium program and offered as standalone workshops for schools, parents and organisations. 500+ students and their parents influenced so far.",
    image: "/images/wellbeing.jpg",
    imageAlt:
      "Aurium Sports coach leading a mindfulness and mental wellbeing circle with youth footballers in Kathmandu",
    seoTitle:
      "Sports for Mental Health Programs & School Workshops | Aurium Sports Nepal",
    seoDescription:
      "Book Aurium Sports for Mental Health school workshops, parent wellbeing sessions, and community sport-for-good programs in Kathmandu Valley, Nepal.",
    primaryKeyword: "Sports for Mental Wellbeing Nepal",
    secondaryKeywords: [
      "Youth Sports Development Nepal",
      "School Mental Health Workshops Kathmandu",
      "B.U.S.T. Model Nepal",
    ],
    motif: "MIND",
    audience: ["Players", "Parents", "Schools", "Organisations"],
    highlights: [
      { title: "Workshops", text: "Interactive sessions on stress, confidence and resilience for players and for parents." },
      { title: "Reflection rituals", text: "Short guided self-reflection after training helps players process wins, losses and pressure." },
      { title: "Mentor coaches", text: "Every Aurium coach is trained to notice, listen and support, not just instruct." },
      { title: "Research-backed", text: "Built on evidence that regular physical activity reduces anxiety and poor mental-health days." },
    ],
    offeringsTitle: "Bring it to your community",
    offerings: [
      { name: "School Workshop", description: "Assembly or classroom workshops pairing movement games with wellbeing conversations.", meta: "60–90 min", intent: "inquiry" },
      { name: "Parent Session", description: "Helping parents support young athletes through pressure, setbacks and growth.", meta: "60 min", intent: "inquiry" },
      { name: "Organisational Program", description: "Sport-based wellbeing programs for NGOs, companies and community groups.", meta: "Custom", intent: "inquiry" },
    ],
  },
  {
    slug: "talent-scout",
    name: "Talent Scout Program",
    group: "Compete",
    kicker: "Find the next one",
    tagline: "Seen. Measured. Given a pathway.",
    summary:
      "Open trials and scouting days to identify players with elite potential, followed by data-backed player portfolios, scholarship opportunities for underprivileged athletes, and introductions to clubs, academies and international programs.",
    image: "/images/player-portrait.jpg",
    imageAlt:
      "Young Nepali footballer evaluated during an Aurium Sports talent scouting and NextSportz performance assessment",
    seoTitle:
      "Sports Technology & Football Talent Scouting Nepal | NextSportz Data",
    seoDescription:
      "Open football talent scouting trials and verified NextSportz performance data portfolios in Kathmandu, Nepal—connecting promising youth athletes to scholarships and international pathways.",
    primaryKeyword: "Sports Technology Nepal",
    secondaryKeywords: [
      "Football Performance Data Nepal",
      "Football Talent Scouting Nepal",
      "NextSportz Player Portfolio",
    ],
    motif: "SCOUT",
    audience: ["Ages 10–24", "All backgrounds", "Scholarships available"],
    highlights: [
      { title: "Open trials", text: "Regular scouting days across the Kathmandu valley and beyond." },
      { title: "Player portfolios", text: "Performance data, highlight video, bios and coach recommendations." },
      { title: "Pathways abroad", text: "Introductions to international tryouts, academies and study-and-play programs." },
    ],
    offeringsTitle: "Scouting by sport",
    offerings: [
      { name: "Football", description: "Positional assessment, match observation and physical testing.", meta: "Trials each season", intent: "inquiry" },
      { name: "Basketball", description: "Skill stations, athletic testing and scrimmage evaluation.", meta: "By announcement", intent: "inquiry" },
      { name: "Cricket", description: "Net sessions and match scenarios assessed by specialist coaches.", meta: "By announcement", intent: "inquiry" },
    ],
  },
  {
    slug: "arena",
    name: "Arena & Turf",
    brand: "Aurium Arena",
    group: "Build",
    kicker: "Infrastructure for the game",
    tagline: "Better pitches. More players.",
    summary:
      "From venue partnerships to turf supply and installation, we help schools, clubs and investors build sports facilities that last. Our long-term plan: a flagship Aurium Sports Center and 10 regional hubs across Nepal.",
    seoTitle:
      "Football Turf Installation & Sports Infrastructure Nepal | Aurium Arena",
    seoDescription:
      "Aurium Arena supplies and installs FIFA-standard artificial football turf, manages futsal and training venues, and develops sports infrastructure across Kathmandu and Nepal.",
    primaryKeyword: "Sports Infrastructure Nepal",
    secondaryKeywords: [
      "Football Turf Installation Kathmandu",
      "Futsal Ground Construction Nepal",
      "Aurium Arena",
    ],
    motif: "ARENA",
    audience: ["Schools", "Futsal owners", "Investors", "Municipalities"],
    highlights: [
      { title: "Turf supply & installation", text: "FIFA-quality artificial turf with professional installation and quotations for any size." },
      { title: "Venue operations", text: "Programming, tournaments, live streaming and academy sessions that keep your facility busy." },
      { title: "Aurium Sports Centers", text: "Planned hubs with pitches, futsal, gym, recovery and therapy, classrooms and athlete housing." },
    ],
    offeringsTitle: "How we can help",
    offerings: [
      { name: "Turf Quotation", description: "Artificial grass for futsal, football and multi-sport courts, supplied and installed.", meta: "Free site visit", intent: "inquiry" },
      { name: "Venue Partnership", description: "Host Aurium academy sessions, leagues and camps at your ground.", meta: "Long-term", intent: "inquiry" },
      { name: "Invest in a Center", description: "Partner with us on the flagship Aurium Sports Center and regional hubs.", meta: "Investors & DFIs", intent: "inquiry" },
    ],
  },
  {
    slug: "apparel",
    name: "Apparel & Kits",
    brand: "Aurium Apparel",
    group: "Build",
    kicker: "Wear the badge",
    tagline: "Kits designed to be worn with pride.",
    summary:
      "Custom jerseys, training wear and team kits for schools, clubs, companies and tournaments. Designed in-house, with your crest, names and numbers.",
    seoTitle:
      "Custom Football Kits & School Sportswear in Kathmandu | Aurium Apparel",
    seoDescription:
      "Order custom football jerseys, school PE uniforms, tracksuits, and tournament team kits designed in-house by Aurium Apparel in Kathmandu, Nepal.",
    primaryKeyword: "Custom Football Kits Nepal",
    secondaryKeywords: [
      "School Sportswear Kathmandu",
      "Custom Team Jerseys Nepal",
      "Aurium Apparel",
    ],
    motif: "KIT",
    audience: ["Schools", "Clubs", "Corporates", "Events"],
    highlights: [
      { title: "In-house design", text: "Our team designs kits around your colours and identity, with mockups before production." },
      { title: "Full team orders", text: "Jerseys, shorts, socks, training tops and tracksuits with names and numbers." },
      { title: "Aurium merchandise", text: "Official Aurium training wear for players, parents and supporters." },
    ],
    offeringsTitle: "Order types",
    offerings: [
      { name: "Team Kits", description: "Custom match kits for clubs, schools and tournament teams.", meta: "Min. 10 sets", intent: "inquiry" },
      { name: "School Sportswear", description: "PE uniforms and house jerseys designed for your school.", meta: "Bulk orders", intent: "inquiry" },
      { name: "Corporate & Events", description: "Branded jerseys for corporate tournaments and sports events.", meta: "Fast turnaround", intent: "inquiry" },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
