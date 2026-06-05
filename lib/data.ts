/**
 * Yapısal içerik: markalar, ürünler, kategoriler, sektörler, sertifikalar,
 * kilometre taşları, SSS, ihracat pazarları, referanslar.
 *
 * İçerik ve görseller gerçek markalardan uyarlanmıştır:
 *  - wieberr.com.tr (Koçkar Makina Kimya — oto/halı/endüstriyel, 80+ ülke ihracat)
 *  - wunschome.com  (ev temizliği — "Dilediğin temizlik")
 * Tüm metin alanları { tr, en } biçiminde çok dillidir.
 */

export type LS = { tr: string; en: string };
export type IconKey =
  | "hotel" | "health" | "facility" | "laundry" | "marine" | "auto" | "home"
  | "drop" | "leaf" | "shield" | "beaker" | "factory" | "globe" | "box"
  | "sparkles" | "recycle" | "truck" | "tag" | "award";

export type BadgeKey = "concentrated" | "ecoFriendly" | "certified" | "antiallergic" | "economical";

/* ------------------------------------------------------------------ */
/* Markalar                                                            */
/* ------------------------------------------------------------------ */

export type Brand = {
  id: "wunschome" | "industrial" | "wieberr";
  slug: string;
  name: string;
  accent: "teal" | "brand" | "red";
  logo?: string;
  image: string;
  tagline: LS;
  intro: LS;
  audience: LS;
  forWho: LS;
  focus: LS;
  packaging: LS;
  features: { t: LS; d: LS }[];
  ctaKey: "requestSample" | "getQuote" | "becomeDistributor";
};

export const brands: Brand[] = [
  {
    id: "wunschome",
    slug: "wunschome",
    name: "WUNSCHOME",
    accent: "teal",
    logo: "/img/wh/logo.svg",
    image: "/img/wh/hero1.jpg",
    tagline: { tr: "Dilediğin temizlik — ev & profesyonel", en: "The clean you want — home & professional" },
    intro: {
      tr: "Evde ve profesyonel kullanımda etkili, hoş kokulu ve çevreye duyarlı günlük temizlik ürünleri. Online sipariş ve perakende; private label için ideal.",
      en: "Effective, pleasantly scented and eco-conscious everyday cleaning products for home and professional use. Online ordering and retail; ideal for private label.",
    },
    audience: { tr: "Ev kullanıcıları, perakende, private label", en: "Households, retail, private label" },
    forWho: { tr: "Ev & perakende, private label", en: "Home & retail, private label" },
    focus: { tr: "Günlük temizlik, hoş koku, online sipariş", en: "Daily cleaning, fragrance, online ordering" },
    packaging: { tr: "500ml–1L perakende şişe", en: "500ml–1L retail bottle" },
    features: [
      { t: { tr: "Geniş ev temizliği yelpazesi", en: "Wide home-care range" }, d: { tr: "Leke sökücü, yağ çözücü, banyo, çamaşır suyu ve oda parfümleri.", en: "Stain remover, degreaser, bathroom, bleach and room fragrances." } },
      { t: { tr: "Türkiye üretimi & sertifikalı", en: "Made in Türkiye & certified" }, d: { tr: "Yerli üretim, çevreye duyarlı içerik ve net etiket bilgisi.", en: "Local production, eco-conscious content and clear labeling." } },
      { t: { tr: "7/24 online sipariş", en: "24/7 online ordering" }, d: { tr: "Online ödeme, hızlı kargo ve bayilik imkânı.", en: "Online payment, fast shipping and dealership options." } },
    ],
    ctaKey: "requestSample",
  },
  {
    id: "industrial",
    slug: "wunsc-industrial",
    name: "WUNSC Industrial",
    accent: "brand",
    image: "/img/wb/banner-006.jpg",
    tagline: { tr: "Endüstriyel & kurumsal çözümler", en: "Industrial & institutional solutions" },
    intro: {
      tr: "B2B kurumsal alıcıya konsantre, ekonomik ve sertifikalı çözümler. Net dozaj, büyük ambalaj ve düşük kullanım maliyeti.",
      en: "Concentrated, economical and certified solutions for B2B buyers. Clear dosing, bulk packaging and a low cost in use.",
    },
    audience: { tr: "Otel/HORECA, hastane, tesis yönetimi, çamaşırhane", en: "Hotel/HORECA, hospital, facility management, laundry" },
    forWho: { tr: "Kurumsal satın almacı (B2B)", en: "Corporate buyer (B2B)" },
    focus: { tr: "Konsantre, sertifikalı, kullanım maliyeti", en: "Concentrated, certified, cost-in-use" },
    packaging: { tr: "5L / 20L bidon, ürün kodlu", en: "5L / 20L drum, SKU-coded" },
    features: [
      { t: { tr: "Sektör odaklı", en: "Sector-focused" }, d: { tr: "HORECA, sağlık, çamaşırhane ve tesis yönetimi için uzman setler.", en: "Specialist sets for HORECA, healthcare, laundry and facility management." } },
      { t: { tr: "Net dozaj & ürün kodu", en: "Clear dosing & SKU" }, d: { tr: "Seyreltme bilgisi, 5L/20L bidon ve standart ürün kodları.", en: "Dilution info, 5L/20L drums and standard product codes." } },
      { t: { tr: "Düşük kullanım maliyeti", en: "Low cost in use" }, d: { tr: "Konsantre formüller ve SDS erişimiyle ölçülebilir tasarruf.", en: "Measurable savings with concentrated formulas and SDS access." } },
    ],
    ctaKey: "getQuote",
  },
  {
    id: "wieberr",
    slug: "wieberr",
    name: "WIEBERR",
    accent: "red",
    logo: "/img/wb/logo.png",
    image: "/img/wb/banner-007.jpg",
    tagline: { tr: "Kalite kimyamızda var — oto · halı · bakım", en: "Quality is in our chemistry — auto · carpet · care" },
    intro: {
      tr: "Oto yıkama, detailing, halı bakım ve endüstriyel temizlik için profesyonel ürünler. 80'den fazla ülkeye ihracat, dünya genelinde 4 fabrika ve 21+ yıl tecrübe.",
      en: "Professional products for car wash, detailing, carpet care and industrial cleaning. Exporting to 80+ countries, 4 factories worldwide and 21+ years of experience.",
    },
    audience: { tr: "Oto yıkama & detailing, halı yıkama, ihracat & bayilik", en: "Car wash & detailing, carpet cleaning, export & dealership" },
    forWho: { tr: "Oto/halı işletmeleri, bayiler & distribütörler", en: "Auto/carpet businesses, dealers & distributors" },
    focus: { tr: "Performans, ihracat, bayilik", en: "Performance, export, dealership" },
    packaging: { tr: "Şişe & endüstriyel bidon", en: "Bottle & industrial drum" },
    features: [
      { t: { tr: "Oto bakım & detailing", en: "Auto care & detailing" }, d: { tr: "Aktif köpük, şampuan, jant temizleyici, pasta & cila serileri.", en: "Active foam, shampoo, wheel cleaner, polish & wax series." } },
      { t: { tr: "Halı & ortam bakımı", en: "Carpet & ambient care" }, d: { tr: "Halı şampuanları ve oto/halı parfümleriyle ferah sonuç.", en: "Carpet shampoos and auto/carpet fragrances for a fresh result." } },
      { t: { tr: "80+ ülkeye ihracat", en: "Export to 80+ countries" }, d: { tr: "Güçlü ihracat geçmişi, çok dilli destek ve bayilik fırsatları.", en: "Strong export track record, multilingual support and dealership opportunities." } },
    ],
    ctaKey: "becomeDistributor",
  },
];

