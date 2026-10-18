import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { companyDetails } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import { sendProjectEnquiry } from '../services/emailService';

export default function Contact() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    role: 'landowner',
    serviceInterest: 'Advisory & Planning (Land Intelligence, RERA, Feasibility)',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; serviceInterest: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Contact Form] Submit Triggered', form);
    setLoading(true);
    setError(null);

    const result = await sendProjectEnquiry({
      name: form.name,
      phone: form.phone,
      email: form.email,
      city: form.city,
      location: form.city,
      role: form.role,
      serviceInterest: form.serviceInterest,
      projectType: form.serviceInterest,
      message: form.message
    });
    console.log('[Contact Form] Submission Result:', result);

    setLoading(false);
    if (result.success) {
      setSubmittedData({
        name: form.name,
        email: form.email,
        serviceInterest: form.serviceInterest
      });
      // Reset form fields
      setForm({
        name: '',
        phone: '',
        email: '',
        city: '',
        role: 'landowner',
        serviceInterest: 'Advisory & Planning (Land Intelligence, RERA, Feasibility)',
        message: ''
      });
    } else {
      setError(result.message || 'Unable to submit enquiry at this time. Please try again or reach out directly.');
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 bg-luxury-light text-[#0c0c0e] relative overflow-hidden">
      {/* Rich Ambient Gold Glow */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#b8965a]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#d6b67e]/6 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Information */}
          <div className={`lg:col-span-5 flex flex-col justify-between transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#b8965a]" />
                <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-light font-serif text-[#0c0c0e] leading-[1.1] mb-6">
                Tell us where you are<br />
                <span className="italic text-[#967945]">in the journey.</span>
              </h2>

              <p className="text-[#4a4742] text-sm sm:text-base font-light leading-relaxed mb-10">
                Whether you have land to evaluate, a project to plan, or an asset to lease, tell us where you are in the journey. Engage us for a single mandate, or for the full journey.
              </p>

              {/* Direct Details Card */}
              <div className="space-y-6 bg-[#faf9f6] border border-[#e4e1db] p-6 sm:p-8">
                
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#b8965a] bg-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-[#b8965a]" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[#787570] font-semibold mb-1">
                      Office Address
                    </div>
                    <div className="text-sm text-[#0c0c0e] font-medium leading-relaxed">
                      {companyDetails.office}
                    </div>
                    <div className="text-xs text-[#787570] mt-0.5">
                      Hindura Building Solutions Pvt. Ltd., Indore, Madhya Pradesh, India
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#b8965a] bg-white flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} className="text-[#b8965a]" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[#787570] font-semibold mb-1">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${companyDetails.email}`}
                      className="text-sm text-[#0c0c0e] hover:text-[#b8965a] transition-colors font-medium"
                    >
                      {companyDetails.email}
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#b8965a] bg-white flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} className="text-[#b8965a]" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[#787570] font-semibold mb-1">
                      Phone & WhatsApp
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-[#0c0c0e] font-medium">
                      <a href={`tel:${companyDetails.phonePrimary}`} className="hover:text-[#b8965a] transition-colors">
                        {companyDetails.phonePrimary}
                      </a>
                      <a href={`tel:${companyDetails.phoneSecondary}`} className="hover:text-[#b8965a] transition-colors">
                        {companyDetails.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#b8965a] bg-white flex items-center justify-center shrink-0 mt-0.5">
                    <Globe size={16} className="text-[#b8965a]" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[#787570] font-semibold mb-1">
                      Website
                    </div>
                    <span className="text-sm text-[#0c0c0e] font-medium">
                      {companyDetails.website}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-6 text-xs text-[#787570] hidden lg:block">
              {companyDetails.footerMotto}
            </div>
          </div>

          {/* Right Column: Project Enquiry Form (Aligned with Page 5 of Document) */}
          <div className={`lg:col-span-7 bg-[#faf9f6] border border-[#e4e1db] p-8 sm:p-12 shadow-sm transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {submittedData ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 bg-[#b8965a]/15 border-2 border-[#b8965a] rounded-full flex items-center justify-center text-[#b8965a] mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <div className="text-xs tracking-[0.25em] uppercase text-[#b8965a] font-semibold">
                  Enquiry Successfully Received
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-light text-[#0c0c0e]">
                  Thank you, {submittedData.name}.
                </h3>
                <div className="space-y-3 text-sm text-[#4a4742] max-w-lg mx-auto leading-relaxed">
                  <p>
                    Your brief for <strong className="text-[#0c0c0e]">{submittedData.serviceInterest}</strong> has been received and forwarded directly to our advisory and leadership team in Indore.
                  </p>
                  <p className="text-xs text-[#787570]">
                    A copy of your message was dispatched to <strong className="text-[#0c0c0e]">{submittedData.email}</strong>. Our managing directors and advisory leads will review your inquiry and connect with you within 24 hours.
                  </p>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#0c0c0e] text-white hover:bg-[#b8965a] hover:text-[#0c0c0e] text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-sm"
                  >
                    Submit another enquiry
                  </button>
                  <a
                    href={`tel:${companyDetails.phonePrimary}`}
                    className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#b8965a] text-[#b8965a] hover:bg-[#b8965a] hover:text-white text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300"
                  >
                    Call our office
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#b8965a] font-semibold mb-1">
                    Direct Mandate Inquiry
                  </div>
                  <h3 className="text-2xl font-serif font-light text-[#0c0c0e]">
                    Get in Touch
                  </h3>
                  <p className="text-xs text-[#787570] mt-1">
                    Tell us where you are in the journey and we will tell you how we can help.
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
                    <AlertCircle size={16} className="shrink-0 text-red-500" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000-00000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Indore, Bhopal, Ujjain, Mumbai"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      I am a *
                    </label>
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    >
                      <option value="landowner">Landowner</option>
                      <option value="developer">Developer</option>
                      <option value="institution">Institution / Investment Fund</option>
                      <option value="operator">Operator (Hotel, Resort, Wellness)</option>
                      <option value="individual">Individual Investor / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      Service of Interest *
                    </label>
                    <select
                      value={form.serviceInterest}
                      onChange={(e) => setForm({ ...form, serviceInterest: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    >
                      <option value="Advisory & Planning (Land Intelligence, RERA, Feasibility)">
                        Advisory & Planning (Land, RERA, Feasibility)
                      </option>
                      <option value="Design & Construction (Architectural & Engineering)">
                        Design & Construction (Architectural & BIM)
                      </option>
                      <option value="Prefabricated Construction (Cottages, Pods, Treehouses)">
                        Prefabricated Construction (Cottages, Pods, Treehouses)
                      </option>
                      <option value="Project Management Consultancy (PMC)">
                        Project Management Consultancy (PMC)
                      </option>
                      <option value="Asset & Facility Management">
                        Asset & Facility Management
                      </option>
                      <option value="Leasing & Operator Advisory">
                        Leasing & Operator Advisory
                      </option>
                      <option value="Full Journey Mandate (End-to-End)">
                        Full Journey Mandate (End-to-End)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                    Message / Project Brief *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your land, project idea, or asset. Share location, scale, and timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors resize-none"
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#0c0c0e] hover:bg-[#b8965a] text-white hover:text-[#0c0c0e] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={15} className="animate-spin text-[#b8965a]" />
                      <span>Transmitting mandate details...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}