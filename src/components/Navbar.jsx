import { Menu, ShieldCheck, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-lime-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <ShieldCheck className="w-6 h-6 text-lime-400 drop-shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
              <span className="absolute -inset-1 rounded-full blur-md bg-lime-500/30 -z-10" />
            </div>
            <span className="text-lime-400 font-semibold tracking-wide text-lg">
              APEX SCRIPTS
            </span>
          </motion.a>

          <div className="flex items-center gap-3">
            <motion.a
              href="#features"
              whileHover={{ y: -1 }}
              className="hidden sm:inline-block text-lime-300/80 hover:text-lime-300 transition-colors"
            >
              Features
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ y: -1 }}
              className="hidden sm:inline-block text-lime-300/80 hover:text-lime-300 transition-colors"
            >
              Pricing
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-lime-500 to-lime-400 text-black font-semibold shadow-[0_0_20px_rgba(132,204,22,0.45)] hover:shadow-[0_0_28px_rgba(132,204,22,0.6)] transition-shadow"
            >
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </motion.button>
            <button className="inline-flex sm:hidden p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10">
              <Menu className="w-5 h-5 text-lime-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
