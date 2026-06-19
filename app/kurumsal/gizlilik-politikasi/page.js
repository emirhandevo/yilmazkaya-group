import PrivacyPage from "@/components/pages/PrivacyPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/kurumsal/gizlilik-politikasi/", "tr");

export default function GizlilikPolitikasiPage() {
  return <PrivacyPage locale="tr" />;
}
