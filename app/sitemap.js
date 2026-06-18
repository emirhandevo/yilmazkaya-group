import { activities } from "@/data/activities";
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

export default function sitemap() {
  const now = new Date();

  const staticPages = staticRoutes.map((route) => ({
    url: `${siteConfig.url}/${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const activityPages = activities.map((activity) => ({
    url: `${siteConfig.url}${activity.href}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...activityPages];
}
