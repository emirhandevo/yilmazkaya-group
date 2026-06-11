// Footer component'i - tüm sayfalarda görünen alt bölüm

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaXTwitter, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { accentButtonFitClass } from "@/lib/classes";
import { activities } from "@/data/activities";
import { announcements } from "@/data/announcements";

const latestAnnouncement = announcements[0];

const kurumsalLinks = [
  { label: "Duyurular", href: "/duyurular" },
  { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
  { label: "Misyon - Vizyon", href: "/kurumsal/misyon-vizyon" },
  { label: "Değerlerimiz", href: "/kurumsal/degerlerimiz" },
];

const activitySplitIndex = Math.ceil(activities.length / 2);
const activitiesColA = activities.slice(0, activitySplitIndex);
const activitiesColB = activities.slice(activitySplitIndex);

function shortenActivityLabel(title) {
  return title.replace(/^Yılmazkaya\s+/u, "YK ");
}

export default function Footer() {

// ---- ClaSS DEĞİşKENLERİ - değiştirmek isteyince buraya bak ----
// Sütun wrapper stili (div)
const colClass = "flex flex-col gap-4 items-center md:items-start"
// Sütun başlık stili (h3)
const titleClass = "text-lg font-semibold mb-2 border-b border-accent pb-2";
// Sütun paragraf stili (p)
const textClass = "text-sm text-zinc-300";
// Sütun link stili 
const linkClass  = "text-sm text-zinc-300 hover:text-accent transition-colors flex items-center gap-2";
// Hızlı erişim link stili
const quickLinkClass = "text-sm text-zinc-300 hover:text-accent transition-colors";
// Alt grup başlığı (Faaliyet, Genel, Kurumsal)
const groupLabelClass =
  "text-xs font-semibold uppercase tracking-widest text-zinc-500";
// Sosyal medya link stili 
const socialClass = "text-sm hover:text-accent transition-colors";
// ---------------------------------------------------------------

    return (
        <footer className="bg-primary text-white mt-auto">

        {/* Ana footer içeriği - 4 sütun */}
        <div className="w-full px-[10%] py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

            {/* 1. Sütun - Logo ve sosyal medya */}
            <div className={colClass}>
                <h3 className={`${titleClass} whitespace-nowrap`}>Bizi Takip Edin</h3>
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/ziyayilmazkaya/" target="_blank" rel="noopener noreferrer" className={socialClass}><FaFacebook size={22}/></a>
                  <a href="https://www.instagram.com/yilmazkaya_group/" target="_blank" rel="noopener noreferrer" className={socialClass}><FaInstagram size={22}/></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className={socialClass}><FaXTwitter size={22}/></a>
                </div>
                <Image
                    src="/logo.png"
                    alt="Yılmazkaya Group"
                    width={280}
                    height={90}
                    className="h-[55px] w-auto md:ml-[-25px] ml-[10px] shrink-0 hover:opacity-80 transition-opacity"
/>
            </div>

            {/* 2. Sütun - Hızlı Erişim (sol: genel+kurumsal | sağ: faaliyet) */}
            <div className={`${colClass} w-full min-w-[280px] shrink-0 lg:pr-8 xl:pr-10`}>
              <h3 className={`${titleClass} w-full text-center`}>Hızlı Erişim</h3>
              <div className="grid w-max max-w-full grid-cols-3 gap-x-4 gap-y-2">
                <div className="flex flex-col gap-2">
                  <p className={groupLabelClass}>Genel</p>
                  <Link href="/" className={quickLinkClass}>
                    Anasayfa
                  </Link>
                  <p className={`${groupLabelClass} mt-2`}>Kurumsal</p>
                  {kurumsalLinks.map((item) => (
                    <Link key={item.href} href={item.href} className={quickLinkClass}>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <p className={`${groupLabelClass} whitespace-nowrap text-center w-full`}>
                    Faaliyet A.
                  </p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                    <div className="flex flex-col gap-2">
                      {activitiesColA.map((item) => (
                        <Link key={item.href} href={item.href} className={quickLinkClass}>
                          {shortenActivityLabel(item.title)}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      {activitiesColB.map((item) => (
                        <Link key={item.href} href={item.href} className={quickLinkClass}>
                          {shortenActivityLabel(item.title)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Sütün - Duyurular */}
            <div className={`${colClass} lg:pl-4 xl:pl-6`}>
            <h3 className={titleClass}>Duyurular</h3>
            {latestAnnouncement && (
              <p className={textClass}>{latestAnnouncement.summary}</p>
            )}
            <Link href="/duyurular" className={accentButtonFitClass}>
              Tüm Duyurular
            </Link>
            </div>

            {/* 4. Sütün - İletişim bilgileri */}
            <div className={colClass}>
            <h3 className={titleClass}>İletişim</h3>
            <a  
                href="https://maps.google.com/?q=Gökevler+Mahallesi+Hadımköy+yanyol+Burç+İstanbul+Plaza+K:28+Esenyurt+İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}>
                    <FaLocationDot size={15} className="mt-1 shrink-0"/>
                    MRK: Gökevler MH, Hadımköy yanyol Burç İstanbul plaza K:28 Esenyurt İstanbul
            </a>
            <a href="mailto:info@yilmazkayagroup.com.tr"
            className={linkClass}>
                <FaEnvelope size={15} className="shrink-0"/>
            info@yilmazkayagroup.com.tr
            </a>
            <a href="tel:02129312021" className={linkClass}>
                <FaPhone size={15} className="shrink-0"/>
                0212 931 2021</a>
            <a href="tel:02129995102" className={linkClass}>
                <FaPhone size={15} className="shrink-0"/>
                0212 999 5102</a>
            </div>

        </div>

        {/* Alt copyright bölümü */}
        <div className="border-t border-zinc-500 py-6 px-[10%] text-sm text-zinc-400 text-center">
            Copyright © 2026 <Link href="/" className="text-accent hover:underline">YILMAZKAYA GROUP</Link>. All Rights Reserved.
        </div>

        </footer>
    );
}
