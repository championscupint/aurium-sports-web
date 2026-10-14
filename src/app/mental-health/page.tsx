import type { Metadata } from 'next';
import { MentalHealthClient } from './MentalHealthClient';
import { getFAQSchema, FAQItem } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sports For Mental Health & B.U.S.T. Training Framework | Aurium Sports Nepal',
  description:
    'Discover Nepal’s pioneering Sports for Mental Health framework by Aurium Sports: evidence-backed clinical protocols, B.U.S.T. (Breathing, Warm-Up, Stretching, Training) drills, and school wellbeing workshops.',
  alternates: {
    canonical: '/mental-health',
  },
  keywords: [
    'Sports for Mental Health Nepal',
    'B.U.S.T. Model',
    'Youth Mental Health Sports',
    'Mental Wellbeing Football Coaching',
    'Kathmandu Youth Sports Science',
    'School Mental Health Workshops Nepal',
    'Aurium Sports Mental Health',
  ],
  openGraph: {
    title: 'Sports For Mental Health | The B.U.S.T. Framework | Aurium Sports',
    description:
      'Grounded in clinical sports science. Helping Nepali youth conquer anxiety and build emotional resilience through sport.',
    url: 'https://auriumsports.com/mental-health',
    images: ['/images/wellbeing.jpg'],
  },
};

const mentalHealthFaqs: FAQItem[] = [
  {
    question: 'How does Aurium Sports integrate mental health into athletic training?',
    answer:
      'Aurium Sports integrates mindfulness, box-breathing, and positive psychological debriefs directly onto the pitch through our B.U.S.T. model (Breathing, Warm-Up, Stretching, Training drills). Coaches are trained to foster psychologically safe environments where mistakes are viewed as learning data rather than failures.',
  },
  {
    question: 'What scientific research supports Aurium’s Sports for Mental Health approach?',
    answer:
      'Our methodology draws upon landmark studies from the British Journal of Sports Medicine (BJSM 2023), The Lancet Psychiatry, and Harvard Medical School showing that structured team sport elevates BDNF neurotrophic factors, lowers stress cortisol, and reduces anxiety symptoms by up to 60%.',
  },
  {
    question: 'Can schools in Kathmandu book Aurium’s student athlete wellbeing workshops?',
    answer:
      'Yes, Aurium conducts 90-minute on-campus Student Athlete Clinics combining active field movement with classroom strategies for handling exam pressure and sports competition.',
  },
];

export default function MentalHealthPage() {
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
        name: 'Sports for Mental Health',
        item: 'https://auriumsports.com/mental-health',
      },
    ],
  };

  const faqSchema = getFAQSchema(mentalHealthFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MentalHealthClient />
    </>
  );
}
