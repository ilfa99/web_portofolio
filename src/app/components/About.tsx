import React from "react";
import { BookOpen, Code2, Shield, Database } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-[#FCF8F0] dark:bg-[#111827] transition-colors duration-500 overflow-hidden"
    >

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader title="About Me" />

        <div className="max-w-3xl mx-auto">
          <FadeUp delay={0.15}>
            <div
              className="space-y-6 text-muted-foreground leading-relaxed text-center"
              style={{
                fontWeight: 300,
                fontSize: "1.05rem",
              }}
            >
              <p>
                Hello! I'm{" "}
                <strong className="text-foreground font-medium">
                  Ilfa Nur Fatimah
                </strong>
                , a Computer Science student who is passionate about the world
                of technology. I believe that technology is a bridge to solving
                real problems faced by society.
              </p>

              <p>
                My interest in{" "}
                <span className="text-accent font-medium">
                  problem solving
                </span>{" "}
                led me to explore various fields from software development
                using Laravel and Python, to cybersecurity and digital
                forensics.
              </p>

              <p>
                I also have a great interest in business analysis, understanding that the
                best technological solutions are born from a deep understanding of business
                needs and organizational processes.
              </p>

              <p>
                The enthusiasm to learn new things always drives me to continue
                growing participating in competitions, being active in
                organizations, and earning certifications across various
                learning platforms.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}