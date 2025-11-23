import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Clock,
  CircleCheckBig,
  Users,
  Zap,
  MessageCircle,
  Send,
} from "lucide-react";
// import { toast } from "sonner";
import config from "../../config.ts";

const stats = [
  { value: "24/7", label: "Support", icon: Clock },
  { value: "1h", label: "Response Time", icon: Zap },
  { value: "100+", label: "Clients Served", icon: Users },
  { value: "99%", label: "Success Rate", icon: CircleCheckBig },
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: config.contact.email,
  },
  {
    icon: Phone,
    title: "Phone 1",
    content: config.contact.phone1,
  },
  {
    icon: Phone,
    title: "Phone 2",
    content: config.contact.phone2,
  },
  {
    icon: MessageCircle,
    title: "Whatsapp",
    content: "Click To Chat",
    redirect: `https://wa.me/${config.contact.phone1}`,
  },
];

const Contact = () => {
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast.success("Message sent successfully! We'll get back to you soon.");
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 1000);
  // };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 inline-block mb-4">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              <span className="text-foreground">Let’s Create Something</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Incredible, Together
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let’s discuss how we can help bring your
              vision to life. Our team is ready to create something that truly
              stands out.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-primary mb-1">
                  <stat.icon className="inline-block mr-2 h-6 w-6" />
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  href={info?.redirect}
                  target="_blank"
                  key={index}
                  className="group bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:scale-105 flex items-start gap-4"
                >
                  <div
                    className={`p-3 rounded-lg ${
                      info.title === "Whatsapp"
                        ? "bg-green-100 group-hover:bg-green-200"
                        : "bg-primary/10 group-hover:bg-primary/20"
                    } transition-colors`}
                  >
                    {info.title === "Whatsapp" ? (
                      <info.icon className="h-6 w-6 text-green-600" />
                    ) : (
                      <info.icon className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p
                      className={`${
                        info.title === "Whatsapp"
                          ? "text-green-600"
                          : "text-muted-foreground"
                      } text-md`}
                    >
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <form
                // onSubmit={handleSubmit}
                className="space-y-6"
                action={`https://formsubmit.co/${config.contact.email_form}`}
                method="POST"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="_subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
