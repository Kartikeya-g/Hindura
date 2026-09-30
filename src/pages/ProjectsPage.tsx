import { useState } from 'react';
import { ArrowRight, MapPin, Layers, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import ProjectModal from '../components/ProjectModal';
import CTA from '../components/CTA';
import { useInView } from '../hooks/useInView';

const categories = ['All', 'Resorts & Eco-Stays', 'Boutique Hotels', 'Farmhouses & Retreats', 'Modular & Domes'] as const;

export default function ProjectsPage() {
  const { ref, inView } = useInView(0.08);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-[#0c0c0e] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="Hindura Projects Portfolio"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#b8965a]" />
              <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                PORTFOLIO
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light font-serif leading-[1.08] text-white mb-6">
              Built around<br />
              <span className="italic text-[#d6b67e]">the experience.</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
              Every project starts with a different brief, landscape and ambition. Our portfolio showcases modular retreats, eco-stays, farmhouses, villas and resort spaces—highlighting the construction system, materials and design decisions behind each build.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid Section */}
      <section ref={ref} className="py-24 md:py-36 bg-[#faf9f6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          {/* Category Filter Pills */}
          <div className={`flex flex-wrap items-center justify-between gap-4 mb-16 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] tracking-[0.2em] uppercase font-medium px-5 py-3 transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-[#0c0c0e] text-white border-[#0c0c0e] shadow-md'
                      : 'bg-white text-[#787570] border-[#e4e1db] hover:border-[#0c0c0e] hover:text-[#0c0c0e]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-xs text-[#787570] tracking-wider uppercase font-medium">
              Showing {filteredProjects.length} Typologies
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white border border-[#e4e1db] hover:border-[#b8965a] transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div>
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-[#0c0c0e]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] tracking-[0.25em] uppercase bg-[#0c0c0e]/85 backdrop-blur-xs text-[#b8965a] px-2.5 py-1 font-medium border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Specs */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#787570] mb-1 font-medium">
                        <MapPin size={12} className="text-[#b8965a]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-2xl font-light font-serif text-[#0c0c0e] group-hover:text-[#967945] transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-[#e4e1db]/80 flex items-start gap-2">
                      <Sparkles size={13} className="text-[#b8965a] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[9px] tracking-[0.2em] uppercase text-[#787570] font-semibold">Typology</div>
                        <div className="text-xs text-[#141417] font-medium">{project.typology}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Layers size={13} className="text-[#b8965a] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[9px] tracking-[0.2em] uppercase text-[#787570] font-semibold">Construction System</div>
                        <div className="text-xs text-[#141417] font-medium">{project.constructionSystem}</div>
                      </div>
                    </div>

                    <div className="bg-[#faf9f6] border border-[#e4e1db] p-3.5">
                      <div className="text-[9px] tracking-[0.2em] uppercase text-[#b8965a] font-semibold mb-1">
                        Key Architectural Feature
                      </div>
                      <div className="text-xs text-[#4a4742] leading-relaxed italic">
                        "{project.keyFeature}"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#faf9f6] border-t border-[#e4e1db] flex items-center justify-between text-xs text-[#0c0c0e] font-semibold tracking-wider uppercase group-hover:text-[#b8965a] transition-colors">
                  <span>View Details & Specs</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CTA />
    </>
  );
}