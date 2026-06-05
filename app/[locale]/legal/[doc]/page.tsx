import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/lib/dictionary";
import { PageHero } from "@/components/PageHero";

const DOCS = ["privacy", "cookies", "terms"] as const;
type Doc = (typeof DOCS)[number];

export function generateStaticParams() {
  return DOCS.map((doc) => ({ doc }));
}

type Section = { h: string; p: string[] };

function content(locale: Locale, doc: Doc): { title: string; sections: Section[] } {
  const tr: Record<Doc, { title: string; sections: Section[] }> = {
    privacy: {
      title: "KVKK & Gizlilik Politikası",
      sections: [
        { h: "Veri sorumlusu", p: ["Bu web sitesi üzerinden iletilen kişisel veriler, Koçkar Makina Kimya San. ve Tic. A.Ş. (WUNSC) tarafından veri sorumlusu sıfatıyla işlenir."] },
        { h: "İşlenen veriler ve amaç", p: ["İletişim, numune, teklif ve distribütörlük formları aracılığıyla ad-soyad, firma, e-posta, telefon, ülke/şehir ve talep içeriği gibi veriler; talebinizin değerlendirilmesi, sizinle iletişim kurulması ve ticari süreçlerin yürütülmesi amacıyla işlenir."] },
        { h: "Saklama ve aktarım", p: ["Veriler, ilgili mevzuatta öngörülen süreler boyunca saklanır ve yalnızca amaçla sınırlı olarak, gerekli hallerde hizmet sağlayıcılarla paylaşılır."] },
        { h: "Haklarınız", p: ["KVKK m.11 kapsamında verilerinize erişme, düzeltme, silme ve işlemeye itiraz etme haklarına sahipsiniz. Talepleriniz için iletişim kanallarımızı kullanabilirsiniz."] },
      ],
    },
    cookies: {
      title: "Çerez Politikası",
      sections: [
        { h: "Çerez nedir?", p: ["Çerezler, siteyi ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır."] },
        { h: "Kullandığımız çerezler", p: ["Sitenin çalışması için zorunlu çerezler ile (tercihe bağlı) performans ve analitik çerezleri kullanılabilir. Dil tercihiniz tarayıcınızda saklanır."] },
        { h: "Çerez yönetimi", p: ["Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması, sitenin bazı bölümlerini etkileyebilir."] },
      ],
    },
    terms: {
      title: "Kullanım Koşulları",
      sections: [
        { h: "Genel", p: ["Bu siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. İçerikler bilgilendirme amaçlıdır ve önceden haber verilmeksizin değiştirilebilir."] },
        { h: "Fikri mülkiyet", p: ["Sitedeki marka, logo, görsel ve metinler WUNSC'e aittir ve izinsiz kullanılamaz."] },
        { h: "Sorumluluk", p: ["Ürün kullanımına ilişkin teknik bilgiler için güncel SDS/TDS belgeleri esas alınmalıdır. Yanlış kullanımdan doğan sonuçlardan firmamız sorumlu değildir."] },
      ],
    },
  };

  const en: Record<Doc, { title: string; sections: Section[] }> = {
    privacy: {
      title: "Privacy & Data Protection",
      sections: [
        { h: "Data controller", p: ["Personal data submitted through this website is processed by Koçkar Makina Kimya San. ve Tic. A.Ş. (WUNSC) as the data controller."] },
        { h: "Data processed and purpose", p: ["Through contact, sample, quote and distribution forms, data such as full name, company, email, phone, country/city and request details are processed to evaluate your request, communicate with you and run commercial processes."] },
        { h: "Retention and transfer", p: ["Data is retained for the periods required by applicable law and shared only with service providers as strictly necessary for the stated purpose."] },
        { h: "Your rights", p: ["You have the right to access, rectify, erase and object to the processing of your data. Please use our contact channels for requests."] },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      sections: [
        { h: "What are cookies?", p: ["Cookies are small text files stored on your device when you visit the site."] },
        { h: "Cookies we use", p: ["We may use cookies that are strictly necessary for the site to function, along with (optional) performance and analytics cookies. Your language preference is stored in your browser."] },
        { h: "Managing cookies", p: ["You can manage or delete cookies from your browser settings. Disabling necessary cookies may affect parts of the site."] },
      ],
    },
    terms: {
      title: "Terms of Use",
      sections: [
        { h: "General", p: ["By using this site you accept the following terms. Content is for information purposes and may change without prior notice."] },
        { h: "Intellectual property", p: ["Brands, logos, images and texts on the site belong to WUNSC and may not be used without permission."] },
        { h: "Liability", p: ["For technical product-use information, the current SDS/TDS documents prevail. Our company is not responsible for consequences arising from improper use."] },
      ],
    },
  };

  return (locale === "tr" ? tr : en)[doc];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; doc: string }>;
}): Promise<Metadata> {
  const { locale, doc } = await params;
  if (!DOCS.includes(doc as Doc)) return {};
  return { title: content(locale, doc as Doc).title };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: Locale; doc: string }>;
}) {
  const { locale, doc } = await params;
  if (!DOCS.includes(doc as Doc)) notFound();
  const t = getDict(locale);
  const data = content(locale, doc as Doc);
  const today = new Date().toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHero title={data.title} subtitle={`${t.legal.updated}: ${today}`} />
      <section className="section">
        <div className="container max-w-3xl">
          <div className="prose-custom">
            {data.sections.map((s, i) => (
              <div key={i}>
                <h2>{s.h}</h2>
                {s.p.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            {t.legal.note}
          </div>
        </div>
      </section>
    </>
  );
}
