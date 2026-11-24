"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Trophy,
  ArrowUpRight,
  Lock,
  Sparkles,
} from "lucide-react";

const FIVE_COMPETITIONS = [
  {
    name: "AIC Titans Cup – Type A",
    sub: "20 Class A Commercial Banks · Shrawan",
    href: "/competitions/type-a",
    badge: "NRB Class A",
    badgeBg: "bg-[#2563EB] text-white",
    logo: "/logos/type-a-crest.svg",
  },
  {
    name: "AIC Titans Cup – Type B",
    sub: "17 Class B Development Banks · Shrawan",
    href: "/competitions/type-b",
    badge: "NRB Class B",
    badgeBg: "bg-[#10B981] text-slate-950 font-extrabold",
    logo: "/logos/type-b-crest.svg",
  },
  {
    name: "AIC Titans Cup – Type C",
    sub: "17 Class C Finance Companies · Kartik",
    href: "/competitions/type-c",
    badge: "NRB Class C",
    badgeBg: "bg-[#8B5CF6] text-white",
    logo: "/logos/type-c-crest.svg",
  },
  {
    name: "AIC Titans Cup – Type D",
    sub: "51 Class D Microfinance (7 Hubs) · Kartik",
    href: "/competitions/type-d",
    badge: "NRB Class D",
    badgeBg: "bg-[#FF783D] text-white",
    logo: "/logos/type-d-crest.svg",
  },
  {
    name: "Clash of the Titans",
    sub: "The Bankers Championship (8 Qualifiers) · Magh",
    href: "/competitions/clash-of-the-titans",
    badge: "5th Competition",
    badgeBg: "bg-[#C7F464] text-[#101D32] font-black",
    logo: "/logos/clash-crest.svg",
    isClash: true,
  },
];

const CENTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Competitions", href: "/competitions", hasDropdown: true },
  { label: "Road to the Clash", href: "/road-to-the-clash" },
  { label: "Bankers' Experience", href: "/experience" },
  { label: "Sports CSR", href: "/csr" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "News & Media", href: "/news" },
];

