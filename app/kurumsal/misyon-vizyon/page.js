import MissionVisionPage from "@/components/pages/MissionVisionPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/kurumsal/misyon-vizyon/", "tr");

export default function MisyonVizyonPage() {
  return <MissionVisionPage locale="tr" />;
}
