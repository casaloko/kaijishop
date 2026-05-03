import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ''
const genAI = new GoogleGenerativeAI(apiKey)

const systemInstruction = `أنت مساعد ذكي لشركة Kaijishop، شركة مغربية متخصصة في الاستيراد والبيع بالجملة من الصين للتجار (B2B).
مهمتك هي الإجابة عن أسئلة التجار بخصوص الشحن، طلب العينات، والمنتجات المتاحة في الكتالوج.
أجب بلباقة وباحترافية وباللهجة المغربية الدارجة المفهومة أو العربية المبسطة.
لا تقدم أسعاراً محددة من عندك، بل اطلب من التاجر أن يتواصل عبر الواتساب للحصول على عرض سعر دقيق.
كن مختصراً ومباشراً.`

export function createChatSession() {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    systemInstruction,
  })

  return model.startChat({
    history: [],
  })
}
