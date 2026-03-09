import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote: "HitDiff helped streamline our lead process and improve follow-ups dramatically.",
    name: "Sarah Thompson",
    role: "Operations Manager",
    initials: "ST",
  },
  {
    quote: "The automation workflows they built saved our team hours every single week.",
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
    quote: "They doubled our inbound leads in three months with a complete digital overhaul.",
    name: "James Carter",
    role: "CEO, ScaleUp Co.",
    initials: "JC",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const len = testimonials.length;

  const navigate = useCallback(
    (dir: number) => setActive((p) => (p + dir + len) % len),
    [len]
  );

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 4500);
    return () => clearInterval(timer);
  }, [navigate]);

  const getIdx = (offset: number) => (active + offset + len) % len;

  const slots = [
    { offset: -1, x: "-55%", scale: 0.88, opacity: 0.55, z: 10 },
    { offset: 0, x: "0%", scale: 1, opacity: 1, z: 30 },
    { offset: 1, x: "55%", scale: 0.88, opacity: 0.55, z: 10 },
  ];

  const CardContent = ({ t, isCenter }: { t: typeof testimonials[0]; isCenter: boolean }) => (
    <div
      className={`glass rounded-2xl gradient-card-border flex flex-col justify-between h-full ${
        isCenter ? "p-6 shadow-[0_16px_48px_-12px_hsl(var(--glow)/0.3)]" : "p-5"
      }`}
    >
      <div>
        <Quote size={16} className="text-accent/30 mb-3" />
        <p className={`leading-relaxed text-foreground/85 ${isCenter ? "text-sm" : "text-xs"}`}>
          "{t.quote}"
        </p>
      </div>
      <div className="flex items-center gap-2.5 border-t border-border/30 pt-3 mt-4">
        <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-[10px] font-semibold text-primary flex-shrink-0">
          {t.initials}
        </div>
        <div>
          <p className="font-display text-xs font-semibold text-foreground leading-tight">{t.name}</p>
          <p className="text-[10px] text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by businesses"
          description="Hear from the teams we've helped grow, automate, and scale."
        />

        {/* Desktop */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="relative h-[220px] flex items-center justify-center">
            {slots.map(({ offset, x, scale, opacity, z }) => {
              const idx = getIdx(offset);
              const t = testimonials[idx];
              return (
                <motion.div
                  key={offset}
                  animate={{
                    x,
                    scale,
                    opacity,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    position: "absolute",
                    width: "320px",
                    height: "190px",
                    zIndex: z,
                  }}
                >
                  <CardContent t={t} isCenter={offset === 0} />
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-40 w-9 h-9 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-40 w-9 h-9 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-[300px] mx-auto h-[190px]"
          >
            <CardContent t={testimonials[active]} isCenter />
          </motion.div>
          <div className="flex justify-center gap-4 mt-5">
            <button onClick={() => navigate(-1)} className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground"><ChevronLeft size={14} /></button>
            <button onClick={() => navigate(1)} className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground"><ChevronRight size={14} /></button>
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
