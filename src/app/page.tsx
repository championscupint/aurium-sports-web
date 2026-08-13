import { HeroCinematic } from "@/components/HeroCinematic";
import { EcosystemSection } from "@/components/EcosystemSection";
import { MethodologySection } from "@/components/MethodologySection";
import { WellbeingSection } from "@/components/WellbeingSection";
import { JourneySection } from "@/components/JourneySection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroCinematic />
      <EcosystemSection />
      <MethodologySection />
      <WellbeingSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
