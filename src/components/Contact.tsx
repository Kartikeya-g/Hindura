import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { companyDetails } from '../data/siteData';
import { useInView } from '../hooks/useInView';
import { sendProjectEnquiry } from '../services/emailService';

export default function Contact() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Nature-Led Resort / Eco-Stay',
    location: '',
    scale: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; projectType: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Contact Form] Submit Triggered', form);
    setLoading(true);
    setError(null);

    const result = await sendProjectEnquiry(form);
    console.log('[Contact Form] Submission Result:', result);

    setLoading(false);
    if (result.success) {
      setSubmittedData({
        name: form.name,
        email: form.email,
        projectType: form.projectType
      });
      // Reset form fields
      setForm({
        name: '',
        email: '',
        phone: '',
        projectType: 'Nature-Led Resort / Eco-Stay',
        location: '',
        scale: '',
        message: ''
      });
    } else {
      setError(result.message || 'Unable to submit enquiry at this time. Please try again or reach out directly.');
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
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
                Have a site, an idea, or a resort<br />
                <span className="italic text-[#967945]">waiting to be built?</span>
              </h2>

              <p className="text-[#4a4742] text-sm sm:text-base font-light leading-relaxed mb-10">
                Tell us what you are planning. Share your site, project type, approximate scale and what you want the finished experience to feel like. We will help you identify the right next step.
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

          {/* Right Column: Project Enquiry Form */}
          <div className={`lg:col-span-7 bg-[#faf9f6] border border-[#e4e1db] p-8 sm:p-12 shadow-sm transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {submittedData ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 bg-[#b8965a]/15 border-2 border-[#b8965a] rounded-full flex items-center justify-center text-[#b8965a] mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <div className="text-xs tracking-[0.25em] uppercase text-[#b8965a] font-semibold">
                  Enquiry Successfully Sent
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-light text-[#0c0c0e]">
                  Thank you, {submittedData.name}.
                </h3>
                <div className="space-y-3 text-sm text-[#4a4742] max-w-lg mx-auto leading-relaxed">
                  <p>
                    Your project details for <strong className="text-[#0c0c0e]">{submittedData.projectType}</strong> have been received and forwarded directly to our founders and planning team at <span className="font-semibold text-[#0c0c0e]">garvarihant@gmail.com</span>.
                  </p>
                  <p className="text-xs text-[#787570]">
                    A confirmation acknowledgement has been dispatched to <strong className="text-[#0c0c0e]">{submittedData.email}</strong>. Our Indore office will review your requirements and reach out within 24 hours.
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
                    Call us directly
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#b8965a] font-semibold mb-1">
                    Project Brief
                  </div>
                  <h3 className="text-2xl font-serif font-light text-[#0c0c0e]">
                    Start a Conversation
                  </h3>
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
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      Phone / WhatsApp *
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

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      Project Typology
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    >
                      <option value="Nature-Led Resort / Eco-Stay">Nature-Led Resort / Eco-Stay</option>
                      <option value="Boutique Hotel">Boutique Hotel</option>
                      <option value="Farmhouse & Private Retreat">Farmhouse & Private Retreat</option>
                      <option value="Modular Cabins / Glamping Suites">Modular Cabins / Glamping Suites</option>
                      <option value="Geodesic Dome Stay">Geodesic Dome Stay</option>
                      <option value="Hospitality Extension (Villas / Cottages)">Hospitality Extension (Villas / Cottages)</option>
                      <option value="Other Prefab Construction">Other Prefab Construction</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      Site Location (City / State)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Indore, Madhya Pradesh"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                      Approximate Scale / Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 10 Villas / 15,000 sq ft / 2 Acres"
                      value={form.scale}
                      onChange={(e) => setForm({ ...form, scale: e.target.value })}
                      className="w-full bg-white border border-[#e4e1db] px-4 py-3 text-sm text-[#0c0c0e] focus:outline-none focus:border-[#b8965a] transition-colors"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#787570] font-semibold mb-2">
                    Project Vision & Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you are planning. Share your site conditions, timeline, and what you want the finished guest experience to feel like..."
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
                      <span>Sending enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit project enquiry</span>
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