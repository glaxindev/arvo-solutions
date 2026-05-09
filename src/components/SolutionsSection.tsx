import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Web Development',
    tag: '01',
    description: 'Custom-engineered platforms built for speed, conversion, and scale. React, Next.js, and bespoke architectures that outperform templates by 300%.',
    href: '/services/web-development',
    metric: '0.4s load time',
  },
  {
    title: 'SEO & Growth',
    tag: '02',
    description: 'Data-first organic strategies that compound over time. We build search authority that translates directly into qualified pipeline.',
    href: '/services/seo-analytics',
    metric: '+340% avg. traffic',
  },
  {
    title: 'Lead Generation',
    tag: '03',
    description: 'Automated funnels, precision landing pages, and behavioral tracking. Cut your cost-per-lead while increasing lead quality.',
    href: '/briefing',
    metric: '−45% cost per lead',
  },
  {
    title: 'Brand & Motion',
    tag: '04',
    description: 'Visual identity systems and cinematic motion design that commands attention and communicates premium authority at every touchpoint.',
    href: '/services/graphic-design',
    metric: 'Awwwards standard',
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 md:py-32 border-t border-black/[0.06]">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-tag">What We Do</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-dark-card leading-[0.95]">
              Services built for <br />
              <span className="font-artistic text-accent italic">growth.</span>
            </h2>
          </motion.div>
          <Link to="/solutions" className="flex items-center gap-2 text-text-muted hover:text-dark-card transition-colors text-xs font-mono tracking-[0.2em] uppercase">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Link to={s.href}>
                <div className="p-8 rounded-2xl border border-black/[0.07] bg-white/60 hover:bg-white hover:border-black/10 hover:shadow-md transition-all duration-400 group min-h-[200px] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <span className="font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase">{s.tag}</span>
                      <span className="text-[10px] font-mono text-accent tracking-wider bg-accent/8 px-3 py-1 rounded-full border border-accent/20">{s.metric}</span>
                    </div>
                    <h3 className="text-2xl font-outfit font-semibold text-dark-card tracking-tight mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-light">{s.description}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-text-muted group-hover:text-accent transition-colors">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
