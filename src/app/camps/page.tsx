import type { Metadata } from 'next';
import { CampsClient } from './CampsClient';

export const metadata: Metadata = {
  title: 'Holiday Sports & Football Camps in Kathmandu | Aurium Sports',
  description:
    'Enroll in Aurium Sports seasonal camps in Kathmandu: Winter Camp, Spring Camp, Summer Camp, and Dashain Camp. Structured training for boys & girls aged 7–16 with kits, certificates, and mental health workshops.',
  alternates: {
    canonical: '/camps',
  },
  keywords: [
    'Holiday Football Camps Kathmandu',
    'Winter Sports Camp Nepal',
    'Summer Football Camp Kathmandu',
    'Kids Sports Camps Kathmandu',
    'Aurium Winter Camp',
    'Youth Sports Camps Nepal',
  ],
  openGraph: {
    title: 'Holiday Football & Sports Camps | Aurium Sports Kathmandu',
    description:
      'Immersive, high-energy holiday training camps for youth athletes in Nepal. Official kits, skill assessments, and awards.',
    url: 'https://auriumsports.com/camps',
    images: ['/images/camp.jpg'],
  },
};

export default function CampsPage() {
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
        name: 'Holiday Camps',
        item: 'https://auriumsports.com/camps',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CampsClient />
    </>
  );
}
