import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Bot,
  Zap,
  TrendingUp,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

// ── Visual Artifact 1: AI Chat Simulation ──
function ChatSimulationArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (inView) {
      const timers = [
        setTimeout(() => setStep(1), 1000),
        setTimeout(() => setStep(2), 2500),
        setTimeout(() => setStep(3), 4000),
        setTimeout(() => setStep(4), 5500),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-3xl p-6 md:p-8 border border-black/[0.07] h-[400px] flex flex-col relative overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-black/[0.06]">
        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-outfit font-semibold text-dark-card tracking-tight">
            Arvo Bot
          </h4>
          <p className="text-[10px] font-mono text-green-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />{" "}
            Online
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col gap-4">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-accent" />
            </div>
            <div className="bg-accent/5 text-dark-card text-sm p-3 rounded-2xl rounded-tl-sm max-w-[85%] font-light">
              Hi there! Are you looking to scale your digital presence this
              year?
            </div>
          </motion.div>
        )}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 justify-end"
          >
            <div className="bg-dark-card text-white text-sm p-3 rounded-2xl rounded-tr-sm max-w-[85%] font-light">
              Yes, we need a complete website redesign and SEO.
            </div>
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-accent" />
            </div>
            <div className="bg-accent/5 text-dark-card text-sm p-3 rounded-2xl rounded-tl-sm max-w-[85%] font-light">
              Perfect. Our Growth package sounds like a great fit. What's your
              estimated budget for this project?
            </div>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute bottom-6 left-6 right-6"
          >
            <div className="bg-dark-card text-white p-4 rounded-xl border border-white/10 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-1">
                  Lead Captured
                </p>
                <p className="text-sm font-semibold">High-Intent Prospect</p>
              </div>
              <ShieldCheck className="w-6 h-6 text-green-400" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ── Visual Artifact 2: Feature Grid ──
function FeaturesArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const features = [
    {
      title: "Neural Intent Extraction",
      desc: "Identifies buyer requirements and budgets automatically.",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
    },
    {
      title: "C.L.O.S.E.R Framework",
      desc: "Qualifies leads using proven, high-converting sales methodologies.",
      icon: <TrendingUp className="w-5 h-5 text-accent" />,
    },
    {
      title: "Custom Personas",
      desc: "Agent names, titles, and avatars that build instant brand trust.",
      icon: <ShieldCheck className="w-5 h-5 text-purple-500" />,
    },
    {
      title: "45-Second Deployment",
      desc: "Copy one line of HTML code. No backend or coding required.",
      icon: <MessageSquare className="w-5 h-5 text-green-500" />,
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: easeOut }}
          className="bg-white rounded-2xl p-6 border border-black/[0.07] flex flex-col"
        >
          <div className="w-10 h-10 rounded-xl bg-black/[0.03] border border-black/[0.05] flex items-center justify-center mb-4">
            {f.icon}
          </div>
          <h4 className="font-outfit font-semibold text-dark-card mb-2 tracking-tight">
            {f.title}
          </h4>
          <p className="text-text-secondary text-sm leading-relaxed font-light">
            {f.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export function ProductPage() {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* ── Hero Header ── */}
        <motion.div
          className="max-w-4xl mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="section-tag">Flagship Product</p>
          <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.9] text-dark-card">
            The AI Sales Closer
            <br />
            <span className="font-artistic text-accent italic">
              that never sleeps.
            </span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-light mb-10">
            Turn every website visitor into a qualified closing opportunity.
            Arvo Bot lives on your site as a high-authority sales
            agent—qualifying prospects, extracting niches, and capturing intent
            with neural precision.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://c7gnt9ec.insforge.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-8 py-4 inline-flex items-center gap-2"
            >
              Visit Arvo Bot <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://89zyigeb.insforge.site/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-dark-card/20 text-dark-card hover:bg-dark-card hover:text-white transition-all duration-300 font-semibold font-outfit"
            >
              Deploy in 45 Seconds
            </a>
          </div>
        </motion.div>

        {/* ── Visual Artifacts ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ChatSimulationArtifact />
          </motion.div>

          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="section-tag mb-4">Engineered for High-Authority</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8 leading-[0.95] text-dark-card">
              Every conversation is a<br />
              <span className="font-artistic text-accent italic">
                precision sales operation.
              </span>
            </h2>
            <FeaturesArtifact />
          </motion.div>
        </div>

        {/* ── CTA Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="dark-card p-10 md:p-16 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <div>
              <h3 className="text-3xl md:text-5xl font-semibold text-card-text tracking-tighter mb-4 leading-tight">
                Ready to unleash
                <br />
                <span className="font-artistic text-accent italic">
                  the Beast?
                </span>
              </h3>
              <p className="text-card-muted font-light max-w-md">
                Deployment takes 45 seconds. Conversion lasts forever. No coding
                required.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://89zyigeb.insforge.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-10 py-5 inline-flex items-center gap-2 text-lg shadow-[0_0_30px_rgba(0,163,196,0.3)] hover:shadow-[0_0_40px_rgba(0,163,196,0.5)] transition-shadow duration-300"
              >
                Visit Arvo Bot <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
