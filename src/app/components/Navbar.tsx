import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data";

type Theme = "light" | "dark";

interface NavbarProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  activeSection: string;
}

export function Navbar({ theme, setTheme, activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/95 backdrop-blur-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] py-0"
          : "bg-background/80 backdrop-blur-xl py-1"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between transition-all duration-500">

          {/* Logo */}

          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-accent rounded-full p-1 -ml-1"
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-md">
              <span className="text-accent-foreground font-bold text-sm">
                I
              </span>
            </div>

            <span
              className="font-semibold text-foreground transition-colors group-hover:text-accent"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.05rem",
              }}
            >
              Ilfa Nur Fatimah
            </span>
          </button>

          {/* Desktop */}

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.toLowerCase();

              return (
                <div
                  key={link}
                  className="relative"
                >
                  <button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className={`relative z-10 px-4 py-2 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${isActive
                      ? "text-accent font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                      }`}
                  >
                    {link}
                  </button>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 shadow-[0_0_15px_rgba(212,175,55,0.12)]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 35,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3">

            {/* Theme */}

            <button
              onClick={() =>
                setTheme((t) => (t === "light" ? "dark" : "light"))
              }
              className="w-10 h-10 rounded-full border border-[#D4AF37]/25 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={16} />
              ) : (
                <Sun size={16} />
              )}
            </button>

            {/* Contact */}

            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex items-center justify-center gap-2 px-6 h-10 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              Contact
            </button>

            {/* Mobile */}

            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden w-10 h-10 rounded-full border border-[#D4AF37]/25 flex items-center justify-center text-muted-foreground hover:border-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Toggle mobile menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 md:hidden pt-16"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1 + i * 0.06,
                }}
                onClick={() => scrollTo(link.toLowerCase())}
                className={`text-3xl transition-colors rounded-lg px-4 py-2 ${activeSection === link.toLowerCase()
                  ? "text-accent font-semibold"
                  : "text-foreground hover:text-accent"
                  }`}
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}