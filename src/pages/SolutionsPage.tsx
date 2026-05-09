import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const easeOut = [0.16, 1, 0.3, 1] as const;

// ─────────────────────────────────────────────
// ANIMATED ARTIFACT 1: Service Ecosystem Network
// Pulsing nodes connected by animated dashed lines
// ─────────────────────────────────────────────
function EcosystemNetwork() {
  const nodes = [
    { label: 'Web Dev',     x: 50,  y: 10,  color: '#00A3C4' },
    { label: 'SEO',         x: 88,  y: 35,  color: '#22c55e' },
    { label: 'Apps',        x: 80,  y: 75,  color: '#a78bfa' },
    { label: 'Automation',  x: 40,  y: 88,  color: '#f59e0b' },
    { label: 'Video',       x: 10,  y: 68,  color: '#f472b6' },
    { label: 'Design',      x: 15,  y: 28,  color: '#34d399' },
  ];

  // lines: each node → center
  const cx = 50, cy = 50;

  return (
    <div className="dark-card p-8 rounded-3xl relative overflow-hidden min-h-[320px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/10 blur-[60px] rounded-full" />
      </div>

      <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-2 relative z-10">Service Ecosystem</p>
      <h4 className="text-card-text font-outfit font-semibold text-xl mb-6 relative z-10">
        Everything <span className="text-accent">connected.</span>
      </h4>

      {/* SVG network */}
      <div className="relative z-10 w-full" style={{ paddingBottom: '90%' }}>
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          style={{ overflow: 'visible' }}
        >
          {/* Animated connection lines */}
          {nodes.map((n, i) => (
            <line
              key={i}
              x1={cx} y1={cy}
              x2={n.x} y2={n.y}
              stroke={n.color}
              strokeWidth="0.4"
              strokeOpacity="0.35"
              strokeDasharray="2 2"
              style={{
                animation: `dashMove ${1.8 + i * 0.25}s linear infinite`,
              }}
            />
          ))}

          {/* Central hub — pulsing rings */}
          <circle cx={cx} cy={cy} r="6" fill="#00A3C4" fillOpacity="0.15"
            style={{ animation: 'ringPulse 2s ease-out infinite' }} />
          <circle cx={cx} cy={cy} r="3.5" fill="#00A3C4" fillOpacity="0.3"
            style={{ animation: 'ringPulse 2s ease-out infinite 0.5s' }} />
          <circle cx={cx} cy={cy} r="2" fill="#00A3C4" />
          <text x={cx} y={cy + 0.7} textAnchor="middle" fontSize="1.4" fill="#f0ebe0" fontWeight="bold" fontFamily="Outfit,sans-serif">A</text>

          {/* Outer service nodes */}
          {nodes.map((n, i) => (
            <g key={i}>
              {/* Outer pulse ring */}
              <circle cx={n.x} cy={n.y} r="4.5" fill={n.color} fillOpacity="0.12"
                style={{ animation: `ringPulse 2.4s ease-out infinite ${i * 0.35}s` }} />
              {/* Node circle */}
              <circle cx={n.x} cy={n.y} r="2.8" fill={n.color} fillOpacity="0.85" />
              {/* Label */}
              <text
                x={n.x}
                y={n.y > 50 ? n.y + 6 : n.y - 4.5}
                textAnchor="middle"
                fontSize="3.5"
                fill="#f0ebe0"
                fontFamily="Outfit,sans-serif"
                fontWeight="600"
                opacity="0.8"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <style>{`
        @keyframes dashMove {
          to { stroke-dashoffset: -12; }
        }
        @keyframes ringPulse {
          0%   { r: 0; opacity: 0.7; }
          70%  { r: 7; opacity: 0; }
          100% { r: 7; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────
// ANIMATED ARTIFACT 2: Live Metrics Ticker
// Numbers that perpetually animate and cycle
// ─────────────────────────────────────────────
function LiveMetricsTicker() {
  const metrics = [
    { label: 'Avg. Traffic Growth', suffix: '%', maxVal: 340, color: '#00A3C4' },
    { label: 'Client Retention', suffix: '%', maxVal: 98, color: '#22c55e' },
    { label: 'Hrs Saved / Week', suffix: '+', maxVal: 30, color: '#f59e0b' },
    { label: 'PageSpeed Score', suffix: '', maxVal: 98, color: '#a78bfa' },
  ];

  const [vals, setVals] = useState(metrics.map(() => 0));
  const direction = useRef(metrics.map(() => 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setVals(prev => prev.map((v, i) => {
        const step = Math.ceil(metrics[i].maxVal / 60);
        const next = v + direction.current[i] * step;
        if (next >= metrics[i].maxVal) { direction.current[i] = -1; return metrics[i].maxVal; }
        if (next <= 0) { direction.current[i] = 1; return 0; }
        return next;
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-8 border border-black/[0.07]">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase">Live Performance Data</p>
      </div>
      <h4 className="text-dark-card font-outfit font-semibold text-xl mb-8 tracking-tight">
        Metrics that move<br />
        <span className="text-accent font-artistic italic">every second.</span>
      </h4>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-cream rounded-2xl p-4 border border-black/[0.06]">
            <p className="text-text-muted text-[10px] font-mono mb-2 leading-tight">{m.label}</p>
            <div className="flex items-end gap-0.5">
              {m.suffix === '%' || m.suffix === '' ? (
                <span
                  className="font-outfit font-bold text-3xl tabular-nums leading-none"
                  style={{ color: m.color }}
                >
                  {vals[i]}
                </span>
              ) : (
                <span
                  className="font-outfit font-bold text-3xl tabular-nums leading-none"
                  style={{ color: m.color }}
                >
                  {vals[i]}
                </span>
              )}
              <span className="font-outfit font-bold text-lg mb-0.5 ml-0.5" style={{ color: m.color }}>
                {m.suffix}
              </span>
            </div>
            {/* Animated fill bar */}
            <div className="mt-2 h-1 bg-black/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(vals[i] / m.maxVal) * 100}%`,
                  background: m.color,
                  transition: 'width 30ms linear',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ANIMATED ARTIFACT 3: Infinite Workflow Ticker
// Steps cycling horizontally like a conveyor belt
// ─────────────────────────────────────────────
function WorkflowTicker() {
  const steps = [
    { icon: '⚡', label: 'Discovery Call', sub: 'Free · 30 min' },
    { icon: '🎯', label: 'Strategy Build', sub: '1-2 days' },
    { icon: '🎨', label: 'Design Sprint', sub: '3-5 days' },
    { icon: '⚙️', label: 'Engineering', sub: '2-6 weeks' },
    { icon: '🚀', label: 'Launch', sub: 'On schedule' },
    { icon: '📈', label: 'Growth Phase', sub: 'Ongoing' },
  ];

  // Duplicate for seamless loop
  const all = [...steps, ...steps];

  return (
    <div className="dark-card rounded-3xl p-8 overflow-hidden">
      <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-2">Project Journey</p>
      <h4 className="text-card-text font-outfit font-semibold text-xl mb-8">
        How every project<br />
        <span className="text-accent font-artistic italic">comes to life.</span>
      </h4>

      {/* Scrolling ticker */}
      <div className="relative overflow-hidden rounded-xl">
        <div className="flex gap-3 w-max" style={{ animation: 'tickerScroll 18s linear infinite' }}>
          {all.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 bg-white/[0.06] border border-white/[0.08] rounded-xl px-5 py-3"
              style={{ minWidth: '160px' }}
            >
              <span className="text-xl">{s.icon}</span>
              <div>
                <p className="text-card-text font-outfit font-semibold text-sm">{s.label}</p>
                <p className="text-card-muted text-[10px] font-mono">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#111113] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#111113] to-transparent pointer-events-none" />
      </div>

      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────
// Service cards
// ─────────────────────────────────────────────
const services = [
  { id: '01', title: 'Web Development',    path: '/services/web-development',    tag: 'Custom Platforms',    metric: '0.4s load time',     desc: 'Bespoke, high-performance websites engineered to convert.' },
  { id: '02', title: 'Graphic Design',     path: '/services/graphic-design',     tag: 'Brand Identity',      metric: 'Awwwards standard',   desc: 'Visual identity systems that command instant recognition.' },
  { id: '03', title: 'SEO & Analytics',   path: '/services/seo-analytics',      tag: 'Organic Growth',      metric: '+340% avg. traffic',  desc: 'Data-driven SEO that compounds traffic and leads over time.' },
  { id: '04', title: 'Video & Motion',    path: '/services/video-motion',       tag: 'Cinematic Content',   metric: '4K production',       desc: 'Videos that stop the scroll and build brand authority.' },
  { id: '05', title: 'App Development',   path: '/services/app-development',    tag: 'iOS & Android',       metric: 'Launch in 17 weeks',  desc: 'Cross-platform mobile and web apps, MVP to enterprise.' },
  { id: '06', title: 'Automation Systems',path: '/services/automation-systems', tag: 'AI & Workflows',      metric: '30+ hrs saved/week',  desc: 'Intelligent automation that eliminates repetitive work.' },
];

export function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* ── Page Header ── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <p className="section-tag">All Services</p>
            <h1 className="text-5xl md:text-8xl font-semibold mb-6 tracking-tighter leading-[0.92] text-dark-card">
              Everything you need<br />
              <span className="font-artistic text-accent italic">to win online.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-xl leading-relaxed font-light">
              Strategy, design and engineering — all under one roof. 
              Click any service to explore what we deliver and see real results.
            </p>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════
            ANIMATED VISUAL ARTIFACTS ZONE
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <EcosystemNetwork />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LiveMetricsTicker />
          </motion.div>
        </div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <WorkflowTicker />
        </motion.div>

        {/* ══════════════════════════════════════
            SERVICE CARDS GRID
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {services.map((service, i) => (
            <Link key={service.id} to={service.path} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: easeOut }}
                className="bg-white border border-black/[0.07] rounded-2xl p-8 h-full hover:shadow-md hover:border-black/[0.12] transition-all duration-400 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[10px] text-text-muted tracking-[0.3em]">{service.id}</span>
                  <span className="text-[10px] font-mono text-accent bg-accent/8 border border-accent/20 px-3 py-1 rounded-full">{service.metric}</span>
                </div>

                <span className="font-mono text-[10px] text-accent uppercase tracking-[0.25em] mb-3 block">{service.tag}</span>
                <h2 className="text-2xl font-semibold text-dark-card tracking-tight mb-3 group-hover:text-accent transition-colors duration-400">{service.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed font-light flex-grow">{service.desc}</p>

                <div className="flex items-center gap-2 mt-6 pt-5 border-t border-black/[0.06] text-text-muted group-hover:text-accent transition-colors">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold">Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="dark-card p-10 md:p-14 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-10"
        >
          <div>
            <h3 className="text-2xl md:text-4xl font-semibold text-card-text tracking-tighter mb-3 leading-tight">
              Need a custom blend<br />
              <span className="font-artistic text-accent italic">of services?</span>
            </h3>
            <p className="text-card-muted font-light text-sm max-w-sm">
              Most clients combine 2–3 services for maximum impact. Let's scope the right package for your business.
            </p>
          </div>
          <Link to="/briefing" className="btn-accent px-10 py-4 inline-flex items-center gap-2 flex-shrink-0">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
