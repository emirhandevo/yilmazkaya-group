import HomePage from "@/components/pages/HomePage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/", "en");

export default function EnHomePage() {
  return <HomePage locale="en" />;
}
