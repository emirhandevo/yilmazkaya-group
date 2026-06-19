import PrivacyPage from "@/components/pages/PrivacyPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/kurumsal/gizlilik-politikasi/", "en");

export default function EnPrivacyPage() {
  return <PrivacyPage locale="en" />;
}
