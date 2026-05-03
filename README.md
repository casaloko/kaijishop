# KAIJI Shop (B2B)

موقع خفيف وسريع لشركة **Ste Kaiji sarl au** (الدومين: `kaijishop.com`) لعرض منتجات الجملة وخدمة **الاستيراد للغير من الصين**.

## تشغيل محلي

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يظهر في الطرفية (عادةً `http://localhost:5173`).

## نشر على GitHub Pages

هذا المشروع مضبوط ليعمل على:

- `https://casaloko.github.io/kaijishop/`

لذلك تم ضبط `base` في `vite.config.ts` إلى `/kaijishop/`.

إذا ستنشر لاحقاً على دومين مباشر مثل `kaijishop.com`:

- غيّر `base` إلى `/`

## أهم الملفات للتعديل

- `src/config.ts`: ضع رقم واتساب + روابط YouTube/Instagram + رابط Google Maps (Embed/Share).
- `src/data/products.ts`: عدّل كتالوج المنتجات (الأسماء/الوصف/الوسوم) وأضف صوركم لاحقاً.

## صفحات الموقع

- `/` الرئيسية
- `/catalog` كتالوج المنتجات
- `/import-from-china` خدمة الاستيراد من الصين
- `/request` نموذج "اطلب سلعتك من الصين"
- `/contact` تواصل + خريطة + روابط السوشيال

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
