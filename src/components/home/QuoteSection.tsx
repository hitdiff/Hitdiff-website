import { motion } from "framer-motion";

const QuoteSection = () => (
  <section className="relative overflow-hidden" style={{ background: "#050510" }}>
    {/* Top glow border */}
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #00d2ff 40%, #00d2ff 60%, transparent)" }} />
    {/* Bottom glow border */}
    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #00d2ff 40%, #00d2ff 60%, transparent)" }} />

    {/* Scanline overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)",
    }} />

    {/* Grain texture */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
    }} />

    <div className="relative z-10 px-4 py-[100px] max-w-3xl mx-auto text-center">
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <p className="font-display text-xl md:text-2xl lg:text-[1.7rem] font-semibold leading-relaxed text-foreground/90">
          "Most businesses treat AI as a future goal; the ones winning today treat it as a foundational utility. With AI-driven workflows reducing operational costs by up to{" "}
          <span
            className="font-bold"
            style={{ color: "#00d2ff", textShadow: "0 0 20px rgba(0,210,255,0.5), 0 0 40px rgba(0,210,255,0.2)" }}
          >
            30%
          </span>
          , every manual hour spent on a repeatable task is a direct tax on your growth."
        </p>

        <motion.cite
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="block not-italic text-xs tracking-[0.25em] uppercase font-mono"
          style={{ color: "rgba(0,210,255,0.5)" }}
        >
          — 2026 Industry Insight
        </motion.cite>
      </motion.blockquote>
    </div>
  </section>
);

export default QuoteSection;
