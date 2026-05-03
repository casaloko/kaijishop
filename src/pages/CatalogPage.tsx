import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'

export function CatalogPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle" style={{ fontSize: 28 }}>
          كتالوج المنتجات
        </h1>
        <p className="lead" style={{ fontSize: 16 }}>
          منتجات متوفرة بالجملة مع خيار <b>طلب سعر الجملة</b>. إذا لم تجد ما
          تبحث عنه، استخدم صفحة “اطلب سلعتك”.
        </p>

        <div className="productGrid" style={{ marginTop: 14 }}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

