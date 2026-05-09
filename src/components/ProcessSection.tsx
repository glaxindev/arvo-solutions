import { motion } from 'framer-motion';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';
import { Magnetic } from './Magnetic';

const easeOut = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We dive deep into your brand, understanding your goals and identifying growth opportunities in the digital space.',
    icon: <Search className="w-5 h-5 text-accent" />,
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'Our team brainstorms and develops unique creative concepts tailored to resonate with your target audience.',
    icon: <Lightbulb className="w-5 h-5 text-accent" />,
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We craft stunning visuals and intuitive interfaces, ensuring every pixel meticulously serves your brand identity.',
    icon: <PenTool className="w-5 h-5 text-accent" />,
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Deploying your digital masterpiece to the world with full optimization, tracking, and support for long-term success.',
    icon: <Rocket className="w-5 h-5 text-accent" />,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-32 md:py-48 bg-transparent overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header hub */}
        <motion.div
          className="mb-24 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="section-tag mb-6">Our Workflow</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white leading-tight mb-8">
            The path to digital <br />
            <span className="font-artistic text-accent">authority.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-lg font-light">
            A collaborative journey from concept to conversion. We blend technical 
            clarity with creative risk to build masterpieces that scale.
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: easeOut }}
              className="glass p-10 group relative h-full rounded-2xl flex flex-col"
            >
              {/* Step indicator with Magnetic */}
              <div className="flex justify-between items-start mb-12">
                <Magnetic strength={0.25}>
                  <div className="w-12 h-12 bg-accent/5 border border-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent transition-all duration-500">
                      {step.icon}
                  </div>
                </Magnetic>
                <span className="font-mono text-[10px] text-text-muted tracking-[0.3em] font-semibold">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-5 tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-base leading-relaxed mb-8 font-light flex-grow">
                {step.description}
              </p>

              {/* Technical Marker */}
              <div className="pt-8 border-t border-white/[0.03]">
                  <span className="text-[9px] font-mono text-accent/50 tracking-widest uppercase">System_Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
