"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Download, ShieldCheck, Trophy } from "lucide-react";

export function Footer({ basePath = "" }: { basePath?: string }) {
  const resolveHref = (h: string) => {
    if (!basePath) return h;
    return h === "/" ? basePath : `${basePath}${h}`;
  };

  return (
    <footer className="bg-[#091220] border-t border-[#BFC8D3]/20 text-[#BFC8D3] pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Arena CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#101D32] via-[#162642] to-[#101D32] border border-[#C7F464]/35 p-6 sm:p-10 mb-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="font-titan-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C7F464]">
              THE TITANS ARENA · WHERE BANKERS BECOME CHAMPIONS
            </div>
            <h3 className="font-titan-display font-extrabold text-2xl sm:text-3xl text-[#F7F8FA]">
              YOUR INSTITUTION. YOUR TEAM. YOUR TITAN STORY.
            </h3>
            <p className="text-sm text-[#BFC8D3] leading-relaxed">
              Step away from targets, audits, and deadlines. Enter your Gentlemen (NPR 25,000) and promotional Ladies (NPR 15,000) squads across our 7 Regional Hubs and champion local grassroots girls football &amp; licensed coach employment.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href={resolveHref("/register")}
              className="bg-[#FF783D] hover:bg-[#FF5E1A] text-white font-titan-display font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg transition-all"
            >
              Register Your Institution
            </Link>
            <Link
              href={resolveHref("/sponsors")}
              className="bg-[#C7F464] hover:bg-[#b5e550] text-[#101D32] font-titan-display font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all"
            >
              Partner / Sponsor
            </Link>
          </div>
        </div>

        {/* 5-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#BFC8D3]/15">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/logos/parent-crest.svg"
                alt="AIC Titans Cup"
                width={52}
                height={58}
                className="w-[52px] h-[58px] object-contain shrink-0"
              />
              <div>
                <div className="font-titan-display font-extrabold text-xl text-[#F7F8FA]">
                  AIC TITANS CUP
                </div>
                <div className="font-titan-mono text-xs font-bold text-[#C7F464] tracking-wider uppercase">
                  WHERE BANKERS BECOME TITANS
                </div>
                <div className="text-xs text-[#BFC8D3] mt-0.5">
                  Organised by Aurium Sports – The Aurium Academy Pvt. Ltd.
                </div>
              </div>
            </div>
            <p className="text-xs text-[#BFC8D3] leading-relaxed max-w-md">
              Nepal&apos;s official banking and financial services football &amp; futsal ecosystem uniting all 105 NRB-licensed Class A, B, C, and D institutions across four qualifying championships and the fifth league-cum-knockout championship:{" "}
              <strong className="text-[#F7F8FA]">Clash of the Titans – The Bankers Championship</strong>.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="/downloads/AIC_Titans_Cup_Official_Tournament_Handbook.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#101D32] hover:bg-[#162642] border border-[#BFC8D3]/25 text-[#C7F464] px-3.5 py-2 rounded-lg"
              >
                <Download className="w-3.5 h-3.5 shrink-0" /> Master Handbook PDF
              </a>
              <a
                href="/downloads/AIC_Titans_Cup_Sponsorship_and_Partnership_Proposal.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#101D32] hover:bg-[#162642] border border-[#BFC8D3]/25 text-[#C7F464] px-3.5 py-2 rounded-lg"
              >
                <Download className="w-3.5 h-3.5 shrink-0" /> Sponsorship Prospectus PDF
              </a>
              <a
                href="/downloads/AIC_Titans_Cup_National_CSR_Manifesto_and_Implementation_Plan.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#101D32] hover:bg-[#162642] border border-[#BFC8D3]/25 text-[#F7F8FA] px-3.5 py-2 rounded-lg"
              >
                <Download className="w-3.5 h-3.5 shrink-0" /> National CSR Manifesto PDF
              </a>
              <a
                href="/downloads/AIC_Titans_Cup_BFI_Location_and_Regional_Hub_Directory.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#101D32] hover:bg-[#162642] border border-[#BFC8D3]/25 text-[#F7F8FA] px-3.5 py-2 rounded-lg"
              >
                <Download className="w-3.5 h-3.5 shrink-0" /> 105 BFI &amp; 7 Hubs PDF
              </a>
            </div>
          </div>

          <div>
            <div className="font-titan-mono text-xs font-bold uppercase tracking-wider text-[#C7F464] mb-4">
              The 5 Competitions
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href={resolveHref("/competitions/type-a")} className="hover:text-[#C7F464] transition-colors">
                  1. AIC Titans Cup – Type A (Commercial)
                </Link>
              </li>
              <li>
                <Link href={resolveHref("/competitions/type-b")} className="hover:text-[#C7F464] transition-colors">
                  2. AIC Titans Cup – Type B (Development)
                </Link>
              </li>
              <li>
                <Link href={resolveHref("/competitions/type-c")} className="hover:text-[#C7F464] transition-colors">
                  3. AIC Titans Cup – Type C (Finance Cos.)
                </Link>
              </li>
              <li>
                <Link href={resolveHref("/competitions/type-d")} className="hover:text-[#C7F464] transition-colors">
                  4. AIC Titans Cup – Type D (Microfinance)
                </Link>
              </li>
              <li>
                <Link
                  href={resolveHref("/competitions/clash-of-the-titans")}
                  className="text-[#C7F464] font-bold hover:underline transition-colors"
                >
                  5. Clash of the Titans (Championship)
                </Link>
              </li>
              <li>
                <Link
                  href={resolveHref("/road-to-the-clash")}
                  className="text-[#FF783D] hover:underline font-semibold"
                >
                  Interactive Road to the Clash &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-titan-mono text-xs font-bold uppercase tracking-wider text-[#C7F464] mb-4">
              Arena &amp; Governance
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href={resolveHref("/about")} className="hover:text-[#C7F464] transition-colors">
                  About &amp; 7m/10m Match Clock
                </Link>
              </li>
              <li>
                <Link href={resolveHref("/experience")} className="hover:text-[#C7F464] transition-colors">
                  Bankers&apos; Experience (Holiday Reset)
                </Link>
              </li>
              <li>
                <Link href={resolveHref("/csr")} className="hover:text-[#C7F464] transition-colors">
                  Sports CSR &amp; Local Coach Jobs
                </Link>
              </li>
              <li>
                <Link href={resolveHref("/sponsors")} className="hover:text-[#C7F464] transition-colors">
                  2-Level Sponsorship Ecosystem
                </Link>
              </li>
              <li>
                <Link href={resolveHref("/news")} className="hover:text-[#C7F464] transition-colors">
                  News, Media &amp; Press Center
                </Link>
              </li>
              <li>
                <Link href={resolveHref("/contact")} className="hover:text-[#C7F464] transition-colors">
                  105 BFI Geolocation &amp; 7 Regional Hubs
                </Link>
              </li>
              <li>
                <Link href={resolveHref("/admin")} className="text-[#C7F464] hover:underline transition-colors">
                  Tournament Directorate Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-titan-mono text-xs font-bold uppercase tracking-wider text-[#C7F464] mb-4">
              Parent &amp; Sister Properties
            </div>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://www.auriumsports.com"
                  className="inline-flex items-center gap-1 text-[#F7F8FA] font-semibold hover:text-[#C7F464]"
                >
                  Aurium Sports Main Portal <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-[#BFC8D3]/70">Organiser · www.auriumsports.com</p>
              </li>
              <li>
                <a
                  href="https://www.auriumsports.com/tournaments"
                  className="inline-flex items-center gap-1 text-[#F7F8FA] font-semibold hover:text-[#C7F464]"
                >
                  Aurium Tournaments Directory <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-[#BFC8D3]/70">Live, Upcoming &amp; Corporate Events</p>
              </li>
              <li>
                <a
                  href="https://nepalyouthcup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C7F464] font-semibold hover:underline"
                >
                  Nepal Youth Cup (9–10 Jan 2027) <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-[#BFC8D3]/70">Galaxy Public School · U12 &amp; U14 Futsal</p>
              </li>
              <li>
                <a
                  href="/api/public/summary"
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[#BFC8D3] hover:text-white"
                >
                  Read-Only Master JSON API <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Integrity Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#BFC8D3]/70">
          <div>
            © {new Date().getFullYear()} AIC Titans Cup · Organised by Aurium Sports (The Aurium Academy Pvt. Ltd.). Official Domain:{" "}
            <span className="text-[#F7F8FA] font-semibold">https://aictitanscup.auriumsports.com</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#BFC8D3]">
            <ShieldCheck className="w-4 h-4 text-[#C7F464] shrink-0" />
            <span>
              Zero-Fabrication Governance: Only admin-verified results, qualifiers &amp; CSR audits are published.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
