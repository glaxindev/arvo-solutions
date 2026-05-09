import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Arvo completely transformed our digital presence. Within 3 months, our organic traffic was up 340% and lead cost dropped by half. They're not just developers — they're strategic partners.",
    name: "Sarah Mitchell",
    title: "CEO & Founder",
    company: "CloudPeak Technologies",
    initials: "SM",
  },
  {
    quote: "The difference was night and day. They understood our vision in the first call and delivered a platform that outperformed every metric we set. Best agency investment we've ever made.",
    name: "James Hartley",
    title: "Head of Growth",
    company: "Nexora Digital",
    initials: "JH",
  },
  {
    quote: "Our booking rate increased 280% in the first quarter. Their attention to UX detail is genuinely world-class. The site doesn't just look premium — it converts like crazy.",
    name: "Amara Osei",
    title: "Marketing Director",
    company: "StratoSync",
    initials: "AO",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#111113]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-tag !text-accent/80">Client Voices</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-[#f0ebe0] leading-[0.95]">
            Don't take our word. <br />
            <span className="font-artistic text-accent italic">Take theirs.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="p-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] flex flex-col justify-between group hover:border-accent/30 transition-all duration-500"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-[#f0ebe0]/80 text-base leading-relaxed mb-8 font-light">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <div className="w-11 h-11 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent font-semibold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#f0ebe0] font-semibold text-sm tracking-tight">{t.name}</p>
                  <p className="text-[#f0ebe0]/40 text-[11px] font-mono tracking-wider mt-0.5">{t.title}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
