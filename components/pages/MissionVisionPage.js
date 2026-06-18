import { getCorporateContent } from "@/data/content";
import { getUi } from "@/data/ui";
import {
  kurumsalContainerClass,
  kurumsalLabelClass,
  kurumsalPageClass,
  kurumsalTitleClass,
  missionVisionCardClass,
  missionVisionCardTextClass,
  missionVisionCardTitleClass,
  missionVisionGridClass,
} from "@/lib/classes";

export default function MissionVisionPage({ locale = "tr" }) {
  const corporate = getCorporateContent(locale);
  const labels = getUi(locale);

  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerClass}>
        <p className={kurumsalLabelClass}>{labels.corporateLabel}</p>
        <h1 className={kurumsalTitleClass}>{corporate.missionVision.title}</h1>

        <div className={missionVisionGridClass}>
          <section className={missionVisionCardClass}>
            <h2 className={missionVisionCardTitleClass}>{labels.mission}</h2>
            <p className={missionVisionCardTextClass}>
              {corporate.missionVision.mission}
            </p>
          </section>

          <section className={missionVisionCardClass}>
            <h2 className={missionVisionCardTitleClass}>{labels.vision}</h2>
            <p className={missionVisionCardTextClass}>
              {corporate.missionVision.vision}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
