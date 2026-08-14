import { HeroCinematic } from '@/components/HeroCinematic';
import { StatementSection } from '@/components/StatementSection';
import { JourneySection } from '@/components/JourneySection';
import { EcosystemSection } from '@/components/EcosystemSection';
import { MethodologySection } from '@/components/MethodologySection';
import { GirlsFootballSection } from '@/components/GirlsFootballSection';
import { InternationalSection } from '@/components/InternationalSection';
import { NextSportzSection } from '@/components/NextSportzSection';
import { ImpactSection } from '@/components/ImpactSection';

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background min-h-screen">
      <HeroCinematic />
      <StatementSection />
      <JourneySection />
      <EcosystemSection />
      <MethodologySection />
      <GirlsFootballSection />
      <InternationalSection />
      <NextSportzSection />
      <ImpactSection />
    </main>
  );
}
