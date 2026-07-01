import React from "react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";
import { CORE_SKILLS, SkillIcons } from "../data";

export function Skills() {
  return (
    <section id="skills" className="py-28 bg-secondary transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Core Skills"
          subtitle="Technologies and tools I use to build digital solutions and secure systems."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "1.5rem",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          {CORE_SKILLS.map((skill, i) => (
            <FadeUp key={skill} delay={i * 0.05}>
              <div
                className="group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                {/* Circular icon container */}
                <div
                  className="bg-card border border-border group-hover:-translate-y-1"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "scale(1.08) translateY(-4px)";
                    el.style.boxShadow = "0 8px 25px rgba(212, 175, 55, 0.25), 0 0 0 2px rgba(212, 175, 55, 0.15)";
                    el.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "scale(1) translateY(0)";
                    el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                    el.style.borderColor = "";
                  }}
                  tabIndex={0}
                  aria-label={skill}
                >
                  {SkillIcons[skill]}
                </div>
                {/* Skill name */}
                <span
                  className="text-foreground transition-colors duration-300 group-hover:text-accent"
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    textAlign: "center",
                    letterSpacing: "0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {skill}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
