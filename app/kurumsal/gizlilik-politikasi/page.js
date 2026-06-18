import { privacySections } from "@/data/privacy";
import {
  kurumsalBodyClass,
  kurumsalContainerNarrowClass,
  kurumsalLabelClass,
  kurumsalPageClass,
  kurumsalTitleClass,
  sectionBodyClass,
} from "@/lib/classes";

export const metadata = {
  title: "Gizlilik Politikası | Yılmazkaya Group",
  description:
    "Yılmazkaya Group kişisel verilerin korunması ve gizlilik politikası.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerNarrowClass}>
        <p className={kurumsalLabelClass}>Kurumsal</p>
        <h1 className={kurumsalTitleClass}>Gizlilik Politikası</h1>
        <p className={sectionBodyClass}>
          Bu metin, web sitemiz üzerinden ilettiğiniz kişisel verilerin hangi
          amaçlarla işlendiğini açıklar.
        </p>

        <div className="mt-10 space-y-10">
          {privacySections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-text md:text-2xl">
                {section.title}
              </h2>
              <div className={`mt-4 space-y-4 ${kurumsalBodyClass}`}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
