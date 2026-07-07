import React from "react";
import { FadeUp } from "./FadeUp";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <FadeUp className="text-center mb-12">
      <h2
        className="text-foreground mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.2rem, 4vw, 3rem)",
          fontWeight: 500,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          style={{
            fontSize: "0.95rem",
            fontWeight: 300,
          }}
        >
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}