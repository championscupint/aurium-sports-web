// Single source of truth for Aurium Arena (Commercial 7v7 Football & Futsal Infrastructure,
// Public Spectator Seating, and Elevated Restaurant Development Project in Kathmandu, Nepal)
// and its 6 Supporting Search Authority Pages.
// Strictly reflects the latest approved project scope — zero outdated gym/pool/spa/recovery claims,
// and zero fabricated financial returns or unapproved confidential figures.

export interface ArenaInfrastructureComponent {
  number: string;
  title: string;
  subtitle: string;
  dimensionsOrSpec: string;
  description: string;
  specifications: string[];
}

export interface ArenaRevenueStream {
  category: 'Core Operating Revenue' | 'Exploratory & Partnership Revenue';
  title: string;
  audience: string;
  description: string;
}

export interface ArenaTimelineStage {
  stage: string;
  title: string;
  statusLabel: string;
  window: string;
  description: string;
}

export interface ArenaFAQ {
  question: string;
  answer: string;
  category: 'Investment & Market' | 'Project & Infrastructure' | 'Partnership & Enquiry';
}

export interface ArenaSupportingGuide {
  slug: string;
  code: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  kicker: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  faqs: { question: string; answer: string }[];
}

export const auriumArenaData = {
  brandName: 'Aurium Arena',
  projectCode: 'Aurium Arena (Flagship Project 007)',
  parentBrand: 'Aurium Sports',
  operatingEntity: 'Aurium Academy Pvt. Ltd.',
  verifiedLocation: {
    neighborhood: 'Pasikot, Budhanilkantha',
    city: 'Kathmandu',
    country: 'Nepal',
    landAreaRopani: '4-1-1-0.9 (Ropani-Aana-Paisa-Daam)',
    landAreaSqFt: '22,352 sq.ft.',
    roadAccess:
      'Fronting a 13-ft wide South/East primary access road and a 20-ft wide North service & hospitality road',
    statusNote:
      'In architectural, engineering, and pre-construction development phase. Site boundary geometry (calibrated at 22,352 sq.ft.) is scheduled for final total-station cadastral and geotechnical verification prior to civil mobilization.',
  },
  seo: {
    title:
      'Aurium Arena | Sports Infrastructure & Futsal Investment Opportunity in Nepal',
    description:
      'Explore Aurium Arena, a commercial football and futsal infrastructure development project in Nepal, combining a 7v7 turf, spectator seating and restaurant facilities. Discover the project and partnership opportunities.',
    h1: 'Aurium Arena — Building the Future of Commercial Football and Futsal Infrastructure in Nepal',
  },
  approvedInfrastructure: [
    {
      number: '01',
      title: '7v7 Football & Futsal Artificial Turf Arena',
      subtitle: 'Commercial-Grade All-Weather Pitch',
      dimensionsOrSpec: '130 ft × 95 ft Playing Area (12,350 sq.ft.) inside 133 ft × 98 ft Hall',
      description:
        'A purpose-engineered 7-a-side football and futsal arena designed for high-utilization daily bookings, youth academy training, school competitions, and corporate leagues.',
      specifications: [
        '50mm FIFA Quality / Quality Pro equivalent monofilament polyethylene (PE) synthetic turf (11,000–13,000 Dtex)',
        'Washed kiln-dried silica sand and SBR/EPDM rubber granule infill over a 150mm compacted crushed-aggregate sub-base',
        '300mm × 300mm precast concrete perimeter monsoon slot drains and perforated HDPE sub-surface drainage',
        'Two 16 ft × 7 ft powder-coated aluminum 7v7 goals, covered South-touchline player dugouts, and 20-ft high tensioned ball-stop netting',
      ],
    },
    {
      number: '02',
      title: 'Public Spectator Seating & Grandstands',
      subtitle: 'Stadium Atmosphere for Community & Corporate Matches',
      dimensionsOrSpec: 'North 3-Tier Stand (104 ft × 12 ft) + East 3-Tier Stand (64 ft × 9 ft)',
      description:
        'Unlike conventional fenced futsal courts in Nepal that lack spectator comfort, Aurium Arena integrates dedicated multi-tier spectator grandstands designed for tournament crowds, parents, and corporate supporters.',
      specifications: [
        'Planned ~260 total spectator capacity (~165 seats in the North Grandstand and ~95 seats in the East Stand, subject to final structural layout verification)',
        '1.5-ft ergonomic riser steps with treated timber-slat seating benches',
        '3.5-ft laminated safety glass and powder-coated steel front guardrails for unobstructed pitch views',
        '4-ft wide non-slip access staircases and clear pedestrian circulation from the East arrival plaza',
      ],
    },
    {
      number: '03',
      title: 'Elevated Glass-Fronted Restaurant & Viewing Deck',
      subtitle: 'Integrated Sports Hospitality & Matchday Dining',
      dimensionsOrSpec: '+4.5 ft Elevated Podium • 1,848 sq.ft. Dining Hall + 800 sq.ft. Viewing Deck',
      description:
        'An elevated restaurant and café positioned along the North/Northeast zone at +4.5 ft above pitch level, looking directly over the North grandstand onto the 7v7 turf.',
      specifications: [
        '66 ft × 28 ft (1,848 sq.ft.) glass-fronted dining hall (~54 indoor seats) with 10mm–12mm toughened safety glazing',
        '80 ft × 10 ft (800 sq.ft.) covered timber outdoor viewing deck (~28 seats) for live match viewing',
        '32 ft × 30 ft (960 sq.ft.) full commercial kitchen, cold/dry storage, dishwash zone, and dedicated service entrance from the 20-ft North road',
        'Designed to serve matchday players, academy parents, tournament spectators, and neighborhood diners',
      ],
    },
    {
      number: '04',
      title: 'Roof-Mounted LED Floodlighting, Broadcast & Support Facilities',
      subtitle: 'Digital Content & Evening Match Operations',
      dimensionsOrSpec: '20.5 ft Truss-Mounted Asymmetric LEDs • 6-Camera Pre-Wired Architecture',
      description:
        'Engineered for evening peak-hour utilization, live tournament streaming, and digital match highlights without tall exterior light poles obstructing camera sightlines.',
      specifications: [
        'Roof-mounted 200W asymmetric stadium LED floodlights (5000K, CRI > 80) mounted at 20.5 ft along the steel truss chords',
        'Cat6A/Fiber and PoE++ pre-wiring for a 6-camera broadcast & AI ball-tracking layout with a dedicated technical control room',
        'Dedicated player changing rooms, showers, and washrooms in the Northwest zone, separate from restaurant guest washrooms',
        '3-phase electrical distribution, silent backup power generation/UPS for lighting and broadcast, and 2× 4-ft emergency egress gates',
      ],
    },
  ] as ArenaInfrastructureComponent[],
  revenueStreams: [
    {
      category: 'Core Operating Revenue',
      title: '7v7 Pitch Bookings & Hourly Ground Rentals',
      audience: 'Recreational Groups, Local Clubs & Weekly Squads',
      description:
        'Morning, evening peak-hour, and weekend hourly turf rentals for 7-a-side football and futsal groups across northern and central Kathmandu.',
    },
    {
      category: 'Core Operating Revenue',
      title: 'League, Cup & Tournament Hosting',
      audience: 'Schools, Colleges, Youth Academies & Open Clubs',
      description:
        'Hosting seasonal youth leagues (such as the Aurium Mini League), inter-school championships, and weekend knockout tournaments supported by spectator seating and live statistics.',
    },
    {
      category: 'Core Operating Revenue',
      title: 'Corporate Sports Events & Institutional Leagues',
      audience: 'Banks, Financial Institutions, Tech Firms & Corporates',
      description:
        'Turnkey venue hosting for corporate futsal/football tournaments, employee wellness matchdays, and institutional championships with integrated catering.',
    },
    {
      category: 'Core Operating Revenue',
      title: 'Academy & School Training Programmes',
      audience: 'The Aurium Academy & Partner Schools',
      description:
        'Recurring off-peak and after-school utilization anchored by Aurium Sports youth training cohorts (Ages 3–16), goalkeeper clinics, and holiday training camps.',
    },
    {
      category: 'Core Operating Revenue',
      title: 'Restaurant, Café & Matchday Hospitality',
      audience: 'Players, Parents, Spectators & Local Community',
      description:
        'Food, beverage, coffee, team catering, and matchday dining across the 54-seat indoor glass dining hall and 28-seat elevated pitch-viewing deck.',
    },
    {
      category: 'Exploratory & Partnership Revenue',
      title: 'Venue Naming Rights, Perimeter & Broadcast Sponsorship',
      audience: 'Corporate Brands, Kit Sponsors & Media Partners',
      description:
        'Perimeter pitch boards, grandstand fascia branding, livestream overlay sponsorships, and official partner activations.',
    },
  ] as ArenaRevenueStream[],
  collaborationCategories: [
    {
      title: 'Capital & Equity Investment',
      badge: 'Subject to Approved Disclosure',
      description:
        'Structured private capital participation in the Aurium Arena development project. Detailed capital expenditure breakdowns, scenario models, and equity structures are shared directly with qualified investors under owner-approved disclosure.',
    },
    {
      title: 'Strategic & Institutional Investment',
      badge: 'Long-Term Infrastructure Alignment',
      description:
        'Collaboration with institutional investors, family offices, and diaspora business groups seeking exposure to commercial sports and hospitality infrastructure in Nepal.',
    },
    {
      title: 'Restaurant & Hospitality Operating Partnership',
      badge: 'F&B & Matchday Dining',
      description:
        'Partnership opportunities for established restaurant operators, specialty café brands, or culinary entrepreneurs to operate or co-develop the 2,648 sq.ft. elevated dining hall, viewing deck, and 960 sq.ft. commercial kitchen.',
    },
    {
      title: 'Corporate Sponsorship & Naming Rights',
      badge: 'Brand Visibility & CSR',
      description:
        'Multi-year arena naming rights, grandstand branding, broadcast camera sponsorship, and corporate tournament hosting packages.',
    },
    {
      title: 'Infrastructure Supply & Technical Partnership',
      badge: 'Engineering, Turf & Lighting',
      description:
        'Vendor and technical partnerships for FIFA-standard synthetic turf systems, structural steel fabrication, asymmetric LED sports floodlighting, and broadcast hardware.',
    },
    {
      title: 'Land & Future Venue Development Partnership',
      badge: 'Future Expansion Exploration',
      description:
        'Exploratory discussions with landowners and commercial real estate partners in Kathmandu Valley and major Nepali urban centers for future commercial sports venue development.',
    },
  ],
  timeline: [
    {
      stage: 'STAGE 01',
      title: 'Concept, Land Geometry & Architectural Planning',
      statusLabel: 'Completed',
      window: 'Pre-Construction Phase',
      description:
        'Site boundary calibration (22,352 sq.ft. in Pasikot, Budhanilkantha), 130 ft × 95 ft 7v7 pitch layout, ~260-seat North/East grandstand design, and +4.5 ft elevated glass restaurant architectural concept.',
    },
    {
      stage: 'STAGE 02',
      title: 'Engineering Verification, Permits & Contractor Selection',
      statusLabel: 'Active Phase',
      window: 'Pre-Mobilization',
      description:
        'Total-station cadastral survey, geotechnical soil bearing verification, Nepal National Building Code (NBC 105) structural steel certification, final lease registration, and binding contractor BOQ execution.',
    },
    {
      stage: 'STAGE 03',
      title: 'Civil Works, Steel Superstructure & Turf Installation',
      statusLabel: 'Planned Build Window',
      window: 'Target Months 1–3 (90-Day Build Target)',
      description:
        'Sub-grade compaction, perimeter monsoon drainage, steel truss erection, 50mm synthetic turf & infill installation, grandstand seating fabrication, and elevated restaurant construction.',
    },
    {
      stage: 'STAGE 04',
      title: 'Lighting, Broadcast & Kitchen Commissioning',
      statusLabel: 'Planned Commissioning',
      window: 'End of Month 3',
      description:
        'Aiming and photometric testing of roof-mounted LED floodlights, 6-camera PoE++ broadcast network testing, commercial kitchen equipment commissioning, and safety inspection.',
    },
    {
      stage: 'STAGE 05',
      title: 'Commercial & Operational Launch',
      statusLabel: 'Target Launch',
      window: 'Month 4 Onwards',
      description:
        'Opening of 7v7 pitch bookings, Aurium Academy training cohorts, corporate and school tournament hosting, and full restaurant & viewing deck operations.',
    },
  ] as ArenaTimelineStage[],
  investorFaqs: [
    {
      category: 'Investment & Market',
      question: 'What are the investment opportunities in Nepal within the sports sector?',
      answer:
        'As urban populations grow and organized youth, school, and corporate sports expand across Nepal, commercial sports infrastructure—such as all-weather 7v7 football and futsal venues integrated with spectator facilities and food-and-beverage hospitality—has emerged as a tangible private-sector business category alongside traditional real estate, hospitality, and education investments.',
    },
    {
      category: 'Investment & Market',
      question: 'What is sports infrastructure investment?',
      answer:
        'Sports infrastructure investment involves financing, developing, and commercially operating physical sporting venues—such as synthetic turf football pitches, futsal arenas, spectator grandstands, floodlit event venues, and integrated sports hospitality spaces—that generate recurring operating revenue from rentals, training programmes, tournaments, sponsorships, and food service.',
    },
    {
      category: 'Investment & Market',
      question: 'Is investing in sports facilities a viable business opportunity in Nepal?',
      answer:
        'Yes, provided the venue is built on sound unit economics, durable civil engineering, and diversified utilization. Single-purpose courts often rely only on evening peak hours, whereas multi-stream venues that combine academy daytime training, school leagues, weekend corporate tournaments, spectator seating, and a full-service restaurant can capture demand across multiple customer segments.',
    },
    {
      category: 'Project & Infrastructure',
      question: 'What is Aurium Arena and what is the Aurium Arena development project?',
      answer:
        'Aurium Arena is the commercial sports infrastructure and venue development arm of Aurium Sports (operated by Aurium Academy Pvt. Ltd.). Its flagship development project—Aurium Arena 007 in Pasikot, Budhanilkantha, Kathmandu—is a purpose-designed 7v7 artificial turf football and futsal venue featuring public spectator grandstands, an elevated glass-fronted restaurant and viewing deck, and integrated LED floodlighting and broadcast infrastructure.',
    },
    {
      category: 'Project & Infrastructure',
      question: 'What facilities are planned at Aurium Arena?',
      answer:
        'The approved current scope of Aurium Arena includes four core components on a 22,352 sq.ft. site: (1) a 130 ft × 95 ft (12,350 sq.ft.) 7v7 artificial turf football/futsal pitch inside a 133 ft × 98 ft hall, (2) North and East 3-tier public spectator grandstands (~260 planned seats), (3) an elevated (+4.5 ft) glass-fronted restaurant (1,848 sq.ft. dining hall, 800 sq.ft. viewing deck, and 960 sq.ft. commercial kitchen), and (4) supporting player changing rooms, roof-mounted LED floodlights, and 6-camera broadcast pre-wiring. It does not include swimming pools, gyms, spas, saunas, or recovery centres.',
    },
    {
      category: 'Project & Infrastructure',
      question: 'Where is the Aurium Arena project located?',
      answer:
        'The flagship Aurium Arena 007 project site is located in Pasikot, Budhanilkantha Municipality, Kathmandu, Nepal, spanning 4-1-1-0.9 Ropani (approximately 22,352 sq.ft.) with dual road frontage (a 13-ft South/East primary access road and a 20-ft North service road).',
    },
    {
      category: 'Project & Infrastructure',
      question: 'What is the project’s current development status?',
      answer:
        'Aurium Arena is currently in the pre-construction, architectural/engineering verification, and investor/partner alignment phase. Master architectural plans, 7v7 pitch geometry, spectator stand layouts, restaurant floor plans, lighting schedules, and cost breakdown models have been prepared, with final total-station survey, geotechnical testing, and contractor execution scheduled prior to the target 90-day construction window.',
    },
    {
      category: 'Project & Infrastructure',
      question: 'What is a 7v7 futsal and football turf facility?',
      answer:
        'A 7v7 facility features a mid-sized synthetic turf pitch (at Aurium Arena, 130 ft × 95 ft / 12,350 sq.ft.) larger than a standard 5-a-side futsal court. It accommodates 7-a-side recreational and corporate matches, youth academy 7v7 and 9v9 developmental training, school tournaments, and high-tempo futsal competitions under one structure.',
    },
    {
      category: 'Project & Infrastructure',
      question: 'What does it take to develop a commercial futsal and 7v7 football ground in Nepal?',
      answer:
        'Developing a durable commercial turf venue in Nepal requires an accessible land parcel (~15,000–25,000+ sq.ft. for a 7v7 arena with seating and hospitality), engineered sub-base compaction (150mm crushed aggregate + 50mm blinding), perimeter monsoon slot drainage, a structural steel truss hall, 50mm FIFA-grade monofilament PE turf with silica sand and rubber infill, asymmetric LED floodlighting, and compliant fire/life-safety egress.',
    },
    {
      category: 'Investment & Market',
      question: 'How does a commercial futsal and football ground generate revenue?',
      answer:
        'A commercial venue like Aurium Arena is structured around multiple revenue streams: (1) hourly pitch bookings during morning, evening, and weekend slots, (2) daytime and after-school youth academy and school training programmes, (3) league, inter-school, and corporate tournament hosting fees, (4) restaurant, café, and matchday catering sales from players, parents, and spectators, and (5) venue sponsorship and perimeter branding.',
    },
    {
      category: 'Investment & Market',
      question: 'What are the costs involved in developing a commercial futsal and 7v7 facility?',
      answer:
        'Development costs depend on pitch dimensions, structural steel roofing, turf grade, spectator seating, and restaurant/kitchen integration. For Aurium Arena 007 in Pasikot, a detailed Bill of Quantities (BOQ) and financial model have been prepared for the essential 7v7 turf, spectator seating, and restaurant scope. Qualified investors can request the official Project Cost Breakdown and Financial Model directly through our Investor Enquiry Desk.',
    },
    {
      category: 'Investment & Market',
      question: 'What are the business opportunities in football infrastructure in Nepal?',
      answer:
        'Business opportunities span venue development and co-ownership, sports hospitality and restaurant operations, corporate league management, school ECA venue partnerships, artificial turf and LED lighting supply, and digital match broadcasting.',
    },
    {
      category: 'Partnership & Enquiry',
      question: 'How can I enquire about investing in Aurium Arena?',
      answer:
        'Prospective individual and institutional investors can submit an enquiry using the Investor & Strategic Partnership Form on https://www.auriumsports.com/aurium-arena, or contact the Aurium Sports leadership desk directly via WhatsApp at +977 9828978044 or email at auriumsports@gmail.com to request the approved investment proposal and schedule a briefing.',
    },
    {
      category: 'Partnership & Enquiry',
      question: 'How can a company or hospitality brand partner with Aurium Arena?',
      answer:
        'Companies and operators can partner with Aurium Arena across several tracks: strategic capital partnership, restaurant and café operating partnership, corporate naming rights and perimeter sponsorship, corporate tournament hosting, or technical equipment supply. Select your area of interest in the enquiry form below to connect with our team.',
    },
    {
      category: 'Partnership & Enquiry',
      question: 'How does Aurium Arena connect with Aurium Sports and The Aurium Academy?',
      answer:
        'Aurium Arena is developed by Aurium Sports (Aurium Academy Pvt. Ltd.), which already operates The Aurium Academy (350+ active youth players across Kathmandu Valley), school sports programmes, the Aurium Mini League, the Aurium International Cup, and the AIC Titans Cup—providing immediate programmatic demand, coaching staff, and tournament traffic for the venue.',
    },
    {
      category: 'Partnership & Enquiry',
      question: 'Can international or diaspora investors enquire about Aurium Arena?',
      answer:
        'Yes. We welcome enquiries from Non-Resident Nepalis (NRNs), international sports infrastructure partners, and foreign investors. All cross-border investment structures, licensing, and regulatory steps are subject to applicable Nepalese laws (such as FITTA and NRB regulations) and independent legal/tax verification.',
    },
  ] as ArenaFAQ[],
  supportingGuides: [
    {
      slug: 'sports-investment-nepal',
      code: 'GUIDE A • SECTOR OVERVIEW',
      title: 'Sports Investment in Nepal: Infrastructure & Commercial Opportunities',
      seoTitle:
        'Sports Investment in Nepal | Sports Infrastructure & Business Opportunities | Aurium Arena',
      seoDescription:
        'An evidence-based guide to sports investment in Nepal: exploring commercial sports infrastructure, 7v7 football and futsal venues, public-private trends, and the Aurium Arena project in Kathmandu.',
      h1: 'Sports Investment in Nepal: Commercial Infrastructure & Business Opportunities',
      kicker: 'Sports Investment & Infrastructure Sector Guide',
      primaryKeyword: 'Sports Investment in Nepal',
      secondaryKeywords: [
        'Sports Investment Opportunities Nepal',
        'Sports Infrastructure Investment Nepal',
        'Sports Business Opportunities Nepal',
        'Investment Opportunities in Nepal',
      ],
      summary:
        'Explore why commercial sports infrastructure—led by organized football, futsal, corporate tournaments, and integrated sports hospitality—is emerging as a structured private-sector investment category in Nepal.',
      sections: [
        {
          heading: '1. The Shift Toward Commercial Sports Infrastructure in Nepal',
          paragraphs: [
            'For decades, sports facilities in Nepal were viewed almost exclusively as public utilities or informal neighborhood grounds. Over the past decade, however, rapid urbanization in the Kathmandu Valley and provincial cities, shrinking public open spaces, and rising youth and corporate participation in organized football and futsal have created sustained demand for professionally managed commercial sports venues.',
            'Alongside growing national attention on domestic leagues and grassroot youth academies, private-sector investors and entrepreneurs are increasingly evaluating sports infrastructure not merely as recreational hobbies, but as cash-flowing commercial real estate and hospitality assets.',
          ],
          bullets: [
            'Urban demographic demand: A young urban population seeking safe, floodlit, all-weather evening and weekend sporting venues.',
            'Institutional & school outsourcing: Private schools and colleges partnering with dedicated turf venues for ECA coaching and inter-school tournaments.',
            'Corporate employee engagement: Banks, financial institutions, tech companies, and corporate houses organizing annual futsal and 7v7 football leagues.',
            'Hospitality integration: Pairing spectator-friendly sports venues with full-service restaurants and viewing decks to increase dwell time and per-visitor spend.',
          ],
        },
        {
          heading: '2. Why Single-Court Venues Struggle While Integrated Arenas Thrive',
          paragraphs: [
            'A key lesson from the first wave of futsal courts in Nepal is that standalone, low-spec pitches without spectator seating, proper monsoon drainage, or quality food-and-beverage infrastructure suffer from narrow peak-hour dependency (typically 6:00 AM–8:00 AM and 5:00 PM–8:00 PM).',
            'Second-generation sports infrastructure projects—such as Aurium Arena in Pasikot, Budhanilkantha, Kathmandu—address this structural limitation by combining a larger 7v7 artificial turf pitch (130 ft × 95 ft) with ~260 public spectator seats, an elevated glass-fronted restaurant and viewing deck, and an established youth academy and tournament operator (Aurium Sports) that activates daytime, after-school, and weekend slots.',
          ],
        },
        {
          heading: '3. Key Evaluation Criteria for Prospective Investors in Nepal',
          paragraphs: [
            'Whether evaluating a commercial sports facility or broader business investment opportunities in Nepal, disciplined investors examine five foundational pillars before committing capital:',
          ],
          bullets: [
            'Site accessibility & geometry: Adequate land area (~20,000+ sq.ft. for 7v7 with spectator and restaurant zones) and clear road frontage.',
            'Civil & drainage engineering: Engineered sub-base compaction and monsoon slot drainage to ensure 365-day all-weather playability.',
            'Programmatic demand engine: Built-in academy cohorts, school partnerships, and recurring leagues rather than relying solely on walk-in bookings.',
            'Diversified revenue mix: Combining turf rentals, tournament hosting, F&B hospitality, and corporate sponsorships.',
            'Transparent governance & legal due diligence: Verified land lease terms, municipal building permits, and realistic multi-scenario financial modeling.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What makes sports infrastructure an attractive investment category in Nepal?',
          answer:
            'Commercial sports infrastructure combines recurring venue utilization (hourly bookings, youth academies, school programmes, and corporate leagues) with food-and-beverage hospitality and brand sponsorship, serving a real urban need for safe, all-weather recreational spaces.',
        },
        {
          question: 'How does Aurium Arena fit into Nepal’s sports investment landscape?',
          answer:
            'Aurium Arena (Flagship Project 007 in Pasikot, Kathmandu) is a commercial 7v7 football/futsal turf, ~260-seat spectator grandstand, and elevated restaurant project backed by Aurium Sports’ active ecosystem of youth academies, school partnerships, and tournaments.',
        },
      ],
    },
    {
      slug: 'futsal-ground-investment-nepal',
      code: 'GUIDE B • FUTSAL ECONOMICS',
      title: 'Futsal Ground Investment in Nepal: Commercial Feasibility & Revenue Models',
      seoTitle:
        'Futsal Ground Investment in Nepal | Futsal Business & Facility Guide | Aurium Arena',
      seoDescription:
        'Understand the commercial considerations of futsal ground investment and 7v7 turf business in Nepal: site requirements, construction standards, revenue drivers, and hospitality integration.',
      h1: 'Futsal Ground Investment in Nepal: Commercial Feasibility & Operating Model',
      kicker: 'Futsal & 7v7 Turf Investment Guide',
      primaryKeyword: 'Futsal Ground Investment Nepal',
      secondaryKeywords: [
        'Futsal Business in Nepal',
        'Futsal Facility Investment Nepal',
        'Futsal Ground Business Nepal',
        '7v7 Football Ground Nepal',
      ],
      summary:
        'A practical breakdown for investors and entrepreneurs evaluating futsal ground investment and 7v7 commercial turf operations in Kathmandu and across Nepal.',
      sections: [
        {
          heading: '1. Evolution of the Futsal Business in Nepal: From 5v5 Cages to 7v7 Arenas',
          paragraphs: [
            'Standard 5-a-side futsal courts helped popularize small-sided football across Kathmandu, Lalitpur, Bhaktapur, and Pokhara. However, as player expectations, youth academies, and corporate tournaments have matured, demand has shifted toward larger 7-a-side (7v7) commercial arenas that offer proper run-off clearances, spectator grandstands, and professional lighting.',
            'At Aurium Arena (Pasikot, Kathmandu), the pitch is engineered to a 130 ft × 95 ft (12,350 sq.ft.) 7v7 playing area inside a 133 ft × 98 ft structure—allowing both high-intensity futsal/7-a-side adult leagues and structured youth academy developmental formats.',
          ],
        },
        {
          heading: '2. Core Revenue Drivers of a Commercial Futsal & 7v7 Venue',
          paragraphs: [
            'A well-structured commercial futsal and 7v7 facility generates revenue across complementary daily and seasonal windows:',
          ],
          bullets: [
            'Peak-hour recreational bookings (Early mornings, weekday evenings, and Saturdays).',
            'Daytime & afternoon academy cohorts (Youth training programmes for Ages 3–16 and school ECA blocks that utilize otherwise idle daytime hours).',
            'Weekend tournaments & corporate championships (Entry fees, venue hire, and broadcast packages).',
            'Elevated restaurant & viewing deck sales (Coffee, meals, hydration, and team dining from players, parents, and ~260 grandstand spectators).',
            'Perimeter & digital sponsorship (Brand boards, tournament naming rights, and livestream graphic overlays).',
          ],
        },
        {
          heading: '3. Operational Risks and How Professional Venues Mitigate Them',
          paragraphs: [
            'Prospective futsal investors in Nepal should carefully evaluate three common operational risks: (1) lease tenure and rent escalation terms, (2) monsoon waterlogging and premature turf wear from poor sub-base construction, and (3) low off-peak utilization. Partnering with an established football development organization like Aurium Sports directly mitigates off-peak vacancy by anchoring the pitch with year-round academy and tournament programming.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Why choose a 7v7 turf format over a small 5v5 futsal court?',
          answer:
            'A 7v7 pitch (such as Aurium Arena’s 130 ft × 95 ft playing surface) commands higher group booking value, supports official youth academy developmental formats, and hosts major school and corporate tournaments that outgrow tight 5v5 cages.',
        },
        {
          question: 'Can investors partner in Aurium Arena’s 7v7 futsal and restaurant project?',
          answer:
            'Yes. Qualified investors and hospitality operators can submit an enquiry on the main Aurium Arena page to review the project scope, cost breakdown, and partnership structures.',
        },
      ],
    },
    {
      slug: 'football-turf-construction-nepal',
      code: 'GUIDE C • ENGINEERING & TURF SPECS',
      title: 'Football Turf Construction & Sports Infrastructure Development in Nepal',
      seoTitle:
        'Football Turf Construction Nepal | 7v7 Artificial Grass & Civil Engineering | Aurium Arena',
      seoDescription:
        'Technical guide to football turf construction and 7v7 sports facility engineering in Nepal: sub-base compaction, monsoon drainage, 50mm FIFA-grade PE turf, roof-mounted LED floodlighting, and camera systems.',
      h1: 'Football Turf Construction and 7v7 Sports Infrastructure Engineering in Nepal',
      kicker: 'Technical & Civil Engineering Standards',
      primaryKeyword: 'Football Turf Construction Nepal',
      secondaryKeywords: [
        'Football Ground Construction Nepal',
        'Artificial Grass Football Ground Nepal',
        'Synthetic Football Turf Nepal',
        'Football Turf Investment Nepal',
      ],
      summary:
        'Inside the civil, structural, synthetic turf, lighting, and broadcast engineering standards used in the Aurium Arena 007 project in Pasikot, Kathmandu.',
      sections: [
        {
          heading: '1. Sub-Base Civil Engineering & Monsoon Drainage',
          paragraphs: [
            'The lifespan and playability of any artificial grass football ground in Nepal depend first on what lies beneath the carpet. Heavy monsoon rainfall in the Kathmandu Valley quickly destroys poorly drained pitches.',
            'In the Aurium Arena 007 engineering concept, ground preparation begins with stripping 200mm of topsoil, proof-rolling and compacting the subgrade to 95% Modified Proctor density, laying a 150mm graded crushed-stone sub-base topped with a 50mm porous blinding layer crowned at 0.6%, and routing runoff into 300mm × 300mm precast concrete perimeter slot drains.',
          ],
        },
        {
          heading: '2. 50mm Monofilament Synthetic Turf & Infill Specification',
          paragraphs: [
            'For commercial 7v7 football and youth academy safety, Aurium Arena specifies a 50mm FIFA Quality / Quality Pro equivalent monofilament polyethylene (PE) turf system (11,000–13,000 Dtex, ~14,500–16,000 stitches/m²) with dual-layer backing, anchored by washed kiln-dried silica sand and shock-absorbing SBR/EPDM rubber granule infill.',
          ],
        },
        {
          heading: '3. Roof-Mounted Asymmetric LED Floodlighting & 6-Camera Broadcast Pre-Wiring',
          paragraphs: [
            'Rather than erecting tall exterior poles that create glare and obstruct cameras, Aurium Arena mounts 200W asymmetric stadium LED floodlights (5000K, CRI > 80) directly along the steel truss chords at 20.5 ft height. The perimeter uses 3 ft 2 in padded steel kickboards and 17 ft tensioned black nylon netting so that all 6 pre-wired PoE++ broadcast and AI camera positions enjoy 100% unobstructed sightlines.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Why is sub-base drainage critical for football turf construction in Nepal?',
          answer:
            'Without compacted crushed-stone sub-bases and perimeter concrete slot drains, monsoon rainwater causes uneven settlement, waterlogging, and rapid backing rot in synthetic turf carpets.',
        },
      ],
    },
    {
      slug: 'commercial-sports-facility-business-nepal',
      code: 'GUIDE D • VENUE & HOSPITALITY MODEL',
      title: 'Commercial Sports Facility Business in Nepal: Sport, Seating & Hospitality',
      seoTitle:
        'Commercial Sports Facility Business in Nepal | Venue & Restaurant Model | Aurium Arena',
      seoDescription:
        'How modern commercial sports facilities in Nepal combine 7v7 football turf, ~260 public spectator grandstands, and an elevated glass-fronted restaurant to build a sustainable venue business.',
      h1: 'Commercial Sports Facility Business in Nepal: Combining Turf, Spectator Stands & Dining',
      kicker: 'Commercial Venue & Hospitality Architecture',
      primaryKeyword: 'Sports Facility Business in Nepal',
      secondaryKeywords: [
        'Commercial Sports Facility Nepal',
        'Sports Venue Business Nepal',
        'Sports Arena Investment Nepal',
        'Sports Restaurant Business Nepal',
      ],
      summary:
        'How integrating public spectator grandstands (~260 seats) and an elevated glass-fronted restaurant transforms a sports pitch into a community and corporate destination.',
      sections: [
        {
          heading: '1. The Missing Element in Nepali Sports Venues: Spectator & Hospitality Design',
          paragraphs: [
            'When schools, banks, or youth academies host football tournaments in Kathmandu, parents and supporters often have nowhere comfortable to sit, dine, or watch the match. By designing the venue around the spectator and hospitality experience as carefully as the playing surface, a commercial sports facility unlocks a significantly broader customer base.',
          ],
        },
        {
          heading: '2. Inside Aurium Arena’s Grandstand & Elevated Restaurant Architecture',
          paragraphs: [
            'Aurium Arena 007 integrates two 3-tier grandstands—a 104 ft × 12 ft North Stand (~165 seats) and a 64 ft × 9 ft East Stand (~95 seats)—with 1.5-ft riser steps, timber-slat benches, and 3.5-ft laminated glass front guardrails.',
            'Directly overlooking the North Grandstand at a +4.5 ft elevation sits a 66 ft × 28 ft (1,848 sq.ft.) glass-fronted restaurant dining hall (~54 seats), an 80 ft × 10 ft (800 sq.ft.) covered timber viewing deck (~28 seats), and a 32 ft × 30 ft (960 sq.ft.) commercial kitchen served directly from the 20-ft North road.',
          ],
        },
      ],
      faqs: [
        {
          question: 'How does an integrated restaurant improve a sports facility business model?',
          answer:
            'An elevated pitch-view restaurant captures daily spending from academy parents waiting during 90-minute training sessions, evening recreational teams dining after matches, and tournament spectators on weekends.',
        },
      ],
    },
    {
      slug: 'invest-in-sports-business-nepal',
      code: 'GUIDE E • PARTNERSHIP PATHWAYS',
      title: 'Invest in Sports Business in Nepal: Strategic Partnerships & Co-Ownership',
      seoTitle:
        'Invest in Sports Business in Nepal | Strategic Partnerships & Joint Ventures | Aurium Arena',
      seoDescription:
        'Explore how individual investors, institutions, hospitality operators, and corporate brands can partner or invest in Aurium Arena and commercial sports infrastructure in Nepal.',
      h1: 'Invest in Sports Business in Nepal: Partnership & Investment Pathways',
      kicker: 'Investor & Partner Collaboration Guide',
      primaryKeyword: 'Invest in Sports Business Nepal',
      secondaryKeywords: [
        'Sports Business Partnership Nepal',
        'Joint Venture Sports Infrastructure Nepal',
        'Investment Partnership Nepal',
        'Sports Investment Proposal Nepal',
      ],
      summary:
        'A transparent guide to collaboration, capital participation, restaurant operation, and corporate sponsorship pathways with Aurium Arena.',
      sections: [
        {
          heading: '1. Structured Collaboration Models for Investors and Operators',
          paragraphs: [
            'Aurium Arena welcomes discussions with individual investors, corporate groups, hospitality operators, and strategic partners across clearly defined collaboration tracks:',
          ],
          bullets: [
            'Capital & Strategic Equity Participation: Direct investment in the project development vehicle, subject to owner-approved terms and legal documentation.',
            'Restaurant & F&B Operating Partnership: Operating or co-developing the +4.5 ft elevated glass restaurant, viewing deck, and commercial kitchen.',
            'Corporate Naming Rights & Arena Sponsorship: High-visibility branding across grandstands, pitch perimeters, and 6-camera broadcast streams.',
            'Technical & Infrastructure Supply Partnerships: Collaboration on FIFA-standard turf, structural steel, and LED sports lighting.',
          ],
        },
        {
          heading: '2. Our Commitment to Transparent Due Diligence',
          paragraphs: [
            'Aurium Sports does not advertise exaggerated or guaranteed financial returns on public web pages. Instead, qualified prospective partners who submit an enquiry receive our structured Investment Proposal, itemized Project Cost Breakdown (BOQ), 3-scenario financial model (Conservative, Base, and Optimistic), and a transparent Validation Register identifying all pre-mobilization legal and engineering checkpoints.',
          ],
        },
      ],
      faqs: [
        {
          question: 'How do I request the official Aurium Arena investment proposal and BOQ?',
          answer:
            'Complete the Investor & Strategic Partnership Enquiry Form on the Aurium Arena page or contact our leadership desk directly via WhatsApp at +977 9828978044 or email at auriumsports@gmail.com.',
        },
      ],
    },
    {
      slug: 'about-project',
      code: 'GUIDE F • PROJECT PROFILE',
      title: 'About Aurium Arena: Flagship 7v7 Turf, Seating & Restaurant Project Profile',
      seoTitle:
        'About Aurium Arena | Pasikot Kathmandu 7v7 Football & Restaurant Project | Aurium Sports',
      seoDescription:
        'Official project profile of Aurium Arena (Project 007 in Pasikot, Budhanilkantha, Kathmandu): 22,352 sq.ft. site geometry, 7v7 turf, ~260 spectator seats, elevated restaurant, and Aurium Sports ecosystem backing.',
      h1: 'About Aurium Arena — Project Profile, Scope & Organisational Backing',
      kicker: 'Official Project Dossier Summary',
      primaryKeyword: 'Aurium Arena',
      secondaryKeywords: [
        'Aurium Arena Kathmandu',
        'Aurium Arena Pasikot Budhanilkantha',
        'Aurium Sports Infrastructure Project',
      ],
      summary:
        'Complete architectural, operational, and organisational profile of the Aurium Arena development project in Pasikot, Budhanilkantha, Kathmandu.',
      sections: [
        {
          heading: '1. Verified Project Fact Sheet (Aurium Arena 007)',
          paragraphs: [
            'Aurium Arena is a commercial sports and hospitality infrastructure project developed by Aurium Sports (Aurium Academy Pvt. Ltd.) in Pasikot, Budhanilkantha, Kathmandu, Nepal.',
          ],
          bullets: [
            'Location: Pasikot, Budhanilkantha Municipality, Kathmandu, Nepal.',
            'Site Area: 4-1-1-0.9 Ropani-Aana-Paisa-Daam (~22,352 sq.ft. calibrated 6-sided parcel).',
            'Road Access: 13-ft wide South and East primary roads + 20-ft wide North service and hospitality road.',
            'Playing Pitch: 130 ft × 95 ft (12,350 sq.ft.) 7v7 artificial turf pitch inside a 133 ft × 98 ft steel-truss hall.',
            'Spectator Seating: North 3-Tier Grandstand (~165 seats) + East 3-Tier Stand (~95 seats) = ~260 total planned seats.',
            'Hospitality Zone: +4.5 ft elevated glass-fronted restaurant (1,848 sq.ft. dining hall, 800 sq.ft. viewing deck, 960 sq.ft. commercial kitchen).',
            'Lighting & Broadcast: Roof-mounted 200W asymmetric LED floodlights at 20.5 ft + 6-camera PoE++ broadcast pre-wiring.',
            'Focused Scope Rule: Excludes swimming pools, gyms, spas, saunas, recovery centres, and residential housing.',
          ],
        },
        {
          heading: '2. Backed by the Aurium Sports Ecosystem',
          paragraphs: [
            'Led by Founder, Sports Director & Owner Diwas Agasti, Aurium Sports brings an established operating ecosystem—including The Aurium Academy (Ages 3–16), partner schools, the Aurium Mini League, the Aurium International Cup, the AIC Titans Cup, and NextSportz digital analytics—ensuring that Aurium Arena is supported by year-round football programming and experienced tournament management.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Is Aurium Arena a separate company or part of Aurium Sports?',
          answer:
            'Aurium Arena is the sports infrastructure and venue development brand of Aurium Sports (operated by Aurium Academy Pvt. Ltd. in Kathmandu, Nepal). Specific project vehicle or joint-venture structures are subject to owner-approved investor agreements.',
        },
      ],
    },
  ] as ArenaSupportingGuide[],
} as const;

export const getArenaSupportingGuide = (slug: string) =>
  auriumArenaData.supportingGuides.find((g) => g.slug === slug);
