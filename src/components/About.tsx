"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const bio = [
  "Leonardo Cecchi is an Italian-American actor working across film, television, and theater, known for bringing emotional depth and nuance to complex, character-driven roles. From leading Disney's Alex & Co. to portraying a resentful teenager in HBO Max's A Christmas Mystery, and the visionary engineer Gian Paolo Dallara in Lamborghini: The Man Behind the Legend, he continues to build a diverse and compelling body of work.",
  "Born in Minneapolis to an Italian father and an American mother, Leonardo was raised between cultures and discovered his passion for performance at a young age. He trained in stage acting, diction, jazz dance, and musical theater at a performing arts high school in Turin, where he was discovered by a Disney casting director — launching him into four seasons of Alex & Co., two Disney Channel films, and a successful publishing run with two books.",
  "After relocating to Los Angeles in 2017, Leonardo continued to refine his craft, training at The Chubbuck Acting Studio and the Sanford Meisner Center. He also wrote, directed, and starred in the award-winning short film Louie's Emotions, earning Best Actor at the LA Top Shorts Film Festival. He is the founder of Still Moving Pictures, through which he develops and produces original film projects.",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="about"
      ref={ref}
      style={{
        background: "#0f0d0b",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
        }}
        className="about-grid"
      >
        {/* Portrait */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
          <div
            style={{
              position: "relative",
              width: "clamp(180px, 25vw, 280px)",
              aspectRatio: "1",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid #2e2924",
              boxShadow: "0 0 60px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src="/images/portrait.jpg"
              alt="Leonardo Cecchi portrait"
              fill
              quality={90}
              style={{ objectFit: "cover", objectPosition: "center top", transform: "scale(0.78)", transformOrigin: "center top" }}
              sizes="(max-width: 768px) 60vw, 280px"
            />
          </div>
          {/* Represented by */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7a6f64",
                marginBottom: "0.75rem",
              }}
            >
              Represented by
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#b0a497", margin: "0 0 0.2rem" }}>
              The Savage Agency
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#b0a497", margin: 0 }}>
              Rain Management
            </p>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a96e",
              marginBottom: "1.5rem",
            }}
          >
            About
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "0.04em",
              color: "#f0ebe3",
              margin: "0 0 2rem",
              lineHeight: 1.1,
            }}
          >
            Film &amp; Stage Actor
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {bio.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "clamp(0.82rem, 1.2vw, 0.9rem)",
                  lineHeight: 1.85,
                  color: "#9a8f82",
                  margin: 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Divider + Stats */}
          <div
            style={{
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid #2e2924",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {[
              { num: "7", label: "Feature Films" },
              { num: "4", label: "TV Credits" },
              { num: "3", label: "Stage Roles" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "#c9a96e",
                    margin: "0 0 0.25rem",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#7a6f64",
                    margin: 0,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
