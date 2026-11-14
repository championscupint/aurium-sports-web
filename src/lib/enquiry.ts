import { site } from "@/data/site";
import { services } from "@/data/services";

// The four kinds of enquiry the site can send.
export type EnquiryKind = "register" | "inquiry" | "apply" | "partner";

export type EnquiryContext = {
  kind: EnquiryKind;
  service?: string; // service slug
  option?: string; // offering name
};

type FieldType = "text" | "tel" | "email" | "number" | "textarea" | "select";

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  autoComplete?: string;
  half?: boolean; // render at half width on larger screens
  placeholder?: string;
};

export const kindCopy: Record<EnquiryKind, { title: string; intro: string; email: string; subject: string }> = {
  register: {
    title: "Book a Spot — Player Registration",
    intro: "Select your child's age-group programme and share their details—our coaching directorate will confirm your slot, ground timings, and trial session.",
    email: site.emails.register,
    subject: "Book a Spot · Player Registration",
  },
  inquiry: {
    title: "Send an inquiry",
    intro: "Share a few details and our team will get back to you within one working day.",
    email: site.emails.inquiry,
    subject: "Inquiry",
  },
  apply: {
    title: "Apply as a trainer",
    intro: "We're always looking for coaches who care about players as people. Tell us about yourself.",
    email: site.emails.inquiry,
    subject: "Trainer application",
  },
  partner: {
    title: "Partner with Aurium",
    intro: "Sponsors, schools, venues and investors: let's build Nepal's sports ecosystem together.",
    email: site.emails.inquiry,
    subject: "Partnership",
  },
};

const contact: Field[] = [
  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true, autoComplete: "tel", half: true, placeholder: "98XXXXXXXX" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", half: true },
];

export const fieldsByKind: Record<EnquiryKind, Field[]> = {
  register: [
    { name: "player", label: "Player's full name", type: "text", required: true, half: true },
    { name: "age", label: "Player's age (3–16)", type: "number", required: true, half: true },
    {
      name: "programme",
      label: "Preferred Programme / Pathway",
      type: "select",
      options: [
        "Little Ballers (Ages 3–5)",
        "Academy Prep (Ages 6–8)",
        "Foundation Squad (Ages 9–12)",
        "Youth Development (Ages 13–16)",
        "Goalkeeper Academy (Ages 7–16)",
        "Girls Development Programme (Ages 6–16)",
        "Elite Squad — Invite Only (Trial Request)",
        "Basketball Academy (Ages 8–16)",
        "Cricket Academy (Ages 8–16)",
        "Holiday Training Camp",
      ],
    },
    { name: "guardian", label: "Parent / guardian name", type: "text", required: true, autoComplete: "name" },
    ...contact,
    { name: "message", label: "Anything we should know?", type: "textarea", placeholder: "Preferred ground (Baneshwor, Patan Dhoka, Bhaktapur), school, or medical notes…" },
  ],
  inquiry: [
    { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name", half: true },
    { name: "organisation", label: "School / organisation", type: "text", autoComplete: "organization", half: true },
    ...contact,
    { name: "message", label: "How can we help?", type: "textarea", required: true },
  ],
  apply: [
    { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name" },
    ...contact.map((f) => (f.name === "email" ? { ...f, required: true } : f)),
    { name: "sport", label: "Sport", type: "select", required: true, half: true, options: ["Football", "Basketball", "Cricket", "Fitness / S&C", "Multiple"] },
    { name: "experience", label: "Coaching experience", type: "select", required: true, half: true, options: ["Less than 1 year", "1–3 years", "3–5 years", "5+ years"] },
    { name: "licence", label: "Licences & certifications", type: "text", placeholder: "e.g. AFC C, ANFA grassroots, first aid" },
    { name: "message", label: "Why Aurium?", type: "textarea", required: true },
  ],
  partner: [
    { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name", half: true },
    { name: "organisation", label: "Organisation", type: "text", required: true, autoComplete: "organization", half: true },
    ...contact,
    { name: "interest", label: "Partnership interest", type: "select", required: true, options: ["Sponsorship", "School partnership", "Venue partnership", "Investment", "Media", "Other"] },
    { name: "message", label: "Tell us more", type: "textarea" },
  ],
};

export const serviceName = (slug?: string) => services.find((s) => s.slug === slug)?.name;

// Turns the form data into a readable plain-text message.
export function buildMessage(ctx: EnquiryContext, data: Record<string, string>): string {
  const copy = kindCopy[ctx.kind];
  const lines = [`*Aurium Sports | ${copy.subject}*`];
  const svc = serviceName(ctx.service);
  if (svc) lines.push(`Service: ${svc}`);
  if (ctx.option) lines.push(`Option: ${ctx.option}`);
  lines.push("");
  for (const field of fieldsByKind[ctx.kind]) {
    const value = data[field.name]?.trim();
    if (value) lines.push(`${field.label}: ${value}`);
  }
  return lines.join("\n");
}

export const whatsappUrl = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export function mailtoUrl(ctx: EnquiryContext, text: string) {
  const copy = kindCopy[ctx.kind];
  const subject = [copy.subject, serviceName(ctx.service), ctx.option].filter(Boolean).join(" · ");
  return `mailto:${copy.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text.replace(/\*/g, ""))}`;
}
