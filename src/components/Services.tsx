import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, Box, Factory, Hammer, Shield, Flame, Eye, Sparkles, Check } from 'lucide-react';
import { servicesData } from '../data/siteData';
import { useInView } from '../hooks/useInView';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Layers,
  Box,
  Factory,
  Hammer,
  Shield,
  Flame,
  Eye,
  Sparkles
};

const serviceCategories = ['All Phases', 'Planning & Design', 'Prefabrication & Fabrication', 'Envelope & Execution', 'Hospitality'] as const;

export default function Services() {
  const { ref, inView } = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState<string>('All Phases');

  const filteredServices = activeCategory === 'All Phases'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section id="services" ref={ref} className="py-28 md:py-40 bg-[#faf9f6] text-[#0c0c0e] relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#b8965a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-20 gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] text-[#0c0c0e]">
              From concept<br />
              <span className="italic text-[#967945]">to completion.</span>
            </h2>
          </div>

          <p className="text-[#4a4742] text-sm sm:text-base font-light max-w-md leading-relaxed">
            Hindura can support a project at the stage where you are today—whether that means defining the opportunity, planning the build, fabricating components or coordinating final execution.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] tracking-[0.2em] uppercase font-medium px-4 py-2.5 transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#0c0c0e] text-white border-[#0c0c0e] font-semibold shadow-md'
                  : 'bg-white text-[#4a4742] border-[#e4e1db] hover:border-[#b8965a]/60 hover:text-[#0c0c0e] shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <div
                key={service.id}
                className="bg-white border border-[#e4e1db] hover:border-[#b8965a]/60 p-8 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#b8965a] tracking-widest font-bold">
                      PHASE {service.number}
                    </span>
                    <div className="w-10 h-10 border border-[#e4e1db] group-hover:border-[#b8965a]/50 flex items-center justify-center text-[#b8965a] group-hover:bg-[#faf9f6] transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="text-[9px] tracking-[0.25em] uppercase text-[#4a4742]/60 font-semibold mb-2">
                    {service.category}
                  </div>

                  <h3 className="text-2xl font-light font-serif text-[#0c0c0e] mb-4 group-hover:text-[#967945] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#4a4742] text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Service Checklist */}
                  {service.details && (
                    <div className="space-y-2 pt-4 border-t border-[#e4e1db] mb-6">
                      {service.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#4a4742]">
                          <Check size={12} className="text-[#b8965a] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#e4e1db] flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-semibold text-[#b8965a] group-hover:text-[#0c0c0e] transition-colors"
                  >
                    <span>Inquire for project</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Consultation Banner */}
        <div className="mt-16 bg-[#0c0c0e] border border-[#0c0c0e] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold mb-2">
              Ready to Scope Your Build?
            </div>
            <h4 className="text-2xl sm:text-3xl font-serif font-light text-white mb-2">
              Start with Discovery & Feasibility
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Whether you are evaluating a raw parcel of land or expanding an operational resort, our Indore team will help map the optimal modular strategy and budget breakdown.
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