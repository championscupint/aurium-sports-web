import type { Metadata } from 'next';
import { TournamentsClient } from './TournamentsClient';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Youth Football Tournaments Nepal | School Football Tournaments Kathmandu',
  description:
    'Register school and club teams for the Aurium Mini League, Aurium International Cup, and youth football tournaments in Kathmandu Valley, Nepal. Live tournament stats powered by NextSportz.',
  alternates: {
    canonical: '/tournaments',
  },
  keywords: [
    'Youth Football Tournaments Nepal',
    'School Football Tournaments Kathmandu',
    'Aurium Mini League',
    'Aurium International Cup',
    'School Futsal League Nepal',
    'NextSportz Nepal',
    'Corporate Football Tournament Kathmandu',
  ],
  openGraph: {
    title: 'Youth Football Tournaments Nepal | Aurium Mini League | Kathmandu',
    description:
      'High-energy competitive youth football leagues and school tournaments in Kathmandu Valley with official refereeing and live NextSportz digital analytics.',
    url: `${site.url}/tournaments`,
    images: ['/images/tournament.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youth Football Tournaments Nepal | Aurium Mini League',
    description:
      'Competitive youth football leagues and school tournaments in Kathmandu Valley with NextSportz analytics.',
    images: ['/images/tournament.jpg'],
  },
};

export default function TournamentsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tournaments & Leagues', path: '/tournaments' },
  ]);

  const webPageSchema = getWebPageSchema({
    title: 'Youth Football Tournaments Nepal | School Football Tournaments Kathmandu',
    description:
      'Register school and club teams for the Aurium Mini League, Aurium International Cup, and youth football tournaments in Kathmandu Valley, Nepal.',
    path: '/tournaments',
  });

  const sportsEventsSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: 'Aurium Mini League (3rd Edition)',
      description:
        'Multi-age youth football and futsal league in Kathmandu Valley featuring U-8, U-10, U-12, U-14, and U-16 school and academy divisions with live NextSportz stats.',
      sport: 'Football',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Kathmandu Valley Partner Venues',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kathmandu',
          addressRegion: 'Bagmati Province',
          addressCountry: 'NP',
        },
      },
      organizer: {
        '@type': 'SportsOrganization',
        name: 'Aurium Sports',
        legalName: 'Aurium Academy Pvt. Ltd.',
        url: site.url,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: 'Aurium International Cup',
      description:
        'Cross-border invitational youth football tournament hosted by Aurium Sports in Kathmandu, Nepal, uniting premier domestic academies and regional clubs.',
      sport: 'Football',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Kathmandu, Nepal',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kathmandu',
          addressRegion: 'Bagmati Province',
          addressCountry: 'NP',
        },
      },
      organizer: {
        '@type': 'SportsOrganization',
        name: 'Aurium Sports',
        legalName: 'Aurium Academy Pvt. Ltd.',
        url: site.url,
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventsSchema) }}
      />
      <TournamentsClient />
    </>
  );
}
