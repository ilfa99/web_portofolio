import React from "react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";
import { SKILL_CATEGORIES, SkillIcons } from "../data";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-[#FAF9F6] dark:bg-[#0F172A] transition-colors duration-700 overflow-hidden"
    >

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies and tools I use to build digital solutions and secure systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <FadeUp key={category.title} delay={catIdx * 0.1}>
              <div>
                {/* Category title */}
                <h3
                  className="text-foreground transition-colors duration-500 border-b border-border pb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    marginBottom: "1.25rem",
                  }}
                >
                  {category.title}
                </h3>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <FadeUp key={skill} delay={catIdx * 0.1 + i * 0.05}>
                      <div
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 cursor-default"
                        style={{
                          background: "var(--skill-card-bg)",
                          border: "1px solid var(--skill-card-border)",
                          color: "var(--foreground)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = "var(--accent)";
                          el.style.boxShadow = "var(--skill-card-shadow)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.borderColor = "var(--skill-card-border)";
                          el.style.boxShadow = "none";
                        }}
                      >
                        {skill}
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}