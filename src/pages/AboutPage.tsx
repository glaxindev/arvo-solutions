import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Award, Globe, Heart, Rocket } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

// ── Visual Artifact 1: Animated Stats Counter ──
function StatsArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    { val: '50+',  label: 'Projects Delivered', icon: <Rocket className="w-5 h-5 text-accent" /> },
    { val: '98%',  label: 'Client Satisfaction', icon: <Heart className="w-5 h-5 text-green-500" /> },
    { val: '6',    label: 'Services Offered',    icon: <Zap className="w-5 h-5 text-yellow-500" /> },
    { val: '100%', label: 'Remote Worldwide',    icon: <Globe className="w-5 h-5 text-purple-500" /> },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: easeOut }}
          className="bg-white rounded-2xl p-6 border border-black/[0.07] flex flex-col items-center text-center"
        >
          <div className="mb-3">{s.icon}</div>
          <p className="font-outfit font-black text-4xl text-dark-card tracking-tighter mb-1">{s.val}</p>
          <p className="text-text-muted text-xs font-mono tracking-wide leading-tight">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ── Visual Artifact 2: Services we master ──
function ServicesArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const skills = [
    { name: 'Web Development',     pct: 95, color: '#00A3C4' },
    { name: 'Graphic Design',      pct: 90, color: '#a78bfa' },
    { name: 'SEO & Analytics',     pct: 88, color: '#22c55e' },
    { name: 'App Development',     pct: 82, color: '#f59e0b' },
    { name: 'Video & Motion',      pct: 85, color: '#f472b6' },
    { name: 'AI & Automation',     pct: 78, color: '#34d399' },
  ];

  return (
    <div ref={ref} className="dark-card p-8 rounded-3xl">
      <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-2">Expertise</p>
      <h4 className="text-card-text font-outfit font-semibold text-xl mb-8 tracking-tight">
        What we do <span className="text-accent font-artistic italic">best.</span>
      </h4>
      <div className="space-y-5">
        {skills.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1.5">
              <span className="text-card-text text-sm font-medium">{s.name}</span>
              <span className="text-card-muted text-xs font-mono">{s.pct}%</span>
            </div>
            <div className="h-2 bg-white/[0.08] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: s.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${s.pct}%` } : {}}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.9, ease: easeOut }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Visual Artifact 3: Journey Timeline ──
function TimelineArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const milestones = [
    { year: '2024', label: 'The Idea',         desc: 'Two teenagers with a vision: solve real problems with design and code.' },
    { year: 'Early 2025', label: 'First Clients',   desc: 'Landed first real clients and delivered results that exceeded expectations.' },
    { year: 'Mid 2025',   label: 'Arvo is Born',    desc: 'Officially launched Arvo Solutions as a full-service digital agency.' },
    { year: 'Now',        label: 'Growing Strong',  desc: '50+ projects delivered, 6 service lines, clients across multiple countries.' },
  ];

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 border border-black/[0.07]">
      <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-2">Our Journey</p>
      <h4 className="text-dark-card font-outfit font-semibold text-xl mb-8 tracking-tight">
        From idea to <span className="font-artistic text-accent italic">agency.</span>
      </h4>

      <div className="relative pl-5">
        {/* Vertical line */}
        <motion.div
          className="absolute left-0 top-3 w-0.5 bg-black/[0.08] rounded-full"
          initial={{ height: 0 }}
          animate={inView ? { height: '90%' } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
        <div className="space-y-7">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-cream flex-shrink-0" />
              <span className="text-[10px] font-mono text-accent bg-accent/8 border border-accent/20 px-2.5 py-0.5 rounded-full inline-block mb-2">{m.year}</span>
              <p className="text-dark-card font-semibold text-sm">{m.label}</p>
              <p className="text-text-secondary text-xs leading-relaxed font-light mt-0.5">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Values ──
const values = [
  { icon: <Zap className="w-5 h-5 text-accent" />,          title: 'Speed Without Compromise', desc: 'We ship fast. But never at the cost of quality. Every pixel, every line of code is intentional.' },
  { icon: <Users className="w-5 h-5 text-purple-500" />,    title: 'Partnership, Not Just Service', desc: 'We treat every client as a partner. Your growth is our growth. Your win is our win.' },
  { icon: <Award className="w-5 h-5 text-yellow-500" />,    title: 'Results Over Aesthetics', desc: 'Beautiful work is table stakes. What we actually care about is measurable impact — leads, sales, growth.' },
  { icon: <Heart className="w-5 h-5 text-red-400" />,       title: 'Passion-Led, Always', desc: 'We didn\'t start this for money. We started it because we love building things. That energy shows in everything we make.' },
];

export function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* ── Hero Header ── */}
        <motion.div
          className="max-w-5xl mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="section-tag">Our Story</p>
          <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.9] text-dark-card">
            Built by passion.<br />
            <span className="font-artistic text-accent italic">Driven by impact.</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl font-light">
            Arvo Solutions is a dynamic digital agency born from creativity, curiosity, and the relentless 
            desire to build something extraordinary — started by teenagers who believed age doesn't define 
            what you can create.
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <StatsArtifact />
        </motion.div>

        {/* ── Story + Skills ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="section-tag">The Story</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8 leading-[0.95] text-dark-card">
              We didn't wait for<br />
              <span className="font-artistic text-accent italic">permission to start.</span>
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed font-light text-[15px]">
              <p>
                Arvo Solutions was born from passion, creativity, and the desire to build 
                something extraordinary. We specialize in <strong className="text-dark-card font-medium">Full-Stack Web Development, 
                Graphic Design, SEO, App Development, Video Editing, and Custom Tech Solutions</strong> — 
                all under one creative roof.
              </p>
              <p>
                Driven by creativity and a love for technology, we built a solutions-based company 
                while still in our teenage years. What began as friends experimenting with ideas 
                soon turned into Arvo Solutions — a brand dedicated to helping businesses, creators, 
                and startups unlock their full potential in the digital world.
              </p>
              <p>
                We've grown through curiosity, late-night brainstorming, and a never-ending belief 
                that <span className="text-dark-card font-medium">age doesn't define innovation — passion does.</span> Our 
                team believes that innovation and execution should go hand in hand. We don't just 
                deliver projects — we deliver results that inspire.
              </p>
            </div>
          </motion.div>

          {/* Skills visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ServicesArtifact />
          </motion.div>
        </div>

        {/* ── Timeline + Values ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <TimelineArtifact />
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="mb-2">
              <p className="section-tag">What We Stand For</p>
              <h3 className="text-2xl md:text-4xl font-semibold text-dark-card tracking-tighter leading-tight">
                The principles that<br />
                <span className="font-artistic text-accent italic">guide everything.</span>
              </h3>
            </div>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-black/[0.07] flex items-start gap-4 hover:shadow-sm hover:border-black/[0.1] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cream border border-black/[0.07] flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-dark-card text-sm mb-1">{v.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed font-light">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="dark-card p-10 md:p-16 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-semibold text-card-text tracking-tighter mb-4 leading-tight">
                Ready to work with<br />
                <span className="font-artistic text-accent italic">a team that cares?</span>
              </h3>
              <p className="text-card-muted font-light max-w-md">
                We bring the same passion to every project — whether it's your first website 
                or your tenth product launch.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link to="/briefing" className="btn-accent px-10 py-4 inline-flex items-center gap-2">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/saadmemon-arvosolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm font-mono text-card-muted hover:text-accent transition-colors"
              >
                Or schedule a free call →
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
