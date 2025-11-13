import { ShieldCheck, Zap, Eye, Cpu, Sparkles, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: ShieldCheck, title: 'Hardware Injector', desc: 'Arduino Uno-based module for safe, stable low-level interaction.' },
  { icon: Lock, title: 'Device Binding', desc: 'Secure HWID binding and tamper-resistant handshakes.' },
  { icon: Eye, title: 'Stealthy Operation', desc: 'Advanced anti-flag approach, no risky kernel drivers.' },
  { icon: Cpu, title: 'Optimized Routines', desc: 'Low jitter, low latency USB communication.' },
  { icon: Zap, title: 'Fast Setup', desc: 'Pre-flashed firmware + quick-start guide.' },
  { icon: Sparkles, title: '#3DEC55 Aesthetic', desc: 'Signature neon green glow across the experience.' },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(61,236,85,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-[#89ffae]"
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
              className="group relative rounded-xl border border-[#3DEC55]/20 bg-gradient-to-br from-white/[0.02] to-white/[0.005] p-6 hover:border-[#3DEC55]/40"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <f.icon className="w-6 h-6 text-[#3DEC55]" />
                  <span className="absolute -inset-1 rounded-full blur-md bg-[#3DEC55]/20" />
                </div>
                <h3 className="text-lg font-semibold text-[#e9ffef]">{f.title}</h3>
              </div>
              <p className="mt-3 text-[#c7ffd7]/85">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
