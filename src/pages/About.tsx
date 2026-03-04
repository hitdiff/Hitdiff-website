import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Lightbulb, Globe } from "lucide-react";

const strengths = [
  { icon: Brain, title: "Technical Problem Solving", desc: "Breaking down complex challenges into elegant, scalable solutions." },
  { icon: Lightbulb, title: "Creative Strategy", desc: "Blending analytical thinking with fresh ideas for unique outcomes." },
  { icon: Globe, title: "Cross-Cultural Communication", desc: "Connecting across languages and backgrounds to deliver clarity." },
];

const About = () => (
  <div className="pt-24 relative">
    {/* Background */}
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
    </div>

    {/* Hero */}
    <section className="py-20">
      <div className="container px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
            About
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold">
            About <span className="text-gradient">Elijah</span>
          </h1>
        </motion.div>
      </div>
    </section>

    {/* Photo + Bio */}
    <section className="py-16">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-5/12 flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl" style={{
                background: "radial-gradient(ellipse, hsl(var(--primary) / 0.25), hsl(var(--secondary) / 0.12), transparent 70%)"
              }} />
              <div className="relative glass rounded-3xl p-3 shadow-2xl">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 grid-pattern opacity-10" />
                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-28 h-28 rounded-full bg-primary/15 mx-auto flex items-center justify-center border border-primary/20">
                      <span className="font-display text-4xl font-bold text-primary">E</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Your photo here</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-32 h-32 rounded-full blur-3xl opacity-30" style={{ background: "hsl(var(--accent))" }} />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:w-7/12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Building at the intersection of{" "}
              <span className="text-gradient">creativity & code</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              I hold a degree in Computer Science, combining technical knowledge with creative problem-solving. I've always been passionate about sports — golf, soccer, and basketball — which teach me strategy, teamwork, and focus. Traveling and exploring new cultures inspires my work, giving me fresh perspectives and creative ideas. I also enjoy connecting with people across languages and backgrounds, which helps me communicate complex ideas clearly and build meaningful solutions.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Let's Work Together <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Strengths */}
    <section className="py-24 relative">
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, hsl(var(--background)), hsl(222 50% 5%), hsl(var(--background)))"
      }} />
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Core <span className="text-gradient-teal">Strengths</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass rounded-2xl p-8 gradient-card-border hover:shadow-[0_0_30px_-8px_hsl(var(--glow)/0.25)] transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <s.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
            <Button variant="outline" size="lg" asChild className="border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
