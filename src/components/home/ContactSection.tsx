import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const ContactSection = () => (
  <section className="py-28 relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0" style={{
      background: "linear-gradient(135deg, hsl(217 91% 60% / 0.15), hsl(263 70% 58% / 0.12), hsl(168 94% 51% / 0.08))",
    }} />
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse at 30% 50%, hsl(217 91% 60% / 0.12), transparent 60%), radial-gradient(ellipse at 70% 50%, hsl(263 70% 58% / 0.1), transparent 60%)",
    }} />
    {/* Moving light effect */}
    <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
      style={{ background: "hsl(168 94% 51%)", animation: "mesh-move 15s ease-in-out infinite" }}
    />
    <div className="absolute inset-0 grid-pattern opacity-10" />

    <div className="container relative z-10 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 max-w-3xl mx-auto">
          Ready to Build Something{" "}
          <span className="text-gradient-teal">Exceptional</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Let's create something modern, fast, and impactful. Your next project starts with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="glow" size="lg" asChild>
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30">
            <Link to="/contact">
              <Mail className="mr-2" size={16} /> Get in Touch
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
