import { getValues, getCorporateContent } from "@/data/content";
import { getUi } from "@/data/ui";
import {
  kurumsalContainerClass,
  kurumsalIntroClass,
  kurumsalLabelClass,
  kurumsalPageClass,
  kurumsalTitleClass,
  valueCardClass,
  valueCardTextClass,
  valueCardTitleClass,
  valueGridClass,
} from "@/lib/classes";

export default function ValuesPage({ locale = "tr" }) {
  const values = getValues(locale);
  const corporate = getCorporateContent(locale);
  const labels = getUi(locale);

  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerClass}>
        <p className={kurumsalLabelClass}>{labels.corporateLabel}</p>
        <h1 className={kurumsalTitleClass}>{corporate.values.title}</h1>
        <p className={kurumsalIntroClass}>{labels.valuesIntro}</p>

        <ul className={valueGridClass}>
          {values.map((item) => (
            <li key={item.title} className={valueCardClass}>
              <h2 className={valueCardTitleClass}>{item.title}</h2>
              <p className={valueCardTextClass}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
