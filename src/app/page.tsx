import type { Metadata } from 'next';
import { HomeClient } from './HomeClient';
import { getFAQSchema, FAQItem } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Aurium Sports | Youth Football & Sports Academy Kathmandu, Nepal',
  description:
    "Join Aurium Sports in Kathmandu: elite youth academy training (ages 7–16) in football, basketball, cricket, school ECA programs, holiday camps, and Nepal's pioneering Sports for Mental Health model.",
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Aurium Sports',
    'Best Football Academy Kathmandu',
    'Youth Sports Academy Nepal',
    'Kids Football Coaching Kathmandu',
    'Goalkeeper Coaching Kathmandu',
    'Dana Cup Nepal',
    'Sports for Mental Health Nepal',
    'B.U.S.T. Model Football',
    'School ECA Sports Kathmandu',
    'Diwas Agasti',
  ],
  openGraph: {
    title: 'Aurium Sports | Building More Than Footballers | Kathmandu, Nepal',
    description:
      "Nepal's premier grassroots youth sports academy: football, basketball, cricket, sports mental health, and international pathways.",
    url: 'https://auriumsports.com',
    images: [
      {
        url: '/images/hero-himalaya.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurium Sports Youth Football Training in Kathmandu, Nepal',
      },
    ],
  },
};

const homeFaqs: FAQItem[] = [
  {
    question: 'What is Aurium Sports and where is it located in Kathmandu?',
    answer:
      'Aurium Sports (Aurium Sports Pvt. Ltd.) is Nepal’s premier grassroots youth sports organization headquartered at House No. 41/11 Ka, Matakumari Marg, Baneshwor Height, Kathmandu. We conduct training sessions across 4 premier locations in the Kathmandu Valley, including Baneshwor, Jorpati, and Bhaktapur.',
  },
  {
    question: 'What age groups and sports are offered at Aurium Sports?',
    answer:
      'Aurium Sports coaches boys and girls aged 7 to 16 years across football, basketball, and cricket. We also run a dedicated Goalkeeper Coaching Academy led by GK Coach Sujal Poudel, as well as seasonal holiday camps and grassroots school curricula.',
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
      'Admissions are processed directly with our coaching coordinators via WhatsApp at +977 9828978044 or email at register@theauriumacademy.com. Schools interested in adopting the Aurium SportsEd ECA curriculum can contact inquiry@theauriumacademy.com.',
  },
];

export default function HomePage() {
  const faqSchema = getFAQSchema(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient faqs={homeFaqs} />
    </>
  );
}
