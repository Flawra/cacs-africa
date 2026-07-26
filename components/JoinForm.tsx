"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-card">
        <CheckCircle2 size={44} className="text-forest" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl font-bold text-ink">
          Application Received
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/60">
          Thank you for applying to CACS Africa. Our membership team will
          review your application and be in touch within 5 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-white p-8 shadow-card md:p-10"
      aria-label="Membership application form"
    >
      <h3 className="font-display text-xl font-bold text-ink">
        Membership Application
      </h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-ink/70">
            Full Name
          </label>
          <Input id="fullName" name="fullName" required placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="jEmail" className="mb-1.5 block text-sm font-medium text-ink/70">
            Email Address
          </label>
          <Input id="jEmail" name="jEmail" type="email" required placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="jCompany" className="mb-1.5 block text-sm font-medium text-ink/70">
            Company / Organisation
          </label>
          <Input id="jCompany" name="jCompany" required placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="jCountry" className="mb-1.5 block text-sm font-medium text-ink/70">
            Country
          </label>
          <Input id="jCountry" name="jCountry" required placeholder="Country" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="companyType" className="mb-1.5 block text-sm font-medium text-ink/70">
            Company Type
          </label>
          <Select id="companyType" name="companyType" defaultValue="">
            <option value="" disabled>Select type</option>
            <option>SME</option>
            <option>Startup</option>
            <option>Corporation</option>
            <option>Institution</option>
          </Select>
        </div>
        <div>
          <label htmlFor="industry" className="mb-1.5 block text-sm font-medium text-ink/70">
            Industry
          </label>
          <Input id="industry" name="industry" placeholder="e.g. Fintech, Agriculture" />
        </div>
      </div>

      <div>
        <label htmlFor="jMessage" className="mb-1.5 block text-sm font-medium text-ink/70">
          Tell us about your business
        </label>
        <textarea
          id="jMessage"
          name="jMessage"
          rows={4}
          placeholder="A brief overview of what you do and what you're looking for..."
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15"
        />
      </div>

      <Button type="submit" variant="gold" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Submitting..." : "Submit Application"}
        {!loading && <ArrowRight size={16} />}
      </Button>
    </form>
  );
}
