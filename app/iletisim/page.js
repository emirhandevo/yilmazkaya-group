import ContactPage from "@/components/pages/ContactPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/iletisim/", "tr");

export default function IletisimPage() {
  return <ContactPage locale="tr" />;
}
