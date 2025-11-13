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
          className="inline-flex items-center gap-2 text-[#BFFFD0]/80 text-sm tracking-wider uppercase"
        >
          Hardware-first Cheat Platform
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.35, duration: 0.65 }}
          className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#3DEC55] to-[#89ffae] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(61,236,85,0.35)]"
        >
          Apex Scripts
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 max-w-2xl text-[#c7ffd7]/90 text-lg"
        >
          Start with our Arduino Uno injector, then add licenses for the titles you play: CS:GO, Overwatch, Rainbow Six, and VMP.
        </motion.p>
        <div className="mt-8 flex items-center gap-4">
          <motion.a
            href="/hardware"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-md bg-[#3DEC55] text-black font-semibold shadow-[0_0_25px_rgba(61,236,85,0.6)] hover:shadow-[0_0_32px_rgba(61,236,85,0.75)] transition-shadow"
          >
            Buy Hardware
          </motion.a>
          <motion.a
            href="/licenses"
            whileHover={{ x: 3 }}
            className="px-6 py-3 rounded-md border border-[#3DEC55]/40 text-[#BFFFD0] hover:bg-[#3DEC55]/10 transition-colors"
          >
            Get Licenses
          </motion.a>
        </div>
      </div>
    </section>
  );
}
