import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, Database, Network, Cpu, Github, Linkedin, Instagram, Mail } from "lucide-react";
import heroPhoto from "../../assets/ilfasatu2.jpg";

const GridDots = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10 transition-opacity duration-500">
    <svg width="100%" height="100%">
      <defs>
        <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>
);

const roles = [
  "Fullstack Developer",
  "GRC Enthusiast",
  "Cybersecurity Enthusiast",
  "Problem Solving",
  "Informatics Student",
  "Backend Developer",
  "Designing digital systems and solutions to solve real-world problems.",
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#FAF9F6] dark:bg-[#0F172A] transition-colors duration-500"
    >
      <GridDots />

      {/* Decorative tech elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating circles */}
        <motion.div
          className="absolute top-24 left-10 w-64 h-64 rounded-full border border-accent/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-32 left-16 w-44 h-44 rounded-full border border-accent/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        {/* Corner accents */}
        <div className="absolute top-1/3 left-6 flex flex-col gap-1.5 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-1.5">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-1 h-1 rounded-full bg-accent" />
              ))}
            </div>
          ))}
        </div>
        {/* Tech icons floating */}
        <motion.div
          className="absolute top-28 right-1/3 text-accent/10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-1/4 text-accent/10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Network size={32} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-8 text-accent/10"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Cpu size={28} />
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center pt-10 pb-24">
        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-mono tracking-wider">Portofolio</span>
            </div>

            <h1
              className="text-foreground leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 500 }}
            >
              Ilfa Nur<br />
              <span className="text-accent">Fatimah</span>
            </h1>

            <div className="h-8 mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: "1.25rem", fontWeight: 400 }}
                >
                  {roles[currentRoleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-80 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center justify-center gap-2 px-6 h-12 rounded-full border border-border text-foreground text-sm font-medium hover:border-accent hover:text-accent hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                Contact Me
              </button>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 mt-10 pt-8 border-t border-border">
              {
                [
                  { icon: Github, href: "https://github.com/ilfa99", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ilfa-nur-fatimah/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:ilfanurfatimah.work@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <Icon size={15} />
                  </a>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/20 animate-spin" style={{ animationDuration: "30s" }} />
            <div className="absolute -inset-8 rounded-full border border-accent/10" />

            {/* Photo circle container */}
            <div
              className="relative w-75 h-75 md:w-[25rem] md:h-[25rem] rounded-full flex items-center justify-center shadow-2xl bg-white dark:bg-[#1E293B] transition-colors duration-500"
              style={{ boxShadow: "0 0 0 3px var(--accent)" }}
            >
              <div className="w-[92%] h-[92%] rounded-full overflow-hidden border-4 border-white dark:border-[#1E293B] transition-colors duration-500">
                <img
                  src={heroPhoto}
                  alt="Ilfa Nur Fatimah"
                  className="w-full h-full object-cover scale-[1.28]"
                  style={{ objectPosition: "48% 20%" }}
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-[#1E293B] border border-[#E8DCC7] dark:border-slate-700 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg whitespace-nowrap transition-colors duration-500">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-foreground">Available for Intern and Work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
