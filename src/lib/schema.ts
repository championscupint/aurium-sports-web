import { site } from '@/data/site';

export interface FAQItem {
  question: string;
  answer: string;
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/images/logo-512.png`,
    image: `${site.url}/images/hero-himalaya.jpg`,
    description: site.description,
    founder: {
      '@type': 'Person',
      name: 'Diwas Agasti',
      jobTitle: 'Sports Director & Owner',
      url: `${site.url}/about`,
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
      latitude: '27.6915',
      longitude: '85.3340',
    },
    telephone: '+9779828978044',
    email: site.emails.inquiry,
    sameAs: [site.instagram],
    sport: ['Football', 'Basketball', 'Cricket'],
    areaServed: {
      '@type': 'Country',
      name: 'Nepal',
    },
    knowsAbout: [
      'Youth Football Academy',
      'Sports for Mental Health (B.U.S.T. Framework)',
      'School ECA Sports Programs',
      'Holiday Football Training Camps',
      'Goalkeeper Coaching',
      'Dana Cup Denmark Youth Football Tournament',
      'Aurium Mini League',
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `${site.url}/#location`,
    name: `${site.name} Academy & Training Center`,
    image: `${site.url}/images/academy.jpg`,
    telephone: '+9779828978044',
    url: site.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Baneshwor Height, Kathmandu',
      addressLocality: 'Kathmandu',
      addressRegion: 'Bagmati Province',
      addressCountry: 'NP',
    },
    priceRange: 'NPR',
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

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
