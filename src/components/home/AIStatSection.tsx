import { motion } from "framer-motion";

const AIStatSection = () => (
  <section className="relative overflow-hidden" style={{ background: "#020617", padding: "120px 0" }}>
    {/* Top gradient border */}
    <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #00f2ff 40%, #00f2ff 60%, transparent)" }} />
    {/* Bottom gradient border */}
    <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #00f2ff 40%, #00f2ff 60%, transparent)" }} />

    {/* Dot grid pattern */}
    <div className="absolute inset-0 opacity-[0.07]" style={{
      backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }} />

    <div className="relative z-10 px-4 text-center max-w-3xl mx-auto">
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="font-body text-xl md:text-2xl lg:text-[1.75rem] font-semibold leading-relaxed text-foreground/90">
          <span
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: "#00f2ff", textShadow: "0 0 20px rgba(0,242,255,0.5), 0 0 40px rgba(0,242,255,0.25)" }}
          >
            77%
          </span>{" "}
          of companies use or are planning to use AI to improve business outcomes.
        </p>


        <motion.cite
          className="block not-italic text-xs tracking-[0.25em] uppercase font-mono text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          — 2026 Industry Insight
        </motion.cite>
      </motion.blockquote>
    </div>
  </section>
);

export default AIStatSection;
