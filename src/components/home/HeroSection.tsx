import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated gradient mesh */}
    <div className="absolute inset-0 gradient-mesh" />
    <div className="absolute inset-0 grid-pattern opacity-15" />

    {/* Animated orbs */}
    {[
      { top: "15%", left: "10%", size: 600, color: "var(--primary)", delay: 0, duration: 22 },
      { top: "60%", left: "65%", size: 500, color: "var(--secondary)", delay: 3, duration: 26 },
      { top: "40%", left: "40%", size: 400, color: "var(--accent)", delay: 6, duration: 19 },
      { top: "70%", left: "20%", size: 350, color: "var(--primary)", delay: 9, duration: 24 },
    ].map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          top: orb.top,
          left: orb.left,
          width: orb.size,
          height: orb.size,
          background: `radial-gradient(circle, hsl(${orb.color} / 0.18), transparent 70%)`,
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 40, -30, 20, 0],
          y: [0, -30, 20, -15, 0],
          scale: [1, 1.08, 0.95, 1.03, 1],
        }}
        transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
      />
    ))}

    {/* Floating shapes */}
    {[
      { top: "18%", right: "12%", size: "w-24 h-24", border: "border-primary/15", rounded: "rounded-3xl", rotate: 12, delay: 0 },
      { top: "65%", left: "8%", size: "w-20 h-20", border: "border-secondary/15", rounded: "rounded-full", rotate: -8, delay: 2.5 },
      { top: "50%", right: "20%", size: "w-14 h-14", border: "border-accent/20", rounded: "rounded-xl", rotate: 45, delay: 4 },
      { top: "30%", left: "18%", size: "w-10 h-10", border: "border-primary/10", rounded: "rounded-lg", rotate: 20, delay: 1.5 },
      { top: "80%", right: "30%", size: "w-16 h-16", border: "border-secondary/10", rounded: "rounded-2xl", rotate: -15, delay: 3 },
    ].map((s, i) => (
      <motion.div
        key={i}
        className={`absolute ${s.size} border ${s.border} ${s.rounded}`}
        style={{ top: s.top, left: s.left, right: s.right }}
        animate={{ y: [0, -25, 0], rotate: [s.rotate, s.rotate + 6, s.rotate] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
      />
    ))}

    {/* Radial glow behind headline */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, hsl(var(--primary) / 0.12), hsl(var(--secondary) / 0.06) 40%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />

    <div className="container relative z-10 px-4 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-accent mb-10 px-5 py-2.5 rounded-full border border-accent/20 bg-accent/5"
        >
          <Sparkles size={14} />
          Digital Agency & Tech Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.02] max-w-6xl mx-auto tracking-tight"
        >
          We Build Digital{" "}
          <span className="text-gradient">Experiences</span>{" "}
          That Perform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-8 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Strategy, design, and engineering—fused into high-performance digital products that drive real growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="glow" size="lg" asChild className="text-base px-10 h-13">
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-base px-10 h-13 border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300"
          >
            <Link to="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default HeroSection;
