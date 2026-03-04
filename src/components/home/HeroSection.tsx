import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated gradient mesh */}
    <div className="absolute inset-0 gradient-mesh" />
    <div className="absolute inset-0 grid-pattern opacity-20" />

    {/* Floating orbs */}
    <div
      className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[150px] opacity-30"
      style={{
        background: "radial-gradient(circle, hsl(217 91% 60% / 0.4), transparent)",
        animation: "mesh-move 20s ease-in-out infinite",
      }}
    />
    <div
      className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[130px] opacity-25"
      style={{
        background: "radial-gradient(circle, hsl(263 70% 58% / 0.35), transparent)",
        animation: "mesh-move 25s ease-in-out infinite reverse",
      }}
    />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20"
      style={{
        background: "radial-gradient(circle, hsl(168 94% 51% / 0.25), transparent)",
        animation: "mesh-move 18s ease-in-out infinite",
      }}
    />

    {/* Floating shapes */}
    <div className="absolute top-[20%] right-[15%] w-20 h-20 border border-primary/20 rounded-2xl rotate-12 animate-float-slow opacity-30" />
    <div
      className="absolute bottom-[25%] left-[10%] w-16 h-16 border border-secondary/20 rounded-full animate-float-slow opacity-25"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="absolute top-[60%] right-[25%] w-12 h-12 border border-accent/20 rounded-lg rotate-45 animate-float-slow opacity-20"
      style={{ animationDelay: "4s" }}
    />

    {/* Radial glow behind headline */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px]"
      style={{ background: "radial-gradient(ellipse, hsl(217 91% 60% / 0.15), transparent 70%)" }}
    />

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
  </section>
);

export default HeroSection;
