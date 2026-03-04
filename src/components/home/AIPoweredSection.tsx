import { motion } from "framer-motion";
import { Bot, Zap, Clock } from "lucide-react";

const AIPoweredSection = () => (
  <section className="py-28 relative overflow-hidden">
    {/* Distinct darker background */}
    <div className="absolute inset-0" style={{
      background: "linear-gradient(180deg, hsl(var(--background)), hsl(222 50% 5%), hsl(var(--background)))"
    }} />
    {/* Subtle glow accents */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20"
      style={{ background: "radial-gradient(ellipse, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.15), transparent 70%)" }}
    />
    <div className="absolute inset-0 grid-pattern opacity-10" />

    <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-accent mb-8 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
          <Bot size={14} />
          AI-Powered
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Every project.{" "}
          <span className="text-gradient">Powered by AI.</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          All projects are powered by AI to streamline workflows, improve efficiency, and reduce repetitive tasks — so you can focus on what matters.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {[
            { icon: Zap, label: "Automated Workflows" },
            { icon: Clock, label: "Faster Delivery" },
            { icon: Bot, label: "Smart Optimization" },
          ].map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:glow-border hover:border-primary/30 transition-all duration-300"
            >
              <f.icon size={18} className="text-accent" />
              <span className="font-display font-medium text-sm">{f.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Stat card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass rounded-2xl p-8 max-w-lg mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30" style={{
            background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.06), transparent)"
          }} />
          <p className="relative z-10">
            <span className="font-display text-4xl md:text-5xl font-bold text-gradient-teal block mb-3">
              40%
            </span>
            <span className="text-muted-foreground leading-relaxed">
              of tasks in the average business workflow can be automated with AI — saving time and reducing errors.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AIPoweredSection;
