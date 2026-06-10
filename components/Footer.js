// Footer component'i - tüm sayfalarda görünen alt bölüm

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaXTwitter, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { accentButtonFitClass } from "@/lib/classes";

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
// Sosyal medya link stili 
const socialClass = "text-sm hover:text-accent transition-colors";
// ---------------------------------------------------------------

    return (
        <footer className="bg-primary text-white mt-auto">

        {/* Ana footer içeriği - 4 sütun */}
        <div className="w-full px-[10%] py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* 1. Sütun - Logo ve sosyal medya */}
            <div className={colClass}>
                <h3 className={`${titleClass} whitespace-nowrap`}>Bizi Takip Edin</h3>
                <div className="flex gap-4">
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

            {/* 2. Sütun - Bülten aboneliği */}
            <div className={colClass}>
            <h3 className={titleClass}>Bülten Aboneliği</h3>
            <p className={textClass}>Kampanya ve duyurularımızdan haberdar olmak ister misiniz?</p>
            <button className={accentButtonFitClass}>Abone Ol</button>
            </div>

            {/* 3. Sütün - Duyurular */}
            <div className={colClass}>
            <h3 className={titleClass}>Duyurular</h3>
            <p className={textClass}>Yeni sitemiz hizmete girmiştir.</p>
            <Link href="#" className="text-sm text-accent hover:underline">Tüm Duyurular</Link>
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

