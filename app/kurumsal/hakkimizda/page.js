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
          YILMAZKAYA GRUP, faaliyet gösterdiği sektörlerde güçlü iş ortaklıkları ve profesyonel yaklaşımıyla güvenilir bir kurum kimliği oluşturmuştur. Ulusal ve uluslararası projelerde edindiği deneyimi, yenilikçi bakış açısıyla birleştirerek organizasyon yapısını ve hizmet ağını sürekli geliştirmektedir. Sorumluluk bilinci, sürdürülebilirlik ve kalite odaklı çalışma anlayışıyla geleceğe değer katmayı amaçlamaktadır.
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
