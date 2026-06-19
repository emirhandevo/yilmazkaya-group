import AboutPage from "@/components/pages/AboutPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/kurumsal/hakkimizda/", "tr");

export default function HakkimizdaPage() {
  return <AboutPage locale="tr" />;
}
