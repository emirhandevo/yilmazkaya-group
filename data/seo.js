/** Statik sayfa SEO metinleri — TR path anahtarlı (/en prefix yok) */

export const pageSeo = {
  tr: {
    defaultTitle: "Yılmazkaya Group | Kurumsal Holding ve Faaliyet Alanları",
    defaultDescription:
      "Yılmazkaya Group resmi kurumsal web sitesi. 9 faaliyet alanı, kurumsal bilgiler, duyurular ve iletişim.",
    pages: {
      "/": {
        description:
          "Yılmazkaya Group resmi kurumsal web sitesi. 9 faaliyet alanı, kurumsal bilgiler, duyurular ve iletişim.",
      },
      "/duyurular/": {
        title: "Duyurular",
        description: "Yılmazkaya Group güncel duyuru ve haberleri.",
      },
      "/iletisim/": {
        title: "İletişim",
        description:
          "Yılmazkaya Group iletişim bilgileri ve iletişim formu. Telefon, e-posta ve adres.",
      },
      "/insan-kaynaklari/": {
        title: "İnsan Kaynakları",
        description:
          "Yılmazkaya Group kariyer fırsatları ve iş başvurusu formu.",
      },
      "/kurumsal/hakkimizda/": {
        title: "Hakkımızda",
        description: "Yılmazkaya Group hakkında kurumsal bilgiler.",
      },
      "/kurumsal/misyon-vizyon/": {
        title: "Misyon - Vizyon",
        description: "Yılmazkaya Group misyon ve vizyon ifadeleri.",
      },
      "/kurumsal/degerlerimiz/": {
        title: "Değerlerimiz",
        description: "Yılmazkaya Group kurumsal değerleri.",
      },
      "/kurumsal/gizlilik-politikasi/": {
        title: "Gizlilik Politikası",
        description:
          "Yılmazkaya Group kişisel verilerin korunması ve gizlilik politikası.",
      },
    },
  },
  en: {
    defaultTitle: "Yılmazkaya Group | Corporate Holding & Business Areas",
    defaultDescription:
      "Official website of Yılmazkaya Group. Nine business areas, corporate information, news, and contact details.",
    pages: {
      "/": {
        title: "Corporate Holding & Business Areas",
        description:
          "Official website of Yılmazkaya Group — a Turkish holding company with 25+ years of experience across technology, real estate, textile, trade fairs, and more.",
      },
      "/duyurular/": {
        title: "News & Announcements",
        description:
          "Latest news and corporate announcements from Yılmazkaya Group.",
      },
      "/iletisim/": {
        title: "Contact",
        description:
          "Contact Yılmazkaya Group by phone, email, or form. Office address in Istanbul, Turkey.",
      },
      "/insan-kaynaklari/": {
        title: "Careers",
        description:
          "Career opportunities and online job applications at Yılmazkaya Group and its subsidiaries.",
      },
      "/kurumsal/hakkimizda/": {
        title: "About Us",
        description:
          "About Yılmazkaya Group — corporate profile, history, and group companies in Turkey.",
      },
      "/kurumsal/misyon-vizyon/": {
        title: "Mission & Vision",
        description:
          "Mission and vision of Yılmazkaya Group — sustainable growth across diverse business sectors.",
      },
      "/kurumsal/degerlerimiz/": {
        title: "Our Values",
        description:
          "Core values of Yılmazkaya Group: reliability, ethics, sustainability, innovation, and excellence.",
      },
      "/kurumsal/gizlilik-politikasi/": {
        title: "Privacy Policy",
        description:
          "Privacy policy and personal data protection (KVKK) at Yılmazkaya Group.",
      },
    },
  },
};

/** Path + locale için title / description döner */
export function getPageSeoEntry(path = "/", locale = "tr") {
  const normalized =
    !path || path === "/"
      ? "/"
      : path.endsWith("/")
        ? path.replace(/^\/en(\/|$)/, "/")
        : `${path.replace(/^\/en(\/|$)/, "/")}/`;

  const config = pageSeo[locale] ?? pageSeo.tr;
  const page = config.pages[normalized] ?? {};

  return {
    title: page.title,
    description: page.description ?? config.defaultDescription,
    defaultTitle: config.defaultTitle,
    defaultDescription: config.defaultDescription,
  };
}
