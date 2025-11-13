import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const games = [
  { key: 'csgo', name: 'CS:GO', desc: 'Aimbot, ESP, Trigger, Radar, Skin Changer', price: 12 },
  { key: 'overwatch', name: 'Overwatch', desc: 'Silent Aim, ESP, FOV Adjust, Legit Presets', price: 16 },
  { key: 'r6', name: 'Rainbow Six', desc: 'ESP, No-Recoil, Rapid Peek, Optimized Visuals', price: 18 },
  { key: 'vmp', name: 'VMP (GTA RP)', desc: 'ESP, Vehicle Mods, RP Helpers, Anti-Detect', price: 15 },
];

export default function Licenses() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(61,236,85,0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#3DEC55] to-[#89ffae] bg-clip-text text-transparent"
          >
            Game Licenses
          </motion.h1>
          <p className="mt-4 text-[#c7ffd7]/90">Choose a title to license. Hardware required for activation.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((g, i) => (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="rounded-xl border border-[#3DEC55]/25 bg-white/[0.02] p-6"
              >
                <h3 className="text-xl font-semibold text-[#e9ffef]">{g.name}</h3>
                <p className="mt-2 text-[#c7ffd7]/80">{g.desc}</p>
                <div className="mt-4 text-2xl font-extrabold text-[#7BFFA0]">${g.price}/week</div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full px-4 py-2 rounded-md bg-[#3DEC55] text-black font-semibold shadow-[0_0_20px_rgba(61,236,85,0.5)] hover:shadow-[0_0_28px_rgba(61,236,85,0.65)]"
                >
                  License {g.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
