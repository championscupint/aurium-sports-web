import type { Metadata } from 'next';
import { AnnouncementsClient } from './AnnouncementsClient';

export const metadata: Metadata = {
  title: 'Official Bulletins & Trial Announcements | Aurium Sports Kathmandu',
  description:
    'Latest bulletins, camp registration deadlines, Aurium Mini League fixtures, and international tournament trial notices from the Aurium Sports Directorate in Kathmandu.',
  alternates: {
    canonical: '/announcements',
  },
  keywords: [
    'Aurium Sports Notices',
    'Football Trials Kathmandu',
    'Winter Camp Registration Nepal',
    'Mini League Fixtures',
    'Youth Sports Announcements Nepal',
  ],
  openGraph: {
    title: 'Official Bulletins & Notices | Aurium Sports Nepal',
    description:
      'Stay updated with upcoming trials, camp deadlines, and league notices from Kathmandu.',
    url: 'https://auriumsports.com/announcements',
    images: ['/images/hero-himalaya.jpg'],
  },
};

export default function AnnouncementsPage() {
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
        name: 'Announcements',
        item: 'https://auriumsports.com/announcements',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AnnouncementsClient />
    </>
  );
}
