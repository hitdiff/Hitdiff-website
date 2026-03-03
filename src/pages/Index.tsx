import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BarChart3, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    icon: Code2,
    title: "Web Design & Development",
    desc: "Custom, high-performance websites built with modern frameworks to convert visitors into clients.",
  },
  {
    icon: Zap,
    title: "CRM & Workflow Automation",
    desc: "Automated pipelines, follow-ups, and client management that run while you sleep.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Execution",
    desc: "Structured campaigns with measurable KPIs—SEO, ads, and funnels that actually perform.",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float" />

      <div className="container relative z-10 px-4 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto">
            Digital innovation that{" "}
            <span className="text-gradient">hits different</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered CRM, workflow automation, and digital growth—on autopilot.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services preview */}
    <section className="py-24">
      <div className="container px-4">
        <SectionHeading
          badge="What I Do"
          title="Systems that scale your business"
          description="From custom builds to full automation stacks—every solution is engineered for growth."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group glass rounded-xl p-8 hover:glow-border transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container px-4">
        <div className="glass rounded-2xl p-12 md:p-16 text-center glow-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to hit <span className="text-gradient">different</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's build systems that work harder than you do. Book a free strategy call today.
          </p>
          <Button variant="glow" size="lg" asChild>
            <Link to="/contact">
              Let's Talk <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
