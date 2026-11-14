import type { Metadata } from 'next';
import { HomeClient } from './HomeClient';
import { getFAQSchema, getWebPageSchema, FAQItem } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Aurium Sports | Football Academy & Youth Development in Nepal',
  },
  description:
    'Discover Aurium Sports, a Nepal-based football and youth development organization offering grassroots football training, tournaments, international exposure and community programs.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Football Academy Nepal',
    'Youth Football Development Nepal',
    'Football Academy Kathmandu',
    'Youth Football Nepal',
    'Grassroots Football Nepal',
    'Kids Football Training Kathmandu',
    'Sports for Mental Wellbeing Nepal',
    'School Football Nepal',
    'Girls Football Nepal',
    'Aurium Sports',
    'The Aurium Academy',
  ],
  openGraph: {
    title: 'Aurium Sports | Football Academy & Youth Development in Nepal',
    description:
      'Discover Aurium Sports, a Nepal-based football and youth development organization offering grassroots football training, tournaments, international exposure and community programs.',
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
    title: 'Aurium Sports | Football Academy & Youth Development in Nepal',
    description:
      'Discover Aurium Sports, a Nepal-based football and youth development organization offering grassroots football training, tournaments, international exposure and community programs.',
    images: ['/images/hero-himalaya.jpg'],
  },
};

const homeFaqs: FAQItem[] = [
  {
    question: 'What is Aurium Sports and where is it located in Kathmandu?',
    answer:
      'Aurium Sports (operated by Aurium Academy Pvt. Ltd.) is a Nepal-based football and youth development organization headquartered at House No. 41/11 Ka, Matakumari Marg, Baneshwor Height, Kathmandu. Its football development arm, The Aurium Academy, conducts training sessions across 4 premier locations in the Kathmandu Valley, including Baneshwor, Jorpati, Lalitpur, and Bhaktapur.',
  },
  {
    question: 'What age groups and programmes are offered at The Aurium Academy?',
    answer:
      'The Aurium Academy offers structured player pathways for boys and girls aged 3 to 16 years: Little Ballers (Ages 3–5), Academy Prep (Ages 6–8), Foundation (Ages 9–12), Youth Development (Ages 13–16), Specialist Goalkeeper Training (Ages 7–16), Girls Development (Ages 6–16), and our Invite-Only Elite Squads (Ages 7+ from early age), alongside basketball, cricket, seasonal camps, and school ECA curricula.',
  },
  {
    question: 'How does the Invite-Only Elite Squad work for early-age players?',
    answer:
      'Our Elite (Invite-Only) teams select high-commitment players from an early age (7+) through technical trials. Elite squad members receive additional weekly training sessions alongside an Individualized Development Plan (IDP) designed so each player develops at the exact biological, technical, and psychological pace best suited for them.',
  },
  {
    question: 'What is the Aurium Sports B.U.S.T. training model?',
    answer:
      'The B.U.S.T. model is Aurium’s foundational sports science and mental health protocol integrated into every session: B (Breathing & mindful regulation), U (Warm-Up & dynamic mobility), S (Stretching & injury prevention), and T (Training drills & game intelligence). It was developed to protect young athletes and foster lifelong mental resilience.',
  },
  {
    question: 'Who leads and coaches at Aurium Sports?',
    answer:
      'Aurium Sports was founded and is directed by Sports Director & Owner Diwas Agasti, supported by a certified Technical & Coaching Directorate of 12+ specialist coaches across Early Discovery, Technical Mastery, Specialist Goalkeeping, Strength & Conditioning, Sports Science, and Elite International Pathways.',
  },
  {
    question: 'Which international tournaments do Aurium Sports squads compete in?',
    answer:
      'Aurium Sports prepares and leads Nepal youth squads to premier global youth football tournaments including the Dana Cup (Denmark)—where the Aurium x Rato Bangala U14 Girls made history as European Quarter-Finalists—as well as the Norway Cup (Oslo, Norway), Yangshuo Cup (Guilin, China), Gothia Cup (Sweden), and international invitational tours.',
  },
  {
    question: 'How do I register my child or inquire about school partnerships?',
    answer:
      'Admissions and partnership inquiries are processed directly with our coaching coordinators via WhatsApp at +977 9828978044 or email at auriumsports@gmail.com.',
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
