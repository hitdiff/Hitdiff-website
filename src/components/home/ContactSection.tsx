import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const ContactSection = () => (
  <section className="py-32 relative overflow-hidden">
    {/* Vibrant animated gradient background */}
    <div className="absolute inset-0" style={{
      background: "linear-gradient(135deg, hsl(217 91% 60% / 0.18), hsl(263 70% 58% / 0.15), hsl(168 94% 51% / 0.1))",
    }} />
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse at 20% 40%, hsl(217 91% 60% / 0.15), transparent 55%), radial-gradient(ellipse at 80% 60%, hsl(263 70% 58% / 0.12), transparent 55%), radial-gradient(ellipse at 50% 90%, hsl(168 94% 51% / 0.08), transparent 50%)",
    }} />

    {/* Moving light orbs */}
    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-25"
      style={{ background: "hsl(var(--primary))", animation: "mesh-move 18s ease-in-out infinite" }}
    />
    <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full blur-[130px] opacity-20"
      style={{ background: "hsl(var(--accent))", animation: "mesh-move 22s ease-in-out infinite reverse" }}
    />
    <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full blur-[120px] opacity-15"
      style={{ background: "hsl(var(--secondary))", animation: "mesh-move 20s ease-in-out infinite" }}
    />

    <div className="absolute inset-0 grid-pattern opacity-8" />

    <div className="container relative z-10 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          Ready to Build Something{" "}
          <span className="text-gradient-teal">Exceptional</span>?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          Let's create something modern, fast, and impactful. Your next project starts with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="glow" size="lg" asChild className="text-base px-10 h-13">
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-base px-10 h-13 border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300">
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
