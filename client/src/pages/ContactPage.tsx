import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Building2, User, HelpCircle, Calendar, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyData } from '../data/companyData';
import { SEOHead } from '../components/common/SEOHead';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    designation: 'IQAC Coordinator',
    phone: '',
    interest: 'Complete OBE & CO-PO Platform',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    'Complete OBE & CO-PO Platform',
    'CO–PO–PSO Mapping Engine',
    'Outcome Attainment Analytics (Direct & Indirect)',
    'NBA & NAAC Documentation Support',
    'Digital Course File & Evidence Vault'
  ];

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

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid official/institutional email address.');
      return;
    }

    if (!formData.institution.trim() || formData.institution.trim().length < 3) {
      setErrorMessage('Please provide your college or university name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setErrorMessage('Please enter a valid contact phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/snmali1608@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name.trim(),
          Email: formData.email.trim().toLowerCase(),
          Institution: formData.institution.trim(),
          Designation: formData.designation,
          Phone: formData.phone.trim(),
          'Area of Interest': formData.interest,
          Message: formData.message.trim() || 'Standard demonstration requested.',
          _subject: `New VasuNiti Demo Request: ${formData.institution.trim()} (${formData.name.trim()})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit demonstration request via formsubmit.co');
      }

      setIsSubmitting(false);
      setSuccessMessage('Thank you! Your institutional demonstration request has been sent to our academic solutions team. We will review your requirements and reach out within 24 hours.');

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#315FEA', '#4F7CFF', '#14213D', '#16A34A'],
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        institution: '',
        designation: 'IQAC Coordinator',
        phone: '',
        interest: 'Complete OBE & CO-PO Platform',
        message: '',
      });
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err.message || 'Failed to submit request via formsubmit.co. Please try again or reach out to us directly.');
    }
  };

  return (
    <>
      <SEOHead
        title="Contact VasuNiti — Request an Institutional OBE Software Demonstration"
        description="Schedule a product walkthrough with VasuNiti's academic solutions team. Streamline CO–PO mapping and outcome attainment for your engineering college or university."
      />

      <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#050814] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              Institutional Engagement
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Book a Free <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">Institutional Demo</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Discover how VasuNiti can adapt to your institution’s academic regulations, course schemes, and accreditation documentation timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Interactive Demo Request Form (7 cols on lg) */}
            <div className="lg:col-span-7 bg-slate-50/70 dark:bg-[#0E1526] rounded-3xl border border-slate-200/90 dark:border-white/[0.08] p-8 sm:p-10 shadow-sm transition-colors">
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200/90 dark:border-white/[0.08]">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 border border-white/20">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    Schedule Your Walkthrough
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Customized demonstration for your Principal, IQAC, and HODs
                  </p>
                </div>
              </div>

              {successMessage ? (
                <div className="text-center py-10 px-4">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-2 mx-auto flex items-center justify-center mb-4 shadow-md">
                    <img src="/vasuniti-symbol.png" alt="VasuNiti" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mb-2">
                    Demonstration Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                    {successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccessMessage(null)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-xs font-semibold hover:from-blue-500 hover:to-violet-500 transition-all shadow-md shadow-indigo-600/25"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  action="https://formsubmit.co/snmali1608@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  {errorMessage && (
                    <div className="p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 rounded-xl flex items-center gap-2.5 text-xs text-red-700 dark:text-red-300">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr. Anand Deshmukh"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-white dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Official Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Official / College Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="principal@college.edu"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-white dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* College / Institution Name */}
                    <div>
                      <label htmlFor="contact-institution" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        College / University Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="contact-institution"
                          name="institution"
                          type="text"
                          required
                          value={formData.institution}
                          onChange={handleChange}
                          placeholder="Institute of Technology"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-white dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98220 12345"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-white dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Designation */}
                    <div>
                      <label htmlFor="contact-designation" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Designation / Role <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-white dark:bg-[#131C31] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      >
                        {designations.map((d) => (
                          <option key={d} value={d} className="bg-white dark:bg-[#0E1526]">{d}</option>
                        ))}
                      </select>
                    </div>

                    {/* Area of Interest */}
                    <div>
                      <label htmlFor="contact-interest" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Primary Area of Interest
                      </label>
                      <select
                        id="contact-interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-white dark:bg-[#131C31] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      >
                        {interestAreas.map((item) => (
                          <option key={item} value={item} className="bg-white dark:bg-[#0E1526]">{item}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Specific Requirements, Departments, or Upcoming Audit Dates (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g., Preparing NBA Self Assessment Report for CSE & ECE departments; autonomous regulation scheme 2024."
                      className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 dark:border-white/10 bg-white dark:bg-[#131C31] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Demo Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Institutional Demo</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-2.5">
                      Our academic solutions consultants will respond within 24 hours to schedule your session.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Contact Information & Institutional FAQ (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Institutional Channels */}
              <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white p-7 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-5 relative">
                  <div className="w-9 h-9 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20 shadow-md flex-shrink-0">
                    <img src="/vasuniti-symbol.png" alt="VasuNiti" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Institutional Inquiries & Support
                  </h3>
                </div>

                <div className="space-y-4 text-xs text-slate-300 relative">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Academic & General Inquiries</span>
                      <a href={`mailto:${companyData.inquiryEmail}`} className="text-white text-sm font-bold hover:underline hover:text-blue-300 transition-colors">
                        {companyData.inquiryEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Helpline & Consultation</span>
                      <a href={`tel:${companyData.phone.replace(/[^+\d]/g, '')}`} className="text-white text-sm font-bold hover:underline hover:text-indigo-300 transition-colors">
                        {companyData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center flex-shrink-0 border border-violet-500/30">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Registered Office Address</span>
                      <div className="text-white text-xs mt-0.5 leading-relaxed">
                        {companyData.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="rounded-2xl bg-white dark:bg-[#0E1526] p-6 sm:p-7 border border-slate-200/90 dark:border-white/[0.08] shadow-sm">
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-3.5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  What Happens After You Request a Demo?
                </h4>
                <ol className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-decimal pl-4 leading-relaxed">
                  <li><strong>Preliminary Consultation:</strong> We understand your current syllabus scheme, regulations, and accreditation goals.</li>
                  <li><strong>Custom Demo Session:</strong> We showcase live mapping and attainment calculations customized to your engineering branch.</li>
                  <li><strong>Sample Dossier Review:</strong> We share sample exported NBA SAR & NAAC dossiers for your IQAC team to inspect.</li>
                </ol>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
