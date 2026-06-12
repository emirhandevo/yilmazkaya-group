"use client";

// Navbar component'ı - tüm sayfalarda görünen üst menü
//
// NOT (sonraki geliştirici için):
// Desktop dropdown'lar 3 yolla açılır — hepsi bilinçli, birini silme:
//   1) Mouse hover  → group-hover:max-h-96 (CSS, smooth duration-700)
//   2) Tablet/touch   → butona tıklayınca openDropdown state
//   3) Klavye         → Enter/Space + group-focus-within (Tab ile butona gelince de açılır)
//
// iPad Max gibi geniş tabletler lg (1024px) üstünde desktop menü görür ama hover yok.
// Bu yüzden sadece hover yetmez; openDropdown + tıklama şart.
//
// onMouseLeave ile kapatmayı DENEDİK, tablet'te dokununca sahte mouseleave tetiklenip
// menü hemen kapanıyordu — o yüzden kaldırdık. Kapatma: dışarı tık, Escape, link tıkı.
// Link tıklanınca hoverSuppressed ile group class geçici kaldırılır — group-hover açık tutmasın.
//
// Yeni menü eklemek / sırasını değiştirmek → alttaki menuItems dizisine bak.

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// ---- MENÜ YAPISI - yeni sayfa veya menü öğesi eklerken buraya bak ----
const menuItems = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Faaliyet Alanları",
    children: [
      { label: "Yılmazkaya Teknoloji", href: "/faaliyet-alanlari/yilmazkaya-teknoloji" },
      { label: "Alarasol Organik Gübre", href: "/faaliyet-alanlari/alarasol-organik-gubre" },
      { label: "Doğa Village", href: "/faaliyet-alanlari/doga-village" },
      { label: "Yılmazkaya GYO", href: "/faaliyet-alanlari/yilmazkaya-gyo" },
      { label: "YK Fuarcılık", href: "/faaliyet-alanlari/yk-fuarcilik" },
      { label: "Yılmazkaya Barter A.Ş.", href: "/faaliyet-alanlari/yilmazkaya-barter" },
      { label: "Yılmazkaya Tekstil & Halı", href: "/faaliyet-alanlari/yilmazkaya-tekstil" },
      { label: "Yılmazkaya Baskı Teknikleri", href: "/faaliyet-alanlari/yilmazkaya-baski-teknikleri" },
      { label: "Yılmazkaya Vakfı", href: "/faaliyet-alanlari/yilmazkaya-vakif" },
    ],
  },
  { label: "İnsan Kaynakları", href: "/insan-kaynaklari" },
  { label: "İletişim", href: "/iletisim" },
  {
    label: "Kurumsal",
    children: [
      { label: "Duyurular", href: "/duyurular" },
      { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { label: "Misyon - Vizyon", href: "/kurumsal/misyon-vizyon" },
      { label: "Değerlerimiz", href: "/kurumsal/degerlerimiz" },
    ],
  },
];