export const brandById = (id: string) => brands.find((b) => b.id === id || b.slug === id);

/* ------------------------------------------------------------------ */
/* Kategoriler                                                         */
/* ------------------------------------------------------------------ */

export type Category = { id: string; name: LS };

export const categories: Category[] = [
  { id: "genel-temizlik", name: { tr: "Genel / evsel temizlik", en: "General / household cleaning" } },
  { id: "camasir", name: { tr: "Çamaşır", en: "Laundry" } },
  { id: "banyo-wc", name: { tr: "Banyo & WC", en: "Bathroom & WC" } },
  { id: "yag-cozucu", name: { tr: "Yağ çözücü", en: "Degreaser" } },
  { id: "hijyen", name: { tr: "Hijyen & dezenfeksiyon", en: "Hygiene & disinfection" } },
  { id: "oto-bakim", name: { tr: "Oto bakım & detailing", en: "Auto care & detailing" } },
  { id: "hali-bakim", name: { tr: "Halı bakım", en: "Carpet care" } },
  { id: "denizcilik", name: { tr: "Denizcilik & savunma", en: "Marine & defense" } },
  { id: "ortam-kokulari", name: { tr: "Oto & ortam parfümü", en: "Auto & air fragrance" } },
];

export const categoryById = (id: string) => categories.find((c) => c.id === id);

/* ------------------------------------------------------------------ */
/* Ürünler                                                             */
/* ------------------------------------------------------------------ */

export type Product = {
  id: string;
  code: string;
  brandId: Brand["id"];
  categoryId: string;
  name: LS;
  benefit: LS;
  usage: LS;
  packaging: string[];
  price?: number; // perakende (₺) — yalnızca WUNSCHOME ev ürünleri
  image: string;
  imageFit?: "cover" | "contain";
  badges: BadgeKey[];
  sectors: string[];
  featured?: boolean;
};

