import AboutPage from "@/components/pages/AboutPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/kurumsal/hakkimizda/", "en");

export default function EnAboutPage() {
  return <AboutPage locale="en" />;
}
