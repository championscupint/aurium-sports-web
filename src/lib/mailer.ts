import nodemailer from "nodemailer";
import { ArenaInvestorEnquiry, RegistrationApplication, SponsorEnquiry } from "@/types/ecosystem";

const GMAIL_USER = process.env.GMAIL_USER || "auriumsports@gmail.com";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || "";
const ADMIN_NOTIFY_EMAIL = process.env.ADMIN_NOTIFY_EMAIL || "auriumsports@gmail.com";

function getTransporter() {
  if (!GMAIL_APP_PASSWORD) {
    return null;
  }
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });
}

export async function sendRegistrationAlertEmail(
  reg: RegistrationApplication
): Promise<{ sent: boolean; error?: string }> {
  const transporter = getTransporter();
  if (!transporter) {
    return { sent: false, error: "GMAIL_APP_PASSWORD not configured" };
  }

  try {
    await transporter.sendMail({
      from: `"AIC Titans Cup Portal" <${GMAIL_USER}>`,
      to: ADMIN_NOTIFY_EMAIL,
      replyTo: reg.officialEmail,
      subject: `[NEW BFI REGISTRATION] ${reg.institutionName} (${reg.nrbClass}) — ${reg.competitionSlug.toUpperCase()}`,
      text: [
        "NEW INSTITUTIONAL REGISTRATION SUBMITTED ON AIC TITANS CUP PORTAL",
        "================================================================",
        `Registration ID: ${reg.id}`,
        `Submitted At: ${reg.createdAt}`,
        `Competition: ${reg.competitionSlug.toUpperCase()}`,
        `Institution: ${reg.institutionName} (${reg.institutionId} · ${reg.nrbClass})`,
        `Head Office: ${reg.headOfficeCity}`,
        `Divisions Entered: ${reg.divisionsEntered.join(" & ")}`,
        `Calculated Entry Fee: NPR ${reg.calculatedEntryFeeNpr.toLocaleString()}`,
        `Refundable Discipline Deposit: NPR ${reg.refundableDepositNpr.toLocaleString()}`,
        `Preferred Regional Hub: ${reg.preferredRegionalHub}`,
        `Local CSR Range: ${reg.csrPledgeRangeNpr}`,
        `Local CSR District: ${reg.csrPreferredDistrict}`,
        "",
        "AUTHORIZED CONTACTS:",
        `- HR Representative: ${reg.authorizedHrRepName} (${reg.authorizedHrRepTitle})`,
        `- Team Manager: ${reg.teamManagerName} (${reg.teamManagerPhone})`,
        `- Official Email: ${reg.officialEmail}`,
        `- Coach: ${reg.coachName}`,
        `- 90-Day Payroll Confirmed: ${reg.payrollComplianceConfirmed ? "YES" : "NO"}`,
        `- Roster Summary: ${reg.rosterSummary}`,
        "",
        "Review & approve in Admin Control Center: https://www.auriumsports.com/aic-titans-cup/admin",
      ].join("\n"),
    });

    if (reg.officialEmail && reg.officialEmail.includes("@")) {
      await transporter.sendMail({
        from: `"Tournament Directorate — AIC Titans Cup" <${GMAIL_USER}>`,
        to: reg.officialEmail,
        subject: `Registration Received: ${reg.institutionName} — AIC Titans Cup (${reg.id})`,
        text: [
          `Dear ${reg.authorizedHrRepName || "HR & Sports Committee"},`,
          "",
          `Thank you for submitting the institutional registration for ${reg.institutionName} in ${reg.competitionSlug.toUpperCase()} (${reg.divisionsEntered.join(" & ")}).`,
          "",
          `Reference ID: ${reg.id}`,
          `Assigned Regional Hub: ${reg.preferredRegionalHub}`,
          `Total Entry Fee: NPR ${reg.calculatedEntryFeeNpr.toLocaleString()} (+ NPR ${reg.refundableDepositNpr.toLocaleString()} refundable deposit)`,
          "",
          "Our Tournament Directorate will verify your 90-day HR payroll confirmation and follow up with official onboarding and Local CSR Fellowship details.",
          "",
          "Explore full tournament rules & handbooks: https://www.auriumsports.com/aic-titans-cup",
          "",
          "Warm regards,",
          "Tournament Directorate — AIC Titans Cup",
          "Aurium Sports (The Aurium Academy Pvt. Ltd.)",
          "Phone: +977-9828978044",
        ].join("\n"),
      });
    }

    return { sent: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Email send failed";
    console.warn("Registration email notification error:", msg);
    return { sent: false, error: msg };
  }
}

export async function sendSponsorEnquiryAlertEmail(
  enq: SponsorEnquiry
): Promise<{ sent: boolean; error?: string }> {
  const transporter = getTransporter();
  if (!transporter) {
    return { sent: false, error: "GMAIL_APP_PASSWORD not configured" };
  }

  try {
    await transporter.sendMail({
      from: `"AIC Titans Cup Commercial Desk" <${GMAIL_USER}>`,
      to: ADMIN_NOTIFY_EMAIL,
      replyTo: enq.email,
      subject: `[NEW SPONSOR / CSR ENQUIRY] ${enq.organizationName} — ${enq.interestedLevel}`,
      text: [
        "NEW SPONSORSHIP / CSR PARTNERSHIP ENQUIRY SUBMITTED",
        "===================================================",
        `Enquiry ID: ${enq.id}`,
        `Submitted At: ${enq.createdAt}`,
        `Organization: ${enq.organizationName} (${enq.industryCategory})`,
        `Contact Person: ${enq.contactName} (${enq.designation})`,
        `Email: ${enq.email}`,
        `Phone: ${enq.phone}`,
        `Partnership Level: ${enq.interestedLevel}`,
        `Target Competition: ${enq.interestedCompetition}`,
        `CSR Co-Sponsorship Interest: ${enq.csrInterest ? "Yes" : "No"}`,
        `Message: ${enq.message || "(None)"}`,
        "",
        "Review in Admin Control Center: https://www.auriumsports.com/aic-titans-cup/admin",
      ].join("\n"),
    });

    if (enq.email && enq.email.includes("@")) {
      await transporter.sendMail({
        from: `"Commercial & CSR Directorate — AIC Titans Cup" <${GMAIL_USER}>`,
        to: enq.email,
        subject: `Partnership Enquiry Received: ${enq.organizationName} — AIC Titans Cup (${enq.id})`,
        text: [
          `Dear ${enq.contactName},`,
          "",
          `Thank you for your sponsorship and/or CSR partnership enquiry on behalf of ${enq.organizationName} for AIC Titans Cup.`,
          "",
          `Reference ID: ${enq.id}`,
          `Selected Level: ${enq.interestedLevel} (${enq.interestedCompetition})`,
          "",
          "Our Commercial & CSR Directorate will contact you shortly with the tailored sponsorship prospectus and rights schedule.",
          "",
          "Warm regards,",
          "Tournament Directorate — AIC Titans Cup",
          "Aurium Sports (The Aurium Academy Pvt. Ltd.)",
          "Website: https://www.auriumsports.com/aic-titans-cup",
          "Phone: +977-9828978044",
        ].join("\n"),
      });
    }

    return { sent: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Email send failed";
    console.warn("Sponsor enquiry email notification error:", msg);
    return { sent: false, error: msg };
  }
}

export async function sendArenaInvestorEnquiryEmail(
  enq: ArenaInvestorEnquiry
): Promise<{ sent: boolean; error?: string }> {
  const transporter = getTransporter();
  if (!transporter) {
    return { sent: false, error: "GMAIL_APP_PASSWORD not configured" };
  }

  const displayEntity =
    enq.investorType === "Institution" && enq.organizationName
      ? `${enq.organizationName} (${enq.fullName})`
      : enq.fullName;

  try {
    await transporter.sendMail({
      from: `"Aurium Arena Investor Desk" <${GMAIL_USER}>`,
      to: ADMIN_NOTIFY_EMAIL,
      replyTo: enq.email,
      subject: `[NEW AURIUM ARENA INVESTOR ENQUIRY] ${displayEntity} — ${enq.investmentInterest}`,
      text: [
        "NEW AURIUM ARENA INVESTMENT ENQUIRY SUBMITTED",
        "==============================================",
        `Enquiry ID: ${enq.id}`,
        `Submitted At: ${enq.createdAt}`,
        `Investor Type: ${enq.investorType}`,
        `Full Name: ${enq.fullName}`,
        enq.organizationName ? `Organization / Institution: ${enq.organizationName}` : "",
        enq.designation ? `Designation: ${enq.designation}` : "",
        `Email: ${enq.email}`,
        `Phone / WhatsApp: ${enq.phone}`,
        `City / Country: ${enq.cityOrCountry}`,
        `Investment Interest: ${enq.investmentInterest}`,
        `Preferred Region: ${enq.preferredRegion}`,
        `Estimated Investment Range: ${enq.estimatedTicketSize}`,
        `Message / Notes: ${enq.message || "(None)"}`,
        "",
        "Review in Admin Control Center: https://www.auriumsports.com/aic-titans-cup/admin",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (enq.email && enq.email.includes("@")) {
      await transporter.sendMail({
        from: `"Aurium Sports — Aurium Arena Investor Desk" <${GMAIL_USER}>`,
        to: enq.email,
        subject: `Investment Enquiry Received: Aurium Arena (${enq.id})`,
        text: [
          `Dear ${enq.fullName},`,
          "",
          `Thank you for registering your investment interest in Aurium Arena — our nationwide plan to establish 17 integrated sports, gym, athletic recovery, and café facilities across Nepal.`,
          "",
          `Reference ID: ${enq.id}`,
          `Investor Profile: ${enq.investorType}${enq.organizationName ? ` — ${enq.organizationName}` : ""}`,
          `Focus: ${enq.investmentInterest} (${enq.preferredRegion})`,
          "",
          "Our leadership team will review your submission and contact you directly to share the Aurium Arena expansion deck and discuss next steps.",
          "",
          "Warm regards,",
          "Aurium Sports (The Aurium Academy Pvt. Ltd.)",
          "Website: https://www.auriumsports.com/aurium-arena",
          "Phone / WhatsApp: +977-9828978044",
        ].join("\n"),
      });
    }

    return { sent: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Email send failed";
    console.warn("Arena investor enquiry email notification error:", msg);
    return { sent: false, error: msg };
  }
}
