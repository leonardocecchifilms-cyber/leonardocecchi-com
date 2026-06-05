"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

const studios = [
  { name: "Disney", style: { letterSpacing: "0.28em", fontSize: "0.68rem", fontWeight: 500 } },
  { name: "HBO Max", style: { letterSpacing: "0.18em", fontSize: "0.68rem", fontWeight: 400 } },
  { name: "Lionsgate", style: { letterSpacing: "0.22em", fontSize: "0.68rem", fontWeight: 400 } },
  { name: "Hulu", style: { letterSpacing: "0.28em", fontSize: "0.68rem", fontWeight: 500 } },
  { name: "FX", style: { letterSpacing: "0.35em", fontSize: "0.68rem", fontWeight: 500 } },
  { name: "Prime Video", style: { letterSpacing: "0.18em", fontSize: "0.68rem", fontWeight: 400 } },
];

export default function Studios() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();
  const tr = t[lang].studios;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #1c1916",
        borderBottom: "1px solid #1c1916",
        padding: "2.5rem clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          transition: "opacity 0.8s ease",
          opacity: visible ? 1 : 0,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.55rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#6b5f52",
            margin: 0,
          }}
        >
          {tr.label}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0 3.5rem",
            rowGap: "1.25rem",
          }}
        >
          {studios.map((studio, i) => (
            <span
              key={studio.name}
              style={{
                fontFamily: "var(--font-inter)",
                textTransform: "uppercase",
                color: "rgba(240,235,227,0.45)",
                transition: "color 0.3s ease",
                cursor: "default",
                whiteSpace: "nowrap",
                ...studio.style,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,235,227,0.85)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,235,227,0.45)"; }}
            >
              {studio.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
