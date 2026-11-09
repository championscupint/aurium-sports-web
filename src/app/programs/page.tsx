import type { Metadata } from 'next';
import { ProgramsClient } from './ProgramsClient';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Youth Football & Sports Programs in Nepal | Academy, Schools & Leagues',
  description:
    'Explore the 9 grassroots football and youth sports pillars of Aurium Sports in Kathmandu Valley: The Aurium Academy, School Football Programs, Holiday Camps, Tournaments, and Sports for Mental Wellbeing.',
  alternates: {
    canonical: '/programs',
  },
  keywords: [
    'Grassroots Football Development Nepal',
    'Youth Football Programs Kathmandu',
    'School Football Program Nepal',
    'The Aurium Academy Programs',
    'Girls Football Development Kathmandu',
    'Holiday Sports Camps Nepal',
    'Aurium Mini League',
  ],
  openGraph: {
    title: 'Youth Football & Sports Programs in Nepal | Aurium Sports',
    description:
      'Nine comprehensive grassroots football and youth sports pathways in Kathmandu Valley, from foundational academy training to international tournaments.',
    url: `${site.url}/programs`,
    images: ['/images/hero-himalaya.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youth Football & Sports Programs in Nepal | Aurium Sports',
    description:
      'Nine comprehensive grassroots football and youth sports pathways in Kathmandu Valley.',
    images: ['/images/hero-himalaya.jpg'],
  },
};

export default function ProgramsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
  ]);
  const webPageSchema = getWebPageSchema({
    title: 'Youth Football & Sports Programs in Nepal | Aurium Sports',
    description:
      'Explore the 9 grassroots football and youth sports pillars of Aurium Sports in Kathmandu Valley.',
    path: '/programs',
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
      <ProgramsClient />
    </>
  );
}
