// Site geneli SEO sabitleri — sitemap, robots, metadata buradan beslenir

/** Build ortamına göre doğru site URL'si (Vercel preview / canlı domain) */
function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://www.yilmazkayagroup.com.tr";
}

export const siteConfig = {
  name: "Yılmazkaya Group",
  url: getSiteUrl(),
  defaultTitle:
    "Yılmazkaya Group | Kurumsal Holding ve Faaliyet Alanları",
  defaultDescription:
    "Yılmazkaya Group resmi kurumsal web sitesi. 9 faaliyet alanı, kurumsal bilgiler, duyurular ve iletişim.",
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
