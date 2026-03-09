import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Zap, BarChart3, Paintbrush, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

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

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const ServicesSection = () => (
  <section className="py-28">
    <div className="container px-4">
      <SectionHeading
        badge="Services"
        title="Crafted for impact"
        description="Every solution is designed with precision—blending creative vision with technical depth."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="glass rounded-2xl p-8 gradient-card-border transition-all duration-300 flex flex-col h-[280px]"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <s.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
