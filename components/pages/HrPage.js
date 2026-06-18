import Image from "next/image";
import HrForm from "@/components/hr/HrForm";
import { getHrContent } from "@/data/content";
import { getUi } from "@/data/ui";
import {
  kurumsalPageClass,
  pageContainerClass,
  sectionBodyPlainClass,
  sectionLabelClass,
  sectionTitleClass,
  sectionBodyClass,
  subsectionTitleClass,
} from "@/lib/classes";

export default function HrPage({ locale = "tr" }) {
  const hrContent = getHrContent(locale);
  const labels = getUi(locale);

  return (
    <main className={kurumsalPageClass}>
      <div className={pageContainerClass}>
        <div className="max-w-3xl">
          <p className={sectionLabelClass}>{labels.hrCareerLabel}</p>
          <h1 className={sectionTitleClass}>{labels.hrPageTitle}</h1>
          <p className={sectionBodyClass}>{hrContent.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <h2 className={subsectionTitleClass}>{labels.hrCareerOpportunities}</h2>
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
            <HrForm locale={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
