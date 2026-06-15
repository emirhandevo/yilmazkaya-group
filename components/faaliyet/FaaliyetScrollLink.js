"use client";

import { usePathname, useRouter } from "next/navigation";

// Footerdaki faaliyet alanları linki için scroll link componenti - Faaliyet alanları bölümüne her tıklamada scroll yapar

const linkClass =
  "text-sm text-zinc-300 transition-colors hover:text-accent cursor-pointer bg-transparent border-0 p-0 font-inherit text-left";

function scrollToFaaliyet() {
  document
    .getElementById("faaliyet-alanlari")
    ?.scrollIntoView({ behavior: "smooth" });
}

export default function FaaliyetScrollLink() {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    if (pathname === "/") {
      scrollToFaaliyet();
      return;
    }

    router.push("/");
    setTimeout(scrollToFaaliyet, 300);
  }

  return (
    <button type="button" onClick={handleClick} className={linkClass}>
      Faaliyet Alanları
    </button>
  );
}
