import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

// ── Visual Artifact: Mobile App Mockup ──
function AppMockupArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="dark-card p-8 rounded-3xl flex items-center justify-center min-h-[380px] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-accent/5 pointer-events-none rounded-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8, ease: easeOut }}
        className="relative z-10"
      >
        {/* Phone frame */}
        <div className="w-52 bg-[#1a1a1c] rounded-[2.5rem] border-4 border-white/10 overflow-hidden shadow-2xl mx-auto">
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 pt-4 pb-2">
            <span className="text-card-text text-[10px] font-mono">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-1.5 rounded bg-card-text/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-card-text/40" />
            </div>
          </div>

          {/* Notch */}
          <div className="mx-auto w-24 h-5 bg-[#1a1a1c] rounded-b-2xl border-b-2 border-x-2 border-white/10 mb-2" />

          {/* App content */}
          <div className="px-4 pb-8">
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="text-card-muted text-[9px] font-mono">Good morning</p>
                <p className="text-card-text text-base font-outfit font-semibold">Sarah 👋</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-accent/30 border border-accent/40" />
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { label: 'Revenue', val: '$12.4K', color: 'text-green-400' },
                { label: 'Orders', val: '148', color: 'text-accent' },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.6 }}
                  className="bg-white/[0.05] rounded-xl p-3 border border-white/[0.06]"
                >
                  <p className="text-card-muted text-[9px] font-mono mb-1">{c.label}</p>
                  <p className={`font-outfit font-bold text-lg ${c.color}`}>{c.val}</p>
                </motion.div>
              ))}
            </div>

            {/* Mini bar chart */}
            <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.05]">
              <p className="text-card-muted text-[9px] font-mono mb-3">7-day Overview</p>
              <div className="flex items-end gap-1 h-10">
                {[30, 55, 40, 70, 85, 65, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-sm bg-accent/60"
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${h}%` } : {}}
                    transition={{ delay: i * 0.07 + 0.8 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-3">
            <div className="w-24 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Platform badges */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {['iOS', 'Android', 'Web'].map((p, i) => (
          <motion.span
            key={p}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 + 1 }}
            className="text-[10px] font-mono text-card-muted bg-white/5 border border-white/10 px-3 py-1 rounded-full"
          >
            {p}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

// ── Visual Artifact: App Development Timeline ──
function AppDevTimelineArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const phases = [
    { week: 'Wk 1–2', name: 'Discovery & UX', done: true },
    { week: 'Wk 3–5', name: 'UI Design', done: true },
    { week: 'Wk 6–10', name: 'Frontend Build', done: true },
    { week: 'Wk 11–14', name: 'Backend & APIs', done: true },
    { week: 'Wk 15–16', name: 'QA & Testing', done: false },
    { week: 'Wk 17', name: 'Launch 🚀', done: false },
  ];

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 border border-black/[0.07]">
      <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-2">Project Timeline</p>
      <h4 className="text-dark-card font-outfit font-semibold text-xl mb-8 tracking-tight">
        Launch-ready in<br />
        <span className="font-artistic text-accent italic">17 weeks.</span>
      </h4>

      <div className="relative pl-4">
        {/* Vertical line */}
        <motion.div
          className="absolute left-0 top-3 w-0.5 bg-black/10 rounded-full"
          initial={{ height: 0 }}
          animate={inView ? { height: '90%' } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        <div className="space-y-5">
          {phases.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="flex items-center gap-4 relative"
            >
              {/* Dot */}
              <div className={`absolute -left-4 w-3 h-3 rounded-full border-2 flex-shrink-0 ${p.done ? 'bg-accent border-accent' : 'bg-white border-black/20'}`} />
              <div className="flex-1 flex justify-between items-center py-2 px-3 rounded-xl bg-cream border border-black/[0.06]">
                <span className="text-dark-card font-outfit font-semibold text-sm">{p.name}</span>
                <span className="text-text-muted text-[10px] font-mono">{p.week}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-black/[0.06] flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-text-muted text-xs font-mono">Fixed timeline · No scope creep</span>
      </div>
    </div>
  );
}

export function AppDevelopment() {
  return (
    <div className="bg-cream min-h-screen text-dark-card pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div className="max-w-4xl mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeOut }}>
          <p className="section-tag">Service / App Development</p>
          <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.9]">
            Apps that<br />
            <span className="font-artistic text-accent italic">users love.</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-light">
            We build cross-platform mobile and web apps with React Native and Next.js —
            from MVP to enterprise scale. Delivered on time, within budget, and ready
            to grow with your users.
          </p>
        </motion.div>

        {/* ── VISUAL ARTIFACTS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <AppMockupArtifact />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <AppDevTimelineArtifact />
          </motion.div>
        </div>

        {/* Services */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-12 leading-[0.95]">
            Full-stack capability,<br />
            <span className="font-artistic text-accent italic">one team.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'iOS & Android Apps', desc: 'Cross-platform apps built with React Native — one codebase, two stores.', metric: 'Ship faster' },
              { title: 'Web Applications', desc: 'Complex SaaS platforms and dashboards with Next.js and Node.js backends.', metric: 'Enterprise-grade' },
              { title: 'MVP Development', desc: 'Go from idea to testable product in 8 weeks. Validate before you scale.', metric: '8-week MVP' },
              { title: 'API Development', desc: 'RESTful and GraphQL APIs with authentication, rate limiting, and documentation.', metric: 'Production-ready' },
              { title: 'App Store Launch', desc: 'Full App Store and Google Play submission, screenshots, and ASO included.', metric: 'Launch included' },
              { title: 'Maintenance & Scale', desc: 'Ongoing support, feature additions, and infrastructure scaling as you grow.', metric: 'Long-term partner' },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }} className="p-7 bg-white rounded-2xl border border-black/[0.07]">
                <span className="text-accent text-[10px] font-mono tracking-widest bg-accent/8 px-2.5 py-1 rounded-full border border-accent/20 mb-4 inline-block">{f.metric}</span>
                <h3 className="font-outfit font-semibold text-dark-card text-lg mb-2 tracking-tight">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="dark-card p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-card-text mb-6 relative z-10">Have an app<br /><span className="font-artistic text-accent italic">in mind?</span></h2>
          <p className="text-card-muted mb-10 max-w-md mx-auto font-light relative z-10">Let's scope your project and map out the fastest path to market.</p>
          <Link to="/briefing" className="btn-accent px-8 py-4 inline-flex items-center gap-2">Start Your App Project <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  );
}
