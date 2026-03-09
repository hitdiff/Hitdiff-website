import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Paintbrush, Code2, Zap, BarChart3 } from "lucide-react";
import FeaturedWork from "@/components/home/FeaturedWork";

const services = [
  {
    icon: Paintbrush,
    title: "Brand & UI Design",
    desc: "Striking visual identities and interfaces that command attention and build trust instantly.",
    features: [
      "Custom brand identity & visual systems",
      "High-fidelity UI/UX design",
      "Responsive web & mobile design",
      "Design system creation & documentation",
      "Conversion-focused landing pages",
    ],
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom-built, lightning-fast websites and apps engineered for conversion and scale.",
    features: [
      "Custom full-stack web applications",
      "Performance-optimized static & dynamic sites",
      "API design & third-party integrations",
      "SEO-ready architecture & metadata",
      "Hosting, deployment & ongoing support",
    ],
  },
  {
    icon: Zap,
    title: "CRM & Automation",
    desc: "AI-powered workflows that automate follow-ups, nurture leads, and eliminate busywork.",
    features: [
      "Automated lead follow-up sequences",
      "CRM setup, migration & optimization",
      "Pipeline automation & task routing",
      "Email & SMS drip campaigns",
      "Analytics dashboards & reporting",
    ],
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    desc: "Data-driven campaigns structured around your business goals with clear KPIs and measurable ROI.",
    features: [
      "Google & Meta paid ads management",
      "SEO strategy & content optimization",
      "Funnel design & conversion rate optimization",
      "Email & SMS marketing automation",
      "Analytics dashboards with real-time KPIs",
      "A/B testing & performance iteration",
    ],
  },
];

const CARD_MIN_H = "min-h-[320px]";

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.12 } }}
      className={`glass rounded-2xl gradient-card-border hover:shadow-[0_0_30px_-8px_hsl(var(--glow)/0.25)] transition-all duration-200 overflow-hidden flex flex-col ${CARD_MIN_H}`}
    >
      <div className="p-8 flex flex-col flex-1">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <service.icon size={24} className="text-accent" />
        </div>
        <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200 mt-6"
        >
          {open ? "Hide features" : "Key features"}
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={16} />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-2 border-t border-border/30">
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => (
  <div className="pt-24 relative">
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
    </div>

    <section className="py-12 pb-6">
      <div className="container px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
            Services
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            What I <span className="text-gradient">Build</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            End-to-end digital solutions designed to save time, drive growth, and stand out.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-start">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>

    <FeaturedWork />

    <section className="py-20">
      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's discuss your project and find the right solution.
          </p>
          <Button variant="glow" size="lg" asChild>
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Services;
