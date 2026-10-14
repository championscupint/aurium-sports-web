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

export const metadata: Metadata = {
  title: "Aurium Sports | Building More Than Footballers | Kathmandu, Nepal",
  description:
    "Aurium Sports is building Nepal's complete grassroots sports ecosystem: youth academy training (football, basketball, cricket), school ECA programs, holiday camps, tournaments, and a groundbreaking Sports for Mental Health model.",
  keywords: [
    "Aurium Sports",
    "Aurium Academy Kathmandu",
    "Football Academy Nepal",
    "Sports for Mental Health Nepal",
    "Grassroots Football Kathmandu",
    "Dana Cup Nepal",
    "Youth Sports Nepal",
    "School ECA Sports Nepal",
  ],
  authors: [{ name: "Aurium Sports Pvt. Ltd." }],
  openGraph: {
    title: "Aurium Sports | Building More Than Footballers",
    description: "Grassroots sports development, international pathways and mental wellbeing for youth athletes in Nepal.",
    url: "https://auriumsports.com",
    siteName: "Aurium Sports",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${fraunces.variable} h-full antialiased`}
    >
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