export const products: Product[] = [
  /* ---- WUNSCHOME (gerçek ürün görselleri) ---- */
  {
    id: "wunschome-leke-sokucu",
    code: "WH-LK-550",
    brandId: "wunschome",
    categoryId: "genel-temizlik",
    name: { tr: "Leke Sökücü", en: "Stain Remover" },
    benefit: { tr: "Halı, koltuk, perde ve döşemede inatçı lekeleri çözer.", en: "Removes stubborn stains on carpets, sofas, curtains and upholstery." },
    usage: { tr: "Lekeye püskürtün, kısa süre bekletip nemli bezle alın.", en: "Spray on the stain, wait briefly and wipe with a damp cloth." },
    packaging: ["550ml"],
    price: 290,
    image: "/img/wh/p-leke.jpg",
    imageFit: "contain",
    badges: ["ecoFriendly", "antiallergic"],
    sectors: ["ev-perakende", "horeca"],
    featured: true,
  },
  {
    id: "wunschome-yag-cozucu",
    code: "WH-YG-500",
    brandId: "wunschome",
    categoryId: "yag-cozucu",
    name: { tr: "Yağ Çözücü", en: "Degreaser" },
    benefit: { tr: "Mutfak yüzeyleri ve ocaktaki yoğun yağı hızla çözer.", en: "Quickly dissolves heavy grease on kitchen surfaces and stoves." },
    usage: { tr: "Yüzeye sıkın, bekletin ve durulayın veya silin.", en: "Spray on the surface, wait, then rinse or wipe." },
    packaging: ["500ml"],
    price: 250,
    image: "/img/wh/p-yag.jpg",
    imageFit: "contain",
    badges: ["ecoFriendly", "concentrated"],
    sectors: ["ev-perakende", "horeca"],
    featured: true,
  },
  {
    id: "wunschome-dahlia",
    code: "WH-AF-DAH",
    brandId: "wunschome",
    categoryId: "ortam-kokulari",
    name: { tr: "Dahlia Oda Parfümü", en: "Dahlia Room Fragrance" },
    benefit: { tr: "Çiçeksi, kalıcı ve ferah bir oda kokusu bırakır.", en: "Leaves a floral, long-lasting and fresh room scent." },
    usage: { tr: "Ortama 20–30 cm mesafeden püskürtün.", en: "Spray into the air from 20–30 cm." },
    packaging: ["500ml"],
    price: 325,
    image: "/img/wh/p-dahlia.jpg",
    imageFit: "contain",
    badges: ["ecoFriendly"],
    sectors: ["ev-perakende", "horeca"],
  },
  {
    id: "wunschome-spring-breeze",
    code: "WH-AF-SPR",
    brandId: "wunschome",
    categoryId: "ortam-kokulari",
    name: { tr: "Spring Breeze Oda Parfümü", en: "Spring Breeze Room Fragrance" },
    benefit: { tr: "Bahar esintisi notalarıyla canlı ve temiz bir koku.", en: "A vibrant, clean scent with spring-breeze notes." },
    usage: { tr: "Ortama 20–30 cm mesafeden püskürtün.", en: "Spray into the air from 20–30 cm." },
    packaging: ["500ml"],
    price: 325,
    image: "/img/wh/p-spring.jpg",
    imageFit: "contain",
    badges: ["ecoFriendly"],
    sectors: ["ev-perakende", "horeca"],
  },
  {
    id: "wunschome-banyo-kopuk",
    code: "WH-BR-500",
    brandId: "wunschome",
    categoryId: "banyo-wc",
    name: { tr: "Banyo Köpük Temizleyici", en: "Bathroom Foam Cleaner" },
    benefit: { tr: "Kireç ve sabun kalıntısını köpük gücüyle çözer, parlatır.", en: "Dissolves limescale and soap residue with foam power and shines." },
    usage: { tr: "Yüzeye sıkın, bekletin ve durulayın.", en: "Spray on the surface, wait and rinse." },
    packaging: ["500ml"],
    price: 250,
    image: "/img/wh/p-banyo.jpg",
    imageFit: "contain",
    badges: ["antiallergic"],
    sectors: ["ev-perakende", "horeca"],
  },
  {
    id: "wunschome-camasir-suyu",
    code: "WH-CL-1000",
    brandId: "wunschome",
    categoryId: "hijyen",
    name: { tr: "Kıvamlı Çamaşır Suyu", en: "Thickened Bleach" },
    benefit: { tr: "Yüzeye tutunan kıvamıyla daha etkili hijyen ve beyazlık.", en: "A clinging consistency for more effective hygiene and whiteness." },
    usage: { tr: "Seyreltilerek yüzey ve çamaşırda kullanılır.", en: "Used diluted on surfaces and laundry." },
    packaging: ["1L"],
    price: 250,
    image: "/img/wh/p-camasir.jpg",
    imageFit: "contain",
    badges: ["certified"],
    sectors: ["ev-perakende"],
  },

  /* ---- WIEBERR (oto / halı / parfüm) ---- */
  {
    id: "wieberr-aktif-kopuk",
    code: "WB-OTO-01",
    brandId: "wieberr",
    categoryId: "oto-bakim",
    name: { tr: "WIEBERR Aktif Köpük", en: "WIEBERR Active Foam" },
    benefit: { tr: "Oto yıkama istasyonları için yoğun, yapışkan köpük.", en: "Dense, clinging foam for car-wash stations." },
    usage: { tr: "Köpük lansı ile 1:50 – 1:150 oranında kullanın.", en: "Use at 1:50 to 1:150 with a foam lance." },
    packaging: ["5L", "20L"],
    image: "/img/wb/banner-002.jpg",
    badges: ["concentrated", "economical"],
    sectors: ["oto-yikama"],
    featured: true,
  },
  {
    id: "wieberr-oto-sampuan",
    code: "WB-OTO-02",
    brandId: "wieberr",
    categoryId: "oto-bakim",
    name: { tr: "WIEBERR Oto Şampuanı", en: "WIEBERR Car Shampoo" },
    benefit: { tr: "Bol köpüklü, pH dengeli; boyaya zarar vermeden temizler.", en: "High-foam, pH-balanced; cleans without harming paint." },
    usage: { tr: "Sünger veya köpükle 1:100 – 1:200 kullanın.", en: "Use at 1:100 to 1:200 with sponge or foam." },
    packaging: ["5L", "20L"],
    image: "/img/wb/banner-007.jpg",
    badges: ["economical"],
    sectors: ["oto-yikama"],
  },
  {
    id: "wieberr-jant-temizleyici",
    code: "WB-OTO-04",
    brandId: "wieberr",
    categoryId: "oto-bakim",
    name: { tr: "WIEBERR Jant Temizleyici", en: "WIEBERR Wheel Cleaner" },
    benefit: { tr: "Fren tozu ve yol kirini renk değiştirerek çözer.", en: "Dissolves brake dust and road grime with a color change." },
    usage: { tr: "Soğuk jantta uygulayın, fırçalayıp durulayın.", en: "Apply on cool wheels, agitate and rinse." },
    packaging: ["1L", "5L"],
    image: "/img/wb/banner-007.jpg",
    badges: ["concentrated"],
    sectors: ["oto-yikama"],
  },
  {
    id: "wieberr-pasta-cila",
    code: "WB-OTO-09",
    brandId: "wieberr",
    categoryId: "oto-bakim",
    name: { tr: "WIEBERR Pasta & Cila", en: "WIEBERR Polish & Wax" },
    benefit: { tr: "Çizik giderir, derinlikli parlaklık ve koruma sağlar.", en: "Removes scratches, gives deep gloss and protection." },
    usage: { tr: "Pad veya polisaj makinesiyle uygulanır.", en: "Applied with a pad or polishing machine." },
    packaging: ["1L"],
    image: "/img/wb/banner-007.jpg",
    badges: [],
    sectors: ["oto-yikama"],
  },
  {
    id: "wieberr-hali-sampuani",
    code: "WB-CR-07",
    brandId: "wieberr",
    categoryId: "hali-bakim",
    name: { tr: "WIEBERR Halı & Koltuk Şampuanı", en: "WIEBERR Carpet & Upholstery Shampoo" },
    benefit: { tr: "Makineli/elde yıkamada lekeyi çözer, ferah koku bırakır.", en: "Removes stains in machine/hand washing, leaves a fresh scent." },
    usage: { tr: "Ekstraksiyon makinesinde 1:20 – 1:40 kullanın.", en: "Use at 1:20 to 1:40 in extraction machines." },
    packaging: ["5L", "20L"],
    image: "/img/wb/banner-003.jpg",
    badges: ["concentrated", "ecoFriendly"],
    sectors: ["tesis-yonetimi", "ev-perakende"],
    featured: true,
  },
  {
    id: "wieberr-oto-hali-parfum",
    code: "WB-AF-05",
    brandId: "wieberr",
    categoryId: "ortam-kokulari",
    name: { tr: "WIEBERR Oto & Halı Parfümü", en: "WIEBERR Auto & Carpet Fragrance" },
    benefit: { tr: "Uzun kalıcı, yoğun koku; araç ve halıda ferahlık.", en: "Long-lasting, intense scent; freshness for vehicles and carpets." },
    usage: { tr: "Tekstil veya ortama püskürterek kullanılır.", en: "Used by spraying onto textiles or into the air." },
    packaging: ["500ml", "1L"],
    image: "/img/wb/oto-ve-hali-parfum.jpg",
    badges: ["ecoFriendly"],
    sectors: ["oto-yikama", "tesis-yonetimi"],
  },

  /* ---- WUNSC Industrial (B2B) ---- */
  {
    id: "endustriyel-yag-cozucu",
    code: "WI-DG-200",
    brandId: "industrial",
    categoryId: "yag-cozucu",
    name: { tr: "Endüstriyel Yağ Çözücü Konsantre", en: "Industrial Degreaser Concentrate" },
    benefit: { tr: "Mutfak, makine ve zeminde inatçı yağı hızla çözer.", en: "Rapidly dissolves stubborn grease on kitchens, machinery and floors." },
    usage: { tr: "Kirlilik derecesine göre 1:10 – 1:40 oranında seyreltin.", en: "Dilute 1:10 to 1:40 depending on soil level." },
    packaging: ["5L", "20L"],
    image: "/img/wb/genel-evsel-temizlik.jpg",
    badges: ["concentrated", "certified", "economical"],
    sectors: ["horeca", "tesis-yonetimi", "denizcilik-savunma"],
    featured: true,
  },
  {
    id: "yuzey-dezenfektani",
    code: "WI-HG-110",
    brandId: "industrial",
    categoryId: "hijyen",
    name: { tr: "Yüzey Dezenfektanı (Geniş Spektrum)", en: "Surface Disinfectant (Broad Spectrum)" },
    benefit: { tr: "Hastane ve mutfak yüzeylerinde etkili hijyen sağlar.", en: "Delivers effective hygiene on hospital and kitchen surfaces." },
    usage: { tr: "Kullanıma hazır veya 1:20 seyreltilerek uygulanır.", en: "Ready to use or applied at 1:20 dilution." },
    packaging: ["5L", "20L"],
    image: "/img/wb/banner-006.jpg",
    badges: ["certified", "concentrated"],
    sectors: ["saglik", "horeca", "tesis-yonetimi"],
    featured: true,
  },
  {
    id: "camasirhane-ana-yikama",
    code: "WI-LD-300",
    brandId: "industrial",
    categoryId: "camasir",
    name: { tr: "Endüstriyel Çamaşır Ana Yıkama", en: "Industrial Laundry Main Wash" },
    benefit: { tr: "Otel ve çamaşırhanelerde yüksek performanslı yıkama.", en: "High-performance washing for hotels and laundries." },
    usage: { tr: "Su sertliği ve kir derecesine göre dozajlanır.", en: "Dosed by water hardness and soil level." },
    packaging: ["20L"],
    image: "/img/wb/banner-006.jpg",
    badges: ["concentrated", "economical", "certified"],
    sectors: ["camasirhane", "horeca", "saglik"],
  },
  {
    id: "marine-govde-yag-cozucu",
    code: "WI-MR-500",
    brandId: "industrial",
    categoryId: "denizcilik",
    name: { tr: "Marine Gövde & Güverte Yağ Çözücü", en: "Marine Hull & Deck Degreaser" },
    benefit: { tr: "Gemi gövde/güvertesinde yağ, kurum ve lekeyi çözer.", en: "Removes oil, soot and stains on ship hulls and decks." },
    usage: { tr: "Boya öncesi yüzey hazırlığı için 1:5 – 1:20 uygulanır.", en: "Applied at 1:5 to 1:20 for pre-paint surface prep." },
    packaging: ["20L"],
    image: "/img/wb/slider-001.jpg",
    badges: ["concentrated", "certified"],
    sectors: ["denizcilik-savunma"],
    featured: true,
  },
  {
    id: "motor-dairesi-temizleyici",
    code: "WI-MR-520",
    brandId: "industrial",
    categoryId: "yag-cozucu",
    name: { tr: "Motor Dairesi Temizleyici", en: "Engine Room Cleaner" },
    benefit: { tr: "Makine, zemin ve ekipmanda güçlü yağ çözme.", en: "Powerful degreasing on machinery, floors and equipment." },
    usage: { tr: "Yüzeye püskürtün, fırçalayın ve durulayın.", en: "Spray, agitate and rinse." },
    packaging: ["20L"],
    image: "/img/wb/banner-002.jpg",
    badges: ["concentrated"],
    sectors: ["denizcilik-savunma", "tesis-yonetimi"],
  },
];

