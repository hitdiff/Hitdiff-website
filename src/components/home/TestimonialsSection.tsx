import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote: "HitDiff helped streamline our lead process and improve follow-ups dramatically.",
    name: "Sarah Thompson",
    role: "Operations Manager",
    initials: "ST",
  },
  {
    quote: "The automation workflows they implemented saved our team hours every week.",
    name: "Daniel Lee",
    role: "Marketing Director",
    initials: "DL",
  },
  {
    quote: "Our website now works as a complete system instead of just a digital brochure.",
    name: "Alex Morgan",
    role: "Founder",
    initials: "AM",
  },
  {
    quote: "Professional, strategic, and incredibly efficient to work with.",
    name: "Priya Shah",
    role: "Startup Founder",
    initials: "PS",
  },
  {
    quote: "They transformed our online presence and doubled our inbound leads in three months.",
    name: "James Carter",
    role: "CEO, ScaleUp Co.",
    initials: "JC",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={12} className="fill-accent text-accent" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const len = testimonials.length;

  const navigate = useCallback(
    (dir: number) => setActive((p) => (p + dir + len) % len),
    [len]
  );

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 7000);
    return () => clearInterval(timer);
  }, [navigate]);

  const getIndex = (offset: number) => (active + offset + len) % len;

  // positions: -2, -1, 0 (center), 1, 2
  const positions = [-2, -1, 0, 1, 2];

  const getStyle = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset);
    if (abs === 0) {
      return { transform: "translateX(0) scale(1)", opacity: 1, zIndex: 30, filter: "blur(0px)" };
    }
    if (abs === 1) {
      return {
        transform: `translateX(${offset * 108}%) scale(0.88)`,
        opacity: 0.6,
        zIndex: 20,
        filter: "blur(1.5px)",
      };
    }
    return {
      transform: `translateX(${offset * 180}%) scale(0.75)`,
      opacity: 0,
      zIndex: 10,
      filter: "blur(3px)",
    };
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by businesses"
          description="Hear from the teams we've helped grow, automate, and scale."
        />

        {/* Desktop carousel */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="relative h-[220px] flex items-center justify-center">
            {positions.map((offset) => {
              const idx = getIndex(offset);
              const t = testimonials[idx];
              const style = getStyle(offset);
              return (
                <motion.div
                  key={`${active}-${offset}`}
                  initial={false}
                  animate={{
                    x: style.transform,
                    opacity: style.opacity,
                    scale: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.88 : 0.75,
                    filter: style.filter,
                  }}
                  style={{
                    position: "absolute",
                    width: "380px",
                    zIndex: style.zIndex,
                    ...style,
                  }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`glass rounded-xl p-6 gradient-card-border ${
                    offset === 0 ? "shadow-[0_12px_40px_-10px_hsl(var(--glow)/0.3)]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Quote size={18} className="text-accent/35" />
                    <Stars />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/85 mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3 border-t border-border/30 pt-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-xs font-semibold text-primary flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-foreground leading-tight">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-xl p-6 gradient-card-border mx-auto max-w-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <Quote size={18} className="text-accent/35" />
                <Stars />
              </div>
              <p className="text-sm leading-relaxed text-foreground/85 mb-4">
                "{testimonials[active].quote}"
              </p>
              <div className="flex items-center gap-3 border-t border-border/30 pt-3">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-xs font-semibold text-primary">
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">{testimonials[active].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground" aria-label="Previous">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => navigate(1)} className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground" aria-label="Next">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "bg-accent w-5" : "bg-muted-foreground/25 w-1.5 hover:bg-muted-foreground/40"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
