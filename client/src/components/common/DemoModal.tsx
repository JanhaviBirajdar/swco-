import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Loader2, Calendar, Building2, User, Mail, Phone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useDemoModal } from '../../context/DemoModalContext';
import { submitContactForm } from '../../services/api';
import { DemoFormData } from '../../types';

export const DemoModal: React.FC = () => {
  const { isOpen, closeDemoModal } = useDemoModal();

  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    institution: '',
    designation: 'IQAC Coordinator',
    phone: '',
    interest: 'Complete Academic Suite',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const designations = [
    'College Principal / Director',
    'IQAC Coordinator / Director',
    'NBA / NAAC Coordinator',
    'Head of Department (HOD)',
    'Dean of Academics',
    'Professor / Course Faculty',
    'Academic Registrar / Admin',
    'Other'
  ];

  const interestAreas = [
    'Complete Academic Suite (Mapping + Attainment + Reports)',
    'CO–PO–PSO Mapping Engine',
    'Outcome Attainment Analytics (Direct & Indirect)',
    'NBA & NAAC Documentation Support',
    'Digital Course File & Evidence Vault'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setError('Please provide your full name (minimum 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setError('Please provide a valid official/institutional email address.');
      return;
    }

    if (!formData.institution.trim() || formData.institution.trim().length < 3) {
      setError('Please enter your college or university name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setError('Please enter a valid contact phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        company: `${formData.institution} (${formData.designation})`,
        phone: formData.phone,
        subject: `Demo Request: ${formData.interest}`,
        message: `Area of Interest: ${formData.interest}\nDesignation: ${formData.designation}\nInstitution: ${formData.institution}\nAdditional Notes: ${formData.message || 'No additional message provided.'}`,
      };

      await submitContactForm(payload);
      setIsSubmitting(false);
      setSuccess(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#315FEA', '#4F7CFF', '#14213D', '#16A34A'],
      });
    } catch (err: any) {
      setIsSubmitting(false);
      setError(err.message || 'Could not submit your demo request. Please try again.');
    }
  };

  const handleClose = () => {
    closeDemoModal();
    // Delay reset slightly for clean exit animation
    setTimeout(() => {
      setSuccess(false);
      setError(null);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-white dark:bg-[#0E1526] rounded-3xl shadow-2xl border border-slate-200/90 dark:border-white/[0.08] overflow-hidden my-8 z-10 transition-colors"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header Banner */}
            <div className="relative bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 px-6 sm:px-7 py-5 text-white flex items-center justify-between border-b border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20 shadow-lg shadow-indigo-600/30 flex-shrink-0">
                  <img src="/vasuniti-symbol.png" alt="VasuNiti" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 id="modal-title" className="text-lg font-bold text-white font-display">
                    Schedule an Academic Demo
                  </h3>
                  <p className="text-xs text-slate-300">
                    See how VasuNiti streamlines CO–PO mapping and attainment for your college
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="relative text-slate-400 hover:text-white rounded-xl p-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7">
              {success ? (
                <div className="text-center py-8 px-4">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-2 mx-auto flex items-center justify-center mb-4 shadow-md">
                    <img src="/vasuniti-symbol.png" alt="VasuNiti" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-display mb-2">
                    Demo Request Received!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>. Our academic solutions team will reach out to <span className="font-semibold text-indigo-600 dark:text-indigo-400">{formData.email}</span> within 24 hours to coordinate a walkthrough customized for <span className="font-semibold text-slate-900 dark:text-white">{formData.institution}</span>.
                  </p>
                  <div className="p-4 bg-slate-50 dark:bg-[#131C31] rounded-2xl border border-slate-200 dark:border-white/[0.08] text-xs text-slate-600 dark:text-slate-300 mb-6 text-left">
                    <p className="font-semibold text-slate-900 dark:text-white mb-1.5">What to expect in the demonstration:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Hands-on walkthrough of the interactive CO–PO–PSO mapping matrix</li>
                      <li>Review of direct & indirect attainment formulas aligned with your exam patterns</li>
                      <li>Sample NBA Criterion 3 & NAAC Criterion 2.6 exported dossiers</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/30"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 rounded-xl flex items-center gap-2.5 text-xs text-red-700 dark:text-red-300">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="demo-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="demo-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr. Rajesh Verma"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Official Email */}
                    <div>
                      <label htmlFor="demo-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Official / College Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="demo-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="r.verma@engg.edu"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* College / Institution Name */}
                    <div>
                      <label htmlFor="demo-institution" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        College / Institution Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="demo-institution"
                          name="institution"
                          type="text"
                          required
                          value={formData.institution}
                          onChange={handleChange}
                          placeholder="Govt. College of Engineering"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="demo-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="demo-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Designation */}
                    <div>
                      <label htmlFor="demo-designation" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Designation / Role <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="demo-designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-[#131C31] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      >
                        {designations.map((d) => (
                          <option key={d} value={d} className="bg-white dark:bg-[#0E1526] text-slate-900 dark:text-white">{d}</option>
                        ))}
                      </select>
                    </div>

                    {/* Primary Interest */}
                    <div>
                      <label htmlFor="demo-interest" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Primary Area of Interest
                      </label>
                      <select
                        id="demo-interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-[#131C31] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      >
                        {interestAreas.map((item) => (
                          <option key={item} value={item} className="bg-white dark:bg-[#0E1526] text-slate-900 dark:text-white">{item}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="demo-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Specific Requirements or Upcoming Accreditation Dates (Optional)
                    </label>
                    <textarea
                      id="demo-message"
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Preparing for NBA Tier-II visit in Dec 2026; need support for 4 undergraduate engineering programmes."
                      className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Connecting with Academic Solutions Team...</span>
                        </>
                      ) : (
                        <>
                          <span>Schedule Free Institutional Walkthrough</span>
                          <Sparkles className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-2.5">
                      No commitment required. Demonstration includes real course mapping & attainment templates.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