export const productsByBrand = (brandId: string) => products.filter((p) => p.brandId === brandId);
export const featuredProducts = () => products.filter((p) => p.featured);
export const productById = (id: string) => products.find((p) => p.id === id);

/* ------------------------------------------------------------------ */
/* Sektörler                                                           */
/* ------------------------------------------------------------------ */

export type Sector = {
  id: string;
  icon: IconKey;
  image: string;
  name: LS;
  short: LS;
  problem: LS;
  solution: LS;
  benefits: LS[];
  brands: Brand["id"][];
  featured?: boolean;
};

export const sectors: Sector[] = [
  {
    id: "oto-yikama",
    icon: "auto",
    image: "/img/wb/banner-002.jpg",
    name: { tr: "Oto Yıkama & Detailing", en: "Car Wash & Detailing" },
    short: { tr: "İstasyon ve detailing için profesyonel WIEBERR serileri.", en: "Professional WIEBERR series for stations and detailing." },
    problem: { tr: "Hızlı, lekesiz sonuç ve istasyon başına kâr marjını korumak.", en: "Fast, streak-free results while protecting per-station margins." },
    solution: { tr: "Aktif köpük, şampuan, jant temizleyici, pasta-cila ve parfümden tam set.", en: "A full set of active foam, shampoo, wheel cleaner, polish-wax and fragrance." },
    benefits: [
      { tr: "Yoğun köpük ve hızlı sonuç", en: "Dense foam and fast results" },
      { tr: "Konsantre ile düşük maliyet", en: "Low cost with concentrates" },
      { tr: "Bayilik ve ihracat desteği", en: "Dealership and export support" },
    ],
    brands: ["wieberr"],
    featured: true,
  },
  {
    id: "horeca",
    icon: "hotel",
    image: "/img/wb/genel-evsel-temizlik.jpg",
    name: { tr: "HORECA / Otel", en: "HORECA / Hotel" },
    short: { tr: "Mutfak, kat hizmetleri ve genel alanlar için komple set.", en: "A complete set for kitchens, housekeeping and common areas." },
    problem: { tr: "Yüksek misafir sirkülasyonunda hijyeni korurken maliyeti kontrol etmek.", en: "Maintaining hygiene under high guest turnover while controlling cost." },
    solution: { tr: "Mutfak yağ çözücüler, yüzey dezenfektanları, banyo ve çamaşır ürünleri.", en: "Kitchen degreasers, surface disinfectants, bathroom and laundry products." },
    benefits: [
      { tr: "Konsantre formüllerle düşük kullanım maliyeti", en: "Low cost in use with concentrated formulas" },
      { tr: "Misafir memnuniyeti için hijyen ve ferah koku", en: "Hygiene and fresh scent for guest satisfaction" },
      { tr: "Tek tedarikçiden komple ürün yelpazesi", en: "A complete range from a single supplier" },
    ],
    brands: ["industrial", "wunschome"],
  },
  {
    id: "saglik",
    icon: "health",
    image: "/img/wb/banner-006.jpg",
    name: { tr: "Hastane / Sağlık", en: "Hospital / Healthcare" },
    short: { tr: "Yüzey dezenfeksiyonu ve hijyen odaklı ürünler.", en: "Surface-disinfection and hygiene-focused products." },
    problem: { tr: "Enfeksiyon kontrolü için yüksek hijyen ve uyum gereksinimi.", en: "High hygiene and compliance requirements for infection control." },
    solution: { tr: "Geniş spektrumlu yüzey dezenfektanları ve uyumlu protokoller.", en: "Broad-spectrum surface disinfectants and compliant protocols." },
    benefits: [
      { tr: "Etkili hijyen ve uyum belgeleri", en: "Effective hygiene and compliance documents" },
      { tr: "SDS erişimi ve net kullanım talimatı", en: "SDS access and clear usage instructions" },
      { tr: "Personel için güvenli kullanım", en: "Safe use for staff" },
    ],
    brands: ["industrial"],
  },
  {
    id: "tesis-yonetimi",
    icon: "facility",
    image: "/img/wb/banner-006.jpg",
    name: { tr: "Tesis Yönetimi & Temizlik Şirketleri", en: "Facility Management & Cleaning Companies" },
    short: { tr: "Çok alanlı tesisler için verimli, standart ürünler.", en: "Efficient, standardized products for multi-area facilities." },
    problem: { tr: "Farklı alanlarda tutarlı sonuç ve maliyet verimliliği.", en: "Consistent results and cost efficiency across diverse areas." },
    solution: { tr: "Genel temizlik, yağ çözücü, banyo ve halı bakımını kapsayan set.", en: "A set covering general cleaning, degreasing, bathroom and carpet care." },
    benefits: [
      { tr: "Standart ürün kodları ile kolay yönetim", en: "Easy management with standard SKUs" },
      { tr: "Konsantre ile depolama ve lojistik tasarrufu", en: "Storage and logistics savings with concentrates" },
      { tr: "Eğitim ve dozaj desteği", en: "Training and dosing support" },
    ],
    brands: ["industrial", "wieberr"],
  },
  {
    id: "camasirhane",
    icon: "laundry",
    image: "/img/wh/hero2.jpg",
    name: { tr: "Çamaşırhane", en: "Laundry" },
    short: { tr: "Endüstriyel yıkama için ana yıkama ve yardımcı ürünler.", en: "Main wash and auxiliary products for industrial laundering." },
    problem: { tr: "Yüksek hacimde lekede başarı, kumaş ömrü ve maliyet dengesi.", en: "Balancing stain success, fabric life and cost in high volume." },
    solution: { tr: "Su sertliğine göre dozajlanan ana yıkama ve yardımcı sistemler.", en: "Main-wash and auxiliary systems dosed by water hardness." },
    benefits: [
      { tr: "Yüksek yıkama performansı", en: "High washing performance" },
      { tr: "Kumaş ömrünü koruyan formüller", en: "Formulas that protect fabric life" },
      { tr: "Dozaj optimizasyonu ile tasarruf", en: "Savings via dosage optimization" },
    ],
    brands: ["industrial"],
  },
  {
    id: "denizcilik-savunma",
    icon: "marine",
    image: "/img/wb/slider-001.jpg",
    name: { tr: "Denizcilik & Savunma", en: "Marine & Defense" },
    short: { tr: "Tersane, deniz kuvvetleri ve savunma için yüksek performans.", en: "High performance for shipyards, navies and defense." },
    problem: { tr: "Gövde, güverte ve motor dairesinde inatçı yağ ve boya öncesi yüzey hazırlığı.", en: "Stubborn oil on hull, deck and engine room and pre-paint surface prep." },
    solution: { tr: "Marine yağ çözücüler ve yüzey hazırlık ürünleriyle yerli ve sertifikalı çözümler.", en: "Local, certified solutions with marine degreasers and surface-prep products." },
    benefits: [
      { tr: "TSK & tersane referansı (izinli)", en: "Armed Forces & shipyard reference (permitted)" },
      { tr: "Yerli ve milli üretim güveni", en: "Trust of local & national production" },
      { tr: "İhracat ve teknik dokümantasyon", en: "Export and technical documentation" },
    ],
    brands: ["industrial"],
    featured: true,
  },
  {
    id: "ev-perakende",
    icon: "home",
    image: "/img/wh/hero1.jpg",
    name: { tr: "Ev / Perakende", en: "Home / Retail" },
    short: { tr: "Perakende ve private label için WUNSCHOME ürünleri.", en: "WUNSCHOME products for retail and private label." },
    problem: { tr: "Rafta fark yaratan, etkili ve çevreye duyarlı ürünler.", en: "Effective, eco-conscious products that stand out on the shelf." },
    solution: { tr: "Geniş ev temizliği yelpazesi; private label ve online satış.", en: "A broad home-care range; private label and online sales." },
    benefits: [
      { tr: "Eko içerik ve hoş koku", en: "Eco content and pleasant scent" },
      { tr: "Çok dilli etiket ve private label", en: "Multilingual labels and private label" },
      { tr: "7/24 online sipariş ve bayilik", en: "24/7 online ordering and dealership" },
    ],
    brands: ["wunschome"],
  },
];

