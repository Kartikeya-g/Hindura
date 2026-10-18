import { Cpu, PenTool, Hotel, Grid, Users, CheckCircle2 } from 'lucide-react';
import { whyHinduraData } from '../data/siteData';
import { useInView } from '../hooks/useInView';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  PenTool,
  Hotel,
  Grid,
  Users,
  CheckCircle2,
};

export default function WhyHindura() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="why-hindura" ref={ref} className="py-24 md:py-36 bg-[#0c0c0e] text-white relative overflow-hidden">
      
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#26262d_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className={`max-w-3xl mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#b8965a]" />
            <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
              OUR APPROACH
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.1] text-white mb-6">
            A better way to build<br />
            <span className="italic text-[#d6b67e]">across emerging markets.</span>
          </h2>
          <p className="text-white/80 text-base md:text-xl font-serif italic max-w-2xl leading-relaxed text-[#d6b67e]/90">
            Hindura is built around a simple idea: development should be guided with the same institutional rigour as the capital invested in it.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26262d]">
          {whyHinduraData.map((item, index) => {
            const Icon = iconMap[item.icon] || Cpu;
            return (
              <div
                key={item.title}
                className={`bg-[#141417] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#1c1c22] transition-all duration-300 group ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div>
                  <div className="w-12 h-12 border border-[#26262d] group-hover:border-[#b8965a] flex items-center justify-center text-[#b8965a] mb-8 transition-colors">
                    <Icon size={20} />
                  </div>

                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#b8965a] font-medium mb-2">
                    {item.tagline}
                  </div>

                  <h3 className="text-2xl font-light font-serif text-white mb-4 group-hover:text-[#d6b67e] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#26262d]/60 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/70 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8965a]" />
                  <span>Hindura Core Principle</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
