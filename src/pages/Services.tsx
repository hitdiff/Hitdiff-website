import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Zap, BarChart3, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Custom Web Design & Development",
    desc: "Responsive, conversion-focused websites and web apps built with cutting-edge technology.",
    features: [
      "Custom React & modern framework builds",
      "Mobile-first responsive design",
      "Performance-optimized (Core Web Vitals)",
      "Built-in SEO foundations & schema markup",
      "Landing pages & funnel architecture",
      "E-commerce & membership site builds",
    ],
    examples: "Example: A local service business gets a blazing-fast website with integrated booking, lead capture forms that auto-feed into their CRM, and SEO that ranks them on page one.",
  },
  {
    icon: Zap,
    title: "CRM & Workflow Automation",
    desc: "Eliminate manual busywork. AI-powered systems that nurture leads, automate follow-ups, and manage your pipeline.",
    features: [
      "Automated lead follow-up sequences (email, SMS, voicemail drops)",
      "AI-driven pipeline management & lead scoring",
      "Client onboarding automations",
      "Appointment booking & reminder workflows",
      "Zapier, Make, & custom API integrations",
      "Real-time dashboards & performance reporting",
    ],
    examples: "Example: A sales team automates their entire follow-up pipeline—new leads get instant SMS + email, a 3-day drip sequence, and auto-assignment to reps based on lead score.",
  },
  {
    icon: BarChart3,
    title: "Structured Digital Marketing",
    desc: "Data-driven campaigns structured around your business goals with clear KPIs and measurable ROI.",
    features: [
      "Google & Meta paid ads management",
      "SEO strategy & content optimization",
      "Funnel design & conversion rate optimization",
      "Email & SMS marketing automation",
      "Analytics dashboards with real-time KPIs",
      "A/B testing & performance iteration",
    ],
    examples: "Example: An e-commerce brand gets a full-funnel strategy—top-of-funnel Meta ads, optimized landing pages, retargeting sequences, and weekly performance reports.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden gradient-card-border hover:glow-border transition-all duration-500"
    >
      <div className="p-8">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
          <service.icon size={26} className="text-primary" />
        </div>
        <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{service.desc}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          {expanded ? "Show less" : "See what's included"}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={16} />
          </motion.span>
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 space-y-4">
              <div className="border-t border-border/50 pt-5">
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                <p className="text-sm text-muted-foreground italic">{service.examples}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => (
  <div className="pt-24">
    <section className="py-28">
      <div className="container px-4">
        <SectionHeading
          badge="Services"
          title="Everything you need to grow"
          description="Lean, focused solutions built by someone who understands the full stack—from design to deployment to scale."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
    <div className="gradient-divider" />
    <section className="py-28">
      <div className="container px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Need something custom?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">Every business is unique. Let's design a solution that fits yours perfectly.</p>
        <Button variant="glow" size="lg" asChild>
          <Link to="/contact">Get a Free Consultation <ArrowRight className="ml-2" size={16} /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Services;
