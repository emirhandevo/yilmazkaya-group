import AnnouncementsPage from "@/components/pages/AnnouncementsPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/duyurular/", "tr");

export default function DuyurularPage() {
  return <AnnouncementsPage locale="tr" />;
}
