import type { Metadata } from 'next';
import { BecomeTrainerClient } from './BecomeTrainerClient';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Football & Sports Coaching Careers in Nepal | Become an Aurium Trainer',
  description:
    'Join Nepal’s premier grassroots football and sports coaching network in Kathmandu Valley. Aurium Sports offers certified coaches continuous education, school ECA placements, and international pathways.',
  alternates: {
    canonical: '/become-a-trainer',
  },
  keywords: [
    'Football Coaching Jobs Nepal',
    'Sports Coaching Careers Kathmandu',
    'Become a Trainer Nepal',
    'Aurium Coach Recruitment',
    'Grassroots Football Coach Kathmandu',
  ],
  openGraph: {
    title: 'Become an Aurium Coach | Coaching Careers in Kathmandu, Nepal',
    description:
      'Join Nepal’s leading coaching directorate with certified education and career progression.',
    url: `${site.url}/become-a-trainer`,
    images: ['/images/academy.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become an Aurium Coach | Coaching Careers in Kathmandu, Nepal',
    description:
      'Join Nepal’s leading coaching directorate with certified education and career progression.',
    images: ['/images/academy.jpg'],
  },
};

export default function BecomeATrainerPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Become a Trainer', path: '/become-a-trainer' },
  ]);
  const webPageSchema = getWebPageSchema({
    title: 'Football & Sports Coaching Careers in Nepal | Become an Aurium Trainer',
    description:
      'Join Nepal’s premier grassroots football and sports coaching network in Kathmandu Valley.',
    path: '/become-a-trainer',
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
      <BecomeTrainerClient />
    </>
  );
}