export function Navbar({ basePath = "" }: { basePath?: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [compDropdown, setCompDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const resolveHref = (h: string) => {
    if (!basePath) return h;
    return h === "/" ? basePath : `${basePath}${h}`;
  };

  const isActive = (h: string) => {
    const full = resolveHref(h);
    if (h === "/") {
      return pathname === full || pathname === `${basePath}/`;
    }
    return pathname === full || pathname?.startsWith(`${full}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setCompDropdown(false);
  }

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#101D32]/98 backdrop-blur-xl shadow-[0_10px_30px_rgba(9,18,32,0.45)] border-b border-[#BFC8D3]/15"
          : "bg-[#101D32] border-b border-[#BFC8D3]/15"
      }`}
    >
      {/* Slim Top Ecosystem Ribbon (Clean, Uncluttered) */}
      <div className="bg-[#091220] border-b border-[#BFC8D3]/10 text-xs text-[#BFC8D3] py-2 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C7F464]" />
            <span className="font-titan-mono text-[11px] font-semibold tracking-wider uppercase text-[#F7F8FA]">
              THE TITANS ARENA
            </span>
            <span className="hidden md:inline text-[#BFC8D3]/40">|</span>
            <span className="hidden md:inline text-[11px] text-[#BFC8D3]">
              Organised by Aurium Sports · 5 Competitions · 105 NRB-Licensed BFIs · 7 Regional Hubs
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://www.auriumsports.com/tournaments"
              className="text-[#BFC8D3] hover:text-[#C7F464] transition-colors inline-flex items-center gap-1 font-medium"
            >
              Aurium Sports <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-[#BFC8D3]/30">·</span>
            <a
              href="https://nepalyouthcup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BFC8D3] hover:text-[#C7F464] transition-colors inline-flex items-center gap-1 font-medium"
            >
              Nepal Youth Cup <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-[#BFC8D3]/30">·</span>
            <Link
              href={resolveHref("/admin")}
              className="text-[#C7F464] hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <Lock className="w-3 h-3" /> Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Header Bar (Spacious 84px height, generous breathing room) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[84px] flex items-center justify-between gap-4">
        {/* LEFT SECTION: AIC Titans Cup Logo with Breathing Room & True Proportions */}
        <Link
          href={resolveHref("/")}
          className="flex items-center gap-3.5 shrink-0 py-2 pr-3 group"
        >
          <img
            src="/logos/parent-crest.svg"
            alt="AIC Titans Cup Official Crest"
            width={46}
            height={52}
            className="w-[46px] h-[52px] object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-titan-display font-bold text-lg sm:text-xl tracking-tight text-[#F7F8FA] leading-none">
              AIC TITANS CUP
            </span>
            <span className="font-titan-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F464] uppercase mt-1.5 leading-none">
              THE BANKERS CHAMPIONSHIP
            </span>
          </div>
        </Link>

        {/* CENTRE SECTION: 8 Balanced Navigation Items (Shown on 1280px+ xl screens so labels NEVER squeeze) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center justify-center gap-1 2xl:gap-2"
        >
          {CENTER_LINKS.map((item) => {
            const active = isActive(item.href);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setCompDropdown(true)}
                  onMouseLeave={() => setCompDropdown(false)}
                >
                  <Link
                    href={resolveHref(item.href)}
                    className={`px-3.5 py-2.5 rounded-xl text-[13.5px] font-semibold whitespace-nowrap inline-flex items-center gap-1.5 transition-all ${
                      active
                        ? "text-[#101D32] bg-[#C7F464] font-bold shadow-sm"
                        : "text-[#F7F8FA] hover:text-[#C7F464] hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                  </Link>

                  {compDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[460px] pt-3 z-50">
                      <div className="bg-[#101D32] border border-[#BFC8D3]/25 rounded-2xl shadow-2xl p-4 space-y-2">
                        <div className="flex items-center justify-between px-2 pb-2 border-b border-[#BFC8D3]/15">
                          <span className="font-titan-mono text-[11px] font-bold uppercase tracking-wider text-[#C7F464]">
                            5 Separate Competitions
                          </span>
                          <Link
                            href={resolveHref("/competitions")}
                            className="text-xs font-semibold text-[#F7F8FA] hover:text-[#C7F464] underline"
                          >
                            Compare All 5 &rarr;
                          </Link>
                        </div>

                        {FIVE_COMPETITIONS.map((c) => (
                          <Link
                            key={c.href}
                            href={resolveHref(c.href)}
                            className={`flex items-center gap-3.5 p-2.5 rounded-xl transition-all ${
                              c.isClash
                                ? "bg-[#162642] border border-[#C7F464]/50 hover:border-[#C7F464]"
                                : "hover:bg-white/5 border border-transparent"
                            }`}
                          >
                            <img
                              src={c.logo}
                              alt={c.name}
                              width={38}
                              height={42}
                              className="w-[38px] h-[42px] object-contain shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-titan-display font-bold text-sm text-[#F7F8FA] truncate">
                                  {c.name}
                                </span>
                                <span
                                  className={`text-[10px] px-2.5 py-0.5 rounded-full uppercase shrink-0 ${c.badgeBg}`}
                                >
                                  {c.badge}
                                </span>
                              </div>
                              <p className="text-xs text-[#BFC8D3] truncate mt-0.5">{c.sub}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={resolveHref(item.href)}
                className={`px-3.5 py-2.5 rounded-xl text-[13.5px] font-semibold whitespace-nowrap transition-all ${
                  active
                    ? "text-[#101D32] bg-[#C7F464] font-bold shadow-sm"
                    : "text-[#F7F8FA] hover:text-[#C7F464] hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SECTION: Contact Link + Prominent Registration CTA + Responsive Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={resolveHref("/contact")}
            className={`hidden 2xl:inline-flex px-3.5 py-2.5 rounded-xl text-[13.5px] font-semibold whitespace-nowrap transition-colors ${
              isActive("/contact")
                ? "text-[#C7F464] underline"
                : "text-[#BFC8D3] hover:text-[#F7F8FA]"
            }`}
          >
            Contact
          </Link>

          <Link
            href={resolveHref("/register")}
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#FF783D] hover:bg-[#FF5E1A] text-white font-titan-display font-bold text-xs sm:text-[13px] uppercase tracking-wider px-5 py-3 rounded-xl shadow-[0_6px_20px_rgba(255,120,61,0.35)] transition-all whitespace-nowrap"
          >
            <Trophy className="w-4 h-4 shrink-0" />
            <span>Register Institution</span>
          </Link>

          {/* Clean Hamburger Trigger for <1280px (Tablets, Small Laptops & Mobile — before any squeezing occurs) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle Navigation Menu"
            className="xl:hidden inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#162642] border border-[#BFC8D3]/25 text-[#F7F8FA] hover:border-[#C7F464] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
              Menu
            </span>
          </button>
        </div>
      </div>

      {/* RESPONSIVE COLLAPSIBLE DRAWER (Mobile, Tablet & Compact Laptop <1280px) */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#091220] border-t border-[#BFC8D3]/20 px-4 sm:px-8 py-6 max-h-[calc(100vh-110px)] overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Primary Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[...CENTER_LINKS, { label: "Contact & 105 BFI Hubs", href: "/contact" }].map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={resolveHref(item.href)}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all ${
                      active
                        ? "bg-[#C7F464] text-[#101D32]"
                        : "bg-[#101D32] text-[#F7F8FA] hover:bg-[#162642] border border-[#BFC8D3]/15"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs opacity-60">&rarr;</span>
                  </Link>
                );
              })}
            </div>

            {/* Five Competitions Quick-Jump Grid */}
            <div className="pt-4 border-t border-[#BFC8D3]/15 space-y-3">
              <div className="font-titan-mono text-xs font-bold uppercase tracking-wider text-[#C7F464]">
                The Five Competitions
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FIVE_COMPETITIONS.map((c) => (
                  <Link
                    key={c.href}
                    href={resolveHref(c.href)}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl border ${
                      c.isClash
                        ? "bg-[#162642] border-[#C7F464]/60 sm:col-span-2"
                        : "bg-[#101D32] border-[#BFC8D3]/15"
                    }`}
                  >
                    <img
                      src={c.logo}
                      alt={c.name}
                      width={36}
                      height={40}
                      className="w-9 h-10 object-contain shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-titan-display font-bold text-sm text-[#F7F8FA] truncate">
                        {c.name}
                      </div>
                      <div className="text-xs text-[#BFC8D3] truncate">{c.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Prominent Mobile Registration CTA */}
            <div className="pt-2">
              <Link
                href={resolveHref("/register")}
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#FF783D] hover:bg-[#FF5E1A] text-white font-titan-display font-bold text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg"
              >
                <Trophy className="w-4 h-4 shrink-0" />
                <span>Register Your Institution</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
