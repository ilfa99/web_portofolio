import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [isSending, setIsSending] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA first.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setSent(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      recaptchaRef.current?.reset();
      setCaptchaToken("");

      setTimeout(() => {
        setSent(false);
      }, 3500);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-15 bg-[#FCF8F0] dark:bg-[#111827] transition-colors duration-700 overflow-hidden"
    >

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
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    boxShadow: "var(--card-shadow)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
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
              className="rounded-2xl p-7 space-y-4 shadow-lg transition-all duration-500"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
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

              <div>
                <label
                  className="block text-sm font-medium text-foreground mb-1.5"
                  htmlFor="name"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm leading-relaxed placeholder:text-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  style={{
                    background: "var(--input-field-bg)",
                    border: "1px solid var(--input-field-border)",
                    color: "var(--input-field-color)",
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-foreground mb-1.5"
                  htmlFor="email"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm leading-relaxed placeholder:text-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  style={{
                    background: "var(--input-field-bg)",
                    border: "1px solid var(--input-field-border)",
                    color: "var(--input-field-color)",
                  }}
                />
              </div>

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
                  className="w-full px-4 py-3 rounded-xl resize-none text-sm leading-relaxed placeholder:text-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  style={{
                    background: "var(--input-field-bg)",
                    border: "1px solid var(--input-field-border)",
                    color: "var(--input-field-color)",
                  }}
                />
              </div>

              {/* CAPTCHA */}
              <div className="flex justify-center py-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LdKFUgtAAAAAC6etCsISETZva54IDaLUpmDlFDJ"
                  onChange={(token: string | null) => setCaptchaToken(token ?? "")}
                />
              </div>

              <button
                type="submit"
                disabled={
                  sent ||
                  isSending ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message ||
                  !captchaToken
                }
                className="w-full flex items-center justify-center gap-2 py-3 h-12 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>Message Sent ✓</>
                ) : isSending ? (
                  <>Sending...</>
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