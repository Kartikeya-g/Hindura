import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { companyDetails } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080a] text-white pt-20 pb-12 border-t border-[#1c1c22]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#26262d]">
          
          {/* Col 1: Brand & Positioning: Large prominent standalone white emblem without side text */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block group" aria-label="Hindura Home">
              <img
                src="/favicon.svg"
                alt="Hindura"
                className="h-20 md:h-28 lg:h-36 w-auto object-contain brightness-200 group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-white/70 text-sm font-light leading-relaxed max-w-md">
              {companyDetails.footerStatement}
            </p>

            <p className="text-[#d6b67e] text-sm font-serif italic">
              {companyDetails.footerMotto}
            </p>

            <div className="text-[10px] tracking-[0.25em] uppercase text-white/40">
              {companyDetails.eyebrow}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold">
              Explore Hindura
            </div>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <a href="/#what-we-build" className="hover:text-[#b8965a] transition-colors">
                  What We Build
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#b8965a] transition-colors">
                  Services Suite
                </a>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#b8965a] transition-colors">
                  Featured Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#b8965a] transition-colors">
                  About & Leadership
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#b8965a] transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#b8965a] transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Indore Contact & Office */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#b8965a] font-semibold">
              Headquarters
            </div>
            
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#b8965a] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyDetails.office}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#b8965a] shrink-0" />
                <div className="flex gap-2">
                  <a href={`tel:${companyDetails.phonePrimary}`} className="hover:text-[#b8965a]">
                    {companyDetails.phonePrimary}
                  </a>
                  <span>·</span>
                  <a href={`tel:${companyDetails.phoneSecondary}`} className="hover:text-[#b8965a]">
                    {companyDetails.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={15} className="text-[#b8965a] shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-[#b8965a]">
                  {companyDetails.email}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#b8965a] hover:text-[#d6b67e] transition-colors"
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
          <div>
            © {currentYear} {companyDetails.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Resort Construction & Prefabricated Solutions</span>
            <span>Indore · India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}