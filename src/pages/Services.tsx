import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Zap, BarChart3, ArrowRight, Globe, Workflow, Target } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Custom Web Design & Development",
    desc: "Responsive, conversion-focused websites and web apps built with cutting-edge technology. Fast, SEO-ready, and designed to make an impression.",
    features: ["React & Modern Frameworks", "Mobile-First Design", "Performance Optimized", "SEO Foundations"],
  },
  {
    icon: Zap,
    title: "CRM & Workflow Automation",
    desc: "Eliminate manual busywork. I build automated systems that nurture leads, manage clients, and keep your operations running like clockwork.",
    features: ["Pipeline Automation", "Follow-Up Sequences", "Client Dashboards", "Zapier & API Integrations"],
  },
  {
    icon: BarChart3,
    title: "Structured Digital Marketing",
    desc: "No guesswork. Data-driven campaigns structured around your business goals with clear KPIs and reporting.",
    features: ["Paid Ads Management", "SEO & Content Strategy", "Funnel Architecture", "Analytics & Reporting"],
  },
];

const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Services = () => (
  <div className="pt-24">
    <section className="py-24">
      <div className="container px-4">
        <SectionHeading
          badge="Services"
          title="Everything you need to grow"
          description="Lean, focused solutions built by one person who understands the full stack—from design to deployment to scale."
        />

        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:glow-border transition-shadow duration-500"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon size={26} className="text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span key={f} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container px-4 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Need something custom?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">Every business is unique. Let's design a solution that fits yours perfectly.</p>
        <Button variant="glow" size="lg" asChild>
          <Link to="/contact">Get a Free Consultation <ArrowRight className="ml-2" size={16} /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Services;
