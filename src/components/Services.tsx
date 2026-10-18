import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { serviceDivisions } from '../data/siteData';
import { useInView } from '../hooks/useInView';

const divisionIcons: Record<string, React.ElementType> = {
  'advisory-planning': Compass,
  'design-construction': Layers,
  'project-asset-management': ShieldCheck,
  'leasing-operator-advisory': Sparkles
};

export default function Services() {
  const { ref, inView } = useInView(0.1);
  const [activeDivision, setActiveDivision] = useState<string>(serviceDivisions[0].id);

  const currentDivision = serviceDivisions.find((d) => d.id === activeDivision) || serviceDivisions[0];
  const Icon = divisionIcons[currentDivision.id] || Compass;

  return (
    <section id="services" ref={ref} className="py-28 md:py-40 bg-luxury-light text-[#0c0c0e] relative overflow-hidden border-b border-[#e8e4dc]">
      
      {/* Rich Ambient Gold Glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#b8965a]/9 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#d6b67e]/6 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-20 gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                WHAT WE DO · OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] text-[#0c0c0e]">
              From earliest idea<br />
              <span className="italic text-[#967945]">to operational maturity.</span>
            </h2>
          </div>

          <p className="text-[#4a4742] text-sm sm:text-base font-light max-w-md leading-relaxed">
            We accompany projects from the earliest idea to full operational maturity. Engage us for a single mandate, or for the full journey.
          </p>
        </div>

        {/* 4 Division Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {serviceDivisions.map((div, idx) => {
            const isActive = div.id === activeDivision;
            const DivIcon = divisionIcons[div.id] || Compass;
            return (
              <button
                key={div.id}
                onClick={() => setActiveDivision(div.id)}
                className={`p-5 text-left border transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? 'bg-[#0c0c0e] text-white border-[#0c0c0e] shadow-xl'
                    : 'bg-white text-[#141417] border-[#e4e1db] hover:border-[#b8965a]/60 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${isActive ? 'text-[#d6b67e]' : 'text-[#b8965a]'}`}>
                      PILLAR 0{idx + 1}
                    </span>
                    <DivIcon size={16} className={isActive ? 'text-[#d6b67e]' : 'text-[#787570]'} />
                  </div>
                  <h3 className={`text-base sm:text-lg font-serif font-light ${isActive ? 'text-white' : 'text-[#0c0c0e]'}`}>
                    {div.title}
                  </h3>
                </div>

                <div className={`text-[11px] mt-4 flex items-center gap-1.5 font-medium ${isActive ? 'text-[#d6b67e]' : 'text-[#787570] group-hover:text-[#0c0c0e]'}`}>
                  <span>{div.services.length} Specialisms</span>
                  <ArrowRight size={11} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Division Detailed Showcase */}
        <div className="bg-white border border-[#e4e1db] p-8 sm:p-12 lg:p-14 shadow-sm mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#e4e1db] mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon size={18} className="text-[#b8965a]" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold">
                  Comprehensive Capability
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-light text-[#0c0c0e]">
                {currentDivision.title}
              </h3>
            </div>
            <p className="text-sm text-[#4a4742] max-w-lg leading-relaxed font-light">
              {currentDivision.summary}
            </p>
          </div>

          {/* Services Grid for Active Division */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {currentDivision.services.map((srv, index) => (
              <div
                key={srv.name}
                className="bg-[#faf9f6] border border-[#e4e1db] p-6 hover:border-[#b8965a] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#b8965a]">
                      SERVICE 0{index + 1}
                    </span>
                    <CheckCircle2 size={15} className="text-[#b8965a]" />
                  </div>
                  <h4 className="text-xl font-serif font-light text-[#0c0c0e] mb-2 group-hover:text-[#967945] transition-colors">
                    {srv.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4a4742] leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#e4e1db] flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#b8965a] group-hover:text-[#0c0c0e] transition-colors flex items-center gap-1.5"
                  >
                    <span>Inquire for {srv.name}</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Consultation Banner */}
        <div className="bg-[#0c0c0e] border border-[#0c0c0e] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold mb-2">
              Ready to Scope Your Mandate?
            </div>
            <h4 className="text-2xl sm:text-3xl font-serif font-light text-white mb-2">
              Start with Land Diligence & Feasibility
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Whether you are evaluating a raw land parcel in Central India, seeking statutory permissions, or planning a turnkey resort or industrial build, Hindura provides end-to-end guidance.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.2em] uppercase transition-colors shrink-0"
          >
            <span>Start a conversation</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}