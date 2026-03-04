import { motion } from "framer-motion";
import { Search, Lightbulb, Hammer, Rocket } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { icon: Search, label: "Discovery", desc: "Deep dive into your goals, audience, and competitive landscape." },
  { icon: Lightbulb, label: "Strategy", desc: "Craft a focused plan with clear milestones and measurable outcomes." },
  { icon: Hammer, label: "Build", desc: "Design and develop with precision—iterating fast with full transparency." },
  { icon: Rocket, label: "Launch & Optimize", desc: "Go live, track performance, and continuously refine for growth." },
];

const HowItWorks = () => (
  <section className="py-28">
    <div className="container px-4">
      <SectionHeading badge="Process" title="How it works" description="A structured approach that turns ideas into high-performing digital products." />

      <div className="relative max-w-5xl mx-auto">
        {/* Connecting gradient line */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px]"
          style={{ background: "linear-gradient(90deg, hsl(217 91% 60% / 0.4), hsl(263 70% 58% / 0.4), hsl(168 94% 51% / 0.3), hsl(217 91% 60% / 0.2))" }}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="relative z-10 w-24 h-24 rounded-2xl glass mx-auto mb-6 flex items-center justify-center group hover:glow-border transition-all duration-500">
                <s.icon size={28} className="text-primary group-hover:text-accent transition-colors duration-300" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
