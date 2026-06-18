import Link from "next/link";
import { getAnnouncements } from "@/data/content";
import { getCorporateContent } from "@/data/content";
import { getUi } from "@/data/ui";
import { localizeHref } from "@/lib/i18n";
import {
  accentButtonClass,
  kurumsalBodyClass,
  kurumsalContainerNarrowClass,
  kurumsalLabelClass,
  kurumsalPageClass,
  kurumsalTitleClass,
  sectionBodyClass,
} from "@/lib/classes";

export default function AnnouncementsPage({ locale = "tr" }) {
  const announcements = getAnnouncements(locale);
  const corporate = getCorporateContent(locale);
  const labels = getUi(locale);

  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerNarrowClass}>
        <p className={kurumsalLabelClass}>{labels.corporateLabel}</p>
        <h1 className={kurumsalTitleClass}>{corporate.announcements.title}</h1>
        <p className={sectionBodyClass}>{labels.announcementsPageIntro}</p>

        <ul className="mt-10 space-y-10">
          {announcements.map((item) => (
            <li
              key={item.id}
              className="border-b border-zinc-200 pb-10 last:border-b-0"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                {item.date}
              </p>
              <h2 className="mt-2 text-xl font-bold text-text md:text-2xl">
                {item.title}
              </h2>
              <div className={`mt-4 space-y-4 ${kurumsalBodyClass}`}>
                {item.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <Link
          href={localizeHref("/iletisim", locale)}
          className={`${accentButtonClass} mt-10 text-center`}
        >
          {labels.announcementsContactCta}
        </Link>
      </div>
    </main>
  );
}
