import React from 'react';
import type { Metadata } from 'next';
import { site, team, milestones, sdgs } from '@/data/site';
import { HeartPulse, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Coaching Staff | Sports Director Diwas Agasti | Kathmandu, Nepal',
  description:
    'Learn about Aurium Sports Pvt. Ltd.: founded by Sports Director & Owner Diwas Agasti, guided by 12+ certified coaches, UN SDG alignment, and international youth football achievements including Dana Cup Denmark.',
  alternates: {
    canonical: '/about',
  },
  keywords: [
    'About Aurium Sports',
    'Diwas Agasti',
    'Sports Director Diwas Agasti',
    'Sujal Poudel GK Coach',
    'Siddhartha Koirala Strength & Conditioning Coach',
    'Football Coaches Kathmandu',
    'Youth Sports Coaches Nepal',
    'Dana Cup Nepal',
    'Aurium Sports Vision',
  ],
  openGraph: {
    title: 'About Aurium Sports | Leadership, Team & Grassroots Vision | Kathmandu',
    description:
      'Building Nepal’s most complete youth sports ecosystem with 12+ certified coaches and sports science frameworks.',
    url: 'https://auriumsports.com/about',
    images: ['/images/hero-himalaya.jpg'],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://auriumsports.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://auriumsports.com/about',
      },
    ],
  };

  const directorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Diwas Agasti',
    jobTitle: 'Sports Director & Owner',
    worksFor: {
      '@type': 'SportsOrganization',
      name: 'Aurium Sports',
    },
    description:
      'Founder, Owner and Sports Director of Aurium Sports. Sets Aurium’s technical methodology, academy syllabus, sports science framework, and international pathway development in Nepal.',
  };

  return (
    <div className="flex flex-col w-full pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(directorSchema) }}
      />
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Our Story & Leadership</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Building Nepal’s Sports Ecosystem.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Nepal has exceptional raw sporting talent. What has been missing is a structured, long-term ecosystem where young athletes can grow physically, emotionally, and competitively.
          </p>
        </div>
      </section>

      {/* Official Registration Notice */}
      <section className="bg-gold text-ink py-4 border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-semibold gap-2">
          <span>
            Official Registration: <strong className="font-bold">{site.legalName}</strong> — Empowering grassroots youth sports development across Nepal.
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider">
            Regd. Kathmandu, Nepal
          </span>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white p-10 rounded-3xl border border-ink/10 space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-2 text-gold-deep font-mono text-xs uppercase font-bold tracking-widest">
                <Target size={16} /> Our Vision
              </div>
              <h2 className="display text-3xl sm:text-4xl uppercase tracking-tight text-ink">
                A Lifelong Pathway For Every Child.
              </h2>
              <p className="text-sm text-muted font-sans leading-relaxed">
                To build Nepal’s most complete and trusted sports ecosystem—where every child has a pathway to play, every coach has the opportunity to earn and educate, every school becomes a talent hub, and sports become a catalyst for healthier, resilient communities across Nepal.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-ink/10 space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-2 text-gold-deep font-mono text-xs uppercase font-bold tracking-widest">
                <HeartPulse size={16} /> Our Mission
              </div>
              <h2 className="display text-3xl sm:text-4xl uppercase tracking-tight text-ink">
                Sports For Mental Wellbeing & Excellence.
              </h2>
              <p className="text-sm text-muted font-sans leading-relaxed">
                To enroll sports as an educational and emotional development tool in every school, delivering systematic training, coach mentoring, international tournament exposure, and sustainable sports infrastructure while actively improving mental wellbeing in youth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Messages: Sports Director & Technical Framework */}
      <section className="py-24 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow text-gold-deep justify-center">Leadership & Vision</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
              From Kathmandu to the World Stage.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Director's Message */}
            <div className="bg-chalk p-8 sm:p-12 rounded-3xl border border-ink/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-gold-deep">
                  Director & Owner’s Address
                </span>
                <h3 className="display text-2xl sm:text-3xl uppercase tracking-tight text-ink">
                  “Sport Must Shape Character First.”
                </h3>
                <div className="text-xs sm:text-sm text-muted font-sans leading-relaxed space-y-3">
                  <p>
                    When we laid the foundations of Aurium Sports, we asked ourselves a fundamental question: What happens to the thousands of talented children who kick a ball in Nepal but never receive structured guidance, emotional backing, or a credible pathway forward?
                  </p>
                  <p>
                    Sports cannot remain a casual hobby relegated to an unstructured lunch break. It is an indispensable tool for emotional resilience, executive focus, leadership, and lifelong health. Our mission is to build international-standard grassroots training, safe sports infrastructure, and competitive exposure that elevates our youth on and off the pitch.
                  </p>
                  <p>
                    Leading our squad to Denmark for the Dana Cup—and seeing our U14 girls team battle fiercely against European powerhouses to reach the quarter-finals—showed the world that Nepali athletes belong on global stages with systematic, science-backed coaching.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-ink/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-base text-ink">Diwas Agasti</div>
                  <div className="text-xs text-gold-deep font-mono uppercase tracking-wider font-semibold">
                    Sports Director & Owner
                  </div>
                </div>
                <span className="accent font-serif italic text-gold-deep text-lg">Diwas Agasti</span>
              </div>
            </div>

            {/* Coaching & Technical Standard */}
            <div className="bg-chalk p-8 sm:p-12 rounded-3xl border border-ink/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-gold-deep">
                  Technical Standard
                </span>
                <h3 className="display text-2xl sm:text-3xl uppercase tracking-tight text-ink">
                  “Our 4 Pillars of Coaching Excellence.”
                </h3>
                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-white rounded-2xl border border-ink/5">
                    <div className="font-bold text-ink text-xs uppercase tracking-wider mb-1">
                      1. Player-First Pedagogy
                    </div>
                    <p className="text-xs text-muted font-sans leading-relaxed">
                      Every training session is designed around age-appropriate development milestones, prioritizing high touch count, game intelligence, and joyful discovery over premature pressure.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-ink/5">
                    <div className="font-bold text-ink text-xs uppercase tracking-wider mb-1">
                      2. The BUST Protocol & Injury Prevention
                    </div>
                    <p className="text-xs text-muted font-sans leading-relaxed">
                      Structured Breathing, Warm-Up, Stretching, and Training drills embedded in all 3-day weekly microcycles to safeguard growing joints and athletic durability.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-ink/5">
                    <div className="font-bold text-ink text-xs uppercase tracking-wider mb-1">
                      3. Specialized Goalkeeper & Position Academies
                    </div>
                    <p className="text-xs text-muted font-sans leading-relaxed">
                      Dedicated goalkeeper coaching led by specialist coaches alongside positional spatial awareness drills for modern multi-role players.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-ink/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-base text-ink">Aurium Technical Directorate</div>
                  <div className="text-xs text-muted font-mono uppercase tracking-wider">
                    Kathmandu Coaching Roster
                  </div>
                </div>
                <span className="accent font-serif italic text-gold-deep text-lg">Excellence</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* The Aurium Team */}
      <section className="py-24 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="eyebrow text-ink">Certified Coaching Roster</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                Our Coaching & Technical Staff.
              </h2>
            </div>
            <p className="text-muted text-xs max-w-md font-sans">
              12+ dedicated coaches and specialists led by Sports Director & Owner Diwas Agasti—guiding daily sessions across Kathmandu with sports science, character development, and athlete mental wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => {
              const isDirector = member.role.includes('Director');
              const isGK = member.role.includes('GK');
              const isSC = member.role.includes('Strength');

              return (
                <div
                  key={member.name}
                  className={`p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    isDirector
                      ? 'bg-gradient-to-b from-white to-amber-50/40 border-gold/50 shadow-md ring-1 ring-gold/20'
                      : isGK || isSC
                      ? 'bg-white border-gold/30 hover:border-gold'
                      : 'bg-white border-ink/10 hover:border-ink/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center display text-xl font-mono ${
                        isDirector ? 'bg-ink text-gold' : isGK || isSC ? 'bg-gold-deep text-white' : 'bg-ink/5 text-ink'
                      }`}>
                        {member.initials}
                      </div>
                      {isDirector && (
                        <span className="px-2.5 py-1 bg-gold/20 border border-gold text-ink font-mono text-[10px] font-bold uppercase rounded-full tracking-wider">
                          Leadership
                        </span>
                      )}
                      {isGK && (
                        <span className="px-2.5 py-1 bg-ink text-gold font-mono text-[10px] font-bold uppercase rounded-full tracking-wider">
                          GK Specialist
                        </span>
                      )}
                      {isSC && (
                        <span className="px-2.5 py-1 bg-ink text-gold font-mono text-[10px] font-bold uppercase rounded-full tracking-wider">
                          S&C Specialist
                        </span>
                      )}
                    </div>

                    <h3 className="display text-2xl uppercase tracking-tight text-ink">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep mt-1 mb-4">
                      {member.role}
                    </div>
                    <p className="text-xs text-muted font-sans leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-ink/10 flex items-center justify-between text-[10px] text-muted font-mono uppercase tracking-wider">
                    <span>Aurium Sports</span>
                    <span>Kathmandu</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-24 bg-ink text-chalk grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow text-gold justify-center">Ecosystem Evolution</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Traction & Milestones.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="display text-3xl text-gold">{m.year}</span>
                  <h4 className="display text-lg uppercase text-white mt-2 mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* UN Sustainable Development Goals */}
      <section className="py-20 bg-white text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="eyebrow text-gold-deep justify-center">Social Impact Alignment</span>
          <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink max-w-2xl mx-auto">
            Committed to the United Nations SDGs.
          </h2>
          <p className="text-muted text-xs max-w-xl mx-auto font-sans leading-relaxed">
            We measure our success not just in match trophies, but in long-term health improvements, equal gender participation, and community resilience.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
            {sdgs.map((sdg) => (
              <div key={sdg.n} className="p-5 rounded-2xl bg-chalk border border-ink/10 flex flex-col items-center justify-center text-center">
                <span className="display text-4xl text-gold-deep mb-2">SDG {sdg.n}</span>
                <span className="text-xs font-bold text-ink uppercase tracking-tight">{sdg.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
