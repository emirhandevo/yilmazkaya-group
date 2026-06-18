import Hero from "@/components/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ActivityGrid from "@/components/sections/ActivityGrid";
import StatsBand from "@/components/sections/StatsBand";
import CtaBand from "@/components/sections/CtaBand";

export default function HomePage({ locale = "tr" }) {
  return (
    <main>
      <Hero locale={locale} />
      <IntroSection locale={locale} />
      <ActivityGrid locale={locale} />
      <StatsBand locale={locale} />
      <CtaBand locale={locale} />
    </main>
  );
}
