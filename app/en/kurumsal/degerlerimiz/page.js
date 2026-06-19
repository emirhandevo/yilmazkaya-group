import ValuesPage from "@/components/pages/ValuesPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/kurumsal/degerlerimiz/", "en");

export default function EnValuesPage() {
  return <ValuesPage locale="en" />;
}
