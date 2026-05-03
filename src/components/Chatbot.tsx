import { useState, useRef, useEffect } from 'react'
import { createChatSession } from '../lib/gemini'

type Message = {
  id: string
  role: 'user' | 'model'
  text: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'مرحباً بيك في Kaijishop! كيفاش نقدر نعاونك اليوم؟' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatSessionRef = useRef<any>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chatSessionRef.current) {
      try {
         chatSessionRef.current = createChatSession()
      } catch (err) {
         console.error('Failed to initialize chat session', err)
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMsg = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'user', text: userMsg }])
    setIsLoading(true)

    try {
      if (!chatSessionRef.current) {
         throw new Error("Chat session not initialized")
      }
      const result = await chatSessionRef.current.sendMessage(userMsg)
      const text = result.response.text()
      setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'model', text }])
    } catch (error) {
      console.error(error)
      setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'model', text: 'عذراً، وقع شي مشكل فالإتصال بالذكاء الاصطناعي. عاود المحاولة من بعد.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        className="chatToggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="المساعد الذكي"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </button>

      {isOpen && (
        <div className="chatWindow card">
          <div className="chatHeader">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="botAvatar">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 14 }}>مساعد KAIJI الذكي</strong>
                <span style={{ fontSize: 11, color: '#e2e8f0', opacity: 0.9 }}>متصل الآن</span>
              </div>
            </div>
            <button className="closeChat" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chatBody">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatBubble ${msg.role === 'model' ? 'botBubble' : 'userBubble'}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="chatBubble botBubble" style={{ opacity: 0.7 }}>
                جاري التفكير...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatFooter" onSubmit={handleSend}>
            <input
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              dir="auto"
            />
            <button type="submit" disabled={!input.trim() || isLoading} className="btn btnPrimary sendBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
