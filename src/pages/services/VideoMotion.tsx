import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

// ── Visual Artifact: Video Timeline Editor ──
function VideoTimelineArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const tracks = [
    { label: 'Video', segments: [{ w: '45%', color: 'bg-accent' }, { w: '30%', color: 'bg-accent/60', ml: '5%' }] },
    { label: 'Audio', segments: [{ w: '80%', color: 'bg-purple-500' }] },
    { label: 'Motion', segments: [{ w: '20%', color: 'bg-yellow-500' }, { w: '25%', color: 'bg-yellow-500/70', ml: '8%' }, { w: '18%', color: 'bg-yellow-500', ml: '5%' }] },
    { label: 'Text', segments: [{ w: '35%', color: 'bg-green-500', ml: '10%' }] },
  ];

  return (
    <div ref={ref} className="dark-card p-8 rounded-3xl">
      {/* Player controls */}
      <div className="flex items-center gap-4 mb-6 pb-5 border-b border-white/[0.07]">
        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
          <Play className="w-4 h-4 text-white fill-white ml-0.5" />
        </div>
        <div className="flex-1">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: '65%' } : {}}
              transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-card-muted text-[10px] font-mono">0:32</span>
            <span className="text-card-muted text-[10px] font-mono">0:48</span>
          </div>
        </div>
        <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded">4K</span>
      </div>

      {/* Timeline tracks */}
      <div className="space-y-3 mb-4">
        {tracks.map((track, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.3 }}
            className="flex items-center gap-3"
          >
            <span className="text-card-muted text-[10px] font-mono w-12 flex-shrink-0 text-right">{track.label}</span>
            <div className="flex-1 h-7 bg-white/[0.04] rounded-lg overflow-hidden relative flex items-center">
              {track.segments.map((seg, j) => (
                <motion.div
                  key={j}
                  className={`absolute h-5 rounded-md ${seg.color} opacity-80`}
                  style={{ width: seg.w, left: (seg as any).ml || 0 }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: i * 0.1 + j * 0.1 + 0.5, duration: 0.5 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-5 border-t border-white/[0.07] flex justify-between">
        <span className="text-card-muted text-xs font-mono">Adobe Premiere · After Effects · DaVinci</span>
        <span className="text-accent text-xs font-mono">Cinematic Grade</span>
      </div>
    </div>
  );
}

// ── Visual Artifact: Video Production Phases ──
function ProductionPhasesArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const phases = [
    { phase: 'Pre-Production', items: ['Script & Storyboard', 'Shot list & Planning', 'Mood board'], color: 'bg-blue-500/20 border-blue-500/30 text-blue-400' },
    { phase: 'Production', items: ['Filming & Direction', '4K Recording', 'Location scouting'], color: 'bg-accent/20 border-accent/30 text-accent' },
    { phase: 'Post-Production', items: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Final Cut'], color: 'bg-green-500/20 border-green-500/30 text-green-400' },
  ];

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 border border-black/[0.07]">
      <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-2">Production Process</p>
      <h4 className="text-dark-card font-outfit font-semibold text-xl mb-8 tracking-tight">
        From script to screen,<br />
        <span className="font-artistic text-accent italic">end-to-end.</span>
      </h4>
      <div className="space-y-4">
        {phases.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 + 0.2 }}
            className={`p-5 rounded-2xl border ${p.color}`}
          >
            <p className="font-outfit font-semibold text-dark-card mb-3">{p.phase}</p>
            <div className="flex flex-wrap gap-2">
              {p.items.map((item, j) => (
                <span key={j} className="text-xs font-mono bg-white/80 text-dark-card/70 px-2.5 py-1 rounded-full border border-black/[0.07]">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function VideoMotion() {
  return (
    <div className="bg-cream min-h-screen text-dark-card pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div className="max-w-4xl mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeOut }}>
          <p className="section-tag">Service / Video & Motion</p>
          <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.9]">
            Content that<br />
            <span className="font-artistic text-accent italic">stops the scroll.</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-light">
            From cinematic brand films to motion graphics and social media reels —
            we produce video content that elevates your brand and drives measurable
            engagement across every platform.
          </p>
        </motion.div>

        {/* ── VISUAL ARTIFACTS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <VideoTimelineArtifact />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <ProductionPhasesArtifact />
          </motion.div>
        </div>

        {/* Services */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-12 leading-[0.95]">
            Every format,<br />
            <span className="font-artistic text-accent italic">perfected.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Brand Films', desc: 'Cinematic storytelling that defines your brand identity and values.', metric: '4K · Cinematic' },
              { title: 'Social Media Content', desc: 'Reels, TikToks, and YouTube content engineered for algorithmic reach.', metric: 'Platform-native' },
              { title: 'Motion Graphics', desc: 'Animated explainers, logo animations, and UI motion design.', metric: 'After Effects' },
              { title: 'Commercial Ads', desc: 'High-converting video ads for Meta, Google, and YouTube campaigns.', metric: 'Direct response' },
              { title: 'Product Videos', desc: 'E-commerce product videos that increase add-to-cart rates by 80%.', metric: '+80% conversion' },
              { title: 'Event Coverage', desc: 'Professional event filming with same-day highlight delivery.', metric: 'Same-day' },
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
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-card-text mb-6 relative z-10">Ready to create<br /><span className="font-artistic text-accent italic">viral content?</span></h2>
          <p className="text-card-muted mb-10 max-w-md mx-auto font-light relative z-10">Tell us your story. We'll turn it into something unforgettable.</p>
          <Link to="/briefing" className="btn-accent px-8 py-4 inline-flex items-center gap-2">Start Video Project <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  );
}
