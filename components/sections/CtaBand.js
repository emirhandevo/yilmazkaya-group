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
        Sorularınız, talepleriniz ve iş birliği görüşmeleriniz için mesai saatleri içerisinde telefonla, diğer zamanlarda ise iletişim formu aracılığıyla ekibimize ulaşabilirsiniz.
        </p>
        <Link href="/iletisim" className={`mt-8 ${accentButtonClass}`}>
          Bize Ulaşın →
        </Link>
      </div>
    </section>
  );
}
