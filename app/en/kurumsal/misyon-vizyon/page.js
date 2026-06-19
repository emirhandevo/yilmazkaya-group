import MissionVisionPage from "@/components/pages/MissionVisionPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/kurumsal/misyon-vizyon/", "en");

export default function EnMissionVisionPage() {
  return <MissionVisionPage locale="en" />;
}
