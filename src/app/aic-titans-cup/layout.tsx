import React from "react";
import { Outfit } from "next/font/google";
import { EcosystemProvider } from "@/components/aic/EcosystemProvider";
import { Navbar } from "@/components/aic/Navbar";
import { Footer } from "@/components/aic/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function AicTitansCupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${outfit.variable} min-h-screen flex flex-col bg-[#040914] text-slate-100 font-sans`}>
      <EcosystemProvider>
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </EcosystemProvider>
    </div>
  );
}
