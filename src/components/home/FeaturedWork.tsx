import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "GrowthLab Agency", category: "Web Design & CRM", color: "from-primary/20 to-secondary/20" },
  { title: "Vertex Solutions", category: "Full-Stack Platform", color: "from-secondary/20 to-accent/10" },
  { title: "ScaleUp Commerce", category: "E-Commerce & Marketing", color: "from-accent/10 to-primary/20" },
];

const FeaturedWork = () => (
  <section className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-surface/30" />
    <div className="container relative px-4">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group relative"
          >
            <div className="glass rounded-2xl overflow-hidden gradient-card-border hover:glow-border transition-all duration-500">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                <div className="flex-1 mx-3 h-5 rounded bg-muted/50" />
              </div>
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} flex items-center justify-center relative`}>
                <div className="text-center space-y-2 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur flex items-center justify-center mx-auto">
                    <ExternalLink size={18} className="text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">{p.category}</p>
                </div>
                <div className="absolute inset-0 grid-pattern opacity-10" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
