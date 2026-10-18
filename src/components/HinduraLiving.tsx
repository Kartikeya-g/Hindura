import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, HeartHandshake, SunMedium } from 'lucide-react';
import { hinduraLiving } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function HinduraLiving() {
  const { ref, inView } = useInView(0.12);

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-luxury-dark text-white overflow-hidden">
      
      {/* Immersive Background Resort Photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
          alt="Hindura Living Hospitality Experience"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-[#0c0c0e]" />
      </div>

      {/* Rich Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#b8965a]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow */}
          <div className={`inline-flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-8 h-px bg-[#b8965a]" />
            <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-semibold">
              BRAND / VISION
            </span>
            <div className="w-8 h-px bg-[#b8965a]" />
          </div>

          {/* Headline */}
          <h2 className={`text-4xl sm:text-6xl md:text-7xl font-light font-serif leading-[1.08] mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Better places.<br />
            <span className="italic text-[#d6b67e]">Better ways to live.</span>
          </h2>

          {/* Copy from Section 9 */}
          <div className={`space-y-6 text-white/85 text-base md:text-lg font-light leading-relaxed mb-12 max-w-3xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-white font-normal text-lg md:text-xl font-serif">
              {hinduraLiving.paragraph1}
            </p>
            <p className="text-white/70 text-sm md:text-base">
              {hinduraLiving.paragraph2}
            </p>
          </div>

          {/* 3 Core Pillars of Hindura Living */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-[#141417]/80 backdrop-blur-sm border border-[#26262d] p-6">
              <div className="w-10 h-10 border border-[#b8965a] flex items-center justify-center text-[#b8965a] mb-4">
                <Leaf size={18} />
              </div>
              <h4 className="text-lg font-serif font-light text-white mb-1">Natural Connection</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Seamless indoor-outdoor flow prioritizing natural light, organic materials, and gentle terrain integration.
              </p>
            </div>

            <div className="bg-[#141417]/80 backdrop-blur-sm border border-[#26262d] p-6">
              <div className="w-10 h-10 border border-[#b8965a] flex items-center justify-center text-[#b8965a] mb-4">
                <SunMedium size={18} />
              </div>
              <h4 className="text-lg font-serif font-light text-white mb-1">Thermal & Acoustic Comfort</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Prefabricated insulated cores delivering quiet, restful mornings and sustainable micro-climates.
              </p>
            </div>

            <div className="bg-[#141417]/80 backdrop-blur-sm border border-[#26262d] p-6">
              <div className="w-10 h-10 border border-[#b8965a] flex items-center justify-center text-[#b8965a] mb-4">
                <HeartHandshake size={18} />
              </div>
              <h4 className="text-lg font-serif font-light text-white mb-1">Community & Sanctuary</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Spaces shaped for meaningful gatherings, shared dining, and long-lasting memories for guests and families.
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.25em] uppercase transition-colors"
            >
              <span>Learn about our story</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
