// ContactInfo - İletişim sayfası sol kolon: bilgiler + harita

import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { contactInfo } from "@/data/contact";
import {
  contactLinkClass,
  contactLinkStartClass,
  sectionLabelClass,
  subsectionTitleClass,
} from "@/lib/classes";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <p className={sectionLabelClass}>İletişim Bilgileri</p>
      <h2 className={subsectionTitleClass}>Bize Ulaşın</h2>

      <ul className="space-y-4">
        <li>
          <a
            href={contactInfo.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className={contactLinkStartClass}
          >
            <FaLocationDot size={18} className="mt-1 shrink-0 text-accent" />
            <span>{contactInfo.address}</span>
          </a>
        </li>
        {contactInfo.phones.map((phone) => (
          <li key={phone}>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className={contactLinkClass}
            >
              <FaPhone size={16} className="shrink-0 text-accent" />
              <span>{phone}</span>
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${contactInfo.email}`} className={contactLinkClass}>
            <FaEnvelope size={16} className="shrink-0 text-accent" />
            <span>{contactInfo.email}</span>
          </a>
        </li>
      </ul>

      <div className="h-80 overflow-hidden rounded-lg border border-zinc-200">
        <iframe
          src={contactInfo.mapsEmbed}
          title="Yılmazkaya Group Ofis Konumu"
          className="aspect-video w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
