import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
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
      <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
        {badge}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
  </motion.div>
);

export default SectionHeading;
