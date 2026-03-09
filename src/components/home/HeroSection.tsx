import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap, BarChart3, CheckCircle2, ArrowUpRight } from "lucide-react";

/* ── Subtle animated grid background ── */
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse at 30% 50%, hsl(222 47% 10%), hsl(222 47% 7%) 50%, hsl(220 20% 3%) 100%)"
    }} />
    <div className="absolute inset-0 grid-pattern opacity-30" />
    <div
      className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full"
      style={{
        background: "radial-gradient(ellipse, hsl(var(--primary) / 0.06), transparent 65%)",
        filter: "blur(80px)",
      }}
    />
    <div
      className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] rounded-full"
      style={{
        background: "radial-gradient(ellipse, hsl(var(--glow-purple) / 0.04), transparent 65%)",
        filter: "blur(80px)",
      }}
    />
  </div>
);

/* ── Dashboard visualization ── */
const DashboardVisual = () => {
  const barHeights = [40, 65, 50, 80, 60, 90, 75];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Main dashboard card */}
      <div className="glass-strong rounded-2xl p-6 space-y-5">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
              <BarChart3 size={16} className="text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Performance</span>
          </div>
          <span className="text-xs text-accent font-medium flex items-center gap-1">
            <ArrowUpRight size={12} /> +24.5%
          </span>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-2 h-24">
          {barHeights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease: "easeOut" }}
              className="flex-1 rounded-md"
              style={{
                background: i === barHeights.length - 2
                  ? "hsl(var(--primary))"
                  : "hsl(var(--primary) / 0.2)",
              }}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Leads", value: "1,284", icon: Users },
            { label: "Conversions", value: "342", icon: TrendingUp },
            { label: "Automations", value: "56", icon: Zap },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
              className="rounded-xl bg-surface/80 p-3 text-center"
            >
              <stat.icon size={14} className="text-primary mx-auto mb-1" />
              <div className="text-sm font-semibold text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating pipeline card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -bottom-6 -left-6 glass rounded-xl p-4 w-52 shadow-lg"
      >
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Pipeline</div>
        <div className="space-y-2">
          {[
            { stage: "Qualified", count: 18, pct: 75 },
            { stage: "Proposal", count: 7, pct: 45 },
            { stage: "Closed", count: 12, pct: 90 },
          ].map((item) => (
            <div key={item.stage} className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">{item.stage}</span>
                <span className="text-foreground font-medium">{item.count}</span>
              </div>
              <div className="h-1 rounded-full bg-surface-bright overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating automation card */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
            <CheckCircle2 size={12} className="text-accent" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-foreground">Workflow Active</div>
            <div className="text-[10px] text-muted-foreground">12 tasks automated</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Hero Section ── */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
    <GridBackground />

    <div className="container relative z-10 px-4 py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08]">
            Digital systems that{" "}
            <span className="text-gradient">hit different.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Websites, automation, and data-driven workflows designed to help businesses operate smarter and scale with confidence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </motion.div>

          {/* Capability tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {["Web Development", "Workflow Automation", "CRM Integration"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium tracking-wider uppercase px-3 py-1.5 rounded-full border border-border/50 bg-surface/40 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Visual */}
        <div className="hidden lg:block">
          <DashboardVisual />
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default HeroSection;
