import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote: "HitDiff helped streamline our lead process and improve follow-ups dramatically.",
    name: "Sarah Thompson",
    role: "Operations Manager",
  },
  {
    quote: "The automation workflows they implemented saved our team hours every week.",
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
    quote: "They transformed our online presence and doubled our inbound leads in three months.",
    name: "James Carter",
    role: "CEO, ScaleUp Co.",
  },
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const navigate = useCallback(
    (dir: number) => setPage((p) => (p + dir + totalPages) % totalPages),
    [totalPages]
  );

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 6000);
    return () => clearInterval(timer);
  }, [navigate]);

  const visibleCards = Array.from({ length: cardsPerPage }, (_, i) => {
    const idx = (page * cardsPerPage + i) % testimonials.length;
    return testimonials[idx];
  });

  return (
    <section className="py-20">
      <div className="container px-4">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by businesses"
          description="Hear from the teams we've helped grow, automate, and scale."
        />

        {/* Desktop: 3 cards */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-5"
            >
              {visibleCards.map((t, i) => (
                <div
                  key={`${page}-${i}`}
                  className="glass rounded-xl p-6 gradient-card-border hover:shadow-[0_8px_24px_-6px_hsl(var(--glow)/0.2)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <Quote size={20} className="text-accent/30 mb-3 flex-shrink-0" />
                  <p className="text-sm leading-relaxed text-foreground/85 mb-4 flex-1">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-border/30 pt-3">
                    <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => navigate(-1)}
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute -right-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile: 1 card */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-xl p-6 gradient-card-border"
            >
              <Quote size={20} className="text-accent/30 mb-3" />
              <p className="text-sm leading-relaxed text-foreground/85 mb-4">
                "{testimonials[page % testimonials.length].quote}"
              </p>
              <div className="border-t border-border/30 pt-3">
                <p className="font-display text-sm font-semibold">{testimonials[page % testimonials.length].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[page % testimonials.length].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === page ? "bg-accent w-5" : "bg-muted-foreground/25 w-1.5 hover:bg-muted-foreground/40"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
