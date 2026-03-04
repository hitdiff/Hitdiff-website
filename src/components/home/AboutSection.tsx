import { motion } from "framer-motion";
import { Lightbulb, Gauge, Target } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const strengths = [
  { icon: Lightbulb, label: "Design Thinking" },
  { icon: Gauge, label: "Performance Optimization" },
  { icon: Target, label: "Strategic Execution" },
];

const AboutSection = () => (
  <section className="py-28">
    <div className="container px-4">
      <SectionHeading badge="About" title="The mind behind the work" />

      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto items-center">
        {/* Profile image */}
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
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/5 flex items-center justify-center overflow-hidden">
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

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:w-2/3"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-5">
            Building digital products that <span className="text-gradient">move the needle</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            I combine creative design with deep technical expertise to build digital experiences that don't just look exceptional—they perform. Every project is approached with founder-level ownership and an obsession for results.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {strengths.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 glass rounded-lg px-4 py-2.5"
              >
                <s.icon size={16} className="text-accent" />
                <span className="text-sm font-medium">{s.label}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-lg font-display font-semibold text-gradient">
            "I don't just build websites—I engineer growth systems."
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
