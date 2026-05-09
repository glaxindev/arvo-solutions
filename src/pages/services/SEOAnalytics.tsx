import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

// ── Visual Artifact 1: Live SERP Position Tracker ──
function SERPArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const keywords = [
    { kw: 'digital agency pakistan', pos: 1, vol: '2.4K/mo', change: '+12' },
    { kw: 'web design karachi',      pos: 2, vol: '1.8K/mo', change: '+7' },
    { kw: 'seo services pakistan',   pos: 1, vol: '3.1K/mo', change: '+21' },
    { kw: 'ecommerce development',   pos: 3, vol: '890/mo',  change: '+4' },
    { kw: 'react js development',    pos: 2, vol: '640/mo',  change: '+9' },
  ];

  return (
    <div ref={ref} className="dark-card p-7 rounded-3xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-1">Rank Tracker</p>
          <h4 className="text-card-text font-outfit font-semibold text-lg">Keyword Positions</h4>
        </div>
        <div className="flex items-center gap-2 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-[11px] font-mono">Live</span>
        </div>
      </div>

      <div className="space-y-3">
        {keywords.map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
            className="flex items-center gap-4 p-3 bg-white/[0.04] rounded-xl border border-white/[0.04] group hover:border-accent/20 transition-all"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 ${k.pos === 1 ? 'bg-accent text-white' : 'bg-white/10 text-card-text'}`}>
              #{k.pos}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-card-text text-sm font-medium truncate">{k.kw}</p>
              <p className="text-card-muted text-[11px] font-mono">{k.vol} searches</p>
            </div>
            <div className="flex items-center gap-1 bg-green-400/10 px-2.5 py-1 rounded-full flex-shrink-0">
              <span className="text-green-400 text-[11px] font-mono font-semibold">{k.change}</span>
              <span className="text-green-400 text-[10px]">↑</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Visual Artifact 2: Organic Traffic Growth Chart (SVG area chart) ──
function TrafficChartArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  // 7 data points — exponential growth curve
  const months  = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const rawVals = [12, 22, 38, 58, 76, 91, 100]; // % heights

  // SVG chart parameters
  const W = 340, H = 120, pad = { l: 28, r: 16, t: 12, b: 8 };
  const chartW = W - pad.l - pad.r;
  const chartH = H - pad.t - pad.b;

  // Convert data to SVG coordinates
  const pts = rawVals.map((v, i) => ({
    x: pad.l + (i / (rawVals.length - 1)) * chartW,
    y: pad.t + chartH - (v / 100) * chartH,
  }));

  // Smooth cubic bezier path
  const curvePath = pts.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = pts[i - 1];
    const cp1x = prev.x + (pt.x - prev.x) * 0.5;
    const cp1y = prev.y;
    const cp2x = prev.x + (pt.x - prev.x) * 0.5;
    const cp2y = pt.y;
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pt.x} ${pt.y}`;
  }, '');

  // Area fill path (close at bottom)
  const areaPath = `${curvePath} L ${pts[pts.length - 1].x} ${pad.t + chartH} L ${pts[0].x} ${pad.t + chartH} Z`;

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 border border-black/[0.07]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-1">Organic Traffic</p>
          <h4 className="text-dark-card font-outfit font-semibold text-xl tracking-tight">
            6-month growth curve
          </h4>
        </div>
        <div className="text-right">
          <motion.p
            className="text-3xl font-outfit font-bold text-accent"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            +340%
          </motion.p>
          <p className="text-text-muted text-xs font-mono">avg. client result</p>
        </div>
      </div>

      {/* ── SVG Area Chart ── */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: '120px' }}
        >
          <defs>
            <linearGradient id="trafficGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00A3C4" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#00A3C4" stopOpacity="0.01" />
            </linearGradient>
            {/* Clip mask for animated reveal */}
            <clipPath id="revealClip">
              <motion.rect
                x="0" y="0" height={H}
                initial={{ width: 0 }}
                animate={inView ? { width: W } : {}}
                transition={{ delay: 0.3, duration: 1.2, ease: easeOut }}
              />
            </clipPath>
          </defs>

          {/* Y-axis grid lines */}
          {[0, 33, 66, 100].map((pct, i) => {
            const y = pad.t + chartH - (pct / 100) * chartH;
            return (
              <g key={i}>
                <line x1={pad.l} y1={y} x2={W - pad.r} y2={y}
                  stroke="rgba(17,17,19,0.06)" strokeWidth="0.5" strokeDasharray="3 4" />
                <text x={pad.l - 4} y={y + 3.5} textAnchor="end"
                  fontSize="6" fill="rgba(17,17,19,0.3)" fontFamily="JetBrains Mono, monospace">
                  {pct}
                </text>
              </g>
            );
          })}

          {/* Area fill */}
          <path d={areaPath} fill="url(#trafficGrad)" clipPath="url(#revealClip)" />

          {/* Curve line */}
          <path
            d={curvePath}
            fill="none"
            stroke="#00A3C4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#revealClip)"
          />

          {/* Data points */}
          {pts.map((pt, i) => (
            <motion.circle
              key={i}
              cx={pt.x} cy={pt.y} r="3"
              fill="white" stroke="#00A3C4" strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.3 + (i / rawVals.length) * 1.2 + 0.2, duration: 0.3 }}
            />
          ))}

          {/* Tooltip on last point */}
          <g>
            <rect x={pts[6].x - 24} y={pts[6].y - 22} width="48" height="16" rx="4"
              fill="#111113" />
            <text x={pts[6].x} y={pts[6].y - 10} textAnchor="middle"
              fontSize="6.5" fill="#f0ebe0" fontFamily="Outfit,sans-serif" fontWeight="600">
              +340% 🚀
            </text>
          </g>
        </svg>
      </div>

      {/* Month labels */}
      <div className="flex mt-1">
        {months.map((m, i) => (
          <div key={i} className="flex-1 text-center text-[10px] font-mono text-text-muted">{m}</div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-text-muted text-xs font-mono">Arvo client average · Across 50+ campaigns</span>
      </div>
    </div>
  );
}

export function SEOAnalytics() {
  return (
    <div className="bg-cream min-h-screen text-dark-card pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          className="max-w-4xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="section-tag">Service / SEO & Growth</p>
          <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.9]">
            Rank higher,<br />
            <span className="font-artistic text-accent italic">earn more.</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-light">
            We engineer long-term organic visibility that compounds over time.
            Our average client sees +340% organic traffic within 6 months —
            backed by data, not guesswork.
          </p>
        </motion.div>

        {/* ── VISUAL ARTIFACTS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SERPArtifact />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <TrafficChartArtifact />
          </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-12 leading-[0.95]">
            Full-spectrum SEO,<br />
            <span className="font-artistic text-accent italic">start to finish.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Technical Audit',      desc: 'Full crawl analysis, Core Web Vitals, indexability, structured data.',        metric: 'One-time' },
              { title: 'Keyword Strategy',     desc: 'Intent-mapped keyword research targeting commercial-intent queries.',          metric: 'Ongoing'  },
              { title: 'Content Engineering',  desc: 'SEO-first content briefs and optimization of existing pages.',                metric: 'Monthly'  },
              { title: 'Authority Building',   desc: 'Ethical link acquisition from relevant, high-DR publications.',               metric: 'Ongoing'  },
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
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-card-text mb-6 relative z-10">
            Start ranking<br /><span className="font-artistic text-accent italic">this month.</span>
          </h2>
          <p className="text-card-muted mb-10 max-w-lg mx-auto font-light relative z-10">Free SEO audit included with every consultation call.</p>
          <Link to="/briefing" className="btn-accent px-8 py-4 inline-flex items-center gap-2">
            Get Free SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