export const sectorById = (id: string) => sectors.find((s) => s.id === id);

/* ------------------------------------------------------------------ */
/* Sertifikalar                                                        */
/* ------------------------------------------------------------------ */

export type Cert = { code: string; name: LS; desc: LS };

export const certs: Cert[] = [
  { code: "ISO 9001", name: { tr: "Kalite Yönetim Sistemi", en: "Quality Management System" }, desc: { tr: "Tutarlı ürün ve süreç kalitesi.", en: "Consistent product and process quality." } },
  { code: "ISO 14001", name: { tr: "Çevre Yönetim Sistemi", en: "Environmental Management" }, desc: { tr: "Çevresel etkilerin kontrolü.", en: "Control of environmental impact." } },
  { code: "ISO 45001", name: { tr: "İş Sağlığı & Güvenliği", en: "Occupational Health & Safety" }, desc: { tr: "Güvenli üretim ortamı.", en: "A safe production environment." } },
  { code: "ISO 22716", name: { tr: "Kozmetik İyi Üretim (GMP)", en: "Cosmetics GMP" }, desc: { tr: "İyi üretim uygulamaları.", en: "Good manufacturing practices." } },
  { code: "CE", name: { tr: "CE Uygunluk", en: "CE Conformity" }, desc: { tr: "Avrupa pazarına uygunluk.", en: "Conformity for the European market." } },
  { code: "Yerli Malı", name: { tr: "Yerli Malı Belgesi", en: "Domestic Goods Certificate" }, desc: { tr: "Yerli ve milli üretim.", en: "Local and national production." } },
];

