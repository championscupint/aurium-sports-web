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
    question: 'What age groups and sports are offered at Aurium Sports?',
    answer:
      'Aurium Sports coaches boys and girls aged 7 to 16 years across football, basketball, and cricket. We also run a dedicated Goalkeeper Coaching Academy led by GK Coach Sujal Poudel, girls football pathways, seasonal holiday camps, and grassroots school curricula.',
  },
  {
    question: 'What is the Aurium Sports B.U.S.T. training model?',
    answer:
      'The B.U.S.T. model is Aurium’s foundational sports science and mental health protocol integrated into every session: B (Breathing & mindful regulation), U (Warm-Up & dynamic mobility), S (Stretching & injury prevention), and T (Training drills & game intelligence). It was developed to protect young athletes and foster lifelong mental resilience.',
  },
  {
    question: 'Who leads and coaches at Aurium Sports?',
    answer:
      'Aurium Sports was founded and is directed by Sports Director & Owner Diwas Agasti. The coaching staff comprises a certified team of 12 coaches including GK Coach Sujal Poudel, Strength & Conditioning Coach Siddhartha Koirala, and Coaches Koshish Ghale, Samipya Subedi, Abishekh Singh, Jeevan Rokaya, Misayal Yonjan, Sujan Karki, Sandesh Poudel, Utpal Moktan, Rajendra Sunuwar, and Barun Budathoki.',
  },
  {
    question: 'How did Aurium Sports perform at the Dana Cup in Denmark?',
    answer:
      'In July 2025, Aurium Sports squads competed at the world-renowned Dana Cup in Hjørring, Denmark. The Aurium x Rato Bangala U14 Girls team made history by reaching the European Quarter-Finals, marking the first time a Nepali youth girls team achieved this milestone on the global stage.',
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
