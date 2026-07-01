import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";
import { CERTIFICATES } from "../data";

export function Certificates() {
  return (
    <section id="certificates" className="py-28 bg-secondary transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Certificates"
          title="Certifications"
          subtitle="Proof of my commitment to continuous learning and skill development."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <FadeUp key={cert.name} delay={i * 0.07}>
              <div
                className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-lg hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                tabIndex={0}
                aria-label={`View certificate: ${cert.name}`}
              >
                {/* Thumbnail */}
                <div className="relative h-40 overflow-hidden bg-muted">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-8 h-8 rounded-full bg-accent/90 flex items-center justify-center">
                      <Award size={14} className="text-accent-foreground" />
                    </div>
                  </div>
                  <button className="absolute top-3 right-3 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ExternalLink size={11} className="text-white" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-sm mb-1 leading-snug group-hover:text-accent transition-colors duration-200">{cert.name}</h3>
                  <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
