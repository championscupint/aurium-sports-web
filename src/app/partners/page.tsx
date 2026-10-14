import type { Metadata } from 'next';
import { PartnersClient } from './PartnersClient';

export const metadata: Metadata = {
  title: 'Our School Partners & Global Affiliations | Aurium Sports Nepal',
  description:
    'Explore Aurium Sports institutional partners: Rato Bangala School, Sanskriti, Galaxy Public, Orchid College, Dana Cup Denmark, ISCA, and training venues across Kathmandu.',
  alternates: {
    canonical: '/partners',
  },
  keywords: [
    'Aurium Sports Partners',
    'Rato Bangala School Football',
    'Sanskriti School Sports',
    'Dana Cup Nepal Partner',
    'School Sports Partnerships Kathmandu',
  ],
  openGraph: {
    title: 'School Partners & International Affiliations | Aurium Sports',
    description:
      'Collaborating with leading schools, European tournament organizations, and venues across Nepal.',
    url: 'https://auriumsports.com/partners',
    images: ['/images/school.jpg'],
  },
};

export default function PartnersPage() {
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
        name: 'Partners',
        item: 'https://auriumsports.com/partners',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PartnersClient />
    </>
  );
}
