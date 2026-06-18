"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/lib/LocaleContext";
import { getLocaleFromPath } from "@/lib/i18n";

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleProvider locale={locale}>
      <Navbar />
      {children}
      <Footer />
    </LocaleProvider>
  );
}
