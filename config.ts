import {
  Code,
  Image,
  Search,
  DollarSign,
  Server,
  Film,
  Smartphone,
  Database,
  Layers,
} from "lucide-react";

export default {
  contact: {
    email: "contact@arvosolutions.pro",
    email_form: "sales@arvosolutions.pro",
    phone1: "+923003009142",
    phone2: "+923264072206",
    instagram: "https://www.instagram.com/arvosolutions/",
    facebook: "https://www.facebook.com/profile.php?id=61585306970126",
  },
  services: [
    {
      name: "Full Stack Web Dev",
      description:
        "Custom web applications built with modern technologies and best practices.",
      url: "/service/web-dev",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
      icon: Code,
    },
    {
      name: "Graphics Designing",
      description:
        "High-quality visual designs including logos, banners, and social media assets.",
      url: "/service/graphics-design",
      features: [
        "Logo & Brand Identity",
        "Social Media Creatives",
        "Print & Digital Assets",
      ],
      icon: Image,
    },
    {
      name: "Search Engine Optimization",
      description:
        "Improve your site's visibility and organic traffic with proven SEO tactics.",
      url: "/service/seo",
      features: ["Keyword Research", "On-page Optimization", "Technical SEO"],
      icon: Search,
    },
    {
      name: "Google Adsense Setup",
      description:
        "Monetize your website with optimized Google AdSense setup and placement.",
      url: "/service/adsense",
      features: ["Ad Placement", "Policy Compliance", "Revenue Optimization"],
      icon: DollarSign,
    },
    {
      name: "Web API Integration",
      description:
        "Connect and integrate third-party APIs securely and efficiently.",
      url: "/service/api-integration",
      features: [
        "REST & GraphQL",
        "OAuth & Authentication",
        "Scalable Integrations",
      ],
      icon: Server,
    },
    {
      name: "Video Editing",
      description:
        "Professional video editing for ads, tutorials, and promotional content.",
      url: "/service/video-editing",
      features: ["Cutting & Trimming", "Color Grading", "Motion Graphics"],
      icon: Film,
    },
    {
      name: "App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      url: "/service/app-dev",
      features: [
        "iOS & Android",
        "React Native / Flutter",
        "App Store Deployment",
      ],
      icon: Smartphone,
    },
    {
      name: "Data Entry & Automation",
      description:
        "Accurate data entry combined with automation to save time and reduce errors.",
      url: "/service/data-entry",
      features: [
        "Data Cleansing",
        "RPA & Scripting",
        "Excel / Sheets Automation",
      ],
      icon: Database,
    },
    {
      name: "Custom Solutions & More",
      description:
        "Tailored solutions to solve unique business problems and workflows.",
      url: "/service/custom",
      features: ["Custom Integrations", "Consulting", "Support & Maintenance"],
      icon: Layers,
    },
  ],
};
