import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Layers, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { useInView } from '../hooks/useInView';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Resorts & Eco-Stays', 'Boutique Hotels', 'Farmhouses & Retreats', 'Modular & Domes'] as const;

export default function FeaturedProjects() {
  const { ref, inView } = useInView(0.08);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="portfolio" ref={ref} className="py-24 md:py-36 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#b8965a]" />
                <span className="text-[#b8965a] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold">
                  PORTFOLIO
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif text-[#0c0c0e] leading-[1.1] mb-6">
                Built around<br />
                <span className="italic text-[#967945]">the experience.</span>
              </h2>
              <p className="text-[#4a4742] text-sm sm:text-base font-light leading-relaxed">
                Every project starts with a different brief, landscape and ambition. Our portfolio showcases modular retreats, eco-stays, farmhouses, villas and resort spaces—highlighting the construction system, materials and design decisions behind each build.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] tracking-[0.2em] uppercase font-medium px-4 py-2.5 transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-[#0c0c0e] text-white border-[#0c0c0e]'
                      : 'bg-transparent text-[#787570] border-[#e4e1db] hover:border-[#0c0c0e] hover:text-[#0c0c0e]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid (Exact Document Format: Name · Location · Typology · Construction system · Key feature) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer bg-[#faf9f6] border border-[#e4e1db] hover:border-[#b8965a] transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-[#0c0c0e]">
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

                  {/* Project Specifications Body */}
                  <div className="p-6 space-y-4">
                    
                    {/* Project Name & Location */}
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#787570] mb-1 font-medium">
                        <MapPin size={12} className="text-[#b8965a]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-2xl font-light font-serif text-[#0c0c0e] group-hover:text-[#967945] transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    {/* Typology */}
                    <div className="pt-2 border-t border-[#e4e1db]/80 flex items-start gap-2">
                      <Sparkles size={13} className="text-[#b8965a] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[9px] tracking-[0.2em] uppercase text-[#787570] font-semibold">Typology</div>
                        <div className="text-xs text-[#141417] font-medium">{project.typology}</div>
                      </div>
                    </div>

                    {/* Construction System */}
                    <div className="flex items-start gap-2">
                      <Layers size={13} className="text-[#b8965a] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[9px] tracking-[0.2em] uppercase text-[#787570] font-semibold">Construction System</div>
                        <div className="text-xs text-[#141417] font-medium">{project.constructionSystem}</div>
                      </div>
                    </div>

                    {/* Key Feature */}
                    <div className="bg-white border border-[#e4e1db] p-3">
                      <div className="text-[9px] tracking-[0.2em] uppercase text-[#b8965a] font-semibold mb-1">
                        Key Architectural Feature
                      </div>
                      <div className="text-xs text-[#4a4742] leading-relaxed italic">
                        "{project.keyFeature}"
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 py-3.5 bg-white border-t border-[#e4e1db] flex items-center justify-between text-xs text-[#0c0c0e] font-semibold tracking-wider uppercase group-hover:text-[#b8965a] transition-colors">
                  <span>View Project Specs</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#0c0c0e] hover:bg-[#0c0c0e] text-[#0c0c0e] hover:text-white font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300"
            >
              <span>Explore full portfolio</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}