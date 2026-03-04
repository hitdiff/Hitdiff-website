import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, TrendingUp, Rocket, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Cpu, title: "Automation First", desc: "Every system is designed to reduce manual work and maximize output." },
  { icon: Shield, title: "Organized & Reliable", desc: "Structured processes, clear communication, and predictable delivery." },
  { icon: TrendingUp, title: "Built to Scale", desc: "Solutions that grow with you—no rebuilds, no duct tape." },
  { icon: Rocket, title: "Fast Execution", desc: "No committees, no delays. Direct communication and rapid iteration." },
  { icon: Target, title: "Results-Driven", desc: "Every decision is measured against your bottom line and growth goals." },
  { icon: Users, title: "Client-Centric", desc: "Your success is the metric. Dashboards, reports, and full transparency." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const About = () => (
  <div className="pt-24 relative">
    {/* Background */}
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
        style={{ background: "hsl(217 91% 60% / 0.3)", animation: "mesh-move 20s ease-in-out infinite" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
        style={{ background: "hsl(263 70% 58% / 0.25)", animation: "mesh-move 25s ease-in-out infinite reverse" }} />
    </div>

    <section className="py-28">
      <div className="container px-4">
        <SectionHeading badge="About" title="The agency behind the automation" />

        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/20 blur-sm" />
              <div className="relative glass rounded-2xl p-2">
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/5 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-primary">HD</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Your photo here</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:w-2/3 glass rounded-2xl p-8 md:p-10"
          >
            <h3 className="font-display text-2xl font-bold mb-5">
              Digital systems that <span className="text-gradient">work while you sleep</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HitDiff Digital is built on one principle: <span className="text-foreground font-medium">your business deserves systems that actually work.</span> I combine web development, AI-powered CRM automation, and digital marketing into cohesive strategies—so nothing falls through the cracks.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No bloated teams. No miscommunication. Just focused, technical execution that moves the needle.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's streamlining your sales pipeline, setting up AI-driven lead nurturing, or launching a full-stack marketing campaign—I handle the technical complexity so you can focus on scaling.
            </p>
          </motion.div>
        </div>

        <SectionHeading title="How I operate" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-6 text-center gradient-card-border hover:glow-border transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <div className="gradient-divider" />

    <section className="py-28">
      <div className="container px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Let's build something <span className="text-gradient">great</span></h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">Ready to streamline your operations and grow with confidence?</p>
        <Button variant="glow" size="lg" asChild>
          <Link to="/contact">Get in Touch <ArrowRight className="ml-2" size={16} /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default About;
