import { useMemo, useState } from 'react'
import { toWhatsAppLink } from '../config'

type FormState = {
  productType: string
  quantity: string
  city: string
  targetPrice: string
  details: string
}

const initial: FormState = {
  productType: '',
  quantity: '',
  city: '',
  targetPrice: '',
  details: '',
}

export function RequestFromChinaPage() {
  const [form, setForm] = useState<FormState>(initial)

  const message = useMemo(() => {
    const lines = [
      'السلام عليكم، أريد طلب سلعة من الصين بالجملة:',
      `- نوع السلعة: ${form.productType || ''}`,
      `- الكمية المطلوبة: ${form.quantity || ''}`,
      `- المدينة: ${form.city || ''}`,
      form.targetPrice ? `- السعر المستهدف (اختياري): ${form.targetPrice}` : '',
      form.details ? `- تفاصيل إضافية: ${form.details}` : '',
    ].filter(Boolean)
    return lines.join('\n')
  }, [form])

  const isValid = form.productType.trim() && form.quantity.trim() && form.city.trim()

  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle" style={{ fontSize: 28 }}>
          اطلب سلعتك من الصين
        </h1>
        <p className="lead" style={{ fontSize: 16 }}>
          املأ الطلب بسرعة (دقيقة واحدة) وسنرد عليك بأفضل عرض ممكن للتوريد
          بالجملة.
        </p>

        <div className="card" style={{ padding: 16, marginTop: 12 }}>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault()
              if (!isValid) return
              window.open(toWhatsAppLink({ message }), '_blank', 'noreferrer')
            }}
          >
            <div className="field">
              <label className="label" htmlFor="productType">
                نوع السلعة
              </label>
              <input
                id="productType"
                className="input"
                value={form.productType}
                onChange={(e) => setForm((s) => ({ ...s, productType: e.target.value }))}
                placeholder="مثال: ماكينة حلاقة، إكسسوارات هاتف، ألعاب..."
                required
              />
            </div>

            <div className="grid3" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <div className="field">
                <label className="label" htmlFor="quantity">
                  الكمية المطلوبة
                </label>
                <input
                  id="quantity"
                  className="input"
                  value={form.quantity}
                  onChange={(e) => setForm((s) => ({ ...s, quantity: e.target.value }))}
                  placeholder="مثال: 200 قطعة"
                  required
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="city">
                  المدينة
                </label>
                <input
                  id="city"
                  className="input"
                  value={form.city}
                  onChange={(e) => setForm((s) => ({ ...s, city: e.target.value }))}
                  placeholder="مثال: الدار البيضاء"
                  required
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="targetPrice">
                  السعر المستهدف (اختياري)
                </label>
                <input
                  id="targetPrice"
                  className="input"
                  value={form.targetPrice}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, targetPrice: e.target.value }))
                  }
                  placeholder="مثال: أقل من 20 درهم/قطعة"
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="details">
                تفاصيل إضافية (اختياري)
              </label>
              <textarea
                id="details"
                className="textarea"
                value={form.details}
                onChange={(e) => setForm((s) => ({ ...s, details: e.target.value }))}
                placeholder="المقاس/اللون/الموديل/الجودة المطلوبة/روابط أمثلة..."
              />
              <div className="helper">
                كلما كانت التفاصيل أوضح، كان العرض أسرع وأدق.
              </div>
            </div>

            <div className="heroActions" style={{ marginTop: 2 }}>
              <button className="btn btnPrimary" type="submit" disabled={!isValid}>
                إرسال عبر واتساب
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => setForm(initial)}
              >
                مسح
              </button>
            </div>

            <div className="helper">
              الحقول الإلزامية: نوع السلعة، الكمية، المدينة.
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

