import type { Metadata } from 'next';
import { CampsClient } from './CampsClient';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Holiday Football & Sports Camps in Kathmandu | The Aurium Academy',
  description:
    'Enroll in Aurium Sports seasonal holiday football and sports camps in Kathmandu Valley: Winter Camp, Spring Camp, Summer Camp, and Dashain Camp for boys and girls aged 7–16.',
  alternates: {
    canonical: '/camps',
  },
  keywords: [
    'Holiday Football Camps Kathmandu',
    'Youth Football Camps Nepal',
    'Winter Sports Camp Nepal',
    'Summer Football Camp Kathmandu',
    'Kids Sports Camps Kathmandu',
    'Aurium Winter Camp',
  ],
  openGraph: {
    title: 'Holiday Football & Sports Camps in Kathmandu | Aurium Sports',
    description:
      'Immersive holiday football and multi-sport training camps for youth athletes in Kathmandu Valley, Nepal.',
    url: `${site.url}/camps`,
    images: ['/images/camp.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holiday Football & Sports Camps in Kathmandu | Aurium Sports',
    description:
      'Immersive holiday football and multi-sport training camps for youth athletes in Kathmandu Valley, Nepal.',
    images: ['/images/camp.jpg'],
  },
};

export default function CampsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Holiday Camps', path: '/camps' },
  ]);
  const webPageSchema = getWebPageSchema({
    title: 'Holiday Football & Sports Camps in Kathmandu | Aurium Sports',
    description:
      'Enroll in Aurium Sports seasonal holiday football and sports camps in Kathmandu Valley for boys and girls aged 7–16.',
    path: '/camps',
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
      <CampsClient />
    </>
  );
}
