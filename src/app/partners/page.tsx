import type { Metadata } from 'next';
import { PartnersClient } from './PartnersClient';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Sports Partnerships Nepal | School & Football Development Partners',
  description:
    'Explore Aurium Sports institutional and school partnerships in Nepal: Rato Bangala School, Sanskriti International School, Galaxy Public School, Dana Cup Denmark, ISCA, and NextSportz.',
  alternates: {
    canonical: '/partners',
  },
  keywords: [
    'Sports Partnerships Nepal',
    'Football Development Partnerships Nepal',
    'School Sports Partnerships Kathmandu',
    'Aurium Sports Partners',
    'Rato Bangala School Football',
    'Dana Cup Nepal Partner',
  ],
  openGraph: {
    title: 'Sports Partnerships Nepal | School & Football Development Partners',
    description:
      'Collaborating with leading schools, European tournament organizations, and sports technology platforms across Nepal.',
    url: `${site.url}/partners`,
    images: ['/images/school.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Partnerships Nepal | Aurium Sports',
    description:
      'Collaborating with leading schools, European tournament organizations, and venues across Nepal.',
    images: ['/images/school.jpg'],
  },
};

export default function PartnersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Partners', path: '/partners' },
  ]);
  const webPageSchema = getWebPageSchema({
    title: 'Sports Partnerships Nepal | School & Football Development Partners',
    description:
      'Explore Aurium Sports institutional and school partnerships in Nepal.',
    path: '/partners',
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
      <PartnersClient />
    </>
  );
}
