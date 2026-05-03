import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CatalogPage } from './pages/CatalogPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ImportServicePage } from './pages/ImportServicePage'
import { RequestFromChinaPage } from './pages/RequestFromChinaPage'

export default function App() {
    return (
          <HashRouter>
                <Routes>
                        <Route element={<Layout />}>
                                  <Route index element={<HomePage />} />
                                  <Route path="/catalog" element={<CatalogPage />} />
                                  <Route path="/import-from-china" element={<ImportServicePage />} />
                                  <Route path="/request" element={<RequestFromChinaPage />} />
                                  <Route path="/contact" element={<ContactPage />} />
                                  <Route path="*" element={<Navigate to="/" replace />} />
                        </Route>Route>
                </Routes>Routes>
          </HashRouter>HashRouter>
        )
}
</HashRouter>
