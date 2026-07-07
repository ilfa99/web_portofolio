import React from "react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";
import { CORE_SKILLS, SkillIcons } from "../data";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-white dark:bg-[#0F172A] transition-colors duration-700 overflow-hidden"
    >
      {/* Soft transition from About */}
      <div
        className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FCF8F0] via-[#FBF8F2] to-white dark:from-[#111827] dark:via-[#162033] dark:to-[#0F172A] transition-all duration-700"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
                  className="group-hover:-translate-y-1 transition-colors duration-500"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                    cursor: "pointer",

                    background:
                      "var(--skill-card-bg, #FCF8F0)",

                    border:
                      "1px solid var(--skill-card-border, #E8DCC7)",

                    boxShadow:
                      "0 6px 18px rgba(183,163,126,0.10)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;

                    el.style.transform = "scale(1.08) translateY(-4px)";
                    el.style.background = "#FFFDF9";
                    el.style.borderColor = "var(--accent)";
                    el.style.boxShadow =
                      "0 14px 35px rgba(190,160,100,0.20), 0 0 0 2px rgba(212,175,55,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;

                    el.style.transform = "scale(1) translateY(0)";

                    if (document.documentElement.classList.contains("dark")) {
                      el.style.background = "#1E293B";
                      el.style.borderColor = "#334155";
                      el.style.boxShadow =
                        "0 8px 24px rgba(0,0,0,0.30)";
                    } else {
                      el.style.background = "#FCF8F0";
                      el.style.borderColor = "#E8DCC7";
                      el.style.boxShadow =
                        "0 6px 18px rgba(183,163,126,0.10)";
                    }
                  }}
                  tabIndex={0}
                  aria-label={skill}
                  ref={(el) => {
                    if (!el) return;

                    if (document.documentElement.classList.contains("dark")) {
                      el.style.background = "#1E293B";
                      el.style.borderColor = "#334155";
                      el.style.boxShadow =
                        "0 8px 24px rgba(0,0,0,0.30)";
                    }
                  }}
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