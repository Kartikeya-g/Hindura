import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { leadershipQuotes } from '../data/siteData';
import { useInView } from '../hooks/useInView';

export default function LeadershipQuotesSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#faf9f6] border-y border-[#e4e1db] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#b8965a]" />
            <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
              LEADERSHIP VOICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-[#0c0c0e] leading-[1.12]">
            A conviction in growth.<br />
            <span className="italic text-[#967945]">Accountable to the outcome.</span>
          </h2>
        </div>

        {/* 2-Column Executive Quotes */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: A Word from the Founders */}
          <div className="bg-white border border-[#e4e1db] hover:border-[#b8965a] p-8 sm:p-12 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 relative group">
            <div className="absolute top-6 right-6 text-[#b8965a]/20 group-hover:text-[#b8965a]/40 transition-colors">
              <Quote size={48} />
            </div>

            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold mb-4">
                A Word from the Founders
              </div>

              <blockquote className="text-xl sm:text-2xl font-serif font-light text-[#0c0c0e] leading-snug mb-8 relative z-10">
                "{leadershipQuotes.founders.quote}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#e4e1db] flex items-center justify-between">
              <div>
                <div className="text-base font-serif font-medium text-[#0c0c0e]">
                  Garv Jain & Kushal Goyal
                </div>
                <div className="text-xs text-[#787570] tracking-wider uppercase font-medium">
                  {leadershipQuotes.founders.authors}
                </div>
              </div>

              <Link
                to="/about"
                className="text-xs text-[#b8965a] group-hover:text-[#0c0c0e] transition-colors flex items-center gap-1 font-semibold uppercase tracking-wider"
              >
                <span>Read Story</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Card 2: A Word from the Managing Director */}
          <div className="bg-[#0c0c0e] text-white border border-[#26262d] hover:border-[#b8965a] p-8 sm:p-12 flex flex-col justify-between shadow-xl transition-all duration-500 relative group">
            <div className="absolute top-6 right-6 text-[#b8965a]/20 group-hover:text-[#b8965a]/40 transition-colors">
              <Quote size={48} />
            </div>

            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#d6b67e] font-semibold mb-4">
                A Word from the Managing Director
              </div>

              <blockquote className="text-xl sm:text-2xl font-serif font-light text-white leading-snug mb-8 relative z-10">
                "{leadershipQuotes.managingDirector.quote}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#26262d] flex items-center justify-between">
              <div>
                <div className="text-base font-serif font-medium text-white">
                  Shubham Jain
                </div>
                <div className="text-xs text-[#d6b67e] tracking-wider uppercase font-medium">
                  Managing Director · 16 Years Advisory Leadership
                </div>
              </div>

              <Link
                to="/about"
                className="text-xs text-[#d6b67e] group-hover:text-white transition-colors flex items-center gap-1 font-semibold uppercase tracking-wider"
              >
                <span>Leadership Note</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
