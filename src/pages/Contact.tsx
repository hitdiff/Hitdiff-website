import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Send, Mail, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you within 24 hours.");
      setForm({ name: "", email: "", company: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="pt-24 relative">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 gradient-mesh opacity-40" />
      </div>

      <section className="py-12 pb-6">
        <div className="container px-4">
          <SectionHeading
            title="Let's Start a Conversation"
            description="Tell me about your project and I'll get back to you within 24 hours with a tailored plan."
          />

          <div className="grid md:grid-cols-5 gap-10 max-w-4xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="md:col-span-3 glass rounded-xl p-8 space-y-5 gradient-card-border"
            >
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-1.5 bg-background/50 focus:border-accent" placeholder="Your name" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1.5 bg-background/50 focus:border-accent" placeholder="you..company.com" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                <Input id="company" value={form.company} onChange={(e) => update("company", e.target.value)} className="mt-1.5 bg-background/50 focus:border-accent" placeholder="Your company (optional)" />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} className="mt-1.5 bg-background/50 min-h-[120px] focus:border-accent" placeholder="Tell me about your project..." />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button variant="glow" className="w-full" disabled={loading}>
                {loading ? "Sending..." : <>Send Message <Send size={14} className="ml-2" /></>}
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              {[
                {
                  icon: Mail, title: "Get in Touch", content: (
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground/70 mb-0.5">Email</p>
                        <p className="text-sm text-muted-foreground">hitdiffdigital@gmail.com</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground/70 mb-0.5">Phone</p>
                        <p className="text-sm text-muted-foreground">+1 (647)-773-7911</p>
                      </div>
                    </div>
                  )
                },
                {
                  icon: Calendar, title: "Book a Call", content: (
                    <>
                      <p className="text-sm text-muted-foreground mb-3">Schedule a free 30-minute strategy call.</p>
                      <Button variant="outline" size="sm" className="w-full hover:bg-accent/10 hover:text-accent hover:border-accent/30">Schedule Call</Button>
                    </>
                  )
                },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-6 gradient-card-border hover:glow-border transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon size={18} className="text-primary" />
                    <h3 className="font-display font-semibold">{item.title}</h3>
                  </div>
                  {item.content}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
