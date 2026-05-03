export const siteConfig = {
  companyName: 'Ste Kaiji sarl au',
  brandName: 'KAIJI',
  domain: 'kaijishop.com',

  // رقم المغرب بصيغة دولية (يستخدمه زر واتساب وروابط "طلب سعر الجملة")
  whatsappNumber: '+212638231088',
  // للعرض داخل الواجهة (قد يظهر مقلوباً داخل RTL إن لم نضبط dir في مكان العرض)
  phoneLocalDisplay: '06 38 23 10 88',

  // TODO: ضع روابط الحسابات الرسمية
  instagramUrl: 'https://www.instagram.com/',
  youtubeUrl: 'https://www.youtube.com/',

  // رابط Google Maps (Share link)
  googleMapsShareUrl:
    'https://www.google.com/maps/place/Ste+kaiji+sarl+au/data=!4m2!3m1!1s0x0:0x51e11c9c3f86bbbd?sa=X&ved=1t:2428&ictx=111',

  defaultWholesaleMessage:
    'السلام عليكم، أريد سعر الجملة + تفاصيل التوفر لهذا المنتج:',
} as const

export function toWhatsAppLink(opts: { message: string }) {
  const phone = siteConfig.whatsappNumber.replace(/[^\d+]/g, '')
  const text = encodeURIComponent(opts.message)
  return `https://wa.me/${phone.replace('+', '')}?text=${text}`
}

