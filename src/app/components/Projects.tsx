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
                  background: document.documentElement.classList.contains("dark")
                    ? "#1E293B"
                    : "#FFFFFF",

                  border: document.documentElement.classList.contains("dark")
                    ? "1px solid #334155"
                    : "1px solid #E8DCC7",

                  boxShadow: document.documentElement.classList.contains("dark")
                    ? "0 10px 30px rgba(0,0,0,0.35)"
                    : "0 8px 24px rgba(183,163,126,0.08)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;

                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = "var(--accent)";
                  el.style.boxShadow =
                    "0 18px 45px rgba(190,160,100,0.18)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;

                  el.style.transform = "translateY(0)";

                  if (document.documentElement.classList.contains("dark")) {
                    el.style.background = "#1E293B";
                    el.style.borderColor = "#334155";
                    el.style.boxShadow =
                      "0 10px 30px rgba(0,0,0,0.35)";
                  } else {
                    el.style.background = "#FFFFFF";
                    el.style.borderColor = "#E8DCC7";
                    el.style.boxShadow =
                      "0 8px 24px rgba(183,163,126,0.08)";
                  }
                }}
              >
                {/* Image */}
                <div
                  className="relative h-52 overflow-hidden transition-colors duration-500"
                  style={{
                    background: document.documentElement.classList.contains(
                      "dark"
                    )
                      ? "#0F172A"
                      : "#F7F2E9",
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
                          background:
                            document.documentElement.classList.contains("dark")
                              ? "#334155"
                              : "#FCF8F0",

                          border: document.documentElement.classList.contains(
                            "dark"
                          )
                            ? "1px solid #475569"
                            : "1px solid #E8DCC7",
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