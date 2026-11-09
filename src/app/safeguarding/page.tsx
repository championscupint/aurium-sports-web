import type { Metadata } from 'next';
import { SafeguardingClient } from './SafeguardingClient';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Child Safeguarding & Player Welfare Policy | Aurium Sports Nepal',
  description:
    'Aurium Sports (Aurium Academy Pvt. Ltd.) commitment to child safeguarding, certified coaching standards, pitchside first aid, and zero-tolerance player protection in youth football across Nepal.',
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
      'Zero-tolerance player protection, certified medical protocols, coach background checks, and child safeguarding standards for parents and schools in Nepal.',
    url: `${site.url}/safeguarding`,
    images: ['/images/hero-himalaya.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Child Safeguarding & Player Welfare Policy | Aurium Sports',
    description:
      'Zero-tolerance player protection, certified medical protocols, and child safeguarding standards in Nepal.',
    images: ['/images/hero-himalaya.jpg'],
  },
};

export default function SafeguardingPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Child Safeguarding & Safety Policy', path: '/safeguarding' },
  ]);
  const webPageSchema = getWebPageSchema({
    title: 'Child Safeguarding & Player Welfare Policy | Aurium Sports Nepal',
    description:
      'Aurium Sports commitment to child safeguarding, certified coaching standards, pitchside first aid, and player protection across Nepal.',
    path: '/safeguarding',
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
      <SafeguardingClient />
    </>
  );
}
