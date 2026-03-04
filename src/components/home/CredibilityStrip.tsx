import { motion } from "framer-motion";
import { Palette, Code2, Gauge, Target } from "lucide-react";

const strengths = [
  { icon: Palette, label: "Design" },
  { icon: Code2, label: "Development" },
  { icon: Gauge, label: "Performance" },
  { icon: Target, label: "Strategy" },
];

const CredibilityStrip = () => (
  <section className="relative py-6 border-y border-border/30">
    <div className="absolute inset-0 bg-surface/50" />
    <div className="container relative px-4">
      <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
        {strengths.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-2.5 group cursor-default"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_-3px_hsl(var(--glow)/0.3)] transition-all duration-300">
              <s.icon size={16} className="text-primary group-hover:text-accent transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CredibilityStrip;
