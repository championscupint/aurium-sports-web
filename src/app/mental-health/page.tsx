import type { Metadata } from 'next';
import { MentalHealthClient } from './MentalHealthClient';
import { getFAQSchema, getBreadcrumbSchema, getWebPageSchema, FAQItem } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Sports for Mental Wellbeing Nepal | B.U.S.T. Youth Training Methodology',
  description:
    'Discover Nepal’s pioneering Sports for Mental Wellbeing framework by Aurium Sports: clinical sports science, the B.U.S.T. youth football training methodology, and school wellbeing workshops in Kathmandu.',
  alternates: {
    canonical: '/mental-health',
  },
  keywords: [
    'Youth Sports Development Nepal',
    'Sports for Mental Wellbeing Nepal',
    'Youth Football Training Methodology',
    'Grassroots Football Development',
    'Sports for Mental Health Nepal',
    'B.U.S.T. Model',
    'School Mental Health Workshops Nepal',
    'Aurium Sports Mental Health',
  ],
  openGraph: {
    title: 'Sports for Mental Wellbeing Nepal | The B.U.S.T. Methodology | Aurium Sports',
    description:
      'Grounded in clinical sports science. Helping Nepali youth conquer anxiety and build emotional resilience through structured football and sports.',
    url: `${site.url}/mental-health`,
    images: ['/images/wellbeing.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports for Mental Wellbeing Nepal | Aurium Sports',
    description:
      'Helping Nepali youth build emotional resilience and mental wellbeing through the B.U.S.T. sports science framework.',
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
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Sports for Mental Health', path: '/mental-health' },
  ]);
  const webPageSchema = getWebPageSchema({
    title: 'Sports for Mental Wellbeing Nepal | B.U.S.T. Youth Training Methodology',
    description:
      'Discover Nepal’s pioneering Sports for Mental Wellbeing framework by Aurium Sports in Kathmandu.',
    path: '/mental-health',
  });
  const faqSchema = getFAQSchema(mentalHealthFaqs);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MentalHealthClient faqs={mentalHealthFaqs} />
    </>
  );
}
