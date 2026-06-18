import { activities } from "./activities";
import { activitiesEn } from "./en/activities";
import { stats } from "./stats";
import { statsEn } from "./en/stats";
import { hrContent } from "./hr";
import { hrContentEn } from "./en/hr";
import { announcements } from "./announcements";
import { announcementsEn } from "./en/announcements";
import { values } from "./values";
import { valuesEn } from "./en/values";
import { privacySections } from "./privacy";
import { privacySectionsEn } from "./en/privacy";
import { corporateEn } from "./en/corporate";

function mapActivityHrefs(list, locale) {
  return list.map((item) => ({
    ...item,
    href:
      locale === "en"
        ? `/en/faaliyet-alanlari/${item.slug}/`
        : `/faaliyet-alanlari/${item.slug}/`,
  }));
}

export function getActivities(locale = "tr") {
  const list = locale === "en" ? activitiesEn : activities;
  return mapActivityHrefs(list, locale);
}

export function getActivityBySlug(slug, locale = "tr") {
  const activity = getActivities(locale).find((item) => item.slug === slug);
  if (!activity) {
    throw new Error(`Activity not found: ${slug}`);
  }
  return activity;
}

export function getStats(locale = "tr") {
  return locale === "en" ? statsEn : stats;
}

export function getHrContent(locale = "tr") {
  return locale === "en" ? hrContentEn : hrContent;
}

export function getAnnouncements(locale = "tr") {
  return locale === "en" ? announcementsEn : announcements;
}

export function getValues(locale = "tr") {
  return locale === "en" ? valuesEn : values;
}

export function getPrivacySections(locale = "tr") {
  return locale === "en" ? privacySectionsEn : privacySections;
}

export function getCorporateContent(locale = "tr") {
  if (locale === "en") return corporateEn;
  return {
    about: {
      title: "Hakkımızda",
      paragraphs: [
        "YILMAZKAYA GRUP, faaliyet gösterdiği sektörlerde güçlü iş ortaklıkları ve profesyonel yaklaşımıyla güvenilir bir kurum kimliği oluşturmuştur. Ulusal ve uluslararası projelerde edindiği deneyimi, yenilikçi bakış açısıyla birleştirerek organizasyon yapısını ve hizmet ağını sürekli geliştirmektedir. Sorumluluk bilinci, sürdürülebilirlik ve kalite odaklı çalışma anlayışıyla geleceğe değer katmayı amaçlamaktadır.",
        "Sürdürülebilir büyüme stratejimizle ülkemize yatırım yapmaya devam ediyor; yeni nesil girişimleri erken aşamada tespit edip geliştirmeyi hedefliyoruz.",
        "20 yılı aşkın deneyimimizle farklı sektörlerde faaliyet gösteren grup şirketlerimiz aracılığıyla ülkemize ve topluma değer katmaya devam ediyoruz.",
      ],
    },
    missionVision: {
      title: "Misyon - Vizyon",
      mission:
        "Faaliyet gösterdiğimiz tüm sektörlerde kaliteli, güvenilir ve sürdürülebilir hizmet sunarak paydaşlarımıza değer katmak; etik değerlere bağlı, yenilikçi ve verimli bir organizasyon olarak ülkemizin ekonomik kalkınmasına katkı sağlamak.",
      vision:
        "Yurt içi ve yurt dışında tanınan, güvenilir ve saygın bir grup şirketi olmak; yatırımlarımız ve girişimlerimizle geleceğe yön veren, topluma ve çevreye duyarlı bir kurum olarak büyümeye devam eden bir grup olmak.",
    },
    values: {
      title: "Değerlerimiz",
    },
    announcements: {
      title: "Duyurular",
    },
    privacy: {
      title: "Gizlilik Politikası",
    },
  };
}
