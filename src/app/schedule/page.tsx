import type { Metadata } from 'next';
import { ScheduleClient } from './ScheduleClient';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Football Training Schedule & Grounds in Kathmandu Valley | Aurium Sports',
  description:
    'Find weekly youth football, girls football, basketball, and goalkeeping training schedules across Kathmandu, Lalitpur (Patan Dhoka), and Bhaktapur (Sirutar). Filter by age group U8 to U16.',
  alternates: {
    canonical: '/schedule',
  },
  keywords: [
    'Kathmandu Youth Football Schedule',
    'Girls Football Nepal Training',
    'Girls Football Development Kathmandu',
    'Football Academy Baneshwor Height',
    'Patan Dhoka Football Training Lalitpur',
    'Bhaktapur Youth Football Training',
    'Goalkeeper Coaching Schedule Kathmandu',
  ],
  openGraph: {
    title: 'Training Schedule & Ground Locations in Kathmandu Valley | Aurium Sports',
    description:
      'Filter weekly youth football and sports sessions by age group (U8 to U16) across Kathmandu, Lalitpur, and Bhaktapur.',
    url: `${site.url}/schedule`,
    images: ['/images/academy.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Training Schedule & Ground Locations | Aurium Sports',
    description:
      'Filter weekly youth football and sports sessions across Kathmandu, Lalitpur, and Bhaktapur.',
    images: ['/images/academy.jpg'],
  },
};

export default function SchedulePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Training Schedule & Locations', path: '/schedule' },
  ]);
  const webPageSchema = getWebPageSchema({
    title: 'Football Training Schedule & Grounds in Kathmandu Valley | Aurium Sports',
    description:
      'Find weekly youth football, girls football, basketball, and goalkeeping training schedules across Kathmandu, Lalitpur, and Bhaktapur.',
    path: '/schedule',
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
      <ScheduleClient />
    </>
  );
}
