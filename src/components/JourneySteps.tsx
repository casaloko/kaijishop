export function JourneySteps() {
  const steps = [
    { title: 'طلب العميل', desc: 'تخبرنا بنوع السلعة والكمية والمواصفات.' },
    { title: 'البحث في الصين', desc: 'نبحث عن المصنع المناسب ونقارن الجودة والسعر.' },
    { title: 'التفاوض والتجهيز', desc: 'تأكيد السعر، التغليف، وموعد الجاهزية.' },
    { title: 'الشحن', desc: 'متابعة الشحن إلى المغرب حسب أفضل خيار.' },
    { title: 'التسليم', desc: 'استلام آمن وتسليم للتاجر أو للعنوان المتفق عليه.' },
  ]

  return (
    <div className="grid3">
      {steps.map((s) => (
        <div key={s.title} className="card feature">
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  )
}

