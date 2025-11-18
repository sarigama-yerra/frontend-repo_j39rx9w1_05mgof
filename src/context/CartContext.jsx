import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

function deriveBackendBase() {
  const env = import.meta.env.VITE_BACKEND_URL
  if (env && typeof env === 'string' && env.trim().length) return env
  // Fallback heuristic: swap 3000 -> 8000 on same host
  try {
    const url = new URL(window.location.href)
    if (url.port === '3000') {
      url.port = '8000'
      return url.origin
    }
    // If no explicit port, attempt same origin (useful in some deployments)
    return url.origin
  } catch {
    return ''
  }
}

const BACKEND = deriveBackendBase()

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [], subtotal: 0, currency: 'USD' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const refresh = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${BACKEND}/api/cart`)
      if (!res.ok) throw new Error(`GET /api/cart ${res.status}`)
      const data = await res.json()
      setCart(data)
    } catch (e) {
      setError('Failed to load cart')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addItem = async (item) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${BACKEND}/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
      if (!res.ok) {
        const msg = await res.text().catch(() => '')
        throw new Error(msg || 'Failed to add')
      }
      const data = await res.json()
      setCart(data)
      return { ok: true }
    } catch (e) {
      setError('Failed to add item')
      return { ok: false, error: e?.message || 'Failed to add item' }
    } finally {
      setLoading(false)
    }
  }

  const updateItem = async ({ sku, billing_cycle = 'one-time', quantity }) => {
    setLoading(true)
    try {
      const res = await fetch(`${BACKEND}/api/cart`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sku, billing_cycle, quantity })
      })
      if (!res.ok) throw new Error('Failed to update')
      const data = await res.json()
      setCart(data)
    } catch (e) {
      setError('Failed to update item')
    } finally {
      setLoading(false)
    }
  }

  const removeItem = async ({ sku, billing_cycle = 'one-time' }) => {
    setLoading(true)
    try {
      const res = await fetch(`${BACKEND}/api/cart`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sku, billing_cycle })
      })
      if (!res.ok) throw new Error('Failed to remove')
      const data = await res.json()
      setCart(data)
    } catch (e) {
      setError('Failed to remove item')
    } finally {
      setLoading(false)
    }
  }

  const value = useMemo(() => ({ cart, loading, error, refresh, addItem, updateItem, removeItem }), [cart, loading, error])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
