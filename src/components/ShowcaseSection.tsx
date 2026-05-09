import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Users, Clock } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    id: '01',
    title: 'Global FinTech Transformation',
    category: 'Web Engineering · UI/UX Design',
    description: 'Re-engineered a multi-national fintech platform for high-velocity performance. Load latency reduced by 85% while maintaining enterprise-grade security for global transactions.',
    metrics: [
      { label: 'Latency Reduced', val: '−85%', icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: 'Users Onboarded', val: '50K+', icon: <Users className="w-3.5 h-3.5" /> },
      { label: 'Delivery Time', val: '6 wks', icon: <Clock className="w-3.5 h-3.5" /> },
    ],
    color: 'from-blue-500/10 to-transparent',
    tag: 'Architecture',
  },
  {
    id: '02',
    title: 'DTC Brand Growth Engine',
    category: 'SEO Strategy · Content Authority',
    description: 'Orchestrated a data-driven organic growth strategy for a premium fashion brand — scaled from zero to 240K monthly sessions in 6 months through technical SEO and content authority.',
    metrics: [
      { label: 'Traffic Growth', val: '+900%', icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: 'Monthly Sessions', val: '240K', icon: <Users className="w-3.5 h-3.5" /> },
      { label: 'Conv. Rate', val: '4.2%', icon: <Clock className="w-3.5 h-3.5" /> },
    ],
    color: 'from-accent/10 to-transparent',
    tag: 'SEO & Growth',
  },
  {
    id: '03',
    title: 'Luxury Agency Identity System',
    category: 'Brand Design · Motion Design',
    description: 'Developed a sophisticated visual identity and full motion design system for a Tier-1 creative agency. Minimal, high-end aesthetics with Awwwards-standard execution throughout.',
    metrics: [
      { label: 'Brand Assets', val: '80+', icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: 'Award Level', val: 'SOTD', icon: <Users className="w-3.5 h-3.5" /> },
      { label: 'Pages Designed', val: '24', icon: <Clock className="w-3.5 h-3.5" /> },
    ],
    color: 'from-purple-500/10 to-transparent',
    tag: 'Brand Design',
  },
];

// ── Visual Artifact: Project Result Card inside showcase ──
function ProjectResultVisual({ project }: { project: typeof projects[0] }) {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="dark-card p-6 rounded-2xl">
        <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-4">Results</p>
        <div className="space-y-3">
          {project.metrics.map((m, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0">
              <div className="flex items-center gap-2 text-card-muted">
                {m.icon}
                <span className="text-[11px] font-mono">{m.label}</span>
              </div>
              <span className="font-outfit font-bold text-accent text-base">{m.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: easeOut }}
      className="group bg-white rounded-3xl border border-black/[0.07] p-8 md:p-10 hover:shadow-lg hover:border-black/10 transition-all duration-500 mb-4"
    >
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Text */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] text-accent bg-accent/8 border border-accent/20 px-3 py-1 rounded-full tracking-widest uppercase">{project.tag}</span>
            <span className="font-mono text-[10px] text-text-muted tracking-[0.3em]">{project.id}</span>
          </div>

          <span className="text-[11px] font-mono text-text-muted uppercase tracking-[0.25em] mb-3 block">{project.category}</span>

          <h3 className="text-2xl md:text-4xl font-semibold text-dark-card mb-5 tracking-tighter leading-[1] group-hover:text-accent transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-text-secondary text-base leading-relaxed max-w-xl font-light mb-8">
            {project.description}
          </p>

          <div className="flex items-center gap-3 text-text-muted group-hover:text-accent transition-colors cursor-pointer">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold">View Case Study</span>
            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Right: Animated result card */}
        <ProjectResultVisual project={project} />
      </div>
    </motion.div>
  );
}

export function ShowcaseSection() {
  return (
    <section id="showcase" className="pb-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <ShowcaseCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Mini process visual artifact at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 dark-card p-8 md:p-12 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-3">Every project includes</p>
              <h3 className="text-2xl md:text-4xl font-semibold text-card-text tracking-tighter leading-tight">
                Strategy + Design + Engineering,<br />
                <span className="font-artistic text-accent italic">as a complete package.</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Free Consultation', '30-Day Support', 'On-Time Delivery', 'Full Ownership'].map((t, i) => (
                <span key={i} className="text-[11px] font-mono text-card-muted border border-white/10 bg-white/[0.04] px-4 py-2 rounded-full">
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
