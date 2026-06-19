import AnnouncementsPage from "@/components/pages/AnnouncementsPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/duyurular/", "en");

export default function EnAnnouncementsPage() {
  return <AnnouncementsPage locale="en" />;
}
