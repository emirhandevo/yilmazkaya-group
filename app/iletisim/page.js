import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import {
  pageSectionClass,
  sectionBodyClass,
  sectionLabelClass,
  sectionTitleTightClass,
} from "@/lib/classes";

export default function IletisimPage() {
  return (
    <main className={pageSectionClass}>
      <div className="mb-12 max-w-3xl">
        <p className={sectionLabelClass}>İletişim</p>
        <h1 className={sectionTitleTightClass}>Sorularınızı cevaplayalım</h1>
        <p className={sectionBodyClass}>
          Mesai saatleri içerisinde telefonlarımızdan, mesai saatleri dışında
          ise iletişim formumuz üzerinden bizlere ulaşabilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
