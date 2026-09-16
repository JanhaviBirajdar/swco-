import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Building, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitContactForm } from '../services/api';
import { ContactFormData } from '../types';
import { companyData } from '../data/companyData';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Frontend validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitContactForm(formData);
      setIsSubmitting(false);
      setSuccessMessage(res.message);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3888ff', '#6366f1', '#06b6d4'],
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err.message || 'Failed to submit message. Please try again.');
    }
  };

  return (
    <>
      <SEOHead
        title="Contact VasuNiti — Let's Build Something Meaningful"
        description="Connect with VasuNiti. Speak with our enterprise solutions team about product demos, partnerships, or custom architectures."
      />

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="brand" className="mb-3">
              Direct Access
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let's Build Something Meaningful.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Have an idea, a challenge, or a business problem? Let's talk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Info & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Enterprise Sales & Partnerships
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our solutions engineers are available for architecture reviews, pilot deployments, and custom enterprise licensing.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">EMAIL INQUIRIES</div>
                      <a href="mailto:contact@vasuniti.com" className="font-medium hover:text-brand-500 transition-colors">
                        contact@vasuniti.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">PHONE</div>
                      <span className="font-medium">+1 (800) 555-VASU</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">HEADQUARTERS</div>
                      <span className="font-medium">San Francisco, CA & Bengaluru, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response SLA Note */}
              <div className="p-6 rounded-2xl bg-brand-500/5 dark:bg-brand-500/10 border border-brand-500/20 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-brand-600 dark:text-brand-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Guaranteed 24-Hour Response</span>
                </div>
                <p className="leading-relaxed">
                  Every inquiry is directly reviewed by an engineering lead and assigned a dedicated technical specialist.
                </p>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] shadow-xl relative overflow-hidden">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Status Alerts */}
                  <AnimatePresence>
                    {successMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-sm flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>{successMessage}</span>
                      </motion.div>
                    )}

                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-sm flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl text-sm bg-light-surface dark:bg-dark-bg border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl text-sm bg-light-surface dark:bg-dark-bg border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl text-sm bg-light-surface dark:bg-dark-bg border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl text-sm bg-light-surface dark:bg-dark-bg border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                      />
                    </div>
                  </div>

                  {/* Subject Inquiry Type */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-light-surface dark:bg-dark-bg border border-black/10 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Demo">Product Demo Request</option>
                      <option value="Enterprise Partnership">Enterprise Partnership</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Custom Solution">Custom Architectural Solution</option>
                      <option value="Investor Relations">Investor Relations</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, workflow challenges, or timeline..."
                      className="w-full px-4 py-3 rounded-xl text-sm bg-light-surface dark:bg-dark-bg border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full shadow-glow-sm"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Start a Conversation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
