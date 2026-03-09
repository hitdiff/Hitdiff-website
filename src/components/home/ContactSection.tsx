import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => (
  <section className="py-28">
    <div className="container px-4 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Let's work together
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Have a project in mind? Let's talk.
        </p>
        <div className="flex justify-center">
          <Button variant="glow" size="lg" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
