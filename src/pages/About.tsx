import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, Workflow, BarChart3, Globe } from "lucide-react";

const caseStudies = [
  {
    result: "90% Efficiency Increase",
    desc: "Automated intake and reporting for a growing agency, cutting manual work from 20 hrs/week to 2.",
    category: "Workflow Automation",
    icon: Workflow,
    color: "from-primary/20 to-secondary/20",
  },
  {
    result: "3x Revenue Growth",
    desc: "Built a full-stack platform with AI-driven lead scoring that tripled qualified pipeline in 6 months.",
    category: "Full-Stack Platform",
    icon: BarChart3,
    color: "from-secondary/20 to-accent/10",
  },
  {
    result: "50% Faster Go-to-Market",
    desc: "End-to-end e-commerce build with integrated marketing automation, launched in half the expected timeline.",
    category: "E-Commerce & Marketing",
    icon: Globe,
    color: "from-accent/10 to-primary/20",
  },
];

const About = () => (
  <div className="pt-24 relative">
    {/* Background */}
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-background" />
    </div>

    {/* Hero */}
    <section className="relative py-[100px] overflow-hidden">
      {/* Deep black bg with subtle navy radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 65% 50%, hsl(222 50% 12% / 0.8), hsl(var(--background)) 70%)",
        }}
      />

      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
          {/* Left — Founder image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-5/12 flex-shrink-0"
          >
            <div className="relative">
              {/* Electric blue outer glow */}
              <div
                className="absolute -inset-5 rounded-3xl blur-2xl opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse, hsl(var(--primary) / 0.4), transparent 70%)",
                }}
              />
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/25 shadow-[0_0_40px_-8px_hsl(var(--primary)/0.35)]">
                <img
                  src="/Founder.png"
                  alt="Founder"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:w-7/12"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              The Human Edge Behind{" "}
              <span className="text-gradient">the AI.</span>
            </h1>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                I started HitDiff because I kept seeing the same problem —
                talented business owners spending their best hours on tasks a
                system could handle in seconds. Not because they didn't care,
                but because nobody had ever built them the right
                infrastructure.{" "}
              </p>
              <p>
                HitDiff exists to change that. Building end-to-end digital
                systems — websites, CRM pipelines, marketing and AI-powered
                automations — that do the repetitive work so you can focus on
                actually growing. No bloated agency overhead, no cookie-cutter
                solutions. Just clean, intentional systems built around how your
                business actually operates.
              </p>
              <p>
                Outside of the work, I'm someone who's always chasing new
                experiences. Over the past couple of years I've travelled Latin
                America — 7 countries, countless cities, and lessons that no
                classroom could ever replicate. I didn't just visit these
                places, I immersed myself in them — learning the culture,
                connecting with locals, and deepening my Spanish along the way.
                That time completely shifted how I see the world and how I
                approach building relationships with people. When
                I'm back home you'll find me playing sports, trying
                something new or exploring. That drive to immerse myself, figure
                things out, and keep moving forward didn't stay on the road — it
                came back with me and sits at the core of everything I build at
                HitDiff.
              </p>
            </div>

            <p className="italic text-muted-foreground text-base">
              — Elijah Hwang
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real-world applications of the hitdiff methodology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.result}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-border/40 hover:border-primary/50 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] transition-all duration-500">
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${study.color} flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 grid-pattern opacity-10" />
                  <div className="text-center space-y-2 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur flex items-center justify-center mx-auto">
                      <study.icon size={20} className="text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">
                      {study.category}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors">
                    {study.result}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {study.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <div className="gradient-divider" />
    <section className="py-28">
      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Have a project in mind? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
