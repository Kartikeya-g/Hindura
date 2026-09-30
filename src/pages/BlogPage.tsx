import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CTA from '../components/CTA';

export default function BlogPage() {
  return (
    <>
      <div className="min-h-[85vh] pt-36 pb-24 md:pt-48 md:pb-32 bg-[#faf9f6] flex flex-col justify-center relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#b8965a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#b8965a]" />
            <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
              HINDURA INSIGHTS
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light font-serif leading-[1.08] text-[#0c0c0e] mb-8">
            Coming <span className="italic text-[#967945]">Soon.</span>
          </h1>
          
          <p className="text-[#4a4742] text-base md:text-lg font-light leading-relaxed max-w-2xl mb-12">
            We are working on a dedicated space to share our thoughts on prefabricated hospitality, sustainable architecture, and the future of resort construction. Check back later for our latest updates and industry insights.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#e4e1db] bg-white hover:border-[#b8965a] hover:bg-[#b8965a] text-[#0c0c0e] hover:text-white font-semibold text-xs tracking-[0.2em] uppercase transition-colors shadow-sm"
          >
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
      <CTA />
    </>
  );
}
