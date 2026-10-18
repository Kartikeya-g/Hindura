import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Cpu } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function HomeIntro() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="intro" ref={ref} className="py-24 md:py-36 bg-luxury-light text-[#0c0c0e] relative overflow-hidden border-b border-[#e8e4dc]">
      {/* Rich Ambient Gold Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#b8965a]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#d6b67e]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
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
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0c0c0e] border border-[#b8965a] p-6 sm:p-8 max-w-[280px] shadow-2xl text-white">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-medium mb-2">
                Unified Mandate
              </div>
              <div className="text-xl font-serif font-light leading-snug">
                Land · Design · Delivery · Operations
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[11px] tracking-[0.35em] uppercase font-semibold">
                WHY HINDURA WAS FOUNDED
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0c0c0e] leading-[1.1] mb-8 font-serif">
              At the confluence of<br />
              <span className="italic text-[#967945]">land, design, and delivery.</span>
            </h2>

            <div className="space-y-5 text-[#4a4742] text-base md:text-lg leading-relaxed font-light mb-10">
              <p className="text-[#1c1c21] font-normal leading-relaxed">
                Hindura Building Solutions was founded in Indore because we believe Tier-II and Tier-III India is where the built environment can still be shaped thoughtfully — before land, capital, and ambition outrun good judgment.
              </p>
              <p>
                Our own backgrounds sit at the intersection of land, design, and delivery, and Hindura exists to bring those disciplines together under one roof, for clients who would otherwise have to assemble them one consultant at a time.
              </p>
              <p className="text-sm text-[#787570]">
                We accompany projects from the earliest idea to full operational maturity — advising landowners, developers, and institutions, and where needed, building alongside them.
              </p>
            </div>

            {/* Key Differentiators / Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-[#e4e1db] mb-10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none border border-[#b8965a]/40 bg-white flex items-center justify-center text-[#b8965a] shrink-0 mt-0.5">
                  <Compass size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0c0c0e] mb-1">Land & Diligence</h4>
                  <p className="text-[11px] text-[#787570] leading-snug">Site identification, permissible-use assessment & RERA compliance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none border border-[#b8965a]/40 bg-white flex items-center justify-center text-[#b8965a] shrink-0 mt-0.5">
                  <Cpu size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0c0c0e] mb-1">Design & Prefab</h4>
                  <p className="text-[11px] text-[#787570] leading-snug">Architectural planning coordinated with off-site modular systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none border border-[#b8965a]/40 bg-white flex items-center justify-center text-[#b8965a] shrink-0 mt-0.5">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0c0c0e] mb-1">Delivery & PMC</h4>
                  <p className="text-[11px] text-[#787570] leading-snug">Dedicated execution oversight with single-point accountability.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-semibold text-[#0c0c0e] hover:text-[#b8965a] transition-colors border-b-2 border-[#0c0c0e] pb-1 hover:border-[#b8965a]"
              >
                <span>Read our founding thesis</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/#services"
                className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-[#787570] hover:text-[#0c0c0e] transition-colors"
              >
                <span>Explore all services</span>
                <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
