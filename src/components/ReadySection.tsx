import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ReadySection = () => {
  return (
    <section
      id="ready"
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--ready-bg))" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's work together to bring your vision to life with cutting-edge
          technology and innovative solutions
        </p>
        <Link to="/contact">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ReadySection;
