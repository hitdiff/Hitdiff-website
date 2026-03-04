import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BarChart3, Code2, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useState, useEffect, useCallback } from "react";

const features = [
  {
    icon: Code2,
    title: "Web Design & Development",
    desc: "Custom, high-performance websites built with modern frameworks to convert visitors into clients.",
  },
  {
    icon: Zap,
    title: "CRM & Workflow Automation",
    desc: "Automated pipelines, follow-ups, and client management that run while you sleep.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Execution",
    desc: "Structured campaigns with measurable KPIs—SEO, ads, and funnels that actually perform.",
  },
];

const testimonials = [
  {
    quote: "HitDiff completely transformed our sales pipeline. We went from manually chasing leads to a fully automated system that books calls on autopilot.",
    name: "Sarah K.",
    role: "Founder, GrowthLab Agency",
  },
  {
    quote: "The website they built us wasn't just beautiful—it actually converts. Our lead volume tripled within the first month of launch.",
    name: "Marcus T.",
    role: "CEO, Vertex Solutions",
  },
  {
    quote: "Working with HitDiff felt like having a full tech team on speed dial. Fast, organized, and the automation workflows saved us 20+ hours a week.",
    name: "Jessica R.",
    role: "Operations Lead, ScaleUp Co.",
  },
  {
    quote: "Finally, a digital partner who actually understands business outcomes. Every campaign was backed by data and delivered real ROI.",
    name: "David L.",
    role: "Marketing Director, Pinnacle Group",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const next = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-in-an-office-4875/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/85" />
        </div>

        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float" />

        <div className="container relative z-10 px-4 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold leading-tight max-w-5xl mx-auto">
              Digital innovation that{" "}
              <span className="text-gradient">hits different</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI-powered CRM, workflow automation, and digital growth—on autopilot.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow" size="lg" asChild>
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services preview — separate columns */}
      <section className="py-24">
        <div className="container px-4">
          <SectionHeading
            badge="What I Do"
            title="Systems that scale your business"
            description="From custom builds to full automation stacks—every solution is engineered for growth."
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group glass rounded-xl p-8 hover:glow-border transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24">
        <div className="container px-4">
          <SectionHeading
            badge="Testimonials"
            title="What clients say"
            description="Real results from real partnerships."
          />

          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-10 md:p-14 text-center glow-border"
              >
                <Quote size={32} className="text-primary/30 mx-auto mb-6" />
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-8 italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div>
                  <p className="font-display font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronLeft size={18} className="text-foreground" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === currentTestimonial ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronRight size={18} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container px-4">
          <div className="glass rounded-2xl p-12 md:p-16 text-center glow-border">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Ready to hit <span className="text-gradient">different</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's build systems that work harder than you do. Book a free strategy call today.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Let's Talk <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
