import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { sectorsData } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function WhatWeBuild() {
  const { ref, inView } = useInView(0.1);
  const [activeTab, setActiveTab] = useState(sectorsData[0].id);

  const activeIndex = sectorsData.findIndex((item) => item.id === activeTab);
  const activeItem = sectorsData[activeIndex] || sectorsData[0];

  return (
    <section id="sectors" ref={ref} className="py-28 md:py-40 bg-luxury-dark text-white relative overflow-hidden">
      <div id="what-we-build" className="absolute -top-24" />
      
      {/* Rich Architectural Atmospheric Lighting & Texture */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#b8965a]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#d6b67e]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                WHERE WE WORK · SIX SECTORS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] text-white">
              Advisory and delivery<br />
              <span className="italic text-[#d6b67e]">across six sectors.</span>
            </h2>
          </div>

          <p className="text-white/70 text-sm sm:text-base font-light max-w-md leading-relaxed">
            Our advisory and delivery capability spans six sectors. Each is served by the same end-to-end model — land and legal diligence, planning, design, delivery, and, where relevant, operations.
          </p>
        </div>

        {/* Interactive Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Sectors Navigation Strip */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              {sectorsData.map((item, idx) => {
                const isActive = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left p-5 transition-all duration-300 border flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#18181d] border-[#b8965a] shadow-lg translate-x-1'
                        : 'bg-[#121215] border-[#222228] hover:border-[#b8965a]/40 hover:bg-[#15151a]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? 'text-[#d6b67e]' : 'text-white/40 group-hover:text-white/70'}`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <div className={`text-sm sm:text-base font-medium tracking-wide ${isActive ? 'text-white font-serif' : 'text-white/80 group-hover:text-white'}`}>
                          {item.title}
                        </div>
                        <div className="text-[11px] text-white/50 tracking-wider">
                          {item.tagline}
                        </div>
                      </div>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-[#b8965a] text-[#0c0c0e]' : 'text-white/20 group-hover:text-[#b8965a]'
                    }`}>
                      <ArrowRight size={13} className={isActive ? 'translate-x-0.5' : ''} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Consultation Badge */}
            <div className="pt-6 border-t border-[#26262d] flex items-center justify-between">
              <div className="text-xs text-white/60">
                End-to-end model: land, design, delivery & operations.
              </div>
              <Link
                to="/contact"
                className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#b8965a] hover:text-white transition-colors"
              >
                Inquire Sector →
              </Link>
            </div>
          </div>

          {/* Right Column: Immersive Sector Display Card */}
          <div className="lg:col-span-7 bg-[#141417] border border-[#26262d] overflow-hidden flex flex-col justify-between shadow-2xl relative">
            
            {/* Image Preview with Atmospheric Overlay */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden group">
              <img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-[#141417]/40 to-transparent" />
              
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.3em] uppercase bg-[#0c0c0e]/85 backdrop-blur-md px-3.5 py-1.5 border border-[#b8965a]/40 text-[#d6b67e] font-semibold">
                  SECTOR 0{activeIndex + 1}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase bg-[#0c0c0e]/80 backdrop-blur-md px-3 py-1 text-white/70">
                  Full-Spectrum Model
                </span>
              </div>

              <div className="absolute bottom-5 left-6 right-6">
                <h3 className="text-3xl sm:text-4xl font-light font-serif text-white mb-1">
                  {activeItem.title}
                </h3>
                <p className="text-[#d6b67e] text-xs sm:text-sm font-medium tracking-wide">
                  {activeItem.tagline}
                </p>
              </div>
            </div>

            {/* Sector Details Body */}
            <div className="p-6 sm:p-10 space-y-6">
              <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light">
                {activeItem.description}
              </p>

              {/* End-to-end scope note */}
              <div className="p-4 bg-[#1a1a20] border-l-2 border-[#b8965a] text-xs text-white/80 leading-relaxed">
                <span className="text-[#b8965a] font-semibold uppercase tracking-wider block mb-1">Our Mandate Scope:</span>
                {activeItem.scope}
              </div>

              {/* Deliverables Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {activeItem.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white/90 bg-[#1c1c22] p-3 border border-[#2a2a33]">
                    <CheckCircle2 size={14} className="text-[#b8965a] shrink-0 mt-0.5" />
                    <span className="leading-snug">{d}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#26262d]">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  <span>Inquire for {activeItem.title}</span>
                  <ArrowRight size={13} />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-white/70 hover:text-[#b8965a] transition-colors"
                >
                  <span>View service details</span>
                  <ArrowRight size={13} />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
