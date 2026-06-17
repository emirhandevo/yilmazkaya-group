"use client";

import { usePathname } from "next/navigation";

export default function FooterSection({ title, children }) {
  const pathname = usePathname();

  const titleClass =
    "text-lg font-semibold border-b border-accent pb-2 text-white";

  return (
    <>
      <details
        key={`${pathname}-${title}`}
        className="group border-b border-zinc-800 py-4 md:hidden"
      >
        <summary className="relative cursor-pointer list-none text-center text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
          {title}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 text-accent transition-transform group-open:rotate-180"
            aria-hidden
          >
            ▾
          </span>
        </summary>
        <div className="pt-4 text-center md:text-left">{children}</div>
      </details>

      <div className="hidden md:flex md:flex-col md:gap-4">
        <h3 className={titleClass}>{title}</h3>
        {children}
      </div>
    </>
  );
}
