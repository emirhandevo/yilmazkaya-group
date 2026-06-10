// ActivityGrid - Ana sayfada faaliyet alanlarını kart grid olarak gösterir

import Image from "next/image";
import Link from "next/link";
import { activities } from "@/data/activities";
import {
  activityCardBodyClass,
  activityCardCtaClass,
  activityCardImageClass,
  activityCardImageWrapperClass,
  activityCardLinkClass,
  activityCardTextClass,
  activityCardTitleClass,
  activityGridClass,
  activityHeaderClass,
  activitySectionClass,
  sectionLabelClass,
  sectionTitleTightClass,
} from "@/lib/classes";

export default function ActivityGrid() {
  return (
    <section className={activitySectionClass}>
      <div className={activityHeaderClass}>
        <p className={sectionLabelClass}>Faaliyet Alanları</p>
        <h2 className={sectionTitleTightClass}>Grup Şirketlerimiz</h2>
      </div>

      <ul className={activityGridClass}>
        {activities.map((item, index) => (
          <li key={item.href}>
            <Link href={item.href} className={activityCardLinkClass}>
              <div className={activityCardImageWrapperClass}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={activityCardImageClass}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>

              <div className={activityCardBodyClass}>
                <h3 className={activityCardTitleClass}>{item.title}</h3>
                <p className={activityCardTextClass}>{item.description}</p>
                <span className={activityCardCtaClass}>Detaylı Bilgi →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
