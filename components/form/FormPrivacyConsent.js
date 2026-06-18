import Link from "next/link";

export default function FormPrivacyConsent({ id, checked, onChange }) {
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
        <Link
          href="/kurumsal/gizlilik-politikasi"
          className="text-accent hover:underline"
        >
          Gizlilik Politikası
        </Link>
        {" "}
        kapsamında kişisel verilerimin işlenmesini kabul ediyorum. *
      </span>
    </label>
  );
}
