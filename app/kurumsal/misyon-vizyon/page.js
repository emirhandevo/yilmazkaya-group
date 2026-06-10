// Misyon - Vizyon - Kurumsal hedef ve yön sayfası

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

export const metadata = {
  title: "Misyon - Vizyon | Yılmazkaya Group",
  description: "Yılmazkaya Group misyon ve vizyon ifadeleri",
};

export default function MisyonVizyonPage() {
  return (
    <main className={kurumsalPageClass}>
      <div className={kurumsalContainerClass}>
        <p className={kurumsalLabelClass}>Kurumsal</p>
        <h1 className={kurumsalTitleClass}>Misyon - Vizyon</h1>

        <div className={missionVisionGridClass}>
          <section className={missionVisionCardClass}>
            <h2 className={missionVisionCardTitleClass}>Misyon</h2>
            <p className={missionVisionCardTextClass}>
              Faaliyet gösterdiğimiz tüm sektörlerde kaliteli, güvenilir ve
              sürdürülebilir hizmet sunarak paydaşlarımıza değer katmak; etik
              değerlere bağlı, yenilikçi ve verimli bir organizasyon olarak
              ülkemizin ekonomik kalkınmasına katkı sağlamak.
            </p>
          </section>

          <section className={missionVisionCardClass}>
            <h2 className={missionVisionCardTitleClass}>Vizyon</h2>
            <p className={missionVisionCardTextClass}>
              Yurt içi ve yurt dışında tanınan, güvenilir ve saygın bir grup
              şirketi olmak; yatırımlarımız ve girişimlerimizle geleceğe yön
              veren, topluma ve çevreye duyarlı bir kurum olarak büyümeye devam
              eden bir grup olmak.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
