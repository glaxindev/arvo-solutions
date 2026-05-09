import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

// ── Visual Artifact: Core Web Vitals Dashboard ──
function CoreWebVitalsArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const vitals = [
    { label: 'LCP', name: 'Largest Contentful Paint', val: '0.8s', target: '< 2.5s', pct: 90, color: '#22c55e' },
    { label: 'FID', name: 'First Input Delay', val: '12ms', target: '< 100ms', pct: 95, color: '#22c55e' },
    { label: 'CLS', name: 'Cumulative Layout Shift', val: '0.02', target: '< 0.1', pct: 98, color: '#22c55e' },
    { label: 'TTFB', name: 'Time to First Byte', val: '0.4s', target: '< 0.8s', pct: 85, color: '#00A3C4' },
  ];

  return (
    <div ref={ref} className="dark-card p-8 rounded-3xl">
      {/* Browser top bar */}
      <div className="flex items-center gap-2 mb-6 pb-5 border-b border-white/[0.07]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
        <div className="flex-1 mx-3 bg-white/[0.05] rounded-full py-1.5 px-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-400/60 flex-shrink-0" />
          <span className="text-card-muted text-[11px] font-mono">arvosolutions.pro — Core Web Vitals</span>
        </div>
        <span className="text-green-400 text-[10px] font-mono bg-green-400/10 px-2.5 py-1 rounded-full">✓ Passed</span>
      </div>

      <h4 className="text-card-text font-outfit font-semibold text-lg mb-6 tracking-tight">Performance Report</h4>

      <div className="space-y-5">
        {vitals.map((v, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">{v.label}</span>
                <span className="text-card-muted text-xs">{v.name}</span>
              </div>
              <div className="text-right">
                <span className="font-outfit font-bold text-sm" style={{ color: v.color }}>{v.val}</span>
                <span className="text-card-muted text-[10px] font-mono ml-2">{v.target}</span>
              </div>
            </div>
            <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: v.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${v.pct}%` } : { width: 0 }}
                transition={{ delay: i * 0.12 + 0.3, duration: 0.8, ease: easeOut }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-white/[0.07] flex justify-between items-center">
        <span className="text-card-muted text-[11px] font-mono">Google PageSpeed Score</span>
        <motion.span
          className="text-3xl font-outfit font-bold text-green-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          98
        </motion.span>
      </div>
    </div>
  );
}

// ── Visual Artifact: Tech Stack Showcase ──
function TechStackArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const tech = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Node.js', color: '#68A063' },
    { name: 'Tailwind', color: '#38BDF8' },
    { name: 'PostgreSQL', color: '#336791' },
  ];

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 border border-black/[0.07]">
      <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-6">Our Stack</p>
      <h4 className="text-dark-card font-outfit font-semibold text-xl mb-8 tracking-tight">
        Built with best-in-class tools,<br />
        <span className="text-accent font-artistic italic">not shortcuts.</span>
      </h4>
      <div className="flex flex-wrap gap-3">
        {tech.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-black/[0.08] bg-cream"
          >
            <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />
            <span className="text-dark-card font-outfit font-semibold text-sm">{t.name}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-text-muted text-xs font-mono">Industry-standard. Open-source. Battle-tested.</span>
      </div>
    </div>
  );
}

export function WebDevelopment() {
  return (
    <div className="bg-cream min-h-screen text-dark-card pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="max-w-4xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="section-tag">Service / Web Engineering</p>
          <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.9]">
            Websites that<br />
            <span className="font-artistic text-accent italic">convert & perform.</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-light">
            We engineer bespoke, conversion-optimized platforms — not templates.
            Every site we build scores 95+ on Google PageSpeed and is architected
            to grow with your business.
          </p>
        </motion.div>

        {/* ── VISUAL ARTIFACT SECTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <CoreWebVitalsArtifact />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <TechStackArtifact />
          </motion.div>
        </div>

        {/* What's included */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-12 leading-[0.95]">
            Everything you need to<br />
            <span className="font-artistic text-accent italic">dominate online.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Custom UI/UX Design', desc: 'Pixel-perfect interfaces tailored to your brand and audience.', metric: 'Awwwards standard' },
              { title: 'Performance Engineering', desc: 'Sub-second load times and 95+ PageSpeed scores guaranteed.', metric: '0.4s avg. load time' },
              { title: 'Mobile-First Build', desc: 'Perfectly rendered on every device — from mobile to 4K screens.', metric: '100% responsive' },
              { title: 'SEO Architecture', desc: 'Built-in technical SEO from day one — proper markup, schema, sitemap.', metric: 'Google-first' },
              { title: 'CMS Integration', desc: 'Easy-to-manage content with Sanity, Contentful, or custom CMS.', metric: 'No code editing' },
              { title: 'Ongoing Support', desc: '30-day post-launch support included on every engagement.', metric: '< 4hr response' },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="p-7 bg-white rounded-2xl border border-black/[0.07]"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-accent text-[10px] font-mono tracking-widest bg-accent/8 px-2.5 py-1 rounded-full border border-accent/20">{f.metric}</span>
                  <span className="text-text-muted text-[10px] font-mono">0{i + 1}</span>
                </div>
                <h3 className="font-outfit font-semibold text-dark-card text-lg mb-2 tracking-tight">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="dark-card p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-card-text mb-6 relative z-10">
            Ready to build your<br />
            <span className="font-artistic text-accent italic">next website?</span>
          </h2>
          <p className="text-card-muted mb-10 max-w-lg mx-auto font-light relative z-10">Free 30-minute strategy call. We'll audit your current site and show you exactly what needs to change.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/briefing" className="btn-accent px-8 py-4 inline-flex items-center gap-2">
              Book Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/showcase" className="btn-ghost !border-white/20 !text-card-text px-8 py-4">
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
