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
    question: 'Does Aurium Sports offer specialist goalkeeper training in Kathmandu?',
    answer:
      'Yes, Aurium Sports runs a dedicated Goalkeeper Academy (Ages 7–16) at our Baneshwor Height Hub (HQ) focusing on shot-stopping reflexes, safe diving biomechanics, 1v1 angle narrowing, aerial box command, and sweeper-keeper distribution.',
  },
  {
    question: 'What should a child bring to football training and how are fees structured?',
    answer:
      'Children should bring comfortable sportswear, turf football shoes or trainers, shin guards, and a labelled water bottle (all balls, bibs, agility equipment, and pitch-side first-aid kits are provided by Aurium). Fee structures vary by programme frequency and cohort tier—contact our academy desk via WhatsApp (+977 9828978044) or Book a Spot for the current term fee sheet and trial session details.',
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
