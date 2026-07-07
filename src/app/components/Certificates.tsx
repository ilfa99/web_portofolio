import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";
import { CERTIFICATES } from "../data";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-19 bg-white dark:bg-[#0F172A] transition-colors duration-700 overflow-hidden"
    >
      {/* Soft transition from Projects */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FCF8F0] via-[#FBF8F2] to-white dark:from-[#111827] dark:via-[#162033] dark:to-[#0F172A] transition-all duration-700" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Certifications"
          subtitle="Proof of my commitment to continuous learning and skill development."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <FadeUp key={cert.name} delay={i * 0.07}>
              <div
                className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                tabIndex={0}
                aria-label={`View certificate: ${cert.name}`}
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
                {/* Thumbnail */}
                <div
                  className="relative h-40 overflow-hidden transition-colors duration-500"
                  style={{
                    background: document.documentElement.classList.contains(
                      "dark"
                    )
                      ? "#0F172A"
                      : "#F8F3EB",
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-110 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute bottom-3 left-3">
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-md">
                      <Award
                        size={15}
                        className="text-accent-foreground"
                      />
                    </div>
                  </div>

                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <ExternalLink
                      size={12}
                      className="text-white"
                    />
                  </button>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3
                    className="font-semibold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors duration-200"
                    style={{
                      fontSize: "0.95rem",
                    }}
                  >
                    {cert.name}
                  </h3>

                  <p className="text-muted-foreground text-xs">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}