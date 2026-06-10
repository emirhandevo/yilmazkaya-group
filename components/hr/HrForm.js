"use client";

// HrForm - İş başvurusu formu (PDF CV + hr.php multipart POST)
import { useRef, useState } from "react";
import { hrContent } from "@/data/hr";
import {
  accentButtonClass,
  fileInputClass,
  inputClass,
  subsectionTitleClass,
} from "@/lib/classes";

const MAX_CV_BYTES = hrContent.maxCvSizeMb * 1024 * 1024;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

export default function HrForm() {
  const fileInputRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [cvFile, setCvFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setErrorMessage("");

    if (!file) {
      setCvFile(null);
      return;
    }

    const isPdf =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      setCvFile(null);
      e.target.value = "";
      setErrorMessage("Sadece PDF formatında CV yükleyebilirsiniz.");
      return;
    }

    if (file.size > MAX_CV_BYTES) {
      setCvFile(null);
      e.target.value = "";
      setErrorMessage(`CV dosyası en fazla ${hrContent.maxCvSizeMb} MB olabilir.`);
      return;
    }

    setCvFile(file);
  };

  const resetForm = () => {
    setForm(initialForm);
    setCvFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
    ) {
      setStatus("error");
      setErrorMessage(
        "Lütfen ad, e-posta, telefon ve mesaj alanlarını doldurunuz."
      );
      return;
    }

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setStatus("error");
      setErrorMessage("Geçerli bir telefon numarası giriniz.");
      return;
    }

    if (!cvFile) {
      setStatus("error");
      setErrorMessage("Lütfen PDF formatında özgeçmişinizi yükleyiniz.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setErrorMessage("Geçerli bir e-posta adresi giriniz.");
      return;
    }

    setStatus("loading");

    const payload = new FormData();
    payload.append("name", form.name.trim());
    payload.append("email", form.email.trim());
    payload.append("phone", form.phone.trim());
    payload.append("subject", hrContent.defaultSubject);
    payload.append("message", form.message.trim());
    payload.append("website", form.website);
    payload.append("cv", cvFile);

    try {
      const res = await fetch("/api/hr.php", {
        method: "POST",
        body: payload,
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Gönderim başarısız.");
      }

      setStatus("success");
      resetForm();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err.message || "Bir hata oluştu. Lütfen tekrar deneyiniz."
      );
    }
  };

  return (
    <div>
      <h2 className={subsectionTitleClass}>Başvuru Formu</h2>
      <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
        {hrContent.formHint}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
          <label htmlFor="hr-name" className="mb-1 block text-sm text-text-muted">
            Ad Soyad *
          </label>
          <input
            type="text"
            id="hr-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="hr-email" className="mb-1 block text-sm text-text-muted">
            E-posta *
          </label>
          <input
            type="email"
            id="hr-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="hr-phone" className="mb-1 block text-sm text-text-muted">
            Telefon *
          </label>
          <input
            type="tel"
            id="hr-phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="05XX XXX XX XX"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="hr-subject" className="mb-1 block text-sm text-text-muted">
            Konu
          </label>
          <input
            type="text"
            id="hr-subject"
            name="subject"
            value={hrContent.defaultSubject}
            readOnly
            className={`${inputClass} cursor-not-allowed bg-surface text-text-muted`}
          />
        </div>

        <div>
          <label htmlFor="hr-cv" className="mb-1 block text-sm text-text-muted">
            Özgeçmiş (PDF) *
          </label>
          <input
            ref={fileInputRef}
            type="file"
            id="hr-cv"
            name="cv"
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
            className={fileInputClass}
            required
          />
          <p className="mt-1 text-xs text-text-muted">
            Maks. {hrContent.maxCvSizeMb} MB — yalnızca PDF
            {cvFile ? ` · Seçilen: ${cvFile.name}` : ""}
          </p>
        </div>

        <div>
          <label htmlFor="hr-message" className="mb-1 block text-sm text-text-muted">
            Yetkinlikler / Kısa Özet *
          </label>
          <textarea
            id="hr-message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder={hrContent.messagePlaceholder}
            className={inputClass}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`${accentButtonClass} disabled:opacity-60`}
        >
          {status === "loading" ? "Gönderiliyor..." : "Başvuruyu Gönder →"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600">
            Başvurunuz iletildi. İnsan Kaynakları ekibimiz en kısa sürede sizinle
            iletişime geçecektir.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
