import HrPage from "@/components/pages/HrPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/insan-kaynaklari/", "en");

export default function EnHrPage() {
  return <HrPage locale="en" />;
}
