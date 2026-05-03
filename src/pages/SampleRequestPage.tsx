import { useMemo, useState } from 'react'
import { toWhatsAppLink } from '../config'

type FormState = {
  productUrl: string
  productDetails: string
  quantity: string
  city: string
}

const initial: FormState = {
  productUrl: '',
  productDetails: '',
  quantity: '1',
  city: '',
}

export function SampleRequestPage() {
  const [form, setForm] = useState<FormState>(initial)

  const message = useMemo(() => {
    const lines = [
      'السلام عليكم، أريد طلب عينة (Sample) لمنتج من الصين:',
      form.productUrl ? `- رابط المنتج: ${form.productUrl}` : '',
      `- تفاصيل المنتج: ${form.productDetails || ''}`,
      `- الكمية المطلوبة للعينة: ${form.quantity || '1'}`,
      `- مدينة التوصيل: ${form.city || ''}`,
    ].filter(Boolean)
    return lines.join('\n')
  }, [form])

  const isValid = form.productDetails.trim() && form.city.trim()

  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle" style={{ fontSize: 28 }}>
          طلب عينة (Sample)
        </h1>
        <p className="lead" style={{ fontSize: 16 }}>
          قبل استيراد كمية كبيرة، يمكنك طلب عينة من المنتج للتأكد من الجودة والمواصفات.
          نحن نتكفل بجلب العينة إليك في أسرع وقت.
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
              <label className="label" htmlFor="productUrl">
                رابط المنتج (اختياري)
              </label>
              <input
                id="productUrl"
                className="input"
                value={form.productUrl}
                onChange={(e) => setForm((s) => ({ ...s, productUrl: e.target.value }))}
                placeholder="مثال: رابط من علي بابا أو 1688..."
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="productDetails">
                تفاصيل المنتج (السلعة)
              </label>
              <textarea
                id="productDetails"
                className="textarea"
                style={{ minHeight: 80 }}
                value={form.productDetails}
                onChange={(e) => setForm((s) => ({ ...s, productDetails: e.target.value }))}
                placeholder="صف السلعة بالتفصيل (الاسم، اللون، الموديل...)"
                required
              />
            </div>

            <div className="grid3" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="field">
                <label className="label" htmlFor="quantity">
                  الكمية (العينة)
                </label>
                <input
                  id="quantity"
                  className="input"
                  value={form.quantity}
                  onChange={(e) => setForm((s) => ({ ...s, quantity: e.target.value }))}
                  placeholder="مثال: 1 أو 2"
                  required
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="city">
                  مدينة التوصيل
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
            </div>

            <div className="heroActions" style={{ marginTop: 12 }}>
              <button className="btn btnPrimary" type="submit" disabled={!isValid}>
                إرسال الطلب عبر واتساب
              </button>
            </div>

            <div className="helper">
              ملاحظة: طلب العينة يضمن لك فحص الجودة قبل استثمار مبلغ كبير في البضاعة.
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