export default function Navbar() {
  // Hamburger menünün açık/kapalı durumu (1024px altı)
  const [menuOpen, setMenuOpen] = useState(false);
  // Mobil panelde hangi accordion açık — null ise hiçbiri
  const [openItems, setOpenItems] = useState(null);
  // Desktop dropdown — hangi başlık tıklama/klavye ile açık (hover bunu kullanmaz, CSS halleder)
  const [openDropdown, setOpenDropdown] = useState(null);
  // Link tıklanınca group-hover'ı kes — fare hâlâ menüdeyken dropdown kapanır
  const [hoverSuppressed, setHoverSuppressed] = useState(null);

  // Tablet + klavye için dropdown aç/kapa — functional update stale closure önler
  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // Mobil menüyü(hamburger) kapat + accordion'ları sıfırla
  const closeMobilMenu = () => {
    setMenuOpen(false);
    setOpenItems(null);
  };

  // Ekran 1024px üstüne geçince mobil paneli otomatik kapat
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop dropdown kapatma — tablet'te stopPropagation güvenilir değil,
  // data-desktop-dropdown attribute'u ile "içeride mi" kontrol ediyoruz
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("[data-desktop-dropdown]")) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ---- CLASS DEĞİŞKENLERİ - stil değiştirmek isteyince buraya bak ----
  const desktopLinkClass =
    "text-base font-medium hover:text-accent transition-colors py-2";
  const desktopButtonClass =
    "text-base font-medium hover:text-accent transition-colors flex items-center gap-1 py-2 cursor-pointer";
  const dropdownLinkClass =
    "block px-4 py-2 text-sm text-center rounded-md hover:bg-zinc-900 hover:ring ring-accent ring-inset hover:text-accent transition-all duration-200";
  // Dropdown kutusu — kapalı: max-h-0 | mouse: group-hover | klavye: group-focus-within
  // before:-top-2 → buton ile kutu arası boşlukta hover kopmasın diye görünmez köprü
  // pointer-events-none kapalıyken → hayalet tıklama olmasın
  const dropdownMenuClass =
    "absolute top-full left-1/2 -translate-x-1/2 bg-white text-text shadow-lg rounded-md w-56 z-50 overflow-hidden max-h-0 transition-all duration-700 ease-in-out text-center pointer-events-none group-hover:max-h-96 group-hover:pointer-events-auto group-focus-within:max-h-96 group-focus-within:pointer-events-auto before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-['']";
  // Tıklama/klavye ile açıkken eklenir — hover bunu kullanmaz
  const dropdownMenuOpenClass = "max-h-96 pointer-events-auto";
  const mobileIconBtnClass =
    "rounded-lg border border-zinc-600 p-2 text-xl text-white transition-all hover:bg-zinc-700 active:scale-95 active:border-accent active:bg-zinc-800 active:text-accent";
  const hamburgerBtnClass = `lg:hidden ml-auto ${mobileIconBtnClass}`;
  const mobileLinkClass =
    "block rounded-md py-4 text-sm font-medium text-white transition-all hover:text-accent active:scale-[0.99] active:bg-zinc-800 active:text-accent";
  const mobileAccordionBtnClass =
    "flex w-full items-center justify-between rounded-md py-4 text-sm font-medium text-white transition-all hover:text-accent active:scale-[0.99] active:bg-zinc-800 active:text-accent";
  const mobileChildLinkClass =
    "block rounded-md py-2 pl-4 text-sm text-zinc-400 transition-colors hover:text-accent active:bg-zinc-800 active:text-accent focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset";
  // ----------------------------------------------------------------

  return (
    <nav className="bg-primary text-white w-full">
      <div className="w-full px-[10%] gap-[14%] h-25 flex items-center">
        <div className="flex items-center gap-10 shrink-0">
          <Link href="/" className="text-xl font-bold text-accent hover hover:opacity-60 transition-all">
            <Image
              src="/logo.png"
              alt="Yılmazkaya Group"
              width={260}
              height={260}
              style={{ height: "65px", width: "auto" }}
            />
          </Link>
        </div>

        {/* Desktop menü - 1024px altında gizlenir, hamburger devreye girer */}
        <ul className="hidden lg:flex items-center gap-8 whitespace-nowrap">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={
                item.children
                  ? `relative${hoverSuppressed === item.label ? "" : " group"}`
                  : "relative"
              }
              // data-desktop-dropdown → dışarı tıklama kontrolü için (alt menülü öğelerde)
              {...(item.children ? { "data-desktop-dropdown": true } : {})}
              onMouseLeave={
                item.children ? () => setHoverSuppressed(null) : undefined
              }
            >
              {item.href ? (
                <Link href={item.href} className={desktopLinkClass}>
                  {item.label}
                </Link>
              ) : (
                /* Alt menülü başlıklar — hover (css) + tıklama + klavye (state) */
                <button
                  type="button"
                  className={desktopButtonClass}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  onClick={() => toggleDropdown(item.label)}
                  onKeyDown={(e) => {
                    // Enter ve Space ile de açılsın (erişilebilirlik)
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleDropdown(item.label);
                    }
                  }}
                >
                  {item.label}
                  <span className="text-xs">▾</span>
                </button>
              )}

              {/* Dropdown listesi — hover VEYA openDropdown ile görünür */}
              {item.children && (
                <ul
                  className={`${dropdownMenuClass} ${
                    openDropdown === item.label ? dropdownMenuOpenClass : ""
                  }`}
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className={dropdownLinkClass}
                        onClick={() => {
                          setOpenDropdown(null);
                          setHoverSuppressed(item.label);
                          document.activeElement?.blur();
                        }}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger — sadece lg altında görünür */}
        <button
          className={hamburgerBtnClass}
          onClick={() => {
            if (menuOpen) {
              closeMobilMenu();
            } else {
              setOpenItems(null);
              setMenuOpen(true);
            }
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menü açıkken arkadaki karartı - tıklanınca kapanır (inset-0=tüm ekran lg:hidden=desktopta backdrop yok) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobilMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobil panel — sağdan kayar, accordion mantığı openItems ile */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-zinc-900 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-25 border-b border-zinc-700">
          <span className="text-white font-semibold">Menü</span>
          <button
            onClick={() => setMenuOpen(false)}
            className={`${mobileIconBtnClass} mr-[50px]`}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col px-6 py-4">
          {menuItems.map((item) => (
            <div key={item.label} className="border-b border-zinc-700">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setOpenItems(
                        openItems === item.label ? null : item.label
                      )
                    }
                    className={mobileAccordionBtnClass}
                  >
                    {item.label}
                    <span>{openItems === item.label ? "▲" : "▼"}</span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems === item.label ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className={mobileChildLinkClass}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
