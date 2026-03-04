import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const techs = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Vercel", icon: "▼" },
  { name: "GitHub", icon: "🐙" },
];

const TechStack = () => (
  <section className="py-28 relative">
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(222 47% 7%), hsl(222 45% 9%), hsl(222 47% 7%))" }} />
    <div className="container relative px-4">
      <SectionHeading badge="Tech Stack" title="Built with modern tools" description="Industry-leading technologies for performance, scalability, and developer velocity." />

      <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
        {techs.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl px-6 py-4 flex items-center gap-3 cursor-default hover:glow-border hover:border-primary/30 transition-all duration-300"
          >
            <span className="text-xl">{t.icon}</span>
            <span className="font-display font-medium text-sm">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
