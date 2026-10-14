import type { Metadata } from 'next';
import { BecomeTrainerClient } from './BecomeTrainerClient';

export const metadata: Metadata = {
  title: 'Become a Coach & Trainer | Coaching Careers | Aurium Sports Nepal',
  description:
    'Join Nepal’s premier grassroots sports coaching network. Aurium Sports offers certified coaches continuous education, competitive salaries, school ECA placements, and international coaching pathways.',
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
    title: 'Become an Aurium Coach | Coaching Careers in Kathmandu',
    description:
      'Join Nepal’s leading coaching directorate with certified education and career progression.',
    url: 'https://auriumsports.com/become-a-trainer',
    images: ['/images/academy.jpg'],
  },
};

export default function BecomeATrainerPage() {
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
        name: 'Become a Trainer',
        item: 'https://auriumsports.com/become-a-trainer',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BecomeTrainerClient />
    </>
  );
}
