"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

// ─── EmailJS credentials — fill these in before deploying: ──────────────────
// EMAILJS_PUBLIC_KEY:  "your_public_key_here"
// EMAILJS_SERVICE_ID:  "your_service_id_here"
// EMAILJS_TEMPLATE_ID: "your_template_id_here"
const EMAILJS_PUBLIC_KEY  = "your_public_key_here";
const EMAILJS_SERVICE_ID  = "your_service_id_here";
const EMAILJS_TEMPLATE_ID = "your_template_id_here";
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const ref     = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [status,  setStatus ] = useState<"idle" | "success" | "error">("idle");
  const { lang } = useLang();
  const tr  = t[lang].contact;
  const tri = t[lang].inquiries;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setStatus("idle");
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => setStatus("error"))
      .finally(() => setSending(false));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0a0a0a",
    border: "1px solid #2e2924",
    color: "#f0ebe3",
    fontFamily: "var(--font-inter)",
    fontSize: "0.82rem",
    fontWeight: 300,
    padding: "0.85rem 1rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
    display: "block",
  };

  return (
    <section
      id="contact"
      style={{
        background: "#0f0d0b",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
        }}
      >
        {/* ── Section heading ── */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#c9a96e",
            marginBottom: "0.5rem",
          }}
        >
          {tr.label}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            letterSpacing: "0.04em",
            color: "#f0ebe3",
            margin: "0 0 3.5rem",
          }}
        >
          {tr.heading}
        </h2>

        {/* ── Rep cards ── */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}
          className="contact-grid"
        >
          {/* Savage Agency */}
          <div
            style={{ padding: "2.5rem", border: "1px solid #2e2924", background: "#0a0a0a", transition: "border-color 0.3s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4a3e30")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2e2924")}
          >
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", margin: "0 0 0.75rem" }}>
              {tr.agencyLabel}
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", fontWeight: 400, color: "#f0ebe3", margin: "0 0 1.25rem" }}>
              The Savage Agency
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="mailto:salex@thesavageagency.net" style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 300, color: "#9a8f82", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}>
                salex@thesavageagency.net
              </a>
              <a href="mailto:msmith@thesavageagency.net" style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 300, color: "#9a8f82", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}>
                msmith@thesavageagency.net
              </a>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 300, color: "#7a6f64", marginTop: "0.25rem" }}>
                +1 323 461 8316
              </span>
            </div>
          </div>

          {/* Rain Management */}
          <div
            style={{ padding: "2.5rem", border: "1px solid #2e2924", background: "#0a0a0a", transition: "border-color 0.3s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4a3e30")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2e2924")}
          >
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", margin: "0 0 0.75rem" }}>
              {tr.managementLabel}
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", fontWeight: 400, color: "#f0ebe3", margin: "0 0 1.25rem" }}>
              Rain Management
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="mailto:jbaruch@rainla.com" style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 300, color: "#9a8f82", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}>
                jbaruch@rainla.com
              </a>
              <a href="mailto:bslobodin@rainla.com" style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 300, color: "#9a8f82", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}>
                bslobodin@rainla.com
              </a>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 300, color: "#7a6f64", marginTop: "0.25rem" }}>
                +1 914 906 6127
              </span>
            </div>
          </div>

          {/* Do Cinema — Italy */}
          <div
            style={{ padding: "2.5rem", border: "1px solid #2e2924", background: "#0a0a0a", transition: "border-color 0.3s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4a3e30")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2e2924")}
          >
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", margin: "0 0 0.75rem" }}>
              {tr.italyLabel}
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", fontWeight: 400, color: "#f0ebe3", margin: "0 0 1.25rem" }}>
              <a
                href="https://www.docinema.agency/projects/leonardo-cecchi/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#f0ebe3")}
              >
                Do Cinema
              </a>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="mailto:marcella@docinema.it" style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 300, color: "#9a8f82", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}>
                marcella@docinema.it
              </a>
              <a href="mailto:daniele@docinema.it" style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 300, color: "#9a8f82", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}>
                daniele@docinema.it
              </a>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 300, color: "#7a6f64", marginTop: "0.25rem" }}>
                +39 06 83526605
              </span>
            </div>
          </div>
        </div>

        {/* ── Business Inquiries / Contact Form ── */}
        <div
          id="inquiries"
          style={{
            marginTop: "4rem",
            paddingTop: "4rem",
            borderTop: "1px solid #2e2924",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a96e",
                margin: "0 0 1rem",
              }}
            >
              {tri.label}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "0.04em",
                color: "#f0ebe3",
                margin: "0 0 1rem",
                lineHeight: 1.1,
              }}
            >
              {tri.heading}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "clamp(0.82rem, 1.2vw, 0.88rem)",
                lineHeight: 1.8,
                color: "#9a8f82",
                margin: "0 0 2.5rem",
              }}
            >
              {tri.body}
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#4a3e30")}
                onBlur={(e)  => (e.currentTarget.style.borderColor = "#2e2924")}
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#4a3e30")}
                onBlur={(e)  => (e.currentTarget.style.borderColor = "#2e2924")}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#4a3e30")}
                onBlur={(e)  => (e.currentTarget.style.borderColor = "#2e2924")}
              />
            </div>

            <div style={{ marginTop: "0.5rem" }}>
              <button
                type="submit"
                disabled={sending}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem 2.5rem",
                  background: sending ? "#8a6f46" : "#c9a96e",
                  color: "#0a0a0a",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: sending ? "default" : "pointer",
                  transition: "background 0.3s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!sending) {
                    (e.currentTarget as HTMLElement).style.background = "#dfc18e";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = sending ? "#8a6f46" : "#c9a96e";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status === "success" && (
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  color: "#c9a96e",
                  margin: "0.5rem 0 0",
                }}
              >
                Message sent. Thank you for reaching out.
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  color: "#9a8f82",
                  margin: "0.5rem 0 0",
                }}
              >
                Something went wrong. Please try again or email directly at{" "}
                <a
                  href="mailto:LeonardoCecchifilms@gmail.com"
                  style={{ color: "#c9a96e", textDecoration: "none" }}
                >
                  LeonardoCecchifilms@gmail.com
                </a>
                .
              </p>
            )}
          </form>
        </div>

        {/* ── Footer bar ── */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid #2e2924",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "0.78rem", color: "#7a6f64", margin: 0 }}>
            © {new Date().getFullYear()} Leonardo Cecchi. {tr.copyright}
          </p>

          <a
            href="https://www.instagram.com/leonardodcecchi/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-inter)",
              fontSize: "0.7rem",
              fontWeight: 300,
              letterSpacing: "0.15em",
              color: "#7a6f64",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c9a96e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7a6f64")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            @leonardodcecchi
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        ::placeholder { color: #4a3e30; opacity: 1; }
      `}</style>
    </section>
  );
}
