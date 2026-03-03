import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
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
    // Simulate submission (ready for Zapier webhook)
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
    <div className="pt-24">
      <section className="py-24">
        <div className="container px-4">
          <SectionHeading
            badge="Contact"
            title="Let's start a conversation"
            description="Tell me about your project and I'll get back to you within 24 hours with a tailored plan."
          />

          <div className="grid md:grid-cols-5 gap-10 max-w-4xl mx-auto">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="md:col-span-3 glass rounded-xl p-8 space-y-5"
            >
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-1.5 bg-background/50" placeholder="Your name" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1.5 bg-background/50" placeholder="you@company.com" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                <Input id="company" value={form.company} onChange={(e) => update("company", e.target.value)} className="mt-1.5 bg-background/50" placeholder="Your company (optional)" />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} className="mt-1.5 bg-background/50 min-h-[120px]" placeholder="Tell me about your project..." />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button variant="glow" className="w-full" disabled={loading}>
                {loading ? "Sending..." : <>Send Message <Send size={14} className="ml-2" /></>}
              </Button>
            </motion.form>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={18} className="text-primary" />
                  <h3 className="font-display font-semibold">Email</h3>
                </div>
                <p className="text-sm text-muted-foreground">hello@hitdiffdigital.com</p>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar size={18} className="text-primary" />
                  <h3 className="font-display font-semibold">Book a Call</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Prefer to talk live? Schedule a free 30-minute strategy call.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Schedule Call
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
