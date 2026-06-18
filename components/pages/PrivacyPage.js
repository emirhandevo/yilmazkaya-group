import { getPrivacySections, getCorporateContent } from "@/data/content";
import { getUi } from "@/data/ui";
import {
  kurumsalBodyClass,
  kurumsalContainerNarrowClass,
  kurumsalLabelClass,
  kurumsalPageClass,
  kurumsalTitleClass,
  sectionBodyClass,
} from "@/lib/classes";

export default function PrivacyPage({ locale = "tr" }) {
  const privacySections = getPrivacySections(locale);
  const corporate = getCorporateContent(locale);
  const labels = getUi(locale);

  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerNarrowClass}>
        <p className={kurumsalLabelClass}>{labels.corporateLabel}</p>
        <h1 className={kurumsalTitleClass}>{corporate.privacy.title}</h1>
        <p className={sectionBodyClass}>{labels.privacyIntro}</p>

        <div className="mt-10 space-y-10">
          {privacySections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-text md:text-2xl">
                {section.title}
              </h2>
              <div className={`mt-4 space-y-4 ${kurumsalBodyClass}`}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
