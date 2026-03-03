import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Cpu, title: "Automation First", desc: "Every system is designed to reduce manual work and maximize output." },
  { icon: Shield, title: "Organized & Reliable", desc: "Structured processes, clear communication, and predictable delivery." },
  { icon: TrendingUp, title: "Built to Scale", desc: "Solutions that grow with you—no rebuilds, no duct tape." },
];

const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const About = () => (
  <div className="pt-24">
    <section className="py-24">
      <div className="container px-4">
        <SectionHeading badge="About" title="One agency. Full-stack execution." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 md:p-12 max-w-3xl mx-auto mb-20"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            HitDiff Digital is a solo digital agency built on one principle: <span className="text-foreground font-medium">your business deserves systems that actually work.</span>
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I combine web development, CRM automation, and digital marketing into cohesive strategies—so nothing falls through the cracks. No bloated teams. No miscommunication. Just focused, technical execution that moves the needle.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether it's building your website, automating your follow-ups, or launching a campaign—I handle the technical complexity so you can focus on what you do best.
          </p>
        </motion.div>

        <SectionHeading title="How I operate" />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container px-4 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Let's build something <span className="text-gradient">great</span></h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">Ready to streamline your operations and grow with confidence?</p>
        <Button variant="glow" size="lg" asChild>
          <Link to="/contact">Get in Touch <ArrowRight className="ml-2" size={16} /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default About;
