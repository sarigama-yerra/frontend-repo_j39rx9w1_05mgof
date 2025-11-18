import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { cart, updateItem, removeItem } = useCart()
  const navigate = useNavigate()

  const items = cart?.items || []
  const subtotal = cart?.subtotal || 0

  const goCheckout = () => {
    onClose?.()
    navigate('/checkout')
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-black border-l border-[#3DEC55]/20 z-[70] flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-[#3DEC55]/20">
              <div className="flex items-center gap-2 text-[#3DEC55] font-semibold">
                <ShoppingCart className="w-5 h-5" /> Cart
              </div>
              <button onClick={onClose} className="p-2 rounded-md hover:bg-white/5">
                <X className="w-5 h-5 text-[#c7ffd7]" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 && (
                <div className="text-center text-[#c7ffd7]/70">Your cart is empty.</div>
              )}
              {items.map((it) => (
                <div key={`${it.sku}-${it.billing_cycle}`} className="rounded-lg border border-[#3DEC55]/20 p-3 bg-white/[0.02]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm text-[#BFFFD0]">{it.type === 'hardware' ? 'Hardware' : 'License'}</div>
                      <div className="font-semibold text-white">{it.name}</div>
                      <div className="text-xs text-[#c7ffd7]/70">{it.billing_cycle}</div>
                    </div>
                    <div className="text-[#89ffae] font-semibold">${(it.price * it.quantity).toFixed(2)}</div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <button onClick={() => updateItem({ sku: it.sku, billing_cycle: it.billing_cycle, quantity: Math.max(1, it.quantity - 1) })} className="p-1 rounded bg-white/5 hover:bg-white/10">
                        <Minus className="w-4 h-4 text-[#3DEC55]" />
                      </button>
                      <span className="min-w-[24px] text-center text-white">{it.quantity}</span>
                      <button onClick={() => updateItem({ sku: it.sku, billing_cycle: it.billing_cycle, quantity: it.quantity + 1 })} className="p-1 rounded bg-white/5 hover:bg-white/10">
                        <Plus className="w-4 h-4 text-[#3DEC55]" />
                      </button>
                    </div>
                    <button onClick={() => removeItem({ sku: it.sku, billing_cycle: it.billing_cycle })} className="inline-flex items-center gap-1 text-red-300/80 hover:text-red-300">
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-[#3DEC55]/20">
              <div className="flex items-center justify-between text-[#c7ffd7]">
                <span>Subtotal</span>
                <span className="text-[#89ffae] font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <button onClick={goCheckout} disabled={items.length === 0} className="mt-3 w-full py-2 rounded-md bg-[#3DEC55] disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold shadow-[0_0_22px_rgba(61,236,85,0.55)] hover:shadow-[0_0_30px_rgba(61,236,85,0.7)]">
                Continue to Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
