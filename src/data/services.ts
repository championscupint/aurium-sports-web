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
      "Structured, year-round training for boys and girls aged 7–16 in football, basketball and cricket. Three sessions a week built on our BUST model, with regular skill assessments and a coach who knows every child by name.",
    image: "/images/academy.jpg",
    motif: "PLAY",
    audience: ["Ages 7–16", "Boys & girls", "All levels"],
    highlights: [
      { title: "Systematic training", text: "A weekly cycle of physical, technical-tactical and game-scenario sessions so every child develops in every area." },
      { title: "Timely evaluation", text: "Skill assessments and progress reports keep players and parents clear on what's next." },
      { title: "Sports for Mental Health", text: "Reflection after sessions, wellbeing check-ins and coaches trained as mentors, not just instructors." },
      { title: "Equal pathway for girls", text: "Dedicated girls' squads with the same coaching, resources and international opportunities." },
    ],
    offeringsTitle: "Choose a sport",
    offerings: [
      { name: "Football", description: "Our flagship program, from first touch to competitive squads and international selection.", meta: "3 sessions / week", intent: "register" },
      { name: "Basketball", description: "Footwork, ball handling, shooting mechanics and team play in a positive, high-energy environment.", meta: "Ages 8–16", intent: "register" },
      { name: "Cricket", description: "Batting, bowling and fielding fundamentals with match practice and indoor cricket sessions.", meta: "Ages 8–16", intent: "register" },
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
      "We take Nepali players to the world's biggest youth tournaments and bring the experience home. Aurium squads have competed at the Dana Cup in Hjørring, Denmark, where the Aurium x Rato Bangala U14 girls reached the quarter-finals.",
    image: "/images/stadium-night.jpg",
    motif: "WORLD",
    audience: ["Ages 10–18", "Schools & academies", "Selected players"],
    highlights: [
      { title: "End-to-end delivery", text: "Registration, visas, travel, kits, accommodation, coaching staff and safeguarding, all handled." },
      { title: "Proven on the big stage", text: "Boys U12, U14 and U16 plus Nepal's first U14 girls team at a European youth tournament." },
      { title: "Beyond the trip", text: "Pathways to trials, academies and study-and-play scholarships abroad for players with elite potential." },
    ],
    offeringsTitle: "Tour destinations",
    offerings: [
      { name: "Within Nepal", description: "Football tours and friendly fixtures across Pokhara, Chitwan, Dharan and beyond.", meta: "3–5 days", intent: "inquiry" },
      { name: "South Asia", description: "Tournaments and exchange matches in India, Bhutan and Sri Lanka.", meta: "5–8 days", intent: "inquiry" },
      { name: "Asia", description: "Competitive cups in the Gulf, Thailand, Malaysia and beyond.", meta: "7–10 days", intent: "inquiry" },
      { name: "Global", description: "Dana Cup (Denmark), Gothia Cup (Sweden), Kanga Cup (Australia) and more.", meta: "10–14 days", intent: "inquiry" },
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
