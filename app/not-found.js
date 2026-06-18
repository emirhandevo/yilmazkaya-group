import Link from "next/link";
import {
  pageSectionClass,
  pageContainerCenteredClass,
  sectionLabelClass,
  sectionTitleClass,
  sectionBodyClass,
  accentButtonClass,
} from "@/lib/classes";

export default function NotFound() {
  return (
    <main className={pageSectionClass}>
      <div className={pageContainerCenteredClass}>
        <p className={sectionLabelClass}>404</p>
        <h1 className={sectionTitleClass}>Sayfa bulunamadı</h1>
        <p className={sectionBodyClass}>
          Aradığınız sayfa taşınmış, silinmiş veya bağlantı hatalı olabilir.
        </p>
        <Link href="/" className={`${accentButtonClass} mt-8`}>
          Anasayfaya Dön
        </Link>
      </div>
    </main>
  );
}
