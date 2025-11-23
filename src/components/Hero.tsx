import { Button } from "@/components/ui/button";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  "Web Development",
  "Graphics Designing",
  "API Integration",
  "App Development",
  "Video Editing & More",
];

const Hero = () => {
  return (
    <section id="#" className="pt-40 pb-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Top Digital Solutions Provider
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Empowering Ideas.
              </span>
              <br />
              <span className="text-foreground">
                Building Digital Masterpieces
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              We turn your ideas into powerful digital experiences, from
              stunning websites to strategic SEO, from custom apps to
              eye-catching designs. We are not just a service provider, we are
              your creative tech partner for everything digital.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="/#services">
                <Button size="lg" variant="outline" className="border-border">
                  View Solutions
                </Button>
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:ml-auto animate-slide-up w-full lg:w-auto">
            <div className="bg-card border border-border rounded-2xl p-10 space-y-5 transition duration-300 hover:scale-[1.02] lg:min-w-[500px]">
              <h3 className="text-2xl font-semibold text-foreground mb-6 md:text-3xl">
                What We Offer
              </h3>
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <CircleCheckBig className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
