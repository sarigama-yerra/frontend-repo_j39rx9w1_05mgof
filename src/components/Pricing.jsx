import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$14',
    period: '/week',
    perks: ['1 title access', 'Basic support', 'HWID lock']
  },
  {
    name: 'Pro',
    price: '$39',
    period: '/month',
    featured: true,
    perks: ['All titles', 'Priority updates', 'Advanced cloaking', '24/7 support']
  },
  {
    name: 'Elite',
    price: '$299',
    period: '/year',
    perks: ['All Pro perks', 'Early access builds', 'Private Discord']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(132,204,22,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-lime-300"
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
              className={`relative rounded-xl p-6 border ${t.featured ? 'border-lime-400 bg-lime-400/10 shadow-[0_0_40px_rgba(132,204,22,0.25)]' : 'border-lime-500/20 bg-white/[0.02]'}`}
            >
              <div className="flex items-end gap-2">
                <h3 className="text-xl font-semibold text-lime-200">{t.name}</h3>
                {t.featured && (
                  <span className="text-xs px-2 py-0.5 rounded bg-lime-400 text-black font-semibold">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-lime-300">{t.price}</span>
                <span className="text-lime-300/70">{t.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-lime-200/80">
                {t.perks.map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
                    {p}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full px-4 py-2 rounded-md bg-gradient-to-r from-lime-500 to-lime-400 text-black font-semibold shadow-[0_0_20px_rgba(132,204,22,0.45)] hover:shadow-[0_0_28px_rgba(132,204,22,0.6)]"
              >
                Choose {t.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
