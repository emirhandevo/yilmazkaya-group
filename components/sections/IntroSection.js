// IntroSection - Hero altında kısa grup tanıtımı, Hakkımızda sayfasına yönlendirir

import Link from "next/link";
import {
  accentButtonSmallClass,
  introSectionClass,
  pageContainerNarrowClass,
  sectionBodyClass,
  sectionLabelClass,
  sectionTitleClass,
} from "@/lib/classes";

export default function IntroSection() {
  return (
    <section className={introSectionClass}>
      <div className={pageContainerNarrowClass}>
        <p className={sectionLabelClass}>Yılmazkaya Group</p>
        <h2 className={sectionTitleClass}>
          25 Yılı Aşkın Deneyimle Büyüyen Bir Grup
        </h2>
        <p className={sectionBodyClass}>
          Yılmazkaya Group olarak, yurt içi ve yurt dışındaki faaliyetlerimizle
          güvenilir ve saygın bir kurum olmanın sorumluluğunu taşıyoruz. Temel
          değerlerimize sadık kalarak iş kollarımızı ve organizasyonumuzu
          sürekli yeniliyoruz.
        </p>
        <p className={sectionBodyClass}>
          Sürdürülebilir büyüme stratejimizle ülkemize yatırım yapmaya devam
          ediyor; yeni nesil girişimleri erken aşamada tespit edip
          geliştirmeyi hedefliyoruz.
        </p>
        <Link
          href="/kurumsal/hakkimizda"
          className={`mt-4 ${accentButtonSmallClass}`}
        >
          Hakkımızda →
        </Link>
      </div>
    </section>
  );
}
