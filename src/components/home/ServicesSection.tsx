import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Zap, BarChart3, Paintbrush, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Paintbrush,
    title: "Brand & UI Design",
    desc: "Striking visual identities and interfaces that command attention and build trust instantly.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom-built, lightning-fast websites and apps engineered for conversion and scale.",
  },
  {
    icon: Zap,
    title: "CRM & Automation",
    desc: "AI-powered workflows that automate follow-ups, nurture leads, and eliminate busywork.",
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    desc: "Data-driven campaigns with clear KPIs—SEO, ads, and funnels that deliver measurable ROI.",
  },
];

const ServicesSection = () => (
  <section className="py-28">
    <div className="container px-4">
      <div className="flex flex-col gap-5 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group glass rounded-2xl p-8 flex items-center gap-8 gradient-card-border hover:shadow-[0_0_30px_-8px_hsl(var(--glow)/0.3)] transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
              <s.icon size={24} className="text-primary group-hover:text-accent transition-colors duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center mt-14"
      >
        <Button variant="outline" size="lg" asChild className="border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300">
          <Link to="/services">
            View All Services <ArrowRight className="ml-2" size={16} />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
