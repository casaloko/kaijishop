import { siteConfig, toWhatsAppLink } from '../config'

function guessEmbedUrl(url: string) {
  if (url.includes('google.com/maps/embed')) return url
  return ''
}

export function ContactPage() {
  const embedUrl = guessEmbedUrl(siteConfig.googleMapsShareUrl)

  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle" style={{ fontSize: 28 }}>
          تواصل معنا
        </h1>
        <p className="lead" style={{ fontSize: 16 }}>
          للاستفسار عن أسعار الجملة أو طلب سلعة من الصين، تواصل معنا مباشرة.
        </p>

        <div className="grid3" style={{ marginTop: 12 }}>
          <div className="card feature">
            <h3>WhatsApp</h3>
            <p>الأسرع للتجار: إرسال المنتج/الكمية وسنرد عليك بالسعر والتوفر.</p>
            <p className="helper" style={{ marginTop: 8 }}>
              الهاتف:{' '}
              <span dir="ltr" style={{ unicodeBidi: 'plaintext' }}>
                {siteConfig.phoneLocalDisplay}
              </span>
            </p>
            <div className="heroActions" style={{ marginTop: 10 }}>
              <a
                className="btn btnPrimary"
                href={toWhatsAppLink({
                  message: 'السلام عليكم، أريد الاستفسار عن أسعار الجملة.',
                })}
                target="_blank"
                rel="noreferrer"
              >
                فتح واتساب
              </a>
            </div>
          </div>

          <div className="card feature">
            <h3>YouTube</h3>
            <p>فيديوهات قصيرة لعرض جودة السلع والمعاينة (Shorts).</p>
            <div className="heroActions" style={{ marginTop: 10 }}>
              <a className="btn" href={siteConfig.youtubeUrl} target="_blank" rel="noreferrer">
                زيارة القناة
              </a>
            </div>
          </div>

          <div className="card feature">
            <h3>Instagram</h3>
            <p>صور/قصص للمنتجات والتوفر اليومي.</p>
            <div className="heroActions" style={{ marginTop: 10 }}>
              <a
                className="btn"
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                زيارة الحساب
              </a>
            </div>
          </div>
        </div>

        <div className="section" style={{ paddingBottom: 0 }}>
          <h2 className="sectionTitle">مقر الشركة</h2>
          <p className="helper" style={{ marginBottom: 10 }}>
            ضع رابط Google Maps Embed داخل `src/config.ts` لعرض خريطة تفاعلية.
            إلى حين ذلك يمكنك فتح الخريطة عبر الزر.
          </p>

          <div className="embed">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="خريطة Ste Kaiji"
              />
            ) : (
              <div style={{ padding: 16 }}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <span className="pill">Google Maps</span>
                  <a
                    className="btn btnPrimary"
                    href={siteConfig.googleMapsShareUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    فتح الخريطة
                  </a>
                </div>
                <p className="helper" style={{ marginTop: 10 }}>
                  لإظهار الخريطة داخل الموقع: استخدم رابط Embed مثل:
                  <br />
                  <span className="pill">https://www.google.com/maps/embed?...</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

