import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => (
  <section className="py-32">
    <div className="container px-4">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-5/12 flex-shrink-0"
        >
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl" style={{
              background: "radial-gradient(ellipse, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.1), transparent 70%)"
            }} />
            {/* Glassmorphism card */}
            <div className="relative glass rounded-3xl p-3 shadow-2xl">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-24 h-24 rounded-full bg-primary/15 mx-auto flex items-center justify-center border border-primary/20">
                    <span className="font-display text-3xl font-bold text-primary">HD</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Your photo here</p>
                </div>
              </div>
            </div>
            {/* Accent corner glow */}
            <div className="absolute -bottom-3 -right-3 w-32 h-32 rounded-full blur-3xl opacity-30"
              style={{ background: "hsl(var(--accent))" }}
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:w-7/12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
            About
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The mind behind{" "}
            <span className="text-gradient">the work</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I help businesses save time, avoid confusion, and execute projects faster — powered by AI and modern digital strategies.
          </p>

          {/* Highlighted stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass rounded-2xl p-6 mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-40" style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--secondary) / 0.06), transparent)"
            }} />
            <p className="relative z-10">
              <span className="font-display text-3xl md:text-4xl font-bold text-gradient block mb-2">
                Up to 30%
              </span>
              <span className="text-muted-foreground text-sm leading-relaxed">
                of work hours are lost each week due to unclear processes and repetitive tasks.
              </span>
            </p>
          </motion.div>

          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Powered by AI
          </p>

          <Button variant="glow" size="lg" asChild>
            <Link to="/about">
              Learn More <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
