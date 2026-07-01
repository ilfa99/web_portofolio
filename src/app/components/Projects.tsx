import React from "react";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";
import { PROJECTS } from "../data";

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-background transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="03 / Projects"
          title="Works & Portfolio"
          subtitle="A collection of projects that reflect my learning journey and exploration in the technology world."
        />

        <div className="grid md:grid-cols-2 gap-7">
          {PROJECTS.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-400">
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400" />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-foreground font-semibold mb-2 group-hover:text-accent transition-colors duration-200"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-light">{project.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-secondary border border-border rounded-full text-xs text-muted-foreground font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    className="group/btn flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-200 focus:outline-none focus:underline"
                    aria-label={`View details of ${project.title}`}
                  >
                    Project Details
                    <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
