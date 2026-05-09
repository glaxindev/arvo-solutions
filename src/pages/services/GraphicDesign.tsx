import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

// ── Visual Artifact: Brand Color Palette Explorer ──
function BrandPaletteArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const palette = [
    { name: 'Primary', hex: '#1A1A2E', light: false },
    { name: 'Deep', hex: '#16213E', light: false },
    { name: 'Accent', hex: '#0F3460', light: false },
    { name: 'Teal', hex: '#00A3C4', light: true },
    { name: 'Warm', hex: '#E8D5B7', light: false },
    { name: 'Light', hex: '#F5F0E8', light: false },
  ];

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 border border-black/[0.07]">
      <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-2">Brand System</p>
      <h4 className="text-dark-card font-outfit font-semibold text-xl mb-8 tracking-tight">
        Every color has a<br />
        <span className="text-accent font-artistic italic">purpose.</span>
      </h4>

      {/* Color swatches */}
      <div className="flex gap-2 mb-8 h-16">
        {palette.map((c, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-xl cursor-pointer group relative"
            style={{ background: c.hex }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={inView ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ delay: i * 0.08 + 0.2, duration: 0.5, ease: easeOut }}
            whileHover={{ flex: 2, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[9px] font-mono text-center" style={{ color: c.hex === '#F5F0E8' ? '#111' : '#fff' }}>{c.hex}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Typography specimens */}
      <div className="space-y-3">
        <div className="p-4 bg-cream rounded-xl border border-black/[0.06]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[10px] text-text-muted font-mono uppercase tracking-widest mb-1">Display / Outfit</p>
              <p className="text-2xl font-outfit font-bold text-dark-card tracking-tighter">Aa Bb Cc</p>
            </div>
            <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">Headlines</span>
          </div>
        </div>
        <div className="p-4 bg-cream rounded-xl border border-black/[0.06]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[10px] text-text-muted font-mono uppercase tracking-widest mb-1">Serif / Playfair</p>
              <p className="text-2xl font-artistic font-semibold text-accent italic">Aa Bb Cc</p>
            </div>
            <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">Accents</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Visual Artifact: Design Layers / Process ──
function DesignLayersArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const layers = [
    { label: 'Brand Strategy', sub: 'Positioning, audience, voice', color: 'bg-accent/20 border-accent/30' },
    { label: 'Visual Identity', sub: 'Logo, palette, typography', color: 'bg-purple-400/20 border-purple-400/30' },
    { label: 'UI Design', sub: 'Wireframes, prototypes, screens', color: 'bg-blue-400/20 border-blue-400/30' },
    { label: 'Motion Design', sub: 'Animations, transitions, micro-UX', color: 'bg-green-400/20 border-green-400/30' },
    { label: 'Brand Guidelines', sub: 'Full usage system & assets', color: 'bg-yellow-400/20 border-yellow-400/30' },
  ];

  return (
    <div ref={ref} className="dark-card p-8 rounded-3xl">
      <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-2">Design Process</p>
      <h4 className="text-card-text font-outfit font-semibold text-xl mb-8 tracking-tight">From concept to brand,<br />every layer covered.</h4>

      <div className="space-y-3">
        {layers.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
            className={`flex items-center gap-4 p-4 rounded-xl border ${l.color}`}
          >
            <div className="font-mono text-[10px] text-card-muted opacity-50 w-5 flex-shrink-0">0{i + 1}</div>
            <div className="flex-1">
              <p className="text-card-text font-outfit font-semibold text-sm">{l.label}</p>
              <p className="text-card-muted text-xs font-mono mt-0.5">{l.sub}</p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: i * 0.12 + 0.5 }}
              className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function GraphicDesign() {
  return (
    <div className="bg-cream min-h-screen text-dark-card pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          className="max-w-4xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="section-tag">Service / Brand & Design</p>
          <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.9]">
            Design that<br />
            <span className="font-artistic text-accent italic">commands attention.</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-light">
            Your brand is your first impression — and we make sure it's unforgettable.
            From visual identity systems to Awwwards-standard UI, we design for
            impact, authority, and trust.
          </p>
        </motion.div>

        {/* ── VISUAL ARTIFACTS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <BrandPaletteArtifact />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <DesignLayersArtifact />
          </motion.div>
        </div>

        {/* Services */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-12 leading-[0.95]">
            Every touchpoint,<br />
            <span className="font-artistic text-accent italic">designed with intent.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Logo & Brand Identity', desc: 'Wordmarks, logomarks, brand systems built for longevity.', metric: 'Timeless' },
              { title: 'UI/UX Design', desc: 'User interfaces that convert — wireframes to pixel-perfect screens.', metric: 'Awwwards standard' },
              { title: 'Marketing Collateral', desc: 'Pitch decks, social media kits, brochures, business cards.', metric: 'Print-ready' },
              { title: 'Packaging Design', desc: 'Product and packaging design that stands out on shelf and in feed.', metric: 'Retail-grade' },
              { title: 'Brand Guidelines', desc: 'Comprehensive brand books ensuring consistency across every channel.', metric: '50+ pages' },
              { title: 'Social Media Kits', desc: 'Templates, creatives, and content systems scaled for growth.', metric: 'Plug & play' },
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
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-card-text mb-6 relative z-10">Ready to elevate<br /><span className="font-artistic text-accent italic">your brand?</span></h2>
          <p className="text-card-muted mb-10 max-w-md mx-auto font-light relative z-10">Free brand audit included with your first call.</p>
          <Link to="/briefing" className="btn-accent px-8 py-4 inline-flex items-center gap-2">Start Brand Project <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  );
}
