import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Check } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;
const projectTypes = ['Web Development', 'Brand Design', 'SEO & Growth', 'Video & Motion', 'App Development', 'Automation'];

export function ContactSection() {
  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="bg-white rounded-3xl p-16 border border-black/[0.07]"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-semibold text-dark-card mb-4 tracking-tight">Message Received!</h3>
            <p className="text-text-secondary text-lg font-light leading-relaxed">
              Thanks <span className="text-dark-card font-semibold font-artistic italic">{name}</span>.
              Our team will review your brief and get back to you within 24 hours.
            </p>
            <p className="text-text-muted text-sm font-mono mt-6">📧 Watch your inbox</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

          {/* Left: Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <p className="section-tag">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-dark-card mb-6 tracking-tighter leading-[0.95]">
              Let's build something<br />
              <span className="font-artistic text-accent italic">great together.</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-10 font-light">
              Tell us about your project. We'll come back with a clear plan,
              timeline, and quote — no obligation.
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white border border-black/[0.07] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4.5 h-4.5 text-accent" style={{ width: '1.1rem', height: '1.1rem' }} />
                </div>
                <div>
                  <p className="text-text-muted text-[10px] font-mono tracking-widest uppercase mb-0.5">Email</p>
                  <a href="mailto:contact@arvosolutions.pro" className="text-dark-card font-semibold text-sm hover:text-accent transition-colors">
                    contact@arvosolutions.pro
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white border border-black/[0.07] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-accent" style={{ width: '1.1rem', height: '1.1rem' }} />
                </div>
                <div>
                  <p className="text-text-muted text-[10px] font-mono tracking-widest uppercase mb-0.5">Location</p>
                  <span className="text-dark-card font-semibold text-sm">Pakistan · Remote Worldwide</span>
                </div>
              </div>
            </div>

            {/* Promise badges */}
            <div className="flex flex-wrap gap-2">
              {['Reply in 24hrs', 'Free Consultation', 'No Spam'].map((b, i) => (
                <span key={i} className="text-[11px] font-mono text-text-muted bg-white border border-black/[0.07] px-3 py-1.5 rounded-full">
                  ✓ {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-3xl border border-black/[0.07] p-8 md:p-10 space-y-8"
          >
            {/* Name */}
            <div>
              <label className="block text-dark-card font-semibold text-sm mb-2">Your Name <span className="text-accent">*</span></label>
              <input
                type="text"
                placeholder="e.g. John Smith or Acme Corp"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full bg-cream border border-black/[0.08] rounded-xl px-4 py-3.5 text-dark-card text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
              />
            </div>

            {/* Project type */}
            <div>
              <label className="block text-dark-card font-semibold text-sm mb-3">What do you need? <span className="text-accent">*</span></label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`px-4 py-2 rounded-full border text-xs font-semibold tracking-tight transition-all duration-300 ${projectType === type
                        ? 'bg-accent text-white border-accent shadow-md shadow-accent/20'
                        : 'border-black/[0.1] text-dark-card/70 hover:border-accent/50 hover:text-accent bg-cream'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <label className="block text-dark-card font-semibold text-sm mb-2">Tell us about your project</label>
              <textarea
                placeholder="Describe your goals, timeline, or any specific requirements..."
                value={details}
                onChange={e => setDetails(e.target.value)}
                rows={4}
                className="w-full bg-cream border border-black/[0.08] rounded-xl px-4 py-3.5 text-dark-card text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 rounded-xl text-base flex items-center justify-center gap-3"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>

            <p className="text-center text-text-muted text-[11px] font-mono">
              We respond within 24 hours · No spam ever
            </p>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
