"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

function TrophyIcon({ dimmed = false }: { dimmed?: boolean }) {
  const color = dimmed ? "rgba(201,169,110,0.45)" : "#c9a96e";
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4a2 2 0 01-2-2V5h4" />
      <path d="M18 9h2a2 2 0 002-2V5h-4" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <path d="M6 5h12v7a6 6 0 01-12 0V5z" />
    </svg>
  );
}

function PressIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7a6f64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2V9" />
      <path d="M18 14H12M18 10H12M18 18H12" />
    </svg>
  );
}

const cardBase = {
  padding: "2rem",
  display: "flex" as const,
  flexDirection: "column" as const,
  gap: "1rem",
  minHeight: "220px",
};

export default function PressAwards() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();
  const tr = t[lang].pressAwards;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "#0a0a0a",
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
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        {/* Header */}
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "0.5rem" }}>
          {tr.label}
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.04em", color: "#f0ebe3", margin: "0 0 3rem" }}>
          {tr.heading}
        </h2>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }} className="press-grid">

          {/* ── Card 1: Best Actor award ── */}
          <div style={{ ...cardBase, border: "1px solid #c9a96e", background: "linear-gradient(135deg, rgba(201,169,110,0.06) 0%, rgba(10,10,10,0) 100%)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <TrophyIcon />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e" }}>
                {tr.awardBadge}
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.35rem", fontWeight: 400, letterSpacing: "0.04em", color: "#f0ebe3", margin: "0 0 0.35rem", lineHeight: 1.2 }}>
                {tr.bestActor}
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 300, color: "#b0a497", margin: "0 0 0.2rem", letterSpacing: "0.06em" }}>
                {tr.festival}
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "0.82rem", fontWeight: 300, color: "#7a6f64", margin: 0 }}>
                {tr.film}
              </p>
            </div>
          </div>

          {/* ── Card 2: Best Original Song nomination ── */}
          <div style={{ ...cardBase, border: "1px solid rgba(201,169,110,0.3)", background: "linear-gradient(135deg, rgba(201,169,110,0.03) 0%, rgba(10,10,10,0) 100%)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <TrophyIcon dimmed />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(201,169,110,0.55)" }}>
                {tr.nominationBadge}
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.35rem", fontWeight: 400, letterSpacing: "0.04em", color: "#f0ebe3", margin: "0 0 0.35rem", lineHeight: 1.2 }}>
                Best Original Song
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 300, color: "#b0a497", margin: "0 0 0.2rem", letterSpacing: "0.06em" }}>
                Disney Film
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "0.82rem", fontWeight: 300, color: "#7a6f64", margin: 0 }}>
                How to Grow Up Despite Your Parents
              </p>
            </div>
          </div>

          {/* ── Card 3: Voyage LA press ── */}
          <div style={{ ...cardBase, border: "1px solid #2e2924", background: "#0f0d0b" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <PressIcon />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#7a6f64" }}>
                Press
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 400, letterSpacing: "0.04em", color: "#f0ebe3", margin: "0 0 0.35rem", lineHeight: 1.25 }}>
                Daily Inspiration: Meet Leonardo Cecchi
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 300, color: "#b0a497", margin: 0, letterSpacing: "0.06em" }}>
                Voyage LA Magazine
              </p>
            </div>
            <div style={{ borderTop: "1px solid #1c1916", paddingTop: "0.75rem" }}>
              <a
                href="https://voyagela.com/interview/daily-inspiration-meet-leonardo-cecchi/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#7a6f64",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7a6f64")}
              >
                Read Article
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .press-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
