import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurium Sports | Building More Than Footballers",
  description: "Aurium Sports is a long-term ecosystem around grassroots football, youth development, sports for mental wellbeing, and community impact in Nepal.",
  keywords: ["Football academy Nepal", "Youth football Nepal", "Grassroots football Nepal", "Football for children Nepal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navigation />
        <main className="flex-grow pt-20 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
