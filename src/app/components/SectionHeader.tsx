import React from "react";
import { FadeUp } from "./FadeUp";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <FadeUp className="text-center mb-16">
      {label && (
        <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3">
          {label}
        </p>
      )}

      <h2
        className="text-foreground mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 500,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: "0.95rem" }}
        >
          {subtitle}
        </p>
      )}

      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="h-px w-12 bg-border" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <div className="h-px w-12 bg-border" />
      </div>
    </FadeUp>
  );
}