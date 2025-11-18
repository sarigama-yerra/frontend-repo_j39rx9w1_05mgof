import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [], subtotal: 0, currency: 'USD' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const refresh = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${BACKEND}/api/cart`)
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
      const data = await res.json()
      setCart(data)
    } catch (e) {
      setError('Failed to add item')
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
