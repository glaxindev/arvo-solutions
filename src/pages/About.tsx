import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, CircleCheckBig } from "lucide-react";

const featuredServices = [
  { name: "Web Development", slug: "web-dev" },
  { name: "Mobile Apps", slug: "app-dev" },
  { name: "Video Editing", slug: "video-editing" },
];

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Target, value: "150+", label: "Projects Completed" },
  { icon: CircleCheckBig, value: "99%", label: "Success Rate" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-center">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Arvo Solutions is a dynamic digital agency born from passion,
            creativity, and the desire to build something extraordinary. We
            specialize in Full-Stack Web Development, Graphic Designing, SEO,
            App Development, API Integration, Video Editing, and Custom Tech
            Solutions — all under one creative roof. Our team believes that
            innovation and execution should go hand in hand. We don’t just
            deliver projects — we deliver results that inspire.
          </p>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Driven by creativity and a love for technology, we decided to build
            a solutions-based company while still in our teenage years. What
            began as friends experimenting with ideas soon turned into Arvo
            Solutions, a brand dedicated to helping businesses, creators, and
            startups unlock their full potential in the digital world. We’ve
            grown through curiosity, late-night brainstorming, and a
            never-ending belief that age doesn’t define innovation — passion
            does.
          </p>

          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">
              Featured Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {featuredServices.map((service) => (
                <Link key={service.slug} to={`/service/${service.slug}`}>
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {service.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
