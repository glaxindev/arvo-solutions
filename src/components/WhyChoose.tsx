import { Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Reliable",
    description:
      "Lightning-fast solutions that scale with your business needs. We prioritize performance and reliability in every project.",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description:
      "Enterprise-grade security measures to protect your data and ensure compliance with industry standards.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Experienced professionals dedicated to delivering exceptional results and providing ongoing support.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Arvo Solutions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver
            solutions that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
