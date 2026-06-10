import Image from "next/image";
import HrForm from "@/components/hr/HrForm";
import { hrContent } from "@/data/hr";
import {
  kurumsalPageClass,
  pageContainerClass,
  sectionBodyPlainClass,
  sectionLabelClass,
  sectionTitleClass,
  sectionBodyClass,
  subsectionTitleClass,
} from "@/lib/classes";

export const metadata = {
  title: "İnsan Kaynakları | Yılmazkaya Group",
  description:
    "Yılmazkaya Group kariyer fırsatları ve iş başvurusu formu.",
};

export default function InsanKaynaklariPage() {
  return (
    <main className={kurumsalPageClass}>
      <div className={pageContainerClass}>
        <div className="max-w-3xl">
          <p className={sectionLabelClass}>Kariyer</p>
          <h1 className={sectionTitleClass}>İnsan Kaynakları</h1>
          <p className={sectionBodyClass}>{hrContent.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <h2 className={subsectionTitleClass}>Kariyer Fırsatları</h2>
            <div className={`mt-4 space-y-6 ${sectionBodyPlainClass}`}>
              {hrContent.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-zinc-200">
                <Image
                  src={hrContent.image}
                  alt={hrContent.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <HrForm />
          </div>
        </div>
      </div>
    </main>
  );
}