/* ------------------------------------------------------------------ */
/* Kilometre taşları                                                   */
/* ------------------------------------------------------------------ */

export type Milestone = { year: string; title: LS; text: LS };

export const milestones: Milestone[] = [
  { year: "2005", title: { tr: "Üretim başlıyor", en: "Manufacturing begins" }, text: { tr: "Koçkar Makina Kimya Akyazı/Sakarya'da kuruldu; oto, halı ve endüstriyel temizlikte üretim.", en: "Koçkar Makina Kimya founded in Akyazı/Sakarya; manufacturing in auto, carpet and industrial cleaning." } },
  { year: "2018", title: { tr: "İhracat genişlemesi — Kazakistan", en: "Export expansion — Kazakhstan" }, text: { tr: "Orta Asya pazarına açılım ve ilk distribütör ortaklıkları.", en: "Expansion into Central Asia and first distributor partnerships." } },
  { year: "2019", title: { tr: "Ukrayna ortaklığı", en: "Ukraine partnership" }, text: { tr: "Doğu Avrupa'da bayilik ağının büyümesi.", en: "Growth of the dealer network in Eastern Europe." } },
  { year: "2020", title: { tr: "Azerbaycan ortaklığı", en: "Azerbaijan partnership" }, text: { tr: "Bölgesel ihracatın güçlenmesi.", en: "Strengthening of regional exports." } },
  { year: "2022", title: { tr: "WUNSCHOME doğuyor", en: "WUNSCHOME is born" }, text: { tr: "Ev temizliği markası WUNSCHOME ile online satış ve perakende.", en: "Online sales and retail with the home-care brand WUNSCHOME." } },
  { year: "Bugün", title: { tr: "80+ ülke, 4 fabrika", en: "80+ countries, 4 factories" }, text: { tr: "WUNSCHOME, WUNSC Industrial ve WIEBERR markalarıyla 80'den fazla ülkeye ihracat.", en: "Export to 80+ countries with the WUNSCHOME, WUNSC Industrial and WIEBERR brands." } },
];

