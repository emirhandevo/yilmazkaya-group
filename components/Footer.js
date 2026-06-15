// Footer component'i - tüm sayfalarda görünen alt bölüm

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { accentButtonFitOnDarkClass } from "@/lib/classes";
import { announcements } from "@/data/announcements";

const quickLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
  { label: "Misyon - Vizyon", href: "/kurumsal/misyon-vizyon" },
  { label: "Değerlerimiz", href: "/kurumsal/degerlerimiz" },
  { label: "Faaliyet Alanları", href: "/#faaliyet-alanlari" },
  { label: "İletişim", href: "/iletisim" },
];

const recentAnnouncements = announcements.slice(0, 3);

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61590541030026",
    icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/yilmazkaya_group/",
    icon: FaInstagram,
    label: "Instagram",
  },
  { href: "#", icon: FaXTwitter, label: "X" },
];

function FooterLinks() {
  return (
    <ul className="flex flex-col gap-2.5">
      {quickLinks.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-sm text-zinc-300 transition-colors hover:text-accent"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterAnnouncements() {
  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-3">
        {recentAnnouncements.map((item) => (
          <li key={item.id}>
            <Link
              href="/duyurular"
              className="group block rounded-md transition-colors hover:text-accent"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {item.date}
              </p>
              <p className="mt-1 text-sm font-semibold text-white group-hover:text-accent">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                {item.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/duyurular" className={accentButtonFitOnDarkClass}>
        Tüm Duyurular
      </Link>
    </div>
  );
}

function FooterContact() {
  const linkClass =
    "flex items-start gap-3 text-sm text-zinc-300 transition-colors hover:text-accent";

  return (
    <div className="flex flex-col gap-3">
      <a
        href="https://maps.google.com/?q=Gökevler+Mahallesi+Hadımköy+yanyol+Burç+İstanbul+Plaza+K:28+Esenyurt+İstanbul"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <FaLocationDot size={15} className="mt-0.5 shrink-0" />
        <span>
          MRK: Gökevler MH, Hadımköy yanyol Burç İstanbul plaza K:28 Esenyurt
          İstanbul
        </span>
      </a>
      <a href="mailto:info@yilmazkayagroup.com.tr" className={linkClass}>
        <FaEnvelope size={15} className="mt-0.5 shrink-0" />
        info@yilmazkayagroup.com.tr
      </a>
      <a href="tel:02129312021" className={linkClass}>
        <FaPhone size={15} className="shrink-0" />
        0212 931 2021
      </a>
      <a href="tel:02129995102" className={linkClass}>
        <FaPhone size={15} className="shrink-0" />
        0212 999 5102
      </a>
    </div>
  );
}

function FooterSection({ title, children, defaultOpen = false }) {
  const titleClass =
    "text-lg font-semibold border-b border-accent pb-2 text-white";

  return (
    <>
      <details
        className="group border-b border-zinc-800 py-4 md:hidden"
        open={defaultOpen}
      >
        <summary className="cursor-pointer list-none text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between gap-4">
            {title}
            <span
              className="text-accent transition-transform group-open:rotate-180"
              aria-hidden
            >
              ▾
            </span>
          </span>
        </summary>
        <div className="pt-4">{children}</div>
      </details>

      <div className="hidden md:flex md:flex-col md:gap-4">
        <h3 className={titleClass}>{title}</h3>
        {children}
      </div>
    </>
  );
}

export default function Footer() {
  const socialClass = "text-zinc-300 transition-colors hover:text-accent";

  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="border-b border-zinc-800 px-[10%] py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Yılmazkaya Group"
              width={280}
              height={90}
              className="h-12 w-auto transition-opacity hover:opacity-80 md:h-14"
            />
          </Link>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Bizi Takip Edin
            </p>
            <div className="flex gap-5">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={socialClass}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10%] py-10 md:py-12">
        <div className="md:grid md:grid-cols-3 md:gap-12 lg:gap-16">
          <FooterSection title="Hızlı Erişim" defaultOpen>
            <FooterLinks />
          </FooterSection>

          <FooterSection title="Duyurular">
            <FooterAnnouncements />
          </FooterSection>

          <FooterSection title="İletişim">
            <FooterContact />
          </FooterSection>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-[10%] py-6 text-center text-sm text-zinc-400">
        Copyright © 2026{" "}
        <Link href="/" className="text-accent hover:underline">
          YILMAZKAYA GROUP
        </Link>
        . All Rights Reserved.
      </div>
    </footer>
  );
}
