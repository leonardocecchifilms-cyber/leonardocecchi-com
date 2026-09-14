"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function OriginalWorkIndexContent() {
  const { lang } = useLang();
  const tr = t[lang].originalWork;

  const sectionLabel: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontSize: "0.65rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "#c9a96e",
    margin: "0 0 0.5rem",
  };

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0a0a0a",
          padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem) clamp(2.5rem, 5vw, 3.5rem)",
          borderBottom: "1px solid #2e2924",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={sectionLabel}>{tr.label}</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              letterSpacing: "0.03em",
              color: "#f0ebe3",
              margin: "0 0 1.5rem",
            }}
          >
            {tr.heading}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)",
              lineHeight: 1.9,
              color: "#9a8f82",
              margin: 0,
              maxWidth: "620px",
            }}
          >
            {tr.intro}
          </p>
        </div>
      </section>

      {/* ── PROJECT CARDS ────────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem) clamp(5rem, 9vw, 7rem)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2.5rem",
          }}
          className="ow-grid"
        >
          {tr.cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
              className="ow-card"
            >
              <div
                style={{
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                  border: "1px solid #2e2924",
                  borderBottom: "none",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: card.imagePosition ?? "center",
                    transition: "transform 0.5s ease",
                  }}
                  className="ow-card-img"
                />
              </div>
              <div style={{ border: "1px solid #2e2924", borderTop: "none", padding: "2rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#c9a96e",
                    margin: "0 0 0.6rem",
                  }}
                >
                  {card.tag}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 400,
                    fontSize: "1.6rem",
                    color: "#f0ebe3",
                    margin: "0 0 1rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {card.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "0.82rem",
                    lineHeight: 1.8,
                    color: "#9a8f82",
                    margin: "0 0 1.5rem",
                  }}
                >
                  {card.blurb}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#dfc18e",
                  }}
                >
                  {card.cta} &nbsp;→
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .ow-card:hover .ow-card-img { transform: scale(1.04); }
        @media (max-width: 768px) {
          .ow-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
