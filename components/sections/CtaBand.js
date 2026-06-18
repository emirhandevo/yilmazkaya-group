import Link from "next/link";
import {
  accentButtonClass,
  ctaSectionClass,
  pageContainerCenteredClass,
  sectionBodyClass,
  sectionLabelClass,
  sectionTitleTightClass,
} from "@/lib/classes";
import { getUi } from "@/data/ui";
import { localizeHref } from "@/lib/i18n";

export default function CtaBand({ locale = "tr" }) {
  const labels = getUi(locale);

  return (
    <section className={ctaSectionClass}>
      <div className={pageContainerCenteredClass}>
        <p className={sectionLabelClass}>{labels.ctaLabel}</p>
        <h2 className={sectionTitleTightClass}>{labels.ctaTitle}</h2>
        <p className={sectionBodyClass}>{labels.ctaBody}</p>
        <Link
          href={localizeHref("/iletisim", locale)}
          className={`mt-8 ${accentButtonClass}`}
        >
          {labels.ctaButton}
        </Link>
      </div>
    </section>
  );
}
