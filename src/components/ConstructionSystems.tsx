import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, ShieldCheck, Zap, Sparkles, CheckCircle2, Cpu, Wrench, Shield, Compass } from 'lucide-react';
import { constructionSystemsData } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function ConstructionSystems() {
  const { ref, inView } = useInView(0.08);
  const [selectedSystem, setSelectedSystem] = useState(constructionSystemsData[0].id);

  const activeIndex = constructionSystemsData.findIndex((s) => s.id === selectedSystem);
  const active = constructionSystemsData[activeIndex] || constructionSystemsData[0];

  return (
    <section id="systems" ref={ref} className="py-28 md:py-40 bg-[#f4f1eb] relative overflow-hidden">
      
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-b from-[#e8e4dc]/50 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-20 gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                BUILT SMARTER · SYSTEMS & ENVELOPE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif text-[#0c0c0e] leading-[1.08]">
              Construction systems<br />
              <span className="italic text-[#967945]">engineered for experience.</span>
            </h2>
          </div>

          <p className="text-[#4a4742] text-sm sm:text-base font-light max-w-md leading-relaxed">
            Our construction approach uses prefabricated and insulated building components where they make sense for the project. The goal is not to force every project into one system, but to select the right combination of structure, envelope, roofing and finishes for the site’s requirements and the desired guest experience.
          </p>
        </div>

        {/* 5 Systems Interactive Horizontal Tab Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
          {constructionSystemsData.map((sys, idx) => {
            const isSelected = sys.id === selectedSystem;
            return (
              <button
                key={sys.id}
                onClick={() => setSelectedSystem(sys.id)}
                className={`text-left p-4.5 transition-all duration-300 border flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#0c0c0e] text-white border-[#0c0c0e] shadow-xl translate-y-[-2px]'
                    : 'bg-white text-[#141417] border-[#e4e1db] hover:border-[#b8965a] hover:bg-[#faf9f6]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${isSelected ? 'text-[#d6b67e]' : 'text-[#b8965a]'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 border ${
                      isSelected ? 'border-white/20 text-white/70' : 'border-[#e4e1db] text-[#787570]'
                    }`}>
                      {sys.coreMetric.split(' ')[0]}
                    </span>
                  </div>

                  <div className={`text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1 ${
                    isSelected ? 'text-white font-serif' : 'text-[#0c0c0e]'
                  }`}>
                    {sys.name}
                  </div>
                </div>

                <div className={`text-[11px] truncate tracking-normal mt-2 ${
                  isSelected ? 'text-[#d6b67e]' : 'text-[#787570] group-hover:text-[#0c0c0e]'
                }`}>
                  {sys.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Architectural Monograph Showcase */}
        <div className="bg-[#0c0c0e] text-white border border-[#26262d] shadow-2xl p-6 sm:p-10 lg:p-14 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Technical Narrative & Engineering Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Category & Badge Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase bg-[#b8965a] text-[#0c0c0e] font-semibold px-3 py-1">
                    {active.category}
                  </span>
                  <span className="text-xs text-[#d6b67e] font-medium tracking-wide flex items-center gap-1.5">
                    <Sparkles size={13} />
                    {active.coreMetric}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-white mb-4 leading-tight">
                  {active.name}
                </h3>

                <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {active.description}
                </p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {active.specs.map((spec, i) => (
                    <div key={i} className="bg-[#141417] p-3.5 border border-[#26262d]">
                      <div className="text-[9px] tracking-[0.2em] uppercase text-[#b8965a] font-semibold mb-1">
                        {spec.label}
                      </div>
                      <div className="text-xs text-white/90 font-medium">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Engineering Advantages Checklist */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold">
                    Key Performance Advantages
                  </div>
                  {active.advantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                      <CheckCircle2 size={15} className="text-[#b8965a] shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended Application Note */}
                <div className="p-4 bg-[#141417] border-l-2 border-[#b8965a] text-xs text-white/80">
                  <span className="text-[#b8965a] font-semibold uppercase tracking-wider">Ideal Application: </span>
                  <span>{active.application}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#26262d] flex items-center gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  <span>Inquire for your site</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/projects"
                  className="text-xs tracking-[0.2em] uppercase text-white/70 hover:text-[#b8965a] transition-colors"
                >
                  View built projects →
                </Link>
              </div>
            </div>

            {/* Right Column: Visual System Render & Blueprint Hotspots */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden border border-[#26262d] group">
                <img
                  key={active.id}
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute top-5 left-5 bg-[#0c0c0e]/90 backdrop-blur-md px-3.5 py-2 border border-white/20">
                  <div className="text-[9px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold">
                    FABRICATED IN FACTORY
                  </div>
                  <div className="text-xs text-white font-medium">
                    100% Dry On-Site Assembly
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 bg-[#0c0c0e]/85 backdrop-blur-md p-4 border border-[#26262d] flex items-center justify-between">
                  <div>
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#787570]">
                      System Archetype
                    </div>
                    <div className="text-sm font-serif text-white">
                      {active.name}
                    </div>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#d6b67e] font-semibold">
                    INDORE HQ
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Phase Prefabrication Assembly Flow */}
        <div className="bg-white border border-[#e4e1db] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 pb-6 border-b border-[#e4e1db]">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold mb-1">
                EXECUTION METHODOLOGY
              </div>
              <h4 className="text-2xl sm:text-3xl font-light font-serif text-[#0c0c0e]">
                How Prefabrication Delivers Faster Stays
              </h4>
            </div>
            <div className="text-xs text-[#787570] max-w-md">
              Shifting up to 60% of structural build activities off-site eliminates monsoon delays and guarantees factory tolerances.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Factory Dry-Casting',
                desc: 'Precision structural steel framing and pre-made wall panels engineered under controlled indoor tolerances.',
                icon: Layers
              },
              {
                step: '02',
                title: 'Thermal & Core Bonding',
                desc: 'High-density EPS and acoustic damping insulation bonded into sealed composite units.',
                icon: Zap
              },
              {
                step: '03',
                title: 'Flat-Pack Logistics',
                desc: 'Protected component packaging and transport directly to remote or ecologically sensitive nature sites.',
                icon: ShieldCheck
              },
              {
                step: '04',
                title: 'Rapid Site Assembly',
                desc: 'Fast interlocking erection on minimal foundation footings with zero wet-casting stoppages.',
                icon: Sparkles
              }
            ].map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <div key={idx} className="bg-[#faf9f6] border border-[#e4e1db] p-6 relative group hover:border-[#b8965a] transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#b8965a]">PHASE {phase.step}</span>
                    <Icon size={18} className="text-[#0c0c0e] group-hover:text-[#b8965a] transition-colors" />
                  </div>
                  <h5 className="text-base font-semibold text-[#0c0c0e] mb-2 font-serif">{phase.title}</h5>
                  <p className="text-xs text-[#787570] leading-relaxed">{phase.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
