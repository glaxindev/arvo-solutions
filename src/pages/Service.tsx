import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadySection from "@/components/ReadySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Database, DollarSign, Film, LucideIcon } from "lucide-react";
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  TrendingUp,
  Cog,
} from "lucide-react";

const serviceData: Record<
  string,
  {
    category: string;
    title1: string;
    title2?: string;
    description: string;
    icon: LucideIcon;
    features: Array<{
      title: string;
      description: string;
    }>;
  }
> = {
  "web-dev": {
    category: "Development",
    title1: "Full-Stack",
    title2: "Web Development",
    description:
      "We design and develop responsive, high-performance websites using the latest frameworks. From frontend design to backend logic — we handle it all.",
    icon: Code,
    features: [
      {
        title: "Responsive Design",
        description:
          "Mobile-first approach ensuring perfect display across all devices and screen sizes.",
      },
      {
        title: "Modern Technologies",
        description:
          "Built with React, Next.js, and other cutting-edge frameworks for optimal performance.",
      },
      {
        title: "SEO Optimization",
        description:
          "Search engine optimized from the ground up to maximize your online visibility.",
      },
      {
        title: "Performance Focused",
        description:
          "Lightning-fast load times and smooth interactions for better user engagement.",
      },
    ],
  },
  "app-dev": {
    category: "Development",
    title1: "Mobile",
    title2: "App Development",
    description:
      "We build powerful, intuitive apps for Android and iOS that deliver a smooth and engaging user experience.",
    icon: Smartphone,
    features: [
      {
        title: "Cross-Platform Development",
        description:
          "Single codebase for both iOS and Android, reducing development time and costs.",
      },
      {
        title: "Native Performance",
        description:
          "Optimized for speed and responsiveness with native-like performance.",
      },
      {
        title: "App Store Ready",
        description:
          "Complete support for app store submission and compliance requirements.",
      },
      {
        title: "Offline Functionality",
        description:
          "Smart caching and offline capabilities for uninterrupted user experience.",
      },
    ],
  },
  "graphics-design": {
    category: "Media",
    title1: "Graphics",
    title2: "Designing",
    description:
      "Creative visuals that speak your brand’s language — logos, banners, thumbnails, social media posts, and everything in between.",
    icon: Palette,
    features: [
      {
        title: "Brand Identity",
        description:
          "Unique logos and branding materials that set you apart from the competition.",
      },
      {
        title: "Social Media Creatives",
        description:
          "Eye-catching designs tailored for maximum engagement on all platforms.",
      },
      {
        title: "Print & Digital Assets",
        description:
          "High-resolution graphics for both online and offline use, ensuring consistency everytime.",
      },
      {
        title: "Custom Illustrations",
        description:
          "Bespoke artwork and illustrations to enhance your brand’s visual storytelling.",
      },
    ],
  },
  adsense: {
    category: "Revenue",
    title1: "Google",
    title2: "AdSense Setup",
    description:
      "Monetize smarter! From AdSense approval to ad optimization — we handle everything that drives clicks and conversions.",
    icon: DollarSign,
    features: [
      {
        title: "Ad Placement",
        description:
          "Strategic ad placements designed to maximize visibility and click-through rates.",
      },
      {
        title: "Policy Compliance",
        description:
          "Ensuring your site meets all Google AdSense policies for smooth approval and operation.",
      },
      {
        title: "Revenue Optimization",
        description:
          "Continuous monitoring and tweaking to boost your ad revenue over time.",
      },
      {
        title: "Performance Tracking",
        description:
          "Detailed analytics to track ad performance and make data-driven decisions.",
      },
    ],
  },
  seo: {
    category: "Digital Marketing",
    title1: "Search",
    title2: "Engine Optimization",
    description:
      "Rank higher. Get seen. Stay ahead. We offer full Google & YouTube SEO strategies to grow your visibility organically.",
    icon: TrendingUp,
    features: [
      {
        title: "SEO & SEM",
        description:
          "Comprehensive search engine optimization and marketing to boost visibility.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Strategic social media campaigns to engage your audience and build brand awareness.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Detailed analytics and insights to measure and optimize campaign performance.",
      },
      {
        title: "Content Strategy",
        description:
          "Compelling content that resonates with your audience and drives conversions.",
      },
    ],
  },
  "api-integration": {
    category: "Development",
    title1: "Web",
    title2: "API Integration",
    description:
      "Connect your digital systems seamlessly. Whether it’s payment gateways or third-party apps — we make integration effortless.",
    icon: Cloud,
    features: [
      {
        title: "REST & GraphQL",
        description:
          "Expert integration of RESTful and GraphQL APIs for flexible data access.",
      },
      {
        title: "OAuth & Authentication",
        description:
          "Secure authentication mechanisms to protect user data and ensure safe API interactions.",
      },
      {
        title: "Scalable Integrations",
        description:
          "Robust solutions designed to grow with your business needs and handle increasing loads.",
      },
      {
        title: "Custom API Development",
        description:
          "Tailored API solutions to meet unique business requirements and workflows.",
      },
    ],
  },
  "video-editing": {
    category: "Media",
    title1: "Professional",
    title2: "Video Editing",
    description:
      "Professional-grade editing for YouTube, ads, and short-form content. We mix storytelling with visuals that grab attention.",
    icon: Film,
    features: [
      {
        title: "Cutting & Trimming",
        description:
          "Precise editing to create a seamless flow and maintain viewer engagement.",
      },
      {
        title: "Color Grading",
        description:
          "Enhancing visual aesthetics through professional color correction and grading.",
      },
      {
        title: "Motion Graphics",
        description:
          "Dynamic animations and graphics to elevate your video content.",
      },
      {
        title: "Sound Design",
        description:
          "High-quality audio mixing and sound effects to complement your visuals.",
      },
    ],
  },
  "data-entry": {
    category: "Automation",
    title1: "Data Entry &",
    title2: "Automation",
    description:
      "From organizing information to automating repetitive tasks — we help businesses stay efficient and accurate.",
    icon: Database,
    features: [
      {
        title: "Data Cleansing",
        description:
          "Ensuring data accuracy and consistency through thorough cleansing processes.",
      },
      {
        title: "RPA & Scripting",
        description:
          "Implementing Robotic Process Automation and custom scripts to streamline workflows.",
      },
      {
        title: "Excel / Sheets Automation",
        description:
          "Automating data handling in spreadsheets to save time and reduce errors.",
      },
      {
        title: "Database Management",
        description:
          "Efficient organization and management of databases for easy access and retrieval.",
      },
    ],
  },
  custom: {
    category: "Custom Solutions",
    title1: "Customized",
    title2: "Solutions",
    description:
      "Got a unique challenge? We love those. Our team designs tailored solutions to match your exact business needs.",
    icon: Cog,
    features: [
      {
        title: "Custom Development",
        description:
          "Bespoke software solutions built from scratch to meet your exact requirements.",
      },
      {
        title: "System Integration",
        description:
          "Seamless integration with existing systems and third-party services.",
      },
      {
        title: "Ongoing Maintenance",
        description:
          "Continuous support and updates to keep your software running smoothly.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Future-proof solutions designed to grow with your business.",
      },
    ],
  },
};

const Service = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <Link to="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Go Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 inline-flex items-center gap-2 whitespace-nowrap mb-4">
              <ServiceIcon className="h-4 w-4" />
              <span>{service.category}</span>
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-foreground">
                {service.title1}{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  {service.title2}
                </span>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/#services">
                <Button size="lg" variant="outline" className="border-border">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Check className="h-5 w-5 text-primary mt-1" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground ml-8">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReadySection />
      <Footer />
    </div>
  );
};

export default Service;
