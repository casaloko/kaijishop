import { Link } from 'react-router-dom'
import { JourneySteps } from '../components/JourneySteps'
import { ProductCard } from '../components/ProductCard'
import { siteConfig, toWhatsAppLink } from '../config'
import { products } from '../data/products'

import heroImage from '../assets/hero.png'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div className="card heroCard">
              <img src={heroImage} alt="شحن واستيراد بالجملة" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }} />
              <span className="eyebrow">
                استيراد من الصين • بيع بالجملة • Traders first
              </span>
              <h1 className="h1">
                {siteConfig.brandName} — حلول جملة سريعة للتجار
              </h1>
              <p className="lead">
                نعرض منتجات متوفرة بالجملة، ونوفر خدمة <b>الاستيراد للغير</b>:
                اطلب أي سلعة بالجملة من الصين وسنهتم بالبحث والإجراءات والشحن.
              </p>

              <div className="heroActions">
                <Link className="btn btnPrimary" to="/catalog">
                  تصفح كتالوج المنتجات
                </Link>
                <Link className="btn" to="/request">
                  اطلب سلعتك من الصين
                </Link>
                <a
                  className="btn"
                  href={toWhatsAppLink({
                    message:
                      'السلام عليكم، أريد الاستفسار عن أسعار الجملة والتوفر.',
                  })}
                  target="_blank"
                  rel="noreferrer"
                >
                  تواصل واتساب
                </a>
              </div>
            </div>

            <aside className="card heroAside" aria-label="مزايا سريعة">
              <div className="statGrid">
                <div className="stat">
                  <b>موجه للتجار (B2B)</b>
                  <span>طلب سعر الجملة مباشرة عبر واتساب.</span>
                </div>
                <div className="stat">
                  <b>استيراد للغير</b>
                  <span>نبحث في الصين عن أي سلعة بالجملة حسب طلبك.</span>
                </div>
                <div className="stat">
                  <b>ثقة عبر الفيديو</b>
                  <span>
                    شاهد فيديوهات قصيرة للمنتجات (YouTube Shorts) لرفع الثقة.
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">لماذا كايجي؟</h2>
          <div className="grid3">
            <div className="card feature">
              <h3>سرعة ووضوح</h3>
              <p>
                تصميم خفيف جداً ليفتح بسرعة على هاتف التاجر أثناء العمل، مع
                دعوات واضحة لطلب السعر.
              </p>
            </div>
            <div className="card feature">
              <h3>صور حقيقية</h3>
              <p>
                الأفضل دائماً استخدام صور من مستودعك أو من الصين. هذا يرفع الثقة
                ويقلل الشك لدى التاجر.
              </p>
            </div>
            <div className="card feature">
              <h3>لمسة دولية</h3>
              <p>
                العربية أساساً، مع كلمات بسيطة (B2B / Traders first) لتقوية
                الطابع الدولي.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h2 className="sectionTitle" style={{ margin: 0 }}>
              منتجات بالجملة (نماذج)
            </h2>
            <Link className="btn" to="/catalog">
              عرض الكل
            </Link>
          </div>
          <div className="productGrid" style={{ marginTop: 12 }}>
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <p className="helper" style={{ marginTop: 10 }}>
            ملاحظة: استبدل هذه الأمثلة بصوركم وعناوينكم الحقيقية لإظهار قوة
            المخزون.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">رحلة السلعة</h2>
          <JourneySteps />
        </div>
      </section>
    </>
  )
}

