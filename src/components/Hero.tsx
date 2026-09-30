import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85',
    tagline: 'Resorts & Nature-Led Retreats',
    subtag: 'Prefabricated Hospitality Architecture'
  },
  {
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85',
    tagline: 'Lakeside & Waterfront Stays',
    subtag: 'Engineered Off-Site Systems'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    tagline: 'Farmhouses & Private Retreats',
    subtag: 'Steel-Reinforced Rapid Assembly'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setAnimating(false);
      }, 500);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen min-h-[720px] max-h-[1080px] bg-[#0c0c0e] overflow-hidden flex items-end">
      {/* Background Image Carousel with Vignette */}
      <div className="absolute inset-0">
        {heroSlides.map((s, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt="Hindura Resort and Prefabricated Construction"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Architectural Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/60 to-[#0c0c0e]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e]/90 via-[#0c0c0e]/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6 px-3.5 py-1.5 border border-[#b8965a]/40 bg-[#0c0c0e]/70 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#b8965a] animate-pulse" />
            <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
              INDORE · INDIA · BUILDING FOR WHAT'S NEXT
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.04] mb-8 font-serif">
            We build places<br />
            <span className="italic font-normal text-[#d6b67e]">people remember.</span>
          </h1>

          {/* Subtitle / Positioning statement */}
          <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl">
            From the first idea to the finished space, Hindura brings together planning, design, prefabricated construction and on-site execution to create resorts, hotels, farmhouses and hospitality environments with character.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl hover:shadow-[#b8965a]/20 group"
            >
              <span>Start a project</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#what-we-build"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 hover:border-[#b8965a] text-white hover:text-[#b8965a] text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 backdrop-blur-xs"
            >
              <span>Explore our capabilities</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Slide info & Indicators */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-medium">
              Featured Typology:
            </div>
            <div className="text-white/90 text-xs tracking-wider">
              {slide.tagline}
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-500 rounded-none ${
                  i === current ? 'w-10 h-1 bg-[#b8965a]' : 'w-4 h-1 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Anchor */}
      <a
        href="#intro"
        className="hidden md:flex absolute bottom-6 right-12 z-20 items-center gap-2 text-white/50 hover:text-[#b8965a] text-[9px] tracking-[0.3em] uppercase transition-colors"
        aria-label="Scroll to content"
      >
        <span>Scroll</span>
        <ArrowDown size={13} className="animate-bounce" />
      </a>
    </section>
  );
}