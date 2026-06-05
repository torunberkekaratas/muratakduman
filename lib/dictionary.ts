import type { Locale } from "@/i18n/config";

/**
 * Tüm arayüz ve sayfa metinleri burada (TR + EN).
 * Tekrarlanan kayıtlar (ürün, marka, sektör, sertifika) için lib/data.ts kullanılır.
 */

const tr = {
  meta: {
    brand: "WUNSC",
    company: "Koçkar Makina Kimya San. ve Tic. A.Ş.",
    tagline: "Türkiye'den dünyaya profesyonel temizlik ve bakım çözümleri",
    description:
      "WUNSCHOME, WUNSC Industrial ve WIEBERR markalarıyla ev, endüstri, denizcilik ve oto bakımı için sertifikalı, konsantre ve yerli üretim temizlik çözümleri. İhracat ve distribütörlük.",
  },

  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    brands: "Markalar",
    products: "Ürünler",
    solutions: "Çözümler",
    export: "İhracat",
    quality: "Kalite",
    references: "Referanslar",
    contact: "İletişim",
  },

  cta: {
    getQuote: "Teklif Al",
    requestSample: "Numune İste",
    becomeDistributor: "Distribütör Ol",
    contactUs: "İletişime Geç",
    discover: "İncele",
    learnMore: "Daha fazla",
    viewAll: "Tümünü Gör",
    viewProducts: "Ürünleri Gör",
    downloadCatalog: "Kataloğu İndir",
    technicalTalk: "Teknik Görüşme",
    distributorApply: "Distribütör Başvurusu",
    priceList: "Fiyat Listesi İste",
    quoteFason: "Fason Teklifi Al",
    send: "Gönder",
    sending: "Gönderiliyor…",
    backHome: "Ana sayfaya dön",
    allProducts: "Tüm Ürünler",
  },

  topbar: {
    phone: "+90 264 418 18 67",
    email: "info@wieberr.com.tr",
    badge: "Yerli üretim · 21+ yıl · 80+ ülkeye ihracat",
  },

  common: {
    madeInTurkey: "Yerli Üretim",
    madeInTurkeyLong: "Türkiye'de üretildi",
    certified: "Sertifikalı",
    concentrated: "Konsantre",
    economical: "Ekonomik",
    ecoFriendly: "Eko / Biyobozunur",
    antiallergic: "Antialerjik",
    exportTo: "ülkeye ihracat",
    brand: "Marka",
    brands: "Markalar",
    category: "Kategori",
    categories: "Kategoriler",
    sector: "Sektör",
    sectors: "Sektörler",
    packaging: "Ambalaj",
    productCode: "Ürün kodu",
    allBrands: "Tüm markalar",
    allCategories: "Tüm kategoriler",
    allSectors: "Tüm sektörler",
    relatedProducts: "İlgili ürünler",
    usageAreas: "Kullanım alanları",
    features: "Özellikler",
    dosage: "Kullanım / Dozaj",
    downloadSds: "SDS / TDS indir",
    forDetails: "Detaylar için iletişime geçin",
    results: "sonuç",
    filters: "Filtreler",
    clearFilters: "Filtreleri temizle",
    noResults: "Bu kritere uygun ürün bulunamadı.",
    new: "Yeni",
    page: "Sayfa",
  },

  footer: {
    blurb:
      "Koçkar Makina Kimya çatısı altında WUNSCHOME, WUNSC Industrial ve WIEBERR markalarıyla; ev, oto, halı ve endüstriyel bakım için sertifikalı temizlik çözümleri üretiyoruz. Akyazı/Sakarya'dan 80'den fazla ülkeye ihracat, 21+ yıl tecrübe.",
    company: "Kurumsal",
    productsCol: "Ürünler & Markalar",
    resources: "Kaynaklar",
    contactCol: "İletişim",
    downloads: "İndirmeler",
    catalog: "Katalog (çok dilli)",
    sds: "SDS / TDS",
    certificates: "Sertifikalar",
    brandAssets: "Marka görselleri",
    address: "Fatih Mah. 9008 Sok. No:121/1 Akyazı / Sakarya",
    rights: "Tüm hakları saklıdır.",
    privacy: "KVKK / Gizlilik",
    cookies: "Çerez Politikası",
    terms: "Kullanım Koşulları",
    newsletterTitle: "İhracat & ürün güncellemeleri",
    newsletterText: "Yeni ürünler, katalog ve fuar duyuruları için bültene katılın.",
    newsletterCta: "Abone Ol",
    emailPlaceholder: "E-posta adresiniz",
  },

  home: {
    hero: {
      badge: "ISO 9001 · 22716 (GMP) · 14001 · 45001 · CE",
      titleA: "Türkiye'den 80+ ülkeye",
      titleB: "profesyonel temizlik ve bakım kimyasalları",
      subtitle:
        "Tek çatı, üç güçlü marka. Ev, endüstri, denizcilik & savunma ve oto bakımı için konsantre, sertifikalı ve yerli üretim çözümler — numuneden ihracata kadar yanınızdayız.",
      stat1: "Yıllık üretim deneyimi",
      stat1v: "2005",
      stat2: "İhracat yapılan ülke",
      stat2v: "80+",
      stat3: "Güçlü marka",
      stat3v: "3",
    },
    trustIntro: "Uluslararası standartlarda üretim, belgelerle kanıtlanmış kalite",
    brands: {
      eyebrow: "Markalarımız",
      title: "Her ihtiyaç için doğru marka",
      text: "Üç markamız farklı kanalları ve sektörleri hedefler; aradığınıza 1-2 tıkla ulaşın.",
    },
    sectors: {
      eyebrow: "Çözümler / Sektörler",
      title: "Sektörünüzün dilinden konuşuyoruz",
      text: "İşletmenizin sorununu, önerdiğimiz ürün setini ve elde edeceğiniz faydayı net biçimde görün.",
    },
    why: {
      eyebrow: "Neden WUNSC",
      title: "Kurumsal alıcıların ve ihracatçıların tercihi",
      items: [
        {
          t: "Konsantre & ekonomik",
          d: "Yüksek konsantre formüller; daha az ürünle daha çok temizlik, düşük kullanım maliyeti.",
        },
        {
          t: "Sertifikalı kalite",
          d: "ISO 9001/14001/45001, ISO 22716 (GMP) ve CE ile uyumlu, denetlenebilir üretim.",
        },
        {
          t: "Yerli ve milli üretim",
          d: "Sakarya'daki kendi tesisimizde, Ar-Ge laboratuvarımızla geliştirilen formüller.",
        },
        {
          t: "Geniş portföy",
          d: "Ev, endüstri, denizcilik ve oto bakımı; tek tedarikçiden yüzlerce ürün kodu.",
        },
        {
          t: "İhracata hazır",
          d: "Çok dilli etiket, SDS/TDS belgeleri ve ihracat deneyimiyle 80+ ülkeye tedarik.",
        },
        {
          t: "Ar-Ge & özel üretim",
          d: "Private label / fason üretim ve ihtiyaca özel formülasyon imkânı.",
        },
      ],
    },
    showcase: {
      eyebrow: "Öne çıkanlar",
      title: "Çok satan ürün ve kategoriler",
      text: "Endüstriyel yağ çözücülerden oto bakım serilerine kadar öne çıkan çözümler.",
    },
    reputation: {
      eyebrow: "İtibar & Güven",
      title: "Talep gören, sahada kanıtlanmış çözümler",
      text: "Otellerden tersanelere, çamaşırhanelerden filo araçlarına kadar geniş bir kullanım ağı.",
      defenseTitle: "Denizcilik & savunmaya tedarik",
      defenseText:
        "Ürünlerimiz; tersane ve deniz kuvvetleri uygulamalarında (gövde/güverte yağ-leke çözme, boya öncesi yüzey hazırlık) izinli referanslarla kullanılmaktadır.",
    },
    aboutTeaser: {
      eyebrow: "Hakkımızda",
      title: "2005'ten bugüne kimyada üretim ve ihracat",
      text: "Koçkar Makina Kimya'nın 2005'te Akyazı/Sakarya'da başlayan üretim deneyimi, bugün 80'den fazla ülkeye ihracata ve dünya genelinde 4 fabrikaya ulaştı. WUNSCHOME, WUNSC Industrial ve WIEBERR markalarını tek çatı altında topluyoruz.",
    },
    exportCta: {
      eyebrow: "İhracat & Distribütörlük",
      title: "Ülkenizde WUNSC distribütörü olun",
      text: "Rekabetçi fiyat, sertifikalı ürünler, private label imkânı ve güçlü satış-pazarlama desteği. Münhasır bölge fırsatları için başvurun.",
    },
  },

  about: {
    hero: {
      badge: "Hakkımızda",
      title: "Yerli üretim, küresel standart",
      subtitle:
        "Kimyada üretim deneyimimizi, Ar-Ge'mizi ve sertifikalı kalitemizi tek çatı altında topluyoruz: WUNSCHOME, WUNSC Industrial ve WIEBERR.",
    },
    storyTitle: "Hikayemiz",
    story: [
      "Yolculuğumuz 2005 yılında Koçkar Makina Kimya San. ve Tic. A.Ş.'nin Akyazı/Sakarya'da kuruluşuyla başladı. Oto bakım, halı bakım ve endüstriyel temizlik alanındaki üretim birikimimiz, yıllar içinde WIEBERR markası ve geniş bir ihracat ağına dönüştü.",
      "Bugün 21 yılı aşan tecrübemizle, dünya genelinde 4 fabrika ve 80'den fazla ülkeye ihracatla faaliyet gösteriyoruz. 2022'de hayata geçirdiğimiz WUNSCHOME ile ev temizliğinde online satış ve perakendeye açıldık; WUNSC Industrial ile kurumsal/B2B çözümler sunuyoruz.",
      "Önceliğimiz; konsantre, ekonomik ve sertifikalı ürünleri kurumsal alıcıların, bayilerin ve yurt dışı distribütörlerin ihtiyaçlarına göre üretmek. 'Kalite kimyamızda var' anlayışıyla Ar-Ge laboratuvarımız formülleri sürekli geliştiriyor.",
    ],
    mvv: {
      title: "Misyon, vizyon ve değerler",
      mission: {
        t: "Misyon",
        d: "Uluslararası standartlarda, çevreye duyarlı ve ekonomik temizlik çözümlerini Türkiye'den dünyaya sunmak.",
      },
      vision: {
        t: "Vizyon",
        d: "Profesyonel temizlik ve bakım kimyasallarında, ihracatta bölgesinin güvenilir ve tercih edilen üreticisi olmak.",
      },
      values: {
        t: "Değerler",
        d: "Kalite ve uyum, dürüstlük, Ar-Ge odaklılık, çevreye saygı ve müşteriyle uzun vadeli ortaklık.",
      },
    },
    rnd: {
      eyebrow: "Ar-Ge & İnovasyon",
      title: "Laboratuvardan sahaya",
      text: "Kendi Ar-Ge ve kalite kontrol laboratuvarımızda; performans, güvenlik ve sürdürülebilirliği birlikte gözeterek formül geliştiriyoruz. Yeni ürünler, sahadaki kullanım verileri ve müşteri ihtiyaçlarıyla şekilleniyor.",
      points: [
        "Hammadde ve bitmiş ürün kalite kontrolü",
        "Konsantrasyon ve dozaj optimizasyonu",
        "Biyobozunur içerik ve sürdürülebilirlik çalışmaları",
        "Müşteriye özel (private label) formülasyon",
      ],
    },
    production: {
      eyebrow: "Üretim Tesisi",
      title: "Sakarya'da entegre üretim",
      text: "Sıvı ve toz formdaki ürünlerimizi; dolum, ambalajlama ve etiketleme hatlarımızda, kurumsal hacimlere uygun şekilde üretiyoruz. 5L ve 20L bidonlardan perakende ambalajlara kadar geniş seçenek.",
      stats: [
        { v: "80+", l: "İhracat ülkesi" },
        { v: "4", l: "Fabrika" },
        { v: "3", l: "Marka" },
        { v: "21+", l: "Yıl tecrübe" },
      ],
    },
    timelineTitle: "Kilometre taşları",
    qualityTeaser:
      "Tüm üretim süreçlerimiz uluslararası kalite ve çevre standartlarıyla uyumludur.",
  },

  brandsHub: {
    hero: {
      badge: "Markalarımız",
      title: "Tek çatı, üç uzman marka",
      subtitle:
        "WUNSCHOME, WUNSC Industrial ve WIEBERR; farklı kanallar ve sektörler için net biçimde konumlandırılmıştır. Hangi markanın size uygun olduğunu saniyeler içinde görün.",
    },
    compareTitle: "Hangi marka hangi ihtiyaç için?",
    compareCols: {
      brand: "Marka",
      forWho: "Kimin için",
      focus: "Odak",
      packaging: "Ambalaj",
    },
  },

  products: {
    hero: {
      badge: "Ürünler",
      title: "Geniş portföyde kolay keşif",
      subtitle:
        "Markaya, kategoriye, sektöre veya ambalaja göre filtreleyin; aradığınız çözüme hızla ulaşın. Her ürün için SDS/TDS ve teklif imkânı.",
    },
    searchPlaceholder: "Ürün veya kategori ara…",
  },

  productDetail: {
    requestNote: "Bu ürün için fiyat ve numune talebinizi iletin; satış ekibimiz dönsün.",
    specs: "Teknik bilgiler",
    packagingOptions: "Ambalaj seçenekleri",
  },

  solutions: {
    hero: {
      badge: "Çözümler / Sektörler",
      title: "Sektörünüze özel temizlik çözümleri",
      subtitle:
        "Her sektörün kendine has zorlukları var. Sizin sorununuzu anlıyor, doğru ürün setini ve uygulama yöntemini öneriyoruz.",
    },
    structure: {
      problem: "Sorun",
      solution: "Çözümümüz",
      benefits: "Faydalar",
    },
  },

  marine: {
    hero: {
      badge: "Öne çıkan sektör · Denizcilik & Savunma",
      title: "Tersane ve deniz kuvvetleri için yüksek performanslı çözümler",
      subtitle:
        "Gövde ve güvertede yağ-leke çözme, motor dairesi temizliği ve boya öncesi yüzey hazırlığı için; yerli üretim, sertifikalı ve SDS uyumlu ürünler.",
    },
    applications: {
      title: "Uygulama alanları",
      items: [
        { t: "Gövde & güverte", d: "İnatçı yağ, kurum ve leke çözme; tuz ve oksidasyon kalıntılarının temizliği." },
        { t: "Motor dairesi", d: "Makine, zemin ve ekipmanda güçlü yağ çözücü performansı, güvenli kullanım." },
        { t: "Boya öncesi yüzey hazırlık", d: "Boya ve kaplama tutunması için yağdan arındırma ve yüzey hazırlığı." },
        { t: "Filo & ekipman", d: "Liman araçları, ekipman ve genel bakım için endüstriyel temizlik seti." },
      ],
    },
    trust: {
      title: "TSK ve tersanelere tedarik referansı",
      text: "Ürünlerimiz; Türk Silahlı Kuvvetleri ve tersane uygulamalarında (gövde/güverte yağ-leke çözme, boya öncesi yüzey hazırlık) izinli referanslarla kullanılmaktadır. Yerli ve milli üretim kimliğimiz, savunma ve denizcilik alıcıları için güçlü bir güven unsurudur.",
      points: [
        "TSK & tersane tedarik referansı (izinli)",
        "Yerli ve milli üretim",
        "ISO & GMP uyumlu kalite",
        "SDS / uyum belgeleri",
      ],
    },
    export: {
      title: "İhracat açılımı",
      text: "Dost ülke deniz kuvvetleri, sahil güvenlik birimleri ve yabancı tersaneler için tedarik ve distribütörlük görüşmelerine açığız. Çok dilli teknik dokümantasyon sağlıyoruz.",
    },
  },

  exportPage: {
    hero: {
      badge: "İhracat & Distribütörlük",
      title: "Ülkenizde WUNSC'i temsil edin",
      subtitle:
        "Rekabetçi Türk üretimi, sertifikalı ürünler ve private label imkânıyla; bölgenizde münhasır distribütörlük fırsatları sunuyoruz.",
    },
    marketsTitle: "Mevcut pazarlarımız",
    marketsText: "2018'den bu yana büyüyen ihracat ağı — ve genişlemeye devam ediyor.",
    whyTitle: "Neden Türkiye, neden WUNSC?",
    why: [
      { t: "Rekabetçi fiyat", d: "Türkiye'nin üretim avantajı + konsantre formüllerle düşük lojistik ve kullanım maliyeti." },
      { t: "Sertifikalı ürünler", d: "ISO, GMP ve CE uyumu; ihracat pazarlarında talep edilen belgeler." },
      { t: "Private label", d: "Kendi markanızla üretim; etiket ve ambalaj özelleştirme." },
      { t: "Hızlı tedarik", d: "Esnek üretim ve ambalaj seçenekleriyle güvenilir teslimat." },
    ],
    advantagesTitle: "Distribütör avantajları",
    advantages: [
      "Bölgesel münhasırlık imkânı",
      "Cazip distribütör marjları",
      "Satış & pazarlama desteği ve eğitim",
      "Çok dilli katalog, görsel ve materyal",
      "Numune ve tanıtım desteği",
      "Teknik ve SDS dokümantasyonu",
    ],
    processTitle: "Adım adım distribütörlük süreci",
    process: [
      { t: "Başvuru", d: "Aşağıdaki formu doldurun; firma, ülke, sektör ve hedef hacmi paylaşın." },
      { t: "Değerlendirme", d: "Ekibimiz başvurunuzu inceler ve uygun ürün/koşulları belirler." },
      { t: "Numune & teklif", d: "Numune ve fiyat listesini paylaşır, ticari koşulları görüşürüz." },
      { t: "Anlaşma & lansman", d: "Distribütörlük anlaşması, materyal desteği ve ilk sevkiyat." },
    ],
    privateLabel: {
      eyebrow: "Private Label / Fason Üretim",
      title: "Kendi markanızı birlikte üretelim",
      text: "Perakende zincirleri ve markalar için fason üretim ve özel formülasyon. Üretim kapasitemiz ve esnek ambalaj/etiket seçeneklerimizle markanızı destekliyoruz.",
      points: [
        "Geniş ürün grubu: ev, endüstri, oto, denizcilik",
        "MOQ ve ambalaj/etiket özelleştirme",
        "Sertifikalar ve gizlilik (NDA) taahhüdü",
        "Ar-Ge ile ihtiyaca özel formül",
      ],
    },
  },

  quality: {
    hero: {
      badge: "Kalite, Sertifikalar & Ar-Ge",
      title: "Belgelerle kanıtlanmış, denetlenebilir kalite",
      subtitle:
        "Uyum ve güven, özellikle ihracat ve kurumsal alıcı için olmazsa olmaz. Üretim süreçlerimiz uluslararası standartlarla uyumlu.",
    },
    certsTitle: "Sertifika & uyum",
    certsNote: "Sertifika belgelerinin güncel kopyalarını iletişim üzerinden talep edebilirsiniz.",
    rndTitle: "Ar-Ge & kalite kontrol süreci",
    rndText:
      "Hammadde girişinden bitmiş ürüne kadar her aşamada kalite kontrol yapıyoruz. Laboratuvarımız; konsantrasyon, pH, viskozite ve performans testleriyle ürün tutarlılığını güvence altına alır.",
    sustainTitle: "Çevre & sürdürülebilirlik",
    sustainText:
      "Biyobozunur içerik çalışmaları ve çevreye duyarlı formülasyon önceliğimiz. Hedefimiz, uygun ürün gruplarında uluslararası eko-etiket (ör. EU Ecolabel) seviyesine ulaşmak.",
    sdsTitle: "Güvenlik & SDS erişimi",
    sdsText:
      "Tüm ürünlerimiz için Güvenlik Bilgi Formu (SDS) ve teknik veri (TDS) sağlıyoruz. Belgeler distribütör ve kurumsal alıcılarla paylaşılır.",
    note: "Not: İhracatta yanlış beyan riskini önlemek için ürün uyum ifadeleri (ör. düzenleyici onaylar) hukuki ve teknik olarak gözden geçirilerek kullanılır.",
  },

  references: {
    hero: {
      badge: "Referanslar & Vaka Çalışmaları",
      title: "Sahada kanıtlanmış sonuçlar",
      subtitle:
        "Oteller, hastaneler, çamaşırhaneler, tersaneler ve oto yıkama istasyonları WUNSC ile maliyet düşürüp hijyen artırıyor.",
    },
    casesTitle: "Vaka çalışmaları",
    logosTitle: "Bize güvenen sektörler",
    testimonialsTitle: "Müşteri görüşleri",
    ctaTitle: "Siz de sonuç alın",
    ctaText: "Sektörünüze uygun ürün setini ücretsiz numune ile deneyin.",
  },

  contact: {
    hero: {
      badge: "İletişim",
      title: "Konuşalım — numune, teklif veya distribütörlük",
      subtitle:
        "Aşağıdaki formu doldurun; satış ve ihracat ekibimiz en kısa sürede dönüş yapsın. Dilerseniz telefon veya WhatsApp ile de ulaşabilirsiniz.",
    },
    infoTitle: "İletişim bilgileri",
    salesDept: "Yurt içi satış",
    exportDept: "İhracat & distribütörlük",
    hoursTitle: "Çalışma saatleri",
    hours: "Pazartesi – Cuma · 08:30 – 18:00",
    addressTitle: "Adres",
    mapNote: "Sakarya, Türkiye — randevu ile fabrika ziyareti mümkündür.",
    tabs: {
      sample: "Numune Talebi",
      quote: "Teklif Al",
      contact: "Genel İletişim",
      distributor: "Distribütörlük",
    },
  },

  forms: {
    name: "Ad Soyad",
    company: "Firma",
    email: "E-posta",
    phone: "Telefon",
    country: "Ülke",
    city: "Şehir / Ülke",
    sector: "Sektör",
    product: "İlgilenilen ürün / kategori",
    quantity: "Tahmini miktar",
    targetVolume: "Hedef yıllık hacim",
    address: "Adres",
    message: "Mesajınız",
    selectSector: "Sektör seçin",
    selectBrand: "Marka / kategori seçin",
    optional: "(opsiyonel)",
    consent:
      "Kişisel verilerimin, talebimin değerlendirilmesi amacıyla KVKK kapsamında işlenmesine onay veriyorum.",
    consentRequired: "Devam etmek için KVKK onayı gerekir.",
    requiredNote: "* işaretli alanlar zorunludur.",
    successTitle: "Teşekkürler! Talebiniz alındı.",
    successSample:
      "Numune talebiniz ekibimize ulaştı. Kısa süre içinde sizinle iletişime geçeceğiz. Sonraki adımlar e-posta ile de iletilecektir.",
    successQuote:
      "Teklif talebiniz alındı. Satış ekibimiz ürün ve miktar detaylarına göre en kısa sürede dönüş yapacaktır.",
    successContact: "Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.",
    successDistributor:
      "Distribütörlük başvurunuz alındı. İhracat ekibimiz başvurunuzu değerlendirip sizinle iletişime geçecektir.",
    another: "Yeni talep oluştur",
    submitSample: "Numune Talebi Gönder",
    submitQuote: "Teklif Talebi Gönder",
    submitContact: "Mesajı Gönder",
    submitDistributor: "Başvuruyu Gönder",
  },

  faq: {
    title: "Sıkça sorulan sorular",
    subtitle: "İhracat, sipariş ve ürünlerle ilgili en çok merak edilenler.",
  },

  legal: {
    privacyTitle: "KVKK & Gizlilik Politikası",
    cookieTitle: "Çerez Politikası",
    termsTitle: "Kullanım Koşulları",
    updated: "Son güncelleme",
    note: "Bu metin örnek/şablon niteliğindedir ve yayına almadan önce hukuk danışmanınızca gözden geçirilmelidir.",
  },

  notFound: {
    title: "Sayfa bulunamadı",
    text: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.",
  },
};