/* ------------------------------------------------------------------ */
/* İhracat pazarları                                                   */
/* ------------------------------------------------------------------ */

export type Market = { flag: string; name: LS };

export const markets: Market[] = [
  { flag: "🇰🇿", name: { tr: "Kazakistan", en: "Kazakhstan" } },
  { flag: "🇺🇦", name: { tr: "Ukrayna", en: "Ukraine" } },
  { flag: "🇦🇿", name: { tr: "Azerbaycan", en: "Azerbaijan" } },
  { flag: "🇬🇪", name: { tr: "Gürcistan", en: "Georgia" } },
  { flag: "🇹🇲", name: { tr: "Türkmenistan", en: "Turkmenistan" } },
  { flag: "🇮🇶", name: { tr: "Irak", en: "Iraq" } },
  { flag: "🇷🇴", name: { tr: "Romanya", en: "Romania" } },
  { flag: "🇧🇬", name: { tr: "Bulgaristan", en: "Bulgaria" } },
  { flag: "🇸🇦", name: { tr: "Suudi Arabistan", en: "Saudi Arabia" } },
  { flag: "🇶🇦", name: { tr: "Katar", en: "Qatar" } },
  { flag: "🇱🇾", name: { tr: "Libya", en: "Libya" } },
  { flag: "🌍", name: { tr: "ve 70+ ülke daha", en: "and 70+ more countries" } },
];

/* ------------------------------------------------------------------ */
/* Referanslar & vaka çalışmaları                                      */
/* ------------------------------------------------------------------ */

export type CaseStudy = { sector: LS; title: LS; problem: LS; solution: LS; result: LS; stat: { v: string; l: LS } };

export const cases: CaseStudy[] = [
  {
    sector: { tr: "Oto yıkama istasyonu", en: "Car-wash station" },
    title: { tr: "Köpük performansı ve müşteri memnuniyeti", en: "Foam performance & customer satisfaction" },
    problem: { tr: "Zayıf köpük ve yüksek ürün tüketimi.", en: "Weak foam and high product consumption." },
    solution: { tr: "WIEBERR aktif köpük ve oto bakım setine geçiş.", en: "Switch to the WIEBERR active-foam and auto-care set." },
    result: { tr: "Yoğun köpük, hızlı sonuç ve düşen tüketim.", en: "Dense foam, fast results and lower consumption." },
    stat: { v: "1:150", l: { tr: "seyreltme oranı", en: "dilution ratio" } },
  },
  {
    sector: { tr: "Otel zinciri (HORECA)", en: "Hotel chain (HORECA)" },
    title: { tr: "Mutfak ve kat hizmetlerinde maliyet düşüşü", en: "Cost reduction in kitchen & housekeeping" },
    problem: { tr: "Çok sayıda ürün ve yüksek kimyasal maliyeti.", en: "Too many SKUs and high chemical cost." },
    solution: { tr: "Konsantre WUNSC Industrial setine geçiş ve dozaj eğitimi.", en: "Switch to the concentrated WUNSC Industrial set and dosing training." },
    result: { tr: "Kullanım maliyetinde belirgin tasarruf ve sade stok.", en: "Notable cost-in-use savings and a simplified inventory." },
    stat: { v: "~%30", l: { tr: "kimyasal maliyet tasarrufu", en: "chemical cost savings" } },
  },
  {
    sector: { tr: "Distribütör (İhracat)", en: "Distributor (Export)" },
    title: { tr: "Yeni pazarda WIEBERR lansmanı", en: "WIEBERR launch in a new market" },
    problem: { tr: "Rekabetçi fiyat ve güvenilir tedarik arayışı.", en: "Seeking competitive pricing and reliable supply." },
    solution: { tr: "Münhasır bölge, çok dilli materyal ve sürekli stok.", en: "Exclusive territory, multilingual materials and continuous stock." },
    result: { tr: "Hızlı büyüyen satış ve tekrar siparişler.", en: "Fast-growing sales and repeat orders." },
    stat: { v: "80+", l: { tr: "ihracat ülkesi", en: "export countries" } },
  },
];

