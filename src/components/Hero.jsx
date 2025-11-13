import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-start justify-center min-h-[90vh]">
        <motion.span 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 text-lime-300/80 text-sm tracking-wider uppercase"
        >
          The New Standard in Secure Cheats
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.35, duration: 0.65 }}
          className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(163,230,53,0.35)]"
        >
          Apex Scripts
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 max-w-2xl text-lime-200/80 text-lg"
        >
          Undetectable, high-performance game enhancements with ironclad protection. Neon green aesthetics. Zero compromise.
        </motion.p>
        <div className="mt-8 flex items-center gap-4">
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-md bg-lime-400 text-black font-semibold shadow-[0_0_25px_rgba(132,204,22,0.6)] hover:shadow-[0_0_32px_rgba(132,204,22,0.75)] transition-shadow"
          >
            Get Access
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ x: 3 }}
            className="px-6 py-3 rounded-md border border-lime-500/40 text-lime-300 hover:bg-lime-500/10 transition-colors"
          >
            Explore Features
          </motion.a>
        </div>
      </div>
    </section>
  );
}
