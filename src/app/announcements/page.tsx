import type { Metadata } from 'next';
import { AnnouncementsClient } from './AnnouncementsClient';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Official Bulletins, Trials & Tournament Notices | Aurium Sports',
  description:
    'Latest bulletins, Dana Cup 2027 trial notices, holiday camp registration deadlines, and Aurium Mini League fixtures from the Aurium Sports Directorate in Kathmandu, Nepal.',
  alternates: {
    canonical: '/announcements',
  },
  keywords: [
    'Aurium Sports Notices',
    'Football Trials Kathmandu',
    'Dana Cup Trials Nepal',
    'Winter Camp Registration Nepal',
    'Aurium Mini League Fixtures',
    'Youth Sports Announcements Nepal',
  ],
  openGraph: {
    title: 'Official Bulletins & Trial Notices | Aurium Sports Nepal',
    description:
      'Stay updated with upcoming international football trials, camp deadlines, and league notices from Kathmandu.',
    url: `${site.url}/announcements`,
    images: ['/images/hero-himalaya.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Official Bulletins & Trial Notices | Aurium Sports Nepal',
    description:
      'Stay updated with upcoming international football trials, camp deadlines, and league notices from Kathmandu.',
    images: ['/images/hero-himalaya.jpg'],
  },
};

export default function AnnouncementsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Announcements', path: '/announcements' },
  ]);
  const webPageSchema = getWebPageSchema({
    title: 'Official Bulletins, Trials & Tournament Notices | Aurium Sports',
    description:
      'Latest bulletins, Dana Cup 2027 trial notices, holiday camp registration deadlines, and Aurium Mini League fixtures.',
    path: '/announcements',
  });

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
      <AnnouncementsClient />
    </>
  );
}
