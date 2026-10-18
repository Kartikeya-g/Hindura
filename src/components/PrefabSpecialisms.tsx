import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { prefabTypologiesData } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function PrefabSpecialisms() {
  const { ref, inView } = useInView(0.1);
  const [selectedId, setSelectedId] = useState(prefabTypologiesData[0].id);

  const activeTypology = prefabTypologiesData.find((t) => t.id === selectedId) || prefabTypologiesData[0];
  const activeIndex = prefabTypologiesData.findIndex((t) => t.id === selectedId);

  return (
    <section id="prefabrication" ref={ref} className="py-28 md:py-40 bg-luxury-dark text-white relative overflow-hidden">
      
      {/* Rich Architectural Atmospheric Lighting & Texture */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#b8965a]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#d6b67e]/6 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-20 gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                ONE OF OUR SPECIALISMS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] text-white">
              Prefabricated<br />
              <span className="italic text-[#d6b67e]">construction typologies.</span>
            </h2>
          </div>

          <p className="text-white/70 text-sm sm:text-base font-light max-w-md leading-relaxed">
            Our typology range spans compact cottages to elevated pods, giving developers flexibility across site conditions and guest experience concepts.
          </p>
        </div>

        {/* 5 Typologies Horizontal Selector Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {prefabTypologiesData.map((item, idx) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-5 text-left border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#18181d] border-[#b8965a] shadow-xl translate-y-[-2px]'
                    : 'bg-[#121215] border-[#222228] hover:border-[#b8965a]/50 hover:bg-[#16161b]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${isSelected ? 'text-[#d6b67e]' : 'text-white/40'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 border ${
                      isSelected ? 'border-[#b8965a]/50 text-[#d6b67e]' : 'border-white/10 text-white/50'
                    }`}>
                      Modular
                    </span>
                  </div>

                  <h3 className={`text-base font-serif font-light mb-1 ${isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                    {item.name}
                  </h3>
                </div>

                <div className={`text-[11px] truncate tracking-normal mt-3 ${isSelected ? 'text-[#d6b67e]' : 'text-white/50 group-hover:text-white/70'}`}>
                  {item.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Typology Showcase Card */}
        <div className="bg-[#141417] border border-[#26262d] p-6 sm:p-10 lg:p-14 shadow-2xl mb-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase bg-[#b8965a] text-[#0c0c0e] font-semibold px-3 py-1">
                    TYPOLOGY 0{activeIndex + 1}
                  </span>
                  <span className="text-xs text-[#d6b67e] font-medium tracking-wide flex items-center gap-1.5">
                    <Sparkles size={13} />
                    Off-Site Factory Fabricated
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-white mb-2 leading-tight">
                  {activeTypology.name}
                </h3>

                <p className="text-[#d6b67e] text-xs sm:text-sm font-medium tracking-wide mb-6">
                  {activeTypology.tagline}
                </p>

                <p className="text-white/85 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {activeTypology.description}
                </p>

                <div className="p-4 bg-[#1c1c22] border-l-2 border-[#b8965a] text-xs text-white/85 mb-6">
                  <span className="text-[#b8965a] font-semibold uppercase tracking-wider block mb-1">Recommended Application:</span>
                  {activeTypology.bestFor}
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {activeTypology.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/85 bg-[#18181e] p-3 border border-[#2a2a34]">
                      <CheckCircle2 size={14} className="text-[#b8965a] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#26262d] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  <span>Inquire {activeTypology.name}</span>
                  <ArrowRight size={13} />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-white/70 hover:text-[#b8965a] transition-colors"
                >
                  <span>Explore built projects</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Image Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[360px] sm:h-[460px] w-full overflow-hidden border border-[#26262d] group">
                <img
                  key={activeTypology.id}
                  src={activeTypology.image}
                  alt={activeTypology.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-[#141417]/30 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-[#0c0c0e]/85 backdrop-blur-md px-3.5 py-1.5 border border-[#b8965a]/40 text-[#d6b67e] text-[10px] tracking-[0.2em] uppercase font-semibold">
                  {activeTypology.name}
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#0c0c0e]/85 backdrop-blur-md p-4 border border-[#26262d] flex items-center justify-between text-xs text-white/80">
                  <span>Fast On-Site Erection</span>
                  <span className="text-[#b8965a] font-semibold">Hindura Prefab Hub · Indore</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Closing Line & Dual CTAs (From Document Page 2) */}
        <div className="p-8 sm:p-10 bg-[#18181d] border border-[#26262d] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-light text-white mb-1">
              Planning a resort, farm stay or retreat?
            </h4>
            <p className="text-xs sm:text-sm text-white/70">
              Talk to us about your site, zoning, and target opening schedule.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.2em] uppercase transition-colors"
            >
              <span>Talk to us about your site</span>
              <ArrowRight size={13} />
            </Link>

            <a
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 hover:border-[#b8965a] text-white hover:text-[#b8965a] text-xs tracking-[0.2em] uppercase font-medium transition-colors"
            >
              <Download size={13} className="text-[#b8965a]" />
              <span>Download prefab catalog</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
