import FaaliyetPageLayout from "@/components/faaliyet/FaaliyetPageLayout";
import { getActivityBySlug } from "@/data/activities";
import { createActivityMetadata } from "@/lib/seo";

const slug = "yilmazkaya-gyo";
const activity = getActivityBySlug(slug);

export const metadata = createActivityMetadata(activity, "tr");

export default function Page() {
  return <FaaliyetPageLayout activity={activity} />;
}
