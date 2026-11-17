import { site } from '@/data/site';

export interface FAQItem {
  question: string;
  answer: string;
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SportsOrganization'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    alternateName: site.academyName,
    legalName: site.legalName,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}/images/logo-512.png`,
      width: 512,
      height: 512,
    },
    image: `${site.url}/images/hero-himalaya.jpg`,
    description: site.description,
    foundingDate: '2021',
    founder: {
      '@type': 'Person',
      name: 'Diwas Agasti',
      jobTitle: 'Sports Director & Owner',
      url: `${site.url}/about`,
    },
    subOrganization: {
      '@type': 'SportsOrganization',
      name: 'The Aurium Academy',
      description:
        'The grassroots football and youth athletic development arm of Aurium Sports in Kathmandu Valley, Nepal.',
      url: `${site.url}/services/academy`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House No. 41/11 Ka, Matakumari Marg, Baneshwor Height',
      addressLocality: 'Kathmandu',
      addressRegion: 'Bagmati Province',
      postalCode: '44600',
      addressCountry: 'NP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.6915,
      longitude: 85.334,
    },
    telephone: '+9779828978044',
    email: site.email,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+977-9828978044',
      email: site.email,
      contactType: 'customer support',
      areaServed: 'NP',
      availableLanguage: ['English', 'Nepali'],
    },
    sameAs: [site.instagram, site.facebook, site.tiktok],
    sport: ['Association Football', 'Basketball', 'Cricket'],
    areaServed: [
      {
        '@type': 'City',
        name: 'Kathmandu',
      },
      {
        '@type': 'City',
        name: 'Lalitpur',
      },
      {
        '@type': 'City',
        name: 'Bhaktapur',
      },
      {
        '@type': 'Country',
        name: 'Nepal',
      },
    ],
    knowsAbout: [
      'Grassroots Football Development',
      'Youth Football Academy Nepal',
      'Kids Football Training Kathmandu',
      'School Football Programs Nepal',
      'Girls Football Development Nepal',
      'Sports for Mental Wellbeing (B.U.S.T. Framework)',
      'Youth Football Tournaments Nepal',
      'International Youth Football Tours (Dana Cup Denmark)',
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    alternateName: [site.academyName, site.legalName],
    url: site.url,
    description: site.description,
    inLanguage: 'en',
    publisher: {
      '@id': `${site.url}/#organization`,
    },
  };
}

export function getWebPageSchema(params: {
  title: string;
  description: string;
  path: string;
}) {
  const fullUrl = params.path === '/' ? site.url : `${site.url}${params.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${fullUrl}#webpage`,
    url: fullUrl,
    name: params.title,
    description: params.description,
    inLanguage: 'en',
    isPartOf: {
      '@id': `${site.url}/#website`,
    },
    about: {
      '@id': `${site.url}/#organization`,
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `${site.url}/#location`,
    name: `${site.name} — ${site.academyName}`,
    legalName: site.legalName,
    image: `${site.url}/images/academy.jpg`,
    telephone: '+9779828978044',
    email: site.email,
    url: site.url,
    sameAs: [site.instagram, site.facebook, site.tiktok],
    parentOrganization: {
      '@id': `${site.url}/#organization`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House No. 41/11 Ka, Matakumari Marg, Baneshwor Height',
      addressLocality: 'Kathmandu',
      addressRegion: 'Bagmati Province',
      postalCode: '44600',
      addressCountry: 'NP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.6915,
      longitude: 85.334,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '06:00',
        closes: '19:00',
      },
    ],
  };
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? site.url : `${site.url}${item.path}`,
    })),
  };
}

/**
 * Distinct JSON-LD entity for Aurium Football Club.
 * Strictly separated from Aurium Sports (Aurium Academy Pvt. Ltd.) — no merged legal identity,
 * no invented registration numbers, founding dates, or unverified claims.
 */
export function getFootballClubSchema() {
  const clubUrl = `${site.url}/football-club`;
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SportsOrganization', 'SportsTeam'],
    '@id': `${clubUrl}#organization`,
    name: 'Aurium Football Club',
    alternateName: 'Aurium FC',
    url: clubUrl,
    sport: 'Association Football',
    slogan: 'From Grassroots to the National Stage.',
    description:
      'Aurium Football Club is a separately registered football club in Nepal (registered as a Profit Not Distributing Company and registered with PAN in Nepal), building a competitive pathway from grassroots football to the national stage in strategic partnership with Aurium Sports.',
    email: site.email,
    telephone: '+9779828978044',
    areaServed: {
      '@type': 'Country',
      name: 'Nepal',
    },
    knowsAbout: [
      'Competitive Club Football in Nepal',
      'Player Development & Recruitment Nepal',
      'Grassroots to Senior Club Football Pathway',
      'Nepali Football Competition Structure',
    ],
  };
}

export function getFootballClubWebPageSchema() {
  const clubUrl = `${site.url}/football-club`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${clubUrl}#webpage`,
    url: clubUrl,
    name: 'Aurium Football Club | Developing the Future of Nepali Football',
    description:
      'Discover Aurium Football Club, its football development vision, competitive ambitions and partnership with Aurium Sports to create a pathway from grassroots football to the national stage in Nepal.',
    inLanguage: 'en',
    isPartOf: {
      '@id': `${site.url}/#website`,
    },
    about: {
      '@id': `${clubUrl}#organization`,
    },
    mentions: [
      {
        '@id': `${site.url}/#organization`,
      },
    ],
  };
}

