import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { companyDetails } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function CTA() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-luxury-dark text-white overflow-hidden border-y border-[#26262d]">
      
      {/* Background Architectural Texture */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85"
          alt="Hindura Resort Architecture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/90 to-[#0c0c0e]/70" />
      </div>

      {/* Rich Ambient Gold Glow */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#b8965a]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <div className={`lg:col-span-8 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.1] text-white mb-6">
              Have land, a project idea, or a property<br />
              <span className="italic text-[#d6b67e]">that needs direction?</span>
            </h2>

            <p className="text-white/85 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Tell us where you are in the journey and we will tell you how we can help. Engage us for a single mandate, or for the full journey.
            </p>
          </div>

          <div className={`lg:col-span-4 flex flex-col gap-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 w-full py-4.5 px-8 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl"
            >
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </Link>

            <a
              href={`tel:${companyDetails.phonePrimary}`}
              className="inline-flex items-center justify-center gap-3 w-full py-4 px-8 border border-white/30 hover:border-[#b8965a] text-white hover:text-[#b8965a] text-xs tracking-[0.2em] uppercase font-medium transition-colors backdrop-blur-xs"
            >
              <Phone size={14} className="text-[#b8965a]" />
              <span>Discuss with our advisory team</span>
            </a>

            <div className="text-center text-xs text-white/50 pt-2">
              Hindura Building Solutions · Headquartered in Indore, Madhya Pradesh
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}