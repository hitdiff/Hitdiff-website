import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AIStatSection = () => (
  <section className="py-28 relative overflow-hidden">
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

    <div className="container relative z-10 px-4 text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gradient-teal">77%</span> of companies use or
          are planning to use AI to improve business outcomes.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          AI-driven workflows and automation are transforming modern businesses,
          improving efficiency and productivity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button variant="glow" size="lg" asChild>
            <Link to="/services">
              Learn How <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AIStatSection;
