import { NavLink, Outlet } from 'react-router-dom'
import { siteConfig, toWhatsAppLink } from '../config'
import { SocialLinks } from './SocialLinks'
import { Logo } from './Logo'

function navLinkClassName(isActive: boolean) {
  return `navLink ${isActive ? 'navLinkActive' : ''}`
}

export function Layout() {
  return (
    <div className="page">
      <a className="skipLink" href="#content">
        تخطي إلى المحتوى
      </a>

      <header className="topbar">
        <div className="container">
          <nav className="nav" aria-label="التنقل الرئيسي">
            <NavLink to="/" className="brand">
              <Logo />
              <span>{siteConfig.brandName}</span>
              <span className="pill" style={{ marginInlineStart: 6 }}>
                B2B
              </span>
            </NavLink>

            <div className="navLinks">
              <NavLink
                to="/catalog"
                className={({ isActive }) => navLinkClassName(isActive)}
              >
                كتالوج المنتجات
              </NavLink>
              <NavLink
                to="/import-from-china"
                className={({ isActive }) => navLinkClassName(isActive)}
              >
                الاستيراد من الصين
              </NavLink>
              <NavLink
                to="/request"
                className={({ isActive }) => navLinkClassName(isActive)}
              >
                اطلب سلعتك
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => navLinkClassName(isActive)}
              >
                تواصل
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footerGrid">
            <div>
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <div className="brand">
                  <Logo />
                  <span>{siteConfig.companyName}</span>
                </div>
                <span className="pill">kaijishop.com</span>
              </div>
              <p className="helper" style={{ marginTop: 10 }}>
                موقع موجه للتجار (B2B). العربية هي اللغة الأساسية مع لمسة دولية
                بسيطة.
              </p>
              <p className="helper" style={{ marginTop: 8 }}>
                الهاتف:{' '}
                <span dir="ltr" style={{ unicodeBidi: 'plaintext' }}>
                  {siteConfig.phoneLocalDisplay}
                </span>
              </p>
            </div>

            <div>
              <div className="sectionTitle" style={{ fontSize: 16 }}>
                تابع المنتجات بالفيديو
              </div>
              <SocialLinks />
            </div>
          </div>

          <p className="helper" style={{ marginTop: 12 }}>
            © {new Date().getFullYear()} {siteConfig.brandName}. جميع الحقوق
            محفوظة.
          </p>
        </div>
      </footer>

      <a
        className="waFloat"
        href={toWhatsAppLink({ message: 'السلام عليكم، لدي استفسار حول أسعار الجملة.' })}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل سريع عبر واتساب"
        title="واتساب"
      >
        <span className="waIcon" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}

