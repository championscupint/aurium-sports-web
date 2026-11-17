import type { Metadata } from 'next';
import { FootballClubClient } from './FootballClubClient';
import {
  getBreadcrumbSchema,
  getFootballClubSchema,
  getFootballClubWebPageSchema,
} from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Aurium Football Club | Developing the Future of Nepali Football',
  },
  description:
    'Discover Aurium Football Club, its football development vision, competitive ambitions and partnership with Aurium Sports to create a pathway from grassroots football to the national stage in Nepal.',
  alternates: {
    canonical: '/football-club',
  },
  keywords: [
    'Aurium Football Club',
    'Football club in Nepal',
    'Nepali football club',
    'Football development in Nepal',
    'Youth football development Nepal',
    'Football academy Nepal',
    'Competitive football pathway Nepal',
    'Aurium Sports',
    'Grassroots football Nepal',
  ],
  openGraph: {
    title: 'Aurium Football Club | Developing the Future of Nepali Football',
    description:
      'Discover Aurium Football Club, its football development vision, competitive ambitions and partnership with Aurium Sports to create a pathway from grassroots football to the national stage in Nepal.',
    url: `${site.url}/football-club`,
    siteName: 'Aurium Sports & Aurium Football Club',
    type: 'website',
    images: [
      {
        url: '/images/stadium-night.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurium Football Club – From Grassroots to the National Stage in Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurium Football Club | Developing the Future of Nepali Football',
    description:
      'Discover Aurium Football Club, its football development vision, competitive ambitions and partnership with Aurium Sports to create a pathway from grassroots football to the national stage in Nepal.',
    images: ['/images/stadium-night.jpg'],
  },
};

export default function FootballClubPage() {
  const clubSchema = getFootballClubSchema();
  const webPageSchema = getFootballClubWebPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Aurium Football Club', path: '/football-club' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clubSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FootballClubClient />
    </>
  );
}
