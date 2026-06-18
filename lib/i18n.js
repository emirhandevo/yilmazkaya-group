export const locales = ["tr", "en"];
export const defaultLocale = "tr";

export function getLocaleFromPath(pathname = "/") {
  return pathname.startsWith("/en") ? "en" : "tr";
}

/** TR path ↔ EN path (trailing slash uyumlu) */
export function getAlternatePath(pathname = "/", targetLocale) {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const withoutEn = normalized.replace(/^\/en(\/|$)/, "/");

  if (targetLocale === "en") {
    return withoutEn === "/" ? "/en/" : `/en${withoutEn}`;
  }

  return withoutEn === "/" ? "/" : withoutEn;
}

export function localizeHref(href, locale) {
  if (locale !== "en") {
    return href.replace(/^\/en/, "") || "/";
  }

  if (href === "/" || href === "") return "/en/";
  if (href.startsWith("/en")) return href.endsWith("/") ? href : `${href}/`;
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) {
    return href;
  }

  const path = href.endsWith("/") ? href : `${href}/`;
  return `/en${path}`;
}
