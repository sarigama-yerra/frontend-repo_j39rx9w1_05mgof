import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cart } = useCart()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const BACKEND = (() => {
    const env = import.meta.env.VITE_BACKEND_URL
    if (env) return env
    try {
      const url = new URL(window.location.href)
      if (url.port === '3000') { url.port = '8000'; return url.origin }
      return url.origin
    } catch { return '' }
  })()

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${BACKEND}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
    
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.detail || 'Checkout failed')
      setStatus('Checkout initiated. We would normally redirect to Stripe here.')
    } catch (err) {
      setStatus(err.message || 'Checkout failed')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-[#3DEC55]">Checkout</h1>
        <p className="mt-2 text-[#c7ffd7]/80">Subtotal: <span className="text-[#89ffae] font-semibold">${(cart?.subtotal || 0).toFixed(2)}</span></p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-[#c7ffd7]/80 mb-1">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" required
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-[#3DEC55]/20 text-white placeholder:text-[#c7ffd7]/50 focus:outline-none focus:ring-2 focus:ring-[#3DEC55]" placeholder="you@example.com" />
          </div>
          <button type="submit" className="w-full py-2 rounded-md bg-[#3DEC55] text-black font-semibold shadow-[0_0_22px_rgba(61,236,85,0.55)] hover:shadow-[0_0_30px_rgba(61,236,85,0.7)]">Pay with Stripe</button>
        </form>
        {status && <div className="mt-4 text-[#BFFFD0]">{status}</div>}
      </div>
    </div>
  )
}
