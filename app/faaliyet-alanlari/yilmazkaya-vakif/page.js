import FaaliyetPageLayout from "@/components/faaliyet/FaaliyetPageLayout";
import { getActivityBySlug } from "@/data/activities";

const slug = "yilmazkaya-vakif";
const activity = getActivityBySlug(slug);

export const metadata = {
  title: `${activity.title} | Yılmazkaya Group`,
  description: activity.description,
};

export default function Page() {
  return <FaaliyetPageLayout activity={activity} />;
}
