import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSnippet = () => (
  <section className="py-24">
    <div className="container px-4">
      <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-2xl opacity-40 blur-xl"
              style={{
                background: "radial-gradient(ellipse, hsl(var(--primary) / 0.3), transparent 70%)",
              }}
            />
            <div className="relative glass rounded-2xl p-2 shadow-xl">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center border border-primary/20">
                  <span className="font-display text-2xl font-bold text-primary">E</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1"
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I help businesses save time and execute projects faster — powered by AI and modern digital strategies. I combine technical knowledge, creative problem-solving, and global inspiration to deliver meaningful solutions.
          </p>
          <Button variant="glow" asChild>
            <Link to="/about">
              Learn More <ArrowRight className="ml-2" size={14} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSnippet;
