import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Cpu } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function HomeIntro() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="intro" ref={ref} className="py-24 md:py-36 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Photo with Floating Accent Card */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative overflow-hidden bg-[#0c0c0e] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                alt="Hindura Resort Architecture"
                className="w-full h-[480px] md:h-[580px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Architectural Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0c0c0e] border border-[#b8965a] p-6 sm:p-8 max-w-[260px] shadow-2xl text-white">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-medium mb-2">
                Core Focus
              </div>
              <div className="text-xl font-serif font-light leading-snug">
                Prefabrication & Hospitality Development
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[11px] tracking-[0.35em] uppercase font-semibold">
                WHERE WE WORK
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0c0c0e] leading-[1.1] mb-8 font-serif">
              Construction with a<br />
              <span className="italic text-[#967945]">clearer point of view.</span>
            </h2>

            <div className="space-y-6 text-[#4a4742] text-base md:text-lg leading-relaxed font-light mb-10">
              <p className="text-[#1c1c21] font-normal leading-relaxed">
                A great hospitality project is more than a structure. It is the setting for a guest’s first impression, a quiet morning, a long conversation and a reason to return. Hindura helps turn that experience into a buildable reality.
              </p>
              <p>
                We work with owners, developers and project teams from early discovery through design coordination, fabrication, site assembly and handover. Our approach combines modular thinking with the flexibility needed to create spaces that feel considered, distinctive and built for their surroundings.
              </p>
            </div>

            {/* Key Differentiators / Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-[#e4e1db] mb-10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none border border-[#b8965a]/40 bg-white flex items-center justify-center text-[#b8965a] shrink-0 mt-0.5">
                  <Compass size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0c0c0e] mb-1">Thoughtful Planning</h4>
                  <p className="text-[11px] text-[#787570] leading-snug">Site-specific discovery and modular design alignment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none border border-[#b8965a]/40 bg-white flex items-center justify-center text-[#b8965a] shrink-0 mt-0.5">
                  <Cpu size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0c0c0e] mb-1">Off-Site Fabrication</h4>
                  <p className="text-[11px] text-[#787570] leading-snug">Controlled pre-assembly minimizing on-site delays.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none border border-[#b8965a]/40 bg-white flex items-center justify-center text-[#b8965a] shrink-0 mt-0.5">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0c0c0e] mb-1">On-Site Execution</h4>
                  <p className="text-[11px] text-[#787570] leading-snug">Rapid precision assembly with unified accountability.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-semibold text-[#0c0c0e] hover:text-[#b8965a] transition-colors border-b-2 border-[#0c0c0e] pb-1 hover:border-[#b8965a]"
              >
                <span>About our vision</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-[#787570] hover:text-[#0c0c0e] transition-colors"
              >
                <span>View builds</span>
                <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
