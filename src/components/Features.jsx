import { ShieldCheck, Zap, Eye, Cpu, Sparkles, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: ShieldCheck, title: 'Security First', desc: 'Kernel-level protection with constant signature rotation.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized injection ensures minimal performance overhead.' },
  { icon: Eye, title: 'Undetected', desc: 'Advanced anti-flag technology keeps you safe while you play.' },
  { icon: Cpu, title: 'Multi-Engine', desc: 'Supports a wide range of engines and titles with modular loaders.' },
  { icon: Lock, title: 'HWID Binding', desc: 'Secure licensing tied to your device with one-click reset.' },
  { icon: Sparkles, title: 'Neon UI', desc: 'Clean, glare-inspired interface with smooth animations.' },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,204,22,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-lime-300"
        >
          Built To Dominate
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.55 }}
              className="group relative rounded-xl border border-lime-500/20 bg-gradient-to-br from-white/[0.02] to-white/[0.005] p-6 hover:border-lime-400/40"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <f.icon className="w-6 h-6 text-lime-400" />
                  <span className="absolute -inset-1 rounded-full blur-md bg-lime-500/20" />
                </div>
                <h3 className="text-lg font-semibold text-lime-200">{f.title}</h3>
              </div>
              <p className="mt-3 text-lime-200/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
