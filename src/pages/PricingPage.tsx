import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Magnetic } from '../components/Magnetic';

const easeOut = [0.16, 1, 0.3, 1] as const;

const tiers = [
  {
    name: 'Starter',
    price: '350',
    currency: '$',
    description: 'Perfect for startups and small businesses who need a clean, professional website that actually converts — fast.',
    features: [
      'Custom website design (up to 5 pages)',
      'Mobile-first, responsive build',
      'Basic SEO setup & sitemap',
      'Contact form & CMS integration',
      '30-day post-launch support',
    ],
    tag: 'Most Affordable',
    popular: false,
    dark: false,
  },
  {
    name: 'Growth',
    price: '700',
    currency: '$',
    description: 'A complete digital ecosystem for brands serious about scaling — strategy, design and engineering as one package.',
    features: [
      'Everything in Starter',
      'Full brand identity & logo system',
      'Advanced SEO & content strategy',
      'Lead generation funnel setup',
      'Motion design & micro-animations',
      'Monthly performance report',
    ],
    tag: 'Most Popular',
    popular: true,
    dark: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    description: 'Highly tailored partnerships for large-scale operations — bespoke AI, automation, and multi-platform builds.',
    features: [
      'Everything in Growth',
      'Custom AI chatbot & automation',
      'App development (iOS/Android)',
      'Dedicated project manager',
      'SLA-backed delivery guarantee',
      'Ongoing retainer partnership',
    ],
    tag: 'Custom Scope',
    popular: false,
    dark: false,
  },
];

// ── Visual Artifact: ROI Comparison Visual ──
function ROIArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 border border-black/[0.07] mb-20">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1">
          <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-3">Why invest in Arvo</p>
          <h3 className="text-2xl md:text-4xl font-semibold text-dark-card tracking-tighter leading-tight mb-4">
            The numbers speak<br />
            <span className="font-artistic text-accent italic">for themselves.</span>
          </h3>
          <p className="text-text-secondary font-light text-sm leading-relaxed max-w-sm">
            Every $ invested in a properly-engineered digital presence returns measurably.
            Our clients see average ROI within 90 days.
          </p>
        </div>

        {/* ROI comparison bars */}
        <div className="flex-1">
          <div className="space-y-5">
            {[
              { label: 'Template website', roi: '1.2×', pct: 20, color: 'bg-black/15' },
              { label: 'Freelancer build', roi: '2.1×', pct: 40, color: 'bg-black/25' },
              { label: 'Arvo-built site', roi: '4.8×', pct: 100, color: 'bg-accent' },
            ].map((r, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-dark-card font-medium text-sm">{r.label}</span>
                  <span className={`font-outfit font-bold text-sm ${i === 2 ? 'text-accent' : 'text-text-secondary'}`}>{r.roi} avg. ROI</span>
                </div>
                <div className="h-2.5 bg-black/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${r.color}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${r.pct}%` } : {}}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.9, ease: easeOut }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-[10px] font-mono mt-4">* Based on 50+ client engagements · 90-day avg.</p>
        </div>
      </div>
    </div>
  );
}

export function PricingPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <p className="section-tag">Transparent Pricing</p>
            <h1 className="text-5xl md:text-8xl font-semibold mb-6 text-dark-card tracking-tighter leading-[0.92]">
              Clear pricing,<br />
              <span className="font-artistic text-accent italic">real results.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-xl leading-relaxed font-light">
              No hourly billing. No scope creep. Fixed-scope engagements that
              deliver predictable outcomes — and real return on your investment.
            </p>
          </motion.div>
        </div>

        {/* ── VISUAL ARTIFACT: ROI Comparison ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <ROIArtifact />
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easeOut }}
              className={`relative flex flex-col rounded-3xl p-8 h-full ${tier.dark
                  ? 'bg-[#111113] text-[#f0ebe0]'
                  : 'bg-white border border-black/[0.07] text-dark-card'
                }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[9px] font-mono font-bold px-6 py-1.5 rounded-full uppercase tracking-[0.25em]">
                  Most Popular
                </div>
              )}

              {/* Tag */}
              <span className={`text-[10px] font-mono tracking-[0.25em] uppercase mb-6 block ${tier.dark ? 'text-accent' : 'text-text-muted'}`}>
                {tier.tag}
              </span>

              {/* Name & price */}
              <h3 className={`text-2xl font-semibold mb-2 tracking-tight ${tier.dark ? 'text-[#f0ebe0]' : 'text-dark-card'}`}>
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className={`text-5xl font-outfit font-bold tracking-tighter ${tier.dark ? 'text-[#f0ebe0]' : 'text-dark-card'}`}>
                  {tier.currency}{tier.price}
                </span>
                {tier.price !== 'Custom' && (
                  <span className={`text-[11px] font-mono ml-0.5 ${tier.dark ? 'text-[#f0ebe0]/40' : 'text-text-muted'}`}>
                    {tier.name === 'Growth' ? '+ /project' : '/project'}
                  </span>
                )}
              </div>
              <p className={`text-sm leading-relaxed font-light mb-8 ${tier.dark ? 'text-[#f0ebe0]/60' : 'text-text-secondary'}`}>
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className={`flex items-center gap-3 text-sm font-medium ${tier.dark ? 'text-[#f0ebe0]/80' : 'text-dark-card/80'}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tier.dark ? 'bg-accent/20' : 'bg-accent/10'}`}>
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Magnetic strength={0.15}>
                <Link
                  to="/briefing"
                  className={`block w-full py-4 rounded-2xl text-sm font-semibold text-center transition-all duration-400 ${tier.dark
                      ? 'bg-accent text-white hover:bg-[#f0ebe0] hover:text-[#111113]'
                      : 'bg-dark-card text-[#f0ebe0] hover:bg-accent hover:text-white'
                    }`}
                >
                  Get Started
                </Link>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        {/* Trust guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-black/[0.07] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div>
            <h4 className="text-xl md:text-2xl font-semibold text-dark-card tracking-tight mb-2">
              Not sure which plan?
            </h4>
            <p className="text-text-secondary font-light text-sm max-w-md">
              Book a free 30-minute call. We'll understand your goals and recommend exactly what you need — no upsell pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            {['Free Consultation', 'Fixed Pricing', 'On-Time Delivery', '30-Day Support'].map((badge, i) => (
              <span key={i} className="text-[11px] font-mono text-text-muted bg-cream border border-black/[0.07] px-4 py-2 rounded-full">
                ✓ {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
