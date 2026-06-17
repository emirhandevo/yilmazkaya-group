// Site geneli SEO sabitleri — sitemap, robots, metadata buradan beslenir

export const siteConfig = {
  name: "Yılmazkaya Group",
  url: "https://yilmazkayagroup.com.tr",
  defaultTitle: "Yılmazkaya Group",
  defaultDescription:
    "Yılmazkaya Group resmi kurumsal web sitesi. Faaliyet alanlarımız, kurumsal bilgiler ve iletişim.",
  locale: "tr_TR",
  ogImage: "/logo.png",
};

/** Sayfa metadata'sı için ortak şablon */
export function createPageMetadata({ title, description, path = "" }) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.defaultTitle;
  const pageDescription = description ?? siteConfig.defaultDescription;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 280,
          height: 90,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
    },
  };
}
