import { siteConfig, toWhatsAppLink } from '../config'
import type { Product } from '../data/products'
import { Link } from 'react-router-dom'

export function ProductCard({ product }: { product: Product }) {
  const message = `${siteConfig.defaultWholesaleMessage}\n- المنتج: ${product.name}\n- الكمية: \n- المدينة: `

  return (
    <article className="card productCard">
      <div className="productMedia" role="img" aria-label={product.name} />
      <div className="productBody">
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <div className="row">
          {product.tags.slice(0, 3).map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>
        <div className="heroActions" style={{ marginTop: 12 }}>
          <a
            className="btn btnPrimary"
            href={toWhatsAppLink({ message })}
            target="_blank"
            rel="noreferrer"
          >
            طلب سعر الجملة
          </a>
          <Link className="btn" to="/request">
            اطلب سلعة مشابهة من الصين
          </Link>
        </div>
      </div>
    </article>
  )
}

