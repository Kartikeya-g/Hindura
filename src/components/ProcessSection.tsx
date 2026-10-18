import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Layers, Hammer, Sparkles } from 'lucide-react';
import { howWeWorkStages } from '../data/siteData';
import { useInView } from '../hooks/useInView';

const stageIcons = [Compass, Layers, Sparkles, Hammer, ShieldCheck];

export default function ProcessSection() {
  const { ref, inView } = useInView(0.1);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" ref={ref} className="py-24 md:py-36 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className={`max-w-3xl mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#b8965a]" />
            <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
              HOW WE WORK · FIVE STAGES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif text-[#0c0c0e] leading-[1.1] mb-6">
            Five stages guide<br />
            <span className="italic text-[#967945]">every engagement.</span>
          </h2>
          <p className="text-[#4a4742] text-base md:text-lg font-light leading-relaxed">
            From the initial land intelligence visit to operational maturity, our end-to-end framework brings due diligence, planning, design, and PMC under one accountable roof.
          </p>
        </div>

        {/* 5 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {howWeWorkStages.map((stage, idx) => {
            const isSelected = idx === activeStep;
            const Icon = stageIcons[idx] || Sparkles;
            return (
              <div
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 sm:p-7 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0c0c0e] text-white border-[#0c0c0e] shadow-xl scale-[1.02]'
                    : 'bg-white text-[#141417] border-[#e4e1db] hover:border-[#b8965a]/60 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold tracking-widest ${isSelected ? 'text-[#d6b67e]' : 'text-[#b8965a]'}`}>
                      STAGE {stage.step}
                    </span>
                    <Icon size={16} className={isSelected ? 'text-[#d6b67e]' : 'text-[#787570]'} />
                  </div>

                  <h3 className="text-xl font-light font-serif mb-3 leading-snug">
                    {stage.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-6 font-light ${isSelected ? 'text-white/80' : 'text-[#787570]'}`}>
                    {stage.description}
                  </p>
                </div>

                <div className={`pt-4 border-t text-[11px] font-medium tracking-wide flex items-start gap-1.5 ${isSelected ? 'border-white/15 text-[#d6b67e]' : 'border-[#e4e1db] text-[#967945]'}`}>
                  <CheckCircle2 size={13} className="shrink-0 mt-0.5" />
                  <span className="leading-tight">{stage.focus}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accountability Banner */}
        <div className="bg-[#141417] text-white p-8 md:p-12 border border-[#26262d] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold mb-2">
              Single Point of Accountability
            </div>
            <h4 className="text-2xl sm:text-3xl font-serif font-light text-white mb-2">
              Engage for a Single Mandate or the Full Journey
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Clients don't hire a consultant for a single service — they hire someone to be accountable for the outcome. Hindura closes the gap between land, design, and delivery.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.2em] uppercase transition-colors shrink-0"
          >
            <span>Discuss your engagement</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}
