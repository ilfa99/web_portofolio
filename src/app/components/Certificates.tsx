import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";
import { CERTIFICATES } from "../data";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-19 bg-[#FAF9F6] dark:bg-[#0F172A] transition-colors duration-700 overflow-hidden"
    >

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Certifications"
          subtitle="Proof of my commitment to continuous learning and skill development."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => {
            const pdfUrl = (cert as any).pdfUrl;
            const CardWrapper = pdfUrl ? "a" : "div";
            const wrapperProps = pdfUrl
              ? { href: pdfUrl, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
            <FadeUp key={cert.name} delay={i * 0.07}>
              <CardWrapper
                {...wrapperProps}
                className={`block rounded-2xl overflow-hidden transition-all duration-300 ${pdfUrl ? "group cursor-pointer" : "cursor-default"}`}
                aria-label={`View certificate: ${cert.name}`}
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
                {/* Thumbnail */}
                <div
                  className="relative h-40 overflow-hidden transition-colors duration-500"
                  style={{
                    background: "var(--image-area-bg)",
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className={`w-full h-full object-cover opacity-75 transition-all duration-700 ${pdfUrl ? "group-hover:opacity-95 group-hover:scale-110" : ""}`}
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

                  {pdfUrl && (
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                      <ExternalLink
                        size={12}
                        className="text-white"
                      />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3
                    className={`font-semibold text-foreground mb-2 leading-snug transition-colors duration-200 ${pdfUrl ? "group-hover:text-accent" : ""}`}
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
              </CardWrapper>
            </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}