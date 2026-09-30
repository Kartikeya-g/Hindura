import Contact from '../components/Contact';
import { useInView } from '../hooks/useInView';
import { companyDetails } from '../data/siteData';

function MapSection() {
  const { ref, inView } = useInView(0.1);
  return (
    <section ref={ref} className={`relative bg-[#0c0c0e] py-16 border-t border-[#26262d] transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold mb-1">
              HEADQUARTERS
            </div>
            <h3 className="text-2xl sm:text-3xl font-light font-serif text-white">
              Indore Office Location
            </h3>
          </div>
          <div className="text-xs text-white/70 max-w-md">
            {companyDetails.office}
          </div>
        </div>

        {/* Embedded Google Maps centered on Navlakha, Indore */}
        <div className="w-full h-96 border border-[#26262d] overflow-hidden shadow-2xl relative">
          <iframe
            src="https://maps.google.com/maps?q=Pukhraj%20Corporate%2C%20Navlakha%2C%20Indore%2C%20Madhya%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(70%) contrast(1.1) brightness(0.9)' }}
            allowFullScreen
            loading="lazy"
            title="Hindura Indore Office Location"
          />
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-[#0c0c0e] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85"
            alt="Contact Hindura"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                START A CONVERSATION
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light font-serif leading-[1.08] text-white mb-6">
              Let's discuss<br />
              <span className="italic text-[#d6b67e]">your next destination.</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
              Tell us what you are planning. Share your site, project type, approximate scale and what you want the finished experience to feel like. We will help you identify the right next step.
            </p>
          </div>
        </div>
      </div>

      <Contact />
      <MapSection />
    </>
  );
}