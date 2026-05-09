import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '6+', label: 'Years of Expertise' },
  { value: '5.0★', label: 'Client Rating' },
];

export function StatsBar() {
  return (
    <section className="py-16 border-b border-black/[0.06]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-outfit font-semibold text-dark-card tracking-tighter mb-2">
                {s.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-text-muted">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
