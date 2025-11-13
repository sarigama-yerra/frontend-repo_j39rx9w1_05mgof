import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Package, Cable, CreditCard } from 'lucide-react';
import Navbar from './components/Navbar';

export default function Hardware() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(61,236,85,0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#3DEC55] to-[#89ffae] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(61,236,85,0.35)]"
          >
            Apex Hardware Injector
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 max-w-2xl text-[#c7ffd7]/90"
          >
            Start with our hardware module based on Arduino Uno. It delivers low-level interaction for safe, stable injections—no drivers to flag, no software conflicts.
          </motion.p>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="lg:col-span-2 rounded-2xl border border-[#3DEC55]/25 bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Package className="w-6 h-6 text-[#3DEC55]" />
                  <span className="absolute -inset-1 rounded-full blur-md bg-[#3DEC55]/25" />
                </div>
                <h3 className="text-xl font-semibold text-[#e9ffef]">Arduino Uno Kit</h3>
              </div>
              <p className="mt-3 text-[#c7ffd7]/90">
                Includes Arduino Uno R3, shielded USB cable, pre-flashed firmware, and quick-start guide. Plug in, pair in app, and you’re ready.
              </p>
              <ul className="mt-4 space-y-2 text-[#e9ffef]">
                <li className="flex items-center gap-2"><Cpu className="w-4 h-4 text-[#3DEC55]" /> 32-bit optimized routine for stable input emulation</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#3DEC55]" /> Tamper-resistant handshake and device binding</li>
                <li className="flex items-center gap-2"><Cable className="w-4 h-4 text-[#3DEC55]" /> Low-latency, jitter-free USB communication</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55 }}
              className="rounded-2xl border border-[#3DEC55]/25 bg-gradient-to-b from-white/[0.02] to-white/[0.005] p-6"
            >
              <div className="text-3xl font-extrabold text-[#89ffae]">$79</div>
              <div className="text-[#c7ffd7]/80">Apex Injector Kit</div>
              <ul className="mt-4 space-y-2 text-[#e9ffef]">
                <li>• Hardware module</li>
                <li>• Pre-flashed firmware</li>
                <li>• 1-year warranty</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#3DEC55] text-black font-semibold shadow-[0_0_22px_rgba(61,236,85,0.55)] hover:shadow-[0_0_30px_rgba(61,236,85,0.7)]"
              >
                <CreditCard className="w-4 h-4" />
                Buy Hardware
              </motion.button>
              <p className="mt-3 text-xs text-[#c7ffd7]/70">Licenses sold separately per game.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
