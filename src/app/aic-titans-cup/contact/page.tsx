"use client";

import React, { useState, useMemo } from "react";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { Search, Download, Sparkles, ShieldCheck, MapPin, Building2, ExternalLink } from "lucide-react";

const NRB_PROVINCIAL_BRANCH_DISTRIBUTION = [
  {
    province: "Bagmati Province",
    hqCount: "66 BFI HQs (47 KTM Valley + 19 Banepa/Chitwan/Hetauda/Nuwakot/Dhading)",
    classAbcBranches: "~2,310+ Branches (~35.4%)",
    classDMfiBranches: "~1,090+ MFI Branches",
    totalBfiBranches: "~3,400+ Branches",
    assignedHubs: "Hub 1 (Kathmandu Valley), Hub 2 (Banepa/Kavre), Hub 5 (Chitwan/Hetauda)",
    primaryCities: "Kathmandu, Lalitpur, Bhaktapur, Banepa, Bharatpur, Hetauda, Bidur, Dhading",
  },
  {
    province: "Koshi Province",
    hqCount: "8 BFI HQs (4 Class B Dev. Banks · 4 Class D MFIs)",
    classAbcBranches: "~1,010+ Branches (~15.5%)",
    classDMfiBranches: "~970+ MFI Branches",
    totalBfiBranches: "~1,980+ Branches",
    assignedHubs: "Hub 3: Koshi Eastern Regional Hub",
    primaryCities: "Biratnagar, Itahari, Dharan, Birtamod, Damak, Duhabi, Dhankuta, Diktel",
  },
  {
    province: "Lumbini Province",
    hqCount: "10 BFI HQs (2 Class B Dev. Banks · 8 Class D MFIs)",
    classAbcBranches: "~965+ Branches (~14.8%)",
    classDMfiBranches: "~1,110+ MFI Branches",
    totalBfiBranches: "~2,075+ Branches",
    assignedHubs: "Hub 7: Lumbini, Karnali & Sudurpashchim Hub",
    primaryCities: "Butwal, Siddharthanagar (Bhairahawa), Tilottama, Nepalgunj, Kohalpur, Ghorahi",
  },
  {
    province: "Gandaki Province",
    hqCount: "12 BFI HQs (1 Class B · 1 Class C · 10 Class D MFIs)",
    classAbcBranches: "~815+ Branches (~12.5%)",
    classDMfiBranches: "~620+ MFI Branches",
    totalBfiBranches: "~1,435+ Branches",
    assignedHubs: "Hub 6: Gandaki Western Regional Hub (+ Hub 5 Gaidakot)",
    primaryCities: "Pokhara, Gaidakot, Dulegaunda, Bandipur, Walling, Kushma, Baglung Bazaar",
  },
  {
    province: "Madhesh Province",
    hqCount: "8 BFI HQs (1 Class B · 2 Class C · 5 Class D MFIs)",
    classAbcBranches: "~755+ Branches (~11.6%)",
    classDMfiBranches: "~1,080+ MFI Branches",
    totalBfiBranches: "~1,835+ Branches",
    assignedHubs: "Hub 4: Madhesh Regional Hub",
    primaryCities: "Janakpurdham, Birgunj, Lahan, Rajbiraj, Golbazar, Malangawa, Dhalkebar, Simara",
  },
  {
    province: "Sudurpashchim Province",
    hqCount: "1 BFI HQ (Matribhumi Laghubitta, Dhangadhi) + All National Bank Provincial Offices",
    classAbcBranches: "~430+ Branches (~6.6%)",
    classDMfiBranches: "~390+ MFI Branches",
    totalBfiBranches: "~820+ Branches",
    assignedHubs: "Hub 7 Sub-Pod: Dhangadhi / Kohalpur Western Corridor",
    primaryCities: "Dhangadhi, Mahendranagar, Attariya, Tikapur, Dadeldhura, Dipayal",
  },
  {
    province: "Karnali Province",
    hqCount: "Provincial Branch Directorates (NIC Asia MFI Jajarkot Origin + National Bank Branches)",
    classAbcBranches: "~235+ Branches (~3.6%–4.0%)",
    classDMfiBranches: "~225+ MFI Branches",
    totalBfiBranches: "~460+ Branches",
    assignedHubs: "Hub 7 Sub-Pod: Surkhet / Kohalpur / Nepalgunj Corridor",
    primaryCities: "Birendranagar (Surkhet), Khalanga (Jajarkot), Dailekh, Jumla, Chaurjahari",
  },
];

