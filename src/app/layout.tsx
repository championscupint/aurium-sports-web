import type { Metadata } from "next";
import { Inter, Anton, Fraunces } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EnquiryProvider } from "@/components/EnquiryContext";
import { EnquiryModal } from "@/components/EnquiryModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://auriumsports.com"),
  title: {
    default: "Aurium Sports | Building More Than Footballers | Kathmandu, Nepal",
    template: "%s | Aurium Sports Nepal",
  },
  description:
    "Aurium Sports is Nepal's premier youth sports ecosystem: youth academy training (football, basketball, cricket), school ECA programs, holiday camps, tournaments, and a groundbreaking Sports for Mental Health model.",
  keywords: [
    "Aurium Sports",
    "Aurium Sports Nepal",
    "Aurium Academy Kathmandu",
    "Best Football Academy Kathmandu",
    "Football Academy Nepal",
    "Youth Football Coaching Nepal",
    "Sports for Mental Health Nepal",
    "B.U.S.T. Training Framework",
    "Dana Cup Nepal",
    "Grassroots Football Kathmandu",
    "School ECA Sports Nepal",
    "Goalkeeper Coaching Nepal",
    "Diwas Agasti",
  ],
  authors: [{ name: "Aurium Sports Pvt. Ltd.", url: "https://auriumsports.com" }],
  creator: "Aurium Sports Pvt. Ltd.",
  publisher: "Aurium Sports Pvt. Ltd.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Aurium Sports | Building More Than Footballers",
    description:
      "Grassroots sports development, international pathways, and mental wellbeing for youth athletes in Nepal.",
    url: "https://auriumsports.com",
    siteName: "Aurium Sports",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-himalaya.jpg",
        width: 1200,
        height: 630,
        alt: "Aurium Sports Youth Football Training in Kathmandu, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurium Sports | Building More Than Footballers",
    description:
      "Nepal's complete grassroots sports ecosystem: youth academy, school programs, international tournaments, and sports mental health.",
    images: ["/images/hero-himalaya.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const localSchema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-chalk text-ink selection:bg-gold selection:text-ink">
        <EnquiryProvider>
          <Navigation />
          <main className="flex-grow pt-16 overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
