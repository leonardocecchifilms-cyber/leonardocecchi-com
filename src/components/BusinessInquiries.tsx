"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function BusinessInquiries() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();
  const tr = t[lang].inquiries;

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
      id="inquiries"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #2e2924",
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
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#c9a96e",
            marginBottom: "1rem",
            margin: "0 0 1rem",
          }}
        >
          {tr.label}
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
          {tr.heading}
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
          {tr.body}
        </p>

        <a
          href="mailto:LeonardoCecchifilms@gmail.com"
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
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          {tr.buttonLabel}
        </a>
      </div>
    </section>
  );
}
