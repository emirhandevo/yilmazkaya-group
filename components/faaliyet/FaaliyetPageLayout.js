// FaaliyetPageLayout - Tüm faaliyet detay sayfaları için ortak şablon

import Image from "next/image";
import {
  pageContainerClass,
  pageSectionClass,
  sectionBodyClass,
  sectionBodyPlainClass,
  sectionLabelClass,
  sectionTitleClass,
} from "@/lib/classes";

export default function FaaliyetPageLayout({ activity }) {
  return (
    <main className={pageSectionClass}>
      <div className={pageContainerClass}>
        <p className={sectionLabelClass}>Faaliyet Alanları</p>
        <h1 className={sectionTitleClass}>{activity.title}</h1>

        <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-lg border border-zinc-200">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        <p className={sectionBodyClass}>{activity.description}</p>

        <div className={`mt-8 space-y-6 ${sectionBodyPlainClass}`}>
          {activity.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {activity.gallery?.length > 0 && (
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {activity.gallery.map((src, index) => (
              <li
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-200"
              >
                <Image
                  src={src}
                  alt={`${activity.title} — görsel ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
