import type { Metadata } from 'next';
import AuriumArenaClient from './AuriumArenaClient';
import { auriumArenaData } from '@/data/aurium-arena';
import { site } from '@/data/site';
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getWebPageSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: {
    absolute: auriumArenaData.seo.title,
  },
  description: auriumArenaData.seo.description,
  alternates: {
    canonical: 'https://www.auriumsports.com/aurium-arena',
  },
  openGraph: {
    title: auriumArenaData.seo.title,
    description: auriumArenaData.seo.description,
    url: 'https://www.auriumsports.com/aurium-arena',
    siteName: 'Aurium Sports',
    type: 'website',
    images: [
      {
        url: '/images/arena/aurium-arena-7v7-turf-masterplan-pasikot-kathmandu.png',
        width: 1200,
        height: 630,
        alt: 'Aurium Arena 7v7 Football Turf, Spectator Grandstand & Elevated Restaurant Masterplan in Pasikot, Kathmandu, Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: auriumArenaData.seo.title,
    description: auriumArenaData.seo.description,
    images: [
      '/images/arena/aurium-arena-7v7-turf-masterplan-pasikot-kathmandu.png',
    ],
  },
};

export default function AuriumArenaPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Aurium Arena', path: '/aurium-arena' },
  ]);

  const webPageSchema = getWebPageSchema({
    title: auriumArenaData.seo.title,
    description: auriumArenaData.seo.description,
    path: '/aurium-arena',
  });

  const faqSchema = getFAQSchema(auriumArenaData.investorFaqs);

  const arenaProjectSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}/aurium-arena#project`,
    name: 'Aurium Arena — Commercial 7v7 Football & Futsal Infrastructure Project',
    serviceType:
      'Sports Infrastructure Development, 7v7 Futsal & Football Turf, Spectator Venue & Sports Hospitality',
    provider: {
      '@id': `${site.url}/#organization`,
    },
    areaServed: [
      { '@type': 'City', name: 'Kathmandu' },
      { '@type': 'Country', name: 'Nepal' },
    ],
    description: auriumArenaData.seo.description,
    url: `${site.url}/aurium-arena`,
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arenaProjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AuriumArenaClient />
    </>
  );
}
