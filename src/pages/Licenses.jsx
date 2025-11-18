import { useState } from 'react'
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext'
import NeonBurst from '../components/NeonBurst'

// Simple inline SVG icon badges for each game (lightweight, brand-agnostic)
const IconBadge = ({ children, tint = '#3DEC55' }) => (
  <div className="h-14 w-14 rounded-xl grid place-items-center shadow-[0_0_30px_rgba(61,236,85,0.35)]"
       style={{ background: 'linear-gradient(135deg, rgba(61,236,85,0.15), rgba(61,236,85,0.05))', border: `1px solid ${tint}33` }}>
    <span className="font-black text-lg" style={{ color: tint }}>{children}</span>
  </div>
);

const gameIcons = {
  csgo: <IconBadge>CS</IconBadge>,
  overwatch: <IconBadge tint="#89ffae">OW</IconBadge>,
  r6: <IconBadge tint="#BFFFD0">R6</IconBadge>,
  vmp: <IconBadge tint="#c7ffd7">VMP</IconBadge>,
};

const games = [
  { key: 'csgo', name: 'CS:GO', desc: 'Aimbot, ESP, Trigger, Radar, Skin Changer', price: 12 },
  { key: 'overwatch', name: 'Overwatch', desc: 'Silent Aim, ESP, FOV Adjust, Legit Presets', price: 16 },
  { key: 'r6', name: 'Rainbow Six', desc: 'ESP, No-Recoil, Rapid Peek, Optimized Visuals', price: 18 },
  { key: 'vmp', name: 'VMP (GTA RP)', desc: 'ESP, Vehicle Mods, RP Helpers, Anti-Detect', price: 15 },
];

const slideVariants = {
  hiddenLeft: { opacity: 0, x: -40 },
  hiddenRight: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

export default function Licenses() {
  const { addItem } = useCart()
  const [burstKey, setBurstKey] = useState(0)

  const addLicense = async (g) => {
    const res = await addItem({
      sku: `license-${g.key}-weekly`,
      name: `${g.name} Weekly License`,
      price: g.price,
      quantity: 1,
      type: 'license',
      game_key: g.key,
      billing_cycle: 'weekly'
    })
    if (res?.ok) {
      setBurstKey(k => k + 1)
      try {
        const audio = new Audio(
          'data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQAAACQAAAC0AAAC/////wAAAC4AAAACAAACcQAAABkAAAByAAAA/////wAAABIAAAACAAACcQAAABAAAABPAAAAP//AACQAAABmAAAAGZhdGEAAAAA'
        )
        audio.volume = 0.25
        audio.play().catch(() => {})
      } catch {}
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative py-20">
        <NeonBurst key={burstKey} run={burstKey} />
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

          {/* Icon strip with slide-in animations */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {games.map((g, i) => (
              <motion.div
                key={`icon-${g.key}`}
                variants={slideVariants}
                initial={i % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#3DEC55]/20 bg-white/[0.02]"
              >
                {gameIcons[g.key]}
                <div>
                  <div className="text-sm uppercase tracking-widest text-[#3DEC55]/80">{g.name}</div>
                  <div className="text-xs text-[#c7ffd7]/70">Slide-in icon</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((g, i) => (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="rounded-xl border border-[#3DEC55]/25 bg-white/[0.02] p-6 relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  {gameIcons[g.key]}
                  <h3 className="text-xl font-semibold text-[#e9ffef]">{g.name}</h3>
                </div>
                <p className="mt-2 text-[#c7ffd7]/80">{g.desc}</p>
                <div className="mt-4 text-2xl font-extrabold text-[#7BFFA0]">${g.price}/week</div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addLicense(g)}
                  className="mt-4 w-full px-4 py-2 rounded-md bg-[#3DEC55] text-black font-semibold shadow-[0_0_20px_rgba(61,236,85,0.5)] hover:shadow-[0_0_28px_rgba(61,236,85,0.65)] relative z-10"
                >
                  Add {g.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
