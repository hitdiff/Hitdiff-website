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

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={11} className="fill-accent text-accent" />
    ))}
  </div>
);

const Card = ({ t, isCenter }: { t: typeof testimonials[0]; isCenter: boolean }) => (
  <div
    className={`glass rounded-2xl gradient-card-border aspect-[5/4] flex flex-col justify-between transition-shadow duration-500 ${
      isCenter
        ? "p-6 shadow-[0_16px_48px_-12px_hsl(var(--glow)/0.35)]"
        : "p-5"
    }`}
  >
    <div>
      <div className="flex items-center justify-between mb-3">
        <Quote size={16} className="text-accent/30" />
        <Stars />
      </div>
      <p className={`leading-relaxed text-foreground/85 ${isCenter ? "text-sm" : "text-xs"}`}>
        "{t.quote}"
      </p>
    </div>
    <div className="flex items-center gap-2.5 border-t border-border/30 pt-3 mt-3">
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

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const len = testimonials.length;

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActive((p) => (p + dir + len) % len);
    },
    [len]
  );

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 4500);
    return () => clearInterval(timer);
  }, [navigate]);

  const getIdx = (offset: number) => (active + offset + len) % len;

  const slots = [
    { offset: -1, x: "-58%", scale: 0.9, opacity: 0.65, z: 10 },
    { offset: 0, x: "0%", scale: 1, opacity: 1, z: 30 },
    { offset: 1, x: "58%", scale: 0.9, opacity: 0.65, z: 10 },
  ];

  return (
    <section className="py-20 overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="container px-4">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by businesses"
          description="Hear from the teams we've helped grow, automate, and scale."
        />

        {/* Desktop */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="relative h-[240px] flex items-center justify-center">
            <AnimatePresence mode="popLayout" custom={direction}>
              {slots.map(({ offset, x, scale, opacity, z }) => {
                const idx = getIdx(offset);
                const t = testimonials[idx];
                return (
                  <motion.div
                    key={`${idx}-${offset}`}
                    layout
                    initial={{
                      x: direction > 0 ? "116%" : "-116%",
                      scale: 0.8,
                      opacity: 0,
                    }}
                    animate={{
                      x,
                      scale,
                      opacity,
                      rotateY: offset * -3,
                    }}
                    exit={{
                      x: direction > 0 ? "-116%" : "116%",
                      scale: 0.8,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                    style={{
                      position: "absolute",
                      width: "320px",
                      zIndex: z,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Card t={t} isCenter={offset === 0} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
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
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.3 }}
              className="max-w-[300px] mx-auto"
            >
              <Card t={testimonials[active]} isCenter />
            </motion.div>
          </AnimatePresence>
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
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
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
