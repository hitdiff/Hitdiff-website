import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AIStatSection = () => (
  <section className="py-12">
    <div className="container px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, hsl(var(--accent) / 0.08), transparent 60%), radial-gradient(ellipse at 80% 50%, hsl(var(--primary) / 0.06), transparent 60%)",
          }}
        />

        <div className="relative z-10 flex-1 min-w-0">
          <p className="font-display text-base md:text-lg font-semibold leading-snug mb-2">
            <span className="text-gradient-teal" style={{ textShadow: "0 0 20px hsl(var(--accent) / 0.3)" }}>
              77%
            </span>{" "}
            of companies use or are planning to use AI to improve business outcomes.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-driven workflows and automation help businesses save time, reduce repetitive tasks, and boost efficiency.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0">
          <Button variant="glow" size="sm" asChild>
            <Link to="/services">
              Learn How <ArrowRight className="ml-1.5" size={13} />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AIStatSection;
