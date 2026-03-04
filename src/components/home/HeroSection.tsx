import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
    {/* Base gradient mesh */}
    <div className="absolute inset-0 gradient-mesh" />

    {/* Animated fluid orbs */}
    <motion.div
      className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
      style={{
        top: "5%",
        left: "-5%",
        background: "radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 65%)",
        filter: "blur(100px)",
      }}
      animate={{ x: [0, 60, -30, 40, 0], y: [0, -40, 30, -20, 0], scale: [1, 1.12, 0.92, 1.06, 1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{
        bottom: "0%",
        right: "-8%",
        background: "radial-gradient(circle, hsl(var(--secondary) / 0.18), transparent 65%)",
        filter: "blur(90px)",
      }}
      animate={{ x: [0, -50, 35, -25, 0], y: [0, 35, -25, 15, 0], scale: [1, 0.94, 1.1, 0.97, 1] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        top: "30%",
        right: "20%",
        background: "radial-gradient(circle, hsl(var(--accent) / 0.12), transparent 60%)",
        filter: "blur(80px)",
      }}
      animate={{ x: [0, 30, -45, 20, 0], y: [0, -30, 15, -40, 0], scale: [1, 1.08, 0.95, 1.04, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
    />
    <motion.div
      className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
      style={{
        top: "60%",
        left: "25%",
        background: "radial-gradient(circle, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.06), transparent 60%)",
        filter: "blur(70px)",
      }}
      animate={{ x: [0, -20, 40, -10, 0], y: [0, 25, -20, 30, 0], scale: [1, 1.05, 0.93, 1.02, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 8 }}
    />

    {/* Subtle grid */}
    <div className="absolute inset-0 grid-pattern opacity-[0.07]" />

    {/* Floating shapes */}
    <motion.div
      className="absolute w-28 h-28 rounded-3xl border border-primary/10 pointer-events-none"
      style={{ top: "16%", right: "14%" }}
      animate={{ y: [0, -20, 0], rotate: [12, 18, 12] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-20 h-20 rounded-full border border-secondary/10 pointer-events-none"
      style={{ bottom: "22%", left: "10%" }}
      animate={{ y: [0, -18, 0], rotate: [-5, 2, -5] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    />
    <motion.div
      className="absolute w-14 h-14 rounded-xl border border-accent/12 pointer-events-none"
      style={{ top: "55%", right: "26%" }}
      animate={{ y: [0, -15, 0], rotate: [45, 50, 45] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
    />
    <motion.div
      className="absolute w-10 h-10 rounded-lg border border-primary/8 pointer-events-none"
      style={{ top: "28%", left: "16%" }}
      animate={{ y: [0, -12, 0], rotate: [20, 26, 20] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
    />
    <motion.div
      className="absolute w-16 h-16 rounded-2xl border border-secondary/8 pointer-events-none"
      style={{ bottom: "30%", right: "10%" }}
      animate={{ y: [0, -22, 0], rotate: [-10, -4, -10] }}
      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 6 }}
    />

    {/* Soft glow spots */}
    <motion.div
      className="absolute w-3 h-3 rounded-full pointer-events-none"
      style={{ top: "25%", right: "30%", background: "hsl(var(--accent))", filter: "blur(6px)" }}
      animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.5, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-2 h-2 rounded-full pointer-events-none"
      style={{ top: "65%", left: "20%", background: "hsl(var(--primary))", filter: "blur(4px)" }}
      animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.8, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    <motion.div
      className="absolute w-2.5 h-2.5 rounded-full pointer-events-none"
      style={{ bottom: "35%", right: "18%", background: "hsl(var(--secondary))", filter: "blur(5px)" }}
      animate={{ opacity: [0.25, 0.65, 0.25], scale: [1, 1.6, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
    />

    {/* Radial glow behind headline */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.05) 45%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />

    {/* Content */}
    <div className="container relative z-10 px-4 py-32 text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-accent mb-8 px-4 py-2 rounded-full border border-accent/20 bg-accent/5"
        >
          <Sparkles size={14} />
          Digital Agency & Tech Studio
        </motion.div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-5xl mx-auto">
          We Build Digital{" "}
          <span className="text-gradient">Experiences</span>{" "}
          That Perform
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Strategy, design, and engineering—fused into high-performance digital products that drive real growth.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="glow" size="lg" asChild>
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30">
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default HeroSection;
