import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { EcosystemProvider } from "@/components/aic/EcosystemProvider";
import { Navbar } from "@/components/aic/Navbar";
import { Footer } from "@/components/aic/Footer";
import "./titans-arena.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AIC Titans Cup | Nepal's Five-Competition Banking Football & CSR Ecosystem",
    template: "%s | AIC Titans Cup — Aurium Sports",
  },
  description:
    "Official portal for AIC Titans Cup & Clash of the Titans – The Bankers Championship. Uniting all 105 NRB-licensed Class A, B, C & D Banks and Financial Institutions across 7 Regional Hubs in Nepal with Gentlemen (NPR 25,000), Ladies Promotional (NPR 15,000), 7m/10m match clocks, and local Sports CSR.",
  keywords: [
    "AIC Titans Cup",
    "Clash of the Titans Nepal",
    "Banking Football Tournament Nepal",
    "Inter-Bank Futsal Nepal",
    "NRB BFI Football Championship",
    "Corporate Football Nepal",
    "Bankers Sports CSR Nepal",
    "Aurium Sports Corporate Tournament",
    "The Bankers Championship Kathmandu",
  ],
  alternates: {
    canonical: "https://www.auriumsports.com/aic-titans-cup",
  },
  openGraph: {
    title: "AIC Titans Cup | Where Bankers Become Titans",
    description:
      "Nepal's official five-competition banking football & futsal ecosystem for all 105 NRB-licensed BFIs across 7 Regional Hubs, culminating in Clash of the Titans.",
    url: "https://www.auriumsports.com/aic-titans-cup",
    siteName: "AIC Titans Cup — Aurium Sports",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/tournaments/aic-titans-banner.jpg",
        width: 1200,
        height: 630,
        alt: "AIC Titans Cup — The Bankers Championship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIC Titans Cup | Where Bankers Become Titans",
    description:
      "Five competitions, 105 NRB-licensed BFIs, 7 Regional Hubs, 7m/10m match clocks, and local Sports CSR empowering underprivileged girls & licensed coaches.",
    images: ["/images/tournaments/aic-titans-banner.jpg"],
  },
};

const TITANS_SPORTS_EVENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "AIC Titans Cup & Clash of the Titans – The Bankers Championship",
  description:
    "Nepal's five-competition inter-bank football and futsal championship for all 105 NRB-licensed Class A, B, C, and D Banks and Financial Institutions across 7 Regional Hubs, featuring Gentlemen and Ladies divisions and local Sports CSR.",
  url: "https://www.auriumsports.com/aic-titans-cup",
  sport: "Football / Futsal",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "7 Regional Tournament Hubs Across Nepal (Kathmandu, Banepa, Biratnagar/Itahari, Janakpur/Birgunj, Chitwan/Hetauda, Pokhara, Butwal/Kohalpur/Dhangadhi)",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressRegion: "All 7 Provinces of Nepal",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Aurium Sports (The Aurium Academy Pvt. Ltd.)",
    url: "https://www.auriumsports.com",
  },
};

const TITANS_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which institutions are eligible for AIC Titans Cup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All 105 Nepal Rastra Bank (NRB) BAFIA-licensed Banks and Financial Institutions: 20 Class A Commercial Banks (Type A), 17 Class B Development Banks (Type B), 17 Class C Finance Companies (Type C), and 51 Class D Microfinance Institutions (Type D). Only bonafide full-time employees with 90+ days active payroll status are eligible.",
      },
    },
    {
      "@type": "Question",
      name: "What are the entry fees for Gentlemen and Ladies divisions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Gentlemen's Division entry fee is NPR 25,000 per squad, while the Ladies' Division has a 40% promotional entry fee of NPR 15,000 per squad to boost female banking participation, plus an NPR 2,000 refundable discipline deposit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the match duration and Stage 1 prize pool policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "League/Group Stage matches run 7 minutes each half (20-minute slot), and all Knockout, Quarter-Final, Semi-Final, Third-Place, and Grand Final matches run 10 minutes each half (35-minute slot). A minimum of 50% of collected division entry fees forms the Stage 1 prize pool, paid 70% to the Winner and 30% to the Runner-Up.",
      },
    },
    {
      "@type": "Question",
      name: "How do teams qualify for Clash of the Titans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The verified Champion and Runner-Up from Type A, Type B, Type C, and Type D (8 qualifiers per division) advance to Clash of the Titans – The Bankers Championship, a separate 6-day League-cum-Knockout tournament staged in Magh.",
      },
    },
  ],
};

export default function AicTitansCupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${jakarta.variable} ${jetbrains.variable} titan-Root min-h-screen flex flex-col bg-[#F7F8FA] text-[#101D32]`}
      style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TITANS_SPORTS_EVENT_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TITANS_FAQ_SCHEMA) }}
      />
      <EcosystemProvider>
        <Navbar basePath="/aic-titans-cup" />
        <div className="flex-grow">{children}</div>
        <Footer basePath="/aic-titans-cup" />
      </EcosystemProvider>
    </div>
  );
}
