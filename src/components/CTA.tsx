import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { companyDetails } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function CTA() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-[#0c0c0e] text-white overflow-hidden">
      
      {/* Background Architectural Texture */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85"
          alt="Hindura Resort Architecture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/90 to-[#0c0c0e]/70" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <div className={`lg:col-span-8 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                START A PROJECT
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.1] text-white mb-6">
              Have a site, an idea, or a resort<br />
              <span className="italic text-[#d6b67e]">waiting to be built?</span>
            </h2>

            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Tell us what you are planning. Share your site, project type, approximate scale and what you want the finished experience to feel like. We will help you identify the right next step.
            </p>
          </div>

          <div className={`lg:col-span-4 flex flex-col gap-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 w-full py-4.5 px-8 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl"
            >
              <span>Start a conversation</span>
              <ArrowRight size={14} />
            </Link>

            <a
              href={`tel:${companyDetails.phonePrimary}`}
              className="inline-flex items-center justify-center gap-3 w-full py-4 px-8 border border-white/30 hover:border-[#b8965a] text-white hover:text-[#b8965a] text-xs tracking-[0.2em] uppercase font-medium transition-colors backdrop-blur-xs"
            >
              <Phone size={14} className="text-[#b8965a]" />
              <span>Discuss your project</span>
            </a>

            <div className="text-center text-xs text-white/50 pt-2">
              Based in Indore · Serving Hospitality Projects Pan-India
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}