"use client";

// ContactForm - İletişim sayfası formu (statik sitede PHP ' ye POST atar)
import { useState } from "react";
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
    website: "", // honeypot - botlar doldurursa reddet
};

export default function ContactForm() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMessage, setErrorMessage] = useState("");


const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    // Basit validasyon
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        setStatus("error");
        setErrorMessage("Lütfen ad, e-posta ve mesaj alanlarını doldurunuz.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setStatus("error");
        setErrorMessage("Geçerli bir e-posta adresi giriniz.");
        return;
    }

    setStatus("loading");

    try {
        const res = await fetch("/api/contact.php", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form),
        });
        const data = await res.json();

        if (!res.ok || !data.success) {
            throw new Error(data.error || "Gönderim başarısız.");
        }
        setStatus("success");
        setForm(initialForm);
    } catch (err) {
        setStatus("error");
        setErrorMessage(
            err.message || "Bir hata oluştu. Lütfen tekrar deneyiniz."
        );
    }   
};

return (
    <div className="space-y-6">
        <p className={sectionLabelClass}>Mesaj Gönderin</p>
        <h2 className={subsectionTitleClass}>İletişim Formu</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
            {/* Honeypot - görünmez, insan doldurmaz */}
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
                    Ad Soyad *
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
                    E-posta *
                </label>
                <input type="email"
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
                    Konu
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
                    Mesaj *
                </label>
                <textarea name="message" id="message" rows="5"
                value={form.message}
                onChange={handleChange}
                className={inputClass}
                required
                />
            </div>

            <button type="submit" disabled={status === "loading"} className={`${accentButtonClass} disabled:opacity-60`}>
                {status === "loading" ? "Gönderiliyor..." : "Gönder →"}
            </button>

            {status === "success" && (
                <p className="text-sm text-green-600">Mesajınız iletildi. En kısa sürede sizlere geri dönüş yapacağız.</p>
            )}

            {status === "error" && (
                <p className="text-sm text-red-600">{errorMessage}</p>
            )} 
        </form>
    </div>
);
}