import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(61,236,85,0.12),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#3DEC55] to-[#89ffae] bg-clip-text text-transparent"
          >
            About Apex Scripts
          </motion.h1>
          <p className="mt-4 text-[#c7ffd7]/90">
            We build hardware-first enhancement solutions. Your journey starts with our Arduino-based injector. Then, pick licenses per title.
            Designed for stability, stealth, and smooth performance.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#3DEC55]/25 bg-white/[0.02] p-6">
              <h3 className="text-lg font-semibold text-[#e9ffef]">Hardware → Licenses</h3>
              <p className="mt-2 text-[#c7ffd7]/80">Buy the injector once. Add weekly or monthly licenses for the titles you play most: CS:GO, Overwatch, Rainbow Six, and VMP.</p>
            </div>
            <div className="rounded-xl border border-[#3DEC55]/25 bg-white/[0.02] p-6">
              <h3 className="text-lg font-semibold text-[#e9ffef]">Why #3DEC55 Green?</h3>
              <p className="mt-2 text-[#c7ffd7]/80">It’s our signature neon. Crisp, modern, and unmistakable—optimized across the site for brand consistency.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
