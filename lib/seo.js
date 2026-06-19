// Site geneli SEO sabitleri — sitemap, robots, metadata buradan beslenir

const PRODUCTION_URL = "https://www.yilmazkayagroup.com.tr";
const VERCEL_PREVIEW_URL = "https://yilmazkaya-group.vercel.app";

/**
 * Build ortamına göre doğru site URL'si.
 * VERCEL_URL (deployment hash) kullanma — botlar/harici araçlar Unauthorized alabiliyor.
 */
function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL === "1") {
    return VERCEL_PREVIEW_URL;
  }
  return PRODUCTION_URL;
}

export const siteConfig = {
  name: "Yılmazkaya Group",
  url: getSiteUrl(),
  defaultTitle: "Yılmazkaya Group | Kurumsal Holding ve Faaliyet Alanları",
  defaultDescription:
    "Yılmazkaya Group resmi kurumsal web sitesi. 9 faaliyet alanı, kurumsal bilgiler, duyurular ve iletişim.",
  locale: "tr_TR",
  ogImage: "/og.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

/** Sayfa metadata'sı için ortak şablon */
export function createPageMetadata({ title, description, path = "" }) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.defaultTitle;
  const pageDescription = description ?? siteConfig.defaultDescription;
  const url = `${siteConfig.url}${path}`;
  const ogImageUrl = `${siteConfig.url}${siteConfig.ogImage}`;

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
          url: ogImageUrl,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
    },
  };
}
