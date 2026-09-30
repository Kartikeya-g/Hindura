import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Target, Compass, Sparkles, ShieldCheck, UserCheck, MapPin } from 'lucide-react';
import { aboutHinduraContent, foundersStory, hinduraLiving, companyDetails } from '../data/siteData';
import CTA from '../components/CTA';
import { useInView } from '../hooks/useInView';

export default function AboutPage() {
  const { ref: introRef, inView: introInView } = useInView(0.1);
  const { ref: foundersRef, inView: foundersInView } = useInView(0.1);
  const { ref: vmRef, inView: vmInView } = useInView(0.1);

  return (
    <>
      {/* Page Hero Header */}
      <div className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-[#0c0c0e] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="About Hindura"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                WHO WE ARE · LEADERSHIP
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light font-serif leading-[1.08] text-white mb-6">
              A new generation<br />
              <span className="italic text-[#d6b67e]">of construction.</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
              Hindura Building Solutions Pvt. Ltd. is an Indore-based construction company focused on luxury prefabricated construction for resorts, hotels, farmhouses and modular spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative & Company Overview */}
      <section ref={introRef} className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className={`lg:col-span-5 relative transition-all duration-1000 ${introInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="overflow-hidden bg-[#0c0c0e] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Hindura Architectural Vision"
                  className="w-full h-[480px] md:h-[540px] object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0c0c0e] border border-[#b8965a] p-6 text-white max-w-[280px] shadow-2xl">
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-1">
                  Headquarters
                </div>
                <div className="text-sm font-serif text-white/90">
                  Indore, Madhya Pradesh
                </div>
                <div className="text-[10px] text-white/60 mt-1">
                  Pan-India prefabricated hospitality builds
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className={`lg:col-span-7 transition-all duration-1000 delay-200 ${introInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#b8965a]" />
                <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                  OUR ORIGIN & APPROACH
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-[#0c0c0e] leading-[1.15] mb-8">
                {aboutHinduraContent.headline}
              </h2>

              <div className="space-y-6 text-[#4a4742] text-sm sm:text-base leading-relaxed font-light mb-10">
                <p className="text-[#0c0c0e] font-normal leading-relaxed text-base sm:text-lg">
                  {aboutHinduraContent.lead}
                </p>
                <p>
                  {aboutHinduraContent.narrative}
                </p>
              </div>

              {/* Cultural Pillars */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-[#e4e1db]">
                <div className="p-4 bg-[#faf9f6] border border-[#e4e1db]">
                  <Compass size={18} className="text-[#b8965a] mb-2" />
                  <div className="text-xs font-semibold text-[#0c0c0e] uppercase tracking-wide mb-1">Curiosity</div>
                  <div className="text-[11px] text-[#787570]">Constantly adopting modern structural technologies.</div>
                </div>
                <div className="p-4 bg-[#faf9f6] border border-[#e4e1db]">
                  <Sparkles size={18} className="text-[#b8965a] mb-2" />
                  <div className="text-xs font-semibold text-[#0c0c0e] uppercase tracking-wide mb-1">Craftsmanship</div>
                  <div className="text-[11px] text-[#787570]">Preserving architectural character and tactile quality.</div>
                </div>
                <div className="p-4 bg-[#faf9f6] border border-[#e4e1db]">
                  <ShieldCheck size={18} className="text-[#b8965a] mb-2" />
                  <div className="text-xs font-semibold text-[#0c0c0e] uppercase tracking-wide mb-1">Discipline</div>
                  <div className="text-[11px] text-[#787570]">Controlled factory fabrication & on-time assembly.</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Founders & Leadership Story Section with Executive Portrait Gallery */}
      <section ref={foundersRef} className="py-24 md:py-36 bg-[#0c0c0e] text-white relative overflow-hidden">
        
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#26262d_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header & Story in Brief */}
          <div className={`max-w-3xl mb-16 md:mb-20 transition-all duration-700 ${foundersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                LEADERSHIP & FOUNDERS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] text-white mb-4">
              {foundersStory.headline}
            </h2>
            <div className="text-[#d6b67e] text-sm sm:text-base font-serif italic mb-6">
              {foundersStory.subheadline}
            </div>
            <div className="space-y-4 text-white/80 text-sm sm:text-base font-light leading-relaxed">
              {foundersStory.storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Founders Profiles Grid with Executive Portraits */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {foundersStory.leadership.map((founder, idx) => (
              <div
                key={founder.name}
                className="bg-[#141417] border border-[#26262d] overflow-hidden flex flex-col md:flex-row shadow-2xl hover:border-[#b8965a] transition-all duration-500 group"
              >
                {/* Founder Executive Portrait Section */}
                <div className="md:w-5/12 relative overflow-hidden bg-[#0c0c0e] min-h-[320px] md:min-h-[420px]">
                  <img
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#141417]/80" />
                  
                  {/* Floating Number Badge */}
                  <div className="absolute top-4 left-4 bg-[#0c0c0e]/85 backdrop-blur-md px-3 py-1 border border-[#b8965a]/40 text-[#d6b67e] text-xs font-mono font-bold">
                    0{idx + 1} · CO-FOUNDER
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-white/70">
                    <MapPin size={12} className="text-[#b8965a]" />
                    <span>{founder.location}</span>
                  </div>
                </div>

                {/* Founder Narrative & Credentials */}
                <div className="md:w-7/12 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <UserCheck size={14} className="text-[#b8965a]" />
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold">
                        Hindura Executive Leadership
                      </span>
                    </div>

                    <h3 className="text-3xl font-light font-serif text-white mb-1 group-hover:text-[#d6b67e] transition-colors">
                      {founder.name}
                    </h3>
                    
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#b8965a] mb-5">
                      {founder.role}
                    </div>

                    <div className="p-3 bg-[#1c1c22] border-l-2 border-[#b8965a] text-xs text-white/90 mb-5 font-medium leading-snug">
                      {founder.focus}
                    </div>

                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-light mb-6">
                      {founder.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#26262d] flex items-center justify-between text-xs text-white/50">
                    <span>Hindura Building Solutions</span>
                    <span className="text-[#b8965a] font-medium">Indore, India</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section ref={vmRef} className="py-20 bg-[#faf9f6] border-y border-[#e4e1db]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className={`bg-white border border-[#e4e1db] p-8 sm:p-12 shadow-sm transition-all duration-700 ${vmInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-12 h-12 border border-[#b8965a] flex items-center justify-center text-[#b8965a] mb-6">
                <Eye size={22} />
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold mb-2">
                OUR VISION
              </div>
              <h3 className="text-2xl sm:text-3xl font-light font-serif text-[#0c0c0e] mb-4">
                Partner for India's Next Generation
              </h3>
              <p className="text-[#4a4742] text-sm sm:text-base leading-relaxed font-light">
                {aboutHinduraContent.vision}
              </p>
            </div>

            {/* Mission Card */}
            <div className={`bg-white border border-[#e4e1db] p-8 sm:p-12 shadow-sm transition-all duration-700 delay-150 ${vmInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-12 h-12 border border-[#b8965a] flex items-center justify-center text-[#b8965a] mb-6">
                <Target size={22} />
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold mb-2">
                OUR MISSION
              </div>
              <h3 className="text-2xl sm:text-3xl font-light font-serif text-[#0c0c0e] mb-4">
                Accessible Thoughtful Construction
              </h3>
              <p className="text-[#4a4742] text-sm sm:text-base leading-relaxed font-light">
                {aboutHinduraContent.mission}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Hindura Living Banner */}
      <section className="py-24 bg-[#0c0c0e] text-white relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#b8965a] font-semibold">
              HINDURA LIVING
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-light text-white">
              {hinduraLiving.headline}
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              {hinduraLiving.paragraph1}
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.2em] uppercase transition-colors"
              >
                <span>Discuss a project with our team</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}