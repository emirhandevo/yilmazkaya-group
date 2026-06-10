// StatsBand - Koyu şeritte grup istatistiklerini gösterir

import { stats } from "@/data/stats";
import {
  statsDividerClass,
  statsGridClass,
  statsLabelClass,
  statsSectionClass,
  statsValueClass,
} from "@/lib/classes";

export default function StatsBand() {
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