export type Dict = typeof tr;

const en: Dict = {
  meta: {
    brand: "WUNSC",
    company: "Koçkar Makina Kimya San. ve Tic. A.Ş.",
    tagline: "Professional cleaning & care solutions from Türkiye to the world",
    description:
      "Certified, concentrated and locally produced cleaning solutions for home, industry, marine and auto care under the WUNSCHOME, WUNSC Industrial and WIEBERR brands. Export & distributorship.",
  },

  nav: {
    home: "Home",
    about: "About",
    brands: "Brands",
    products: "Products",
    solutions: "Solutions",
    export: "Export",
    quality: "Quality",
    references: "References",
    contact: "Contact",
  },

  cta: {
    getQuote: "Get a Quote",
    requestSample: "Request a Sample",
    becomeDistributor: "Become a Distributor",
    contactUs: "Contact Us",
    discover: "Explore",
    learnMore: "Learn more",
    viewAll: "View all",
    viewProducts: "View products",
    downloadCatalog: "Download Catalog",
    technicalTalk: "Technical Call",
    distributorApply: "Distributor Application",
    priceList: "Request Price List",
    quoteFason: "Get a Contract-Manufacturing Quote",
    send: "Send",
    sending: "Sending…",
    backHome: "Back to home",
    allProducts: "All products",
  },

  topbar: {
    phone: "+90 264 418 18 67",
    email: "info@wieberr.com.tr",
    badge: "Local production · 21+ years · 80+ countries",
  },

  common: {
    madeInTurkey: "Made in Türkiye",
    madeInTurkeyLong: "Produced in Türkiye",
    certified: "Certified",
    concentrated: "Concentrated",
    economical: "Economical",
    ecoFriendly: "Eco / Biodegradable",
    antiallergic: "Hypoallergenic",
    exportTo: "countries served",
    brand: "Brand",
    brands: "Brands",
    category: "Category",
    categories: "Categories",
    sector: "Sector",
    sectors: "Sectors",
    packaging: "Packaging",
    productCode: "Product code",
    allBrands: "All brands",
    allCategories: "All categories",
    allSectors: "All sectors",
    relatedProducts: "Related products",
    usageAreas: "Usage areas",
    features: "Features",
    dosage: "Usage / Dosage",
    downloadSds: "Download SDS / TDS",
    forDetails: "Contact us for details",
    results: "results",
    filters: "Filters",
    clearFilters: "Clear filters",
    noResults: "No products match this filter.",
    new: "New",
    page: "Page",
  },

  footer: {
    blurb:
      "Under Koçkar Makina Kimya, we produce certified cleaning solutions for home, auto, carpet and industrial care under the WUNSCHOME, WUNSC Industrial and WIEBERR brands. Exporting from Akyazı/Sakarya to 80+ countries, 21+ years of experience.",
    company: "Company",
    productsCol: "Products & Brands",
    resources: "Resources",
    contactCol: "Contact",
    downloads: "Downloads",
    catalog: "Catalog (multilingual)",
    sds: "SDS / TDS",
    certificates: "Certificates",
    brandAssets: "Brand assets",
    address: "Fatih Mah. 9008 Sok. No:121/1 Akyazı / Sakarya",
    rights: "All rights reserved.",
    privacy: "Privacy / GDPR",
    cookies: "Cookie Policy",
    terms: "Terms of Use",
    newsletterTitle: "Export & product updates",
    newsletterText: "Get new products, catalogs and trade-fair announcements.",
    newsletterCta: "Subscribe",
    emailPlaceholder: "Your email address",
  },

  home: {
    hero: {
      badge: "ISO 9001 · 22716 (GMP) · 14001 · 45001 · CE",
      titleA: "From Türkiye to 80+ countries,",
      titleB: "professional cleaning & care chemistry",
      subtitle:
        "One company, three strong brands. Concentrated, certified and locally produced solutions for home, industry, marine & defense and auto care — from sample to export, we are with you.",
      stat1: "Manufacturing since",
      stat1v: "2005",
      stat2: "Export countries",
      stat2v: "80+",
      stat3: "Strong brands",
      stat3v: "3",
    },
    trustIntro: "Manufacturing to international standards, quality proven by certification",
    brands: {
      eyebrow: "Our Brands",
      title: "The right brand for every need",
      text: "Our three brands target different channels and sectors — reach what you need in one or two clicks.",
    },
    sectors: {
      eyebrow: "Solutions / Sectors",
      title: "We speak your industry's language",
      text: "See your operation's problem, our recommended product set and the benefit you will gain — clearly.",
    },
    why: {
      eyebrow: "Why WUNSC",
      title: "The choice of corporate buyers and exporters",
      items: [
        { t: "Concentrated & economical", d: "Highly concentrated formulas: more cleaning with less product and a lower cost in use." },
        { t: "Certified quality", d: "Auditable production compliant with ISO 9001/14001/45001, ISO 22716 (GMP) and CE." },
        { t: "Local production", d: "Formulas developed in our own R&D lab at our Sakarya facility." },
        { t: "Broad portfolio", d: "Home, industry, marine and auto care — hundreds of SKUs from a single supplier." },
        { t: "Export-ready", d: "Multilingual labels, SDS/TDS documents and proven export to 80+ countries." },
        { t: "R&D & custom production", d: "Private label / contract manufacturing and tailor-made formulation." },
      ],
    },
    showcase: {
      eyebrow: "Featured",
      title: "Best-selling products & categories",
      text: "From industrial degreasers to auto-care series, our standout solutions.",
    },
    reputation: {
      eyebrow: "Reputation & Trust",
      title: "Field-proven solutions in demand",
      text: "A wide usage network from hotels to shipyards, laundries to fleet vehicles.",
      defenseTitle: "Supplying marine & defense",
      defenseText:
        "Our products are used — with permitted references — in shipyard and naval applications such as hull/deck oil-stain removal and pre-paint surface preparation.",
    },
    aboutTeaser: {
      eyebrow: "About",
      title: "Manufacturing & export since 2005",
      text: "Koçkar Makina Kimya's manufacturing, started in 2005 in Akyazı/Sakarya, today reaches 80+ countries with 4 factories worldwide. We unite the WUNSCHOME, WUNSC Industrial and WIEBERR brands under one roof.",
    },
    exportCta: {
      eyebrow: "Export & Distribution",
      title: "Become the WUNSC distributor in your country",
      text: "Competitive pricing, certified products, private-label options and strong sales & marketing support. Apply for exclusive territory opportunities.",
    },
  },

  about: {
    hero: {
      badge: "About Us",
      title: "Local production, global standards",
      subtitle:
        "We bring our manufacturing experience, R&D and certified quality together under one roof: WUNSCHOME, WUNSC Industrial and WIEBERR.",
    },
    storyTitle: "Our Story",
    story: [
      "Our journey began in 2005 with the founding of Koçkar Makina Kimya San. ve Tic. A.Ş. in Akyazı/Sakarya. Our know-how in auto care, carpet care and industrial cleaning has, over the years, grown into the WIEBERR brand and a broad export network.",
      "Today, with over 21 years of experience, we operate with 4 factories worldwide and export to more than 80 countries. With WUNSCHOME, launched in 2022, we entered online and retail home care; with WUNSC Industrial we serve corporate/B2B needs.",
      "Our priority is to produce concentrated, economical and certified products tailored to corporate buyers, dealers and international distributors. With a 'quality is in our chemistry' mindset, our R&D lab continuously improves formulas.",
    ],
    mvv: {
      title: "Mission, vision & values",
      mission: { t: "Mission", d: "To deliver internationally compliant, environmentally conscious and economical cleaning solutions from Türkiye to the world." },
      vision: { t: "Vision", d: "To be the region's trusted, preferred manufacturer of professional cleaning and care chemicals in export markets." },
      values: { t: "Values", d: "Quality and compliance, integrity, an R&D mindset, respect for the environment and long-term partnership with customers." },
    },
    rnd: {
      eyebrow: "R&D & Innovation",
      title: "From the lab to the field",
      text: "In our own R&D and quality-control laboratory, we develop formulas balancing performance, safety and sustainability. New products are shaped by field usage data and customer needs.",
      points: [
        "Raw-material and finished-product quality control",
        "Concentration and dosage optimization",
        "Biodegradable content and sustainability work",
        "Customer-specific (private label) formulation",
      ],
    },
    production: {
      eyebrow: "Production Facility",
      title: "Integrated production in Sakarya",
      text: "We produce our liquid and powder products on our filling, packaging and labeling lines, suited to corporate volumes. A broad range from 5L and 20L drums to retail packaging.",
      stats: [
        { v: "80+", l: "Export countries" },
        { v: "4", l: "Factories" },
        { v: "3", l: "Brands" },
        { v: "21+", l: "Years of experience" },
      ],
    },
    timelineTitle: "Milestones",
    qualityTeaser: "All our production processes comply with international quality and environmental standards.",
  },

  brandsHub: {
    hero: {
      badge: "Our Brands",
      title: "One company, three expert brands",
      subtitle:
        "WUNSCHOME, WUNSC Industrial and WIEBERR are clearly positioned for different channels and sectors. See which brand fits you in seconds.",
    },
    compareTitle: "Which brand for which need?",
    compareCols: { brand: "Brand", forWho: "For whom", focus: "Focus", packaging: "Packaging" },
  },

  products: {
    hero: {
      badge: "Products",
      title: "Easy discovery across a broad portfolio",
      subtitle:
        "Filter by brand, category, sector or packaging to reach the right solution fast. SDS/TDS and quote option for every product.",
    },
    searchPlaceholder: "Search products or categories…",
  },

  productDetail: {
    requestNote: "Send your price and sample request for this product and our sales team will get back to you.",
    specs: "Technical details",
    packagingOptions: "Packaging options",
  },

  solutions: {
    hero: {
      badge: "Solutions / Sectors",
      title: "Cleaning solutions tailored to your sector",
      subtitle:
        "Every sector has unique challenges. We understand your problem and recommend the right product set and application method.",
    },
    structure: { problem: "The problem", solution: "Our solution", benefits: "Benefits" },
  },

  marine: {
    hero: {
      badge: "Featured sector · Marine & Defense",
      title: "High-performance solutions for shipyards and naval forces",
      subtitle:
        "Locally produced, certified and SDS-compliant products for hull and deck oil-stain removal, engine-room cleaning and pre-paint surface preparation.",
    },
    applications: {
      title: "Application areas",
      items: [
        { t: "Hull & deck", d: "Removal of stubborn oil, soot and stains; cleaning of salt and oxidation residues." },
        { t: "Engine room", d: "Powerful degreasing performance on machinery, floors and equipment, with safe use." },
        { t: "Pre-paint surface prep", d: "Degreasing and surface preparation for paint and coating adhesion." },
        { t: "Fleet & equipment", d: "An industrial cleaning set for port vehicles, equipment and general maintenance." },
      ],
    },
    trust: {
      title: "Supply reference to the Turkish Armed Forces and shipyards",
      text: "Our products are used — with permitted references — in Turkish Armed Forces and shipyard applications (hull/deck oil-stain removal, pre-paint surface prep). Our local & national production identity is a strong trust factor for defense and marine buyers.",
      points: ["Armed Forces & shipyard reference (permitted)", "Local & national production", "ISO & GMP-compliant quality", "SDS / compliance documents"],
    },
    export: {
      title: "Export expansion",
      text: "We are open to supply and distribution talks for allied-nation navies, coast-guard units and foreign shipyards. We provide multilingual technical documentation.",
    },
  },

  exportPage: {
    hero: {
      badge: "Export & Distribution",
      title: "Represent WUNSC in your country",
      subtitle:
        "With competitive Turkish manufacturing, certified products and private-label options, we offer exclusive distribution opportunities in your territory.",
    },
    marketsTitle: "Our current markets",
    marketsText: "An export network growing since 2018 — and still expanding.",
    whyTitle: "Why Türkiye, why WUNSC?",
    why: [
      { t: "Competitive pricing", d: "Türkiye's manufacturing advantage plus concentrated formulas for low logistics and usage costs." },
      { t: "Certified products", d: "ISO, GMP and CE compliance; the documents demanded in export markets." },
      { t: "Private label", d: "Production under your own brand; label and packaging customization." },
      { t: "Fast supply", d: "Reliable delivery with flexible production and packaging options." },
    ],
    advantagesTitle: "Distributor advantages",
    advantages: [
      "Regional exclusivity option",
      "Attractive distributor margins",
      "Sales & marketing support and training",
      "Multilingual catalog, visuals and materials",
      "Sample and promotion support",
      "Technical and SDS documentation",
    ],
    processTitle: "Step-by-step distribution process",
    process: [
      { t: "Application", d: "Fill in the form below; share your company, country, sector and target volume." },
      { t: "Evaluation", d: "Our team reviews your application and defines suitable products/terms." },
      { t: "Sample & quote", d: "We share samples and a price list and discuss commercial terms." },
      { t: "Agreement & launch", d: "Distribution agreement, material support and first shipment." },
    ],
    privateLabel: {
      eyebrow: "Private Label / Contract Manufacturing",
      title: "Let's produce your own brand together",
      text: "Contract manufacturing and custom formulation for retail chains and brands. We support your brand with our production capacity and flexible packaging/label options.",
      points: [
        "Broad product range: home, industry, auto, marine",
        "MOQ and packaging/label customization",
        "Certificates and confidentiality (NDA)",
        "Tailor-made formulas with R&D",
      ],
    },
  },

  quality: {
    hero: {
      badge: "Quality, Certificates & R&D",
      title: "Auditable quality, proven by documentation",
      subtitle:
        "Compliance and trust are essential, especially for export and corporate buyers. Our processes comply with international standards.",
    },
    certsTitle: "Certificates & compliance",
    certsNote: "You can request up-to-date copies of certificate documents via contact.",
    rndTitle: "R&D & quality-control process",
    rndText:
      "We perform quality control at every stage, from raw-material intake to finished product. Our lab safeguards product consistency with concentration, pH, viscosity and performance tests.",
    sustainTitle: "Environment & sustainability",
    sustainText:
      "Biodegradable-content work and environmentally conscious formulation are priorities. Our goal is to reach an international eco-label level (e.g., EU Ecolabel) in suitable product groups.",
    sdsTitle: "Safety & SDS access",
    sdsText:
      "We provide Safety Data Sheets (SDS) and technical data (TDS) for all products. Documents are shared with distributors and corporate buyers.",
    note: "Note: To avoid the risk of misrepresentation in export, product compliance statements (e.g., regulatory approvals) are used only after legal and technical review.",
  },

  references: {
    hero: {
      badge: "References & Case Studies",
      title: "Field-proven results",
      subtitle:
        "Hotels, hospitals, laundries, shipyards and car-wash stations cut costs and raise hygiene with WUNSC.",
    },
    casesTitle: "Case studies",
    logosTitle: "Sectors that trust us",
    testimonialsTitle: "Customer testimonials",
    ctaTitle: "Get results too",
    ctaText: "Try the product set suited to your sector with a free sample.",
  },

  contact: {
    hero: {
      badge: "Contact",
      title: "Let's talk — samples, quotes or distribution",
      subtitle:
        "Fill in the form below and our sales & export team will get back to you shortly. You can also reach us by phone or WhatsApp.",
    },
    infoTitle: "Contact information",
    salesDept: "Domestic sales",
    exportDept: "Export & distribution",
    hoursTitle: "Working hours",
    hours: "Monday – Friday · 08:30 – 18:00",
    addressTitle: "Address",
    mapNote: "Sakarya, Türkiye — factory visits are possible by appointment.",
    tabs: {
      sample: "Request a Sample",
      quote: "Get a Quote",
      contact: "General Contact",
      distributor: "Distribution",
    },
  },

  forms: {
    name: "Full name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    country: "Country",
    city: "City / Country",
    sector: "Sector",
    product: "Product / category of interest",
    quantity: "Estimated quantity",
    targetVolume: "Target annual volume",
    address: "Address",
    message: "Your message",
    selectSector: "Select a sector",
    selectBrand: "Select brand / category",
    optional: "(optional)",
    consent: "I consent to the processing of my personal data under GDPR/KVKK to evaluate my request.",
    consentRequired: "Consent is required to continue.",
    requiredNote: "* fields are required.",
    successTitle: "Thank you! Your request has been received.",
    successSample:
      "Your sample request has reached our team. We will contact you shortly. Next steps will also be sent by email.",
    successQuote:
      "Your quote request has been received. Our sales team will get back to you based on product and quantity details.",
    successContact: "Your message has reached us. We will get back to you shortly.",
    successDistributor:
      "Your distribution application has been received. Our export team will review it and contact you.",
    another: "Create a new request",
    submitSample: "Send Sample Request",
    submitQuote: "Send Quote Request",
    submitContact: "Send Message",
    submitDistributor: "Send Application",
  },

  faq: {
    title: "Frequently asked questions",
    subtitle: "The most common questions about export, ordering and products.",
  },

  legal: {
    privacyTitle: "Privacy & Data Protection",
    cookieTitle: "Cookie Policy",
    termsTitle: "Terms of Use",
    updated: "Last updated",
    note: "This text is a sample/template and should be reviewed by your legal counsel before publication.",
  },

  notFound: {
    title: "Page not found",
    text: "The page you are looking for may have been moved or removed.",
  },
};

const dictionaries: Record<Locale, Dict> = { tr, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
