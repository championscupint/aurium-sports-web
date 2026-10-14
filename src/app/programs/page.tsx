import type { Metadata } from 'next';
import { ProgramsClient } from './ProgramsClient';

export const metadata: Metadata = {
  title: 'All Programs & Services | Academy, Schools & Tournaments | Aurium Sports',
  description:
    'Explore the 9 sports pillars of Aurium Sports: Youth Academy, School Programs (SportsEd), Holiday Camps, Tournaments & Leagues, Sports for Mental Health, Talent Scouting, Arena Sales, and Coach Careers in Nepal.',
  alternates: {
    canonical: '/programs',
  },
  keywords: [
    'Aurium Sports Programs',
    'Youth Sports Nepal',
    'School Sports Curriculum Nepal',
    'Football Academy Kathmandu',
    'Holiday Camps Nepal',
    'Aurium Mini League',
  ],
  openGraph: {
    title: 'All Programs & Services | Aurium Sports Kathmandu',
    description:
      'Nine comprehensive sports pathways from foundational training to international tournaments.',
    url: 'https://auriumsports.com/programs',
    images: ['/images/hero-himalaya.jpg'],
  },
};

export default function ProgramsPage() {
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
        name: 'Programs',
        item: 'https://auriumsports.com/programs',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProgramsClient />
    </>
  );
}
