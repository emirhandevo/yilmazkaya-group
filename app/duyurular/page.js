import Link from "next/link";
import { announcements } from "@/data/announcements";
import {
  accentButtonClass,
  kurumsalBodyClass,
  kurumsalContainerNarrowClass,
  kurumsalLabelClass,
  kurumsalPageClass,
  kurumsalTitleClass,
  sectionBodyClass,
} from "@/lib/classes";

export const metadata = {
  title: "Duyurular | Yılmazkaya Group",
  description: "Yılmazkaya Group güncel duyuru ve haberleri.",
};

export default function DuyurularPage() {
  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerNarrowClass}>
        <p className={kurumsalLabelClass}>Kurumsal</p>
        <h1 className={kurumsalTitleClass}>Duyurular</h1>
        <p className={sectionBodyClass}>
          Yılmazkaya Group güncel duyuru ve haberlerini buradan takip
          edebilirsiniz.
        </p>

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
          href="/iletisim"
          className={`${accentButtonClass} mt-10 text-center`}
        >
          Sorularınız için iletişime geçin →
        </Link>
      </div>
    </main>
  );
}
