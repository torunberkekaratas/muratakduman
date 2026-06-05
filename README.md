# WUNSC — Kurumsal Web Sitesi

H&V Kozmetik / Koçkar Makine Kimya çatısı altında üç markayı (**WUNSCHOME**, **WUNSC Industrial**, **WIEBERR**) tek kurumsal sitede toplayan, satış/lead odaklı, çok dilli (TR + EN) kurumsal web sitesi.

`WUNSC_Web_Sitesi_Sayfa_Plani.docx` sayfa planına göre hazırlanmıştır.

---

## 🚀 Çalıştırma

Gereksinim: **Node.js 18.18+** (önerilen 20+).

```bash
npm install        # bağımlılıkları yükle (bir kez)
npm run dev        # geliştirme sunucusu  -> http://localhost:3000
npm run build      # production derleme
npm start          # production sunucusu (önce build)
```

Açılışta `/` → tarayıcı diline göre `/tr` veya `/en`'e yönlenir.

---

## 🧱 Teknoloji

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (özel mavi-yeşil kurumsal tema)
- Kütüphanesiz çok dillilik (TR/EN) — `middleware.ts` + sözlük tabanlı
- Tüm sayfalar statik (SSG) olarak önceden üretilir; hızlı ve SEO dostu

---

## 📂 Proje yapısı

```
app/
  [locale]/              # tüm sayfalar (tr / en)
    page.tsx             # Ana sayfa
    about/               # Hakkımızda
    brands/              # Markalar hub + [slug] marka sayfaları
    products/            # Ürün kataloğu (filtreli) + [id] ürün detay
    solutions/           # Çözümler/Sektörler + marine-defense (öne çıkan)
    export/              # İhracat & Distribütörlük + başvuru formu
    quality/             # Kalite, Sertifikalar & Ar-Ge
    references/          # Referanslar / vaka çalışmaları
    contact/             # İletişim + sekmeli formlar (numune/teklif/iletişim)
    legal/[doc]/         # KVKK, Çerez, Kullanım Koşulları
  api/lead/route.ts      # Form gönderimlerini alan uç nokta
  sitemap.ts, robots.ts  # SEO
components/              # Header, Footer, kartlar, formlar, ikonlar vb.
i18n/config.ts           # Diller (tr, en) ve gelecek diller (fr, ru)
lib/
  dictionary.ts          # ⭐ TÜM arayüz/sayfa metinleri (TR + EN)
  data.ts                # ⭐ Markalar, ürünler, kategoriler, sektörler, sertifikalar, SSS, pazarlar
  utils.ts
```

---

## ✏️ İçerik nasıl düzenlenir?

- **Metinler (başlık, açıklama, buton vb.):** `lib/dictionary.ts` — her metin `tr` ve `en` olarak yan yana.
- **Ürün / marka / sektör / sertifika / SSS / ülke verileri:** `lib/data.ts` — her kayıtta `{ tr, en }` alanları.
- Yeni ürün eklemek için `lib/data.ts` içindeki `products` dizisine yeni nesne ekleyin (id, kod, marka, kategori, ad, fayda, dozaj, ambalaj, rozetler, sektörler).

---

## 🖼️ Gerçek içerik & görseller

İçerik ve görseller gerçek markalardan uyarlanmıştır (firmanın kendi marka varlıkları):
- **wieberr.com.tr** — Koçkar Makina Kimya / WIEBERR (oto·halı·endüstriyel, 80+ ülke ihracat, 4 fabrika)
- **wunschome.com** — WUNSCHOME ev temizliği ("Dilediğin temizlik")

Görseller `public/img/wh/` (WUNSCHOME ürün + yaşam tarzı) ve `public/img/wb/` (WIEBERR banner/kategori) altındadır. Gerçek ürün şişeleri, lab/Ar-Ge, oto detailing, halı bakımı ve tesis temizliği fotoğrafları kullanılır.

## 🔧 Yayına almadan önce kontrol edilecekler

| Yer | Dosya | Durum |
|-----|-------|-------|
| Telefon / e-posta | `lib/dictionary.ts` → `topbar.phone`, `topbar.email` | Sitelerden alındı (`0264 418 18 67`, `info@wieberr.com.tr`) — doğrulayın |
| Adres | `lib/dictionary.ts` → `footer.address` | `Fatih Mah. 9008 Sok. No:121/1 Akyazı / Sakarya` |
| Ürün fiyatları | `lib/data.ts` → `products[].price` | WUNSCHOME perakende ₺ — güncelleyin |
| Alan adı (sitemap/robots/OG) | `app/sitemap.ts`, `app/robots.ts`, `app/[locale]/layout.tsx` | `wunsc.com` → gerçek alan adı |
| Sosyal medya linkleri | `components/Footer.tsx` → `social` | şu an `#` |
| Logo | `components/Logo.tsx`, favicon `app/icon.svg`; marka logoları `public/img/wb/logo.png`, `public/img/wh/logo.svg` | |
| Görseller | `public/img/...` | düşük çözünürlüklü olanları yüksek çözünürlükle değiştirebilirsiniz |
| Yasal metinler | `app/[locale]/legal/[doc]/page.tsx` | hukuk danışmanınca gözden geçirilmeli |

---

## 📨 Formlar (CRM + e-posta entegrasyonu)

Tüm formlar (numune, teklif, iletişim, distribütör) `POST /api/lead` adresine gider.
Şu an gönderim doğrulanır ve loglanır. Plana uygun şekilde buraya ekleyin:

- **CRM kaydı** (HubSpot, Zoho vb. API)
- **Otomatik e-posta** (teşekkür/bilgilendirme — e-posta yol haritası Şablon 5)

👉 Düzenlenecek dosya: `app/api/lead/route.ts` (`// TODO` işaretli yer).

---

## 🌍 Çok dillilik

- **Aktif:** Türkçe (`/tr`), İngilizce (`/en`)
- **Faz 2 (plan):** Fransızca + Rusça. Eklemek için `i18n/config.ts` içindeki `locales` dizisine dil kodunu ekleyin ve `lib/dictionary.ts` ile `lib/data.ts` çevirilerini tamamlayın.

---

## ☁️ Yayınlama

En kolayı **Vercel**: repoyu bağlayın, otomatik derlenir.
Alternatif: `npm run build && npm start` ile kendi sunucunuzda (Node) çalıştırın.

---

## ✅ Plana göre kapsanan özellikler

- Tek kurumsal şemsiye site, 3 marka net bölümlerle
- Lead odaklı: Numune / Teklif / Distribütör / İletişim formları + tek belirgin CTA
- Çok dillilik (TR + EN), her dil ayrı URL, hreflang/`lang`
- Mega menü, mobil menü, dil seçici, sabit WhatsApp butonu
- Güven öğeleri: ISO/GMP/CE rozetleri, yerli üretim, 20+ ülke, TSK/tersane referansı (öne çıkan Denizcilik & Savunma sayfası)
- Filtrelenebilir ürün kataloğu + ürün detay (SDS/TDS, dozaj, ambalaj)
- SEO: statik üretim, sitemap, robots, sayfa bazlı başlık/açıklama, Open Graph
- Mobil-öncelikli, hızlı, profesyonel tasarım
```
