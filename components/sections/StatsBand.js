import { getStats } from "@/data/content";
import {
  statsDividerClass,
  statsGridClass,
  statsLabelClass,
  statsSectionClass,
  statsValueClass,
} from "@/lib/classes";

export default function StatsBand({ locale = "tr" }) {
  const stats = getStats(locale);

  return (
    <section className={statsSectionClass}>
      <ul className={statsGridClass}>
        {stats.map((item) => (
          <li key={item.label} className="text-center">
            <p className={statsValueClass}>{item.value}</p>
            <p className={statsLabelClass}>{item.label}</p>
          </li>
        ))}
      </ul>
      <div className={statsDividerClass}></div>
    </section>
  );
}
