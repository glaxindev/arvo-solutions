import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

// ── Visual Artifact: Automation Pipeline ──
function PipelineArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const steps = [
    { label: 'Trigger', sub: 'New Lead Form', icon: '⚡', bg: 'bg-accent' },
    { label: 'Enrich', sub: 'CRM + Data', icon: '🔗', bg: 'bg-purple-500' },
    { label: 'Qualify', sub: 'AI Scoring', icon: '🤖', bg: 'bg-blue-500' },
    { label: 'Notify', sub: 'Slack + Email', icon: '📬', bg: 'bg-green-500' },
  ];

  return (
    <div ref={ref} className="dark-card p-8 rounded-3xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-1">Workflow Engine</p>
          <h4 className="text-card-text font-outfit font-semibold text-xl">Automated Lead Pipeline</h4>
        </div>
        <div className="flex items-center gap-2 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-[11px] font-mono">Running</span>
        </div>
      </div>

      {/* Pipeline steps */}
      <div className="flex flex-col gap-3 mb-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.2 + 0.2, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center text-lg flex-shrink-0`}>
              {s.icon}
            </div>
            <div className="flex-1 bg-white/[0.04] rounded-xl p-3 border border-white/[0.05]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-card-text text-sm font-outfit font-semibold">{s.label}</p>
                  <p className="text-card-muted text-[11px] font-mono">{s.sub}</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.6, duration: 0.3 }}
                >
                  <Check className="w-4 h-4 text-green-400" />
                </motion.div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="absolute left-[2.25rem] mt-14 w-0.5 h-3 bg-white/10" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="pt-5 border-t border-white/[0.07] flex justify-between items-center">
        <span className="text-card-muted text-xs font-mono">Avg. response time</span>
        <span className="text-accent font-outfit font-bold text-xl">0.3s</span>
      </div>
    </div>
  );
}

// ── Visual Artifact: Time Saved Calculator ──
function TimeSavedArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const tasks = [
    { name: 'Lead qualification', before: '45 min', after: '0 min', saved: 45 },
    { name: 'CRM data entry', before: '30 min', after: '0 min', saved: 30 },
    { name: 'Follow-up emails', before: '60 min', after: '0 min', saved: 60 },
    { name: 'Report generation', before: '90 min', after: '5 min', saved: 85 },
  ];

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 border border-black/[0.07]">
      <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-2">Before vs After</p>
      <h4 className="text-dark-card font-outfit font-semibold text-xl mb-2 tracking-tight">
        Hours saved per week
      </h4>
      <motion.p
        className="text-5xl font-outfit font-bold text-accent mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        30+ hrs
      </motion.p>

      <div className="space-y-4">
        {tasks.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.3 }}
            className="flex items-center justify-between py-3 border-b border-black/[0.06] last:border-0"
          >
            <span className="text-dark-card text-sm font-medium">{t.name}</span>
            <div className="flex items-center gap-3">
              <span className="line-through text-text-muted text-sm">{t.before}</span>
              <span className="text-green-600 font-semibold text-sm">{t.after}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AutomationSystems() {
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
          <p className="section-tag">Service / Automation & AI</p>
          <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.9]">
            Work smarter,<br />
            <span className="font-artistic text-accent italic">not harder.</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl font-light">
            We build intelligent automation systems that eliminate repetitive work,
            saving your team 30+ hours per week. From AI-powered lead scoring to
            fully automated reporting pipelines.
          </p>
        </motion.div>

        {/* ── VISUAL ARTIFACTS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <PipelineArtifact />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <TimeSavedArtifact />
          </motion.div>
        </div>

        {/* Services */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-12 leading-[0.95]">
            What we automate<br />
            <span className="font-artistic text-accent italic">for you.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Lead Pipelines', desc: 'Automated qualification, scoring, and CRM routing from any source.', metric: '0.3s response' },
              { title: 'AI Chatbots', desc: 'Intelligent chatbots trained on your business to qualify leads 24/7.', metric: '24/7 active' },
              { title: 'Reporting & Analytics', desc: 'Automated weekly/monthly reports sent directly to your inbox.', metric: 'Zero manual work' },
              { title: 'Email Sequences', desc: 'Behavior-triggered drip campaigns that convert on autopilot.', metric: '3x open rates' },
              { title: 'Data Integration', desc: 'Connect your tools — CRM, ERP, billing, and analytics — seamlessly.', metric: '200+ integrations' },
              { title: 'Custom Workflows', desc: 'Any repetitive business process can be automated. We handle the logic.', metric: 'Bespoke builds' },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="p-7 bg-white rounded-2xl border border-black/[0.07]"
              >
                <span className="text-accent text-[10px] font-mono tracking-widest bg-accent/8 px-2.5 py-1 rounded-full border border-accent/20 mb-4 inline-block">{f.metric}</span>
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
            Ready to automate<br />
            <span className="font-artistic text-accent italic">your growth?</span>
          </h2>
          <p className="text-card-muted mb-10 max-w-md mx-auto font-light relative z-10">Let's map out your current workflows and identify exactly what can be automated.</p>
          <Link to="/briefing" className="btn-accent px-8 py-4 inline-flex items-center gap-2">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
