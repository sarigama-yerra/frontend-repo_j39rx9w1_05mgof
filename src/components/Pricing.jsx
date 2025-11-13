import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Hardware Kit',
    price: '$79',
    period: 'one-time',
    featured: true,
    perks: ['Arduino Uno R3', 'Pre-flashed firmware', 'Shielded USB cable', '1-year warranty'],
    cta: { label: 'Buy Hardware', to: '/hardware' }
  },
  {
    name: 'Weekly License',
    price: '$12+',
    period: '/week',
    perks: ['Choose a title', 'HWID binding', 'Instant delivery'],
    cta: { label: 'Get Licenses', to: '/licenses' }
  },
  {
    name: 'Monthly License',
    price: '$39+',
    period: '/month',
    perks: ['Best value', 'Priority updates', '24/7 support'],
    cta: { label: 'Get Licenses', to: '/licenses' }
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(61,236,85,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-[#89ffae]"
        >
          Transparent Pricing
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className={`relative rounded-xl p-6 border ${t.featured ? 'border-[#3DEC55] bg-[#3DEC55]/10 shadow-[0_0_40px_rgba(61,236,85,0.25)]' : 'border-[#3DEC55]/20 bg-white/[0.02]'}`}
            >
              <div className="flex items-end gap-2">
                <h3 className="text-xl font-semibold text-[#e9ffef]">{t.name}</h3>
                {t.featured && (
                  <span className="text-xs px-2 py-0.5 rounded bg-[#3DEC55] text-black font-semibold">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-[#89ffae]">{t.price}</span>
                <span className="text-[#c7ffd7]/80">{t.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-[#c7ffd7]/90">
                {t.perks.map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3DEC55] shadow-[0_0_10px_rgba(61,236,85,0.8)]" />
                    {p}
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={t.cta.to}
                  className="mt-6 block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-[#3DEC55] to-[#89ffae] text-black font-semibold shadow-[0_0_20px_rgba(61,236,85,0.45)] hover:shadow-[0_0_28px_rgba(61,236,85,0.6)]"
                >
                  {t.cta.label}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
