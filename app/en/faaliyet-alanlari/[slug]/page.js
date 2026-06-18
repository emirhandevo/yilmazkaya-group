import FaaliyetPageLayout from "@/components/faaliyet/FaaliyetPageLayout";
import { getActivities, getActivityBySlug } from "@/data/content";

export function generateStaticParams() {
  return getActivities("en").map((activity) => ({
    slug: activity.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug, "en");

  return {
    title: `${activity.title} | Yılmazkaya Group`,
    description: activity.description,
  };
}

export default async function EnFaaliyetPage({ params }) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug, "en");

  return <FaaliyetPageLayout activity={activity} locale="en" />;
}
