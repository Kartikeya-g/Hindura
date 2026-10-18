import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Target, Compass, Sparkles, ShieldCheck, UserCheck, MapPin, Quote } from 'lucide-react';
import { aboutHinduraContent, leadershipTeam, leadershipQuotes, hinduraLiving, companyDetails } from '../data/siteData';
import CTA from '../components/CTA';
import { useInView } from '../hooks/useInView';

import WhyHindura from '../components/WhyHindura';

export default function AboutPage() {
  const { ref: introRef, inView: introInView } = useInView(0.1);
  const { ref: foundersRef, inView: foundersInView } = useInView(0.1);
  const { ref: messagesRef, inView: messagesInView } = useInView(0.1);
  const { ref: vmRef, inView: vmInView } = useInView(0.1);

  return (
    <>
      {/* Page Hero Header */}
      <div className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-[#0c0c0e] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="About Hindura Building Solutions"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                WHO WE ARE · REAL ESTATE ADVISORY & CONSULTANCY
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light font-serif leading-[1.08] text-white mb-6">
              At the confluence of<br />
              <span className="italic text-[#d6b67e]">land, design, and delivery.</span>
            </h1>
            <p className="text-white/85 text-base md:text-lg font-light leading-relaxed">
              {aboutHinduraContent.whoWeAre}
            </p>
          </div>
        </div>
      </div>

      {/* Narrative & Why Hindura Was Founded */}
      <section ref={introRef} className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image with Floating Emblem */}
            <div className={`lg:col-span-5 relative transition-all duration-1000 ${introInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="overflow-hidden bg-[#0c0c0e] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Hindura Real Estate Advisory"
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
                  Central India · Tier-II & Tier-III Focused
                </div>
              </div>
            </div>

            {/* Right Text: Why Hindura Was Founded */}
            <div className={`lg:col-span-7 transition-all duration-1000 delay-200 ${introInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#b8965a]" />
                <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                  OUR ORIGIN & PURPOSE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-[#0c0c0e] leading-[1.15] mb-8">
                Why Hindura was founded.
              </h2>

              <div className="space-y-6 text-[#4a4742] text-sm sm:text-base leading-relaxed font-light mb-10">
                <p className="text-[#0c0c0e] font-normal leading-relaxed text-base sm:text-lg">
                  {aboutHinduraContent.whyFounded}
                </p>
                <p>
                  {aboutHinduraContent.narrative}
                </p>
              </div>

              {/* Cultural Pillars */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-[#e4e1db]">
                <div className="p-4 bg-[#faf9f6] border border-[#e4e1db]">
                  <Compass size={18} className="text-[#b8965a] mb-2" />
                  <div className="text-xs font-semibold text-[#0c0c0e] uppercase tracking-wide mb-1">Due Diligence</div>
                  <div className="text-[11px] text-[#787570]">Uncompromising legal, title, and permissible-use intelligence.</div>
                </div>
                <div className="p-4 bg-[#faf9f6] border border-[#e4e1db]">
                  <Sparkles size={18} className="text-[#b8965a] mb-2" />
                  <div className="text-xs font-semibold text-[#0c0c0e] uppercase tracking-wide mb-1">Design Coordination</div>
                  <div className="text-[11px] text-[#787570]">BIM, architectural planning, and modular specs connected.</div>
                </div>
                <div className="p-4 bg-[#faf9f6] border border-[#e4e1db]">
                  <ShieldCheck size={18} className="text-[#b8965a] mb-2" />
                  <div className="text-xs font-semibold text-[#0c0c0e] uppercase tracking-wide mb-1">Accountability</div>
                  <div className="text-[11px] text-[#787570]">One firm, one point of accountability through operational handover.</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <WhyHindura />

      {/* Leadership Messages: Founders Message & Managing Director Message */}
      <section ref={messagesRef} className="py-24 md:py-36 bg-[#faf9f6] border-y border-[#e4e1db]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                LEADERSHIP MESSAGES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-[#0c0c0e] leading-[1.12]">
              Direct words from our leadership.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Founders Message */}
            <div className="lg:col-span-5 bg-white border border-[#e4e1db] p-8 sm:p-10 flex flex-col justify-between shadow-sm relative group">
              <div className="text-[#b8965a]/20 mb-6">
                <Quote size={40} />
              </div>

              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-3">
                  Message from the Founders
                </div>

                <blockquote className="text-xl sm:text-2xl font-serif font-light text-[#0c0c0e] leading-snug mb-8">
                  "{leadershipQuotes.founders.quote}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#e4e1db]">
                <div className="text-base font-serif font-medium text-[#0c0c0e]">
                  Garv Jain & Kushal Goyal
                </div>
                <div className="text-xs text-[#787570] tracking-wide mt-1">
                  <div>{leadershipQuotes.founders.garvTitle}</div>
                  <div>{leadershipQuotes.founders.kushalTitle}</div>
                </div>
              </div>
            </div>

            {/* Managing Director Full Message */}
            <div className="lg:col-span-7 bg-[#0c0c0e] text-white border border-[#26262d] p-8 sm:p-12 flex flex-col justify-between shadow-xl relative">
              <div className="text-[#d6b67e]/25 mb-6">
                <Quote size={40} />
              </div>

              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#d6b67e] font-semibold mb-3">
                  Message from the Managing Director
                </div>

                <div className="text-xl sm:text-2xl font-serif font-light text-white leading-snug mb-6 text-[#d6b67e]">
                  "{leadershipQuotes.managingDirector.quote}"
                </div>

                <div className="space-y-4 text-white/80 text-sm sm:text-base font-light leading-relaxed mb-8">
                  {leadershipQuotes.managingDirector.fullNote.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#26262d] flex items-center justify-between">
                <div>
                  <div className="text-lg font-serif font-medium text-white">
                    Shubham Jain
                  </div>
                  <div className="text-xs text-[#d6b67e] tracking-wider uppercase font-medium">
                    Managing Director · Hindura Building Solutions
                  </div>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
                  Indore, India
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership Team Profiles (Shubham Jain, Garv Jain, Kushal Goyal) */}
      <section ref={foundersRef} className="py-24 md:py-36 bg-[#0c0c0e] text-white relative overflow-hidden">
        
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#26262d_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Header */}
          <div className={`max-w-3xl mb-16 md:mb-20 transition-all duration-700 ${foundersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                LEADERSHIP TEAM
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] text-white mb-4">
              Driven by rigour.<br />
              <span className="italic text-[#d6b67e]">Accountable for outcomes.</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              Hindura pairs sixteen years of Central India real estate development experience with agile engineering, BIM coordination, and modern prefabricated construction.
            </p>
          </div>

          {/* 3 Executive Profiles Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div
                key={member.name}
                className="bg-[#141417] border border-[#26262d] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-[#b8965a] transition-all duration-500 group"
              >
                <div>
                  {/* Portrait */}
                  <div className="relative overflow-hidden bg-[#0c0c0e] h-80">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-[#0c0c0e]/85 backdrop-blur-md px-3 py-1 border border-[#b8965a]/40 text-[#d6b67e] text-xs font-mono font-bold">
                      0{idx + 1} · {member.titleBadge || 'LEADERSHIP'}
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-white/70">
                      <MapPin size={12} className="text-[#b8965a]" />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <UserCheck size={14} className="text-[#b8965a]" />
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold">
                        {member.role}
                      </span>
                    </div>

                    <h3 className="text-2xl font-light font-serif text-white mb-2 group-hover:text-[#d6b67e] transition-colors">
                      {member.name}
                    </h3>

                    <div className="p-3 bg-[#1c1c22] border-l-2 border-[#b8965a] text-xs text-white/90 mb-4 font-medium leading-snug">
                      {member.focus}
                    </div>

                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-light mb-4">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
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
                Partner for India's Next Chapter
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
                One Firm, One Point of Accountability
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