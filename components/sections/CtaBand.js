// CtaBand - Ana sayfa sonunda iletişime yönlendiren çağrı bandı

import Link from "next/link";
import {
  accentButtonClass,
  ctaSectionClass,
  pageContainerCenteredClass,
  sectionBodyClass,
  sectionLabelClass,
  sectionTitleTightClass,
} from "@/lib/classes";

export default function CtaBand() {
  return (
    <section className={ctaSectionClass}>
      <div className={pageContainerCenteredClass}>
        <p className={sectionLabelClass}>İletişim</p>
        <h2 className={sectionTitleTightClass}>Sorularınızı Cevaplayalım</h2>
        <p className={sectionBodyClass}>
          Mesai saatleri içerisinde telefonlarımızdan, mesai saatleri dışında
          iletişim formumuz üzerinden bizlere ulaşabilirsiniz.
        </p>
        <Link href="/iletisim" className={`mt-8 ${accentButtonClass}`}>
          Bize Ulaşın →
        </Link>
      </div>
    </section>
  );
}
