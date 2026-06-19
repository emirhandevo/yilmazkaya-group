import ContactPage from "@/components/pages/ContactPage";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/iletisim/", "en");

export default function EnContactPage() {
  return <ContactPage locale="en" />;
}
