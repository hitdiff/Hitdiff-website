import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote: "HitDiff helped streamline our lead process and improve follow-ups dramatically.",
    name: "Sarah Thompson",
    company: "Operations Manager",
  },
  {
    quote: "The automation workflows they implemented saved our team hours every week.",
    name: "Daniel Lee",
    company: "Marketing Director",
  },
  {
    quote: "Our website now works as a complete system instead of just a digital brochure.",
    name: "Alex Morgan",
    company: "Founder",
  },
  {
    quote: "Professional, strategic, and incredibly efficient to work with.",
    name: "Priya Shah",
    company: "Startup Founder",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 6000);
    return () => clearInterval(timer);
  }, [navigate]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-28">
      <div className="container px-4">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by growing businesses"
          description="Hear from the teams we've helped grow, automate, and scale."
          singleLine
        />

        <div className="relative max-w-2xl mx-auto">
          <div className="min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass rounded-2xl p-10 md:p-12 gradient-card-border text-center w-full"
              >
                <Quote size={32} className="text-accent/40 mx-auto mb-6" />
                <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-accent w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
