import Hero from "@/components/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ActivityGrid from "@/components/sections/ActivityGrid";
import StatsBand from "@/components/sections/StatsBand";
import CtaBand from "@/components/sections/CtaBand";


export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <ActivityGrid />
      <StatsBand />
      <CtaBand />
    </main>
  );
}

