# Yılmazkaya Group — Kurumsal Web Sitesi

[Yılmazkaya Group](https://yilmazkayagroup.com.tr) için sıfırdan geliştirdiğim kurumsal tanıtım sitesi. Tasarım, frontend, veri yapısı ve form backend'i dahil tüm kodu ben yazdım.

## Proje hakkında

Çok şirketli bir holding yapısına sahip kurumsal site: ana sayfa, kurumsal sayfalar (Hakkımızda, Misyon-Vizyon, Değerlerimiz), 9 faaliyet alanı detay sayfası, iletişim ve insan kaynakları (CV yükleme) modülleri.

Site **statik export** (`output: 'export'`) ile üretiliyor; canlı ortamda **shared hosting (cPanel)** üzerinden servis edilecek. Bu mimari seçimi bilinçli: hosting paketinde WordPress siteleri de barındırılacağı için tek sunucuda düşük maliyetle yönetim, API route / serverless bağımlılığı yok.

## Neden PHP formlar?

İletişim ve İK formları **Next.js API Route** yerine **`public/api/contact.php`** ve **`public/api/hr.php`** ile çalışıyor:

- Statik export'ta Node.js backend çalışmaz; shared host'ta PHP zaten mevcut
- Vakıf ve Barter siteleri de aynı hosting'de WordPress + PHP kullanıyor — tek stack, tek deploy modeli
- Hassas anahtarlar (`mail-config.php`) sunucuda kalır, repoya girmez
- İK formunda PDF CV multipart upload + opsiyonel Brevo entegrasyonu

Vercel üzerinde **önizleme/staging**; formlar canlıda shared host'ta test edilir.

## Tech stack

- **Next.js 16** (App Router) — React 19
- **Tailwind CSS 4**
- **Static export** — `trailingSlash`, `images.unoptimized`
- **PHP** — iletişim + İK form handler
- Veri: merkezi `data/` modülleri (`activities.js`, `contact.js`, …)
- Ortak UI: `lib/classes.js` + yeniden kullanılabilir layout bileşenleri

## Öne çıkanlar

- Tek şablondan 9 faaliyet sayfası (`FaaliyetPageLayout` + slug tabanlı routing)
- Responsive navbar, hero slider, istatistik ve CTA bantları
- Client-side form validasyonu + honeypot spam koruması
- Git'e secret girmeden Brevo/mail yapılandırması (`mail-config.example.php`)

## Proje yapısı

```text
app/                    # Sayfa route'ları
components/             # UI bileşenleri
data/                   # Merkezi içerik verisi
lib/classes.js          # Tailwind class sabitleri
public/api/             # PHP form handler'ları
public/hero/            # Faaliyet hero görselleri
public/faaliyet/        # Faaliyet gallery görselleri
```

## Lokal geliştirme

```bash
npm install
npm run dev          # UI geliştirme (localhost:3000)
npm run build        # out/ klasörü (production)
```

Form testi (PHP gerekir):

```bash
npm run build && cd out && php -S localhost:8080
```

## Deploy

| Ortam | Amaç |
|-------|------|
| Vercel | Önizleme, portfolyo linki |
| Shared hosting | Canlı site + çalışan formlar (`out/` upload) |

Shared host'a yüklemeden önce `public/api/mail-config.example.php` dosyasını `mail-config.php` olarak kopyalayıp API anahtarını sunucuda tanımlayın.

---

*Kişisel portfolyo projesi — Yılmazkaya Group*
