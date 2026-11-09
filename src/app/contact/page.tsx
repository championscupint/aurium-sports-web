import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';
import { getLocalBusinessSchema, getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Aurium Sports | Baneshwor Height, Kathmandu, Nepal',
  description:
    'Contact Aurium Sports (Aurium Academy Pvt. Ltd.) headquarters in Baneshwor Height, Kathmandu, Nepal. Call or WhatsApp +977 9828978044 or email auriumsports@gmail.com for academy enrollment and partnerships.',
  alternates: {
    canonical: '/contact',
  },
  keywords: [
    'Contact Aurium Sports',
    'Aurium Sports Kathmandu Address',
    'The Aurium Academy Contact',
    'Football Academy Kathmandu Contact',
    'Aurium Academy Pvt. Ltd.',
  ],
  openGraph: {
    title: 'Contact Aurium Sports | Kathmandu Headquarters',
    description:
      'Direct phone/WhatsApp (+977 9828978044) and email (auriumsports@gmail.com) for academy enrollment, school partnerships, and tournament registration in Nepal.',
    url: `${site.url}/contact`,
    images: ['/images/hero-himalaya.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Aurium Sports | Kathmandu Headquarters',
    description:
      'Direct phone/WhatsApp (+977 9828978044) and email (auriumsports@gmail.com) for academy enrollment and partnerships.',
    images: ['/images/hero-himalaya.jpg'],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);
  const webPageSchema = getWebPageSchema({
    title: 'Contact Aurium Sports | Baneshwor Height, Kathmandu, Nepal',
    description:
      'Contact Aurium Sports (Aurium Academy Pvt. Ltd.) headquarters in Baneshwor Height, Kathmandu, Nepal.',
    path: '/contact',
  });
  const localSchema = getLocalBusinessSchema();

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <ContactClient />
    </>
  );
}
