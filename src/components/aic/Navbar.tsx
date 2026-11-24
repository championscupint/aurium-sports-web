"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Trophy,
  Shield,
  Sparkles,
  HeartHandshake,
  Calendar,
  Building2,
  ArrowUpRight,
  Lock,
} from "lucide-react";

const FIVE_COMPETITIONS = [
  {
    name: "AIC Titans Cup – Type A",
    sub: "20 Class A Commercial Banks · Shrawan",
    href: "/competitions/type-a",
    badge: "NRB Class A",
    accent: "bg-blue-600 text-white",
    dot: "bg-blue-500",
    logo: "/logos/type-a-crest.svg",
  },
  {
    name: "AIC Titans Cup – Type B",
    sub: "17 Class B Development Banks · Shrawan",
    href: "/competitions/type-b",
    badge: "NRB Class B",
    accent: "bg-emerald-600 text-white",
    dot: "bg-emerald-500",
    logo: "/logos/type-b-crest.svg",
  },
  {
    name: "AIC Titans Cup – Type C",
    sub: "17 Class C Finance Companies · Kartik",
    href: "/competitions/type-c",
    badge: "NRB Class C",
    accent: "bg-purple-600 text-white",
    dot: "bg-purple-500",
    logo: "/logos/type-c-crest.svg",
  },
  {
    name: "AIC Titans Cup – Type D",
    sub: "51 Class D Microfinance (7 Hubs) · Kartik",
    href: "/competitions/type-d",
    badge: "NRB Class D",
    accent: "bg-orange-600 text-white",
    dot: "bg-orange-500",
    logo: "/logos/type-d-crest.svg",
  },
  {
    name: "Clash of the Titans",
    sub: "The Bankers Championship (8 Qualifiers) · Magh",
    href: "/competitions/clash-of-the-titans",
    badge: "5th Competition · Championship",
    accent: "bg-amber-500 text-slate-950 font-black",
    dot: "bg-amber-400",
    logo: "/logos/clash-crest.svg",
    isClash: true,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [compDropdown, setCompDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040914]/95 backdrop-blur-xl border-b border-amber-500/25 shadow-2xl"
          : "bg-gradient-to-b from-[#040914]/95 via-[#040914]/80 to-transparent"
      }`}
    >
      {/* Top Ecosystem Bar connecting to Aurium Sports & Nepal Youth Cup */}
      <div className="bg-[#071120] border-b border-white/10 text-[11px] text-slate-300 py-1.5 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              AURIUM SPORTS FLAGSHIP CORPORATE ECOSYSTEM
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              5 Competitions · 105 NRB-Licensed BFIs · 7 Regional Hubs · Gentlemen (25k) &amp; Ladies (15k)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.auriumsports.com/tournaments"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 font-medium"
            >
              Aurium Sports Directory <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-slate-600">·</span>
            <a
              href="https://nepalyouthcup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors inline-flex items-center gap-1 font-medium"
            >
              Nepal Youth Cup 2027 <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-slate-600">·</span>
            <Link
              href="/aic-titans-cup/admin"
              className="text-amber-300 hover:text-amber-200 inline-flex items-center gap-1 font-semibold"
            >
              <Lock className="w-3 h-3" /> Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Crest */}
        <Link href="/aic-titans-cup" className="flex items-center gap-3.5 group">
          <img
            src="/logos/parent-crest.svg"
            alt="AIC Titans Cup Official Crest"
            className="w-12 h-14 object-contain drop-shadow-[0_0_12px_rgba(212,160,23,0.45)] group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="text-[10px] font-extrabold tracking-[0.22em] text-amber-400 uppercase">
              YOUR GAME. YOUR PEOPLE. YOUR ESCAPE.
            </div>
            <div className="font-display font-black text-xl md:text-2xl tracking-tight text-white leading-none mt-0.5">
              AIC TITANS CUP
            </div>
            <div className="text-[10px] font-semibold tracking-wider text-teal-400 uppercase mt-0.5">
              Nepal Banking Fraternity Championship
            </div>
          </div>
        </Link>

        {/* Desktop Menu (All 10 Required Sections) */}
        <nav className="hidden xl:flex items-center gap-1">
          <Link
            href="/aic-titans-cup"
            className={`px-2.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname === "/" ? "text-amber-400 bg-white/5" : "text-slate-200 hover:text-amber-400"
            }`}
          >
            Home
          </Link>

          <Link
            href="/aic-titans-cup/about"
            className={`px-2.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname?.startsWith("/about")
                ? "text-amber-400 bg-white/5"
                : "text-slate-200 hover:text-amber-400"
            }`}
          >
            About
          </Link>

          {/* The Five Competitions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompDropdown(true)}
            onMouseLeave={() => setCompDropdown(false)}
          >
            <Link
              href="/aic-titans-cup/competitions"
              className={`px-2.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 transition-colors ${
                pathname?.startsWith("/competitions")
                  ? "text-amber-400 bg-white/5"
                  : "text-slate-200 hover:text-amber-400"
              }`}
            >
              The 5 Competitions <ChevronDown className="w-3.5 h-3.5" />
            </Link>

            {compDropdown && (
              <div className="absolute top-full left-0 w-[430px] pt-2 z-50">
                <div className="bg-[#071120] border border-amber-500/35 rounded-2xl shadow-2xl p-4 space-y-2">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-400 px-2 pb-1 border-b border-white/10 flex items-center justify-between">
                    <span>4 Qualifying Leagues + 5th Championship</span>
                    <Link href="/aic-titans-cup/competitions" className="underline hover:text-white">
                      Compare All 5 &rarr;
                    </Link>
                  </div>
                  {FIVE_COMPETITIONS.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className={`flex items-center gap-3.5 p-2.5 rounded-xl transition-all ${
                        c.isClash
                          ? "bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-400/40 hover:border-amber-400"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <img src={c.logo} alt={c.name} className="w-10 h-11 object-contain shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-sm text-white truncate">
                            {c.name}
                          </span>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${c.accent}`}>
                            {c.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 truncate mt-0.5">{c.sub}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/aic-titans-cup/road-to-the-clash"
            className={`px-2.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname?.startsWith("/road-to-the-clash")
                ? "text-amber-400 bg-white/5"
                : "text-slate-200 hover:text-amber-400"
            }`}
          >
            Road to the Clash
          </Link>

          <Link
            href="/aic-titans-cup/experience"
            className={`px-2.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname?.startsWith("/experience")
                ? "text-amber-400 bg-white/5"
                : "text-slate-200 hover:text-amber-400"
            }`}
          >
            Bankers&apos; Escape
          </Link>

          <Link
            href="/aic-titans-cup/csr"
            className={`px-2.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname?.startsWith("/csr")
                ? "text-amber-400 bg-white/5"
                : "text-slate-200 hover:text-amber-400"
            }`}
          >
            Sports CSR
          </Link>

          <Link
            href="/aic-titans-cup/sponsors"
            className={`px-2.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname?.startsWith("/sponsors")
                ? "text-amber-400 bg-white/5"
                : "text-slate-200 hover:text-amber-400"
            }`}
          >
            Sponsors
          </Link>

          <Link
            href="/aic-titans-cup/news"
            className={`px-2.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname?.startsWith("/news")
                ? "text-amber-400 bg-white/5"
                : "text-slate-200 hover:text-amber-400"
            }`}
          >
            News &amp; Media
          </Link>

          <Link
            href="/aic-titans-cup/contact"
            className={`px-2.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname?.startsWith("/contact")
                ? "text-amber-400 bg-white/5"
                : "text-slate-200 hover:text-amber-400"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Persistent Register Your Institution Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/aic-titans-cup/register"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-4 py-3 rounded-xl shadow-[0_0_24px_rgba(212,160,23,0.4)] transition-all hover:scale-[1.02]"
          >
            <Trophy className="w-4 h-4" />
            Register Your Institution
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="xl:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-amber-400"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#071120] border-t border-amber-500/30 px-6 py-6 max-h-[85vh] overflow-y-auto space-y-5">
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "1. Home", href: "/" },
              { label: "2. About AIC Titans Cup", href: "/about" },
              { label: "3. All 5 Competitions", href: "/competitions" },
              { label: "4. Road to the Clash", href: "/road-to-the-clash" },
              { label: "5. Bankers' Experience", href: "/experience" },
              { label: "6. Sports CSR", href: "/csr" },
              { label: "7. Sponsors & Partners", href: "/sponsors" },
              { label: "8. News & Media", href: "/news" },
              { label: "9. Registration", href: "/register" },
              { label: "10. Contact & BFI Hubs", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-xl bg-white/5 hover:bg-amber-500/20 text-xs font-bold text-white border border-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-4">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 mb-2">
              The Five Competitions
            </div>
            <div className="space-y-2">
              {FIVE_COMPETITIONS.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10"
                >
                  <img src={c.logo} alt={c.name} className="w-8 h-9 object-contain" />
                  <div>
                    <div className="text-xs font-bold text-white">{c.name}</div>
                    <div className="text-[11px] text-slate-400">{c.sub}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/aic-titans-cup/register"
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3.5 rounded-xl"
          >
            <Trophy className="w-4 h-4" />
            Register Your Institution
          </Link>
        </div>
      )}
    </header>
  );
}
