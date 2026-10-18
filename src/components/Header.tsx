import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { companyDetails } from '../data/siteData';

const navLinks = [
  { label: 'Sectors', to: '/#sectors' },
  { label: 'Services', to: '/#services' },
  { label: 'Prefabrication', to: '/#prefabrication' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const headerBg = scrolled
    ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-b border-[#26262d] py-3 shadow-2xl'
    : isHome
    ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
    : 'bg-[#0c0c0e] border-b border-[#26262d] py-3.5';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Only: Large prominent standalone white emblem without side text */}
          <Link to="/" className="flex items-center group py-1" aria-label="Hindura Home">
            <img
              src="/favicon.svg"
              alt="Hindura"
              className="h-16 md:h-20 lg:h-28 w-auto object-contain brightness-200 group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const isAnchor = link.to.includes('#');
              return isAnchor ? (
                <a
                  key={link.label}
                  href={link.to}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-white/80 hover:text-[#b8965a] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 ${
                    location.pathname === link.to
                      ? 'text-[#b8965a]'
                      : 'text-white/80 hover:text-[#b8965a]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-[#b8965a]/20"
            >
              <span>Start a project</span>
              <ArrowRight size={13} />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#b8965a] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0c0c0e]/98 backdrop-blur-xl flex flex-col justify-between px-8 py-24 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] mb-2 font-medium">
            {companyDetails.eyebrow}
          </div>
          {navLinks.map((link) => {
            const isAnchor = link.to.includes('#');
            return isAnchor ? (
              <a
                key={link.label}
                href={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-light tracking-widest uppercase hover:text-[#b8965a] transition-colors font-serif"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-light tracking-widest uppercase hover:text-[#b8965a] transition-colors font-serif ${
                  location.pathname === link.to ? 'text-[#b8965a]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="space-y-4 pt-8 border-t border-[#26262d]">
          <div className="text-white/60 text-xs leading-relaxed">
            {companyDetails.office}
          </div>
          <div className="flex flex-col gap-2 text-xs text-white/80">
            <a href={`tel:${companyDetails.phonePrimary}`} className="hover:text-[#b8965a]">
              {companyDetails.phonePrimary}
            </a>
            <a href={`mailto:${companyDetails.email}`} className="hover:text-[#b8965a]">
              {companyDetails.email}
            </a>
          </div>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#b8965a] text-[#0c0c0e] font-semibold text-xs tracking-[0.25em] uppercase"
          >
            <span>Start a project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}