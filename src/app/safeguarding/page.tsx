import type { Metadata } from 'next';
import { SafeguardingClient } from './SafeguardingClient';

export const metadata: Metadata = {
  title: 'Child Safeguarding & Safety Policy | Aurium Sports Nepal',
  description:
    'Our commitment to player welfare, certified coaching standards, pitchside first aid, child protection protocols, and zero tolerance for harassment in youth sports across Nepal.',
  alternates: {
    canonical: '/safeguarding',
  },
  keywords: [
    'Child Safeguarding Aurium Sports',
    'Youth Sports Safety Kathmandu',
    'Football Academy Child Protection Nepal',
    'Safe Sports Policy Nepal',
    'Certified Youth Coaches Kathmandu',
    'First Aid Sports Protocol Nepal',
  ],
  openGraph: {
    title: 'Child Safeguarding & Player Welfare Policy | Aurium Sports',
    description:
      'Zero-tolerance player protection, certified medical protocols, coach background checks, and child safeguarding standards for parents and schools.',
    url: 'https://auriumsports.com/safeguarding',
    images: ['/images/hero-himalaya.jpg'],
  },
};

export default function SafeguardingPage() {
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
        name: 'Child Safeguarding & Safety Policy',
        item: 'https://auriumsports.com/safeguarding',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SafeguardingClient />
    </>
  );
}

