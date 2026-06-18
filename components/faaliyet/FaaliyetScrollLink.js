"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/lib/LocaleContext";
import { localizeHref } from "@/lib/i18n";

const linkClass =
  "text-sm text-zinc-300 transition-colors hover:text-accent cursor-pointer bg-transparent border-0 p-0 font-inherit text-left text-center md:text-left";

function scrollToFaaliyet() {
  document
    .getElementById("faaliyet-alanlari")
    ?.scrollIntoView({ behavior: "smooth" });
}

export default function FaaliyetScrollLink({ label = "Faaliyet Alanları" }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const homeHref = localizeHref("/", locale);

  function handleClick(e) {
    e.preventDefault();
    const isHome = pathname === "/" || pathname === "/en" || pathname === "/en/";

    if (isHome) {
      scrollToFaaliyet();
      return;
    }

    router.push(homeHref);
    setTimeout(scrollToFaaliyet, 300);
  }

  return (
    <button type="button" onClick={handleClick} className={linkClass}>
      {label}
    </button>
  );
}
