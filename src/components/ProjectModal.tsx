import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, MapPin, Layers, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#141417] text-white border border-[#26262d] shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#0c0c0e]/80 border border-white/20 hover:border-[#b8965a] text-white hover:text-[#b8965a] flex items-center justify-center transition-colors"
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Hero Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-[#141417]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] tracking-[0.3em] uppercase bg-[#b8965a] text-[#0c0c0e] font-semibold px-3 py-1 mb-3 inline-block">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-serif text-white">
              {project.name}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Metadata Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-[#0c0c0e] border border-[#26262d]">
            <div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-1 flex items-center gap-1.5">
                <MapPin size={12} />
                Location
              </div>
              <div className="text-xs text-white/90">{project.location}</div>
            </div>

            <div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-1 flex items-center gap-1.5">
                <Sparkles size={12} />
                Typology
              </div>
              <div className="text-xs text-white/90">{project.typology}</div>
            </div>

            <div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-1 flex items-center gap-1.5">
                <Layers size={12} />
                System
              </div>
              <div className="text-xs text-white/90">{project.constructionSystem}</div>
            </div>

            <div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-1 flex items-center gap-1.5">
                <Shield size={12} />
                Scale
              </div>
              <div className="text-xs text-white/90">{project.area}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-3">
              Design & Construction Narrative
            </h4>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Key Feature & Highlights */}
          <div className="space-y-4">
            <div className="p-4 bg-[#1c1c22] border-l-2 border-[#b8965a]">
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-1">
                Key Architectural Feature
              </div>
              <div className="text-sm font-light text-white italic font-serif">
                "{project.keyFeature}"
              </div>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-3">
                Execution Highlights
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-white/80">
                    <span className="text-[#b8965a] text-xs">✦</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Previews if available */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h4 className="text-xs tracking-[0.25em] uppercase text-[#b8965a] font-semibold mb-3">
                Site & System Views
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((img, i) => (
                  <div key={i} className="h-32 overflow-hidden border border-[#26262d]">
                    <img
                      src={img}
                      alt={`${project.name} view ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-6 border-t border-[#26262d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/60">
              Interested in planning a similar build for your site?
            </div>
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b8965a] hover:bg-[#d6b67e] text-[#0c0c0e] font-semibold text-xs tracking-[0.2em] uppercase transition-colors"
            >
              <span>Discuss this typology</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
