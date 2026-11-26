import type { Metadata } from "next";
import AuriumArenaClient from "./AuriumArenaClient";

export const metadata: Metadata = {
  title: "Aurium Arena | 17 Integrated Sports, Gym, Recovery & Café Venues Across Nepal",
  description:
    "Explore Aurium Arena — Aurium Sports' nationwide expansion plan to establish 17 integrated sports facilities across Nepal featuring multi-sport arenas, performance gyms, athletic recovery labs for career longevity, and cafés. Open to individual and institutional investors.",
  keywords: [
    "Aurium Arena",
    "Aurium Sports Nepal",
    "Sports infrastructure investment Nepal",
    "Athlete recovery center Nepal",
    "Sports gym recovery cafe Nepal",
    "17 sports facilities Nepal",
  ],
  alternates: {
    canonical: "https://www.auriumsports.com/aurium-arena",
  },
  openGraph: {
    title: "Aurium Arena — 17 Sports, Gym, Recovery & Café Facilities Across Nepal",
    description:
      "Creating an ecosystem of healthy living and athletic career longevity across 17 planned venues in Nepal. Open to individual and institutional investors.",
    url: "https://www.auriumsports.com/aurium-arena",
    siteName: "Aurium Sports",
    type: "website",
  },
};

const arenaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Aurium Arena — 17 Sports Facilities Across Nepal",
      url: "https://www.auriumsports.com/aurium-arena",
      description:
        "Nationwide expansion plan by Aurium Sports to establish 17 integrated sports venues across Nepal combining sports courts, performance gyms, athletic recovery labs, and cafés.",
      publisher: {
        "@type": "Organization",
        name: "Aurium Sports (Aurium Academy Pvt. Ltd.)",
        url: "https://www.auriumsports.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Aurium Arena?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aurium Arena is Aurium Sports' nationwide plan to establish 17 integrated sports facilities across Nepal, each combining multi-sport courts, a performance gym, an athletic recovery lab, and a nutrition café.",
          },
        },
        {
          "@type": "Question",
          name: "Who can invest in Aurium Arena?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aurium Arena is open to both individual and institutional investors through strategic equity, single-venue co-ownership, multi-venue portfolios, land joint ventures, and equipment or hospitality partnerships.",
          },
        },
        {
          "@type": "Question",
          name: "Why does every Aurium Arena include an athletic recovery lab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recovery is essential to healthy living and extending the longevity of athletes' professional careers. Each Aurium Arena embeds physiotherapy, cold plunge, mobility, and recovery protocols alongside training.",
          },
        },
      ],
    },
  ],
};

export default function AuriumArenaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arenaJsonLd) }}
      />
      <AuriumArenaClient />
    </>
  );
}
