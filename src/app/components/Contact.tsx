import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA first.");
      return;
    }

    // Nanti di sini bisa diganti EmailJS / Formspree

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3500);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setCaptchaToken("null");
  };

  return (
    <section
      id="contact"
      className="relative py-15 bg-[#FCF8F0] dark:bg-[#111827] transition-colors duration-700 overflow-hidden"
    >
      {/* Soft transition from Certifications */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-[#FBF8F2] to-[#FCF8F0] dark:from-[#0F172A] dark:via-[#162033] dark:to-[#111827] transition-all duration-700" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Let's Connect"
          subtitle="Have an interesting project or want to chat? I'm always open to new conversations."
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* LEFT */}
          <FadeUp>
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "ilfanurfatimah.work@gmail.com",
                  href: "mailto:ilfanurfatimah.work@gmail.com",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/ilfa99",
                  href: "https://github.com/ilfa99",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "www.linkedin.com/in/ilfa-nur-fatimah",
                  href: "https://www.linkedin.com/in/ilfa-nur-fatimah/",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-accent"
                  style={{
                    background: document.documentElement.classList.contains("dark")
                      ? "#1E293B"
                      : "#FFFFFF",

                    border: document.documentElement.classList.contains("dark")
                      ? "1px solid #334155"
                      : "1px solid #E8DCC7",

                    boxShadow: document.documentElement.classList.contains("dark")
                      ? "0 10px 30px rgba(0,0,0,.35)"
                      : "0 8px 24px rgba(183,163,126,.08)"
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;

                    el.style.transform = "translateY(-4px)";
                    el.style.borderColor = "var(--accent)";
                    el.style.boxShadow =
                      "0 18px 40px rgba(190,160,100,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;

                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "#E8DCC7";
                    el.style.boxShadow =
                      "0 8px 24px rgba(183,163,126,0.08)";
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
                    <Icon size={18} className="text-accent" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      {label}
                    </p>

                    <p className="text-sm font-medium text-foreground">
                      {value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-muted-foreground group-hover:text-accent group-hover:scale-125 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </FadeUp>

          {/* RIGHT */}
          <FadeUp delay={0.1}>
            <form
              onSubmit={handleSend}
              className="
            rounded-2xl
            p-7
            space-y-4
            bg-white
            dark:bg-slate-800
            border
            border-[#E8DCC7]
            dark:border-slate-700
            shadow-lg
            transition-all
            duration-500
            "
            >
              <h3
                className="font-semibold text-foreground mb-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.2rem",
                }}
              >
                Send a Message
              </h3>

              {[
                {
                  key: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Your full name",
                },
                {
                  key: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "email@example.com",
                },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label
                    className="block text-sm font-medium text-foreground mb-1.5"
                    htmlFor={key}
                  >
                    {label}
                  </label>

                  <input
                    id={key}
                    type={type}
                    placeholder={placeholder}
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    style={{
                      background: document.documentElement.classList.contains("dark")
                        ? "#0F172A"
                        : "#FFFDF9",

                      border: document.documentElement.classList.contains("dark")
                        ? "1px solid #334155"
                        : "1px solid #E8DCC7",

                      color: document.documentElement.classList.contains("dark")
                        ? "#F8FAFC"
                        : "#111827",
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-sm font-medium text-foreground mb-1.5"
                  htmlFor="message"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  required
                  className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        resize-none
                        text-sm
                    leading-relaxed
                    text-foreground
                    placeholder:text-slate-400
                    transition-all
                    duration-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-accent
                    focus:border-accent
                  "
                  style={{
                    background: document.documentElement.classList.contains("dark")
                      ? "#0F172A"
                      : "#FFFDF9",

                    border: document.documentElement.classList.contains("dark")
                      ? "1px solid #334155"
                      : "1px solid #E8DCC7",

                    color: document.documentElement.classList.contains("dark")
                      ? "#F8FAFC"
                      : "#111827",
                  }}
                />
              </div>

              {/* CAPTCHA */}
              <div className="flex justify-center py-2">
                <ReCAPTCHA
                  sitekey="6LdKFUgtAAAAAC6etCsISETZva54IDaLUpmDlFDJ"
                  onChange={(token: string | null) => setCaptchaToken(token ?? "null")}
                />
              </div>

              <button
                type="submit"
                disabled={sent || !captchaToken}
                className="w-full flex items-center justify-center gap-2 py-3 h-12 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>
                    Message Sent ✓
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}