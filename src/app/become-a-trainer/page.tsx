'use client';

import React, { useState } from 'react';
import { site } from '@/data/site';
import { buildMessage, whatsappUrl, mailtoUrl } from '@/lib/enquiry';
import { Award, HeartHandshake, CheckCircle2, MessageCircle, Mail } from 'lucide-react';

export default function BecomeATrainerPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sport: 'Football',
    experience: '1–3 years',
    licence: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const context = { kind: 'apply' as const };
  const formattedMsg = buildMessage(context, formData);
  const waLink = whatsappUrl(formattedMsg);
  const emailLink = mailtoUrl(context, formattedMsg);

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Coaching Directorate</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Become an Aurium Trainer.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            We are looking for passionate, growth-minded coaches who understand that developing a young athlete’s character and emotional wellbeing is just as important as tactics.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: What We Offer */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="eyebrow text-gold-deep">Join Our Coaching Staff</span>
                <h2 className="display text-3xl sm:text-4xl uppercase tracking-tight text-ink mt-2">
                  Why Coach With Aurium?
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-ink text-sm">
                    <Award className="text-gold-deep" size={18} />
                    <span>Continuous Coach Education</span>
                  </div>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    Gain access to international coaching curricula (FIFA, NSCCA, and ICSSPE modules) and mentorship under Sports Director & Owner Diwas Agasti.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-ink text-sm">
                    <HeartHandshake className="text-gold-deep" size={18} />
                    <span>Sports for Mental Health Training</span>
                  </div>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    Learn how to mentor young players through emotional setbacks, manage game pressure, and become a supportive sports psychologist on the pitch.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-ink text-sm">
                    <CheckCircle2 className="text-gold-deep" size={18} />
                    <span>Competitive Compensation & Tours</span>
                  </div>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    Structured salaries across academy clusters and school programs, plus opportunities to travel as coaching staff on international tournament tours.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-ink text-chalk rounded-2xl space-y-2">
                <div className="text-xs font-mono uppercase text-gold font-bold">Direct HR Inquiries</div>
                <div className="text-sm font-sans">{site.phones[0]} • {site.emails.inquiry}</div>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-ink/10 shadow-lg space-y-6">
                <div>
                  <h3 className="display text-3xl uppercase tracking-tight text-ink">
                    Trainer Application Form
                  </h3>
                  <p className="text-xs text-muted font-sans mt-1">
                    Fill out your details below to submit your coaching profile directly to our technical directors.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="field">
                    <label htmlFor="trainer-name">Full Name *</label>
                    <input
                      id="trainer-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Roshan Shrestha"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="field">
                      <label htmlFor="trainer-phone">Phone / WhatsApp *</label>
                      <input
                        id="trainer-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="98XXXXXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="trainer-email">Email Address *</label>
                      <input
                        id="trainer-email"
                        name="email"
                        type="email"
                        required
                        placeholder="coach@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="field">
                      <label htmlFor="trainer-sport">Primary Sport</label>
                      <select
                        id="trainer-sport"
                        name="sport"
                        value={formData.sport}
                        onChange={handleInputChange}
                      >
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Strength & Conditioning">Strength & Conditioning</option>
                        <option value="Multiple Sports">Multiple Sports</option>
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="trainer-exp">Coaching Experience</label>
                      <select
                        id="trainer-exp"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                      >
                        <option value="Less than 1 year">Less than 1 year / Beginner</option>
                        <option value="1–3 years">1–3 years</option>
                        <option value="3–5 years">3–5 years</option>
                        <option value="5+ years">5+ years senior coach</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="trainer-licence">Certificates & Licences</label>
                    <input
                      id="trainer-licence"
                      name="licence"
                      type="text"
                      placeholder="e.g. AFC C, ANFA Grassroots, First Aid, B.P.Ed"
                      value={formData.licence}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="trainer-msg">Why do you want to join Aurium?</label>
                    <textarea
                      id="trainer-msg"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your coaching philosophy and what age groups you enjoy coaching..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="pt-4 border-t border-ink/10 space-y-3">
                    <p className="text-xs text-muted">
                      Submit your application instantly via WhatsApp or Email:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-all shadow-md"
                      >
                        <MessageCircle size={18} /> Apply via WhatsApp
                      </a>

                      <a
                        href={emailLink}
                        className="flex items-center justify-center gap-2 bg-ink hover:bg-gold hover:text-ink text-chalk font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-all shadow-md"
                      >
                        <Mail size={18} /> Apply via Email
                      </a>
                    </div>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
