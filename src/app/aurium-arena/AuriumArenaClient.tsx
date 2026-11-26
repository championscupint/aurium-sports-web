"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  Coffee,
  Dumbbell,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import {
  trackArenaInvestorEnquiry,
  trackFormSubmission,
  trackWhatsAppClick,
} from "@/lib/analytics";
import { site } from "@/data/site";

const PILLARS = [
  {
    number: "01",
    title: "Multi-Sport Arenas",
    subtitle: "High-utilization courts & turf",
    description:
      "All-weather futsal, football, and multi-sport surfaces engineered for year-round community leagues, academy pathways, and corporate play.",
    icon: Activity,
  },
  {
    number: "02",
    title: "Performance Gym",
    subtitle: "Strength, speed & biomechanics",
    description:
      "Sport-specific strength and conditioning zones built for youth athletes, working professionals, and competitive squads.",
    icon: Dumbbell,
  },
  {
    number: "03",
    title: "Athletic Recovery Lab",
    subtitle: "Longevity in professional careers",
    description:
      "Dedicated recovery infrastructure—cold plunge, physiotherapy, compression, mobility, and guided breathwork—helping athletes recover faster and extend peak career longevity.",
    icon: HeartPulse,
  },
  {
    number: "04",
    title: "Nutrition & Community Café",
    subtitle: "Fuel, hydration & social hub",
    description:
      "Curated post-session nutrition, recovery shakes, specialty coffee, and a welcoming lounge that turns every visit into a daily lifestyle habit.",
    icon: Coffee,
  },
];

const WHY_INVEST_POINTS = [
  {
    title: "17-Venue Nationwide Footprint",
    desc: "Phased rollout across Kathmandu Valley and major provincial hubs in Nepal, capturing underserved urban sports and wellness demand.",
  },
  {
    title: "Four-Engine Unit Economics",
    desc: "Each venue monetizes across four complementary streams—turf/court bookings, gym memberships, recovery sessions, and café hospitality.",
  },
  {
    title: "Longevity Through Recovery",
    desc: "Nepal lacks integrated athletic recovery centers. Embedding recovery inside every arena solves a critical gap for pro athletes and active citizens alike.",
  },
  {
    title: "Proven Operating Ecosystem",
    desc: "Backed by Aurium Sports and The Aurium Academy's existing coaching network, school partnerships, and tournament pipeline.",
  },
];

const INVESTMENT_MODELS = [
  "Strategic Equity / Seed Partner",
  "Single-Venue Co-Owner",
  "Multi-Venue Portfolio Investor",
  "Land / Real Estate Joint Venture",
  "Gym & Recovery Equipment Partner",
  "Café & Hospitality Partner",
];

const REGIONS = [
  "Pan-Nepal (All 17 Venues)",
  "Kathmandu Valley",
  "Pokhara / Gandaki",
  "Chitwan / Bagmati",
  "Butwal–Bhairahawa / Lumbini",
  "Biratnagar / Koshi",
  "Other Provincial Hub / Open to Recommendation",
];

const TICKET_SIZES = [
  "NPR 25 Lakhs – 50 Lakhs",
  "NPR 50 Lakhs – 1 Crore",
  "NPR 1 Crore – 5 Crore",
  "NPR 5 Crore+",
  "Land / Asset Contribution",
  "To Be Discussed",
];

