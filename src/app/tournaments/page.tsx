import type { Metadata } from 'next';
import { TournamentsClient } from './TournamentsClient';

export const metadata: Metadata = {
  title: 'Youth Football Tournaments & Mini League in Kathmandu | Aurium Sports',
  description:
    'Register school and club teams for the Aurium Mini League (3rd Edition), Aurium International Cup, and corporate futsal leagues in Kathmandu. Live stats powered by NextSportz.',
  alternates: {
    canonical: '/tournaments',
  },
  keywords: [
    'Aurium Mini League',
    'Youth Football Tournament Kathmandu',
    'School Futsal League Nepal',
    'Aurium International Cup',
    'NextSportz Nepal',
    'Corporate Football Tournament Kathmandu',
  ],
  openGraph: {
    title: 'Tournaments & Leagues | Aurium Mini League | Kathmandu, Nepal',
    description:
      'High-energy competitive youth sports leagues and tournaments with official refereeing and live digital analytics.',
    url: 'https://auriumsports.com/tournaments',
    images: ['/images/tournament.jpg'],
  },
};

export default function TournamentsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://auriumsports.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tournaments & Leagues',
        item: 'https://auriumsports.com/tournaments',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TournamentsClient />
    </>
  );
}
