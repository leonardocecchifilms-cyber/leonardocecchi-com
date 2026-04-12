"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
          Get in Touch
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
          Contact
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
          }}
          className="contact-grid"
        >
          {/* Savage Agency */}
          <div
            style={{
              padding: "2.5rem",
              border: "1px solid #2e2924",
              background: "#0a0a0a",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4a3e30")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2e2924")}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a96e",
                margin: "0 0 0.75rem",
              }}
            >
              Talent Agency
            </p>
            <h3
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.4rem",
                fontWeight: 400,
                color: "#f0ebe3",
                margin: "0 0 1.25rem",
              }}
            >
              The Savage Agency
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href="mailto:salex@thesavageagency.net"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "#9a8f82",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}
              >
                salex@thesavageagency.net
              </a>
              <a
                href="mailto:msmith@thesavageagency.net"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "#9a8f82",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}
              >
                msmith@thesavageagency.net
              </a>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "#7a6f64",
                  marginTop: "0.25rem",
                }}
              >
                323 461 8316
              </span>
            </div>
          </div>

          {/* Rain Management */}
          <div
            style={{
              padding: "2.5rem",
              border: "1px solid #2e2924",
              background: "#0a0a0a",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#4a3e30")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2e2924")}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a96e",
                margin: "0 0 0.75rem",
              }}
            >
              Management
            </p>
            <h3
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.4rem",
                fontWeight: 400,
                color: "#f0ebe3",
                margin: "0 0 1.25rem",
              }}
            >
              Rain Management
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href="mailto:jbaruch@rainla.com"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "#9a8f82",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}
              >
                jbaruch@rainla.com
              </a>
              <a
                href="mailto:bslobodin@rainla.com"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "#9a8f82",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a8f82")}
              >
                bslobodin@rainla.com
              </a>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "#7a6f64",
                  marginTop: "0.25rem",
                }}
              >
                914 906 6127
              </span>
            </div>
          </div>
        </div>

        {/* Social + Instagram */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid #2e2924",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "0.78rem",
              color: "#7a6f64",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Leonardo Cecchi. All rights reserved.
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
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