export default function AuriumArenaClient() {
  const [investorType, setInvestorType] = useState<"Individual" | "Institution">("Individual");
  const [fullName, setFullName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cityOrCountry, setCityOrCountry] = useState("Kathmandu, Nepal");
  const [investmentInterest, setInvestmentInterest] = useState(INVESTMENT_MODELS[0]);
  const [preferredRegion, setPreferredRegion] = useState(REGIONS[0]);
  const [estimatedTicketSize, setEstimatedTicketSize] = useState(TICKET_SIZES[1]);
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Please provide your full name, email address, and phone number.");
      return;
    }
    if (investorType === "Institution" && !organizationName.trim()) {
      setError("Please enter your institution or organization name.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/ecosystem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "SUBMIT_ARENA_INVESTOR_ENQUIRY",
          payload: {
            investorType,
            fullName: fullName.trim(),
            organizationName: investorType === "Institution" ? organizationName.trim() : "",
            designation: investorType === "Institution" ? designation.trim() : "",
            email: email.trim(),
            phone: phone.trim(),
            cityOrCountry: cityOrCountry.trim(),
            investmentInterest,
            preferredRegion,
            estimatedTicketSize,
            message: message.trim(),
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Unable to submit your enquiry. Please try again.");
      } else {
        trackArenaInvestorEnquiry(investorType, investmentInterest);
        trackFormSubmission("aurium_arena_investor");
        setSubmittedId(data.enquiry?.id || "ARENA-RECEIVED");
      }
    } catch {
      setError("Network error while submitting your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-ink text-chalk min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,193,8,0.14),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_45%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            17 Sports Facilities Across Nepal · Open to Investors
          </div>

          <h1 className="display text-4xl sm:text-5xl md:text-7xl uppercase tracking-tight text-white max-w-4xl leading-[0.98] mb-6">
            Aurium Arena: <span className="text-gold">Sport, Gym, Recovery &amp; Café</span> Under One Roof
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-chalk/80 max-w-3xl leading-relaxed font-sans mb-10">
            Aurium Sports is establishing <strong className="text-white">17 integrated Aurium Arena facilities across Nepal</strong>—uniting championship-grade sports courts, performance gyms, dedicated athletic recovery labs, and community cafés to build an ecosystem of healthy living and <strong className="text-gold">career longevity for athletes</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#invest-form"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-widest hover:bg-chalk transition-all shadow-lg"
            >
              Express Investment Interest <ArrowRight size={15} />
            </a>
            <a
              href="#venue-ecosystem"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/25 text-chalk font-bold text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
            >
              Explore the 4-Pillar Model
            </a>
          </div>

          {/* Key Metric Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-10 border-t border-white/10">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="display text-3xl md:text-4xl text-gold">17</div>
              <div className="text-xs uppercase tracking-widest text-chalk/70 font-bold mt-1">
                Planned Arenas Across Nepal
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="display text-3xl md:text-4xl text-white">4-in-1</div>
              <div className="text-xs uppercase tracking-widest text-chalk/70 font-bold mt-1">
                Sport · Gym · Recovery · Café
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="display text-3xl md:text-4xl text-gold">Longevity</div>
              <div className="text-xs uppercase tracking-widest text-chalk/70 font-bold mt-1">
                Pro Athlete Recovery Focus
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="display text-3xl md:text-4xl text-white">Open</div>
              <div className="text-xs uppercase tracking-widest text-chalk/70 font-bold mt-1">
                Individuals &amp; Institutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Pillar Ecosystem */}
      <section id="venue-ecosystem" className="py-20 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow text-gold mb-2 block">The Venue Blueprint</span>
            <h2 className="display text-3xl md:text-5xl uppercase text-white tracking-tight">
              Four Integrated Pillars in Every Arena
            </h2>
            <p className="text-chalk/75 mt-3 text-sm md:text-base leading-relaxed">
              Every Aurium Arena is designed as a complete daily destination—driving high repeat footfall, athlete retention, and diversified revenue per square foot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="p-7 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-gold/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold text-gold tracking-widest">
                        PILLAR {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                    </div>
                    <h3 className="display text-2xl uppercase text-white mb-1">{pillar.title}</h3>
                    <p className="text-xs uppercase tracking-wider text-gold font-bold mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-sm text-chalk/75 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 md:py-24 bg-white/[0.02] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow text-gold mb-2 block">Investor Thesis</span>
            <h2 className="display text-3xl md:text-5xl uppercase text-white tracking-tight mb-4">
              Built for Sustainable Growth &amp; Athletic Longevity
            </h2>
            <p className="text-chalk/75 text-sm md:text-base leading-relaxed mb-6">
              Nepal&apos;s sports participation is surging, yet athletes and active citizens lack purpose-built venues that pair play with structured strength training, scientific recovery, and clean nutrition. Aurium Arena bridges this gap at national scale.
            </p>
            <div className="p-5 rounded-2xl bg-gold/10 border border-gold/25 text-xs text-chalk/90 leading-relaxed space-y-2">
              <div className="font-bold text-gold uppercase tracking-wider flex items-center gap-2">
                <TrendingUp size={15} /> Who Can Partner With Us?
              </div>
              <p>
                We welcome expressions of interest from <strong className="text-white">individual angel investors, diaspora investors, family offices, institutional funds, and landowners</strong> interested in single-venue co-ownership, multi-venue expansion, or strategic equity.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_INVEST_POINTS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-ink border border-white/10 space-y-2"
              >
                <div className="flex items-center gap-2 text-gold font-bold text-sm">
                  <ShieldCheck size={17} />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-chalk/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Inquiry Form */}
      <section id="invest-form" className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow text-gold mb-2 block">Investor &amp; Partner Desk</span>
            <h2 className="display text-3xl md:text-5xl uppercase text-white tracking-tight">
              Submit Your Investment Enquiry
            </h2>
            <p className="text-chalk/75 text-sm md:text-base mt-3">
              Share your profile and area of interest below. Our leadership team will contact you directly with the Aurium Arena expansion brief and arrange a private discussion.
            </p>
          </div>

          {submittedId ? (
            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.04] border border-gold/40 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="display text-3xl uppercase text-white">
                Investment Enquiry Received
              </h3>
              <p className="text-sm text-chalk/80 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Your enquiry (Reference:{" "}
                <span className="font-mono text-gold font-bold">{submittedId}</span>) has been logged and sent to our leadership team. We will contact you shortly.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedId(null);
                    setMessage("");
                  }}
                  className="px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-chalk hover:border-gold hover:text-gold transition-colors"
                >
                  Submit Another Enquiry
                </button>
                <Link
                  href="/"
                  className="px-6 py-3 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-widest hover:bg-chalk transition-colors"
                >
                  Back to Aurium Sports
                </Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/15 space-y-6"
            >
              {/* Investor Type Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gold mb-3">
                  I am enquiring as an
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInvestorType("Individual")}
                    className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                      investorType === "Individual"
                        ? "bg-gold text-ink border-gold"
                        : "bg-white/5 text-chalk/80 border-white/15 hover:border-gold/50"
                    }`}
                  >
                    <User size={16} /> Individual Investor
                  </button>
                  <button
                    type="button"
                    onClick={() => setInvestorType("Institution")}
                    className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                      investorType === "Institution"
                        ? "bg-gold text-ink border-gold"
                        : "bg-white/5 text-chalk/80 border-white/15 hover:border-gold/50"
                    }`}
                  >
                    <Building2 size={16} /> Institution / Fund
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                  />
                </div>

                {investorType === "Institution" && (
                  <>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                        Institution / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        placeholder="Company, fund, or group name"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                        Role / Designation
                      </label>
                      <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="e.g., Managing Partner, Director"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+977 98..."
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    City / Country
                  </label>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-3.5 text-gold/70" />
                    <input
                      type="text"
                      value={cityOrCountry}
                      onChange={(e) => setCityOrCountry(e.target.value)}
                      placeholder="Kathmandu, Nepal"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Partnership / Investment Model
                  </label>
                  <select
                    value={investmentInterest}
                    onChange={(e) => setInvestmentInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    {INVESTMENT_MODELS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Preferred Location / Scope
                  </label>
                  <select
                    value={preferredRegion}
                    onChange={(e) => setPreferredRegion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Indicative Investment / Contribution Range
                  </label>
                  <select
                    value={estimatedTicketSize}
                    onChange={(e) => setEstimatedTicketSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    {TICKET_SIZES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-chalk/80 mb-2">
                    Notes / Questions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your investment focus, preferred cities, land availability, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-ink border border-white/15 text-sm text-white placeholder:text-chalk/40 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-200">
                  {error}
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-chalk/60">
                  Direct desk:{" "}
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("aurium_arena_form")}
                    className="text-gold hover:underline font-semibold"
                  >
                    WhatsApp +977 9828978044
                  </a>
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-4 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-widest hover:bg-chalk transition-all disabled:opacity-60 shadow-lg"
                >
                  {submitting ? "Submitting Enquiry..." : "Submit Investment Enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
