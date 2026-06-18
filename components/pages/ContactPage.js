import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { getUi } from "@/data/ui";
import {
  pageSectionClass,
  sectionBodyClass,
  sectionLabelClass,
  sectionTitleTightClass,
} from "@/lib/classes";

export default function ContactPage({ locale = "tr" }) {
  const labels = getUi(locale);

  return (
    <main className={pageSectionClass}>
      <div className="mb-12 max-w-3xl">
        <p className={sectionLabelClass}>{labels.contact}</p>
        <h1 className={sectionTitleTightClass}>{labels.contactPageTitle}</h1>
        <p className={sectionBodyClass}>{labels.contactPageIntro}</p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <ContactInfo locale={locale} />
        <ContactForm locale={locale} />
      </div>
    </main>
  );
}
