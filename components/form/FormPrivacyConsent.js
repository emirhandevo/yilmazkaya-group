import Link from "next/link";
import { localizeHref } from "@/lib/i18n";
import { getUi } from "@/data/ui";

export default function FormPrivacyConsent({ id, checked, onChange, locale = "tr" }) {
  const labels = getUi(locale);
  const privacyHref = localizeHref("/kurumsal/gizlilik-politikasi", locale);

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-3 text-sm text-text-muted"
    >
      <input
        id={id}
        name="privacyAccepted"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required
        className="mt-1 h-4 w-4 shrink-0 accent-accent"
      />
      <span>
        {locale === "en" ? (
          <>
            I agree to the processing of my personal data under the{" "}
            <Link href={privacyHref} className="text-accent hover:underline">
              {labels.privacyLink}
            </Link>
            . *
          </>
        ) : (
          <>
            <Link href={privacyHref} className="text-accent hover:underline">
              {labels.privacyLink}
            </Link>{" "}
            {labels.privacyConsent}
          </>
        )}
      </span>
    </label>
  );
}
