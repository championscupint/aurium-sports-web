import type { Metadata } from "next";
import { Inter, Anton, Fraunces } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MainWrapper } from "@/components/MainWrapper";
import { EnquiryProvider } from "@/components/EnquiryContext";
import { EnquiryModal } from "@/components/EnquiryModal";
import GoogleAnalytics, {
  GTM_ID,
  GA_MEASUREMENT_ID,
} from "@/components/GoogleAnalytics";
import { site } from "@/data/site";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from "@/lib/schema";

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
  metadataBase: new URL(site.url),
  title: {
    default: "Aurium Sports | Football Academy & Youth Development in Nepal",
    template: "%s | Aurium Sports Nepal",
  },
  description:
    "Discover Aurium Sports, a Nepal-based football and youth development organization offering grassroots football training, tournaments, international exposure and community programs.",
  authors: [{ name: "Aurium Academy Pvt. Ltd.", url: site.url }],
  creator: "Aurium Academy Pvt. Ltd.",
  publisher: "Aurium Academy Pvt. Ltd.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
    title: "Aurium Sports | Football Academy & Youth Development in Nepal",
    description:
      "Discover Aurium Sports, a Nepal-based football and youth development organization offering grassroots football training, tournaments, international exposure and community programs.",
    url: site.url,
    siteName: "Aurium Sports",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-himalaya.jpg",
        width: 1200,
        height: 630,
        alt: "Aurium Sports Youth Football Training in Kathmandu Valley, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurium Sports | Football Academy & Youth Development in Nepal",
    description:
      "Discover Aurium Sports, a Nepal-based football and youth development organization offering grassroots football training, tournaments, international exposure and community programs.",
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
  const webSiteSchema = getWebSiteSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager (GTM-WN2PGNJH) */}
        {GTM_ID && (
          <script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
        {/* Google Analytics 4 (G-P12F8T385S) */}
        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              id="ga4-init"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', {
  anonymize_ip: true,
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});`,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-chalk text-ink selection:bg-gold selection:text-ink">
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <GoogleAnalytics />
        <EnquiryProvider>
          <Navigation />
          <MainWrapper>
            {children}
          </MainWrapper>
          <Footer />
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
