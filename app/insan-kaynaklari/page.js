import HrPage from "@/components/pages/HrPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/insan-kaynaklari/", "tr");

export default function InsanKaynaklariPage() {
  return <HrPage locale="tr" />;
}
