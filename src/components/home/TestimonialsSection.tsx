import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote: "HitDiff helped streamline our lead process and improve follow-ups dramatically.",
    name: "Sarah Thompson",
    role: "Operations Manager",
  },
  {
    quote: "The automation workflows they built saved our team hours every single week.",
    name: "Daniel Lee",
    role: "Marketing Director",
  },
  {
    quote: "Our website now works as a complete system instead of just a digital brochure.",
    name: "Alex Morgan",
    role: "Founder",
  },
  {
    quote: "Professional, strategic, and incredibly efficient to work with.",
    name: "Priya Shah",
    role: "Startup Founder",
  },
  {
    quote: "They doubled our inbound leads in three months with a complete digital overhaul.",
    name: "James Carter",
    role: "CEO, ScaleUp Co.",
  },
];

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="glass rounded-2xl p-6 gradient-card-border h-full flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_hsl(var(--glow)/0.2)] transition-all duration-300">
    <div>
      <Quote size={16} className="text-accent/30 mb-3" />
      <p className="text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
    </div>
    <div className="border-t border-border/30 pt-3 mt-4">
      <p className="font-display text-sm font-semibold text-foreground">— {t.name}</p>
      <p className="text-xs text-muted-foreground">{t.role}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef(0);
  const len = testimonials.length;

  // Build a looped list: [...testimonials, ...testimonials, ...testimonials]
  const looped = [...testimonials, ...testimonials, ...testimonials];
  const baseOffset = len; // start in the middle copy

  const navigate = useCallback(
    (dir: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setOffset((p) => p + dir);
    },
    [isAnimating]
  );

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => navigate(1), 5000);
    return () => clearInterval(timer);
  }, [navigate]);

  // Reset position seamlessly when animation ends
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    setOffset((p) => ((p % len) + len) % len);
    // Briefly disable transition for the reset
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      requestAnimationFrame(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "";
        }
      });
    }
  };

  const currentShift = baseOffset + offset;

  // Mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by businesses"
          description="Hear from the teams we've helped grow, automate, and scale."
        />

        {/* Desktop: 3 visible */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="overflow-hidden mx-10">
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentShift * (100 / 3)}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {looped.map((t, i) => (
                <div
                  key={i}
                  className="w-1/3 flex-shrink-0 px-3"
                >
                  <Card t={t} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile: 1 visible */}
        <div
          className="md:hidden relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentShift * 100}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {looped.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <Card t={t} />
                </div>
              ))}
            </div>
          </div>
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
              onClick={() => {
                const target = i;
                const current = ((offset % len) + len) % len;
                navigate(target - current);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                ((offset % len) + len) % len === i
                  ? "bg-accent w-5"
                  : "bg-muted-foreground/25 w-1.5 hover:bg-muted-foreground/40"
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
