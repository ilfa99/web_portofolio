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
      {/* Soft transition from Hero */}
      <div
        className="absolute top-0 left-0 w-full h-24 transition-colors duration-500"
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, #FEFCF8 45%, #FCF8F0 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader title="About Me" />

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left — info cards */}
          <FadeUp className="grid grid-cols-2 gap-4 mt-8">
            {[
              { icon: BookOpen, title: "Cybersecurity", sub: "Enthusiast" },
              { icon: Code2, title: "Software", sub: "Developer" },
              { icon: Shield, title: "Fullstack", sub: "developer" },
              { icon: Database, title: "Business", sub: "Analysis Enthusiast" },
            ].map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="bg-white dark:bg-[#1E293B] border border-[#E8DCC7] dark:border-slate-700 rounded-2xl p-6 hover:border-accent/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} className="text-accent" />
                </div>

                <p className="font-semibold text-foreground text-sm">
                  {title}
                </p>

                <p className="text-muted-foreground text-xs mt-0.5">
                  {sub}
                </p>
              </div>
            ))}
          </FadeUp>

          {/* Right — bio */}
          <FadeUp delay={0.15}>
            <div
              className="space-y-5 text-muted-foreground leading-relaxed"
              style={{
                fontWeight: 300,
                fontSize: "0.96rem",
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