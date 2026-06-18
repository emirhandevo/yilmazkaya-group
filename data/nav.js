const activityLinks = [
  { label: "Yılmazkaya Teknoloji", href: "/faaliyet-alanlari/yilmazkaya-teknoloji" },
  { label: "Alarasol Organik Gübre", href: "/faaliyet-alanlari/alarasol-organik-gubre" },
  { label: "Doğa Village", href: "/faaliyet-alanlari/doga-village" },
  { label: "Yılmazkaya GYO", href: "/faaliyet-alanlari/yilmazkaya-gyo" },
  { label: "YK Fuarcılık", href: "/faaliyet-alanlari/yk-fuarcilik" },
  { label: "Yılmazkaya Barter A.Ş.", href: "/faaliyet-alanlari/yilmazkaya-barter" },
  { label: "Yılmazkaya Tekstil & Halı", href: "/faaliyet-alanlari/yilmazkaya-tekstil" },
  { label: "Yılmazkaya Baskı Teknikleri", href: "/faaliyet-alanlari/yilmazkaya-baski-teknikleri" },
  { label: "Yılmazkaya Vakfı", href: "/faaliyet-alanlari/yilmazkaya-vakif" },
];

function withEnPrefix(items) {
  return items.map((item) => ({
    ...item,
    href: item.href === "/" ? "/en/" : `/en${item.href}`,
  }));
}

export const menuItemsByLocale = {
  tr: [
    { label: "Anasayfa", href: "/" },
    { label: "Faaliyet Alanları", children: activityLinks },
    { label: "İnsan Kaynakları", href: "/insan-kaynaklari" },
    { label: "İletişim", href: "/iletisim" },
    {
      label: "Kurumsal",
      children: [
        { label: "Duyurular", href: "/duyurular" },
        { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
        { label: "Misyon - Vizyon", href: "/kurumsal/misyon-vizyon" },
        { label: "Değerlerimiz", href: "/kurumsal/degerlerimiz" },
        { label: "Gizlilik Politikası", href: "/kurumsal/gizlilik-politikasi" },
      ],
    },
  ],
  en: [
    { label: "Home", href: "/en/" },
    { label: "Business Areas", children: withEnPrefix(activityLinks) },
    { label: "Careers", href: "/en/insan-kaynaklari" },
    { label: "Contact", href: "/en/iletisim" },
    {
      label: "Corporate",
      children: withEnPrefix([
        { label: "News", href: "/duyurular" },
        { label: "About Us", href: "/kurumsal/hakkimizda" },
        { label: "Mission & Vision", href: "/kurumsal/misyon-vizyon" },
        { label: "Our Values", href: "/kurumsal/degerlerimiz" },
        { label: "Privacy Policy", href: "/kurumsal/gizlilik-politikasi" },
      ]),
    },
  ],
};

export const footerQuickLinksByLocale = {
  tr: [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
    { label: "Misyon - Vizyon", href: "/kurumsal/misyon-vizyon" },
    { label: "Değerlerimiz", href: "/kurumsal/degerlerimiz" },
    { label: "Gizlilik Politikası", href: "/kurumsal/gizlilik-politikasi" },
    { label: "İletişim", href: "/iletisim" },
  ],
  en: withEnPrefix([
    { label: "Home", href: "/" },
    { label: "About Us", href: "/kurumsal/hakkimizda" },
    { label: "Mission & Vision", href: "/kurumsal/misyon-vizyon" },
    { label: "Our Values", href: "/kurumsal/degerlerimiz" },
    { label: "Privacy Policy", href: "/kurumsal/gizlilik-politikasi" },
    { label: "Contact", href: "/iletisim" },
  ]),
};

export function getMenuItems(locale) {
  return menuItemsByLocale[locale] ?? menuItemsByLocale.tr;
}

export function getFooterQuickLinks(locale) {
  return footerQuickLinksByLocale[locale] ?? footerQuickLinksByLocale.tr;
}
