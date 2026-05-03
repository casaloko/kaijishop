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
    'https://www.google.com/maps/place/Ste+kaiji+sarl+au/@33.4831031,-7.5878235,17z/data=!3m1!4b1!4m6!3m5!1s0xda62d00122e232b:0x51e11c9c3f86bbbd!8m2!3d33.4831031!4d-7.5878235!16s%2Fg%2F11wdb_d_09',

  // رابط التضمين (Embed) لإظهار الخريطة داخل الموقع
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.554316930263!2d-6.353070425026649!3d32.34405497334583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda387ba40676f65%3A0x51e11c9c3f86bbbd!2sSte%20kaiji%20sarl%20au!5e0!3m2!1sar!2sma!4v1777782635951!5m2!1sar!2sma',

  defaultWholesaleMessage:
    'السلام عليكم، أريد سعر الجملة + تفاصيل التوفر لهذا المنتج:',
} as const

export function toWhatsAppLink(opts: { message: string }) {
  const phone = siteConfig.whatsappNumber.replace(/[^\d+]/g, '')
  const text = encodeURIComponent(opts.message)
  return `https://wa.me/${phone.replace('+', '')}?text=${text}`
}

