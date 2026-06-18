import { getCorporateContent } from "@/data/content";
import { getUi } from "@/data/ui";
import {
  kurumsalBodyClass,
  kurumsalContainerNarrowClass,
  kurumsalLabelClass,
  kurumsalPageClass,
  kurumsalTitleClass,
} from "@/lib/classes";

export default function AboutPage({ locale = "tr" }) {
  const corporate = getCorporateContent(locale);
  const labels = getUi(locale);

  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerNarrowClass}>
        <p className={kurumsalLabelClass}>{labels.corporateLabel}</p>
        <h1 className={kurumsalTitleClass}>{corporate.about.title}</h1>

        <div className={`mt-8 space-y-6 ${kurumsalBodyClass}`}>
          {corporate.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
