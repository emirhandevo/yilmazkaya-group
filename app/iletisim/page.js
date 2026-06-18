import ContactPage from "@/components/pages/ContactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Yılmazkaya Group iletişim bilgileri ve iletişim formu. Telefon, e-posta ve adres.",
  path: "/iletisim/",
});

export default function IletisimPage() {
  return <ContactPage locale="tr" />;
}
