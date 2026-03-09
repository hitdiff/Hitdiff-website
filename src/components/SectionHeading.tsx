import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: React.ReactNode;
  description?: string;
}

const SectionHeading = ({ badge, title, description }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center max-w-2xl mx-auto mb-16"
  >
    {badge && (
      <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
        {badge}
      </span>
    )}
    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h2>
    {description && <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>}
  </motion.div>
);

export default SectionHeading;
