import FaaliyetPageLayout from "@/components/faaliyet/FaaliyetPageLayout";
import { getActivities, getActivityBySlug } from "@/data/content";
import { createActivityMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getActivities("en").map((activity) => ({
    slug: activity.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug, "en");

  return createActivityMetadata(activity, "en");
}

export default async function EnFaaliyetPage({ params }) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug, "en");

  return <FaaliyetPageLayout activity={activity} locale="en" />;
}
