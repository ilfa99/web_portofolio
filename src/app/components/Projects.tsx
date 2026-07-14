import React from "react";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";
import { PROJECTS } from "../data";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-[#FCF8F0] dark:bg-[#111827] transition-colors duration-700 overflow-hidden"
    >
      {/* Soft transition from Skills */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-[#FBF8F2] to-[#FCF8F0] dark:from-[#0F172A] dark:via-[#162033] dark:to-[#111827] transition-all duration-700" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Projects Experience"
          subtitle="A collection of projects that reflect my learning journey and exploration in the technology world."
        />

        <div className="grid md:grid-cols-2 gap-7">
          {PROJECTS.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.08}>
              <div
                className="rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "var(--card-shadow)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = "var(--accent)";
                  el.style.boxShadow = "var(--card-hover-shadow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.background = "var(--card-bg)";
                  el.style.borderColor = "var(--card-border)";
                  el.style.boxShadow = "var(--card-shadow)";
                }}
              >
                {/* Image */}
                <div
                  className="relative h-52 overflow-hidden transition-colors duration-500"
                  style={{
                    background: "var(--image-area-bg)",
                  }}
                >
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
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.05rem",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-light">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs text-muted-foreground font-mono transition-all duration-300"
                        style={{
                          background: "var(--tag-bg)",
                          border: "1px solid var(--tag-border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="group/btn flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-200 focus:outline-none focus:underline"
                    aria-label={`View details of ${project.title}`}
                  >
                    Project Details

                    <ExternalLink
                      size={13}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                    />
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