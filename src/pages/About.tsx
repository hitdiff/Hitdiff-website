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
  <div className="pt-24">
    <section className="py-24">
      <div className="container px-4">
        <SectionHeading badge="About" title="The agency behind the automation" />

        {/* Photo + Text split */}
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto mb-24">
          {/* 1/3 Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 flex-shrink-0"
          >
            <div className="glass rounded-2xl p-2 glow-border">
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary">HD</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Your photo here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2/3 Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:w-2/3 glass rounded-2xl p-8 md:p-10"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-bold mb-5"
            >
              Digital systems that <span className="text-gradient">work while you sleep</span>
            </motion.h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HitDiff Digital is built on one principle: <span className="text-foreground font-medium">your business deserves systems that actually work.</span> I combine web development, AI-powered CRM automation, and digital marketing into cohesive strategies—so nothing falls through the cracks.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No bloated teams. No miscommunication. Just focused, technical execution that moves the needle. From automating your entire follow-up pipeline to building conversion-optimized websites, every solution is engineered for measurable growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's streamlining your sales pipeline, setting up AI-driven lead nurturing, or launching a full-stack marketing campaign—I handle the technical complexity so you can focus on closing deals and scaling your business.
            </p>
          </motion.div>
        </div>

        {/* Values grid */}
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
              className="glass rounded-xl p-6 text-center hover:glow-border transition-shadow duration-500"
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

    {/* Stats */}
    <section className="py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-10 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "10k+", label: "Workflows Automated" },
            { num: "98%", label: "Client Retention" },
            { num: "24h", label: "Response Time" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.num}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Let's build something <span className="text-gradient">great</span></h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">Ready to streamline your operations and grow with confidence?</p>
        <Button variant="glow" size="lg" asChild>
          <Link to="/contact">Get in Touch <ArrowRight className="ml-2" size={16} /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default About;
