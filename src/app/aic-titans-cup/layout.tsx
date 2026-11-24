import React from "react";
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

export default function AicTitansCupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${jakarta.variable} ${jetbrains.variable} titan-Root -mt-16 min-h-screen flex flex-col bg-[#F7F8FA] text-[#101D32]`}
      style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
    >
      <EcosystemProvider>
        <Navbar basePath="/aic-titans-cup" />
        <div className="flex-grow">{children}</div>
        <Footer basePath="/aic-titans-cup" />
      </EcosystemProvider>
    </div>
  );
}