export type Testimonial = { quote: LS; author: string; role: LS };

export const testimonials: Testimonial[] = [
  {
    quote: { tr: "WIEBERR serisini bayi olarak satıyoruz; köpük performansı ve fiyat dengesi pazarımızda çok tuttu.", en: "We sell the WIEBERR series as a dealer; the foam performance and price balance resonated strongly in our market." },
    author: "Distribütör",
    role: { tr: "Oto bakım toptancısı, Kazakistan", en: "Auto-care wholesaler, Kazakhstan" },
  },
  {
    quote: { tr: "Konsantre ürünlerle hem maliyeti düşürdük hem hijyen standardımızı yükselttik. Tedarik çok hızlı.", en: "With concentrated products we lowered cost and raised our hygiene standard. Supply is very fast." },
    author: "Satın Alma Müdürü",
    role: { tr: "5 yıldızlı otel, Antalya", en: "5-star hotel, Antalya" },
  },
  {
    quote: { tr: "WUNSCHOME ürünlerini online satıyoruz; müşteriler kokuyu ve leke performansını çok seviyor.", en: "We sell WUNSCHOME online; customers love the scent and stain performance." },
    author: "E-ticaret bayisi",
    role: { tr: "Perakende, İstanbul", en: "Retail, İstanbul" },
  },
];

/* ------------------------------------------------------------------ */
/* SSS                                                                 */
/* ------------------------------------------------------------------ */

export type Faq = { q: LS; a: LS };

export const faqs: Faq[] = [
  {
    q: { tr: "Bayilik / distribütörlük nasıl alınır?", en: "How do I become a dealer / distributor?" },
    a: { tr: "İletişim formundan başvurun; firma, bölge ve hedef hacmi paylaşın. Münhasır bölge ve materyal desteği sunulabilir.", en: "Apply via the contact form with your company, region and target volume. Exclusive territory and material support may be offered." },
  },
  {
    q: { tr: "Asgari sipariş miktarı (MOQ) nedir?", en: "What is the minimum order quantity (MOQ)?" },
    a: { tr: "MOQ; ürün, ambalaj ve private label talebine göre değişir. Numune ve teklif aşamasında net miktarı paylaşıyoruz.", en: "MOQ varies by product, packaging and private-label request. We share exact figures at the sample/quote stage." },
  },
  {
    q: { tr: "Hangi ülkelere ihracat yapıyorsunuz?", en: "Which countries do you export to?" },
    a: { tr: "Kazakistan, Ukrayna, Azerbaycan başta olmak üzere 80'den fazla ülkeye ihracat yapıyoruz; dünya genelinde 4 fabrika ile.", en: "We export to 80+ countries — including Kazakhstan, Ukraine and Azerbaijan — with 4 factories worldwide." },
  },
  {
    q: { tr: "Hangi ambalaj boyutları mevcut?", en: "Which packaging sizes are available?" },
    a: { tr: "WUNSCHOME'da 500ml–1L perakende; endüstriyel tarafta 5L ve 20L bidon. Private label'da özelleştirilebilir.", en: "WUNSCHOME offers 500ml–1L retail; the industrial side offers 5L and 20L drums. Customizable for private label." },
  },
  {
    q: { tr: "Hangi sertifikalara sahipsiniz?", en: "Which certificates do you hold?" },
    a: { tr: "ISO 9001/14001/45001, ISO 22716 (GMP) ve CE uyumu. Güncel kopyalar talep üzerine paylaşılır.", en: "ISO 9001/14001/45001, ISO 22716 (GMP) and CE compliance. Up-to-date copies on request." },
  },
  {
    q: { tr: "Private label / fason üretim yapıyor musunuz?", en: "Do you offer private label / contract manufacturing?" },
    a: { tr: "Evet. Kendi markanızla üretim, etiket/ambalaj özelleştirme ve NDA ile gizlilik sağlıyoruz.", en: "Yes. Production under your brand, label/packaging customization and confidentiality with an NDA." },
  },
  {
    q: { tr: "Ürün güvenliği ve kullanım bilgisi nasıl sağlanıyor?", en: "How is product safety and usage info provided?" },
    a: { tr: "Her ürün için SDS/TDS ve net dozaj talimatı sağlıyoruz; kurumsal alıcı ve bayilerle paylaşılır.", en: "We provide SDS/TDS and clear dosing for every product; shared with corporate buyers and dealers." },
  },
];
