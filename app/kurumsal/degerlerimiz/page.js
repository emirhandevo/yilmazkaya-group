// Değerlerimiz - Kurumsal değer kartları

import { values } from "@/data/values";
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

export const metadata = {
  title: "Değerlerimiz | Yılmazkaya Group",
  description: "Yılmazkaya Group kurumsal değerleri.",
};

export default function DegerlerimizPage() {
  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerClass}>
        <p className={kurumsalLabelClass}>Kurumsal</p>
        <h1 className={kurumsalTitleClass}>Değerlerimiz</h1>
        <p className={kurumsalIntroClass}>
          Yılmazkaya Group olarak tüm faaliyetlerimizde benimsediğimiz temel
          değerler.
        </p>

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
