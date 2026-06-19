// Site geneli SEO — sitemap, robots, metadata buradan beslenir

import { getPageSeoEntry, pageSeo } from "@/data/seo";
import { getAlternatePath } from "./i18n";

const PRODUCTION_URL = "https://www.yilmazkayagroup.com.tr";
const VERCEL_PREVIEW_URL = "https://yilmazkaya-group.vercel.app";

const OG_LOCALES = {
  tr: { locale: "tr_TR", alternate: ["en_US"] },
  en: { locale: "en_US", alternate: ["tr_TR"] },
};

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

/** TR path ( /en prefix yok ) — hreflang eşleştirmesi için */
export function normalizeSeoPath(path = "/") {
  if (!path || path === "/") return "/";
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return withSlash.replace(/^\/en(\/|$)/, "/");
}

function absoluteUrl(path) {
  return `${siteConfig.url}${path}`;
}

/** hreflang alternates — tr, en, x-default (varsayılan TR) */
export function buildHreflangAlternates(basePath) {
  const path = normalizeSeoPath(basePath);
  const trPath = getAlternatePath(path, "tr");
  const enPath = getAlternatePath(path, "en");

  return {
    tr: absoluteUrl(trPath),
    en: absoluteUrl(enPath),
    "x-default": absoluteUrl(trPath),
  };
}

export const siteConfig = {
  name: "Yılmazkaya Group",
  url: getSiteUrl(),
  defaultTitle: pageSeo.tr.defaultTitle,
  defaultDescription: pageSeo.tr.defaultDescription,
  locale: "tr_TR",
  ogImage: "/og.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

/**
 * Statik sayfa metadata — data/seo.js'ten okur
 * @param {string} path — TR path (/iletisim/, /kurumsal/hakkimizda/ …)
 * @param {"tr"|"en"} locale
 */
export function getPageMetadata(path = "/", locale = "tr") {
  const seo = getPageSeoEntry(path, locale);
  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    path,
    locale,
    defaultTitle: seo.defaultTitle,
    defaultDescription: seo.defaultDescription,
  });
}

/**
 * Sayfa metadata'sı — canonical, hreflang, Open Graph, Twitter
 */
export function createPageMetadata({
  title,
  description,
  path = "/",
  locale = "tr",
  defaultTitle = siteConfig.defaultTitle,
  defaultDescription = siteConfig.defaultDescription,
}) {
  const normalizedPath = normalizeSeoPath(path);
  const canonicalPath = getAlternatePath(normalizedPath, locale);
  const url = absoluteUrl(canonicalPath);
  const ogImageUrl = absoluteUrl(siteConfig.ogImage);
  const { locale: ogLocale, alternate: ogAlternateLocales } =
    OG_LOCALES[locale] ?? OG_LOCALES.tr;

  const pageTitle = title ? `${title} | ${siteConfig.name}` : defaultTitle;
  const pageDescription = description ?? defaultDescription;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
      languages: buildHreflangAlternates(normalizedPath),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: ogLocale,
      alternateLocale: ogAlternateLocales,
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

/** Faaliyet sayfaları — activity.title + activity.description */
export function createActivityMetadata(activity, locale = "tr") {
  return createPageMetadata({
    title: activity.title,
    description: activity.description,
    path: activity.href,
    locale,
    defaultTitle: pageSeo[locale]?.defaultTitle ?? pageSeo.tr.defaultTitle,
    defaultDescription:
      pageSeo[locale]?.defaultDescription ?? pageSeo.tr.defaultDescription,
  });
}
