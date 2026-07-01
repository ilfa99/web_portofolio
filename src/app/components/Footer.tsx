import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">I</span>
            </div>
            <div>
              <p className="font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Ilfa Nur Fatimah</p>
              <p className="text-primary-foreground/60 text-xs">Computer Science Student</p>
            </div>
          </div>

          <p className="text-primary-foreground/50 text-xs text-center">
            © {new Date().getFullYear()} Ilfa Nur Fatimah · Designed with care
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Mail, href: "mailto:ilfa.fatimah@email.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
