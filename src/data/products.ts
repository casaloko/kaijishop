export type Product = {
  id: string
  name: string
  shortDescription: string
  tags: string[]
  imageUrl?: string
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'إكسسوارات هاتف بالجملة',
    shortDescription:
      'تشكيلة للتجار: كوفرات، زجاج حماية، كابلات وشواحن. (يفضّل إضافة صوركم الحقيقية لاحقاً)',
    tags: ['B2B', 'متوفر'],
    imageUrl: 'https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    name: 'مستلزمات متجر ورفوف عرض',
    shortDescription:
      'رفوف، خطافات تعليق، ملصقات أسعار، وأدوات تنظيم تساعدك على عرض المنتجات بشكل احترافي.',
    tags: ['B2B', 'متوفر'],
    imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    name: 'منتجات منزلية صغيرة',
    shortDescription:
      'منتجات سريعة الدوران للتجار: أدوات مطبخ بسيطة، منظمات، وإكسسوارات منزلية.',
    tags: ['B2B', 'حسب التوفر'],
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'p4',
    name: 'أدوات كهربائية خفيفة',
    shortDescription:
      'اختيارات بعناية للتجار: مفكات، شريط قياس، أدوات تركيب بسيطة بجودة مناسبة للجملة.',
    tags: ['B2B', 'طلب سعر الجملة'],
    imageUrl: 'https://images.unsplash.com/photo-1540104539488-92a51bbc0410?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'p5',
    name: 'مستلزمات تغليف وشحن',
    shortDescription:
      'أكياس، شريط لاصق، كراتين، وملحقات التغليف لتجار الجملة والتجزئة.',
    tags: ['B2B', 'متوفر'],
    imageUrl: 'https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'p6',
    name: 'منتج حسب طلبك من الصين',
    shortDescription:
      'لم تجد ما تبحث عنه؟ اطلب أي سلعة بالجملة وسنبحث عنها من المصانع الصينية ونتكفل بالإجراءات.',
    tags: ['استيراد للغير', 'بحث في الصين'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=600&auto=format&fit=crop',
  },
]