export default function ContactAndHubsPage() {
  const { bfis, regionalHubs } = useEcosystem();
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("ALL");
  const [provinceFilter, setProvinceFilter] = useState("ALL");
  const [hubFilter, setHubFilter] = useState("ALL");

  const filtered = useMemo(() => {
    return bfis.filter((b) => {
      const matchClass = classFilter === "ALL" || b.nrbClass === classFilter;
      const matchProvince =
        provinceFilter === "ALL" || b.province.toLowerCase().includes(provinceFilter.toLowerCase());
      const matchHub =
        hubFilter === "ALL" || b.assignedHub.toLowerCase().startsWith(hubFilter.toLowerCase());
      const q = search.trim().toLowerCase();
      const matchQuery =
        !q ||
        b.id.toLowerCase().includes(q) ||
        b.name.toLowerCase().includes(q) ||
        b.headOffice.toLowerCase().includes(q) ||
        b.district.toLowerCase().includes(q) ||
        b.province.toLowerCase().includes(q) ||
        b.branchSpread.toLowerCase().includes(q) ||
        b.assignedHub.toLowerCase().includes(q) ||
        b.localCsrFocus.toLowerCase().includes(q);
      return matchClass && matchProvince && matchHub && matchQuery;
    });
  }, [bfis, classFilter, provinceFilter, hubFilter, search]);

  return (
    <div className="min-h-screen bg-[#101D32] py-14 sm:py-20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#C7F464]">
              <Sparkles className="w-4 h-4" /> NEPAL RASTRA BANK (NRB) VERIFIED CENSUS &amp; NATIONAL GEOLOCATION TRACKER
            </div>
            <h1 className="font-titan-display font-bold text-4xl sm:text-6xl text-white">
              7 Regional Hubs &amp; <span className="text-[#C7F464]">105 BFI Directory</span>
            </h1>
            <p className="text-base text-[#BFC8D3] leading-relaxed">
              Verified against <strong className="text-white">Nepal Rastra Bank (NRB) Bank &amp; Financial Institution Regulation Department</strong> statistics (<strong className="text-[#C7F464]">20 Class A · 17 Class B · 17 Class C · 51 Class D = 105 BFIs operating ~11,500+ branches across all 77 Districts</strong>). Because <strong className="text-white">58 of the 105 BFI Head Offices (55.2%)</strong> and <strong className="text-white">65% of all bank branches</strong> operate outside Kathmandu Valley, AIC Titans Cup maps every institution and provincial branch network into <strong className="text-[#C7F464]">7 Regional Tournament Hubs</strong>.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="/downloads/AIC_Titans_Cup_BFI_Location_and_Regional_Hub_Directory.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-[#FF783D] hover:bg-[#e8662c] text-white font-extrabold text-xs uppercase tracking-wider py-4 px-5 rounded-xl transition-colors text-center"
            >
              <Download className="w-4 h-4 shrink-0" /> Download 105-BFI Directory PDF
            </a>
            <a
              href="/downloads/AIC_Titans_Cup_BFI_Directory_and_Location_Tracker.xlsx"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-[#C7F464] hover:bg-[#b5e550] text-[#101D32] font-extrabold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl transition-colors text-center"
            >
              <Download className="w-4 h-4 shrink-0" /> Download Master Excel Tracker (.XLSX)
            </a>
          </div>
        </div>

        {/* NRB Official Source Verification & Telemetry Banner */}
        <section className="rounded-3xl bg-[#091220] border-2 border-[#C7F464]/40 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
                <ShieldCheck className="w-4 h-4" /> OFFICIAL NEPAL RASTRA BANK (NRB) SOURCE VERIFICATION
              </div>
              <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-white">
                Verified BFI Licensing &amp; Nationwide Branch Network Census
              </h2>
              <p className="text-xs text-[#BFC8D3]">
                Source: Nepal Rastra Bank — List of Banks and Financial Institutions (BAFIA Class A, B, C &amp; D Directory &amp; Bank Supervision Monthly Statistics, 2025/2026). Note: NRB also licenses 1 separate Infrastructure Development Bank (NIFRA) outside the A–D BAFIA classes, bringing total NRB-regulated institutions to 106.
              </p>
            </div>
            <a
              href="https://www.nrb.org.np/contents/sub-menu/bfis-list/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-[#C7F464] whitespace-nowrap self-start lg:self-center"
            >
              Verify on NRB Official Portal (nrb.org.np) <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                cls: "NRB Class A",
                title: "20 Commercial Banks",
                hqSplit: "20 Kathmandu Valley HQs (All with 7-Province Branch Networks)",
                branches: "~5,060+ Branches",
                comp: "AIC Titans Cup – Type A",
                color: "border-[#2563EB]/60 text-[#60A5FA]",
              },
              {
                cls: "NRB Class B",
                title: "17 Development Banks",
                hqSplit: "7 Kathmandu HQs (8 National) · 10 Regional HQs Outside Valley",
                branches: "~1,135+ Branches",
                comp: "AIC Titans Cup – Type B",
                color: "border-[#10B981]/60 text-[#34D399]",
              },
              {
                cls: "NRB Class C",
                title: "17 Finance Companies",
                hqSplit: "13 KTM/Lalitpur HQs · 4 Regional HQs (Pokhara, Hetauda, Janakpur, Rajbiraj)",
                branches: "~290+ Branches",
                comp: "AIC Titans Cup – Type C",
                color: "border-[#8B5CF6]/60 text-[#A78BFA]",
              },
              {
                cls: "NRB Class D",
                title: "51 Microfinance BFIs",
                hqSplit: "7 Kathmandu HQs · 44 Regional HQs Across 6 Provinces Outside Valley",
                branches: "~5,050+ Branches",
                comp: "AIC Titans Cup – Type D",
                color: "border-[#FF783D]/60 text-[#FF783D]",
              },
              {
                cls: "Total NRB Universe",
                title: "105 Licensed BFIs",
                hqSplit: "47 Kathmandu Valley HQs (44.8%) · 58 Regional HQs Outside Valley (55.2%)",
                branches: "~11,535+ Total Branches",
                comp: "7 Regional Tournament Hubs",
                color: "border-[#C7F464] text-[#C7F464]",
              },
            ].map((item) => (
              <div
                key={item.cls}
                className={`p-4 rounded-2xl bg-[#101D32] border ${item.color} space-y-2 flex flex-col justify-between`}
              >
                <div className="space-y-1">
                  <div className="font-titan-mono text-[10px] font-bold uppercase tracking-wider">
                    {item.cls}
                  </div>
                  <div className="font-titan-display font-bold text-lg text-white">{item.title}</div>
                  <div className="font-titan-mono text-sm font-bold text-[#C7F464]">{item.branches}</div>
                  <p className="text-[11px] text-[#BFC8D3] leading-snug pt-1">{item.hqSplit}</p>
                </div>
                <div className="pt-2 border-t border-white/10 text-[10px] font-bold text-white/90">
                  {item.comp}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Provincial Geographical Branch Distribution Matrix (All 7 Provinces) */}
        <section className="rounded-3xl bg-[#F7F8FA] text-[#101D32] border border-[#E2E8F0] p-6 sm:p-8 space-y-5 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FF783D]">
                <MapPin className="w-4 h-4" /> PROVINCE-BY-PROVINCE BFI BRANCH &amp; HEAD OFFICE MAPPING
              </div>
              <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-[#101D32] mt-1">
                Geographical Mapping Across All 7 Provinces of Nepal (~11,500+ Branches)
              </h2>
            </div>
            <div className="text-xs text-[#475569] font-semibold">
               Enables regional branch teams &amp; out-of-valley HQs to compete in nearby cities
            </div>
          </div>

          <div className="overflow-x-auto border border-[#CBD5E1] rounded-2xl bg-white">
            <table className="w-full text-left text-xs min-w-[920px]">
              <thead className="bg-[#101D32] text-white">
                <tr>
                  <th className="py-3.5 px-4">Province</th>
                  <th className="py-3.5 px-4">BFI Head Offices in Province</th>
                  <th className="py-3.5 px-4">Class A, B &amp; C Branches</th>
                  <th className="py-3.5 px-4">Class D MFI Branches</th>
                  <th className="py-3.5 px-4">Total Active Branches</th>
                  <th className="py-3.5 px-4">Assigned Regional Hub(s)</th>
                  <th className="py-3.5 px-4">Key Tournament &amp; Branch Cities</th>
                </tr>
              </thead>
              <tbody>
                {NRB_PROVINCIAL_BRANCH_DISTRIBUTION.map((row) => (
                  <tr key={row.province} className="border-b border-[#E2E8F0] hover:bg-[#F7F8FA]">
                    <td className="py-3 px-4 font-titan-display font-bold text-[#101D32] whitespace-nowrap">
                      {row.province}
                    </td>
                    <td className="py-3 px-4 text-[#252B35] font-medium">{row.hqCount}</td>
                    <td className="py-3 px-4 font-titan-mono font-bold text-[#2563EB]">
                      {row.classAbcBranches}
                    </td>
                    <td className="py-3 px-4 font-titan-mono font-bold text-[#FF783D]">
                      {row.classDMfiBranches}
                    </td>
                    <td className="py-3 px-4 font-titan-mono font-bold text-[#101D32]">
                      {row.totalBfiBranches}
                    </td>
                    <td className="py-3 px-4 font-bold text-[#101D32]">{row.assignedHubs}</td>
                    <td className="py-3 px-4 text-[#475569]">{row.primaryCities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 7 Regional Tournament Hubs Cards */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
                DECENTRALIZED REGIONAL QUALIFICATION ARCHITECTURE
              </div>
              <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-white mt-1">
                The 7 Regional Tournament Hubs Across Nepal
              </h2>
            </div>
            <span className="text-xs text-[#BFC8D3]">
              Click any hub below to filter the 105-BFI Directory
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regionalHubs.map((h) => {
              const isSelected = hubFilter === h.id;
              return (
                <div
                  key={h.id}
                  onClick={() => setHubFilter(isSelected ? "ALL" : h.id)}
                  className={`cursor-pointer rounded-3xl bg-[#091220] border-2 p-6 space-y-3 flex flex-col justify-between transition-all ${
                    isSelected
                      ? "border-[#C7F464] shadow-[0_0_30px_rgba(199,244,100,0.2)]"
                      : "border-[#C7F464]/25 hover:border-[#C7F464]/60"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider">
                      <span className="px-3 py-1 rounded-full bg-[#C7F464] text-[#101D32]">
                        {h.id}
                      </span>
                      <span className="text-[#C7F464]">{h.province}</span>
                    </div>
                    <h3 className="font-titan-display font-bold text-lg text-white pt-1">
                      {h.name}
                    </h3>
                    <div className="text-xs text-[#FF783D] font-bold">Cities: {h.cities}</div>
                    <div className="text-xs text-[#BFC8D3]">
                      <strong className="text-white">HQs Hosted:</strong> {h.hqsHosted} ({h.density})
                    </div>
                    <p className="text-xs text-[#BFC8D3] leading-relaxed pt-1">
                      {h.operationalPlan}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-[11px] font-bold text-[#C7F464]">
                    {isSelected ? "Showing Hub BFIs Below (Click to Reset)" : `Filter Directory by ${h.id} →`}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Searchable 105-BFI Census with Branch Footprint & Geographical Mapping */}
        <section className="rounded-3xl bg-[#F7F8FA] text-[#101D32] border border-[#E2E8F0] p-5 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#FF783D]">
                  <Building2 className="w-4 h-4" /> INTERACTIVE 105-BFI GEOLOCATION, BRANCH NETWORK &amp; CSR TRACKER
                </div>
                <h2 className="font-titan-display font-bold text-2xl text-[#101D32] mt-1">
                  Search All 105 NRB-Licensed Institutions ({filtered.length} of 105 Shown)
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 w-full lg:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-[#475569] absolute left-3.5 top-3" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search bank, district, branch spread..."
                    className="pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs text-[#101D32] w-full"
                  />
                </div>

                <select
                  value={provinceFilter}
                  onChange={(e) => setProvinceFilter(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs font-bold text-[#101D32]"
                >
                  <option value="ALL">All 7 Provinces</option>
                  <option value="Bagmati">Bagmati Province (66 HQs)</option>
                  <option value="Gandaki">Gandaki Province (12 HQs)</option>
                  <option value="Lumbini">Lumbini Province (10 HQs)</option>
                  <option value="Koshi">Koshi Province (8 HQs)</option>
                  <option value="Madhesh">Madhesh Province (8 HQs)</option>
                  <option value="Sudurpashchim">Sudurpashchim Province (1 HQ)</option>
                </select>

                <select
                  value={hubFilter}
                  onChange={(e) => setHubFilter(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs font-bold text-[#101D32]"
                >
                  <option value="ALL">All 7 Regional Hubs</option>
                  <option value="Hub 1">Hub 1: Kathmandu Valley (47 HQs)</option>
                  <option value="Hub 2">Hub 2: Banepa / Kavre &amp; Feeder (16 HQs)</option>
                  <option value="Hub 3">Hub 3: Koshi — Biratnagar/Itahari (8 HQs)</option>
                  <option value="Hub 4">Hub 4: Madhesh — Janakpur/Birgunj (8 HQs)</option>
                  <option value="Hub 5">Hub 5: Central — Chitwan/Hetauda (5 HQs)</option>
                  <option value="Hub 6">Hub 6: Gandaki — Pokhara (10 HQs)</option>
                  <option value="Hub 7">Hub 7: Lumbini &amp; West — Butwal/Kohalpur (11 HQs)</option>
                </select>
              </div>
            </div>

            {/* Class Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E2E8F0]">
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "ALL", label: "All Classes (105)" },
                  { id: "Class A", label: "Class A Commercial (20)" },
                  { id: "Class B", label: "Class B Development (17)" },
                  { id: "Class C", label: "Class C Finance (17)" },
                  { id: "Class D", label: "Class D Microfinance (51)" },
                ].map((cls) => (
                  <button
                    key={cls.id}
                    onClick={() => setClassFilter(cls.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                      classFilter === cls.id
                        ? "bg-[#101D32] text-[#C7F464] font-extrabold"
                        : "bg-white text-[#101D32] border border-[#CBD5E1] hover:bg-[#E2E8F0]"
                    }`}
                  >
                    {cls.label}
                  </button>
                ))}
              </div>

              {(classFilter !== "ALL" || provinceFilter !== "ALL" || hubFilter !== "ALL" || search) && (
                <button
                  onClick={() => {
                    setClassFilter("ALL");
                    setProvinceFilter("ALL");
                    setHubFilter("ALL");
                    setSearch("");
                  }}
                  className="text-xs font-bold text-[#FF783D] hover:underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>

          <div className="overflow-x-auto max-h-[620px] overflow-y-auto border border-[#CBD5E1] rounded-2xl bg-white">
            <table className="w-full text-left text-xs min-w-[1080px]">
              <thead className="bg-[#101D32] text-white sticky top-0 z-10">
                <tr className="border-b border-white/15">
                  <th className="py-3.5 px-3">ID</th>
                  <th className="py-3.5 px-3">Institution Name</th>
                  <th className="py-3.5 px-3">NRB Class</th>
                  <th className="py-3.5 px-3">Head Office &amp; District</th>
                  <th className="py-3.5 px-3">Province &amp; Scope</th>
                  <th className="py-3.5 px-3">Branches</th>
                  <th className="py-3.5 px-3">Geographical Branch Spread Across Nepal</th>
                  <th className="py-3.5 px-3">Assigned Regional Hub</th>
                  <th className="py-3.5 px-3">Expected Local CSR &amp; Focus</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => (
                  <tr key={b.id} className="border-b border-[#E2E8F0] hover:bg-[#F7F8FA]">
                    <td className="py-3 px-3 font-titan-mono font-bold text-[#FF783D] whitespace-nowrap">
                      {b.id}
                    </td>
                    <td className="py-3 px-3 font-bold text-[#101D32]">{b.name}</td>
                    <td className="py-3 px-3 text-[#2563EB] font-bold whitespace-nowrap">
                      {b.nrbClass}
                    </td>
                    <td className="py-3 px-3 text-[#252B35]">
                      <div className="font-semibold text-[#101D32]">{b.headOffice}</div>
                      <div className="text-[11px] text-[#475569]">District: {b.district}</div>
                    </td>
                    <td className="py-3 px-3 text-[#252B35]">
                      <div className="font-semibold text-[#101D32]">{b.province}</div>
                      <div className="text-[11px] text-[#475569]">{b.operatingScope}</div>
                    </td>
                    <td className="py-3 px-3 font-titan-mono font-bold text-[#101D32] whitespace-nowrap">
                      {b.estimatedBranches}
                    </td>
                    <td className="py-3 px-3 text-[#252B35] max-w-[240px]">
                      {b.branchSpread}
                    </td>
                    <td className="py-3 px-3 font-semibold text-[#101D32]">
                      {b.assignedHub}
                    </td>
                    <td className="py-3 px-3 text-[#252B35]">
                      <strong className="text-[#101D32] font-titan-mono block">
                        {b.expectedCsrRange}
                      </strong>
                      <span className="text-[11px] text-[#475569]">{b.localCsrFocus}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
