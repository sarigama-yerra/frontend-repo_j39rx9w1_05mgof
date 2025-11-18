import { Menu, ShieldCheck, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from 'react'
import CartDrawer from './CartDrawer'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-[#3DEC55]/20">
      <CartDrawer open={open} onClose={() => setOpen(false)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <ShieldCheck className="w-6 h-6 text-[#3DEC55] drop-shadow-[0_0_10px_rgba(61,236,85,0.8)]" />
                <span className="absolute -inset-1 rounded-full blur-md bg-[#3DEC55]/30 -z-10" />
              </div>
              <span className="text-[#3DEC55] font-semibold tracking-wide text-lg">
                APEX SCRIPTS
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-4">
              <Link to="/hardware" className="text-[#BFFFD0]/80 hover:text-[#BFFFD0] transition-colors">Hardware</Link>
              <Link to="/licenses" className="text-[#BFFFD0]/80 hover:text-[#BFFFD0] transition-colors">Licenses</Link>
              <Link to="/about" className="text-[#BFFFD0]/80 hover:text-[#BFFFD0] transition-colors">About</Link>
            </nav>
          </motion.div>

          <div className="flex items-center gap-3">
            <motion.div whileHover={{ y: -1 }} className="hidden sm:block">
              <a href="/#features" className="text-[#BFFFD0]/80 hover:text-[#BFFFD0] transition-colors">Features</a>
            </motion.div>
            <motion.div whileHover={{ y: -1 }} className="hidden sm:block">
              <a href="/#pricing" className="text-[#BFFFD0]/80 hover:text-[#BFFFD0] transition-colors">Pricing</a>
            </motion.div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#3DEC55] to-[#89ffae] text-black font-semibold shadow-[0_0_20px_rgba(61,236,85,0.45)] hover:shadow-[0_0_28px_rgba(61,236,85,0.6)] transition-shadow">
                <ShoppingCart className="w-4 h-4" />
                Cart
            </motion.button>
            <button className="inline-flex sm:hidden p-2 rounded-md bg:white/5 border border-white/10 hover:bg-white/10">
              <Menu className="w-5 h-5 text-[#89ffae]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
