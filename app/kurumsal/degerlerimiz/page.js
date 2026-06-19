import ValuesPage from "@/components/pages/ValuesPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/kurumsal/degerlerimiz/", "tr");

export default function DegerlerimizPage() {
  return <ValuesPage locale="tr" />;
}
