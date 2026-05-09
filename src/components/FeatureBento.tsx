import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ── Animated counter hook ──
function useCounter(end: number, duration = 1500, trigger: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!trigger) return;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [trigger, end, duration]);
    return count;
}

// ── SEO Traffic Bar Chart Card ──
function SEOCard() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });
    const traffic = useCounter(340, 1200, inView);

    const bars = [22, 38, 45, 55, 70, 88, 100];

    return (
        <div ref={ref} className="dark-card p-8 h-full flex flex-col justify-between min-h-[280px]">
            <div>
                <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-6">SEO & Growth</p>
                <h3 className="text-3xl font-outfit font-semibold text-card-text tracking-tight mb-2">
                    Organic traffic up
                </h3>
                <div className="flex items-end gap-1">
                    <span className="text-5xl font-outfit font-bold text-accent tracking-tighter">+{traffic}%</span>
                </div>
                <p className="text-card-muted text-sm mt-2 font-light">Average across client portfolio</p>
            </div>
            {/* Bar chart */}
            <div className="flex items-end gap-2 h-20 mt-8">
                {bars.map((h, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                            background: i === bars.length - 1 ? '#00A3C4' : 'rgba(240,235,224,0.15)',
                        }}
                        initial={{ height: 0 }}
                        animate={inView ? { height: `${h}%` } : { height: 0 }}
                        transition={{ delay: i * 0.08 + 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                ))}
            </div>
        </div>
    );
}

// ── Speed Comparison Card ──
function SpeedCard() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="dark-card p-8 h-full flex flex-col min-h-[280px]">
            <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-6">Web Development</p>
            <h3 className="text-xl font-outfit font-semibold text-card-text mb-8">Load time comparison</h3>
            <div className="space-y-5 flex-grow">
                {[
                    { label: 'Industry Average', val: '3.1s', pct: 100, color: 'bg-white/20' },
                    { label: 'Your Previous Site', val: '2.4s', pct: 77, color: 'bg-white/30' },
                    { label: 'Arvo-Built Site', val: '0.4s', pct: 13, color: 'bg-accent' },
                ].map((row, i) => (
                    <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-card-muted text-xs font-mono">{row.label}</span>
                            <span className={`text-sm font-outfit font-bold ${i === 2 ? 'text-accent' : 'text-card-text/60'}`}>{row.val}</span>
                        </div>
                        <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full rounded-full ${row.color}`}
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${row.pct}%` } : { width: 0 }}
                                transition={{ delay: i * 0.15 + 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Workflow Diagram Card ──
function WorkflowCard() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    const steps = [
        { label: 'Discovery', color: 'bg-accent/20 border-accent/40 text-accent' },
        { label: 'Design', color: 'bg-white/10 border-white/20 text-card-text' },
        { label: 'Build', color: 'bg-white/10 border-white/20 text-card-text' },
        { label: 'Launch', color: 'bg-green-400/20 border-green-400/40 text-green-400' },
    ];

    return (
        <div ref={ref} className="bg-white rounded-3xl p-8 h-full flex flex-col min-h-[280px] border border-black/[0.06]">
            <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-6">Our Process</p>
            <h3 className="text-xl font-outfit font-semibold text-dark-card mb-10">From idea to live in weeks,<br /><span className="text-accent font-artistic italic">not months.</span></h3>
            <div className="flex items-center gap-2 flex-wrap">
                {steps.map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: i * 0.18 + 0.3, duration: 0.5 }}
                            className={`px-4 py-2 rounded-full border text-xs font-outfit font-semibold ${s.color}`}
                        >
                            {s.label}
                        </motion.div>
                        {i < steps.length - 1 && (
                            <motion.div
                                className="w-6 h-0.5 bg-black/10"
                                initial={{ scaleX: 0 }}
                                animate={inView ? { scaleX: 1 } : {}}
                                transition={{ delay: i * 0.18 + 0.55, duration: 0.3 }}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-auto pt-8 border-t border-black/[0.06] flex justify-between items-center">
                <span className="text-text-muted text-sm">Average delivery: <strong className="text-dark-card">3–6 weeks</strong></span>
                <div className="flex items-center gap-1 text-accent text-xs font-mono">✓ On time, every time</div>
            </div>
        </div>
    );
}

// ── Client Result Card ──
function ResultCard() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });
    const leads = useCounter(180, 1400, inView);

    return (
        <div ref={ref} className="dark-card p-8 h-full flex flex-col min-h-[280px] relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[60px] pointer-events-none" />

            <p className="text-card-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-4">Lead Generation</p>
            <h3 className="text-xl font-outfit font-semibold text-card-text mb-8">Real client results</h3>

            <div className="grid grid-cols-2 gap-4 flex-grow">
                <div className="bg-white/[0.04] rounded-2xl p-5 border border-white/[0.06]">
                    <p className="text-card-muted text-xs mb-2">Monthly Leads</p>
                    <p className="text-3xl font-outfit font-bold text-accent">+{leads}%</p>
                    <p className="text-[10px] text-card-muted mt-1">↑ from 45 to 126</p>
                </div>
                <div className="bg-white/[0.04] rounded-2xl p-5 border border-white/[0.06]">
                    <p className="text-card-muted text-xs mb-2">Cost per Lead</p>
                    <p className="text-3xl font-outfit font-bold text-green-400">−45%</p>
                    <p className="text-[10px] text-card-muted mt-1">$32 → $18</p>
                </div>
                <div className="col-span-2 bg-white/[0.04] rounded-2xl p-5 border border-white/[0.06]">
                    <p className="text-card-muted text-xs mb-2">Revenue impact</p>
                    <p className="text-4xl font-outfit font-bold text-card-text">$2.4M</p>
                    <p className="text-[10px] text-card-muted mt-1">Generated for clients in 2024</p>
                </div>
            </div>
        </div>
    );
}

// ── Main Exported Component ──
export function FeatureBento() {
    return (
        <section className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 flex flex-col md:flex-row md:items-end gap-6 justify-between"
                >
                    <div>
                        <p className="section-tag">What We Deliver</p>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-dark-card leading-[0.95]">
                            Results you can <br />
                            <span className="font-artistic text-accent italic">measure.</span>
                        </h2>
                    </div>
                    <Link to="/solutions" className="flex items-center gap-2 text-text-muted hover:text-dark-card transition-colors text-sm font-mono tracking-wider uppercase">
                        All services <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* Row 1: SEO spans 2 cols, Speed spans 1 */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SEOCard />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <SpeedCard />
                    </motion.div>

                    {/* Row 2: Workflow spans 1, Results spans 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <WorkflowCard />
                    </motion.div>
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ResultCard />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
