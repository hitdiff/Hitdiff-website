import { motion } from "framer-motion";

const AIStatSection = () => (
  <section className="py-16 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0" style={{
      background: "linear-gradient(180deg, hsl(var(--background)), hsl(222 50% 5%), hsl(var(--background)))"
    }} />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, hsl(var(--primary) / 0.12), hsl(var(--secondary) / 0.08), transparent 70%)",
        filter: "blur(80px)",
      }}
    />
    <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

    <div className="relative z-10 px-4 text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gradient-teal">77%</span> of companies use or
          are planning to use AI to improve business outcomes.
        </motion.p>

        <motion.p
          className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          AI-driven workflows and automation are transforming modern businesses,
          improving efficiency and productivity.
        </motion.p>

      </motion.div>
    </div>
  </section>
);

export default AIStatSection;
