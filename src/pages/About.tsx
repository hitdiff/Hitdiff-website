import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => (
  <div className="pt-24 relative">
    {/* Background */}
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-background" />
    </div>

    {/* Hero */}
    <section className="relative py-[100px] overflow-hidden">
      {/* Deep black bg with subtle navy radial gradient */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 65% 50%, hsl(222 50% 12% / 0.8), hsl(var(--background)) 70%)"
      }} />

      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
          {/* Left — Founder image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-5/12 flex-shrink-0"
          >
            <div className="relative">
              {/* Electric blue outer glow */}
              <div className="absolute -inset-5 rounded-3xl blur-2xl opacity-50" style={{
                background: "radial-gradient(ellipse, hsl(var(--primary) / 0.4), transparent 70%)"
              }} />
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/25 shadow-[0_0_40px_-8px_hsl(var(--primary)/0.35)]">
                <div className="aspect-[3/4] bg-gradient-to-br from-muted/40 via-card to-muted/20 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center border border-primary/20">
                      <span className="font-display text-3xl font-bold text-primary">E</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Founder photo</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:w-7/12"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              The Human Edge Behind{" "}
              <span className="text-gradient">the AI.</span>
            </h1>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                I started hitdiff after watching too many small businesses drown in manual tasks, scattered tools, and processes that cost them hours every single week. The problem was never a lack of effort — it was a lack of systems.
              </p>
              <p>
                Our mission is simple: deliver end-to-end digital solutions that help SMBs move faster, stay organized, and scale without the overhead. From AI-powered automation to full web builds, every project is designed to eliminate friction.
              </p>
              <p>
                With a background in Computer Science, years of volunteering in community tech initiatives, and deep expertise in workflow optimization, I bring both the technical chops and the human understanding to every engagement.
              </p>
            </div>

            <p className="italic text-muted-foreground text-base">— Founder, hitdiff</p>
          </motion.div>
        </div>
      </div>
    </section>


    {/* CTA */}
    <div className="gradient-divider" />
    <section className="py-28">
      <div className="container px-4 text-center">
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-border/60 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
