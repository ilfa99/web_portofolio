import React, { useState } from "react";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FadeUp } from "./FadeUp";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 bg-secondary transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="06 / Contact"
          title="Let's Connect"
          subtitle="Have an interesting project or want to chat? I'm always open to new conversations."
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left — contact info */}
          <FadeUp>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "ilfa.fatimah@email.com", href: "mailto:ilfa.fatimah@email.com" },
                { icon: Github, label: "GitHub", value: "github.com/ilfafatimah", href: "#" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ilfafatimah", href: "#" },
                { icon: Instagram, label: "Instagram", value: "@ilfafatimah_", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={`Open ${label}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                  <ArrowUpRight size={14} className="ml-auto text-muted-foreground group-hover:text-accent group-hover:scale-125 transition-all duration-300" />
                </a>
              ))}
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.1}>
            <form onSubmit={handleSend} className="bg-card border border-border rounded-2xl p-7 space-y-4 shadow-sm">
              <h3 className="font-semibold text-foreground mb-5" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem" }}>
                Send a Message
              </h3>

              {[
                { key: "name", label: "Name", type: "text", placeholder: "Your full name" },
                { key: "email", label: "Email", type: "email", placeholder: "email@example.com" },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor={key}>{label}</label>
                  <input
                    id={key}
                    type={type}
                    placeholder={placeholder}
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }))}
                    required
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  required
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full flex items-center justify-center gap-2 py-3 h-12 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:hover:scale-100"
              >
                {sent ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message
                    <Send size={14} className="ml-1" />
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
