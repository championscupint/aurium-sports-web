'use client';

import React, { useState } from 'react';
import { site } from '@/data/site';
import { buildMessage, whatsappUrl, mailtoUrl } from '@/lib/enquiry';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const context = { kind: 'inquiry' as const };
  const formattedMsg = buildMessage(context, formData);
  const waLink = whatsappUrl(formattedMsg);
  const emailLink = mailtoUrl(context, formattedMsg);

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Get In Touch</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Contact & Academy Office.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Have questions about academy admissions, school sports partnerships, tournament registrations, or turf quotations? We are here to help.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Kathmandu Office */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="eyebrow text-gold-deep">Headquarters</span>
                <h2 className="display text-3xl sm:text-4xl uppercase tracking-tight text-ink mt-2">
                  Kathmandu Office.
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white rounded-3xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-chalk-2 flex items-center justify-center text-gold-deep shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="display text-lg uppercase text-ink">Physical Address</h3>
                    <p className="text-xs text-muted font-sans leading-relaxed mt-1">
                      {site.address}
                    </p>
                    <span className="text-[11px] text-gold-deep font-semibold block mt-1">
                      Near Baneshwor Height Water Tank
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-chalk-2 flex items-center justify-center text-gold-deep shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="display text-lg uppercase text-ink">Direct Helplines</h3>
                    <p className="text-xs text-muted font-sans leading-relaxed mt-1">
                      {site.phones.join('  •  ')}
                    </p>
                    <span className="text-[11px] text-muted block mt-1">
                      Available Sunday – Friday (7:00 AM – 6:00 PM)
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-chalk-2 flex items-center justify-center text-gold-deep shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="display text-lg uppercase text-ink">Email Inquiries</h3>
                    <div className="text-xs text-muted font-sans space-y-1 mt-1">
                      <p>Registrations: <strong className="text-ink">{site.emails.register}</strong></p>
                      <p>Partnerships & General: <strong className="text-ink">{site.emails.inquiry}</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Box */}
              <div className="p-6 bg-ink text-chalk rounded-3xl border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-gold">Instant WhatsApp Support</div>
                    <div className="text-sm font-bold text-white">Chat with Our Coordinators</div>
                  </div>
                </div>
                <p className="text-xs text-chalk/70 leading-relaxed font-sans">
                  Need quick confirmation on training schedules, ground fees, or trial dates? Message us directly on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Aurium Sports, I have an inquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider text-center rounded-full transition-colors shadow-md"
                >
                  Open WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-ink/10 shadow-lg space-y-6">
                <div>
                  <h3 className="display text-3xl uppercase tracking-tight text-ink">
                    Send an Official Inquiry
                  </h3>
                  <p className="text-xs text-muted font-sans mt-1">
                    Fill out your message below to send directly to our coordinators.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="field">
                      <label htmlFor="contact-name">Your Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Diwas / Parent / Principal"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="contact-org">School / Organisation</label>
                      <input
                        id="contact-org"
                        name="organisation"
                        type="text"
                        placeholder="e.g. School name or Independent"
                        value={formData.organisation}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="field">
                      <label htmlFor="contact-phone">Phone / WhatsApp *</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="98XXXXXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="contact-message">How can we help? *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Please share details about your player, school, or event..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="pt-4 border-t border-ink/10 space-y-3">
                    <p className="text-xs text-muted">
                      Dispatch your message via your preferred channel:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-all shadow-md"
                      >
                        <MessageCircle size={18} /> Send via WhatsApp
                      </a>

                      <a
                        href={emailLink}
                        className="flex items-center justify-center gap-2 bg-ink hover:bg-gold hover:text-ink text-chalk font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-all shadow-md"
                      >
                        <Mail size={18} /> Send via Email
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
