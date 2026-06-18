"use client";

import { useState } from "react";
import FormPrivacyConsent from "@/components/form/FormPrivacyConsent";
import { getUi } from "@/data/ui";
import {
  accentButtonClass,
  inputClass,
  sectionLabelClass,
  subsectionTitleClass,
} from "@/lib/classes";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
  privacyAccepted: false,
};

export default function ContactForm({ locale = "tr" }) {
  const labels = getUi(locale);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage(labels.formRequired);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setErrorMessage(labels.formInvalidEmail);
      return;
    }

    if (!form.privacyAccepted) {
      setStatus("error");
      setErrorMessage(labels.formPrivacyRequired);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || labels.formError);
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || labels.formError);
    }
  };

  return (
    <div className="space-y-6">
      <p className={sectionLabelClass}>{labels.formSendMessage}</p>
      <h2 className={subsectionTitleClass}>{labels.formContactTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-text-muted">
            {labels.formName} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-text-muted">
            {labels.formEmail} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-text-muted">
            {labels.formSubject}
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm text-text-muted">
            {labels.formMessage} *
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <FormPrivacyConsent
          id="contact-privacy"
          checked={form.privacyAccepted}
          onChange={handleChange}
          locale={locale}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className={`${accentButtonClass} disabled:opacity-60`}
        >
          {status === "loading" ? labels.formSending : labels.formSend}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600">{labels.formSuccess}</p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
