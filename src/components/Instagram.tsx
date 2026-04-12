"use client";

import { useEffect, useRef, useState } from "react";

export default function Instagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="instagram"
      style={{
        background: "#0a0a0a",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem)",
        textAlign: "center",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
        }}
      >
        {/* Instagram icon */}
        <div style={{ marginBottom: "1.5rem" }}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c9a96e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ margin: "0 auto" }}
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="#c9a96e" stroke="none" />
          </svg>
        </div>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#c9a96e",
            marginBottom: "1rem",
          }}
        >
          Follow Along
        </p>

        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.04em",
            color: "#f0ebe3",
            margin: "0 0 1rem",
            lineHeight: 1.1,
          }}
        >
          Behind the Scenes
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "clamp(0.82rem, 1.2vw, 0.9rem)",
            lineHeight: 1.8,
            color: "#9a8f82",
            margin: "0 0 2.5rem",
          }}
        >
          Life on set, behind the camera, and everything in between.
          <br />
          Follow for updates on current projects and daily inspiration.
        </p>

        <a
          href="https://www.instagram.com/leonardodcecchi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.85rem 2.5rem",
            background: "#c9a96e",
            color: "#0a0a0a",
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#dfc18e";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#c9a96e";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
          @leonardodcecchi
        </a>

        {/* Decorative line */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#2e2924" }} />
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "#3a3228",
            }}
          >
            leonardocecchi.com
          </span>
          <div style={{ flex: 1, height: "1px", background: "#2e2924" }} />
        </div>
      </div>
    </section>
  );
}
