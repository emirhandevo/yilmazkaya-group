import Link from "next/link";
import {
  accentButtonSmallClass,
  introSectionClass,
  pageContainerNarrowClass,
  sectionBodyClass,
  sectionLabelClass,
  sectionTitleClass,
} from "@/lib/classes";
import { getUi } from "@/data/ui";
import { localizeHref } from "@/lib/i18n";

export default function IntroSection({ locale = "tr" }) {
  const labels = getUi(locale);

  return (
    <section className={introSectionClass}>
      <div className={pageContainerNarrowClass}>
        <p className={sectionLabelClass}>{labels.introLabel}</p>
        <h2 className={sectionTitleClass}>{labels.introTitle}</h2>
        <p className={sectionBodyClass}>{labels.introP1}</p>
        <p className={sectionBodyClass}>{labels.introP2}</p>
        <Link
          href={localizeHref("/kurumsal/hakkimizda", locale)}
          className={`mt-4 ${accentButtonSmallClass}`}
        >
          {labels.aboutUs}
        </Link>
      </div>
    </section>
  );
}
