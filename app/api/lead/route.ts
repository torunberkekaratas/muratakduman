import { NextResponse } from "next/server";

/**
 * Lead form endpoint.
 *
 * Plana göre buradan: (1) CRM'e kayıt, (2) otomatik teşekkür/bilgilendirme
 * e-postası (e-posta yol haritası Şablon 5) tetiklenmelidir.
 * Şimdilik gönderimi doğrular ve loglar; gerçek entegrasyon (SMTP/CRM API)
 * eklenecek noktayı işaretler.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data?.name || !data?.email) {
      return NextResponse.json(
        { ok: false, error: "missing_required_fields" },
        { status: 400 },
      );
    }

    // TODO: CRM entegrasyonu + otomatik e-posta (yol haritası ile)
    console.log("[lead]", {
      kind: data.kind,
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      country: data.country,
      sector: data.sector,
      product: data.product,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}
