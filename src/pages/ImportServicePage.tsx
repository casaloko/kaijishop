import { Link } from 'react-router-dom'
import { JourneySteps } from '../components/JourneySteps'

export function ImportServicePage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="sectionTitle" style={{ fontSize: 28 }}>
            خدمة الاستيراد من الصين (الاستيراد للغير)
          </h1>
          <p className="lead" style={{ fontSize: 16 }}>
            إذا كنت تبحث عن سلعة غير موجودة في الكتالوج، يمكننا توفيرها لك من
            المصانع الصينية مباشرة بالجملة مع التكفل بالإجراءات من البحث إلى
            الشحن.
          </p>

          <div className="grid3" style={{ marginTop: 12 }}>
            <div className="card feature">
              <h3>بحث من المصنع</h3>
              <p>
                نحدد المورد الأنسب، نطلب صور/فيديو، ونقارن جودة المنتج والسعر.
              </p>
            </div>
            <div className="card feature">
              <h3>تفاوض وتأكيد</h3>
              <p>
                نتأكد من المواصفات والكمية، ثم نثبت السعر النهائي قبل التنفيذ.
              </p>
            </div>
            <div className="card feature">
              <h3>شحن وتسليم</h3>
              <p>
                نتابع عملية الشحن ونطلعك على المستجدات حتى وصول السلعة وتسليمها.
              </p>
            </div>
          </div>

          <div className="heroActions" style={{ marginTop: 14 }}>
            <Link className="btn btnPrimary" to="/request">
              ابدأ بطلب سلعتك الآن
            </Link>
            <Link className="btn" to="/catalog">
              أو تصفح الكتالوج
            </Link>
          </div>
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

