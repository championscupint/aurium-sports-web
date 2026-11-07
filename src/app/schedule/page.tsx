import type { Metadata } from 'next';
import { ScheduleClient } from './ScheduleClient';

export const metadata: Metadata = {
  title: 'Academy Training Schedule & Grounds | Aurium Sports Kathmandu',
  description:
    'Find weekly football, basketball, and goalkeeping training slots across Kathmandu, Patan Dhoka Lalitpur, and Bhaktapur. Filter by age group (U8 to U16) and morning or evening cohorts.',
  alternates: {
    canonical: '/schedule',
  },
  keywords: [
    'Aurium Football Training Schedule',
    'Kathmandu Youth Football Timings',
    'Football Academy Baneshwor Height',
    'Patan Dhoka Football Training',
    'Goalkeeper Coaching Schedule Kathmandu',
    'After School Football Kathmandu',
  ],
  openGraph: {
    title: 'Training Schedule & Ground Locations | Aurium Sports',
    description:
      'Filter weekly sessions by age group (U8 to U16) and location across Baneshwor Height, Patan Dhoka, Ace, Ullens, and Sirutar.',
    url: 'https://auriumsports.com/schedule',
    images: ['/images/academy.jpg'],
  },
};

export default function SchedulePage() {
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
        name: 'Training Schedule & Locations',
        item: 'https://auriumsports.com/schedule',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScheduleClient />
    </>
  );
}

