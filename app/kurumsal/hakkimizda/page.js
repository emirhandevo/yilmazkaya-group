// Hakkımızda - Kurumsal tanıtım sayfası

import {
  kurumsalBodyClass,
  kurumsalContainerNarrowClass,
  kurumsalLabelClass,
  kurumsalPageClass,
  kurumsalTitleClass,
} from "@/lib/classes";

export const metadata = {
  title: "Hakkımızda | Yılmazkaya Group",
  description: "Yılmazkaya Group hakkında kurumsal bilgiler.",
};

export default function HakkimizdaPage() {
  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerNarrowClass}>
        <p className={kurumsalLabelClass}>Kurumsal</p>
        <h1 className={kurumsalTitleClass}>Hakkımızda</h1>

        <div className={`mt-8 space-y-6 ${kurumsalBodyClass}`}>
          <p>
            YILMAZKAYA GRUP olarak, yurt içi ve yurt dışındaki faaliyetlerimizle
            güvenilir ve saygın bir kurum olmanın sorumluluğunu taşıyoruz. Temel
            değerlerimize sadık kalarak iş kollarımızı ve organizasyonumuzu
            sürekli yeniliyoruz.
          </p>
          <p>
            Sürdürülebilir büyüme stratejimizle ülkemize yatırım yapmaya devam
            ediyor; yeni nesil girişimleri erken aşamada tespit edip
            geliştirmeyi hedefliyoruz.
          </p>
          <p>
            20 yılı aşkın deneyimimizle farklı sektörlerde faaliyet gösteren
            grup şirketlerimiz aracılığıyla ülkemize ve topluma değer katmaya
            devam ediyoruz.
          </p>
        </div>
      </div>
    </main>
  );
}
