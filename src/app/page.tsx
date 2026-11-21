import type { Metadata } from 'next';
import { HomeClient } from './HomeClient';
import { getFAQSchema, getWebPageSchema, FAQItem } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Football Academy in Kathmandu, Nepal | Aurium Sports',
  },
  description:
    "Looking for a football academy in Nepal? Aurium Sports offers structured football training for children and youth (Ages 3–16), girls' development, school programmes and international tournament pathways across Kathmandu Valley.",
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Football academy in Nepal',
    'Football academy Kathmandu',
    'Football coaching in Nepal',
    'Youth football academy Nepal',
    'Kids football academy Kathmandu',
    'Football training for kids in Nepal',
    'Girls football academy Nepal',
    'Goalkeeper training Nepal',
    'School football programme Nepal',
    'Aurium Sports',
    'The Aurium Academy',
  ],
  openGraph: {
    title: 'Football Academy in Kathmandu, Nepal | Aurium Sports',
    description:
      "Looking for a football academy in Nepal? Aurium Sports offers structured football training for children and youth (Ages 3–16), girls' development, school programmes and international tournament pathways across Kathmandu Valley.",
    url: site.url,
    images: [
      {
        url: '/images/hero-himalaya.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurium Sports Youth Football Training in Kathmandu Valley, Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Football Academy in Kathmandu, Nepal | Aurium Sports',
    description:
      "Looking for a football academy in Nepal? Aurium Sports offers structured football training for children and youth, girls' development, school programmes and international tournament pathways across Kathmandu Valley.",
    images: ['/images/hero-himalaya.jpg'],
  },
};

const homeFaqs: FAQItem[] = [
  {
    question: 'Which is a good football academy in Nepal and where is Aurium Sports located?',
    answer:
      'Aurium Sports (operated by Aurium Academy Pvt. Ltd.) is one of Nepal’s leading youth football and sports development academies, headquartered at House No. 41/11 Ka, Matakumari Marg, Baneshwor Height, Kathmandu. Its football academy, The Aurium Academy, delivers structured coaching across 5 verified locations in Kathmandu, Lalitpur, and Bhaktapur.',
  },
  {
    question: 'At what age can a child join The Aurium Academy and does it train beginners?',
    answer:
      'Children can join The Aurium Academy from age 3 up to age 16, and complete beginners are welcome in every age cohort. Our 7 structured programmes include Little Ballers (Ages 3–5), Academy Prep (Ages 6–8), Foundation (Ages 9–12), Youth Development (Ages 13–16), Specialist Goalkeeper Training (Ages 7–16), Girls Development (Ages 6–16), and Invite-Only Elite Squads (Ages 7+).',
  },
  {
    question: 'Where are Aurium Sports training grounds located in Kathmandu Valley?',
    answer:
      'Aurium Sports operates across 5 active training grounds in Kathmandu Valley: Baneshwor Height Hub (HQ, Kathmandu), Rato Bangala School Hub (Patan Dhoka, Lalitpur), Ace Sports Hub (Gairidhara / Sinamangal, Kathmandu), Ullens / South Valley Hub (Khumaltar, Lalitpur), and Sirutar Sports Complex (Sirutar, Bhaktapur).',
  },
  {
    question: 'How many days per week do children train at Aurium Sports?',
    answer:
      'Most academy cohorts train 3 days per week (90 minutes per session) following our periodized 3-day microcycle covering Physical Conditioning, Technical & Tactical Mastery, and Game Scenarios, while Little Ballers (Ages 3–5) train in 60-minute weekend sessions and Invite-Only Elite players receive additional weekly high-performance sessions.',
  },
  {
    question: 'Does Aurium Sports offer dedicated girls’ football training in Nepal?',
    answer:
      'Yes, Aurium Sports runs a dedicated Girls Development Programme (Ages 6–16) with equal coaching, pitch access, and international tournament pathways. In July 2025, the Aurium x Rato Bangala U14 Girls squad made history by reaching the European Quarter-Finals at the Dana Cup in Denmark.',
  },
  {
    question: 'What is the Aurium Sports B.U.S.T. training and mental wellbeing model?',
    answer:
      'The B.U.S.T. model is Aurium’s foundational sports science and mental wellbeing routine integrated into every session: B (Breathing & mindful regulation), U (Warm-Up & dynamic mobility), S (Stretching & injury prevention), and T (Training drills & game intelligence).',
  },
  {
    question: 'Does Aurium Sports organise international football tours and work with schools?',
    answer:
      'Yes, Aurium Sports leads Nepali youth delegations to international tournaments including the Dana Cup (Denmark), Norway Cup (Norway), Yangshuo Cup (China), and Gothia Cup (Sweden), and partners with leading schools in Kathmandu Valley through the Aurium SportsEd ECA and after-school curriculum.',
  },
  {
    question: 'How can a parent register their child for a trial session or inquire about school partnerships?',
    answer:
      'Parents and schools can book a trial spot directly on our website using the "Book a Spot" button, via WhatsApp at +977 9828978044, or by email at auriumsports@gmail.com.',
  },
];

export default function HomePage() {
  const faqSchema = getFAQSchema(homeFaqs);
  const webPageSchema = getWebPageSchema({
    title: 'Aurium Sports | Football Academy & Youth Development in Nepal',
    description: site.description,
    path: '/',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient faqs={homeFaqs} />
    </>
  );
}
