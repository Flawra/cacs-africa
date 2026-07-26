"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock submit — wire up to a real API route or CMS endpoint later.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-forest/5 p-10 text-center">
        <CheckCircle2 size={44} className="text-forest" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl font-bold text-ink">
          Message Sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/60">
          Thank you for reaching out. A member of the CACS Africa team will
          respond within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/70">
            Full Name
          </label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/70">
            Email Address
          </label>
          <Input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink/70">
            Company / Organisation
          </label>
          <Input id="company" name="company" placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="reason" className="mb-1.5 block text-sm font-medium text-ink/70">
            Reason for Contact
          </label>
          <Select id="reason" name="reason" defaultValue="">
            <option value="" disabled>
              Select a reason
            </option>
            <option>Membership Inquiry</option>
            <option>Partnership Inquiry</option>
            <option>Media & Press</option>
            <option>Event Inquiry</option>
            <option>General Question</option>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help..."
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending..." : "Send Message"}
        {!loading && <Send size={16} />}
      </Button>
    </form>
  );
}
