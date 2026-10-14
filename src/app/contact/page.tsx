import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';
import { getLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Aurium Sports | Baneshwor Height, Kathmandu, Nepal',
  description:
    'Contact Aurium Sports headquarters in Baneshwor Height, Kathmandu. Direct phone and WhatsApp (+977 9828978044), email inquiries for player enrollment, school partnerships, and tournament registration.',
  alternates: {
    canonical: '/contact',
  },
  keywords: [
    'Contact Aurium Sports',
    'Aurium Sports Kathmandu Address',
    'Aurium WhatsApp Number',
    'Football Academy Kathmandu Contact',
    'Diwas Agasti Contact',
  ],
  openGraph: {
    title: 'Contact Aurium Sports | Kathmandu Headquarters',
    description:
      'Direct WhatsApp and email dispatch for academy enrollment, school partnerships, and tournament registration.',
    url: 'https://auriumsports.com/contact',
    images: ['/images/hero-himalaya.jpg'],
  },
};

export default function ContactPage() {
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
        name: 'Contact',
        item: 'https://auriumsports.com/contact',
      },
    ],
  };

  const localSchema = getLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <ContactClient />
    </>
  );
}
