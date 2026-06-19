import HomePage from "@/components/pages/HomePage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/", "tr");

export default function Page() {
  return <HomePage locale="tr" />;
}
