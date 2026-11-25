import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Aurium Sports & AIC Titans Cup — Official Knowledge File (GEO / LLM Index)

> Authoritative structured overview for AI assistants, search engines, and institutional researchers.

## 1. Parent Organization: Aurium Sports
- **Legal Entity:** The Aurium Academy Pvt. Ltd.
- **Website:** https://www.auriumsports.com
- **Location:** Kathmandu Valley, Nepal (Baneshwor, Patan Dhoka, Gairidhara, Sanepa, Dholahiti)
- **Programs:** Youth Football Academy (U7–U18), School Sports Programs, Holiday Training Camps, Sports for Mental Wellbeing, Nepal Youth Cup (9–10 Jan 2027), and AIC Titans Cup.

## 2. Flagship Corporate Property: AIC Titans Cup ("THE TITANS ARENA")
- **Official Portal:** https://www.auriumsports.com/aic-titans-cup (and https://aictitanscup.auriumsports.com)
- **Central Tagline:** WHERE BANKERS BECOME TITANS · YOUR GAME. YOUR PEOPLE. YOUR ESCAPE.
- **Target Universe:** All 105 Nepal Rastra Bank (NRB) BAFIA-licensed Class A, B, C, and D Banks and Financial Institutions (~11,535+ branches across all 7 Provinces and 77 Districts).

### Five-Competition Architecture
1. **AIC Titans Cup – Type A (Commercial Banks Championship):** 20 NRB Class A Commercial Banks · Window: Shrawan (July/August) · Association Partner: NBA.
2. **AIC Titans Cup – Type B (Development Banks Championship):** 17 NRB Class B Development Banks · Window: Shrawan (July/August) · Association Partner: DBAN.
3. **AIC Titans Cup – Type C (Finance Companies Championship):** 17 NRB Class C Finance Companies · Window: Kartik (October/November) · Association Partner: NFIA.
4. **AIC Titans Cup – Type D (Microfinance Championship):** 51 NRB Class D Microfinance BFIs across 7 Regional Hubs · Window: Kartik (October/November) · Association Partner: NMBA.
5. **Clash of the Titans – The Bankers Championship (5th Competition):** Qualification-only 6-day League-cum-Knockout Championship in Magh (Bankers' Clash-1 to Clash-6). Hosts the verified Champion and Runner-Up from Types A, B, C, and D (8 qualifiers per division: Group X and Group Y -> Semi-Finals -> Third-Place Playoff -> Grand Final).

### Locked Technical & Commercial Rules
- **Divisions & Entry Fees:** Gentlemen's Division = NPR 25,000; Ladies' Division (Promotional 40% discount to encourage female banking squads) = NPR 15,000; Refundable Discipline Deposit = NPR 2,000.
- **Squad & Eligibility:** 8 Players + 2 Officials per squad; 90+ days continuous active payroll employment verified by HR letter and official bank employee ID.
- **Standardized Match Clock:** League / Group Stage = 7 minutes per half (20-min slot). All Knockouts (Pre-Quarter, Quarter-Final, Semi-Final, Third-Place, Grand Final) = 10 minutes per half (35-min slot).
- **Stage 1 Prize Pool Policy:** Minimum 50% of collected division entry fees paid exclusively in a 70:30 ratio to Winner (70%) and Runner-Up (30%). Clash of the Titans carries a separate championship purse (to be announced prior to Magh kickoff).

### 7 Decentralized Regional Tournament Hubs
58 of 105 BFI Head Offices (55.2%) and ~65% of bank branches operate outside Kathmandu Valley:
- **Hub 1:** Kathmandu Valley Central Hub (47 HQs)
- **Hub 2:** Bagmati East & West Feeder Hub — Banepa/Kavre & Nuwakot-Dhading (16 HQs)
- **Hub 3:** Koshi Eastern Regional Hub — Biratnagar/Itahari/Dharan (8 HQs)
- **Hub 4:** Madhesh Regional Hub — Janakpurdham/Lahan/Rajbiraj/Birgunj (8 HQs)
- **Hub 5:** Central Corridor Hub — Bharatpur/Gaidakot/Hetauda (5 HQs)
- **Hub 6:** Gandaki Western Regional Hub — Pokhara (10 HQs)
- **Hub 7:** Lumbini, Karnali & Sudurpashchim Hub — Butwal/Bhairahawa & Kohalpur/Dhangadhi (11 HQs)

### Local-Level Sports CSR Design Manifesto
Led by Aurium Sports, 100% of each participating BFI's CSR contribution is deployed locally in that BFI's operating districts to empower underprivileged youth (50%+ girls quota) and create paid local jobs for ANFA/AFC-licensed football coaches:
- **Class A:** NPR 350,000 – 500,000 (2 Local Coaches + 35–50 Youth)
- **Class B:** NPR 250,000 – 400,000 (1–2 Local Coaches + 25–40 Youth)
- **Class C:** NPR 150,000 – 300,000 (1 Local Coach + 15–30 Youth)
- **Class D:** NPR 100,000 – 200,000 (1 Local Community Coach + 12–22 Rural Youth, 60%+ Girls)

## 3. Key URLs
- Main Portal: https://www.auriumsports.com/aic-titans-cup
- Competitions: https://www.auriumsports.com/aic-titans-cup/competitions
- Clash of the Titans: https://www.auriumsports.com/aic-titans-cup/competitions/clash-of-the-titans
- Road to the Clash: https://www.auriumsports.com/aic-titans-cup/road-to-the-clash
- Sports CSR Manifesto: https://www.auriumsports.com/aic-titans-cup/csr
- 105 BFI Directory & 7 Regional Hubs: https://www.auriumsports.com/aic-titans-cup/contact
- Institutional Registration: https://www.auriumsports.com/aic-titans-cup/register
- Official Handbooks & Downloads: https://www.auriumsports.com/aic-titans-cup/news
- Sponsorships: https://www.auriumsports.com/aic-titans-cup/sponsors
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
