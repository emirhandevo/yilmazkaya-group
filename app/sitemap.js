import { getActivities } from "@/data/content";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "duyurular/",
  "iletisim/",
  "insan-kaynaklari/",
  "kurumsal/hakkimizda/",
  "kurumsal/misyon-vizyon/",
  "kurumsal/degerlerimiz/",
  "kurumsal/gizlilik-politikasi/",
];

function mapRoutes(routes, prefix = "") {
  return routes.map((route) => ({
    path: `${prefix}${route}`,
    priority: route === "" && prefix === "" ? 1 : 0.8,
    changeFrequency: route === "" && prefix === "" ? "weekly" : "monthly",
  }));
}

export default function sitemap() {
  const now = new Date();
  const trRoutes = mapRoutes(staticRoutes);
  const enRoutes = mapRoutes(staticRoutes, "en/");

  const staticPages = [...trRoutes, ...enRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}/${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const trActivityPages = getActivities("tr").map((activity) => ({
    url: `${siteConfig.url}${activity.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const enActivityPages = getActivities("en").map((activity) => ({
    url: `${siteConfig.url}${activity.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...trActivityPages, ...enActivityPages];
}
