import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  glow: boolean;
  color: string;
}

const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;
    const NODE_COUNT = 60;
    const CONNECTION_DIST = 180;
    const CENTER_EXCLUSION = 0.25; // fraction of width/height to keep clear in center

    const colors = [
      "59, 130, 246",   // blue
      "20, 241, 217",   // teal
      "139, 92, 246",   // purple
    ];

    // Init nodes — push away from center
    nodesRef.current = Array.from({ length: NODE_COUNT }, () => {
      const glow = Math.random() < 0.25;
      let nx: number, ny: number;
      do {
        nx = Math.random() * w();
        ny = Math.random() * h();
      } while (
        Math.abs(nx - w() / 2) < w() * CENTER_EXCLUSION &&
        Math.abs(ny - h() / 2) < h() * CENTER_EXCLUSION
      );
      return {
        x: nx,
        y: ny,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: glow ? 2.5 + Math.random() * 1.5 : 1.2 + Math.random() * 0.8,
        glow,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    const draw = () => {
      const W = w();
      const H = h();
      ctx.clearRect(0, 0, W, H);

      const nodes = nodesRef.current;

      // Update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.x = Math.max(0, Math.min(W, n.x));
        n.y = Math.max(0, Math.min(H, n.y));
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        if (n.glow) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
          grad.addColorStop(0, `rgba(${n.color}, 0.2)`);
          grad.addColorStop(1, `rgba(${n.color}, 0)`);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.glow
          ? `rgba(${n.color}, 0.7)`
          : `rgba(${n.color}, 0.25)`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
    {/* Gradient depth base */}
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse at 50% 40%, hsl(222 47% 10%), hsl(222 47% 7%) 50%, hsl(220 20% 3%) 100%)"
    }} />

    {/* Neural network canvas */}
    <NetworkCanvas />

    {/* Soft glow behind center */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, hsl(var(--primary) / 0.08), transparent 65%)",
        filter: "blur(60px)",
      }}
    />

    {/* Content */}
    <div className="container relative z-10 px-4 py-32 text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-5xl mx-auto">
          Digital systems that{" "}
          <span className="text-gradient">hit different.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We engineer the digital systems and AI workflows that allow you to scale your business without increasing your workload.
        </p>


        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Button variant="glow" size="lg" asChild>
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300">
            <Link to="/services">
              View Services
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default HeroSection;
